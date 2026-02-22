/* --- 1. PŘEPÍNÁNÍ TABŮ V KAPITOLÁCH --- */

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
        tabcontent[i].style.display = "none"; // Přidáno pro jistotu
    }
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block"; // Zobrazit
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

/* --- 2. PROMPT BUILDER (KAPITOLA GENEROVÁNÍ) --- */

function toggleCustomTone() {
    const toneSelect = document.getElementById("tone");
    const customToneInput = document.getElementById("customTone");
    if (toneSelect && customToneInput) {
        customToneInput.style.display = toneSelect.value === "custom" ? "block" : "none";
    }
}

function applyDictationMode() {
    const isChecked = document.getElementById("dictationMode").checked;
    const subject = document.getElementById("subject");
    const topic = document.getElementById("topic");
    const type = document.getElementById("outputType");

    if (isChecked) {
        subject.value = "Český jazyk";
        topic.value = "Pravopis a gramatika";
        type.value = "Text k vyhledávání a opravě chyb (diktát)";
    } else {
        subject.value = "";
        topic.value = "";
        type.value = "";
    }
}

function generatePrompt() {
    const subject = document.getElementById("subject").value;
    const topic = document.getElementById("topic").value;
    const type = document.getElementById("outputType").value;
    const grade = document.getElementById("grade").value;
    const count = document.getElementById("count")?.value || "";
    const language = document.getElementById("language")?.value || "Čeština";
    const extra = document.getElementById("extraNotes").value;
    const useSVP = document.getElementById("useSVP").checked;

    if (!subject || !topic || !type) {
        alert("Prosím vyplňte alespoň Předmět, Téma a Typ úkolu.");
        return;
    }

    // Získání zaškrtnutých polí
    let diffs = Array.from(document.querySelectorAll('input[name="difficulty"]:checked')).map(el => el.value);
    let qTypes = Array.from(document.querySelectorAll('input[name="qType"]:checked')).map(el => el.value);

    let prompt = `Jsi expert na moderní pedagogiku. Tvým úkolem je vytvořit ${type} na téma "${topic}" pro předmět ${subject}.
- Cílová skupina: ${grade || "není specifikováno"}
- Požadovaný rozsah: ${count || "přiměřený typu úkolu"}
- Jazyk výstupu: ${language}`;

    if (diffs.length > 0) prompt += `\n- Úroveň obtížnosti: ${diffs.join(", ")}`;
    if (qTypes.length > 0) prompt += `\n- Typy otázek: ${qTypes.join(", ")}`;
    if (useSVP) prompt += `\n- Při tvorbě se striktně drž rámcových požadavků uvedených v ŠVP zde: https://charbulova.edupage.org/a/svp-1`;
    if (extra) prompt += `\n- Další upřesnění: ${extra}`;

    prompt += `\n\nVýstup musí být strukturovaný, didakticky správný a připravený k okamžitému použití ve výuce. Na závěr přidej jeden praktický tip pro učitele.`;

    document.getElementById("finalPrompt").value = prompt;
}



function clearFields() {
    if (confirm("Opravdu chcete vymazat všechna pole?")) {
        document.querySelectorAll('.prompt-builder input:not([type="checkbox"])').forEach(el => el.value = "");
        document.querySelectorAll('.prompt-builder textarea').forEach(el => el.value = "");
        document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
        document.getElementById("language").value = "Čeština";
        document.getElementById("tone").value = "Obecný, neutrální";
        toggleCustomTone();
    }
}

function copyPrompt() {
    const btn = document.getElementById("copyBtn");
    const textArea = document.getElementById("finalPrompt");
    if (!textArea || !textArea.value) return;

    navigator.clipboard.writeText(textArea.value).then(() => {
        const originalContent = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Zkopírováno!';
        btn.style.background = "#d3b22f";
        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.style.background = "#2c3e50";
        }, 2000);
    });
}


