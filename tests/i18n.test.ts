import { test } from "node:test";
import assert from "node:assert/strict";
import { dictionaries, locales, resolveLocale } from "../lib/i18n.ts";
import { getScreenshots, media } from "../lib/media.ts";
import { existsSync } from "node:fs";
import path from "node:path";

test("all eleven app locales have complete, nonempty translations", () => {
  assert.equal(locales.length, 11);
  for (const [locale] of locales) {
    assert.deepEqual(Object.keys(dictionaries[locale]), Object.keys(dictionaries.en));
    for (const value of Object.values(dictionaries[locale])) assert.ok(value.trim());
    if (locale !== "en") {
      for (const [key, value] of Object.entries(dictionaries[locale])) {
        assert.notEqual(value, dictionaries.en[key as keyof typeof dictionaries.en], `${locale}.${key} is untranslated`);
      }
    }
  }
});
test("language negotiation handles browser regions and original app locale names", () => {
  const cases = { "en-US": "en", "uk-UA": "uk", "pt_br": "pt-BR", "pt-PT": "pt-BR", "zh_cn": "zh-CN", "zh-Hans-CN": "zh-CN", "DE-at": "de", "ja-JP": "ja", "ko-KR": "ko", "ar": null, "": null };
  for (const [input, expected] of Object.entries(cases)) assert.equal(resolveLocale(input), expected);
  assert.equal(resolveLocale(null), null);
});
test("all required DoxExplorer media is bundled", () => {
  for (const file of [media.doxIcon, media.doxPoster, media.doxTrailer]) {
    assert.ok(existsSync(path.join(process.cwd(), "public", file)), `Missing ${file}`);
  }
});

test("each locale uses its supplied screenshot folder in numeric order", () => {
  const expected = { en: ["us", 9], uk: ["Ua", 9], de: ["de", 9], fr: ["fr", 9], es: ["es", 8], it: ["it", 9], "pt-BR": ["pt", 9], ja: ["jp", 8], ko: ["us", 9], "zh-CN": ["cn", 8], ru: ["Ru", 9] } as const;
  for (const [locale] of locales) {
    const screenshots = getScreenshots(locale);
    const [folder, count] = expected[locale];
    assert.equal(screenshots.length, count, locale);
    screenshots.forEach((screenshot, index) => {
      assert.equal(screenshot.number, index + 1);
      assert.equal(screenshot.src, `/media/doxexplorer/screenshots/${folder}/Screenshot${index + 1}.png`);
      assert.ok(screenshot.caption.trim());
      assert.ok(screenshot.width > 0 && screenshot.height > 0);
      assert.ok(existsSync(path.join(process.cwd(), "public", screenshot.src)), screenshot.src);
    });
  }
});
