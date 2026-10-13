import { test } from "node:test";
import assert from "node:assert/strict";
import { dictionaries, locales, resolveLocale } from "../lib/i18n.ts";
import { media } from "../lib/media.ts";
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
  for (const file of [media.doxIcon, media.doxPoster, media.doxTrailer, ...media.screenshots]) {
    assert.ok(existsSync(path.join(process.cwd(), "public", file)), `Missing ${file}`);
  }
});