const promptData = {
    material: {
        bad: '"Udělej mi test pro řezníky na téma bourání masa."',
        badNote: '<strong>Co na to AI:</strong> Vygeneruje fádní a příliš obecný seznam otázek (např. "Co je to nůž?"). Chybí odborná hloubka, terminologie a didaktická struktura, kterou jako mistr odborného výcviku potřebujete.',
        good: '<strong>Jsi mistr odborného výcviku.</strong> Vytvoř 10 kontrolních otázek pro 2. ročník oboru Řezník na téma <strong>bourání hovězího přední čtvrti</strong>. Zaměř se na názvy částí (např. péro, podplečí, krk) a jejich konkrétní kulinářské využití. Přidej klíč správných řešení pro učitele.',
        goodNote: '<strong>Co na to AI:</strong> Vygeneruje profesionální odborný test, který rozumí řeznické hantýrce. Otázky budou smysluplné, odstupňované podle obtížnosti, a který žáky skutečně prověří z praxe.'
    },
    prezentace: {
        bad: '"Napiš body na prezentaci pro kosmetičky o pleti."',
        badNote: '<strong>Co na to AI:</strong> Vytvoří jen základní osnovu typu: 1. Úvod, 2. Čištění, 3. Závěr. Taková prezentace žáky nudí a nedává jim žádnou přidanou hodnotu z praxe.',
        good: 'Navrhni strukturu 8 slidů pro prezentaci o <strong>diagnostice pleti v kosmetické praxi</strong>. Každý slid musí obsahovat název, 3 hlavní body pro výklad a <strong>konkrétní tip na fotografii</strong> (např. detail rozšířených pórů nebo kuperózy), kterou by měl učitel na slid vložit pro názornost.',
        goodNote: '<strong>Co na to AI:</strong> Připraví vám kompletní scénář. Nejenže napíše, co máte říkat, ale funguje jako váš obrazový redaktor – poradí vám, co přesně mají žáci vidět, aby teorii pochopili.'
    },
    obrazek: {
        bad: '"Vygeneruj moderní účes pro kadeřníky."',
        badNote: '<strong>Co na to AI:</strong> Vytvoří náhodný, často nerealistický obrázek obličeje, který neodpovídá technickým požadavkům na výuku střihu nebo barvení.',
        good: 'Vytvoř realistickou fotografii (studiový portrét) moderního <strong>pánského střihu typu "low fade"</strong> s precizním konturováním vousů. Čisté osvětlení, pohled z profilu, aby byl jasně vidět plynulý přechod (stínování) vlasů. Pozadí neutrální kadeřnický salon.',
        goodNote: '<strong>Co na to AI:</strong> Vygeneruje špičkovou učební pomůcku. Žáci na obrázku uvidí přesně tu techniku, kterou po nich vyžadujete u závěrečných zkoušek.'
    },
    korekce: {
        bad: '"Oprav mi tenhle text pro turisty a vylepši ho: [text]."',
        badNote: '<strong>Co na to AI:</strong> Pouze opraví pravopisné chyby a překlepy. Tón textu zůstane suchý a nebude působit jako nabídka profesionální cestovní kanceláře.',
        good: 'Přečti si tento návrh itineráře pro <strong>zájezd do Vídně oboru Cestovní ruch</strong>. Oprav stylistiku, zvýrazni odborné termíny (transfer, polopenze, asistence delegáta) a uprav text tak, aby zněl vřele a lákavě pro klienty. Doplň logické časy rozchodů tak, aby byl plán v praxi realizovatelný.',
        goodNote: '<strong>Co na to AI:</strong> Přepracuje text do podoby, kterou byste se nebáli poslat klientovi. Opraví chyby, ale hlavně dodá textu "obchodní ducha" a logiku odborného zájezdu.'
    }
};

function switchPrompt(topic) {
    // Odstranit aktivní třídu ze všech karet
    document.querySelectorAll('.topic-card').forEach(card => card.classList.remove('active'));
    // Přidat aktivní třídu kliknuté kartě
    event.currentTarget.classList.add('active');

    // Aktualizace textů a popisků
    document.getElementById('bad-text').innerHTML = promptData[topic].bad;
    document.getElementById('bad-note').innerHTML = promptData[topic].badNote;
    document.getElementById('good-text').innerHTML = promptData[topic].good;
    document.getElementById('good-note').innerHTML = promptData[topic].goodNote;
}

