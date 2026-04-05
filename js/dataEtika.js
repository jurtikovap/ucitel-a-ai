// 1. Přejmenování na dataEtika, aby nedocházelo ke kolizi s jinými skripty
const dataEtika = {
"tab1": {
        title: "Etika v AI",
        uvod: "Etika v AI je nezbytným filtrem pro každého pedagoga. Odpovědnost za konečný výsledek a ochrana soukromí žáků nese vždy člověk, nikoliv stroj.",
        body: [
            {
                id: "e1-1",
                title: "Zaujatost a diskriminace",
                popis: "AI modely nejsou objektivní; přebírají předsudky z dat vytvořených lidmi.",
                priklady: [
                    { hlavni: "BIAS v datech", podbody: ["Zkreslené učení z historických dat", "Znevýhodnění určitých skupin"] },
                    { hlavni: "Algoritmická nespravedlnost", podbody: ["Stereotypní hodnocení", "Nepochopení kulturního kontextu"] }
                ]
            },
            {
                id: "e1-2",
                title: "Ztráta lidské autonomie",
                popis: "Přílišné spoléhání na AI může vést k oslabení kritického myšlení.",
                priklady: [
                    { hlavni: "Komfortní zóna", podbody: ["AI nabízí to, co chceme slyšet", "Ztráta hlubokého úsudku"] },
                    { hlavni: "Kognitivní úpadek", podbody: ["Delegování myšlení na stroj", "Nekritické přebírání odpovědí"] }
                ]
            },
            {
                id: "e1-3",
                title: "Deepfakes a dezinformace",
                popis: "Technologie umožňuje vytvářet vysoce realistický, ale zcela falešný obsah.",
                priklady: [
                    { hlavni: "Generování identity", podbody: ["Falešné obličeje a hlasy", "Syntetické postavy"] },
                    { hlavni: "Informační riziko", podbody: ["Obtížné rozlišení reality", "Šíření manipulativního obsahu"] }
                ]
            },
            {
                id: "e1-4",
                title: "Odpovědnost a vina",
                popis: "Hledání viníka v případě chyby algoritmu je složitý právní i morální problém.",
                priklady: [
                    { hlavni: "Kdo nese vinu?", podbody: ["Programátor vs. majitel firmy", "Koncový uživatel"] },
                    { hlavni: "Morální rámec", podbody: ["Právní odpovědnost za škodu", "Etické posouzení následků"] }
                ]
            },
            {
                id: "e1-5",
                title: "Plagiátorství a práva",
                popis: "Hranice mezi inspirací a krádeží duševního vlastnictví je u AI velmi tenká.",
                priklady: [
                    { hlavni: "Autorské dílo", podbody: ["Používání cizích děl k trénování", "Problém s uznáním autorství"] },
                    { hlavni: "Akademická integrita", podbody: ["Správné citování zdrojů", "Transparentnost použití AI"] }
                ]
            },
            {
                id: "e1-6",
                title: "Soukromí a data",
                popis: "Ochrana osobních a citlivých údajů musí být v digitálním prostředí prioritou.",
                priklady: [
                    { hlavni: "GDPR", podbody: ["Zpracování osobních údajů", "Ukládání historie chatů"] },
                    { hlavni: "Zabezpečení", podbody: ["Riziko úniku citlivých dat", "Anonymizace vstupů"] }
                ]
            },
            {
                id: "e1-7",
                title: "Etické hranice v praxi",
                popis: "Jasná pravidla, jak používat AI čestně a s rozumem.",
                priklady: [
                    { hlavni: "Odpovědnost a přiznání", podbody: ["Kontrola výstupů je povinná", "Povinnost uvést použití AI"] },
                    { hlavni: "Lidský faktor", podbody: ["AI nesmí nahradit pedagogickou reflexi", "Kontrola předpojatosti"] }
                ]
            }
        ]
    },
"tab2": {
        title: "Autorské právo",
        uvod: "Technologie předběhla zákon. Současné právo většinou neuznává AI jako autora, což mění pohled na vlastnictví a férové využívání digitálního obsahu.",
        body: [
            {
                id: "e2-1",
                title: "AI jako (ne)autor",
                popis: "Podle českého právního řádu může být autorem pouze fyzická osoba – tedy člověk.",
                priklady: [
                    { hlavni: "Lidský vklad", podbody: ["Stroj sám o sobě autorem není", "Ochrana vyžaduje tvůrčí činnost člověka"] },
                    { hlavni: "Právní vakuum", podbody: ["Čisté výstupy z AI postrádají ochranu", "Diskuse o novém typu autorství"] }
                ]
            },
            {
                id: "e2-7",
                title: "Autor vs. Vlastník",
                popis: "Je nutné rozlišovat, kdo dílo vytvořil (autor) a kdo k němu má majetková práva (vlastník).",
                priklady: [
                    { hlavni: "Osobnostní práva", podbody: ["Autor je vždy člověk (fyzická osoba)", "AI nemůže mít morální právo na dílo"] },
                    { hlavni: "Majetková práva", podbody: ["Vlastníkem může být firma (OpenAI) nebo uživatel", "Určuje se podle licenčních podmínek (TOS)"] }
                ]
            },
            {
                id: "e2-8",
                title: "Tvůrčí vklad (Promptování)",
                popis: "Míra tvého autorství závisí na tom, jak moc jsi výsledek ovlivnil svou kreativní činností.",
                priklady: [
                    { hlavni: "Kopírovaný prompt", podbody: ["Nulový tvůrčí vklad uživatele", "Výsledek je považován za náhodný produkt stroje"] },
                    { hlavni: "Iterativní ladění", podbody: ["Dlouhé ladění, úpravy a zpřesňování zadání", "Považuje se za autorskou snahu uživatele"] }
                ]
            },
            {
                id: "e2-2",
                title: "Trénovací data a etika",
                popis: "AI modely se učí na milionech děl bez výslovného souhlasu jejich původních tvůrců.",
                priklady: [
                    { hlavni: "Sběr dat (Scraping)", podbody: ["Využívání děl pod autorským zákonem", "Etika strojového učení"] },
                    { hlavni: "Respekt k tvůrcům", podbody: ["Riziko kopírování rukopisu umělce", "Nástroje pro odmítnutí trénování (Opt-out)"] }
                ]
            },
            {
                id: "e2-3",
                title: "Licence a užití",
                popis: "Podmínky, za kterých můžete výstupy použít, určuje licence provozovatele nástroje.",
                priklady: [
                    { hlavni: "Verze Zdarma vs. Pro", podbody: ["Omezení pro komerční využití u free verzí", "Vlastnická práva u předplatného"] },
                    { hlavni: "Školní licence", podbody: ["Specifika využití v neziskové výuce", "Právo na publikaci vygenerovaných materiálů"] }
                ]
            },
            {
                id: "e2-4",
                title: "Transparentnost a označování",
                popis: "Povinnost přiznat roli AI v tvůrčím procesu je základem akademické i profesní poctivosti.",
                priklady: [
                    { hlavni: "Povinné označení", podbody: ["Uvedení podílu AI na díle", "Zřetelné vodoznaky u syntetických fotek"] },
                    { hlavni: "Důvěra", podbody: ["Transparentnost vůči hodnotiteli", "Prevence klamání čtenáře"] }
                ]
            },
            {
                id: "e2-5",
                title: "Právní odpovědnost",
                popis: "Za obsah, který AI vygeneruje a uživatel následně šíří, ručí vždy daný uživatel.",
                priklady: [
                    { hlavni: "Šíření obsahu", podbody: ["Odpovědnost za urážlivý výstup", "Riziko šíření nepravd (halucinací)"] },
                    { hlavni: "Právní postih", podbody: ["Uživatel jako šiřitel informace", "Nutnost faktické kontroly výstupu"] }
                ]
            },
            {
                id: "e2-6",
                title: "Inspirace vs. Kopie",
                popis: "Hranice mezi napodobováním stylu a skutečným plagiátorstvím je u AI velmi tenká.",
                priklady: [
                    { hlavni: "Napodobování stylu", podbody: ["Generování textů 'jako' konkrétní autor", "Tvorba grafiky v unikátním stylu umělce"] },
                    { hlavni: "Originál vs. Kopie", podbody: ["Obtížné rozlišení mezi inspirací a kopií", "Problém s originalitou u generických děl"] }
                ]
            }
        ]
    },
"tab3": {
        title: "Výhody a nevýhody",
        uvod: "Nasazení AI přináší paradox mezi nárůstem produktivity a rizikem oslabení lidských dovedností. Klíčem je rovnováha mezi pomocí stroje a vlastním úsudkem.",
        body: [
            {
                id: "e3-1",
                title: "[+] Personalizace výuky",
                popis: "AI umožňuje přizpůsobit vzdělávací proces potřebám každého jednotlivého žáka v reálném čase.",
                priklady: [
                    { hlavni: "Individuální tempo", podbody: ["Okamžitá úprava obtížnosti textu", "Vysvětlení látky různými způsoby"] },
                    { hlavni: "Osobní tutor", podbody: ["Dostupnost podpory 24/7", "Okamžitá zpětná vazba na chyby"] }
                ]
            },
            {
                id: "e3-2",
                title: "[+] Efektivita učitele",
                popis: "Automatizace rutinních úkolů vrací učiteli čas na individuální práci se studenty.",
                priklady: [
                    { hlavni: "Příprava materiálů", podbody: ["Rychlá tvorba testů a podkladů", "Inspirace pro projektovou výuku"] },
                    { hlavni: "Administrativa", podbody: ["Analýza výsledků třídy", "Oprava uzavřených úloh"] }
                ]
            },
            {
                id: "e3-3",
                title: "[−] Halucinace a chyby",
                popis: "AI generuje texty na základě pravděpodobnosti, nikoliv skutečného porozumění faktům.",
                priklady: [
                    { hlavni: "Fabulace faktů", podbody: ["Vymýšlení neexistujících citací", "Sebejisté prezentování polopravd"] },
                    { hlavni: "Nutná kontrola", podbody: ["Povinnost ověřovat každý výstup", "Riziko šíření odborných nesmyslů"] }
                ]
            },
            {
                id: "e3-4",
                title: "[−] Kognitivní lenost",
                popis: "Nekritické používání AI může vést k atrofii logického myšlení a ztrátě hlubokých znalostí.",
                priklady: [
                    { hlavni: "Vypínač myšlení", podbody: ["Odevzdávání prací bez přečtení", "Spoléhání na hotová řešení"] },
                    { hlavni: "Ztráta dovedností", podbody: ["Problémy s tvorbou vlastních textů", "Oslabení schopnosti analýzy"] }
                ]
            },
            {
                id: "e3-5",
                title: "[−] Ekologický dopad",
                popis: "Provoz a trénování velkých jazykových modelů vyžaduje obrovské množství energie a vody.",
                priklady: [
                    { hlavni: "Spotřeba energie", podbody: ["Vysoká náročnost datových center", "Uhlíková stopa generování obsahu"] },
                    { hlavni: "Udržitelnost", podbody: ["Environmentální cena technologií", "Potřeba efektivnějších algoritmů"] }
                ]
            }
        ]
    },
"tab4": {
        title: "Bezpečnost v AI",
        uvod: "Kybernetická bezpečnost v éře AI vyžaduje kritický přístup. Každá informace vložená do chatu se stává součástí ekosystému, nad kterým ztrácíte přímou kontrolu.",
        body: [
            {
                id: "e4-1",
                title: "Ochrana dat a soukromí",
                popis: "AI se učí z vašich vstupů. Je klíčové vědět, kam a jaká data vkládáte.",
                priklady: [
                    { hlavni: "Školní vs. soukromý účet", podbody: ["MS Copilot se školním účtem je bezpečnější", "Soukromé chaty mohou data využít k trénování"] },
                    { hlavni: "Citlivé údaje", podbody: ["Nikdy nevkládat rodná čísla či diagnózy žáků", "Anonymizace podkladů pro výuku"] }
                ]
            },
            {
                id: "e4-2",
                title: "Chytré kyberútoky",
                popis: "AI umožňuje útočníkům vytvářet velmi přesvědčivé podvody v masovém měřítku.",
                priklady: [
                    { hlavni: "Phishing 2.0", podbody: ["Bezchybná čeština v podvodných e-mailech", "Automatizované vyhledávání zranitelností"] },
                    { hlavni: "Škodlivý kód", podbody: ["AI pomáhá tvořit viry i laikům", "Rychlé prolomení slabých hesel"] }
                ]
            },
            {
                id: "e4-3",
                title: "Sociální inženýrství",
                popis: "Manipulace s emocemi pomocí AI dosahuje nové úrovně realismu.",
                priklady: [
                    { hlavni: "Deepfake identita", podbody: ["Napodobení hlasu kolegy či nadřízeného", "Falešné videohovory s cílem vylákat peníze"] },
                    { hlavni: "Psychologický nátlak", podbody: ["Vydávání se za technickou podporu", "Využití osobních informací z internetu"] }
                ]
            },
            {
                id: "e4-4",
                title: "Zabezpečení účtů",
                popis: "Klasické heslo už nestačí. Identita uživatele je hlavním cílem útoků.",
                priklady: [
                    { hlavni: "Dvoufázové ověření (2FA)", podbody: ["Povinnost pro všechny AI platformy", "Ochrana před únosem digitální identity"] },
                    { hlavni: "Správa oprávnění", podbody: ["Kontrola, k čemu má AI asistent přístup", "Pravidelná revize propojených aplikací"] }
                ]
            },
            {
                id: "e4-5",
                title: "Zneužití automatizace",
                popis: "Roboti a autonomní systémy řízené AI musí mít bezpečnostní pojistky.",
                priklady: [
                    { hlavni: "Bezpečnostní stopka", podbody: ["Možnost okamžitého odpojení systému", "Hardwarové pojistky proti chybě kódu"] },
                    { hlavni: "Riziko zneužití", podbody: ["Vložení škodlivého kódu do automatizace", "Ztráta kontroly nad rozhodovacím procesem"] }
                ]
            },
            {
                id: "e4-6",
                title: "Budoucnost a kontrola",
                popis: "Cílem vývoje je AI Alignment – zajištění, aby AI vždy jednala v souladu s lidskými zájmy.",
                priklady: [
                    { hlavni: "AI Alignment", podbody: ["Etické mantinely napevno v kódu", "Předcházení situaci, kdy AI překoná kontrolu"] },
                    { hlavni: "Lidský dohled", podbody: ["Konečné rozhodnutí musí patřit člověku", "Průběžné testování bezpečnosti modelů"] }
                ]
            }
        ]
    },
"tab5": {
        title: "GAI v praxi školy",
        uvod: "Implementace AI vyžaduje změnu paradigmatu. Cílem není technologie zakazovat, ale integrovat je jako partnera, který připraví žáky na budoucí trh práce.",
        body: [
            {
                id: "e5-1",
                title: "Nové hodnocení",
                popis: "Tradiční úkoly v éře AI ztrácejí smysl. Musíme se zaměřit na proces tvorby, nikoliv jen na výsledek.",
                priklady: [
                    { hlavni: "Obhajoba a reflexe", podbody: ["Ústní vysvětlení postupu práce", "Reflexe toho, jak AI pomohla"] },
                    { hlavni: "Kritický přístup", podbody: ["Hodnocení schopnosti ověřit fakta", "Důraz na autentičnost myšlenek"] }
                ]
            },
            {
                id: "e5-2",
                title: "Inkluze a příležitosti",
                popis: "AI může vyrovnávat rozdíly, ale nesmí vytvářet novou digitální propast.",
                priklady: [
                    { hlavni: "Podpora SVP", podbody: ["Pomoc pro žáky s dyslexií a ADHD", "Individuální úprava tempa výuky"] },
                    { hlavni: "Digitální propast", podbody: ["Riziko náskoku uživatelů placených verzí", "Role školy v zajištění rovného přístupu"] }
                ]
            },
            {
                id: "e5-3",
                title: "Role učitele (Mentora)",
                popis: "Učitel už není jen zdrojem informací, ale průvodcem v digitálním světě.",
                priklady: [
                    { hlavni: "Učení se ptát", podbody: ["Rozvoj dovednosti správného promptování", "Důraz na digitální wellbeing"] },
                    { hlavni: "Lidské pouto", podbody: ["AI nesmí nahradit osobní zpětnou vazbu", "Varování před generickým hodnocením"] }
                ]
            },
            {
                id: "e5-4",
                title: "Bezpečnostní hranice",
                popis: "Ochrana školního tajemství a soukromí žáků je absolutní prioritou.",
                priklady: [
                    { hlavni: "Zákaz citlivých dat", podbody: ["Nevkládat jména, diagnózy (IVP) ani adresy", "Data v cloudu se stávají majetkem firem"] },
                    { hlavni: "Interní dokumenty", podbody: ["Nenahrávat zápisy z porad a metodiky", "Prioritní využívání školních licencí"] }
                ]
            },
            {
                id: "e5-5",
                title: "[!] Etické varování",
                popis: "Zneužití AI vede k degradaci dovedností a ztrátě důvěry.",
                priklady: [
                    { hlavni: "Konec myšlení", podbody: ["Kopírování bez přemýšlení vede k atrofii mozku", "Plagiátorství bez přiznání je podvod"] },
                    { hlavni: "Předpojatost (Bias)", podbody: ["AI šíří stereotypy (např. v kosmetice)", "Nutnost filtrovat sexistické či rasistické výstupy"] }
                ]
            },
            {
                id: "e5-6",
                title: "Na rovinu: Odpovědnost",
                popis: "Učitel nese za výstupy AI stoprocentní odpovědnost. Stroj je jen nástroj.",
                priklady: [
                    { hlavni: "Osobní selhání", podbody: ["Nekontrolovaný nesmysl v testu je chyba učitele", "Transparentnost: Jdi příkladem a cituj AI"] },
                    { hlavni: "Nahraditelnost", podbody: ["Učitel, který jen kopíruje, je nahraditelný", "AI má ušetřit čas na práci s lidmi, ne ji vzít"] }
                ]
            }
        ]
    }
}; // Konec objektu dataEtika


