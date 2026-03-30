const dataGemy = [
    {
        id: "gem-1",
        title: "Tvořič promptů",
        popis: "Tento specialista vám pomůže vyladit vaše zadání pro AI do dokonalosti. Stačí mu říct hrubou představu a on z ní vytvoří strukturovaný prompt, který dává smysl.",
        prompt: "ZDE BUDE TVŮJ PROMPT PRO TVOŘIČE PROMPTŮ"
    },
    {
        id: "gem-2",
        title: "GemLingo",
        popis: "Váš osobní lektor pro výuku libovolných jazyků. Pomůže s gramatikou, konverzací nebo přípravou slovíček na míru vaší úrovni.",
        prompt: "ZDE BUDE TVŮJ PROMPT PRO GEMLINGO"
    },
    {
        id: "gem-3",
        title: "Web Architekt",
        popis: "Expert na plánování a strukturu webových stránek. Pomůže vám navrhnout logické uspořádání, obsah sekcí i uživatelskou cestu.",
        prompt: "ZDE BUDE TVŮJ PROMPT PRO ARCHITEKTA"
    },
    {
        id: "gem-4",
        title: "Formální přepisovač",
        popis: "Mistr etikety a úředního jazyka. Přepíše vaše neformální poznámky do reprezentativní podoby vhodné pro e-maily, žádosti nebo oficiální dokumenty.",
        prompt: "ZDE BUDE TVŮJ PROMPT PRO PŘEPISOVAČA"
    },
    {
        id: "gem-5",
        title: "Informatický pohádkář",
        popis: "Dokáže vysvětlit i ty nejsložitější IT pojmy (jako algoritmus nebo kódování) pomocí poutavých příběhů a metafor, kterým porozumí i děti.",
        prompt: "ZDE BUDE TVŮJ PROMPT PRO POHÁDKÁŘE"
    },
    {
        id: "gem-6",
        title: "Analytik dokumentu",
        popis: "Specialista na rychlé zpracování dlouhých textů. Vytvoří vám přehledný souhrn, vypíchne klíčové body a navrhne logickou osnovu obsahu.",
        prompt: "ZDE BUDE TVŮJ PROMPT PRO ANALYTIKA"
    }
];

// FUNKCE PRO ZOBRAZENÍ DETAILU GEMA
// Upravená funkce pro zobrazení detailu Gema
function showGemDetail(gemId) {
    // 1. Odebrat třídu 'active' ze všech tlačítek Gemů
    document.querySelectorAll('#gems-menu .gem-btn').forEach(btn => btn.classList.remove('active'));
    
    // 2. Přidat třídu 'active' na tlačítko, na které se kliklo
    // Najdeme tlačítko, které má v onclicku přesně toto gemId
    const clickedBtn = document.querySelector(`#gems-menu button[onclick="showGemDetail('${gemId}')"]`);
    if (clickedBtn) {
        clickedBtn.classList.add('active');
    }
    const gem = dataGemy.find(g => g.id === gemId);
    const detailBox = document.getElementById('gems-detail');
    
    if (gem) {
        detailBox.innerHTML = `
            <<div class="detail-card">
                <h3>${gem.title}</h3>
                <div class="popis-box">
                    <strong>K čemu slouží:</strong><br>
                    ${gem.popis}
                </div>
                <div class="prompt-box">
    <strong>Prompt pro Gema:</strong><br>
    <code id="current-prompt-text">${gem.prompt}</code> </div>
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