const comments = [
    "",
    "Začínáme přidělení ROLE. AI teď ví, že nemá psát jako vědec, ale jako praktik na kosmetiku.",
    "Přidali jsme jasné TÉMA a ZPRACOVÁNÍ. Bez něj AI neví, o čem psát a jak to zpracovat.",
    "Doplnili jsme CÍLOVOU SKUPINU a SPECIFIKACI. Teď bude náročnost textu přesně pro prváky.",
    "Určili jsme STRUKTURU. Místo textové zdi dostanete přehledný přesně definovaný pracovní list.",
    "BONUS: AI teď funguje jako váš metodický poradce a pomůže vám vtáhnout žáky do děje."
];

function addLayer(step) {
    // Zobrazit vrstvu
    const layer = document.getElementById(`layer-${step}`);
    if(layer) {
        layer.classList.remove('hidden');
        // Skrýt placeholder
        document.getElementById('placeholder-text').style.display = 'none';
    }

    // Aktivovat tlačítko
    const buttons = document.querySelectorAll('.step-btn');
    buttons[step-1].classList.add('active');

    // Změnit komentář
    document.getElementById('builder-commentary').innerText = comments[step];
}
function resetBuilder() {
    // 1. Schovat všechny vrstvy textu
    const layers = document.querySelectorAll('.layer');
    layers.forEach(l => l.classList.add('hidden'));

    // 2. Odbarvit všechna tlačítka
    const buttons = document.querySelectorAll('.step-btn');
    buttons.forEach(b => b.classList.remove('active'));

    // 3. Zobrazit placeholder text
    document.getElementById('placeholder-text').style.display = 'block';

    // 4. Vymazat komentář
    document.getElementById('builder-commentary').innerText = "";
    
    // Volitelné: Animace pro pocit "vyčištění"
    const display = document.getElementById('prompt-result');
    display.style.opacity = "0.5";
    setTimeout(() => { display.style.opacity = "1"; }, 200);
}

function generateCustomPrompt() {
    // Načtení hodnot - přidána kontrola existence prvků, aby to neházelo chybu
    const roleVal = document.getElementById('role-input').value;
    const temaVal = document.getElementById('tema-input').value;
    const targetVal = document.getElementById('target-input').value;
    const formatVal = document.getElementById('format-input').value;
    const bonusChecked = document.getElementById('bonus-check').checked;

    // Aktualizace textů v náhledu
    updatePreview('out-role', roleVal, '[expertní role]');
    updatePreview('out-tema', temaVal, '[téma a rozsah]');
    updatePreview('out-target', targetVal, '[cílovou skupinu]');
    updatePreview('out-format', formatVal, '[typy otázek a aktivity]');

    // Oprava zobrazení bonusu - používáme block místo inline, aby zůstal na novém řádku
    const bonusEl = document.getElementById('out-bonus');
    if (bonusEl) {
        bonusEl.style.display = bonusChecked ? 'block' : 'none';
    }
}

function updatePreview(id, value, placeholder) {
    const el = document.getElementById(id);
    if (!el) return; // Pokud ID neexistuje, funkce skončí

    if (value && value.trim() !== "") {
        el.innerText = value;
        el.style.color = "#f06292"; // Tvoje růžová
        el.style.fontWeight = "normal";
    } else {
        el.innerText = placeholder;
        el.style.color = "#aaa"; // Šedá pro placeholder
        el.style.fontWeight = "normal";
    }
}

function copyCustomPrompt() {
    const btn = document.getElementById('copy-custom-btn');
    const lines = document.querySelectorAll('.prompt-line');
    let finalPrompt = "";

    lines.forEach(line => {
        // Kontrola, zda je řádek viditelný a neobsahuje nevyplněný placeholder
        if (window.getComputedStyle(line).display !== 'none') {
            let text = line.innerText;
            if (!text.includes("[")) {
                finalPrompt += text + "\n";
            }
        }
    });

    if (finalPrompt.trim() === "") {
        alert("Prompt je prázdný, nejdříve něco vyplňte.");
        return;
    }

    navigator.clipboard.writeText(finalPrompt.trim()).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Zkopírováno!';
        
        btn.style.background = "#f06292"; // Můžeš přidat v CSS barvu
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = "#2c3e50";
            
        }, 2000);
    });
}

