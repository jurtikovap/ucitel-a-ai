const dataObrazky = [
    {
        id: 101, // Obrázky mohou začínat stovkou
        kategorie: "obrazky",
        gridId: "grid-obrazky",
        title: "Výroba čokolády",
        tag: "Suroviny",
        hashtagy: ["Výroba", "Cukrář", "Infografika"],
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
    tag: "Biologie",
    hashtagy: ["Řezník", "Technologie", "Porážka", "Maso"],
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
    tag: "Odborný výcvik",
    hashtagy: ["Cukrář", "Technologie", "Dort"],
    desc: "Detailní vědecká ilustrace jednotlivých vrstev dortu.",
    prompt: `Vytvoř detailní 2D ilustraci složení dortu...`,
    
    // TADY JE TA CESTA:
    img: "../img/ukazky/dort_vrstvy.jpg", 
    type: "image"
},

{
    id: 104,
    kategorie: "obrazky",
    gridId: "grid-obrazky",
    title: "Rozložené zařízení",
    tag: "Informatika",
    hashtagy: ["iPhone", "Informatika", "Technika"],
    desc: "Detailní vědecká ilustrace rozloženého zařízení.",
    prompt: `Vytvoř infografiku rozloženého zařízení <span class="promenna">[ZAŘÍZENÍ]</span>
`,
    
    // TADY JE TA CESTA:
    imgs: ["../img/ukazky/iPhone_rozlozeni.jpg", "../img/ukazky/iPhone_struktura.jpg"], // Pole dvou obrázků
    type: "gallery" 
},


];

