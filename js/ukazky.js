// 1. SPOJENÍ VŠECH DAT (ujisti se, že máš soubory data/*.js v HTML před tímto skriptem)
const vsechnaData = [
    ...(typeof dataObrazky !== 'undefined' ? dataObrazky : []),
    ...(typeof dataGemy !== 'undefined' ? dataGemy : []),
    ...(typeof dataDynamika !== 'undefined' ? dataDynamika : []),
    ...(typeof dataNPI !== 'undefined' ? dataNPI : [])
];

let aktualniIndex = 0;

// 2. FUNKCE PRO VYKRESLENÍ KARET DO MŘÍŽKY
function renderCards(filterTag = 'vše', isSearch = false) {
    // Nejdřív vymažeme starý obsah gridů
    const grids = document.querySelectorAll('.ukazky-grid');
    grids.forEach(grid => {grid.innerHTML = "";});

    vsechnaData.forEach(item => {
        let matches = false;
        if (isSearch) {
// VYHLEDÁVÁNÍ: Koukáme do názvu, tagu i hashtagů
            const term = filterTag.toLowerCase().replace('#', '');
            const inTitle = item.title.toLowerCase().includes(term);
            const inTag = item.tag.toLowerCase().includes(term);
            // Prohledání hashtagů (pole)
            const inHashtags = item.hashtagy ? item.hashtagy.some(h => h.toLowerCase().includes(term)) : false;
            
            matches = inTitle || inTag || inHashtags;
        } else {
            // KLASICKÝ FILTR (Tlačítka)
            matches = (filterTag === 'vše' || item.tag.toLowerCase() === filterTag.toLowerCase());
        }
        // Filtrování podle tagu
        if (matches) {
            const grid = document.getElementById(item.gridId);
            if (grid) {
                const card = document.createElement('div');
                const máObrázek = item.img || (item.imgs && item.imgs.length > 0);
                if (item.tag === "NPI Metodika" || !máObrázek) {
                    card.className = 'ukazka-card card-small';
                } else {
                    card.className = 'ukazka-card';
}
                card.onclick = () => openUkazkaModal(item);
                const pocetIkonka = (item.type === 'gallery' && item.imgs) 
                    ? `<div class="image-count-badge"> ${item.imgs.length}</div>` 
                    : "";
                // Rozhodnutí, co zobrazit jako náhled na kartě
                let thumb = "";
                if (item.type === 'gallery' && item.imgs && item.imgs.length > 0) {
                    thumb = `<img src="${item.imgs[0]}" alt="${item.title}" onerror="this.src='https://placehold.co/400x300?text=Chyba+Cesty'">`;
                } else if (item.img) {
                    thumb = `<img src="${item.img}" alt="${item.title}" onerror="this.src='https://placehold.co/400x300?text=Chyba+Cesty'">`;
                } else {
                    thumb = `<i class="fas ${item.icon || 'fa-lightbulb'}"></i>`;
                }
                
                card.innerHTML = `
                    <div class="card-img-wrap">
                        ${pocetIkonka}
                        ${thumb}
                    </div>
                    <div class="card-info">
                        <span class="tag">${item.tag}</span>
                        <h4>${item.title}</h4>
                        <div class="hashtags-container">
                            ${item.hashtagy ? item.hashtagy.map(h => `<span class="hashtag">#${h}</span>`).join('') : ''}
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            }
        }

    });
}

// 3. FUNKCE FILTROVÁNÍ (pro tlačítka)
function filterData(tag, event) {
    // Odstranění třídy 'active' ze všech tlačítek
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    
    // Přidání třídy 'active' na kliknuté tlačítko
    if (event) {
        event.target.classList.add('active');
    }

    renderCards(tag);
}