function clearCustomPrompt() {
    if (confirm("Opravdu chcete smazat celý tento prompt?")) {
        document.getElementById('role-input').value = "";
        document.getElementById('tema-input').value = "";
        document.getElementById('target-input').value = "";
        document.getElementById('format-input').value = "";
        document.getElementById('bonus-check').checked = false;

        generateCustomPrompt();
        document.getElementById('role-input').focus();
    }
}

const methodData = {
    zamer: {
        how: "Řeknete AI svůj záměr a zakážete jí začít psát, dokud se vás nedoptá na vše podstatné (role, cíle, formát).",
        why: "Zjistíte, na co všechno jste zapomněli, a AI získá přesný kontext bez hádání.",
        prompt: "Mám v úmyslu vytvořit [DOPLŇTE TÉMA]. Zatím nic netvoř. Polož mi nejdříve 5-7 otázek, které potřebuješ znát, abys mohl vytvořit perfektní výsledek."
    },
    vizual: {
        how: "Vložíte obrázek (náčrt, screenshot webu, fotku tabule) a necháte AI analyzovat strukturu nebo styl.",
        why: "Získáte odborný popis věci, kterou vidíte, ale neumíte ji přesně pojmenovat (barvy, rozvržení).",
        prompt: "Analyzuj tento obrázek. Popiš jeho strukturu, použitý styl a navrhni, jak bych mohl podobný výsledek vytvořit pomocí kódu nebo textu."
    },
    architekt: {
        how: "AI se stane vaším průvodcem, který s vámi postupně buduje zadání (prompt) krok za krokem.",
        why: "Nejsilnější metoda. Výsledný prompt je přesně na míru a obsahuje všechny pedagogické detaily.",
        prompt: "Buď mým expertem na promptování. Chci vytvořit [TÉMA]. Veď mě procesem tvorby nejlepšího možného zadání. Ptej se mě na jeden detail po druhém."
    },
    gema: {
        how: "Nakonfigurujete si vlastního asistenta (Gem), který má pravidla doptávání vryta v 'popisu práce'.",
        why: "Šetříte čas. Nemusíte ChatGPT pokaždé vysvětlovat, že se má doptávat – on to má v instrukcích.",
        prompt: "Tvé instrukce: Jsi metodický poradce. Každý můj dotaz nejprve analyzuj a doptávej se na chybějící pedagogické parametry, než odpovíš."
    },
    mentor: {
        how: "Předložíte AI svůj hotový výtvor (zadání testu, článek, kód) a požádáte o tvrdou konstruktivní kritiku.",
        why: "Získáte pohled zvenčí a učíte se ze svých chyb v reálném čase. AI vidí nelogičnosti, které vy už ne.",
        prompt: "Tady je můj [VÝSLEDEK]. ZauProcessuj roli přísného mentora a zkritizuj můj návrh. Najdi 3 slabá místa a navrhni jejich konkrétní vylepšení."
    },
    roleplay: {
        how: "AI převtělíte do role specifické osoby – např. žáka se specifickou poruchou učení nebo naštvaného klienta.",
        why: "Uvidíte svůj projekt z úplně jiného úhlu a můžete si nanečisto vyzkoušet reakce a řešení situací.",
        prompt: "Předstírej, že jsi žák 1. ročníku SOŠ, který má problém s pozorností a odbornou terminologií. Přečti si tento můj výklad a řekni mi, co ti nedává smysl."
    },
    otazka: {
        how: "Přidáte k jakémukoliv promptu příkaz, aby AI každou svou zprávu končila doplňujícím dotazem.",
        why: "Udržuje to konverzaci v pohybu a nutí to AI i vás neustále zpřesňovat výsledek.",
        prompt: "Doplňující instrukce: Odteď musí každá tvá odpověď končit otázkou na další detail nebo krok, abychom výsledek dovedli k dokonalosti."
    }
};

