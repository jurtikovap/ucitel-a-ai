/* --- 1. PŘEPÍNÁNÍ TABŮ V KAPITOLÁCH --- */

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    // 1. Skryjeme všechny obsahy tabů
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
        tabcontent[i].style.display = "none";
    }

    // 2. Deaktivujeme všechna horní tlačítka
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // 3. Zobrazíme vybraný tab
    const activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.style.display = "block";
        activeTab.classList.add("active");
    }
    
    // 4. Označíme tlačítko jako aktivní
    evt.currentTarget.classList.add("active");

    // --- KLÍČOVÝ PŘÍDAVEK PRO SEKCI ETIKA ---
    // Pokud funkce existuje (je načten soubor dataEtika.js), vykreslíme menu
    if (typeof renderEtikaMenu === "function") {
        renderEtikaMenu(tabName);
    }
}

// 5. Automatické načtení prvního tabu po otevření stránky
document.addEventListener('DOMContentLoaded', () => {
    // Najdeme první tlačítko tabu a simulujeme kliknutí, aby se načetla data
    const firstTabBtn = document.querySelector('.tab-btn');
    if (firstTabBtn) {
        firstTabBtn.click();
    }
});

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
    const gradeNum = document.getElementById('grade-num').value;
const gradeField = document.getElementById('grade-field').value;
const fullGrade = `${gradeNum} ročník, obor ${gradeField}`; 


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

    let prompt = `Jsi expert na moderní pedagogiku na střední škole. Tvým úkolem je vytvořit ${type} na téma "${topic}" pro předmět ${subject}.
- Cílová skupina: ${fullGrade || "není specifikováno"}
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
        document.getElementById('grade-num').selectedIndex = 0; // Vrátí na výchozí hodnotu
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
        prompt: "Analyzuj tento obrázek. Popiš jeho strukturu, použitý styl a navrhni prompt, abych mohl vytvořit podobný výsledek."
    },
    architekt: {
        how: "AI se stane vaším průvodcem, který s vámi postupně buduje zadání (prompt) krok za krokem.",
        why: "Nejsilnější metoda. Výsledný prompt je přesně na míru a obsahuje všechny pedagogické detaily.",
        prompt: "Buď mým expertem na promptování. Chci vytvořit [TÉMA]. Veď mě procesem tvorby nejlepšího možného zadání. Ptej se mě na jeden detail po druhém."
    },
    gema: {
        how: "Nakonfigurujete si vlastního asistenta (Gem), který má pravidla doptávání vryta v 'popisu práce'.",
        why: "Šetříte čas. Nemusíte chatu pokaždé vysvětlovat, že se má doptávat – on to má v instrukcích.",
        prompt: "Kombinace reverzního promptování a doptávání povede k tvorbě gema."
    },
    mentor: {
        how: "Předložíte AI svůj hotový výtvor (zadání testu, článek, kód) a požádáte o tvrdou konstruktivní kritiku.",
        why: "Získáte pohled zvenčí a učíte se ze svých chyb v reálném čase. AI vidí nelogičnosti, které vy už ne.",
        prompt: "Tady je můj [VÝSLEDEK]. Buď v roli přísného mentora a zkritizuj můj návrh. Najdi 3 slabá místa a navrhni jejich konkrétní vylepšení."
    },
    roleplay: {
        how: "AI převtělíte do role specifické osoby – např. žáka se specifickou poruchou učení nebo naštvaného klienta.",
        why: "Uvidíte svůj projekt z úplně jiného úhlu a můžete si nanečisto vyzkoušet reakce a řešení situací.",
        prompt: "Předstírej, že jsi [OSOBA], která má problém s pozorností a odbornou terminologií. Veď se mnou dialog na [TÉMA], abych si vyzkoušel její reakci."
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

const aiConfigMap = {
    tipy: { isGenerator: true },
    copilot: {
        isGenerator: false,
        text: `<ol>
        <li>Otevřete <span class='blue-text'>Microsoft Copilot</span>.</li>
        <li>Klikněte na tři tečky v levém dolním rohu u svého jména.</li>
        <li>Vyberte <b>Nastavení</b>.</li>
        <li>Dále vyberte <b>Přizpůsobení</b>.</li>
        <li>A Vlastní pokyny/Upravit pokyny.</li>
        <li>Nakopírujte text.</li>
        <li>Uložte změny.</li>
        <li>Užívejte si lepšího chatu :)</li>
        </ol>`,
        images: ["../img/cop_1.jpg", "../img/cop_2.jpg"]
    },
    gemini: {
        isGenerator: false,
        text: `<ol>
        <li>Přejděte na <span class='blue-text'>Google Gemini</span>.</li>
        <li>Vlevo dole klikněte na <b>Nastavení a nápověda</b>.</li>
        <li>Vyberte <b>Instrukce pro Gemini</b>.</li>
        <li>Můžete ještě <b>Zobrazit příklady</b>.</li>
        <li>Popřípadě Přidat.</li>
        <li>Nakopírujte text.</li>
        <li>Uložte změny.</li>
        <li>Užívejte si lepšího chatu :)</li>
        </ol>`,
        images: ["../img/gem_1.jpg", "../img/gem_2.jpg"]
    },
    chatgpt: {
        isGenerator: false,
        text: `<ol>
        <li>Otevřete <span class='blue-text'>ChatGPT</span>.</li>
        <li>Klikněte na své jméno vlevo dole.</li>
        <li>Vyberte <b>Nastavení</b>.</li>
        <li>Dále vyberte <b>Personalizace</b>.</li>
        <li>Můžete nastavit i styl, tón.</li>
        <li>A Vlastní pokyny.</li>
        <li>Nakopírujte text.</li>
        <li>Uložte změny.</li>
        <li>Užívejte si lepšího chatu :)</li>
        </ol>`,
        images: ["../img/gpt_1.jpg", "../img/gpt_2.jpg"]
    }
};

function switchSettings(topic) {
    // 1. Reset aktivních tříd na kartách
    document.querySelectorAll('.topic-card').forEach(card => card.classList.remove('active'));
    event.currentTarget.classList.add('active');

    const data = aiConfigMap[topic];
    const genView = document.getElementById('view-generator');
    const guideView = document.getElementById('view-guide');

    if (data.isGenerator) {
        genView.style.display = 'block';
        guideView.style.display = 'none';
    } else {
        genView.style.display = 'none';
        guideView.style.display = 'block';

        // 2. Vložení textu do levé karty
        document.getElementById('guide-content').innerHTML = data.text;

        // 3. Generování HTML pro oba obrázky do pravé karty
        let imagesHtml = '<div class="showcase-container">';
        data.images.forEach(path => {
            // Přidáváme ../ pro správnou cestu ke složce img
            const correctPath = path.startsWith('../') ? path : '../' + path;
            
            imagesHtml += `
                <div class="showcase-item">
                    <div class="img-placeholder" onclick="openLightbox(this)">
                        <img src="${correctPath}" alt="Návod">
                        <div class="overlay"><i class="fas fa-search-plus"></i> Zvětšit</div>
                    </div>
                </div>`;
        });
        imagesHtml += '</div>';

        // 4. Vložení vygenerovaného bloku do pravé karty
        document.getElementById('guide-images-wrapper').innerHTML = imagesHtml;
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

const studentTasks = {
    detektiv: {
        title: "AI Detektiv: Hledání halucinací",
        desc: "Studenti dostanou od AI text s úmyslnými chybami. Jejich úkolem je najít fakta, která AI 'pobláznilo', a opravit je pomocí ověřených zdrojů.",
        goal: "Rozvoj kritického myšlení a práce se zdroji.",
        prompt: "Vytvoř text o délce 200 slov o [TÉMA], ve kterém uděláš přesně 3 věcné chyby. Neříkej mi, které to jsou. Mým úkolem je tě odhalit a opravit!"
    },
    dialog: {
        title: "Sókratův duel s AI",
        desc: "Student musí AI přesvědčit o svém názoru v etické otázce. AI je nastaveno jako neúprosný, ale slušný oponent.",
        goal: "Argumentační dovednosti a logické uvažování.",
        prompt: "Budeme debatovat o tématu [TÉMA]. Já zastávám názor, že [NÁZOR]. Ty buď mým oponentem, hledej slabiny v mých argumentech a klaď mi těžké otázky. Na konci mi dej zpětnou vazbu, jak jsem si vedl."
    },
    pribeh: {
        title: "Nekonečný příběh (Ping-Pong)",
        desc: "Student a AI píší příběh společně. Střídají se po odstavcích a každý musí navázat na nit toho druhého.",
        goal: "Kreativní psaní a stylistická návaznost.",
        prompt: "Pojďme napsat příběh na téma [TÉMA]. Já napíšu první odstavec, ty napíšeš druhý a tak dále. Musíme udržet stejnou atmosféru a postavy. Začínám: [PRVNÍ VĚTA PŘÍBĚHU...]"
    },
    doucovani: {
        title: "Osobní tutor: Vysvětli mi to jinak",
        desc: "Žák učí AI, co pochopil, nebo žádá o vysvětlení látky skrze své koníčky (hry, sport, filmy).",
        goal: "Personalizace výuky a metakognice.",
        prompt: "Nerozumím tématu [TÉMA]. Vysvětli mi ho prosím jako expert, ale používej přirovnání ze světa [MOJE ZÁLIBA - např. Minecraftu]. Pak se mě zeptej na jednu otázku, abys ověřil, zda jsem to pochopil."
    }
};

function switchStudentTask(taskId) {
    // Přepnutí aktivní třídy u karet
    document.querySelectorAll('.sekce-studenti .topic-card').forEach(card => card.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // Update obsahu
    const task = studentTasks[taskId];
    document.getElementById('task-title').innerText = task.title;
    document.getElementById('task-desc').innerText = task.desc;
    document.getElementById('task-goal').innerText = task.goal;
    document.getElementById('student-prompt-text').value = task.prompt;
}


function copyStudentPrompt() {
    const textElement = document.getElementById('student-prompt-text');
    const textToCopy = textElement.value; // Jen si vezmeme text, nevybíráme pole
    const btn = event.currentTarget;
    // Kopírování do schránky
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Vizuální zpětná vazba na tlačítku
        
        const originalContent = btn.innerHTML;
        
    btn.innerHTML = '<i class="fas fa-check"></i> Zkopírováno!';
    btn.style.background = "#f06292";
    setTimeout(() => { 
        btn.innerHTML = originalContent; 
        btn.style.background = "#2c3e50";}, 2000);
    }).catch(err => {
        console.error('Chyba při kopírování: ', err);
    });
}

function openUkazkaTab(evt, tabId) {
    // 1. Skryje všechny obsahy, které mají třídu .bg-ukazka
    const contents = document.querySelectorAll('.bg-ukazka');
    contents.forEach(content => {
        content.style.display = "none";
    });

    // 2. Odstraní 'active' ze všech tlačítek v menu tyrkysové sekce
    const buttons = document.querySelectorAll('.cat-ukazka .tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Zobrazí ten správný tab a aktivuje tlačítko
    document.getElementById(tabId).style.display = "block";
    evt.currentTarget.classList.add('active');
}

function copyUkazkaPrompt(id) {
    const textElement = document.getElementById(id);
    const btn = event.currentTarget;
    const originalContent = btn.innerHTML;

    navigator.clipboard.writeText(textElement.value).then(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Zkopírováno!';
        btn.style.background = "#4dd0e1"; // Tyrkysová barva

        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.style.background = "#2c3e50"; // Návrat k tmavé
        }, 2000);
    });
}

function openLightbox(element) {
    const img = element.querySelector('img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('caption');

    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    captionText.innerHTML = img.alt;
}

function switchPath(evt, pathId) {
    // Schovat všechen obsah
    const contents = document.getElementsByClassName("path-content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }

    // Deaktivovat všechna tlačítka
    const buttons = document.getElementsByClassName("tabc-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    // Ukázat vybranou cestu a aktivovat tlačítko
    document.getElementById(pathId).classList.add("active");
    evt.currentTarget.classList.add("active");
}

function switchNotebookPath(evt, pathId) {
    // Schová obsah pouze v rámci sekce NotebookLM
    const parent = evt.currentTarget.closest('.notebook-section');
    const contents = parent.getElementsByClassName("path-content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }

    // Deaktivuje tlačítka v této sekci
    const buttons = parent.getElementsByClassName("tabc-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    // Aktivuje vybranou cestu
    document.getElementById(pathId).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// 1. Data pro Textová usnadnění (3x2)
const textToolsData = [
    { title: "Tvořič promptů", desc: "pomocník pro psaní zadání pro žáky.", links: [{ txt: "Tvořič výukových promptů", url: "../kapitoly/generovani.html" }] },
    { title: "Tvořič gemů", desc: "vytvořte si experty.", links: [{ txt: "Tvořič gemů", url: "../kapitoly/ukazky.html#tab2" }, { txt: "NPI desatero", url: "../kapitoly/ukazky.html#tab5" }] },
    { title: "Tvořič kvízů", desc: "rychlé prověření znalostí.", links: [{ txt: "Tvořič kvízů", url: "../kapitoly/generovani.html#tab2" }] },
    { title: "AI promptuje", desc: "předejte práci AI.", links: [{ txt: "AI promptuje", url: "../kapitoly/vyuka.html#tab4" }] },
    { title: "Aktivita pro žáky", desc: "zapojení AI do výuky.", links: [{ txt: "AI do lavic", url: "../kapitoly/vyuka.html#tab5" }, { txt: "AI v lavicích", url: "../kapitoly/ukazky.html#tab3" }] },
    { title: "Myšlenková mapa", desc: "vizualizace souvislostí v NotebookLM.", links: [{ txt: "Tvořič myšlenkových map", url: "../kapitoly/generovani.html#tab3" }, { txt: "Myšlenková mapa", url: "../img/nlm_mm.jpg" }] },
    { title: "Etika", desc: "důležité body používání AI.", links: [{ txt: "Etika souhrn", url: "../kapitoly/etika.html" }] }
];

// 2. Data pro Obrázková usnadnění
const mediaToolsData = [
    { 
        title: "Napkin AI", 
        desc: "Rychlá přeměna textu na vizuální diagramy.", 
        images: ["../img/napkin_1.jpg", "../img/napkin_2.jpg"], 
        url: "https://www.napkin.ai/" 
    },
    { 
        title: "NotebookLM", 
        desc: "Interaktivní průvodce z vašich dokumentů.", 
        images: ["../img/nlm_info_1.jpg", "../img/nlm_info_2.jpg"], 
        url: "../kapitoly/generovani.html#tab3" 
    },
    { 
        title: "Microsoft Copilot", 
        desc: "Generování a analýza vizuálních podkladů.", 
        images: ["../img/cop_info_1.jpg", "../img/cop_info_2.jpg"], 
        url: "https://copilot.microsoft.com/" 
    }
];

// 3. Hlavní funkce, která "vstříkne" kód do HTML
function initHelpers() {
    const textGrid = document.getElementById('text-helper-grid');
    const mediaList = document.getElementById('media-helper-list');

    if (textGrid) {
        textGrid.innerHTML = textToolsData.map(item => `
            <div class="text-tool-card">
                <p><strong>${item.title}</strong> ${item.desc}</p>
                
                <div style="margin-top: auto; display: flex; gap: 5px;">
                    ${item.links.map(l => `<a href="${l.url}" class="btn-small">${l.txt}</a>`).join('')}
                </div>
            </div>
        `).join('');
    }

    if (mediaList) {
        mediaList.innerHTML = mediaToolsData.map(item => `
        <div class="helper-card">
            <div class="ges">
                ${item.images.map(img => `<img src="${img}" class="thumb-split" onclick="openLightbox(this)">`).join('')}
            </div>
            <div class="card-content">
                <p><strong>${item.title}</strong> ${item.desc}</p>
                <a href="${item.url}" target="_blank" class="btn-small">Vyzkoušet nástroj</a>
            </div>
        </div>
    `).join('');
    }
}

// Spustíme hned po načtení skriptu
initHelpers();

// Tento kód se spustí hned po načtení stránky
window.addEventListener('load', function() {
    // Podívá se, jestli je v adrese mřížka (např. #tab2)
    const hash = window.location.hash;
    
    if (hash) {
        // Najde tlačítko, které má v sobě onclick s tímto ID a "klikne" na něj
        const targetButton = document.querySelector(`[onclick*="${hash.replace('#', '')}"]`);
        if (targetButton) {
            targetButton.click();
        }
    }
});