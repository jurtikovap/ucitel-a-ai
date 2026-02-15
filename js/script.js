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
    "Začínáme jasným tématem. Bez něj AI neví, o čem psát.",
    "Přidali jsme EXPERTÍZU. AI teď ví, že nemá psát jako vědec, ale jako praktik.",
    "Doplnili jsme CÍLOVOU SKUPINU. Teď bude náročnost textu přesně pro prváky.",
    "URČILI JSME STRUKTURU. Místo textové zdi dostanete přehlednou tabulku.",
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
    // Načtení hodnot z polí
    const role = document.getElementById('role-input').value;
    const tema = document.getElementById('tema-input').value;
    const target = document.getElementById('target-input').value;
    const format = document.getElementById('format-input').value;
    const bonus = document.getElementById('bonus-check').checked;

    // Pokud je vše prázdné, ukaž nápovědu
    if (!role && !tema && !target && !format) {
        document.getElementById('prompt-output').innerHTML = "Začněte psát do políček vlevo a váš prompt se zde začne skládat...";
        return;
    }

    // Skládání textu s tučným zvýrazněním vstupů
    let promptText = "";
    
    if (role) promptText += `Jsi <b>${role}</b>. `;
    if (tema) promptText += `Tvým úkolem je vytvořit <b>${tema}</b>. `;
    if (target) promptText += `Tento materiál je určen pro <b>${target}</b>. `;
    if (format) promptText += `Při tvorbě se zaměř na tyto typy otázek nebo aktivit: <b>${format}</b>. `;
    
    if (bonus) {
        promptText += ` Na závěr mi doporuč jeden konkrétní <b>pedagogický tip</b>, jak toto téma oživit v praxi a jednu provokativní otázku do diskuse.`;
    }

    document.getElementById('prompt-output').innerHTML = promptText;
}

function copyCustomPrompt() {
    const textToCopy = document.getElementById('prompt-output').innerText;
    const btn = document.getElementById('copy-custom-btn');

    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Zkopírováno!';
        btn.style.background = "#f06292";
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = "#2c3e50";
        }, 2000);
    });
}