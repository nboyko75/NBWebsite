import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import { mkdirSync, existsSync } from "node:fs";
import { assetUrl, basePath } from "../lib/site-path.ts";
const testUrl = process.env.TEST_URL || `http://127.0.0.1:3000${basePath}/`;
const options = { headless: true };
if (process.env.BROWSER_PATH) options.executablePath = process.env.BROWSER_PATH;
else if (process.platform === "win32") options.channel = "msedge";
const browser = await chromium.launch(options);
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1050 }, locale: "en-US", reducedMotion: "reduce" });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  const missing = [];
  page.on("response", response => { if (response.status() >= 400) missing.push(response.url()); });
  await page.goto(testUrl, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  assert.equal(await page.evaluate(() => [...document.fonts].filter(font => font.family === "DM Sans" && font.status === "loaded").length), 4, "All local font weights loaded");
  assert.equal(await page.locator('link[rel="icon"]').getAttribute("href"), assetUrl("/icon.svg"));
  assert.equal(await page.locator("h1").innerText(), "Small tools.\nBetter workflows.");
  assert.equal(await page.locator("select option").count(), 11);
  const screenshotSets = { en: ["us", 9], uk: ["Ua", 9], de: ["de", 9], fr: ["fr", 9], es: ["es", 8], it: ["it", 9], "pt-BR": ["pt", 9], ja: ["jp", 8], ko: ["us", 9], "zh-CN": ["cn", 8], ru: ["Ru", 9] };
  for (const locale of ["uk", "de", "fr", "es", "it", "pt-BR", "ja", "ko", "zh-CN", "ru", "en"]) {
    await page.locator("select").selectOption(locale);
    await page.waitForFunction(expected => document.documentElement.lang === expected, locale);
    assert.ok(page.url().includes(`lang=${encodeURIComponent(locale)}`));
    assert.equal(await page.evaluate(() => localStorage.getItem("portfolio-language")), locale);
    assert.ok(await page.locator("h1").innerText());
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Overflow in ${locale}`);
    const [folder, count] = screenshotSets[locale];
    assert.equal(await page.locator(".gallery-thumbnails button").count(), count);
    for (let index = 0; index < count; index++) {
      await page.locator(".gallery-thumbnails button").nth(index).click();
      const screenshot = page.locator(".screenshot-button img");
      assert.equal(await screenshot.getAttribute("src"), assetUrl(`/media/doxexplorer/screenshots/${folder}/Screenshot${index + 1}.png`));
      await screenshot.evaluate(image => image.decode());
      assert.equal(await page.locator(".gallery-counter").innerText(), `${String(index + 1).padStart(2, "0")} / ${String(count).padStart(2, "0")}`);
    }
  }
  // Switching away from the ninth slide to an eight-image locale clamps safely.
  await page.locator("select").selectOption("ja");
  assert.ok((await page.locator(".screenshot-button img").getAttribute("src")).endsWith("/jp/Screenshot8.png"));
  await page.locator("select").selectOption("en");
  await page.getByRole("button", { name: "Find your files", exact: true }).click();
  assert.ok((await page.locator(".screenshot-button img").getAttribute("src")).endsWith("/us/Screenshot4.png"));
  await page.getByRole("button", { name: "Enlarge screenshot: Find your files" }).click();
  assert.equal(await page.locator("dialog").evaluate(el => el.open), true);
  await page.keyboard.press("ArrowRight");
  assert.ok((await page.locator("dialog img").getAttribute("src")).endsWith("/us/Screenshot5.png"));
  await page.keyboard.press("Escape");
  assert.equal(await page.locator("dialog").evaluate(el => el.open), false);
  assert.equal(await page.locator(".screenshot-button").evaluate(el => el === document.activeElement), true);
  await page.getByRole("button", { name: "Watch trailer", exact: true }).click();
  await page.waitForFunction(() => document.querySelector("video")?.readyState >= 1);
  const duration = await page.locator("video").evaluate(el => el.duration);
  assert.ok(duration > 448 && duration < 449);
  await page.getByRole("button", { name: "Close", exact: true }).click();
  assert.equal(await page.locator("video").count(), 0);
  assert.equal(await page.locator(".excel-presentation").count(), existsSync("public/media/excel-utils/presentation.png") ? 1 : 0);
  const dest = await page.locator('a[href="https://apps.microsoft.com/detail/9ns0crbdgtv6"]').count();
  assert.equal(dest, 1);
  await page.locator("select").selectOption("uk");
  await page.reload({ waitUntil: "networkidle" });
  assert.equal(await page.locator("html").getAttribute("lang"), "uk");
  await page.goto(testUrl, { waitUntil: "networkidle" });
  assert.equal(await page.locator("html").getAttribute("lang"), "uk");
  await page.locator("select").selectOption("en");
  await page.locator(".gallery-thumbnails").getByRole("button", { name: "Overview", exact: true }).click();
  await page.evaluate(() => scrollTo(0, 0));
  mkdirSync("artifacts", { recursive: true });
  await page.screenshot({ path: "artifacts/desktop.png", fullPage: true });
  for (const width of [375, 768]) {
    await page.setViewportSize({ width, height: 900 });
    for (const locale of ["en", "uk", "de", "fr", "es", "it", "pt-BR", "ja", "ko", "zh-CN", "ru"]) {
      await page.locator("select").selectOption(locale);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}px overflow in ${locale}`);
    }
    await page.locator("select").selectOption("en");
    await page.screenshot({ path: `artifacts/mobile-${width}.png`, fullPage: true });
  }
  assert.deepEqual(errors, [], "Browser runtime errors");
  assert.deepEqual(missing, [], "Missing assets");
  console.log("PASS: all 11 locales, language persistence, desktop/mobile layouts, gallery, dialog keyboard/focus, video metadata, and media availability. No runtime errors or missing assets.");
} finally { await browser.close(); }