// 3. LOGIKA MODÁLNÍHO OKNA
function openUkazkaModal(item) {
    const modal = document.getElementById('ukazka-modal');
    const body = document.getElementById('modal-body-ukazka');
    aktualniIndex = 0; // Reset indexu při každém otevření

    let mediaContent = "";

    // --- 1. PŘÍPRAVA MÉDIÍ  ---
    if (item.type === 'gallery' && item.imgs) {
        mediaContent = `
            <div class="gallery-container">
                <img id="main-gallery-img" src="${item.imgs[0]}" style="width:100%; border-radius:10px;">
                <div class="gallery-nav">
                    <button onclick="posunSnímek(${item.id}, -1)"><i class="fas fa-chevron-left"></i></button>
                    <span id="img-counter">1 / ${item.imgs.length}</span>
                    <button onclick="posunSnímek(${item.id}, 1)"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
        `;
    } else if (item.type === 'terminal') {
        mediaContent = `<div class="terminal-window"><pre id="terminal-text">${item.result || 'Simulace připravena...'}</pre></div>`;
    } else if (item.img) {
        mediaContent = `<img src="${item.img}" style="width:100%; border-radius:10px;">`;
    } else {
        mediaContent = `<div style="text-align:center; padding:40px; background:#f0ffff; border-radius:10px;"><i class="fas ${item.icon || 'fa-lightbulb'}" style="font-size:5rem; color:#4dd0e1;"></i></div>`;
    }
// --- 2. LOGIKA PRO NPI VS OSTATNÍ ---
    if (item.tag === "NPI Metodika") {
        // NOVÉ ROZLOŽENÍ PRO NPI: Moje nápady jdou pod mediaContent (vlevo)
        body.innerHTML = `
            <div class="modal-grid" style="padding: 20px; gap: 30px; align-items: start;">
                
                <div class="modal-media-side">
                    ${mediaContent}
                    <div class="moje-napady-section" style="margin-top:20px; padding:15px; ">
                        <h3 style="color:#00838f; font-size:1.1rem; margin-bottom:10px;text-transform: uppercase;letter-spacing: 0.5px;">Tvorba chatbota</h3>
                        <div style="line-height:1.6;">${item.mojeNapady}</div>
                        <h3 style="color:#00838f; font-size:1.1rem; margin-bottom:10px;text-transform: uppercase;letter-spacing: 0.5px;">Aplikace do výuky</h3>
                        <div style="line-height:1.6;">${item.mojeFunkce}</div>
                        <h3 style="color:#00838f; font-size:1.1rem; margin-bottom:10px;text-transform: uppercase;letter-spacing: 0.5px;">Nápady</h3>
                        <div style="line-height:1.6;">${item.mojeUkazky}</div>
                    </div>
                </div>

                <div class="modal-text-side">
                    <span class="tag">${item.tag}</span>
                    <h3 style="margin: 10px 0;">${item.title}</h3>
                    
                    <div class="npi-structured-box" style="background:#f9f9f9; padding:15px; border-radius:10px; border-left:4px solid #00838f; margin-bottom:10px;">
                        <div style="margin-bottom:10px;"><strong>Popis:</strong> <br><span>${item.npiPopis}</span></div>
                        <div style="margin-bottom:10px;"><strong>Příklad:</strong> <br><span>${item.npiPriklad}</span></div>
                        <div style="margin-bottom:10px;"><strong>Co tento způsob rozvíjí:</strong> <br><span>${item.npiRozviji}</span></div>
                        <div style="margin-bottom:10px;"><strong>Proč ho využít:</strong> <br><span>${item.npiProc}</span></div>
                    </div>

                    <div class="prompt-box">
                        <strong style="display:block; margin-bottom:10px; color:#00838f;">Prompt k použití:</strong>
                        <div id="copy-text" class="prompt-text">${item.prompt}</div>
                    </div>
                    <button class="copy-btn-modal" onclick="copyToClipboard()" style="width:100%;">
                        <i class="fas fa-copy"></i> Kopírovat prompt
                    </button>
                </div>

            </div>
        `;
    } else {
        // KLASICKÉ ROZLOŽENÍ PRO OSTATNÍ
        body.innerHTML = `
            <div class="modal-grid" style="padding: 20px; gap: 30px;">
                <div class="modal-media-side">${mediaContent}</div>
                <div class="modal-text-side">
                    <span class="tag">${item.tag}</span>
                    <h2 style="margin: 10px 0;">${item.title}</h2>
                    <p>${item.desc || ""}</p>
                    <div class="prompt-box">
                        <strong style="display:block; margin-bottom:10px; color:#00838f;">Prompt k použití:</strong>
                        <div id="copy-text" class="prompt-text">${item.prompt}</div>
                    </div>
                    <button class="copy-btn-modal" onclick="copyToClipboard()">
                        <i class="fas fa-copy"></i> Kopírovat prompt
                    </button>
                </div>
            </div>
        `;
    }
    
    modal.style.display = 'block';
}

// 4. FUNKCE PRO POSUN V GALERII
function posunSnímek(itemId, smer) {
    const polozka = vsechnaData.find(i => i.id == itemId);
    if (!polozka || !polozka.imgs) return;

    aktualniIndex += smer;

    if (aktualniIndex >= polozka.imgs.length) aktualniIndex = 0;
    if (aktualniIndex < 0) aktualniIndex = polozka.imgs.length - 1;

    document.getElementById('main-gallery-img').src = polozka.imgs[aktualniIndex];
    document.getElementById('img-counter').innerText = `${aktualniIndex + 1} / ${polozka.imgs.length}`;
}

// 5. OSTATNÍ FUNKCE (Zavření, Kopírování)
function closeUkazkaModal() {
    document.getElementById('ukazka-modal').style.display = 'none';
}

// Zavření kliknutím mimo obsah
window.onclick = function(event) {
    const modal = document.getElementById('ukazka-modal');
    if (event.target == modal) closeUkazkaModal();
}

function copyToClipboard() {
    const text = document.getElementById('copy-text').innerText;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector('.copy-btn-modal');
        btn.innerHTML = '<i class="fas fa-check"></i> Zkopírováno!';
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-copy"></i> Kopírovat prompt';
        }, 2000);
    });
}

// Spuštění po načtení
window.onload = () => renderCards('vše');

function searchData() {
    const input = document.getElementById('ukazky-search');
    if (input) {
        renderCards(input.value, true);
    }
}

