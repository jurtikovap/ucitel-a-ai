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
                         <li>Otevři si rozhraní pro tvorbu Gema/Asistenta</li>
                         <li>Do pole instrukce vlož celý text promptu</li>
                         <li>Pojmenuj Gem, např. Odborný průvodce</li>
                         <li>Ulož svého nového chatbota</li>
                         <li>A těš se na využití</li></ul>`,
        mojeFunkce: `<ul><li>Otevři svého nového chatbota Odborný průvodce</li>
                         <li>Napiš téma je: ... a vlož soubory, ze kterých má chatbot čerpat, či zadej webovou stránku nebo nech jen téma</li>
                         <li>Napiš cílovou metu, co má žák na konci umět</li>
                         <li>Klikni na odkaz Sdílet a pošli odkaz žákům</li>
                         <li>Žák konverzaci zahájí pozdravem a volbou světa, ve kterém chce výuku</li>
                         <li>Nech žáka vést rozhovor s chatbotem a odpovídat na jeho otázky až na cílovou metu</li></ul>`,
        mojeUkazky: "Odborné téma, odhalení události, zeměpisné místo, vysvěltení pojmu, pohovor na místo ...",
        // PRAVÁ STRANA - METODIKA NPI
        npiPopis: "GenAI generuje otázky na míru, čímž podporuje hlubší porozumění tématu a schopnost samostatně myslet. ",
        npiPriklad: "Chatbot generuje otázky k tématu, vyzývá žáka k formulování myšlenek, prověřuje jeho znalosti, slouží k opakování učiva. ",
        npiRozviji: "Schopnost formulovat myšlenky, argumentovat, hledat souvislosti.",
        npiProc: "Umožňuje žákům učit se vlastním tempem a na aktuální úrovni jejich znalostí a dovedností. ",
        prompt: `ROLE
