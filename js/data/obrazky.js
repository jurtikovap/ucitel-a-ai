const dataObrazky = [
    {
        id: 101, // Obrázky mohou začínat stovkou
        kategorie: "obrazky",
        gridId: "grid-obrazky",
        title: "Výroba čokolády",
        tag: "Cukrář",
        hashtagy: ["Výroba", "Suroviny", "Infografika"],
        desc: "Detailní infografika výroby čokolády.",
        prompt: 
`Vytvoř infografický obrázek <span class="promenna">[PRODUKT]</span>, ilustrující proces její výroby od surovin až po konečný konzumovatelný produkt.
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
    // Sem budeš připisovat jen další obrázky
    {
    id: 102,
    kategorie: "obrazky",
    gridId: "grid-obrazky",
    title: "Rozdělení masa",
    tag: "Řezník",
    hashtagy: ["Technologie", "Porážka", "Maso"],
    desc: "Detailní vědecká ilustrace rozdělení hovězího masa.",
    prompt: `Vytvoř infografiku řeznických řezů pro <span class="promenna">[MASO]</span>
Zadání pro generování:
Tato šablona slouží k vytvoření ultra ostré, technicky přesné infografiky o řeznických řezech konkrétního druhu masa. 
Infografika musí mít vzhled průmyslového manuálu nebo blueprintu s vysokým kontrastem a klinickou přesností.
Formát: 1080x1080, ultra ostrý, optimalizovaný pro sociální sítě, bez vodoznaku
Celkový Styl a Estetika: Atmosféra průmyslového manuálu, blueprintu, architektonického rýsování a klinické přesnosti. Vysoký kontrast, přesné černé inkoustové linky
přes realistickou fotografii. Vyvážený prázdný prostor.

Struktura a Obsah Infografiky:
1. Název a Záhlaví
 V horním LEVÉM rohu, v ručně kresleném technickém rámečku, je velkým písmem uveden název: <span class="promenna">[MASO]</span>.
 Integrovaný do záhlaví je ručně kreslený diagram se šipkami znázorňujícími tok zpracování: Jatečné tělo → Základní řezy (Primal Cuts) → Maloobchodní řezy (Retail Cuts).
2. Hlavní Vizuál (Uprostřed)
 Základ: Hyperrealistický studiový snímek celé <span class="promenna">[ZVÍŘE]</span> na čistě bílém pozadí.
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
    prompt: `Vytvoř hyperrealistickou redakční food infografiku pro <span class="promenna">[JÍDLO]</span>. 
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
    prompt: `Vytvoř technickou infografiku <span class="promenna">[ZAŘÍZENÍ]</span> 
    v 45stupňové izometrické 3D perspektivě (isometric 3D perspective) ukazující zařízení v mírném náklonu pro odhalení hloubky a rozměrů.
    Kombinuj realistický fotorealistický render s technickými anotacemi černou tuší na čistě bílém pozadí. 
    
    Zahrň:
    • Štítky klíčových komponentů s barevně odlišenými popisovými poli (callout boxes).
    • Viditelnost vnitřních prvků skrze průhledné/řezové sekce (cutaway sections).
    • Měření, rozměry a přesné měřítko.
    • Popisy materiálů a počty kusů.
    • Barevně kódované šipky pro funkce/toky: ČERVENÁ (napájení/baterie), MODRÁ (data/konektivita), ORANŽOVÁ (teplo/procesor), ZELENÁ (senzory/haptika).
    • Jednoduchá schémata nebo diagramy průřezů, kde je to relevantní.
    
    Název „<span class="promenna">[ZAŘÍZENÍ]</span>“ umísti do ručně kresleného technického rámečku (horní levý roh).
    
    Styl: Černá perokresba (technické pero/architektonický styl), skicované, ale přesné. Objekt zůstává jasně viditelný. Estetika vzdělávacího muzejního exponátu. Čistá kompozice, vyvážený negativní prostor.
    Perspektiva: Izometrický 3D úhel – nakloněný pro dramatické zobrazení hloubky, rozměrů a vnitřní architektury. Jako profesionální rozbor produktu (product teardown) nebo inženýrský manuál.
    Barvy: Hustota akcentů ~10–15 %. Dominantní černá. Bílé pozadí.Výstup: 1080×1080, ultra ostré, optimalizované pro sociální sítě.
    `,
    imgs: ["../img/ukazky/foto_nikon.jpg", "../img/ukazky/iPhone_struktura.jpg"], // Pole dvou obrázků
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
    prompt: `Vytvoř detailní 2D ilustraci složení dortu...`,
    img: "../img/ukazky/kuze_slozeni.jpg", 
    type: "image"
},

  {
    id: 106,
    kategorie: "obrazky",
    gridId: "grid-obrazky",
    title: "Dělička na chleba",
    tag: "Pekař",
    hashtagy: ["Chleba", "Stroje", "Pekárna"],
    desc: "Detailní infografika děličky na chleba.",
    prompt: `Vytvoř technickou infografiku <span class="promenna">[ZAŘÍZENÍ]</span> 
    v 45stupňové izometrické 3D perspektivě (isometric 3D perspective) ukazující zařízení v mírném náklonu pro odhalení hloubky a rozměrů.
    Kombinuj realistický fotorealistický render s technickými anotacemi černou tuší na čistě bílém pozadí. 
    
    Zahrň:
    • Štítky klíčových komponentů s barevně odlišenými popisovými poli (callout boxes).
    • Viditelnost vnitřních prvků skrze průhledné/řezové sekce (cutaway sections).
    • Měření, rozměry a přesné měřítko.
    • Popisy materiálů a počty kusů.
    • Barevně kódované šipky pro funkce/toky: ČERVENÁ (napájení/baterie), MODRÁ (data/konektivita), ORANŽOVÁ (teplo/procesor), ZELENÁ (senzory/haptika).
    • Jednoduchá schémata nebo diagramy průřezů, kde je to relevantní.
    
    Název „<span class="promenna">[ZAŘÍZENÍ]</span>“ umísti do ručně kresleného technického rámečku (horní levý roh).
    
    Styl: Černá perokresba (technické pero/architektonický styl), skicované, ale přesné. Objekt zůstává jasně viditelný. Estetika vzdělávacího muzejního exponátu. Čistá kompozice, vyvážený negativní prostor.
    Perspektiva: Izometrický 3D úhel – nakloněný pro dramatické zobrazení hloubky, rozměrů a vnitřní architektury. Jako profesionální rozbor produktu (product teardown) nebo inženýrský manuál.
    Barvy: Hustota akcentů ~10–15 %. Dominantní černá. Bílé pozadí.Výstup: 1080×1080, ultra ostré, optimalizované pro sociální sítě.
    `,
    img: "../img/ukazky/chleba_delicka.jpg", 
    type: "image"
},

];

