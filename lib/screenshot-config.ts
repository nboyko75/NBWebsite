import type { Locale } from "./i18n.ts";

// Folder names supplied in artifacts/Screenshots; casing matters on static hosts.
export const screenshotFolders: Record<Locale, string> = {
  en: "us", uk: "Ua", de: "de", fr: "fr", es: "es", it: "it",
  "pt-BR": "pt", ja: "jp", ko: "us", "zh-CN": "cn", ru: "Ru",
};

// Screenshot1 through Screenshot9, in numerical file order.
export const screenshotLabels: Record<Locale, readonly string[]> = {
  en: ["Overview", "File operations", "Context menu", "Find your files", "PDF tools", "Batch operations", "Recycle Bin", "Pinned previews", "Merge Excel files"],
  uk: ["Огляд", "Операції з файлами", "Контекстне меню", "Пошук файлів", "Інструменти PDF", "Пакетні операції", "Кошик", "Закріплені вкладки", "Об’єднання файлів Excel"],
  de: ["Übersicht", "Dateioperationen", "Kontextmenü", "Dateien finden", "PDF-Werkzeuge", "Stapelverarbeitung", "Papierkorb", "Angeheftete Vorschauen", "Excel-Dateien zusammenführen"],
  fr: ["Présentation", "Opérations sur les fichiers", "Menu contextuel", "Trouver vos fichiers", "Outils PDF", "Traitement par lots", "Corbeille", "Aperçus épinglés", "Fusionner des fichiers Excel"],
  es: ["Vista general", "Operaciones con archivos", "Menú contextual", "Encuentra tus archivos", "Herramientas PDF", "Operaciones por lotes", "Papelera", "Vistas previas fijadas", "Combinar archivos Excel"],
  it: ["Panoramica", "Operazioni sui file", "Menu contestuale", "Trova i tuoi file", "Strumenti PDF", "Operazioni in blocco", "Cestino", "Anteprime fissate", "Unisci file Excel"],
  "pt-BR": ["Visão geral", "Operações com arquivos", "Menu de contexto", "Encontre seus arquivos", "Ferramentas PDF", "Operações em lote", "Lixeira", "Visualizações fixadas", "Mesclar arquivos Excel"],
  ja: ["概要", "ファイル操作", "コンテキストメニュー", "ファイル検索", "PDFツール", "一括操作", "ごみ箱", "固定したプレビュー", "Excelファイルの結合"],
  ko: ["개요", "파일 작업", "상황에 맞는 메뉴", "파일 찾기", "PDF 도구", "일괄 작업", "휴지통", "고정된 미리 보기", "Excel 파일 병합"],
  "zh-CN": ["概览", "文件操作", "右键菜单", "查找文件", "PDF 工具", "批量操作", "回收站", "固定预览", "合并 Excel 文件"],
  ru: ["Обзор", "Операции с файлами", "Контекстное меню", "Поиск файлов", "Инструменты PDF", "Пакетные операции", "Корзина", "Закреплённые вкладки", "Объединение файлов Excel"],
};