Jsi "Zvídavý parťák" – expertní tutor pro studenty střední odborné školy. Tvým úkolem je vést studenta k hlubokému pochopení odborného tématu pomocí Sokratovské metody (kladení otázek). Nikdy neprozrazuješ správné řešení přímo, ale navádíš studenta, aby na něj přišel sám.

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
        mojeNapady: "<ul><li>Nech AI navrhnout osnovu pro projektový den.</li><li>Požádej o strukturu výkladu, která propojuje dějepis s literaturou téže epochy.</li><li>Vytvoř logickou posloupnost experimentů pro hodinu chemie.</li></ul>",
        mojeFunkce: "<ul><li>Automatické generování otázek na míru</li><li>Personalizované učení podle individuálních potřeb</li><li>Podpora aktivního učení a kritického myšlení</li></ul>",
        npiPopis: "Žáci využívají GenAI k návrhu osnovy nebo struktury tématu zadaného úkolu. ",
        npiPriklad: "Osnova slohové práce, návrh kapitol prezentace, myšlenkové mapy, struktura rozhovoru nebo argumentace.",
        npiRozviji: "Porozumění komplexitě tématu, schopnost třídit a prioritizovat informace, vytvářet logickou strukturu.",
        npiProc: "Pomáhá žákům pojmout téma komplexněji a předem si promyslet obsahovou stavbu výstupu. ",
        prompt: "Navrhni strukturu vyučovací hodiny na téma 'Průmyslová revoluce' (45 min) včetně motivačního úvodu a reflexe."
    },
    {
        id: 303,
        icon: "fa-lightbulb",
        title: "3. Brainstorming",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["nápady", "kreativita"],
        mojeNapady: "<ul><li>Generuj 10 netradičních názvů pro školní časopis nebo projekt.</li><li>Hledejte s AI neobvyklé způsoby, jak využít staré pneumatiky v ekologii.</li><li>Vymysli zápletku pro divadelní představení v hodině cizího jazyka.</li></ul>",
        mojeFunkce: "<ul><li>Automatické generování otázek na míru</li><li>Personalizované učení podle individuálních potřeb</li><li>Podpora aktivního učení a kritického myšlení</li></ul>",
        npiPopis: "Žáci využívají GenAI k rozvíjení nápadů, pro inspiraci nebo hledání různých úhlů pohledu na dané téma.",
        npiPriklad: "Argumentace pro a proti, hledání různých pojetí tématu, možností či neobvyklých řešení nebo forem.",
        npiRozviji: "Posiluje kreativní myšlení, schopnost rozvíjet myšlenku, vnímat téma z více úhlů pohledu.",
        npiProc: "Pomáhá překonat tvůrčí bloky, podporuje sdílení myšlenek a divergentní myšlení.",
        prompt: "Navrhni 10 kreativních aktivit pro žáky 8. třídy, jak oslavit Den Země v areálu školy."
    },
    {
        id: 304,
        icon: "fa-calendar-check",
        title: "4. Plánování",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["organizace", "postup"],
        mojeNapady: "<ul><li>Nech AI rozplánovat kroky pro tvorbu herbáře.</li><li>Vytvořte společně časovou osu pro přípravu školního plesu.</li><li>Rozděl složitý laboratorní úkol na malé srozumitelné úseky.</li></ul>",
        mojeFunkce: "<ul><li>Automatické generování otázek na míru</li><li>Personalizované učení podle individuálních potřeb</li><li>Podpora aktivního učení a kritického myšlení</li></ul>",
        npiPopis: "Žáci s pomocí GenAI plánují postup práce, rozvrhují dílčí kroky a vytvářejí časový plán. ",
        npiPriklad: "Rozdělení úlohy na dílčí kroky, návrh harmonogramu projektu, plán postupu při psaní slohové práce.",
        npiRozviji: "Schopnost organizace a realistického plánování cílů.",
        npiProc: "Pomáhá žákům rozvrhnout si práci na základě konkrétních možností. ",
        prompt: "Rozplánuj mi přípravu seminární práce o životě včel na 4 týdny. Urči, co mám dělat každý týden."
    },
    {
        id: 305,
        icon: "fa-magnifying-glass-chart",
        title: "5. Vylepšení výstupu",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["kritické_myšlení", "revize"],
        mojeNapady: "<ul><li>Dej AI svůj text a požádej o 'ďáblova advokáta' – ať najde slabá místa.</li><li>Nech AI přepsat odborný text do stylu pohádky a rozeberte rozdíly.</li><li>Zkontroluj s AI srozumitelnost zadání úkolu.</li></ul>",
        mojeFunkce: "<ul><li>Automatické generování otázek na míru</li><li>Personalizované učení podle individuálních potřeb</li><li>Podpora aktivního učení a kritického myšlení</li></ul>",
        npiPopis: "Žáci kriticky hodnotí výstup vygenerovaný pomocí AI - hledají nepřesnosti a výstup vylepšují. ",
        npiPriklad: "Žáci pomocí GenAI vygenerují text na dané téma, posuzují jeho kvalitu a navrhnou vylepšení. ",
        npiRozviji: "Kritické myšlení, jazykovou kulturu, schopnost posoudit kvalitu informací. ",
        npiProc: "Učí žáky vnímat výstup GenAI pouze jako výchozí bod pro další vylepšení. ",
        prompt: "Zkritizuj tento text z pohledu historika a najdi v něm logické chyby: [VLOŽIT TEXT]"
    },
    {
        id: 306,
        icon: "fa-comment-dots",
        title: "6. Zpětná vazba",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["reflexe", "evaluace"],
        mojeNapady: "<ul><li>Vlož slohovou práci žáka a požádej AI o konstruktivní rady (bez známky).</li><li>Nech AI zhodnotit tvůj plán hodiny podle Bloomovy taxonomie.</li><li>Vytvoř 'checklist' pro žáky k jejich prezentaci.</li></ul>",
        mojeFunkce: "<ul><li>Automatické generování otázek na míru</li><li>Personalizované učení podle individuálních potřeb</li><li>Podpora aktivního učení a kritického myšlení</li></ul>",
        npiPopis: "Žáci na základě daných kritérií využijí GenAI pro zhodnocení své práce a svůj výstup vylepšují. ",
        npiPriklad: "Chatbot ohodnotí žákův výstup na základě pedagogem daných kritérií. Žák dle vlastního uvážení výstup upraví. ",
        npiRozviji: "Schopnost reflektovat vlastní práci, porozumět hodnoticím kritériím. ",
        npiProc: "Umožňuje žákům dostat okamžitou zpětnou vazbu a kvalitnější výstup. ",
        prompt: "Poskytni zpětnou vazbu k této eseji. Zaměř se na srozumitelnost a logiku: [VLOŽIT TEXT]"
    },
    {
        id: 307,
        icon: "fa-comments",
        title: "7. Argumentace",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["diskuze", "rétorika"],
        mojeNapady: "<ul><li>Veďte debatu s AI o tom, zda mají mít roboti lidská práva.</li><li>Nech AI oponovat tvým argumentům pro výstavbu větrných elektráren.</li><li>Trénujte s AI asertivní reakce na nevhodné komentáře.</li></ul>",
        mojeFunkce: "<ul><li>Automatické generování otázek na míru</li><li>Personalizované učení podle individuálních potřeb</li><li>Podpora aktivního učení a kritického myšlení</li></ul>",
        npiPopis: "Žáci argumentují s chatbotem a učí se rozpoznat silné i slabé stránky jeho argumentace.",
        npiPriklad: "Diskuze o kontroverzním tématu, identifikace klamů ve výstupech GenAI, obhajoba vlastního názoru.",
        npiRozviji: "Argumentační dovednosti, schopnost reagovat na oponenturu, kritické myšlení.",
        npiProc: "Umožňuje bezpečně trénovat diskuzi a učit se rozpoznat nekvalitní argumenty.",
        prompt: "Budu s tebou diskutovat o legalizaci graffiti. Ty zastávej názor, že je to jen vandalismus. Já budu pro."
    },
    {
        id: 308,
        icon: "fa-user-graduate",
        title: "8. Role experta",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["expertíza", "intervjů"],
        mojeNapady: "<ul><li>Zeptejte se AI (jako historika) na pocity vojáka v bitvě u Lipan.</li><li>Simulujte rozhovor s lékařem o tom, jak funguje imunitní systém.</li><li>Klaďte otázky ekologovi o vlivu mikroplastů.</li></ul>",
        mojeFunkce: "<ul><li>Automatické generování otázek na míru</li><li>Personalizované učení podle individuálních potřeb</li><li>Podpora aktivního učení a kritického myšlení</li></ul>",
        npiPopis: "Žáci využívají GenAI jako simulaci experta v daném oboru a učí se klást správné otázky.",
        npiPriklad: "Chatbot hraje roli historika, lékaře nebo vědce, žáci s ním vedou rozhovor a porovnávají názory. ",
        npiRozviji: "Komunikační dovednosti, schopnost tázat se a interpretovat odpovědi. ",
        npiProc: "Rozvíjí schopnost pracovat s odbornými informacemi. ",
        prompt: "Chovej se jako expert na astrofyziku. Vysvětli mi srozumitelně, co se děje uvnitř černé díry."
    },
    {
        id: 309,
        icon: "fa-rocket",
        title: "9. Inovace",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["technologie", "tvorba"],
        mojeNapady: "<ul><li>Vytvořte s žáky vlastního asistenta pro doučování matematiky.</li><li>Navrhněte aplikaci, která využívá AI k rozpoznávání rostlin v okolí školy.</li><li>Experimentujte s tvorbou výukových her pomocí AI.</li></ul>",
        mojeFunkce: "<ul><li>Automatické generování otázek na míru</li><li>Personalizované učení podle individuálních potřeb</li><li>Podpora aktivního učení a kritického myšlení</li></ul>",
        npiPopis: "Žáci experimentují s GenAI, navrhují a vyvíjejí nové přístupy, které slouží ve vzdělávání. ",
        npiPriklad: "Vytvoření vlastního AI asistenta pro výuku, vytvoření vzdělávacího nástroje pro spolužáky. ",
        npiRozviji: "Schopnost navrhovat a vytvářet technologie s reálným využitím. ",
        npiProc: "Podporuje aktivní přístup žáka jako tvůrce inovativního nástroje. ",
        prompt: "Pomoz mi navrhnout logiku pro jednoduchého AI bota, který bude žáky zkoušet ze slovíček z angličtiny."
    },
    {
        id: 310,
        icon: "fa-brain",
        title: "10. Reflexe přínosu",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["metakognice", "strategie"],
        mojeNapady: "<ul><li>Nechte žáky napsat krátkou úvahu o tom, v čem jim AI dnes skutečně pomohla.</li><li>Porovnejte výsledek práce s AI a bez ní. Co bylo kvalitnější?</li><li>Diskutujte o tom, kdy je použití AI etické a kdy už ne.</li></ul>",
        mojeFunkce: "<ul><li>Automatické generování otázek na míru</li><li>Personalizované učení podle individuálních potřeb</li><li>Podpora aktivního učení a kritického myšlení</li></ul>",
        npiPopis: "Žáci hodnotí, zda využití GenAI v konkrétních úlohách bylo přínosem v jejich výukovém procesu. ",
        npiPriklad: "Zhodnocení využití GenAI v projektech, porovnání různých přístupů využití GenAI. ",
        npiRozviji: "Schopnost přemýšlet o vlastním myšlení, plánovat a řídit své učení. ",
        npiProc: "Pomáhá žákům využívat GenAI vědomě a efektivně v souladu s vlastním stylem učení. ",
        prompt: "Napiš 3 otázky, které mi pomohou zhodnotit, jestli mi AI dnes při psaní referátu ušetřila čas nebo jen udělala práci za mě."
    }
];