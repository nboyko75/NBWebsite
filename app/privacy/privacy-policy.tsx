"use client";

import { useEffect, useState } from "react";
import { dictionaries, locales, resolveLocale, type Locale } from "../../lib/i18n";
import { privacyCopy, privacyEmail, privacyUpdated } from "../../lib/privacy";
import { assetUrl } from "../../lib/site-path";

export default function PrivacyPolicy() {
  const [locale, setLocale] = useState<Locale>("en");
  const copy = privacyCopy[locale];
  const shared = dictionaries[locale];
  const home = `${assetUrl("/")}?lang=${encodeURIComponent(locale)}`;

  useEffect(() => {
    function readLanguage() {
      let saved: string | null = null;
      try { saved = localStorage.getItem("portfolio-language"); } catch { /* Private browsing. */ }
      setLocale(resolveLocale(new URLSearchParams(location.search).get("lang")) ?? resolveLocale(saved) ?? navigator.languages.map(resolveLocale).find(Boolean) ?? "en");
    }
    readLanguage();
    addEventListener("popstate", readLanguage);
    return () => removeEventListener("popstate", readLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = `${copy.title} — Nick Boiko`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", copy.intro);
  }, [locale, copy]);

  function changeLocale(value: string) {
    const next = resolveLocale(value) ?? "en";
    setLocale(next);
    try { localStorage.setItem("portfolio-language", next); } catch { /* URL still persists language. */ }
    const url = new URL(location.href);
    url.searchParams.set("lang", next);
    history.replaceState(null, "", url);
  }

  return <>
    <a className="skip-link" href="#main">{shared.skip}</a>
    <header className="site-header privacy-header" id="top">
      <a href={home} className="brand"><span className="monogram">nb<span>.</span></span><span>Nick Boiko<span className="brand-dot">.</span></span></a>
      <div className="header-actions"><label className="language-select"><span className="sr-only">{shared.language}</span><select value={locale} onChange={event => changeLocale(event.target.value)} aria-label={shared.language}>{locales.map(([code, name]) => <option key={code} value={code}>{name}</option>)}</select></label></div>
    </header>
    <main id="main" className="privacy-main container">
      <a href={home} className="text-link privacy-home"><span aria-hidden="true">←</span>{copy.home}</a>
      <article aria-labelledby="privacy-title">
        <div className="privacy-intro"><h1 id="privacy-title">{copy.title}</h1><p className="privacy-date">{copy.updated}: <time dateTime={privacyUpdated}>{new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${privacyUpdated}T00:00:00Z`))}</time></p><p>{copy.intro}</p></div>
        <div className="privacy-sections">{copy.sections.map((section, index) => <section key={index} aria-labelledby={`privacy-section-${index}`}><h2 id={`privacy-section-${index}`}>{section.title}</h2><p>{section.body}</p></section>)}</div>
        <section className="privacy-contact" aria-labelledby="privacy-contact"><h2 id="privacy-contact">{copy.contact}</h2><p>{copy.contactBody}</p><a className="text-link" href={`mailto:${privacyEmail}`}>{privacyEmail}</a></section>
      </article>
    </main>
    <footer className="container privacy-footer"><span>© {new Date().getFullYear()} Nick Boiko</span><a className="text-link" href={home}>{copy.home}<span aria-hidden="true">↗</span></a></footer>
  </>;
}
