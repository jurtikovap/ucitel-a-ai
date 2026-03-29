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
            <div class="detail-card">
                <h3>${gem.title}</h3>
                <div class="popis-box">
                    <strong>K čemu slouží:</strong><br>
                    ${gem.popis}
                </div>
                <div class="prompt-box">
                    <strong>Prompt pro Gema:</strong><br>
                    <code id="prompt-text">${gem.prompt}</code>
                </div>
                <button class="mini-prep-btn" onclick="copyPrompt('${gem.prompt}')" style="margin-top:20px">
                    <i class="fas fa-copy"></i> Kopírovat prompt
                </button>
            </div>
        `;
    }
}

function copyPrompt(text, buttonElement) {
    // Záložní kopírování pro případy, kdy navigator.clipboard nefunguje
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        // Vizuální zpětná vazba přímo na tlačítku, které jsi poslala
        if (buttonElement) {
            const originalText = buttonElement.innerHTML;
            buttonElement.innerHTML = '<i class="fas fa-check"></i> Hotovo!';
            buttonElement.classList.add('copy-success'); // můžeš mu dát v CSS zelenou barvu
            
            setTimeout(() => {
                buttonElement.innerHTML = originalText;
                buttonElement.classList.remove('copy-success');
            }, 2000);
        }
    } catch (err) {
        console.error('Chyba při kopírování', err);
    }
    document.body.removeChild(textArea);
}