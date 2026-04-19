const dataLavice = [

{
    groupTitle: "1. Otázky na míru",
    items: [
        {
            id: "l-1-1",
            title: "Diferencovaný kvíz",
            popis: "AI vytvoří 3 úrovně stejných otázek (lehká, střední, těžká), aby si každý žák vybral svou výzvu.",
            prompt: "Vytvoř 5 otázek k tématu [TÉMA] ve třech úrovních obtížnosti: Bronzová (základ), Stříbrná (aplikace) a Zlatá (analýza)."
        },
        {
            id: "l-1-2",
            title: "Provokativní otázka dne",
            popis: "Otázka, na kterou neexistuje jedna správná odpověď a která rozproudí diskuzi v úvodu hodiny.",
            prompt: "Napiš jednu kontroverzní nebo hlubokou otázku k tématu [TÉMA], která nemá jednoznačné řešení a donutí žáky debatovat."
        },
        {
            id: "l-1-3",
            title: "Obrácený test",
            popis: "AI vygeneruje odpovědi a žáci k nim musí vymyslet co nejpreciznější otázky.",
            prompt: "Zde jsou 3 odpovědi: [ODPOVĚDI]. Vymysli ke každé z nich otázku, na kterou by tato odpověď byla naprosto přesná."
        },
        {
            id: "l-1-4",
            title: "Propojovací hádanka",
            popis: "AI najde nečekanou souvislost mezi probíranou látkou a něčím z běžného života žáků.",
            prompt: "Jak souvisí [TÉMA] s [POPULÁRNÍ HRA/FILM/KONÍČEK]? Vytvoř z toho krátkou hádanku pro žáky."
        },
        {
            id: "l-1-5",
            title: "Otázky od historické postavy",
            popis: "Místo učitele pokládá otázky k látce postava, která ji „zažila“.",
            prompt: "Představ si, že jsi [HISTORICKÁ POSTAVA]. Polož žákům 3 otázky o [UDÁLOST], které bys jim položil, kdybys je dnes potkal."
        },
        {
            id: "l-1-6",
            title: "Slepá mapa pojmů",
            popis: "AI popíše 5 pojmů bez použití jejich názvu a žáci hádají, o co jde.",
            prompt: "Popiš mi 5 klíčových pojmů z tématu [TÉMA], ale nesmíš použít kořen toho slova. Udělej z toho soutěž pro třídu."
        },
        {
            id: "l-1-7",
            title: "Detektor nesmyslů",
            popis: "Kvíz, kde jsou schválně nesmyslné možnosti, a žáci musí vysvětlit, proč jsou špatně.",
            prompt: "Vytvoř 3 otázky o [TÉMA]. U každé uveď jednu správnou odpověď a dvě záměrně vtipné nebo nesmyslné, ale k tématu. Žáci musí zdůvodnit nesmyslnost."
        }
    ]
},

{
    groupTitle: "2. Vysvětlování a analogie",
    items: [
        {
            id: "l-2-1",
            title: "Jako pro pětileté dítě (ELI5)",
            popis: "Extrémní zjednodušení složitého konceptu bez ztráty podstaty.",
            prompt: "Vysvětli mi [SLOŽITÝ POJEM] tak, jako by mi bylo 5 let. Použij jednoduchá slova a přirovnání z dětského světa."
        },
        {
            id: "l-2-2",
            title: "Bláznivá analogie",
            popis: "Vysvětlení látky pomocí něčeho naprosto nečekaného (např. buňka jako továrna na čokoládu).",
            prompt: "Vysvětli fungování [POJEM] pomocí analogie k [NĚCO ABSURDNÍHO - např. cirkus, hokejový zápas, kuchyně]."
        },
        {
            id: "l-2-3",
            title: "Příběh jednoho atomu/postavy",
            popis: "Personifikace látky – neosobní fakta se změní v dobrodružný příběh.",
            prompt: "Napiš krátký napínavý příběh, kde hlavní hrdina je [POJEM/ČÁSTICE] a prochází procesem [PROCES]."
        },
        {
            id: "l-2-4",
            title: "Srovnávací tabulka 'Tehdy vs. Teď'",
            popis: "AI porovná historickou událost nebo vědecký objev se současností.",
            prompt: "Udělej tabulku, kde srovnáš život v době [UDÁLOST] s dneškem v oblastech: jídlo, komunikace a doprava."
        },
        {
            id: "l-2-5",
            title: "Vysvětlení v 10, 50 a 100 slovech",
            popis: "Trénink stručnosti. Žáci vidí, jak se dá myšlenka kondenzovat.",
            prompt: "Vysvětli mi [TÉMA] přesně v 10 slovech, pak v 50 slovech a nakonec ve 100 slovech. Ukaž mi tu gradaci detailů."
        },
        {
            id: "l-2-6",
            title: "Interaktivní glosář",
            popis: "AI vysvětlí odborné termíny pomocí emoji a vtipných definic.",
            prompt: "Vytvoř slovníček 5 pojmů k [TÉMA]. Ke každému přidej trefné emoji a definici, která je srozumitelná teenagerům."
        },
        {
            id: "l-2-7",
            title: "Kdyby věci mluvily",
            popis: "Krátký monolog neživého předmětu (např. sopky, ústavy nebo odmocniny).",
            prompt: "Napiš krátký monolog, který vede [PŘEDMĚT/POJEM]. Stěžuje si na svou roli nebo vysvětluje, proč je důležitý."
        }
    ]
},

{
    groupTitle: "3. Práce s textem a daty",
    items: [
        {
            id: "l-3-1",
            title: "Stroj na shrnutí (TL;DR)",
            popis: "Z dlouhého a složitého textu vytáhne AI jen ty nejdůležitější myšlenky v bodech.",
            prompt: "Z tohoto textu [VLOŽIT TEXT] vypiš 3 hlavní myšlenky, které si musím zapamatovat k testu."
        },
        {
            id: "l-3-2",
            title: "Tvorba osnovy z chaosu",
            popis: "AI pomůže žákům uspořádat rozházené poznámky do logické struktury.",
            prompt: "Z těchto mých poznámek [POZNÁMKY] vytvoř logickou osnovu referátu. Rozděl to na Úvod, Jádro a Závěr."
        },
        {
            id: "l-3-3",
            title: "Hledej 'Kdo, Co, Kdy, Kde, Proč'",
            popis: "Rychlá analýza zprávy nebo článku pomocí klasických novinářských otázek.",
            prompt: "Přečti si [TEXT] a odpověz stručně na otázky: Kdo tam figuruje? Co se stalo? Kdy? Kde? a hlavně Proč?"
        },
        {
            id: "l-3-4",
            title: "Změna perspektivy vypravěče",
            popis: "Přepis textu z pohledu jiné postavy (např. z pohledu poraženého v bitvě).",
            prompt: "Vezmi tento popis bitvy [TEXT] a přepiš ho jako deníkový záznam vojáka z druhé strany konfliktu."
        },
        {
            id: "l-3-5",
            title: "Extrakce klíčových slov",
            popis: "Vytvoření 'cloudu' nejdůležitějších pojmů, které se v textu vyskytují.",
            prompt: "Vypiš 10 nejdůležitějších podstatných jmen z tohoto textu [TEXT]. U každého napiš jednou větou, proč je důležité."
        },
        {
            id: "l-3-6",
            title: "Zjednodušovač vědecké studie",
            popis: "Převod odborného jazyka do podoby článku v časopise ABC.",
            prompt: "Tento odborný text [TEXT] přepiš tak, aby mu rozuměl průměrný čtrnáctiletý žák, kterého to téma moc nebaví."
        },
        {
            id: "l-3-7",
            title: "Detektivní práce s daty",
            popis: "AI najde v tabulce nebo textu anomálii nebo zajímavý trend.",
            prompt: "Z těchto dat [DATA] vypiš 3 nejzajímavější fakta, která na první pohled nejsou vidět, ale jsou důležitá."
        }
    ]
},

{
    groupTitle: "4. Plánování",
    items: [
        {
            id: "l-4-1",
            title: "Harmonogram projektu",
            popis: "AI pomůže žákům rozdělit velký úkol na menší, zvládnutelné kroky a přiřadit jim reálné termíny.",
            prompt: "Pomoz mi naplánovat projekt na téma [TÉMA]. Rozvrhni práci na 4 týdny, urči milníky a odhadni časovou náročnost každého kroku."
        },
        {
            id: "l-4-2",
            title: "Rozdělení rolí v týmu",
            popis: "Na základě silných stránek žáků navrhne AI optimální rozdělení funkcí (koordinátor, rešeršista, grafik).",
            prompt: "Jsme 4členný tým. Máme grafika, psavce, mluvčího a organizátora. Rozděl nám úkoly pro projekt o [TÉMA] tak, aby každý využil svůj talent."
        },
        {
            id: "l-4-3",
            title: "Checklist kritérií úspěchu",
            popis: "Vytvoření kontrolního seznamu, podle kterého si žáci sami ověří, zda jejich práce splňuje zadání.",
            prompt: "Vytvoř checklist 10 bodů, které musí obsahovat kvalitní prezentace o [TÉMA], abychom dostali jedničku."
        },
        {
            id: "l-4-4",
            title: "Odhad zdrojů a pomůcek",
            popis: "AI zamyslí nad tím, co všechno bude k realizaci nápadu potřeba (materiál, software, kontakty).",
            prompt: "Co všechno budeme potřebovat pro realizaci pokusu/projektu [NÁZEV]? Udělej seznam materiálu a techniky."
        },
        {
            id: "l-4-5",
            title: "Krizový scénář (Murphyho zákony)",
            popis: "Žáci se učí předvídat problémy (např. nejde technika, chybí člen týmu) a připravit si záložní plán.",
            prompt: "Navrhni 3 věci, které se mohou při naší prezentaci o [TÉMA] pokazit, a ke každé napiš rychlé řešení."
        },
        {
            id: "l-4-6",
            title: "Myšlenková mapa zdrojů",
            popis: "Strukturovaný přehled, kde všude hledat relevantní a ověřené informace k tématu.",
            prompt: "Navrhni strukturu zdrojů pro referát o [TÉMA]. Kde kromě Wikipedie hledat fakta, obrázky a videa?"
        },
        {
            id: "l-4-7",
            title: "Plán závěrečné prezentace",
            popis: "Struktura 'vystoupení' – od úvodu přes hlavní argumenty až po prostor pro dotazy.",
            prompt: "Máme 10 minut na prezentaci o [TÉMA]. Rozvrhni nám čas po minutách: co říct v úvodu, co v jádru a jak zapojit publikum."
        }
    ]
},

{
    groupTitle: "5. Detektiv faktů",
    items: [
        {
            id: "l-5-1",
            title: "Hledej chybu v textu",
            popis: "AI vygeneruje odborný text na [TÉMA], do kterého schová určitý počet faktických chyb. Žáci je musí vypátrat.",
            prompt: "Napiš 3 odstavce na [TÉMA] pro obor [OBOR]. Do textu záměrně vlož faktické nesmysly. Napiš mi, kolik jsi jich tam schoval, ale neříkej mi, co jsou zač. Já je musím najít."
        },
        {
            id: "l-5-2",
            title: "Prověření zdroje",
            popis: "Analýza článku nebo tvrzení. AI pomůže simulovat proces ověřování faktů (fact-checking).",
            prompt: "Zde je tvrzení: [TVRZENÍ]. Navrhni 3 nezávislé způsoby nebo zdroje, jak si ověřit, zda je to pravda."
        },
        {
            id: "l-5-3",
            title: "Deepfake vs. Realita",
            popis: "Diskuze o tom, jak AI generuje obsah a jak poznat manipulaci v digitálním světě.",
            prompt: "Vysvětli mi na příkladu [TÉMA], jak může být tento obsah zneužit k tvorbě dezinformace a na co si dát pozor."
        },
        {
            id: "l-5-4",
            title: "Srovnání dvou pohledů",
            popis: "AI připraví dva protichůdné názory na stejný fakt a žáci analyzují jejich argumentační sílu.",
            prompt: "Napiš jeden odstavec podporující [NÁZOR A] a jeden odstavec podporující [NÁZOR B]. Oba musí znít přesvědčivě."
        },
        {
            id: "l-5-5",
            title: "Logické klamy",
            popis: "Hledání faulů v diskuzi. AI pomůže žákům rozpoznat útoky na osobu nebo falešná dilemata.",
            prompt: "V argumentu '[ARGUMENT]' najdi a pojmenuj logický klam. Vysvětli, proč je tato argumentace nekorektní."
        },
        {
            id: "l-5-6",
            title: "Detektor zaujatosti",
            popis: "Zkoumání emocí v textu. Je text neutrální, nebo se nás snaží někam dotlačit?",
            prompt: "Analyzuj tento text: [TEXT]. Je psán neutrálně, nebo obsahuje silně nabitá slova, která mají ovlivnit čtenáře?"
        },
        {
            id: "l-5-7",
            title: "Expert vs. Laik",
            popis: "Srovnání, jak stejnou informaci podává vědec a jak senzacechtivý web.",
            prompt: "Vysvětli [TÉMA] nejdříve jako suchou vědeckou definici a pak jako titulek bulvárního časopisu."
        },
        {
            id: "l-5-8",
            title: "Expert vs. Laik",
            popis: "Srovnání, jak stejnou informaci podává vědec a jak senzacechtivý web.",
            prompt: "Vysvětli [TÉMA] nejdříve jako suchou vědeckou definici a pak jako titulek bulvárního časopisu."
        }
    ]
},

{
        groupTitle: "6. Konstruktivní kritik",
        items: [
            {
                id: "l-6-1",
            title: "Sendvičová zpětná vazba",
            popis: "AI zhodnotí žákovu práci metodou: pochvala – co zlepšit – povzbuzení na závěr.",
            prompt: "Přečti si tento text: [TEXT]. Ohodnoť ho metodou sendviče: najdi 2 silné stránky, 2 konkrétní věci ke zlepšení a zakonči to motivujícím shrnutím."
        },
        {
            id: "l-6-2",
            title: "Kontrola podle kritérií",
            popis: "Žák vloží svou práci a AI ji ostřílí podle předem dané tabulky hodnocení (rubriky).",
            prompt: "Zde jsou kritéria hodnocení: [KRITÉRIA]. Zde je moje práce: [PRÁCE]. Ohodnot mě body 1-5 u každého kritéria a vysvětli proč."
        },
        {
            id: "l-6-3",
            title: "Jazykový korektor",
            popis: "AI neopraví text automaticky, ale vypíše seznam stylistických neobratností a navrhne elegantnější varianty.",
            prompt: "V tomto textu [TEXT] najdi 5 míst, která znějí kostrbatě nebo se v nich opakují slova. Navrhni, jak ty věty přepsat lépe."
        },
        {
            id: "l-6-4",
            title: "Simulace oponenta",
            popis: "AI se převtělí do role přísného (ale fér) kritika, který klade nepříjemné otázky k tématu.",
            prompt: "Představ si, že jsi oponent mé seminární práce na téma [TÉMA]. Polož mi 3 záludné otázky, které bys mi mohl dát u obhajoby."
        },
        {
            id: "l-6-5",
            title: "Hledač slabých míst",
            popis: "Rychlá analýza argumentace – kde chybí důkaz, kde je tvrzení příliš obecné.",
            prompt: "Projdi moji argumentaci v [TEXT]. Které tvrzení je podle tebe nejmíň podložené fakty? Navrhni, co tam doplnit."
        },
        {
            id: "l-6-6",
            title: "Pohled z jiné perspektivy",
            popis: "AI zkritizuje práci z pohledu jiné osoby (např. ekologa, historika, koncového uživatele).",
            prompt: "Mám návrh projektu na [NÁZEV]. Zkritizuj ho z pohledu člověka, který se velmi zajímá o ochranu životního prostředí. Co by mu vadilo?"
        },
        {
            id: "l-6-7",
            title: "Zpětná vazba na srozumitelnost",
            popis: "Test pro žáky: Dokáže AI z jejich textu pochopit hlavní myšlenku? Pokud ne, je text nesrozumitelný.",
            prompt: "Přečti si můj text [TEXT] a napiš mi jednou větou, co je podle tebe hlavní poselství. Pokud jsi to nepochopil, řekni mi, kde ses ztratil."
        },
        {
            id: "l-6-8",
            title: "Expert vs. Laik",
            popis: "Srovnání, jak stejnou informaci podává vědec a jak senzacechtivý web.",
            prompt: "Vysvětli [TÉMA] nejdříve jako suchou vědeckou definici a pak jako titulek bulvárního časopisu."
        }
    ]
},

{
    groupTitle: "7. Oponent a argumentátor",
    items: [
        {
            id: "l-7-1",
            title: "Ďáblův advokát",
            popis: "AI bude záměrně zpochybňovat každé žákovo tvrzení, aby ho donutila hledat silnější důkazy.",
            prompt: "Budu ti říkat své názory na [TÉMA]. Ty buď můj oponent, hledej v mých slovech slabiny a ptej se 'Proč si to myslíš?' nebo 'Máš pro to důkaz?'."
        },
        {
            id: "l-7-2",
            title: "Trénink vyjednávání",
            popis: "Simulace situace, kde žák musí AI o něčem přesvědčit (např. rozpočet na školní akci).",
            prompt: "Jsi ředitel školy a já jsem žák. Chci tě přesvědčit, abychom uspořádali [AKCE]. Buď skeptický k nákladům a bezpečnosti. Musím tě přesvědčit argumenty."
        },
        {
            id: "l-7-3",
            title: "Eristická dialektika",
            popis: "Ukázka neférových diskusních triků. AI předvede faul a žák ho musí pojmenovat.",
            prompt: "Předveď mi 3 příklady, jak se dá v diskuzi o [TÉMA] neférově zaútočit na oponenta místo na fakta. Vysvětli mi, jak se těmto trikům bránit."
        },
        {
            id: "l-7-4",
            title: "Rekonstrukce debaty",
            popis: "AI shrne debatu dvou stran a vypíchne, který argument byl nejsilnější a proč.",
            prompt: "Zde je přepis naší debaty: [TEXT]. Analyzuj, který můj argument byl nejvíce logický a který byl naopak jen emocionální."
        },
        {
            id: "l-7-5",
            title: "Změna perspektivy",
            popis: "Žák musí obhajovat názor, se kterým vnitřně nesouhlasí, aby pochopil druhou stranu.",
            prompt: "Vím, že [TÉMA] má dvě strany. Teď mě donuť obhajovat tu stranu, která tvrdí [NÁZOR]. Pomoz mi najít 3 rozumné argumenty pro tuto pozici."
        },
        {
            id: "l-7-6",
            title: "Příprava na panelovou diskuzi",
            popis: "AI vygeneruje seznam otázek, které by mohly padnout od publika po prezentaci.",
            prompt: "Prezentuji téma [TÉMA]. Představ si, že jsi publikum složené z odborníků i laiků. Napiš mi 5 otázek, na které bych se měl připravit."
        },
        {
            id: "l-7-7",
            title: "Argumentační pyramida",
            popis: "Stavba argumentu: Tvrzení -> Vysvětlení -> Důkaz -> Závěr.",
            prompt: "Pomoz mi postavit silný argument pro [TVRZENÍ]. Rozepiš ho do 4 kroků: Jasné tvrzení, logické vysvětlení, konkrétní příklad/důkaz a shrnutí."
        }
    ]
},

{
    groupTitle: "8. Simulátor rolí",
    items: [
        {
            id: "l-8-1",
            title: "Rozhovor s historickou postavou",
            popis: "Žáci dělají interview například s Karlem IV. nebo Marií Curie-Skłodowskou.",
            prompt: "Představ si, že jsi [POSTAVA]. Odpovídej mi v první osobě, používej dobový jazyk a vycházej z historických faktů o tvém životě."
        },
        {
            id: "l-8-2",
            title: "Kariérní poradce",
            popis: "AI simuluje experta v daném oboru (lékař, programátor, automechanik) a popisuje svou práci.",
            prompt: "Jsi zkušený [POVOLÁNÍ]. Popiš mi svůj běžný pracovní den a řekni mi, které 3 dovednosti jsou pro tvou práci nejdůležitější."
        },
        {
            id: "l-8-3",
            title: "Literární postava v úzkých",
            popis: "Žák radí postavě z povinné četby, jak vyřešit její dilema.",
            prompt: "Jsi [POSTAVA] z knihy [NÁZEV]. Právě prožíváš [DILEMA]. Já jsem tvůj přítel. Budeme si o tvé situaci povídat a já ti zkusím poradit."
        },
        {
            id: "l-8-4",
            title: "Tiskový mluvčí",
            popis: "Žák je mluvčí firmy v krizi a AI je dotírající novinář.",
            prompt: "Jsem tiskový mluvčí firmy, které právě [PROBLÉM]. Ty jsi investigativní novinář. Pokládej mi ostré otázky a já se pokusím situaci vysvětlit."
        },
        {
            id: "l-8-5",
            title: "Cizinec ve městě",
            popis: "Procvičování jazyka nebo reálií – AI je turista, který se ztratil.",
            prompt: "Jsi turista v [MĚSTO] a mluvíš pouze [JAZYK]. Ztratil ses a hledáš cestu k [PAMÁTKA]. Já ti budu pomáhat se zorientovat."
        },
        {
            id: "l-8-6",
            title: "Soudní proces",
            popis: "Simulace soudu, kde AI je soudce a žáci jsou žalobci nebo obhájci.",
            prompt: "Budeme simulovat soudní proces o [PROBLÉM]. Ty jsi spravedlivý soudce. Já budu obhajoba. Veď proces a na konci vynes rozsudek."
        },
        {
            id: "l-8-7",
            title: "Expert na etiketu",
            popis: "AI radí, jak se chovat v různých společenských situacích.",
            prompt: "Chystám se na [UDÁLOST]. Jsi odborník na etiketu. Řekni mi, jak se mám obléct, jak se zdravit a čemu se rozhodně vyhnout v konverzaci."
        }
    ]
},

{
    groupTitle: "9. Tvůrčí psaní a média",
    items: [
        {
            id: "l-9-1",
            title: "Společné psaní příběhu",
            popis: "Metoda 'každý chvilku tahá pilku' – žák napíše větu, AI pokračuje.",
            prompt: "Začneme psát napínavý příběh o [TÉMA]. Já napíšu první odstavec, ty napíšeš druhý a tak se budeme střídat. Každý odstavec musí končit cliffhangerem."
        },
        {
            id: "l-9-2",
            title: "Změna žánru",
            popis: "Přepis technického textu do formy pohádky, detektivky nebo sci-fi.",
            prompt: "Vezmi tento popis [TEXT] a přepiš ho jako scénář k akčnímu filmu nebo jako kapitolu z fantasy románu."
        },
        {
            id: "l-9-3",
            title: "Tvorba reklamního sloganu",
            popis: "Hledání úderných hesel pro školní projekt nebo fiktivní produkt.",
            prompt: "Vymysli 10 vtipných a zapamatovatelných sloganů pro [PRODUKT/PROJEKT]. Zaměř se na cílovou skupinu [VĚK]."
        },
        {
            id: "l-9-4",
            title: "Podcastový scénář",
            popis: "AI navrhne strukturu rozhovoru pro školní rádio nebo YouTube kanál.",
            prompt: "Chci natočit podcast o [TÉMA]. Navrhni mi osnovu na 15 minut: úvodní znělka, 3 hlavní otázky na hosta a závěrečné shrnutí."
        },
        {
            id: "l-9-5",
            title: "Titulek, který zaujme",
            popis: "Trénink psaní nadpisů (i s vysvětlením, co je to clickbait).",
            prompt: "Napiš 5 různých titulků pro článek o [TÉMA]: jeden seriózní, jeden vtipný, jeden provokativní a jeden bulvární. Vysvětli rozdíl."
        },
        {
            id: "l-9-6",
            title: "Básnické střevo",
            popis: "Tvorba básní, haiku nebo rapových textů na učební látku.",
            prompt: "Napiš krátký rapový text o [FYZIKÁLNÍ ZÁKON/HISTORICKÁ UDÁLOST]. Musí se to rýmovat a obsahovat klíčové pojmy."
        },
        {
            id: "l-9-7",
            title: "Středověký kronikář",
            popis: "Zápis aktuální události jazykem dávných kronik.",
            prompt: "Popiš včerejší [UDÁLOST VE ŠKOLE/MĚSTĚ] tak, jako bys byl kronikář v roce 1450. Používej archaismy a tehdejší pohled na svět."
        }
    ]
},

{
    groupTitle: "10. Reflexe a sebehodnocení",
    items: [
        {
            id: "l-10-1",
            title: "Karta sebehodnocení",
            popis: "AI pomůže žákovi zformulovat, co mu v projektu šlo a kde narazil na limity.",
            prompt: "Dělal jsem na projektu [NÁZEV]. Tady jsou moje pocity: [TEXT]. Pomoz mi to sepsat do strukturovaného sebehodnocení: Co se mi povedlo, co byla výzva a co udělám příště jinak."
        },
        {
            id: "l-10-2",
            title: "Deník učení (Metakognice)",
            popis: "Zamyšlení nad procesem: 'Jak jsem na to přišel?' místo 'Co je výsledek?'.",
            prompt: "Dnes jsme se učili o [TÉMA]. Polož mi 3 otázky, které mě donutí přemýšlet nad tím, jakým způsobem jsem si ty informace zapamatoval."
        },
        {
            id: "l-10-3",
            title: "Pětilístek",
            popis: "Tradiční reflexní metoda (podstatné jméno, 2 přídavná jména, 3 slovesa, věta, synonymum).",
            prompt: "Pomoz mi vytvořit 'Pětilístek' na téma [TÉMA]. Veď mě krok za krokem, abych ho vyplnil sám."
        },
        {
            id: "l-10-4",
            title: "Předpověď budoucího využití",
            popis: "K čemu mi to, co jsem se dnes naučil, bude v reálném životě?",
            prompt: "Naučil jsem se [LÁTKA]. Vymysli 3 reálné situace z běžného života dospělého člověka, kde se mi tato znalost bude hodit."
        },
        {
            id: "l-10-5",
            title: "Audit digitální stopy",
            popis: "Reflexe toho, jak žák s AI komunikoval – byl slušný? Byl srozumitelný?",
            prompt: "Zde je historie mého chatu s tebou: [ODKAZ/TEXT]. Ohodnoť moji schopnost zadávat prompty. Kde jsem byl nejasný a co bych měl v komunikaci s AI zlepšit?"
        },
        {
            id: "l-10-6",
            title: "Lekce pro budoucí já",
            popis: "Žák píše dopis svému budoucímu já o tom, co si chce z této hodiny zapamatovat.",
            prompt: "Napiš krátký motivační vzkaz pro mě (za rok), který mi připomene nejdůležitější myšlenku z dnešní lekce o [TÉMA]."
        },
        {
            id: "l-10-7",
            title: "Škálování spokojenosti",
            popis: "Rychlá reflexe pomocí škály 1-10 a zdůvodnění pozice.",
            prompt: "Na škále 1-10 se cítím na 7 v porozumění [TÉMA]. Zeptej se mě na dvě věci, které by mi pomohly dostat se na 9."
        }
    ]
}

];

