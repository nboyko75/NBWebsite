import type { Locale } from "./i18n";

export const privacyUpdated = "2026-10-24";
export const privacyEmail = "nboyko75@gmail.com";

type PrivacyCopy = {
  title: string;
  home: string;
  updated: string;
  intro: string;
  contact: string;
  contactBody: string;
  sections: { title: string; body: string }[];
};

export const privacyCopy: Record<Locale, PrivacyCopy> = {
  en: {
    title: "Privacy policy", home: "Back to home", updated: "Last updated",
    intro: "This privacy policy applies to applications published by Nick Boiko that link to this page, including Pdf&DocExplorer and Excel-utils.",
    contact: "Privacy questions", contactBody: "For questions about this policy or your personal information, contact Nick Boiko at:",
    sections: [
      { title: "Files and local processing", body: "The apps access files, document contents, file names, and folders on your device as needed for the features you use, such as browsing, searching, previewing, editing, scanning, or printing. This processing takes place on your device. Your files and their contents are not uploaded to Nick Boiko or third parties by the apps." },
      { title: "Data collection and sharing", body: "The apps do not collect or transmit personal information to the developer or third parties. They do not include analytics, automatic crash reporting, advertising trackers, or cloud data collection. Nick Boiko does not sell or share personal information obtained through the apps." },
      { title: "Support messages", body: "If you email Nick Boiko, your email address, message, and any attachments you choose to send are used to respond to your request. These messages are handled by email service providers and kept only as long as needed for support or legal obligations. Avoid sending sensitive documents. You can request access, correction, or deletion of your support correspondence using the contact below." },
      { title: "Microsoft and other services", body: "Microsoft Store, Windows, Microsoft Office, and other services you choose to use operate under their own privacy policies. Their processing, including purchases, downloads, updates, or diagnostics, is separate from the apps’ local file processing. Files in folders you synchronize with a cloud service remain subject to that service’s settings and privacy policy." },
      { title: "Storage, security, and your choices", body: "Your documents and app settings remain on your device or in locations you choose. You control access through your device and file permissions and can delete files or settings you no longer need. Uninstalling an app does not necessarily delete your documents. Protect your device and backups; local data security depends on your system’s protections. The developer cannot access, recover, or delete your local files remotely." },
      { title: "Changes to this policy", body: "This policy will be updated when the apps’ data practices change. The date above identifies the latest revision. An app with different data practices must provide an updated policy describing them." },
    ],
  },
  uk: {
    title: "Політика конфіденційності", home: "На головну", updated: "Останнє оновлення",
    intro: "Ця політика конфіденційності поширюється на програми Nick Boiko, які посилаються на цю сторінку, зокрема Pdf&DocExplorer та Excel-utils.",
    contact: "Питання конфіденційності", contactBody: "Із запитаннями щодо цієї політики або ваших персональних даних звертайтеся до Nick Boiko:",
    sections: [
      { title: "Файли та локальне оброблення", body: "Програми отримують доступ до файлів, вмісту документів, назв файлів і папок на вашому пристрої, коли це потрібно для вибраних функцій: перегляду, пошуку, редагування, сканування або друку. Оброблення відбувається на вашому пристрої. Програми не передають ваші файли та їхній вміст Nick Boiko або третім особам." },
      { title: "Збирання та передавання даних", body: "Програми не збирають і не передають персональні дані розробнику або третім особам. Вони не містять аналітики, автоматичного надсилання звітів про збої, рекламних трекерів або хмарного збирання даних. Nick Boiko не продає і не поширює персональні дані, отримані через програми." },
      { title: "Звернення до підтримки", body: "Якщо ви пишете Nick Boiko електронною поштою, ваша адреса, повідомлення та добровільно надіслані вкладення використовуються для відповіді на звернення. Повідомлення обробляють постачальники електронної пошти; вони зберігаються лише протягом часу, необхідного для підтримки або виконання правових зобов’язань. Не надсилайте конфіденційні документи. За наведеними нижче контактами можна запросити доступ, виправлення або видалення вашого листування з підтримкою." },
      { title: "Microsoft та інші служби", body: "Microsoft Store, Windows, Microsoft Office та інші служби, якими ви користуєтеся, мають власні політики конфіденційності. Оброблення даних цими службами, зокрема для покупок, завантажень, оновлень або діагностики, відокремлене від локального оброблення файлів програмами. Файли в папках, які ви синхронізуєте з хмарною службою, підпорядковуються налаштуванням і політиці цієї служби." },
      { title: "Зберігання, безпека та ваш вибір", body: "Ваші документи та налаштування програм залишаються на вашому пристрої або у вибраних вами місцях. Ви керуєте доступом через дозволи пристрою та файлів і можете видаляти непотрібні файли або налаштування. Видалення програми не обов’язково видаляє документи. Захищайте пристрій і резервні копії: безпека локальних даних залежить від захисту системи. Розробник не може віддалено отримувати доступ до ваших локальних файлів, відновлювати чи видаляти їх." },
      { title: "Зміни цієї політики", body: "Цю політику буде оновлено в разі зміни способів оброблення даних програмами. Дата вгорі вказує на останню редакцію. Програма з іншими способами оброблення даних має надавати оновлену політику з їхнім описом." },
    ],
  },
  de: {
    title: "Datenschutzerklärung", home: "Zur Startseite", updated: "Zuletzt aktualisiert",
    intro: "Diese Datenschutzerklärung gilt für Anwendungen von Nick Boiko, die auf diese Seite verweisen, einschließlich Pdf&DocExplorer und Excel-utils.",
    contact: "Fragen zum Datenschutz", contactBody: "Bei Fragen zu dieser Erklärung oder Ihren personenbezogenen Daten wenden Sie sich an Nick Boiko:",
    sections: [
      { title: "Dateien und lokale Verarbeitung", body: "Die Apps greifen auf Dateien, Dokumentinhalte, Dateinamen und Ordner auf Ihrem Gerät zu, soweit dies für verwendete Funktionen wie Durchsuchen, Suchen, Vorschau, Bearbeiten, Scannen oder Drucken erforderlich ist. Die Verarbeitung erfolgt auf Ihrem Gerät. Die Apps laden Ihre Dateien und deren Inhalte nicht zu Nick Boiko oder Dritten hoch." },
      { title: "Datenerhebung und Weitergabe", body: "Die Apps erheben oder übermitteln keine personenbezogenen Daten an den Entwickler oder Dritte. Sie enthalten keine Analysefunktionen, automatischen Absturzberichte, Werbetracker oder cloudbasierte Datenerhebung. Nick Boiko verkauft oder teilt keine über die Apps erhaltenen personenbezogenen Daten." },
      { title: "Supportnachrichten", body: "Wenn Sie Nick Boiko eine E-Mail senden, werden Ihre E-Mail-Adresse, Nachricht und freiwillig gesendeten Anhänge zur Beantwortung Ihrer Anfrage verwendet. Die Nachrichten werden von E-Mail-Dienstleistern verarbeitet und nur so lange aufbewahrt, wie dies für den Support oder gesetzliche Pflichten erforderlich ist. Senden Sie keine sensiblen Dokumente. Über den unten angegebenen Kontakt können Sie Auskunft, Berichtigung oder Löschung Ihrer Supportkorrespondenz anfordern." },
      { title: "Microsoft und andere Dienste", body: "Für Microsoft Store, Windows, Microsoft Office und andere von Ihnen genutzte Dienste gelten eigene Datenschutzerklärungen. Deren Verarbeitung, etwa bei Käufen, Downloads, Updates oder Diagnosen, erfolgt unabhängig von der lokalen Dateiverarbeitung der Apps. Für Dateien in Ordnern, die Sie mit einem Clouddienst synchronisieren, gelten dessen Einstellungen und Datenschutzerklärung." },
      { title: "Speicherung, Sicherheit und Ihre Möglichkeiten", body: "Ihre Dokumente und App-Einstellungen bleiben auf Ihrem Gerät oder an den von Ihnen gewählten Speicherorten. Sie steuern den Zugriff über Geräte- und Dateiberechtigungen und können nicht mehr benötigte Dateien oder Einstellungen löschen. Eine Deinstallation löscht Ihre Dokumente nicht zwangsläufig. Schützen Sie Ihr Gerät und Ihre Sicherungskopien; die Sicherheit lokaler Daten hängt vom Schutz Ihres Systems ab. Der Entwickler kann nicht aus der Ferne auf Ihre lokalen Dateien zugreifen, sie wiederherstellen oder löschen." },
      { title: "Änderungen dieser Erklärung", body: "Diese Erklärung wird aktualisiert, wenn sich die Datenverarbeitung der Apps ändert. Das Datum oben kennzeichnet die aktuelle Fassung. Eine App mit abweichender Datenverarbeitung muss eine aktualisierte Erklärung bereitstellen, die diese beschreibt." },
    ],
  },
  fr: {
    title: "Politique de confidentialité", home: "Retour à l’accueil", updated: "Dernière mise à jour",
    intro: "Cette politique de confidentialité s’applique aux applications publiées par Nick Boiko qui renvoient à cette page, notamment Pdf&DocExplorer et Excel-utils.",
    contact: "Questions de confidentialité", contactBody: "Pour toute question concernant cette politique ou vos données personnelles, contactez Nick Boiko :",
    sections: [
      { title: "Fichiers et traitement local", body: "Les applications accèdent aux fichiers, au contenu des documents, aux noms de fichiers et aux dossiers de votre appareil selon les fonctions utilisées : navigation, recherche, aperçu, modification, numérisation ou impression. Ce traitement se déroule sur votre appareil. Les applications ne transmettent pas vos fichiers ni leur contenu à Nick Boiko ou à des tiers." },
      { title: "Collecte et partage des données", body: "Les applications ne collectent ni ne transmettent de données personnelles au développeur ou à des tiers. Elles ne contiennent ni analyse d’utilisation, ni rapports automatiques de plantage, ni traceurs publicitaires, ni collecte de données dans le cloud. Nick Boiko ne vend ni ne partage les données personnelles obtenues via les applications." },
      { title: "Messages d’assistance", body: "Si vous contactez Nick Boiko par e-mail, votre adresse, votre message et les pièces jointes que vous choisissez d’envoyer servent à répondre à votre demande. Ces messages sont traités par les fournisseurs de messagerie et conservés uniquement le temps nécessaire à l’assistance ou aux obligations légales. Évitez d’envoyer des documents sensibles. Vous pouvez demander l’accès, la rectification ou la suppression de votre correspondance d’assistance aux coordonnées ci-dessous." },
      { title: "Microsoft et autres services", body: "Microsoft Store, Windows, Microsoft Office et les autres services que vous utilisez disposent de leurs propres politiques de confidentialité. Leurs traitements, notamment les achats, téléchargements, mises à jour ou diagnostics, sont distincts du traitement local des fichiers par les applications. Les fichiers de dossiers synchronisés avec un service cloud restent soumis aux paramètres et à la politique de ce service." },
      { title: "Stockage, sécurité et vos choix", body: "Vos documents et paramètres restent sur votre appareil ou aux emplacements choisis. Vous contrôlez l’accès grâce aux autorisations de l’appareil et des fichiers et pouvez supprimer les fichiers ou paramètres inutiles. Désinstaller une application ne supprime pas nécessairement vos documents. Protégez votre appareil et vos sauvegardes : la sécurité des données locales dépend des protections du système. Le développeur ne peut pas accéder à distance à vos fichiers locaux, les récupérer ou les supprimer." },
      { title: "Modifications de cette politique", body: "Cette politique sera mise à jour lorsque les pratiques de traitement des données des applications changeront. La date ci-dessus indique la dernière révision. Une application ayant des pratiques différentes doit fournir une politique actualisée les décrivant." },
    ],
  },
  es: {
    title: "Política de privacidad", home: "Volver al inicio", updated: "Última actualización",
    intro: "Esta política de privacidad se aplica a las aplicaciones publicadas por Nick Boiko que enlazan a esta página, incluidas Pdf&DocExplorer y Excel-utils.",
    contact: "Consultas de privacidad", contactBody: "Si tiene preguntas sobre esta política o sus datos personales, contacte con Nick Boiko:",
    sections: [
      { title: "Archivos y procesamiento local", body: "Las aplicaciones acceden a archivos, contenido de documentos, nombres de archivos y carpetas de su dispositivo según las funciones utilizadas, como explorar, buscar, previsualizar, editar, escanear o imprimir. El procesamiento se realiza en su dispositivo. Las aplicaciones no suben sus archivos ni su contenido a Nick Boiko ni a terceros." },
      { title: "Recopilación y comunicación de datos", body: "Las aplicaciones no recopilan ni transmiten datos personales al desarrollador ni a terceros. No incluyen analítica, informes automáticos de fallos, rastreadores publicitarios ni recopilación de datos en la nube. Nick Boiko no vende ni comparte datos personales obtenidos a través de las aplicaciones." },
      { title: "Mensajes de soporte", body: "Si envía un correo a Nick Boiko, su dirección, mensaje y los archivos adjuntos que decida enviar se usan para responder a su solicitud. Los proveedores de correo procesan estos mensajes, que se conservan solo el tiempo necesario para el soporte o las obligaciones legales. Evite enviar documentos sensibles. Puede solicitar acceso, rectificación o eliminación de su correspondencia de soporte mediante el contacto indicado abajo." },
      { title: "Microsoft y otros servicios", body: "Microsoft Store, Windows, Microsoft Office y otros servicios que utilice se rigen por sus propias políticas de privacidad. Su procesamiento, incluidas compras, descargas, actualizaciones o diagnósticos, es independiente del procesamiento local de archivos de las aplicaciones. Los archivos de carpetas sincronizadas con un servicio en la nube están sujetos a la configuración y política de dicho servicio." },
      { title: "Almacenamiento, seguridad y sus opciones", body: "Sus documentos y ajustes permanecen en su dispositivo o en las ubicaciones que elija. Usted controla el acceso mediante los permisos del dispositivo y los archivos, y puede eliminar los archivos o ajustes que ya no necesite. Desinstalar una aplicación no elimina necesariamente sus documentos. Proteja su dispositivo y sus copias de seguridad: la seguridad local depende de las protecciones del sistema. El desarrollador no puede acceder, recuperar ni eliminar sus archivos locales de forma remota." },
      { title: "Cambios en esta política", body: "Esta política se actualizará cuando cambien las prácticas de datos de las aplicaciones. La fecha anterior identifica la última revisión. Una aplicación con prácticas diferentes debe proporcionar una política actualizada que las describa." },
    ],
  },
  it: {
    title: "Informativa sulla privacy", home: "Torna alla home", updated: "Ultimo aggiornamento",
    intro: "Questa informativa si applica alle applicazioni pubblicate da Nick Boiko che rimandano a questa pagina, tra cui Pdf&DocExplorer ed Excel-utils.",
    contact: "Domande sulla privacy", contactBody: "Per domande su questa informativa o sui tuoi dati personali, contatta Nick Boiko:",
    sections: [
      { title: "File ed elaborazione locale", body: "Le app accedono a file, contenuti dei documenti, nomi dei file e cartelle del dispositivo secondo le funzioni utilizzate, come esplorazione, ricerca, anteprima, modifica, scansione o stampa. L’elaborazione avviene sul dispositivo. Le app non caricano i tuoi file o i loro contenuti su servizi di Nick Boiko o di terzi." },
      { title: "Raccolta e condivisione dei dati", body: "Le app non raccolgono né trasmettono dati personali allo sviluppatore o a terzi. Non includono analisi dell’utilizzo, segnalazioni automatiche degli arresti anomali, tracciatori pubblicitari o raccolta dati nel cloud. Nick Boiko non vende né condivide dati personali ottenuti tramite le app." },
      { title: "Messaggi di assistenza", body: "Se scrivi a Nick Boiko, il tuo indirizzo e-mail, il messaggio e gli allegati che scegli di inviare vengono usati per rispondere alla richiesta. I messaggi sono trattati dai fornitori di posta elettronica e conservati solo per il tempo necessario all’assistenza o agli obblighi di legge. Evita di inviare documenti sensibili. Puoi richiedere accesso, rettifica o cancellazione della corrispondenza di assistenza usando il contatto riportato sotto." },
      { title: "Microsoft e altri servizi", body: "Microsoft Store, Windows, Microsoft Office e gli altri servizi che usi operano secondo le proprie informative sulla privacy. Il loro trattamento, inclusi acquisti, download, aggiornamenti o diagnostica, è distinto dall’elaborazione locale dei file nelle app. I file nelle cartelle sincronizzate con un servizio cloud restano soggetti alle impostazioni e all’informativa di quel servizio." },
      { title: "Conservazione, sicurezza e scelte", body: "I documenti e le impostazioni restano sul tuo dispositivo o nelle posizioni scelte. Controlli l’accesso tramite le autorizzazioni del dispositivo e dei file e puoi eliminare file o impostazioni non più necessari. Disinstallare un’app non elimina necessariamente i documenti. Proteggi il dispositivo e i backup: la sicurezza dei dati locali dipende dalle protezioni del sistema. Lo sviluppatore non può accedere, recuperare o eliminare i tuoi file locali da remoto." },
      { title: "Modifiche a questa informativa", body: "L’informativa verrà aggiornata quando cambieranno le pratiche di trattamento dei dati delle app. La data sopra indica l’ultima revisione. Un’app con pratiche diverse deve fornire un’informativa aggiornata che le descriva." },
    ],
  },
  "pt-BR": {
    title: "Política de privacidade", home: "Voltar ao início", updated: "Última atualização",
    intro: "Esta política de privacidade se aplica aos aplicativos publicados por Nick Boiko que direcionam para esta página, incluindo Pdf&DocExplorer e Excel-utils.",
    contact: "Dúvidas sobre privacidade", contactBody: "Para dúvidas sobre esta política ou seus dados pessoais, entre em contato com Nick Boiko:",
    sections: [
      { title: "Arquivos e processamento local", body: "Os aplicativos acessam arquivos, conteúdo de documentos, nomes de arquivos e pastas no seu dispositivo conforme as funções utilizadas, como navegação, pesquisa, visualização, edição, digitalização ou impressão. O processamento ocorre no seu dispositivo. Os aplicativos não enviam seus arquivos nem seu conteúdo a Nick Boiko ou a terceiros." },
      { title: "Coleta e compartilhamento de dados", body: "Os aplicativos não coletam nem transmitem dados pessoais ao desenvolvedor ou a terceiros. Não incluem análise de uso, relatórios automáticos de falhas, rastreadores de publicidade ou coleta de dados na nuvem. Nick Boiko não vende nem compartilha dados pessoais obtidos pelos aplicativos." },
      { title: "Mensagens de suporte", body: "Se você enviar um e-mail a Nick Boiko, seu endereço, mensagem e anexos enviados por escolha própria serão usados para responder à solicitação. Os provedores de e-mail processam essas mensagens, que são mantidas apenas pelo tempo necessário ao suporte ou às obrigações legais. Evite enviar documentos sensíveis. Você pode solicitar acesso, correção ou exclusão da correspondência de suporte pelo contato abaixo." },
      { title: "Microsoft e outros serviços", body: "Microsoft Store, Windows, Microsoft Office e outros serviços que você utiliza seguem suas próprias políticas de privacidade. O processamento deles, incluindo compras, downloads, atualizações ou diagnósticos, é separado do processamento local de arquivos dos aplicativos. Arquivos em pastas sincronizadas com um serviço de nuvem estão sujeitos às configurações e à política desse serviço." },
      { title: "Armazenamento, segurança e suas escolhas", body: "Seus documentos e configurações permanecem no dispositivo ou nos locais escolhidos. Você controla o acesso pelas permissões do dispositivo e dos arquivos e pode excluir arquivos ou configurações desnecessários. Desinstalar um aplicativo não exclui necessariamente seus documentos. Proteja seu dispositivo e backups: a segurança dos dados locais depende das proteções do sistema. O desenvolvedor não pode acessar, recuperar ou excluir seus arquivos locais remotamente." },
      { title: "Alterações nesta política", body: "Esta política será atualizada quando as práticas de dados dos aplicativos mudarem. A data acima indica a última revisão. Um aplicativo com práticas diferentes deve fornecer uma política atualizada que as descreva." },
    ],
  },
  ja: {
    title: "プライバシーポリシー", home: "ホームに戻る", updated: "最終更新日",
    intro: "このプライバシーポリシーは、Pdf&DocExplorer、Excel-utilsなど、このページにリンクするNick Boiko公開のアプリケーションに適用されます。",
    contact: "プライバシーに関するお問い合わせ", contactBody: "本ポリシーや個人情報についてのご質問は、Nick Boikoまでお問い合わせください。",
    sections: [
      { title: "ファイルと端末内での処理", body: "アプリは、閲覧、検索、プレビュー、編集、スキャン、印刷など、利用する機能に必要な範囲で端末上のファイル、文書の内容、ファイル名、フォルダーにアクセスします。処理は端末内で行われます。アプリがファイルやその内容をNick Boikoや第三者にアップロードすることはありません。" },
      { title: "データの収集と共有", body: "アプリは個人情報を収集したり、開発者や第三者に送信したりしません。利用状況の分析、自動クラッシュ報告、広告トラッカー、クラウドでのデータ収集は含まれていません。Nick Boikoは、アプリを通じて得た個人情報を販売または共有しません。" },
      { title: "サポートへのお問い合わせ", body: "Nick Boikoにメールを送る場合、メールアドレス、本文、ご自身の判断で送信した添付ファイルは、お問い合わせへの対応に使用されます。メールはメールサービス提供者によって処理され、サポートや法的義務に必要な期間のみ保存されます。機密文書の送信はお控えください。下記の連絡先から、サポートに関するやり取りの開示、訂正、削除を依頼できます。" },
      { title: "Microsoftおよびその他のサービス", body: "Microsoft Store、Windows、Microsoft Office、およびご利用のその他のサービスには、それぞれのプライバシーポリシーが適用されます。購入、ダウンロード、更新、診断などの処理は、アプリによる端末内のファイル処理とは別です。クラウドサービスと同期するフォルダー内のファイルには、そのサービスの設定とポリシーが適用されます。" },
      { title: "保存、安全性、利用者の選択", body: "文書とアプリ設定は、ご自身の端末または選択した保存先に残ります。端末やファイルの権限でアクセスを管理し、不要なファイルや設定を削除できます。アプリをアンインストールしても、文書が必ず削除されるわけではありません。端末とバックアップを保護してください。ローカルデータの安全性はシステムの保護機能に依存します。開発者がローカルファイルに遠隔でアクセスしたり、復元・削除したりすることはできません。" },
      { title: "ポリシーの変更", body: "アプリのデータの取り扱いが変わる場合、本ポリシーを更新します。上記の日付は最終改訂日です。異なる取り扱いを行うアプリは、その内容を説明する更新済みのポリシーを提供する必要があります。" },
    ],
  },
  ko: {
    title: "개인정보 처리방침", home: "홈으로 돌아가기", updated: "최종 수정일",
    intro: "이 개인정보 처리방침은 Pdf&DocExplorer 및 Excel-utils를 포함하여 이 페이지로 연결되는 Nick Boiko의 앱에 적용됩니다.",
    contact: "개인정보 관련 문의", contactBody: "이 방침 또는 개인정보에 관한 질문은 Nick Boiko에게 문의해 주세요.",
    sections: [
      { title: "파일 및 기기 내 처리", body: "앱은 탐색, 검색, 미리 보기, 편집, 스캔 또는 인쇄 등 사용자가 이용하는 기능에 필요한 범위에서 기기의 파일, 문서 내용, 파일 이름 및 폴더에 접근합니다. 처리는 기기에서 이루어집니다. 앱은 파일이나 내용을 Nick Boiko 또는 제3자에게 업로드하지 않습니다." },
      { title: "데이터 수집 및 공유", body: "앱은 개인정보를 수집하거나 개발자 또는 제3자에게 전송하지 않습니다. 사용 분석, 자동 오류 보고, 광고 추적기 또는 클라우드 데이터 수집 기능을 포함하지 않습니다. Nick Boiko는 앱을 통해 얻은 개인정보를 판매하거나 공유하지 않습니다." },
      { title: "지원 문의", body: "Nick Boiko에게 이메일을 보내면 이메일 주소, 메시지 및 자발적으로 보낸 첨부 파일을 문의에 답변하는 데 사용합니다. 이메일 서비스 제공업체가 메시지를 처리하며, 지원 또는 법적 의무에 필요한 기간 동안만 보관합니다. 민감한 문서는 보내지 마세요. 아래 연락처로 지원 관련 서신의 열람, 정정 또는 삭제를 요청할 수 있습니다." },
      { title: "Microsoft 및 기타 서비스", body: "Microsoft Store, Windows, Microsoft Office 및 사용자가 선택한 기타 서비스에는 각각의 개인정보 처리방침이 적용됩니다. 구매, 다운로드, 업데이트 또는 진단을 포함한 해당 서비스의 처리는 앱의 로컬 파일 처리와 별개입니다. 클라우드 서비스와 동기화하는 폴더의 파일에는 해당 서비스의 설정과 방침이 적용됩니다." },
      { title: "보관, 보안 및 사용자 선택", body: "문서와 앱 설정은 기기 또는 사용자가 선택한 위치에 남습니다. 기기 및 파일 권한으로 접근을 제어하고 불필요한 파일이나 설정을 삭제할 수 있습니다. 앱을 제거해도 문서가 반드시 삭제되는 것은 아닙니다. 기기와 백업을 보호해 주세요. 로컬 데이터의 보안은 시스템 보호 기능에 달려 있습니다. 개발자는 로컬 파일에 원격으로 접근하거나 파일을 복구 또는 삭제할 수 없습니다." },
      { title: "방침 변경", body: "앱의 데이터 처리 방식이 변경되면 이 방침을 업데이트합니다. 위 날짜는 최종 개정일입니다. 처리 방식이 다른 앱은 해당 내용을 설명하는 업데이트된 방침을 제공해야 합니다." },
    ],
  },
  "zh-CN": {
    title: "隐私政策", home: "返回首页", updated: "最后更新日期",
    intro: "本隐私政策适用于由Nick Boiko发布并链接至此页面的应用程序，包括Pdf&DocExplorer和Excel-utils。",
    contact: "隐私问题", contactBody: "如对本政策或您的个人信息有任何疑问，请联系Nick Boiko：",
    sections: [
      { title: "文件与本地处理", body: "应用根据您使用的浏览、搜索、预览、编辑、扫描或打印等功能的需要，访问设备上的文件、文档内容、文件名和文件夹。处理在您的设备上进行。应用不会将您的文件及其内容上传给Nick Boiko或第三方。" },
      { title: "数据收集与共享", body: "应用不会收集个人信息，也不会将个人信息传输给开发者或第三方。应用不包含使用情况分析、自动崩溃报告、广告跟踪器或云端数据收集功能。Nick Boiko不会出售或共享通过应用获得的个人信息。" },
      { title: "支持邮件", body: "如果您向Nick Boiko发送电子邮件，您的邮箱地址、邮件正文及自愿发送的附件将用于回复您的请求。这些邮件由电子邮件服务提供商处理，仅在支持服务或法律义务所需的期限内保留。请避免发送敏感文档。您可以通过下方联系方式请求访问、更正或删除您的支持通信记录。" },
      { title: "Microsoft及其他服务", body: "Microsoft Store、Windows、Microsoft Office及您选择使用的其他服务各自适用其隐私政策。这些服务的数据处理，包括购买、下载、更新或诊断，与应用的本地文件处理相互独立。与云服务同步的文件夹中的文件仍受该服务的设置和隐私政策约束。" },
      { title: "存储、安全与您的选择", body: "您的文档和应用设置保留在您的设备或您选择的位置。您可以通过设备及文件权限控制访问，并删除不再需要的文件或设置。卸载应用不一定会删除您的文档。请保护您的设备和备份；本地数据安全取决于系统的保护措施。开发者无法远程访问、恢复或删除您的本地文件。" },
      { title: "政策变更", body: "应用的数据处理方式发生变化时，本政策将相应更新。上方日期表示最新修订日期。数据处理方式不同的应用必须提供更新后的政策，说明其具体做法。" },
    ],
  },
  ru: {
    title: "Политика конфиденциальности", home: "На главную", updated: "Последнее обновление",
    intro: "Эта политика конфиденциальности распространяется на приложения Nick Boiko, которые ссылаются на эту страницу, включая Pdf&DocExplorer и Excel-utils.",
    contact: "Вопросы конфиденциальности", contactBody: "По вопросам об этой политике или ваших персональных данных обращайтесь к Nick Boiko:",
    sections: [
      { title: "Файлы и локальная обработка", body: "Приложения получают доступ к файлам, содержимому документов, именам файлов и папкам на вашем устройстве по мере необходимости для выбранных функций: просмотра, поиска, редактирования, сканирования или печати. Обработка выполняется на вашем устройстве. Приложения не передают ваши файлы и их содержимое Nick Boiko или третьим лицам." },
      { title: "Сбор и передача данных", body: "Приложения не собирают и не передают персональные данные разработчику или третьим лицам. Они не содержат аналитики, автоматической отправки отчётов о сбоях, рекламных трекеров или облачного сбора данных. Nick Boiko не продаёт и не передаёт персональные данные, полученные через приложения." },
      { title: "Обращения в поддержку", body: "Если вы пишете Nick Boiko по электронной почте, ваш адрес, сообщение и добровольно отправленные вложения используются для ответа на обращение. Сообщения обрабатываются поставщиками электронной почты и хранятся только в течение срока, необходимого для поддержки или выполнения правовых обязательств. Не отправляйте конфиденциальные документы. По указанным ниже контактам можно запросить доступ, исправление или удаление вашей переписки с поддержкой." },
      { title: "Microsoft и другие службы", body: "Microsoft Store, Windows, Microsoft Office и другие используемые вами службы имеют собственные политики конфиденциальности. Их обработка данных, в том числе для покупок, загрузок, обновлений или диагностики, отделена от локальной обработки файлов приложениями. К файлам в папках, синхронизируемых с облачной службой, применяются настройки и политика этой службы." },
      { title: "Хранение, безопасность и ваш выбор", body: "Ваши документы и настройки приложений остаются на вашем устройстве или в выбранных вами местах. Вы управляете доступом через разрешения устройства и файлов и можете удалять ненужные файлы или настройки. Удаление приложения не обязательно удаляет документы. Защищайте устройство и резервные копии: безопасность локальных данных зависит от защиты системы. Разработчик не может удалённо получать доступ к вашим локальным файлам, восстанавливать или удалять их." },
      { title: "Изменения этой политики", body: "Эта политика будет обновлена при изменении способов обработки данных приложениями. Дата выше указывает последнюю редакцию. Приложение с другими способами обработки данных должно предоставлять обновлённую политику с их описанием." },
    ],
  },
};
