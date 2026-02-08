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
        btn.classList.add("success");
        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.classList.remove("success");
        }, 2000);
    });
}