// FUNKCE PRO ZOBRAZENÍ DETAILU GEMA
// Upravená funkce pro zobrazení detailu Gema
function showLaviceDetail(groupTitle, itemId, btnElement) {
    // 1. Zvýraznění aktivního tlačítka v menu
    document.querySelectorAll('.lavice-item-btn').forEach(b => b.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');

    // 2. Najít data konkrétního nápadu
    const group = dataLavice.find(g => g.groupTitle === groupTitle);
    const item = group.items.find(i => i.id === itemId);
    
    const detailBox = document.getElementById('lavice-detail');
    if (item && detailBox) {
        detailBox.innerHTML = `
            <div class="detail-card">
                <small style="color: #00838f;">${groupTitle}</small>
                <h2>${item.title}</h2>
                <div class="popis-box">
                    <strong>K čemu slouží:</strong><br>
                    ${item.popis}
                </div>
                <div class="prompt-box">
                    <strong>Prompt k vyzkoušení:</strong><br>
                    <code id="current-prompt-text">${item.prompt}</code>
                </div>
                <button class="mini-prep-btn" onclick="copyCurrentPrompt(this)" style="margin-top:20px">
                    <i class="fas fa-copy"></i> Kopírovat prompt
                </button>
            </div>
        `;
    }
}

function copyCurrentPrompt(btn) {
    // 1. Najdeme text přímo v tom elementu <code>
    const textToCopy = document.getElementById('current-prompt-text').innerText;
    
    // 2. Vytvoříme pomocný textarea pro kopírování
    const el = document.createElement('textarea');
    el.value = textToCopy;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    // 3. Vizuální zpětná vazba na tlačítku
    const originalContent = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Hotovo!';
    btn.style.backgroundColor = "#00838f"; // zezelená
    btn.style.color = "white";

    setTimeout(() => {
        btn.innerHTML = originalContent;
        btn.style.backgroundColor = ""; // vrátí se k CSS
        btn.style.color = "";
    }, 2000);
}
function initLaviceMenu() {
    const menuContainer = document.getElementById('lavice-menu');
    if (!menuContainer) return;

    let menuHTML = '';

    dataLavice.forEach((group, index) => {
        menuHTML += `
            <div class="lavice-group">
                <div class="lavice-group-title" onclick="toggleAccordion(${index})">
                    ${group.groupTitle} <i class="fas fa-chevron-down" style="float:right"></i>
                </div>
                
                <div id="group-content-${index}" class="group-content" style="display:none;">
                    ${group.items.map(item => `
                        <button class="lavice-item-btn" 
                                onclick="showLaviceDetail('${group.groupTitle}', '${item.id}', this)">
                            ${item.title}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    });

    menuContainer.innerHTML = menuHTML;
}

// Funkce, která otevírá/zavírá harmoniku
function toggleAccordion(index) {
    const content = document.getElementById(`group-content-${index}`);
    const isVisible = content.style.display === 'block';
    
    // Volitelné: Zavřít všechny ostatní, aby byla otevřená vždy jen jedna
    document.querySelectorAll('.group-content').forEach(el => el.style.display = 'none');
    
    // Otevřít/zavřít kliknutou
    content.style.display = isVisible ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', initLaviceMenu);

// Spustit generování menu po načtení stránky
document.addEventListener('DOMContentLoaded', initLaviceMenu);