const dataLavice = [

{
    groupTitle: "5. Detektiv faktů",
    items: [
        {
            id: "l-5-1",
            title: "Hledej chybu v textu",
            popis: "AI vygeneruje odborný text o [TÉMA], do kterého schová 3 faktické chyby. Žáci je musí vypátrat.",
            prompt: "Napiš 3 odstavce o [TÉMA] pro devátou třídu. Do textu záměrně vlož 3 faktické nesmysly a na konec mi napiš klíč s řešením."
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
        }
    ]
}

,{
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