/**
 * Funkce pro vykreslení levého menu (bodů) pro danou kapitolu
 */
function renderEtikaMenu(tabId) {
    const container = document.querySelector(`#${tabId} .etika-sidebar`);
    // Změna: saháme do dataEtika místo obecného data
    const kapitolaData = dataEtika[tabId]; 
    
    if (!container || !kapitolaData) return;

    let html = '';
    kapitolaData.body.forEach(bod => {
        html += `
            <button class="etika-sidebar-btn" onclick="renderEtikaDetail('${tabId}', '${bod.id}', this)">
                ${bod.title}
            </button>
        `;
    });
    container.innerHTML = html;
    
    // Reset pravé strany na úvodní text
    resetEtikaDetail(tabId);
}

/**
 * Funkce pro vykreslení pravé karty s detailem
 */
function renderEtikaDetail(tabId, bodId, element) {
    const detailContainer = document.querySelector(`#${tabId} .etika-detail-card`);
    // Změna: hledáme v dataEtika
    const kapitolaData = dataEtika[tabId];
    const bod = kapitolaData.body.find(b => b.id === bodId);

    if (!detailContainer || !bod) return;

    // Aktivní stav tlačítka
    document.querySelectorAll(`#${tabId} .etika-sidebar-btn`).forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    let prikladyHtml = bod.priklady.map(p => `
        <div class="etika-example-item">
            <strong>${p.hlavni}</strong>
            <ul>${p.podbody.map(pb => `<li>${pb}</li>`).join('')}</ul>
        </div>
    `).join('');

    detailContainer.innerHTML = `
        <div class="etika-card-content animate-fade">
            <h4>${bod.title}</h4>
            <p class="bod-popis">${bod.popis}</p>
            <div class="priklady-seznam">
                <h5>Příklady a upřesnění:</h5>
                ${prikladyHtml}
            </div>
        </div>
    `;
}

/**
 * Funkce pro základní stav karty (placeholder)
 */
function resetEtikaDetail(tabId) {
    const detailContainer = document.querySelector(`#${tabId} .etika-detail-card`);
    const kapitolaData = dataEtika[tabId];
    
    if (!detailContainer || !kapitolaData) return;

    detailContainer.innerHTML = `
        <div class="etika-placeholder">
            <h4>${kapitolaData.title}</h4>
            <p>${kapitolaData.uvod}</p>
            <div class="hint-box">← Vyberte téma vlevo pro detaily</div>
        </div>
    `;
}