function showMethod(id) {
    // 1. Vizuální přepnutí tlačítek
    document.querySelectorAll('.method-btn').forEach(btn => btn.classList.remove('active'));
    
    // Najdeme tlačítko, na které se kliklo
    const clickedBtn = document.querySelector(`button[onclick="showMethod('${id}')"]`);
    if (clickedBtn) clickedBtn.classList.add('active');

    // 2. Naplnění textů do polí
    const data = methodData[id];
    if (data) {
        document.getElementById('display-how').innerText = data.how;
        document.getElementById('display-why').innerText = data.why;
        document.getElementById('display-prompt').value = data.prompt;
    }
}

function copyMethodPrompt() {
    const promptText = document.getElementById('display-prompt').value;
    const btn = document.querySelector('.copy-btn-main');
    
    navigator.clipboard.writeText(promptText).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Zkopírováno!';
        btn.style.background = "#f06292";
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = "#2c3e50";
        }, 2000);
    });
}

// Inicializace po načtení stránky
window.addEventListener('DOMContentLoaded', () => {
    showMethod('zamer');
});

const settingsData = {
    tipy: { isGenerator: true },
    copilot: {
        isGenerator: false,
        text: "<ol><li>Otevřete <span class='blue-text'>Microsoft Copilot</span>.</li><li>Klikněte na svůj profil.</li><li>Vyberte <b>'Vlastní instrukce'</b>.</li></ol>",
        img: "img/copilot-navod.jpg" // Sem si pak dej svou cestu k obrázku
    },
    gemini: {
        isGenerator: false,
        text: "<ol><li>Přejděte na <span class='blue-text'>Google Gemini</span>.</li><li>Vlevo dole klikněte na <b>Nastavení</b>.</li><li>Zvolte <b>'Vlastní pokyny'</b>.</li></ol>",
        img: "img/gemini-navod.jpg"
    },
    chatgpt: {
        isGenerator: false,
        text: "<ol><li>Otevřete <span class='blue-text'>ChatGPT</span>.</li><li>Klikněte na svůj profil vlevo dole.</li><li>Vyberte <b>'Customize ChatGPT'</b>.</li><li>Vložte text do spodního pole.</li></ol>",
        img: "img/chatgpt-navod.jpg"
    }
};

function switchSettings(topic) {
    // 1. Vizuální přepnutí tlačítek (topic-card)
    document.querySelectorAll('.topic-card').forEach(card => card.classList.remove('active'));
    // Najdeme kliknutý element - buď přímo, nebo přes rodiče
    const clickedCard = event.currentTarget;
    clickedCard.classList.add('active');

    const data = settingsData[topic];

    // 2. Přepínání pohledů (view-generator vs view-guide)
    const genView = document.getElementById('view-generator');
    const guideView = document.getElementById('view-guide');

    if (data.isGenerator) {
        genView.style.display = 'block';
        guideView.style.display = 'none';
    } else {
        genView.style.display = 'none';
        guideView.style.display = 'block';
        document.getElementById('guide-content').innerHTML = data.text;
        document.getElementById('guide-image').src = data.img;
    }
}

function updateSettingsText() {
    // Najdeme všechny zaškrtnuté checkboxy uvnitř kontejneru
    const checkboxes = document.querySelectorAll('.checklist-container input:checked');
    const output = document.getElementById('settings-output');
    
    if (checkboxes.length === 0) {
        output.value = "";
        return;
    }

    let combinedText = "Při každé naší konverzaci dodržuj tato pravidla:\n\n";
    checkboxes.forEach((cb) => {
        combinedText += "• " + cb.getAttribute('data-text') + "\n";
    });

    output.value = combinedText;
}

function copySettings() {
    const text = document.getElementById('settings-output').value;
    if (!text) {
        alert("Nejdříve něco vyberte!");
        return;
    }
    navigator.clipboard.writeText(text);
    
    // Malý vizuální efekt na tlačítku
    const btn = event.currentTarget;
    const originalText = btn.innerHTML;
    btn.innerHTML = "Zkopírováno!";
    setTimeout(() => { btn.innerHTML = originalText; }, 2000);
}

function clearSettings() {
    document.querySelectorAll('.checklist-container input').forEach(cb => cb.checked = false);
    updateSettingsText();
}