const dataObrazky = [
    {
        id: 111, // Obrázky mohou začínat stovkou
        kategorie: "obrazky",
        gridId: "grid-obrazky",
        title: "Recepty",
        tag: "Kuchař",
        hashtagy: ["Recepty", "Suroviny", "Infografika"],
        desc: "Suroviny a různé recepty. První obrázek generován pomocí ChatGPT, druhý pomocí Copilota a třetí pomocí Gemini.",
        prompt: `Vzdělávací infografická karta s receptem, která je součástí JEDNOTNÉ SÉRIE RECEPTŮ. Styl musí striktně dodržovat čistou, minimalistickou a vzdušnou estetiku této série.

Pozadí: Čisté, ve světlé barvě: PASTELOVĚ ŽLUTá. Kompozice zachovává velké množství prázdného prostoru. 

Struktura a prvky:
1. NAHOŘE UPROSTŘED: Velký, dominantní nadpis v češtině, vyvedený <span class="promenna">BARVA</span> tučným sans-serif písmem (stejné písmo pro celou sérii): "<span class="promenna">NÁZEV JÍDLA</span>".
2. NA ÚROVNI HORNÍCH ŠTÍTKŮ (Identické písmo a výška):
- ZCELA VLEVO (POSUNUTO VÝŠE): Nápis "<span class="promenna">KATEGORIE</span>" v identickém hezkém, elegantním, mírně ozdobném ručně psaném písmu. 
- ZCELA VPRAVO (POSUNUTO VÝŠE): Malá, diskrétní visačka s nápisem: "Recepty" (malé ozdobné logo s malou siluetou vařečky) v identickém hezkém, elegantním, mírně ozdobném ručně psaném písmu. 
Oba nápisy (vlevo i vpravo) musí být na NAPROSTO STEJNÉ horizontální úrovni. 
3. POD HLAVNÍM NADPISEM JÍDLA: Žádný další text ani obrázek. Prostor je prázdný a čistý.
4. UPROSTŘED: Vysoce kvalitní, realistická fotografie hotového jídla <span class="promenna">JÍDLO</span>. 
5. KOLEM FOTOGRAFIE JÍDLA: Volně, ale esteticky rozmístěné reálné suroviny, které jsou potřeba pro recept (viz seznam surovin). Měřítko miniatur je zachováno.
6. MEZI FOTOGRAFIÍ JÍDLA A SEZNAMEM SUROVIN: Větší oddělovač (ozdobná dvojitá tenká čára, horní delší, spodní kratší). Nad a pod oddělovačem estetické volné místo.
7. DOLE UPROSTŘED (SEZNAM SUROVIN): Seznam surovin vyjmenovaný v jednom sloupci pod sebou, bez odrážek.
- Písmo surovin: Elegantní, čitelné, mírně ozdobné, vypadající jako úhledné ruční písmo (stejný typ a decentní velikost pro celou sérii).
- Seznam k vygenerování (přesně): "<span class="promenna">SEZNAM SUROVIN S GRAMÁŽÍ</span>". 

Stylistická pravidla pro konzistenci:
- Zachování prvků: Umístění nadpisu, štítků, stylu náčiní a typu písma (sans-serif pro nadpis, ruční pro štítky a suroviny) musí být na všech kartách identické.
- Velikost písma: Velikost písma popisků (surovin) a štítků musí být decentní, stejná na všech kartách, a výrazně menší než hlavní nadpis.
- Jazyk: Veškerý text musí být v češtině a se správnou diakritikou.
- Důležité: Zabránit generování velkých textových bloků, které by zaplňovaly celou plochu. Udržovat minimalistický a vzdušný layout..`,        
    imgs: ["../img/ukazky/recept_chatgpt.jpg", "../img/ukazky/recept_copilot.jpg", "../img/ukazky/recept_gemini.jpg"], // Pole dvou obrázků
    type: "gallery" // Nový typ pro naši logiku
    },
    
    {
        id: 101, // Obrázky mohou začínat stovkou
        kategorie: "obrazky",
        gridId: "grid-obrazky",
        title: "Výroba čokolády",
        tag: "Cukrář",
        hashtagy: ["Výroba", "Suroviny", "Infografika"],
        desc: "Detailní infografika výroby čokolády.",
        prompt: 
`Vytvoř infografický obrázek <span class="promenna">PRODUKT</span>, ilustrující proces její výroby od surovin až po konečný konzumovatelný produkt.
Kombinuj realistickou fotografii nebo fotorealistické rendery s technickými vysvětlivkami (anotacemi) umístěnými přímo na nich.
Dominantně zobraz konečný potravinářský produkt a zároveň vizuálně rozepiš, jak se vyrábí.
Použij perokresbu ve stylu černého inkoustu a text (vzhled technického pera, food-engineering náčrtu) na čistě bílém studiovém pozadí, včetně:
    • Identifikace surovin (zdrojové ingredience, plodiny nebo vstupy)
    • Jednotlivých fází zpracování (sklizeň, rafinace, míchání, ohřev, fermentace, sušení, balení atd.)
    • Šipek ukazujících tok transformace od suroviny → meziprodukty → konečný produkt
    • Výřezů (cutaway) nebo rozložených pohledů (exploded-view) klíčových fází zpracování
    • Popisků zařízení nebo procesů (mlýny, lisy, pece, fermentory, rafinérie, formy)
    • Štítků pojmenovávajících každou fázi výroby
    • Ukazatelů množství, teploty, času nebo tlaku, kde je to relevantní
    • Jednoduchých schematických diagramů vysvětlujících, jak k transformaci dochází

Vizuálně uspořádej proces tak, aby byl čitelný a intuitivní, jako food engineeringový nebo průmyslový designový list.
Název <span class="promenna">[PRODUKT]</span> umísti do ručně kresleného rámečku s technickými anotacemi v jednom rohu.

Pravidla pro styl a rozvržení:
    • Skutečný potravinářský produkt zůstává jasně viditelný pod anotacemi
    • Fáze zpracování působí naskicovaně, technicky a vzdělávacím dojmem
    • Jasná progrese od surových ingrediencí k hotovému jídlu
    • Čistá kompozice s vyváženým negativním prostorem (negative space)
    • Vzdělávací, food-manufacturingový / průmyslový manuál / dojem muzejního exponátu

Vizuální styl: Estetika minimální technické ilustrace, černá perokresba přes realistické snímky jídla, precizní, ale mírně ručně kreslený pocit.
Barevná paleta: Čistě bílé pozadí, pouze černé anotační čáry a text. Žádné barvy.
Výstup: 1080×1080, ultra-ostrý, optimalizovaný pro sociální sítě, bez vodoznaku.`,        
    imgs: ["../img/ukazky/coko_vyroba.jpg", "../img/ukazky/coko_vyroba_2.jpg"], // Pole dvou obrázků
    type: "gallery" // Nový typ pro naši logiku
    },

  {
    id: 110,
    kategorie: "obrazky",
    gridId: "grid-obrazky",
    title: "Zdraví v potravinách",
    tag: "Kuchař",
    hashtagy: ["Zdraví", "Potraviny"],
    desc: "Ilustrace zdravé výživy. Při generování v jednom chatu různých potravin je zajištěno, že všechny plakáty dodržují stejný styl a estetiku, aby byly konzistentní v rámci série. První obrázek je vygenerovaný pomocí Gemini, druhý ChatGPT a třetí a čtvrtý Copilotem.",
    prompt: `Infografický plakát, který je součástí JEDNOTNÉ SÉRIE VZDĚLÁVACÍCH PLAKÁTŮ o zdraví. Styl musí striktně dodržovat čistou, minimalistickou a vzdušnou estetiku, která byla definována pro tuto sérii. 

Pozadí je čisté, ve světlé pastelové barvě: <span class="promenna">BARVA</span>. Kompozice musí zachovat velké množství volného bílého prostoru, aby plakát nepůsobil přeplněně.

Uprostřed plakátu je umístěna vysoce kvalitní, realistická fotografie <span class="promenna">POTRAVINA</span>.

Struktura a prvky:
1. NAHOŘE UPROSTŘED: Velký a dominantní nadpis v češtině, vyvedený stejným tučným sans-serif písmem jako v předchozích dílech série: "<span class="promenna">NÁZEV POTRAVINY</span>".
2. VPRAVO NAHOŘE: Identický, malý, diskrétní ozdobný štítek (např. s logem listu) s textem: "Zdravé potraviny". Musí vypadat přesně jako na ostatních plakátech série.
3. KOLEM POTRAVINY (V PROSTORU): 4 až 6 krátkých českých popisků se zdravotními přínosy. Tyto popisky jsou napsány MENŠÍM, jemným a elegantním písmem, který se používá pro sérii, a jsou k potravině připojeny jemnými ručně kreslenými přerušovanými šipkami. Písmo popisků musí být výrazně menší než hlavní nadpis a musí kolem něj být hodně volného prostoru.

Stylistiká pravidla pro konzistenci:
- Písmo popisků: Elegantní, čitelné, mírně ozdobné, vypadající jako úhledné ruční písmo, v decentní velikosti.
- Jazyk: Veškerý text musí být v češtině a se správnou diakritikou.
- Zachování prvků: Umístění nadpisu, štítku, stylu šipek a typu písma musí být na všech plakátech identické.
- Formát: <span class="promenna">např. Vertikální, 2:3; čtvercový</span>.
    `,
    imgs: ["../img/ukazky/zdravi_1.jpg", "../img/ukazky/zdravi_2.jpg", "../img/ukazky/zdravi_3.jpg", "../img/ukazky/zdravi_4.jpg"], // Pole dvou obrázků
    type: "gallery"
},    

    {
    id: 102,
    kategorie: "obrazky",
    gridId: "grid-obrazky",
    title: "Rozdělení masa",
    tag: "Řezník",
    hashtagy: ["Technologie", "Porážka", "Maso"],
    desc: "Detailní vědecká ilustrace rozdělení hovězího masa.",
    prompt: `Vytvoř infografiku řeznických řezů pro <span class="promenna">MASO</span>
Zadání pro generování:
Tato šablona slouží k vytvoření ultra ostré, technicky přesné infografiky o řeznických řezech konkrétního druhu masa. 
Infografika musí mít vzhled průmyslového manuálu nebo blueprintu s vysokým kontrastem a klinickou přesností.
Formát: 1080x1080, ultra ostrý, optimalizovaný pro sociální sítě, bez vodoznaku
Celkový Styl a Estetika: Atmosféra průmyslového manuálu, blueprintu, architektonického rýsování a klinické přesnosti. Vysoký kontrast, přesné černé inkoustové linky
přes realistickou fotografii. Vyvážený prázdný prostor.

Struktura a Obsah Infografiky:
1. Název a Záhlaví
 V horním LEVÉM rohu, v ručně kresleném technickém rámečku, je velkým písmem uveden název: <span class="promenna">MASO</span>.
 Integrovaný do záhlaví je ručně kreslený diagram se šipkami znázorňujícími tok zpracování: Jatečné tělo → Základní řezy (Primal Cuts) → Maloobchodní řezy (Retail Cuts).
2. Hlavní Vizuál (Uprostřed)
 Základ: Hyperrealistický studiový snímek celé <span class="promenna">ZVÍŘE</span> na čistě bílém pozadí.
 Překryv: Minimalistická technická skica černou tuší (styl technického pera), která přesně vymezuje základní řeznické řezy přímo přes fotografii zvířete.
3. Technické Popisky a Vodící Linky
 K identifikaci jednotlivých svalových skupin použij přesné tenké černé vodící linky a šipky, které vedou k popiskům psaným technickým rukopisem. 
 Žádné bubliny. Každá část všech existujících řezů je identifikována.
4. Datové technické parametry (Technickým rukopisem)
  U každého řezu jsou uvedeny:
    Doba zrání: např. '14–21 dní.
    Skladovací teplota: např. '0–2 °C'.
    Doporučené použití zobrazeno ikonami: ['Gril', 'Dušení', 'Pečení', 'Steak']. (Vyberte relevantní pro dané maso).

Infografika obsahuje detailní rozložené technické pohledy na <span class="promenna">[DRUH MASA]</span>.
 Tyto pohledy ukazují vnitřní strukturu řezu. Pohledy jsou rýsovány technickým perem s detailní mřížkou a schématy svalových vláken.`,
    
    // TADY JE TA CESTA:
    imgs: ["../img/ukazky/hovezi.jpg", "../img/ukazky/jehneci.jpg"], // Pole dvou obrázků
    type: "gallery" // Nový typ pro naši logiku
},

  {
    id: 103,
    kategorie: "obrazky",
    gridId: "grid-obrazky",
    title: "Složení dortu",
    tag: "Cukrář",
    hashtagy: ["Technologie", "Dort"],
    desc: "Detailní vědecká ilustrace jednotlivých vrstev dortu.",
    prompt: `Vytvoř jemnou, ručně malovanou ilustraci řezu dortem v akvarelovém stylu. 
    Dort má <span class="promenna">hladký světle hnědý potah</span> a je zobrazen zepředu jako čistý výřez. Nahoře bude umístěno <span class="promenna">ovoce (jahody, borůvky a maliny), který tvoří kruh po vrchním okraji dortu.</span>
    Uvnitř jsou vrstvy <span class="promenna">kakaového piškotu promazané bílým krémem, oříšková křupavá vrstva, čokoládové mousse, tenká malinová gelová vložka</span>.
    Skládání vrstev: začínáme spodní vrstvou a postupujeme nahoru: <span class="promenna">piškot, oříšková vrstva (tenká), krém, piškot, malinová vložka, krém, piškot, mousse (tenká vrstva), krém a piškot</span>.
    Styl je minimalistický, jemné pastelové barvy, měkké stínování, realistická ale ilustrativní textura, podobné ruční kresbě v cukrářské knize. 
    Ne fotorealistické, spíš elegantní akvarelová malba na světlém neutrálním pozadí. 
    přidej popisky jednotlivých vrstev s tenkými vodicími linkami, které vedou k textu psanému elegantním rukopisem.
    `,
    img: "../img/ukazky/dort_vrstvy.jpg", 
    type: "image"
},

{
    id: 107,
    kategorie: "obrazky",
    gridId: "grid-obrazky",
    title: "Rozložený burger",
    tag: "Kuchař",
    hashtagy: ["Maso", "Jídlo", "Vaření"],
    desc: "Detailní infografika rozloženého burgeru.",
    prompt: `Vytvoř hyperrealistickou redakční food infografiku pro <span class="promenna">JÍDLO</span>. 
    Zobraz hlavní jídlo krásně naservírované v misce nebo na talíři ve spodní části, vypadající čerstvě připravené, horké a lákavé. 
    Nad ním zobraz jeho typické ingredience vznášející se nebo levitující ve vzduchu, jako by byly zachyceny v momentu zmrazeného pohybu (motion-freeze). 
    Zahrň ingredience: hlavní komponenty pokrmu, běžně používaná zelenina, bylinky nebo ozdoby pro daný pokrm; omáčky, koření nebo dochucovadla odpovídající k pokrmu; texturní prvky (drobky, stříkance, pára)
    Kompozice: Čistý vertikální layout, jídlo ukotvené dole, ingredience stoupající vzhůru v uspořádání popírajícím gravitaci. Pozadí, které se hodí ke stylu kuchyně pro zadaný pokrm.
    Designové prvky: Jasné české popisky pojmenovávající každou surovinu, tenké vodicí linky. Styl profesionálního gastro magazínu. Ve vzdělávacím duchu.
    Světlo a nálada: Filmové studiové osvětlení, teplé tóny, viditelná pára a lesklé odlesky, pohybově zmrazené složky pro dynamický efekt.
    Technická kvalita: Nízká hloubka ostrosti (bokeh), ultra ostré detaily surovin, ultrarealistická kvalita ve vysokém rozlišení vhodná pro sociální média nebo tisk, bez vodoznaku. 
    Poměr stran 1:1.
    `,
    img: "../img/ukazky/jidlo_burger.jpg", 
    type: "image"
},

{
    id: 104,
    kategorie: "obrazky",
    gridId: "grid-obrazky",
    title: "Rozložené zařízení",
    tag: "Fotograf",
    hashtagy: ["iPhone", "Fotoaparát", "Technika"],
    desc: "Detailní vědecká ilustrace rozloženého zařízení.",
    prompt: `Vytvoř technickou infografiku <span class="promenna">ZAŘÍZENÍ</span> 
    v 45stupňové izometrické 3D perspektivě (isometric 3D perspective) ukazující zařízení v mírném náklonu pro odhalení hloubky a rozměrů.
    Kombinuj realistický fotorealistický render s technickými anotacemi černou tuší na čistě bílém pozadí. 
    
    Zahrň:
    • Štítky klíčových komponentů s barevně odlišenými popisovými poli (callout boxes).
    • Viditelnost vnitřních prvků skrze průhledné/řezové sekce (cutaway sections).
    • Měření, rozměry a přesné měřítko.
    • Popisy materiálů a počty kusů.
    • Barevně kódované šipky pro funkce/toky: ČERVENÁ (napájení/baterie), MODRÁ (data/konektivita), ORANŽOVÁ (teplo/procesor), ZELENÁ (senzory/haptika).
    • Jednoduchá schémata nebo diagramy průřezů, kde je to relevantní.
    
    Název „<span class="promenna">ZAŘÍZENÍ</span>“ umísti do ručně kresleného technického rámečku (horní levý roh).
    
    Styl: Černá perokresba (technické pero/architektonický styl), skicované, ale přesné. Objekt zůstává jasně viditelný. Estetika vzdělávacího muzejního exponátu. Čistá kompozice, vyvážený negativní prostor.
    Perspektiva: Izometrický 3D úhel – nakloněný pro dramatické zobrazení hloubky, rozměrů a vnitřní architektury. Jako profesionální rozbor produktu (product teardown) nebo inženýrský manuál.
    Barvy: Hustota akcentů ~10–15 %. Dominantní černá. Bílé pozadí.Výstup: 1080×1080, ultra ostré, optimalizované pro sociální sítě.
    `,
    imgs: ["../img/ukazky/foto_nikon.jpg", "../img/ukazky/iPhone_struktura.jpg"], // Pole dvou obrázků
    type: "gallery" 
},

{
    id: 108,
    kategorie: "obrazky",
    gridId: "grid-obrazky",
    title: "Mapa Prahy",
    tag: "Cestovní ruch",
    hashtagy: ["Mapa", "Zeměpis", "Praha"],
    desc: "Stará mapa Prahy s památkami a ikonami na staré mapě. První obrázek generován pomocí ChatGPT, druhý pomocí Copilota a třetí pomocí Gemini.",
    prompt: `Vytvoř vizuálně úchvatný, edukativní infografický obrázek v stylu "street-style mapa" <span class="promenna">MĚSTO</span> (historické centrum).

Základ a Pozadí:
Mapa je umístěna na texturovaném povrchu ze starého, zvětralého pergamenu, který tvoří podklad. Pozadí je tmavší, aby lépe vynikly detaily miniatur.

3D Dioráma (Vystupující prvky):
Z povrchu pergamenu, jako 3D městské diorama, vystupuje vysoce detailní, fotorealistická miniaturní verze <span class="promenna">MĚSTO</span>. Všechny prvky "rostou" přímo z mapy.

Klíčové památky a dominanty (Zahrnout):
Dioráma musí obsahovat detailní miniatury těchto ikonických staveb:
<span class="promenna">
1.  NÁZEV PAMÁTKY 1, NAPŘ. HRAD NEBO KATEDRÁLA
2.  NÁZEV PAMÁTKY 2, NAPŘ. IKONICKÝ MOST NEBO VĚŽ
3.  NÁZEV PAMÁTKY 3, NAPŘ. STAROBYLÁ RADNICE NEBO DIVADLO</span>
Tyto dominanty jsou klíčovými body na mapě.

Přírodní prvek a integrace:
Přírodní prvek <span class="promenna">NÁZEV ŘEKY NEBO JEZERA</span> je plynule integrován do mapy a proplouvá jím několik miniaturních loděk, které pomáhají udržet měřítko celého města.

Prvek městského života a dopravy:
Do diorámatu jsou začleněny živé prvky:
1.  Městský život: Miniaturní verze <span class="promenna">AKCE, NAPŘ. VÁNOČNÍ TRHY na NAPŘ. STAROMĚSTSKÉM NÁMĚSTÍ</span>.
2.  Ikonická doprava: Na mapě je zobrazena <span class="promenna">NAPŘ. HISTORICKÁ TRAMVAJ</span>, která je pro město typická.

Extra detaily:
Aby diorama působilo uvěřitelně, přidej jemné detaily: dlážděné kostky na ulicích, miniaturní lampy veřejného osvětlení a drobné, nepatrné postavičky lidí, které zvýrazňují obrovské měřítko památek. 

Estetika a formát:
- Osvětlení: Jemné studiové osvětlení, které vytváří hluboké stíny a zvýrazňuje 3D efekt.
- Efekt: Filmová hloubka ostrosti, která zaměřuje pozornost na centrum diorámatu.
- Formát: Vertikální, 2:3.
    `,
    imgs: ["../img/ukazky/Praha_chatgpt.jpg", "../img/ukazky/Praha_copilot.jpg", "../img/ukazky/Praha_gemini.jpg"], // Pole dvou obrázků
    type: "gallery" 
},

  {
    id: 105,
    kategorie: "obrazky",
    gridId: "grid-obrazky",
    title: "Složení kůže",
    tag: "Kosmetička",
    hashtagy: ["Kůže", "Zdravověda"],
    desc: "Detailní ilustrace řezem kůže.",
    prompt: `Vytvoř infografiku: <span class="promenna">STRUKTURA KŮŽE</span>
Hlavní Vizuál (Uprostřed)
Základ: Hyperrealistický 3D makro snímek (render) příčného řezu lidskou kůží na čistě bílém pozadí. Musí být vidět reálná textura pórů, jemných chloupků a struktura tkáně.
Překryv: Minimalistická technická skica černou tuší, která přesně vymezuje vrstvy kůže přímo přes fotografii.
Technické Popisky a Vodící Linky
Místo bublin přesné tenké černé šipky k popiskům (technický rukopis):

Hlavní vrstvy: <span class="promenna">'Pokožka' (Epidermis), 'Škára' (Dermis), 'Podkoží' (Hypodermis)</span>.
Specifické struktury: <span class="promenna">'Rohová vrstva' (Stratum Corneum), 'Melanocyty', 'Kolagenová a elastinová vlákna', 'Mazová žláza', 'Vlasový folikul', 'Krevní kapiláry'</span>.

Datové Body a Parametry (Technickým rukopisem)
U každé vrstvy technické parametry:
<span class="promenna">např. Pokožka: tloušťka (0,05–1,5 mm) ..., škára: ...</span>

Rozložené Pohledy (Exploded Views)
Detail póru: Technický nákres vývodu mazové žlázy.
Detail kolagenní sítě: Mikroskopický pohled na propletená vlákna s vyznačením pružnosti (elasticity).

Grafy a Stupnice (Dolní Roh)
Graf Hydratace: Technický diagram ukazující transepidermální ztrátu vody (TEWL) v závislosti na integritě kožní bariéry.
Stupnice pH: Lineární technická osa od kyselého po alkalické prostředí.

Celkový Styl a Estetika
Atmosféra: Lékařský manuál, blueprint, dermato-kosmetická příručka.
Vizuál: Vysoký kontrast, černé linky přes "živou" tkáň.
Název: <span class="promenna">STRUKTURA KŮŽE</span> v rýsovaném rámečku v horním rohu.
    `,
    img: "../img/ukazky/kuze_slozeni.jpg", 
    type: "image"
},

{
    id: 109,
    kategorie: "obrazky",
    gridId: "grid-obrazky",
    title: "Architektura Karlova mostu",
    tag: "Cestovní ruch",
    hashtagy: ["Karlův most", "Architektura", "Praha"],
    desc: "Architektura Karlova mostu. První obrázek generován pomocí Gemini, druhý pomocí Copilota a třetí pomocí ChatGPT.",
    prompt: `Vytvoř vysoce detailní a edukativní infografický obrázek v stylu technického inženýrského manuálu, který nese název: <span class="promenna">NÁZEV PAMÁTKY (MĚSTO)</span> - Inženýrský manuál.

Hlavní Vizuál (Základ):
Základ tvoří reálná fotografie <span class="promenna">NÁZEV PAMÁTKY v MĚSTO</span> za jasného denního světla. Památka musí být zobrazena tak, aby vynikly její architektonické prvky (např. z ptačí perspektivy, z boku nebo čelní pohled, podle typu stavby).

Překryv a Technické Popisky:
Přímo přes reálnou fotografii je překryta vrstva vysoce detailních, křídových skic (bílými nebo modrými čárami) a technických poznámek ve stylu blueprintu (modrotisku).

Název: V horním rohu je v ručně kresleném technickém rámečku umístěn název '<span class="promenna">NÁZEV PAMÁTKY</span>' v přesném architektonickém bezpatkovém (sans-serif) písmu.

Křídové nákresy a diagramy:
Musí obsahovat následující technické analýzy:
1.  Diagram konstrukce: Detailní skica klíčové části konstrukce <span class="promenna">KONKRÉTNÍ ČÁST, NAPŘ. KLENBY MOSTU, PILÍŘE ROZHLEDNY</span> s měřeními a popisem hloubky/výšky.
2.  Zatížení a struktura: Diagram se šipkami demonstrující rozložení tlaku a zatížení, které konstrukce nese, od <span class="promenna">NAPŘ. OD STŘECHY K ZÁKLADŮM NEBO OD VOZOVKY K PILÍŘŮM</span>.
3.  Vnitřní pohled: Diagram vnitřního uspořádání <span class="promenna">KONKRÉTNÍ ČÁST, NAPŘ. PŮDORYS PODLAŽÍ VĚŽE, SCHODIŠTĚ</span> se skicami schodišť nebo místností.
4.  Identifikace materiálu: Přesné poznámky identifikující klíčové materiály <span class="promenna">KONKRÉTNÍ MATERIÁLY, NAPŘ. ŽULA, DŘEVO NEBO OCEL</span> s odhady množství a technickými popisy jejich vlastností.
5.  Detailní diagramy ochranných prvků: Skici specifických prvků, které chrání stavbu <span class="promenna">KONKRÉTNÍ OCHRANU, NAPŘ. LEDOLAMY, OPĚRNÉ SYSTÉMY</span> s vysvětlením jejich funkce.

Celkový Styl a Estetika:
- Atmosféra: Průmyslový inženýrský manuál, blueprint, muzejní kvalita, edukační.
- Vizuál: Vysoký kontrast, přesné bílé nebo modré křídové linky přes reálnou fotografii, technické/architektonické rukopisné popisky s kótami a měřítky.
- Formát: Ultra ostrý, vysoké rozlišení, vhodný pro velkoformátovou ilustraci, s viditelným reálným prostředím za poznámkami.
    `,
    imgs: ["../img/ukazky/Karluv_most_gemini.jpg", "../img/ukazky/Karluv_most_copilot.jpg", "../img/ukazky/Karluv_most_chatgpt.jpg"], // Pole dvou obrázků
    type: "gallery" 
},

  {
    id: 106,
    kategorie: "obrazky",
    gridId: "grid-obrazky",
    title: "Dělička na chleba",
    tag: "Pekař",
    hashtagy: ["Chleba", "Stroje", "Pekárna"],
    desc: "Detailní infografika děličky na chleba.",
    prompt: `Vytvoř technickou infografiku <span class="promenna">ZAŘÍZENÍ</span> 
    v 45stupňové izometrické 3D perspektivě (isometric 3D perspective) ukazující zařízení v mírném náklonu pro odhalení hloubky a rozměrů.
    Kombinuj realistický fotorealistický render s technickými anotacemi černou tuší na čistě bílém pozadí. 
    
    Zahrň:
    • Štítky klíčových komponentů s barevně odlišenými popisovými poli (callout boxes).
    • Viditelnost vnitřních prvků skrze průhledné/řezové sekce (cutaway sections).
    • Měření, rozměry a přesné měřítko.
    • Popisy materiálů a počty kusů.
    • Barevně kódované šipky pro funkce/toky: ČERVENÁ (napájení/baterie), MODRÁ (data/konektivita), ORANŽOVÁ (teplo/procesor), ZELENÁ (senzory/haptika).
    • Jednoduchá schémata nebo diagramy průřezů, kde je to relevantní.
    
    Název „<span class="promenna">ZAŘÍZENÍ</span>“ umísti do ručně kresleného technického rámečku (horní levý roh).
    
    Styl: Černá perokresba (technické pero/architektonický styl), skicované, ale přesné. Objekt zůstává jasně viditelný. Estetika vzdělávacího muzejního exponátu. Čistá kompozice, vyvážený negativní prostor.
    Perspektiva: Izometrický 3D úhel – nakloněný pro dramatické zobrazení hloubky, rozměrů a vnitřní architektury. Jako profesionální rozbor produktu (product teardown) nebo inženýrský manuál.
    Barvy: Hustota akcentů ~10–15 %. Dominantní černá. Bílé pozadí.Výstup: 1080×1080, ultra ostré, optimalizované pro sociální sítě.
    `,
    img: "../img/ukazky/chleba_delicka.jpg", 
    type: "image"
},

{
    id: 112,
    kategorie: "obrazky",
    gridId: "grid-obrazky",
    title: "iPhone",
    tag: "Informatika",
    hashtagy: ["Mobil", "iPhone", "Technika"],
    desc: "Detailní infografika iPhone.",
    prompt: `Vytvoř technickou infografiku <span class="promenna">ZAŘÍZENÍ</span> 
    v 45stupňové izometrické 3D perspektivě (isometric 3D perspective) ukazující zařízení v mírném náklonu pro odhalení hloubky a rozměrů.
    Kombinuj realistický fotorealistický render s technickými anotacemi černou tuší na čistě bílém pozadí. 
    
    Zahrň:
    • Štítky klíčových komponentů s barevně odlišenými popisovými poli (callout boxes).
    • Viditelnost vnitřních prvků skrze průhledné/řezové sekce (cutaway sections).
    • Měření, rozměry a přesné měřítko.
    • Popisy materiálů a počty kusů.
    • Barevně kódované šipky pro funkce/toky: ČERVENÁ (napájení/baterie), MODRÁ (data/konektivita), ORANŽOVÁ (teplo/procesor), ZELENÁ (senzory/haptika).
    • Jednoduchá schémata nebo diagramy průřezů, kde je to relevantní.
    
    Název „<span class="promenna">ZAŘÍZENÍ</span>“ umísti do ručně kresleného technického rámečku (horní levý roh).
    
    Styl: Černá perokresba (technické pero/architektonický styl), skicované, ale přesné. Objekt zůstává jasně viditelný. Estetika vzdělávacího muzejního exponátu. Čistá kompozice, vyvážený negativní prostor.
    Perspektiva: Izometrický 3D úhel – nakloněný pro dramatické zobrazení hloubky, rozměrů a vnitřní architektury. Jako profesionální rozbor produktu (product teardown) nebo inženýrský manuál.
    Barvy: Hustota akcentů ~10–15 %. Dominantní černá. Bílé pozadí.Výstup: 1080×1080, ultra ostré, optimalizované pro sociální sítě.
    `,
    imgs: ["../img/ukazky/iPhone_rozlozeni.jpg", "../img/ukazky/iPhone_struktura.jpg"], // Pole dvou obrázků
    type: "gallery"
},




];

