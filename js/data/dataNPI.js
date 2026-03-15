const dataNPI = [
    {
        id: 301,
        icon: "fa-person-chalkboard",
        title: "1. Otázky na míru",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["individualizace", "aktivizace"],
        descNPI: "AI dokáže vytvořit různé sady otázek pro stejné téma podle náročnosti. Rozvíjí to schopnost učitele diferencovat výuku bez hodin přípravy.",
        mojeNapady: "<ul><li>Vytvoř sadu otázek pro 'únikovku' v hodině.</li><li>Nech AI simulovat otázky od zvídavého pětiletého dítěte pro ověření pochopení základu látky.</li><li>Generuj otázky, které propojují téma s aktuálním děním ve světě.</li></ul>",
        prompt: "Vytvoř 5 otevřených otázek k tématu 'Fotosyntéza' pro žáka 6. třídy ZŠ, který potřebuje látku zjednodušit, a 5 otázek pro nadaného žáka."
    },
    {
        id: 302,
        icon: "fa-sitemap",
        title: "2. Obsahová struktura",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["osnova", "priprava"],
        descNPI: "Pomoc při tvorbě osnovy hodiny nebo logického uspořádání nové látky. Umožňuje učiteli soustředit se na didaktické zpracování, zatímco AI navrhne kostru.",
        mojeNapady: "<ul><li>Nech AI navrhnout osnovu pro projektový den.</li><li>Požádej o strukturu výkladu, která propojuje dějepis s literaturou téže epochy.</li><li>Vytvoř logickou posloupnost experimentů pro hodinu chemie.</li></ul>",
        prompt: "Navrhni strukturu vyučovací hodiny na téma 'Průmyslová revoluce' (45 min) včetně motivačního úvodu a reflexe."
    },
    {
        id: 303,
        icon: "fa-lightbulb",
        title: "3. Brainstorming",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["nápady", "kreativita"],
        descNPI: "Překonání strachu z prázdného papíru. AI slouží jako partner pro generování prvotních nápadů, které pak učitel nebo žák rozvíjí.",
        mojeNapady: "<ul><li>Generuj 10 netradičních názvů pro školní časopis nebo projekt.</li><li>Hledejte s AI neobvyklé způsoby, jak využít staré pneumatiky v ekologii.</li><li>Vymysli zápletku pro krátké divadelní představení v hodině cizího jazyka.</li></ul>",
        prompt: "Navrhni 10 kreativních aktivit pro žáky 8. třídy, jak oslavit Den Země v areálu školy."
    },
    {
        id: 304,
        icon: "fa-magnifying-glass-chart",
        title: "4. Vylepšení výstupu",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["kritické_myšlení", "oprava"],
        descNPI: "Využití AI k revizi a kritickému hodnocení textů. Žáci se učí identifikovat chyby, zlepšovat styl a argumentaci.",
        mojeNapady: "<ul><li>Dej AI svůj text a požádej o 'ďáblova advokáta' – ať najde slabá místa v argumentech.</li><li>Nech AI přepsat odborný text do stylu bulvárního článku a rozeberte rozdíly.</li><li>Zkontroluj s AI srozumitelnost zadání úkolu pro žáky.</li></ul>",
        prompt: "Zkritizuj tento text z pohledu historika a najdi v něm logické chyby: [VLOŽIT TEXT]"
    },
    {
        id: 305,
        icon: "fa-user-tie",
        title: "5. Role experta / oponenta",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["diskuze", "simulace"],
        descNPI: "AI může simulovat historické postavy, vědce nebo oponenty v diskuzi. Rozvíjí to argumentační schopnosti a empatii.",
        mojeNapady: "<ul><li>Diskutuj s AI, která hraje Karla IV. o tom, proč založil univerzitu.</li><li>Nech AI oponovat tvým názorům na jadernou energii.</li><li>Simuluj pracovní pohovor v angličtině pro brigádu v zahraničí.</li></ul>",
        prompt: "Chovej se jako Jan Ámos Komenský. Budu ti klást otázky o moderním vzdělávání a ty mi odpovídej v souladu se svými názory."
    },
    {
        id: 306,
        icon: "fa-language",
        title: "6. Přeformulování a vysvětlení",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["zjednodušení", "inkluse"],
        descNPI: "Přizpůsobení složitosti textu různým cílovým skupinám. Klíčové pro inkluzi a žáky s odlišným mateřským jazykem.",
        mojeNapady: "<ul><li>Vysvětli kvantovou fyziku pomocí přirovnání k fotbalu.</li><li>Zkrať dlouhý článek na 3 klíčové body pro rychlé čtení.</li><li>Přelož instrukce k úkolu do ukrajinštiny/vietnamštiny pro žáky s OMJ.</li></ul>",
        prompt: "Vysvětli princip fungování inflace tak, aby to pochopilo desetileté dítě."
    },
    {
        id: 307,
        icon: "fa-comment-dots",
        title: "7. Zpětná vazba",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["formální_hodnocení", "podpora"],
        descNPI: "Okamžitá zpětná vazba pro žáka během tvůrčího procesu. AI nenahrazuje učitele, ale pomáhá žákovi s průběžným vylepšováním.",
        mojeNapady: "<ul><li>Vlož slohovou práci žáka a požádej AI o konstruktivní rady (bez známkování).</li><li>Nech AI zhodnotit tvůj plán hodiny podle Bloomovy taxonomie.</li><li>Vytvoř 'checklist' pro žáky, aby si sami zkontrolovali svou prezentaci.</li></ul>",
        prompt: "Poskytni zpětnou vazbu k této eseji. Zaměř se na logickou strukturu a srozumitelnost: [VLOŽIT TEXT]"
    },
    {
        id: 308,
        icon: "fa-vial-circle-check",
        title: "8. Tvorba zadání a kvízů",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["kvízy", "testování"],
        descNPI: "Rychlé generování procvičovacích testů, Kahoot kvízů nebo doplňovaček. Šetří čas učitele při rutinních činnostech.",
        mojeNapady: "<ul><li>Vytvoř tabulku s 10 pojmy a jejich definicemi pro pexeso.</li><li>Generuj text s úmyslnými gramatickými chybami k opravě.</li><li>Vymysli zadání pro skupinovou práci na téma udržitelný rozvoj.</li></ul>",
        prompt: "Vytvoř 10 multiple-choice otázek na téma 'Vybraná kapitola z fyziky' s klíčem správných odpovědí."
    },
    {
        id: 309,
        icon: "fa-chart-line",
        title: "9. Práce s daty a analýza",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["data", "analýza"],
        descNPI: "Analýza velkého množství textu nebo dat. Pomáhá žákům hledat souvislosti, trendy a vzorce v informacích.",
        mojeNapady: "<ul><li>Vlož výsledky školního dotazníku a nech AI shrnout hlavní trendy.</li><li>Nech AI analyzovat četnost slov v básni pro pochopení atmosféry.</li><li>Porovnej dva různé články o stejné události a najdi rozdíly v informování.</li></ul>",
        prompt: "Zanalyzuj tyto výsledky měření teploty a navrhni, jaký graf by byl nejvhodnější pro jejich prezentaci: [VLOŽIT DATA]"
    },
    {
        id: 310,
        icon: "fa-pen-nib",
        title: "10. Kreativní psaní",
        tag: "NPI Metodika",
        gridId: "grid-npi",
        hashtagy: ["tvorba", "příběhy"],
        descNPI: "Spolutvorba textů, psaní pokračování příběhů nebo experimentování s literárními styly. Rozvíjí fantazii a jazykový cit.",
        mojeNapady: "<ul><li>Napište s AI interaktivní příběh, kde o dalším kroku rozhodují žáci hlasováním.</li><li>Zkus přepsat pohádku o Červené karkulce jako policejní protokol.</li><li>Vytvoř text písně o periodické tabulce prvků v rapovém stylu.</li></ul>",
        prompt: "Napiš začátek napínavého příběhu o stroji času, který se zasekne v pravěku. Skonči v nejnapínavějším momentě."
    }
];