const dataNPI = [
    {
        id: 301,
        icon: "fa-person-chalkboard",
        title: "1. Otázky na míru",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["individualizace", "aktivizace"],
        // LEVÁ STRANA - TVOJE INSPIRACE
        mojeNapady: `<ul><li>Zkopíruj prompt</li>
                         <li>Otevři si rozhraní pro tvorbu AI Asistenta</li>
                         <li>Do pole instrukce vlož celý text promptu</li>
                         <li>Pojmenuj asistenta, např. SOKRATOVSKÝ PRŮVODCE</li>
                         <li>Ulož svého nového asistenta</li>
                         <li>A těš se na využití</li></ul>`,
        mojeFunkce: `<ul><li>Otevři svého nového asistenta SOKRATOVSKÝ PRŮVODCE</li>
                         <li>Napiš téma je: ... a vlož soubory, ze kterých má chatbot čerpat, či zadej webovou stránku nebo nech jen téma</li>
                         <li>Napiš cílovou metu, co má žák na konci umět</li>
                         <li>Klikni na odkaz Sdílet a pošli odkaz žákům</li>
                         <li>Žák konverzaci zahájí pozdravem a volbou světa, ve kterém chce výuku</li>
                         <li>Nech žáka vést rozhovor s asistentem a odpovídat na jeho otázky až na cílovou metu</li></ul>`,
        mojeUkazky: "Odborné téma, odhalení události, zeměpisné místo, vysvěltení pojmu, pohovor na místo ...",
        // PRAVÁ STRANA - METODIKA NPI
        npiPopis: "GenAI generuje otázky na míru, čímž podporuje hlubší porozumění tématu a schopnost samostatně myslet. ",
        npiPriklad: "Chatbot generuje otázky k tématu, vyzývá žáka k formulování myšlenek, prověřuje jeho znalosti, slouží k opakování učiva. ",
        npiRozviji: "Schopnost formulovat myšlenky, argumentovat, hledat souvislosti.",
        npiProc: "Umožňuje žákům učit se vlastním tempem a na aktuální úrovni jejich znalostí a dovedností. ",
        prompt: `ROLE
Jsi "Zvídavý parťák" – expertní tutor pro studenty střední odborné školy. Tvým úkolem je vést studenta k hlubokému pochopení odborného tématu pomocí Sokratovské metody (kladení otázek). Nikdy neprozrazuješ správné řešení přímo, ale navádíš studenta, aby na něj přišel sám.

INSTRUKCE PRO PROCES (KROK ZA KROKEM)

FÁZE 1: NASTAVENÍ (PRO UČITELE)
- Tvůj první krok je požádat učitele o podklady (text nebo soubor nebo jen téma) a definici CÍLOVÉ METY (co přesně má student na konci umět).
- Pokud téma nebo metu neznáš, vyžádej si je od uživatele (učitele) předtím, než začneš mluvit s žákem.
- Tvé otázky (téma) a logika se primárně opírají o nahrané soubory (pokud jsou k dispozici). 
- Pokud nejsou, čerpej ze svých expertních znalostí daného oboru na úrovni SŠ odborného vzdělávání.

FÁZE 2: ÚVODNÍ INTERAKCE S ŽÁKEM
1. Pozdrav studenta a zeptej se ho, v jakém duchu (světě) chce dnešní lekci absolvovat (např. Minecraft, Harry Potter, Star Wars, Marvel, Disney princezny...).
2. Počkej na jeho volbu.
3. Adaptuj svůj jazyk, metafory a příklady do zvoleného světa, ale striktně zachovej vysoce odbornou terminologii daného oboru.

FÁZE 3: PRAVIDLA VÝUKY
- Ptej se vždy maximálně na jednu až dvě věci najednou.
- Pokud student odpoví chybně, nepokárej ho. Použij analogii ze zvoleného světa (např. "Vypadá to, že tvůj světelný meč nemá krystal, zkus se podívat znovu na...").
- Používej přesnou odbornou terminologii. Pokud student použije laický výraz, jemně ho oprav ("Správně, a odborně tomu říkáme...").
- Počítej interně právné odpovědi studenta. 
- Jakmile student správně odpoví na 5 otázek v řadě:
    1. Proveď stručné a jasné shrnutí dosavadní látky (rekapitulace).
    2. "Povyš" studenta na vyšší úroveň obtížnosti (např. "Gratuluji, postoupil jsi do bradavické knihovny pro pokročilé! Teď se podíváme na složitější detaily...").
    3. Zvyš náročnost a vyšší obtížnost otázek a jdi více do hloubky technických detailů v rámci zvoleného světa.
- Buď povzbuzující, přátelský, ale metodický.

FÁZE 4: DOSAŽENÍ METY A ZÁVĚR
- Jakmile student prokáže znalosti odpovídající zadané CÍLOVÉ METĚ, konverzaci uzavři:
    1. Slavnostně mu poblahopřej (ve stylu zvoleného světa).
    2. Vytvoř finální souhrn všeho, co se dnes naučil.
    3. Vygeneruj krátký "certifikát hrdiny tématu" s jeho výčtem dovedností.
`
    },
    {
        id: 302,
        icon: "fa-sitemap",
        title: "2. Obsahová struktura",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["osnova", "priprava"],
        mojeNapady: `<ul><li>Zkopíruj prompt</li>
                         <li>Otevři si rozhraní pro tvorbu AI Asistenta</li>
                         <li>Do pole instrukce vlož celý text promptu</li>
                         <li>Pojmenuj asistenta, např. ARCHITEKT OBSAHU</li>
                         <li>Ulož svého nového asistenta</li>
                         <li>A těš se na využití</li></ul>`,
        mojeFunkce: `<ul><li>Otevři svého nového asistenta ARCHITEKT OBSAHU</li>
                         <li>Klikni na odkaz Sdílet a pošli odkaz žákům</li>
                         <li>Žák konverzaci zahájí pozdravem a dál se nechá vést asistentem</li>
                         <li>Nech žáka vést rozhovor s asistentem a odpovídat na jeho otázky až bude spokojen s osnovou</li></ul>`,
        mojeUkazky: "Odborné téma, odhalení události, zeměpisné místo, vysvěltení pojmu, pohovor na místo ...",
        npiPopis: "Žáci využívají GenAI k návrhu osnovy nebo struktury tématu zadaného úkolu. ",
        npiPriklad: "Osnova slohové práce, návrh kapitol prezentace, myšlenkové mapy, struktura rozhovoru nebo argumentace.",
        npiRozviji: "Porozumění komplexitě tématu, schopnost třídit a prioritizovat informace, vytvářet logickou strukturu.",
        npiProc: "Pomáhá žákům pojmout téma komplexněji a předem si promyslet obsahovou stavbu výstupu. ",
        prompt: `ROLE
Jsi "Strategický editor" a architekt obsahu. Tvým úkolem není psát texty, ale pomoci studentovi vytvořit logickou, pevnou a hlubokou strukturu (osnovu) pro jeho projekt, prezentaci nebo slohovou práci.

INSTRUKCE PRO PROCES (KROK ZA KROKEM)

FÁZE 1: DEFINICE RÁMCE
Nejprve se studenta zeptej na tyto tři věci (v jedné zprávě):
1. O jaký FORMÁT jde? (např. referát, prezentace, argumentační esej)
2. Kdo je CÍLOVÁ SKUPINA? (např. spolužáci, odborná komise)
3. Jaké je HLAVNÍ SDĚLENÍ? (Co si mají lidé odnést?)

FÁZE 2: TVORBA HLAVNÍCH BODŮ (KAPITOL)
- Požádej studenta, aby navrhl hlavní bloky (kapitoly) své práce. 
- Pomáhej mu je logicky seřadit. Pokud některý bod chybí (např. úvod nebo závěr), jemně ho na to upozorni.

FÁZE 3: DETAILNÍ ROZPRACOVÁNÍ (PODBODY)
- Jakmile máte hlavní body, procházej je se studentem jeden po druhém.
- Ke každému hlavnímu bodu se zeptej: "Co konkrétně v této části zazní? Jaké 2-3 podbody zde rozebereme?"
- Takto postupuj, dokud neprojdete celou osnovu.

FÁZE 4: FINALIZACE A KRITIKA
- Jakmile student řekne, že je hotovo, nebo že už ho nic nenapadá, udělej tyto dvě věci:
    1. Polož studentovi **DVE KRITICKÉ OTÁZKY K ZAMYŠLENÍ** ohledně jeho struktury (např. "Není bod 3 příliš obsáhlý oproti ostatním?" nebo "Jak tento bod souvisí s tvým hlavním sdělením?").
    2. Počkej na jeho reakci a případné úpravy.

UKONČENÍ (FINÁLNÍ VÝSTUP)
Poté, co student odpoví na kritické otázky, vygeneruj finální verzi v tomto formátu:
1. **NÁZEV PROJEKTU**
2. **STRUKTUROVANÁ OSNOVA** (použij hierarchické odrážky: Hlavní bod -> Podbod -> Detail).
3. **ZÁVĚREČNÉ DOPORUČENÍ EDITORU:** (Jedna věta, na co si dát při samotném psaní největší pozor).
`
    },
    {
        id: 303,
        icon: "fa-lightbulb",
        title: "3. Brainstorming",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["kreativita", "inspirace"],
        mojeNapady: `<ul><li>Zkopíruj prompt</li>
                         <li>Otevři si rozhraní pro tvorbu AI Asistenta</li>
                         <li>Do pole instrukce vlož celý text promptu</li>
                         <li>Pojmenuj asistenta, např. BOŘIČ STEREOTYPŮ</li>
                         <li>Ulož svého nového asistenta</li>
                         <li>A těš se na využití</li></ul>`,
        mojeFunkce: `<ul><li>Otevři svého nového asistenta BOŘIČ STEREOTYPŮ</li>
                         <li>Napiš téma je: ... a vlož soubory, ze kterých má asistent čerpat, či zadej webovou stránku nebo nech jen téma</li>
                         <li>Napiš cílovou metu, co má žák na konci umět</li>
                         <li>Klikni na odkaz Sdílet a pošli odkaz žákům</li>
                         <li>Žák konverzaci zahájí pozdravem a volbou světa, ve kterém chce výuku</li>
                         <li>Nech žáka vést rozhovor s chatbotem a odpovídat na jeho otázky až na cílovou metu</li></ul>`,
        mojeUkazky: "Odborné téma, odhalení události, zeměpisné místo, vysvěltení pojmu, pohovor na místo ...",
        npiPopis: "Žáci využívají GenAI k rozvíjení nápadů, pro inspiraci nebo hledání různých úhlů pohledu na dané téma.",
        npiPriklad: "Argumentace pro a proti, hledání různých pojetí tématu, možností či neobvyklých řešení nebo forem.",
        npiRozviji: "Posiluje kreativní myšlení, schopnost rozvíjet myšlenku, vnímat téma z více úhlů pohledu.",
        npiProc: "Pomáhá překonat tvůrčí bloky, podporuje sdílení myšlenek a divergentní myšlení.",
        prompt: `ROLE
`        
    },
    {
        id: 304,
        icon: "fa-calendar-check",
        title: "4. Plánování",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["organizace", "postup"],
        mojeNapady: `<ul><li>Zkopíruj prompt</li>
                         <li>Otevři si rozhraní pro tvorbu AI Asistenta</li>
                         <li>Do pole instrukce vlož celý text promptu</li>
                         <li>Pojmenuj asistenta, např. SOKRATOVSKÝ PRŮVODCE</li>
                         <li>Ulož svého nového asistenta</li>
                         <li>A těš se na využití</li></ul>`,
        mojeFunkce: `<ul><li>Otevři svého nového asistenta SOKRATOVSKÝ PRŮVODCE</li>
                         <li>Napiš téma je: ... a vlož soubory, ze kterých má asistent čerpat, či zadej webovou stránku nebo nech jen téma</li>
                         <li>Napiš cílovou metu, co má žák na konci umět</li>
                         <li>Klikni na odkaz Sdílet a pošli odkaz žákům</li>
                         <li>Žák konverzaci zahájí pozdravem a volbou světa, ve kterém chce výuku</li>
                         <li>Nech žáka vést rozhovor s chatbotem a odpovídat na jeho otázky až na cílovou metu</li></ul>`,
        mojeUkazky: "Odborné téma, odhalení události, zeměpisné místo, vysvěltení pojmu, pohovor na místo ...",
        npiPopis: "Žáci s pomocí GenAI plánují postup práce, rozvrhují dílčí kroky a vytvářejí časový plán. ",
        npiPriklad: "Rozdělení úlohy na dílčí kroky, návrh harmonogramu projektu, plán postupu při psaní slohové práce.",
        npiRozviji: "Schopnost organizace a realistického plánování cílů.",
        npiProc: "Pomáhá žákům rozvrhnout si práci na základě konkrétních možností. ",
        prompt: `ROLE
`
    },
    {
        id: 305,
        icon: "fa-magnifying-glass-chart",
        title: "5. Vylepšení výstupu",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["kritické_myšlení", "revize"],
        mojeNapady: `<ul><li>Zkopíruj prompt</li>
                         <li>Otevři si rozhraní pro tvorbu AI Asistenta</li>
                         <li>Do pole instrukce vlož celý text promptu</li>
                         <li>Pojmenuj asistenta, např. SOKRATOVSKÝ PRŮVODCE</li>
                         <li>Ulož svého nového asistenta</li>
                         <li>A těš se na využití</li></ul>`,
        mojeFunkce: `<ul><li>Otevři svého nového asistenta SOKRATOVSKÝ PRŮVODCE</li>
                         <li>Napiš téma je: ... a vlož soubory, ze kterých má asistent čerpat, či zadej webovou stránku nebo nech jen téma</li>
                         <li>Napiš cílovou metu, co má žák na konci umět</li>
                         <li>Klikni na odkaz Sdílet a pošli odkaz žákům</li>
                         <li>Žák konverzaci zahájí pozdravem a volbou světa, ve kterém chce výuku</li>
                         <li>Nech žáka vést rozhovor s chatbotem a odpovídat na jeho otázky až na cílovou metu</li></ul>`,
        mojeUkazky: "Odborné téma, odhalení události, zeměpisné místo, vysvěltení pojmu, pohovor na místo ...",
        npiPopis: "Žáci kriticky hodnotí výstup vygenerovaný pomocí AI - hledají nepřesnosti a výstup vylepšují. ",
        npiPriklad: "Žáci pomocí GenAI vygenerují text na dané téma, posuzují jeho kvalitu a navrhnou vylepšení. ",
        npiRozviji: "Kritické myšlení, jazykovou kulturu, schopnost posoudit kvalitu informací. ",
        npiProc: "Učí žáky vnímat výstup GenAI pouze jako výchozí bod pro další vylepšení. ",
        prompt: `ROLE
`    },
    {
        id: 306,
        icon: "fa-comment-dots",
        title: "6. Zpětná vazba",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["reflexe", "evaluace"],
         mojeNapady: `<ul><li>Zkopíruj prompt</li>
                         <li>Otevři si rozhraní pro tvorbu AI Asistenta</li>
                         <li>Do pole instrukce vlož celý text promptu</li>
                         <li>Pojmenuj asistenta, např. SOKRATOVSKÝ PRŮVODCE</li>
                         <li>Ulož svého nového asistenta</li>
                         <li>A těš se na využití</li></ul>`,
        mojeFunkce: `<ul><li>Otevři svého nového asistenta SOKRATOVSKÝ PRŮVODCE</li>
                         <li>Napiš téma je: ... a vlož soubory, ze kterých má asistent čerpat, či zadej webovou stránku nebo nech jen téma</li>
                         <li>Napiš cílovou metu, co má žák na konci umět</li>
                         <li>Klikni na odkaz Sdílet a pošli odkaz žákům</li>
                         <li>Žák konverzaci zahájí pozdravem a volbou světa, ve kterém chce výuku</li>
                         <li>Nech žáka vést rozhovor s chatbotem a odpovídat na jeho otázky až na cílovou metu</li></ul>`,
        mojeUkazky: "Odborné téma, odhalení události, zeměpisné místo, vysvěltení pojmu, pohovor na místo ...",
        npiPopis: "Žáci na základě daných kritérií využijí GenAI pro zhodnocení své práce a svůj výstup vylepšují. ",
        npiPriklad: "Chatbot ohodnotí žákův výstup na základě pedagogem daných kritérií. Žák dle vlastního uvážení výstup upraví. ",
        npiRozviji: "Schopnost reflektovat vlastní práci, porozumět hodnoticím kritériím. ",
        npiProc: "Umožňuje žákům dostat okamžitou zpětnou vazbu a kvalitnější výstup. ",
        prompt: `ROLE
`    },
    {
        id: 307,
        icon: "fa-comments",
        title: "7. Argumentace",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["diskuze", "rétorika"],
        mojeNapady: `<ul><li>Zkopíruj prompt</li>
                         <li>Otevři si rozhraní pro tvorbu AI Asistenta</li>
                         <li>Do pole instrukce vlož celý text promptu</li>
                         <li>Pojmenuj asistenta, např. SOKRATOVSKÝ PRŮVODCE</li>
                         <li>Ulož svého nového asistenta</li>
                         <li>A těš se na využití</li></ul>`,
        mojeFunkce: `<ul><li>Otevři svého nového asistenta SOKRATOVSKÝ PRŮVODCE</li>
                         <li>Napiš téma je: ... a vlož soubory, ze kterých má asistent čerpat, či zadej webovou stránku nebo nech jen téma</li>
                         <li>Napiš cílovou metu, co má žák na konci umět</li>
                         <li>Klikni na odkaz Sdílet a pošli odkaz žákům</li>
                         <li>Žák konverzaci zahájí pozdravem a volbou světa, ve kterém chce výuku</li>
                         <li>Nech žáka vést rozhovor s chatbotem a odpovídat na jeho otázky až na cílovou metu</li></ul>`,
        mojeUkazky: "Odborné téma, odhalení události, zeměpisné místo, vysvěltení pojmu, pohovor na místo ...",
        npiPopis: "Žáci argumentují s chatbotem a učí se rozpoznat silné i slabé stránky jeho argumentace.",
        npiPriklad: "Diskuze o kontroverzním tématu, identifikace klamů ve výstupech GenAI, obhajoba vlastního názoru.",
        npiRozviji: "Argumentační dovednosti, schopnost reagovat na oponenturu, kritické myšlení.",
        npiProc: "Umožňuje bezpečně trénovat diskuzi a učit se rozpoznat nekvalitní argumenty.",
        prompt: `ROLE
`    },
    {
        id: 308,
        icon: "fa-user-graduate",
        title: "8. Role experta",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["expertíza", "intervjů"],
        mojeNapady: `<ul><li>Zkopíruj prompt</li>
                         <li>Otevři si rozhraní pro tvorbu AI Asistenta</li>
                         <li>Do pole instrukce vlož celý text promptu</li>
                         <li>Pojmenuj asistenta, např. SOKRATOVSKÝ PRŮVODCE</li>
                         <li>Ulož svého nového asistenta</li>
                         <li>A těš se na využití</li></ul>`,
        mojeFunkce: `<ul><li>Otevři svého nového asistenta SOKRATOVSKÝ PRŮVODCE</li>
                         <li>Napiš téma je: ... a vlož soubory, ze kterých má asistent čerpat, či zadej webovou stránku nebo nech jen téma</li>
                         <li>Napiš cílovou metu, co má žák na konci umět</li>
                         <li>Klikni na odkaz Sdílet a pošli odkaz žákům</li>
                         <li>Žák konverzaci zahájí pozdravem a volbou světa, ve kterém chce výuku</li>
                         <li>Nech žáka vést rozhovor s chatbotem a odpovídat na jeho otázky až na cílovou metu</li></ul>`,
        mojeUkazky: "Odborné téma, odhalení události, zeměpisné místo, vysvěltení pojmu, pohovor na místo ...",
        npiPopis: "Žáci využívají GenAI jako simulaci experta v daném oboru a učí se klást správné otázky.",
        npiPriklad: "Chatbot hraje roli historika, lékaře nebo vědce, žáci s ním vedou rozhovor a porovnávají názory. ",
        npiRozviji: "Komunikační dovednosti, schopnost tázat se a interpretovat odpovědi. ",
        npiProc: "Rozvíjí schopnost pracovat s odbornými informacemi. ",
        prompt: `ROLE
`    },
    {
        id: 309,
        icon: "fa-rocket",
        title: "9. Inovace",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["technologie", "tvorba"],
        mojeNapady: `<ul><li>Zkopíruj prompt</li>
                         <li>Otevři si rozhraní pro tvorbu AI Asistenta</li>
                         <li>Do pole instrukce vlož celý text promptu</li>
                         <li>Pojmenuj asistenta, např. SOKRATOVSKÝ PRŮVODCE</li>
                         <li>Ulož svého nového asistenta</li>
                         <li>A těš se na využití</li></ul>`,
        mojeFunkce: `<ul><li>Otevři svého nového asistenta SOKRATOVSKÝ PRŮVODCE</li>
                         <li>Napiš téma je: ... a vlož soubory, ze kterých má asistent čerpat, či zadej webovou stránku nebo nech jen téma</li>
                         <li>Napiš cílovou metu, co má žák na konci umět</li>
                         <li>Klikni na odkaz Sdílet a pošli odkaz žákům</li>
                         <li>Žák konverzaci zahájí pozdravem a volbou světa, ve kterém chce výuku</li>
                         <li>Nech žáka vést rozhovor s chatbotem a odpovídat na jeho otázky až na cílovou metu</li></ul>`,
        mojeUkazky: "Odborné téma, odhalení události, zeměpisné místo, vysvěltení pojmu, pohovor na místo ...",
        npiPopis: "Žáci experimentují s GenAI, navrhují a vyvíjejí nové přístupy, které slouží ve vzdělávání. ",
        npiPriklad: "Vytvoření vlastního AI asistenta pro výuku, vytvoření vzdělávacího nástroje pro spolužáky. ",
        npiRozviji: "Schopnost navrhovat a vytvářet technologie s reálným využitím. ",
        npiProc: "Podporuje aktivní přístup žáka jako tvůrce inovativního nástroje. ",
        prompt: `ROLE
`    },
    {
        id: 310,
        icon: "fa-brain",
        title: "10. Reflexe přínosu",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["metakognice", "strategie"],
        mojeNapady: `<ul><li>Zkopíruj prompt</li>
                         <li>Otevři si rozhraní pro tvorbu AI Asistenta</li>
                         <li>Do pole instrukce vlož celý text promptu</li>
                         <li>Pojmenuj asistenta, např. SOKRATOVSKÝ PRŮVODCE</li>
                         <li>Ulož svého nového asistenta</li>
                         <li>A těš se na využití</li></ul>`,
        mojeFunkce: `<ul><li>Otevři svého nového asistenta SOKRATOVSKÝ PRŮVODCE</li>
                         <li>Napiš téma je: ... a vlož soubory, ze kterých má asistent čerpat, či zadej webovou stránku nebo nech jen téma</li>
                         <li>Napiš cílovou metu, co má žák na konci umět</li>
                         <li>Klikni na odkaz Sdílet a pošli odkaz žákům</li>
                         <li>Žák konverzaci zahájí pozdravem a volbou světa, ve kterém chce výuku</li>
                         <li>Nech žáka vést rozhovor s chatbotem a odpovídat na jeho otázky až na cílovou metu</li></ul>`,
        mojeUkazky: "Odborné téma, odhalení události, zeměpisné místo, vysvěltení pojmu, pohovor na místo ...",
        npiPopis: "Žáci hodnotí, zda využití GenAI v konkrétních úlohách bylo přínosem v jejich výukovém procesu. ",
        npiPriklad: "Zhodnocení využití GenAI v projektech, porovnání různých přístupů využití GenAI. ",
        npiRozviji: "Schopnost přemýšlet o vlastním myšlení, plánovat a řídit své učení. ",
        npiProc: "Pomáhá žákům využívat GenAI vědomě a efektivně v souladu s vlastním stylem učení. ",
        prompt: `ROLE
`    }
];