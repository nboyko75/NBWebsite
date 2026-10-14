"use client";

import { useEffect, useRef, useState } from "react";
import { dictionaries, locales, resolveLocale, type Locale } from "../lib/i18n";
import { getScreenshots, media } from "../lib/media";
import { assetUrl } from "../lib/site-path";

type IconName = "arrow" | "up" | "play" | "globe" | "github" | "check" | "windows" | "close" | "expand" | "mail";
function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    up: <path d="M7 17 17 7M7 7h10v10" />,
    play: <path d="m9 5 11 7-11 7Z" />,
    globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>,
    github: <path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .1-1.5-.5-2 3-.3 6-1.5 6-6a4.7 4.7 0 0 0-1.3-3.3 4.3 4.3 0 0 0-.1-3.2s-1.2-.4-3.7 1.3a12.8 12.8 0 0 0-6.8 0C6.1 3.1 4.9 3.5 4.9 3.5a4.3 4.3 0 0 0-.1 3.2A4.7 4.7 0 0 0 3.5 10c0 4.5 3 5.7 6 6-.6.5-.6 1.4-.5 2v4" />,
    check: <path d="m5 12 4 4L19 6" />,
    windows: <><path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" /></>,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    expand: <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
  };
  return <svg className={`icon ${className}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
const STORE = "https://apps.microsoft.com/detail/9ns0crbdgtv6";
const REPO = "https://github.com/nboyko75/Excel-utils";
const PROFILE = "https://github.com/nboyko75";
type Modal = "dox-video" | "excel-video" | "image" | null;

export default function Portfolio({ excelMedia }: { excelMedia: { image: boolean; trailer: boolean; poster: boolean } }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [activeImage, setActiveImage] = useState(0);
  const [modal, setModal] = useState<Modal>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const miniVideo = useRef<HTMLVideoElement>(null);
  const modalVideo = useRef<HTMLVideoElement>(null);
  const trailerTime = useRef(0);
  const [trailerStarted, setTrailerStarted] = useState(false);
  const trigger = useRef<HTMLElement | null>(null);
  const copy = dictionaries[locale];
  const screenshots = getScreenshots(locale);
  const galleryIndex = Math.min(activeImage, screenshots.length - 1);
  const currentScreenshot = screenshots[galleryIndex];

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
    document.title = `Nick Boiko — ${copy.footer}`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", copy.intro);
  }, [locale, copy]);
  useEffect(() => {
    if (modal) {
      dialog.current?.showModal();
      const before = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = before; };
    }
  }, [modal]);
  function changeLocale(value: string) {
    const next = resolveLocale(value) ?? "en";
    setLocale(next);
    try { localStorage.setItem("portfolio-language", next); } catch { /* URL still persists language. */ }
    const url = new URL(location.href);
    url.searchParams.set("lang", next);
    history.replaceState(null, "", url);
  }
  function openModal(value: Modal) {
    trigger.current = document.activeElement as HTMLElement;
    if (miniVideo.current) {
      if (miniVideo.current.readyState >= 1) trailerTime.current = miniVideo.current.currentTime;
      miniVideo.current.pause();
    }
    setModal(value);
  }
  function closeModal() {
    if (modal === "dox-video" && modalVideo.current) {
      trailerTime.current = modalVideo.current.currentTime;
      modalVideo.current.pause();
      if (miniVideo.current) {
        if (miniVideo.current.readyState >= 1) miniVideo.current.currentTime = trailerTime.current;
        miniVideo.current.volume = modalVideo.current.volume;
        miniVideo.current.muted = modalVideo.current.muted;
      }
    }
    dialog.current?.close();
    setModal(null);
    trigger.current?.focus();
  }
  function moveImage(delta: number) { setActiveImage(current => (Math.min(current, screenshots.length - 1) + delta + screenshots.length) % screenshots.length); }

  return <>
    <a className="skip-link" href="#main">{copy.skip}</a>
    <header className="site-header" id="top">
      <a href="#top" className="brand" aria-label="Nick Boiko"><span className="monogram">nb<span>.</span></span><span>Nick Boiko<span className="brand-dot">.</span></span></a>
      <nav aria-label={copy.work}><a href="#work">{copy.work}</a><a href="#about">{copy.about}</a></nav>
      <div className="header-actions"><label className="language-select"><Icon name="globe" /><span className="sr-only">{copy.language}</span><select value={locale} onChange={event => changeLocale(event.target.value)} aria-label={copy.language}>{locales.map(([code, name]) => <option key={code} value={code}>{name}</option>)}</select></label><a href="#contact" className="contact-link">{copy.contact}<Icon name="up" /></a></div>
    </header>
    <main id="main">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="eyebrow"><span className="status-dot" />{copy.role}</div>
        <div className="hero-grid"><h1 id="hero-title">{copy.hero1}<br /><span>{copy.hero2}</span></h1><div className="hero-intro"><p>{copy.intro}</p><a href="#work" className="button primary">{copy.explore}<Icon name="arrow" /></a><a href={PROFILE} target="_blank" rel="noreferrer" className="text-link"><Icon name="github" />{copy.github}<Icon name="up" /></a></div></div>
        <div className="hero-bottom"><span>Pdf&DocExplorer<span className="tiny-cross">+</span>Excel-utils</span><span className="scroll-mark" aria-hidden="true">↓</span></div>
      </section>

      <section className="work-section container" id="work" aria-labelledby="work-title">
        <div className="section-heading"><div><div className="eyebrow">01 / {copy.work}</div><h2 id="work-title">{copy.selected}</h2></div><p>{copy.selectedDesc}</p></div>
        <article className="dox-project" aria-labelledby="dox-title">
          <div className="project-topline"><span className="eyebrow"><span className="status-dot" />{copy.desktop}</span><span className="project-number">01 — 02</span></div>
          <div className="dox-intro"><div><div className="app-name"><img src={assetUrl(media.doxIcon)} alt="" width="40" height="40" /><h3 id="dox-title">Pdf&DocExplorer</h3></div><h4 className="project-tagline">{copy.docTagline}</h4></div><div className="project-description"><p>{copy.docDescription}</p><div className="project-actions"><a href={STORE} className="button primary" target="_blank" rel="noreferrer"><Icon name="windows" />{copy.store}<Icon name="up" /></a></div></div></div>
          <div className="dox-media">
          <div className="gallery" aria-label={copy.gallery}>
            <div className="gallery-toolbar"><span><span className="window-dots" aria-hidden="true">● ● ●</span> Pdf&DocExplorer</span><span className="gallery-counter">{String(galleryIndex + 1).padStart(2, "0")} / {String(screenshots.length).padStart(2, "0")}</span></div>
            <button className="screenshot-button" aria-label={`${copy.enlarge}: ${currentScreenshot.caption}`} onClick={() => openModal("image")}><img src={assetUrl(currentScreenshot.src)} width={currentScreenshot.width} height={currentScreenshot.height} alt={`Pdf&DocExplorer — ${currentScreenshot.caption}`} fetchPriority="high" /><span className="expand-icon"><Icon name="expand" /></span></button>
            <div className="gallery-navigation"><span className="gallery-caption" aria-live="polite">{currentScreenshot.caption}</span><div className="gallery-arrows"><button aria-label={copy.previous} onClick={() => moveImage(-1)}>←</button><button aria-label={copy.next} onClick={() => moveImage(1)}>→</button></div></div>
            <div className="gallery-thumbnails">{screenshots.map((screenshot, index) => <button key={screenshot.src} aria-label={screenshot.caption} title={screenshot.caption} aria-pressed={galleryIndex === index} onClick={() => setActiveImage(index)}><img src={assetUrl(screenshot.src)} width={screenshot.width} height={screenshot.height} alt="" loading="lazy" /><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span></button>)}</div>
          </div>
          <div className="dox-media-sidebar">
            <section className="trailer-card" aria-label={`Pdf&DocExplorer — ${copy.watch}`}>
              <div className="trailer-screen">
                <video ref={miniVideo} controls={trailerStarted} playsInline preload="none" aria-label={`Pdf&DocExplorer — ${copy.watch}`} poster={assetUrl(media.doxPoster)} src={assetUrl(media.doxTrailer)} onPlay={() => setTrailerStarted(true)} onLoadedMetadata={event => { event.currentTarget.currentTime = trailerTime.current; }}>
                  <a href={assetUrl(media.doxTrailer)}>{copy.trailerUnavailable}</a>
                </video>
                {!trailerStarted && <button className="trailer-play" onClick={() => { setTrailerStarted(true); void miniVideo.current?.play().catch(() => {}); }}><span className="trailer-play-icon"><Icon name="play" /></span><span>{copy.watch}</span></button>}
              </div>
              <div className="trailer-footer"><p>{copy.screenshotNote}</p><button className="button trailer-expand" onClick={() => openModal("dox-video")}><Icon name="expand" />{copy.enlargeVideo}</button></div>
            </section>
          <ul className="feature-list">{[copy.feature1, copy.feature2, copy.feature3].map(feature => <li key={feature}><span className="check-circle"><Icon name="check" /></span>{feature}</li>)}</ul>
          </div>
          </div>
          <div className="project-notes"><p>{copy.requirements}</p></div>
        </article>

        <article className="excel-project" aria-labelledby="excel-title"><div className="excel-content"><div className="eyebrow">{copy.excelCategory}</div><div className="app-name"><span className="excel-icon" aria-hidden="true">X</span><h3 id="excel-title">Excel-utils</h3></div><h4 className="project-tagline">{copy.excelTagline}</h4><p>{copy.excelDescription}</p><div className="excel-actions"><a href={REPO} target="_blank" rel="noreferrer" className="button light"><Icon name="github" />{copy.repo}<Icon name="up" /></a>{excelMedia.trailer && <button className="button text-button" onClick={() => openModal("excel-video")}><Icon name="play" />{copy.watch}</button>}</div></div>
          <div className={`excel-visual ${excelMedia.image ? "has-image" : ""}`}>
            <span className="project-number">02 — 02</span>
            {excelMedia.image ? <img className="excel-presentation" src={assetUrl(media.excelImage)} alt={`Excel-utils — ${copy.overview}`} width="1280" height="800" loading="lazy" /> : <><div className="paper-composition" aria-hidden="true"><div className="paper paper-left"><span className="paper-header" />{Array.from({ length: 7 }, (_, i) => <span className="paper-row" key={i} />)}<span className="paper-page">01</span></div><span className="mirror-line" /><div className="paper paper-right"><span className="paper-header" />{Array.from({ length: 7 }, (_, i) => <span className="paper-row" key={i} />)}<span className="paper-page">02</span></div><span className="floating-excel">X</span></div><div className="coming-soon"><span className="small-pill">{copy.mediaSoon}</span><p>{copy.mediaSoonDesc}</p></div></>}
          </div>
        </article>
      </section>

      <section className="about-section container" id="about" aria-labelledby="about-title"><div><div className="eyebrow">02 / {copy.about}</div><h2 id="about-title">{copy.aboutTitle}</h2></div><div className="about-copy"><div className="author"><span className="author-avatar" aria-hidden="true">nb.</span><span>Nick Boiko<small>Pdf&DocExplorer · Excel-utils</small></span></div><p>{copy.aboutDescription}</p><div className="about-links"><a href={PROFILE} target="_blank" rel="noreferrer" className="text-link">{copy.github}<Icon name="up" /></a><a href="mailto:nboyko75@gmail.com" className="text-link about-email"><Icon name="mail" />nboyko75@gmail.com</a></div></div></section>
      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="container contact-inner"><div><div className="eyebrow">03 / {copy.contact}</div><h2 id="contact-title">{copy.contactTitle}</h2><p>{copy.contactDescription}</p><p><a href="mailto:nboyko75@gmail.com" className="text-link">nboyko75@gmail.com</a></p></div><a href="mailto:nboyko75@gmail.com" className="button primary">{copy.email}<Icon name="up" /></a></div></section>
    </main>
    <footer className="container"><a className="brand footer-brand" href="#top"><span className="monogram">nb<span>.</span></span><span>© {new Date().getFullYear()} Nick Boiko</span></a><span>{copy.footer}</span><a href="#top" className="text-link">{copy.backTop}<span aria-hidden="true">↑</span></a></footer>
    <dialog ref={dialog} className="media-dialog" aria-label={modal === "image" ? currentScreenshot.caption : copy.watch} onCancel={event => { event.preventDefault(); closeModal(); }} onClick={event => { if (event.target === event.currentTarget) closeModal(); }} onKeyDown={event => { if (modal === "image" && event.key === "ArrowLeft") moveImage(-1); if (modal === "image" && event.key === "ArrowRight") moveImage(1); }}>
      {modal && <div className="dialog-content"><div className="dialog-toolbar"><span>{modal === "image" ? currentScreenshot.caption : `${modal === "dox-video" ? "Pdf&DocExplorer" : "Excel-utils"} — ${copy.watch}`}</span><button onClick={closeModal} aria-label={copy.close} autoFocus><Icon name="close" /></button></div>{modal === "image" ? <><img src={assetUrl(currentScreenshot.src)} alt={`Pdf&DocExplorer — ${currentScreenshot.caption}`} /><div className="dialog-gallery-controls"><button onClick={() => moveImage(-1)} aria-label={copy.previous}>←</button><span>{galleryIndex + 1} / {screenshots.length}</span><button onClick={() => moveImage(1)} aria-label={copy.next}>→</button></div></> : <video ref={modalVideo} controls autoPlay playsInline preload="none" onLoadedMetadata={event => {
        if (modal === "dox-video") {
          event.currentTarget.currentTime = trailerTime.current;
          event.currentTarget.volume = miniVideo.current?.volume ?? 1;
          event.currentTarget.muted = miniVideo.current?.muted ?? false;
        }
      }} poster={modal === "dox-video" ? assetUrl(media.doxPoster) : excelMedia.poster ? assetUrl(media.excelPoster) : undefined} src={modal === "dox-video" ? assetUrl(media.doxTrailer) : assetUrl(media.excelTrailer)}><a href={modal === "dox-video" ? assetUrl(media.doxTrailer) : assetUrl(media.excelTrailer)}>{copy.trailerUnavailable}</a></video>}</div>}
    </dialog>
  </>;
}
