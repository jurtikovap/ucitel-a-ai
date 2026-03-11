const dataObrazky = [
    {
        id: 101, // Obrázky mohou začínat stovkou
        kategorie: "obrazky",
        gridId: "grid-obrazky",
        title: "Výroba čokolády",
        tag: "Odborný výcvik",
        hashtagy: ["Výroba", "Cukrář", "Infografika"],
        desc: "Detailní vědecká ilustrace životního cyklu včely.",
        prompt: 
`Vytvoř infografický obrázek <span class="promenna">[ZDE DOPLŇTE NÁZEV, NAPŘ. ČOKOLÁDY]</span>, ilustrující proces její výroby od surovin až po konečný konzumovatelný produkt.
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
Název <span class="promenna">[ZDE DOPLŇTE NÁZEV, NAPŘ. ČOKOLÁDA]</span> umísti do ručně kresleného rámečku s technickými anotacemi v jednom rohu.

Pravidla pro styl a rozvržení:
    • Skutečný potravinářský produkt zůstává jasně viditelný pod anotacemi
    • Fáze zpracování působí naskicovaně, technicky a vzdělávacím dojmem
    • Jasná progrese od surových ingrediencí k hotovému jídlu
    • Čistá kompozice s vyváženým negativním prostorem (negative space)
    • Vzdělávací, food-manufacturingový / průmyslový manuál / dojem muzejního exponátu

Vizuální styl: Estetika minimální technické ilustrace, černá perokresba přes realistické snímky jídla, precizní, ale mírně ručně kreslený pocit.
Barevná paleta: Čistě bílé pozadí, pouze černé anotační čáry a text. Žádné barvy.
Výstup: 1080×1080, ultra-ostrý, optimalizovaný pro sociální sítě, bez vodoznaku.`,        
    imgs: ["../img/ukazky/cokolada.jpg", "../img/ukazky/coko2.jpg"], // Pole dvou obrázků
    type: "gallery" // Nový typ pro naši logiku
    },
    // Sem budeš připisovat jen další obrázky
];