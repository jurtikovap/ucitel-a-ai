// 1. DATA OBRÁZKŮ (Sem budeš jen připisovat další řádky)
const inspirationData = [
   
    { category: "Zeměpis", src: "../img//tvorba/brno_2.jpg" },
    { category: "Zeměpis", src: "../img//tvorba/brno_mapa.jpg" },
    { category: "Zeměpis", src: "../img//tvorba/CR_2.jpg" },
    { category: "Zeměpis", src: "../img//tvorba/CR_mapa.jpg" }
];

// Přejmenovali jsme funkci na openInspiration, aby nekolidovala se script.js
function openInspiration(imgSrc) {
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    
    if (lb && lbImg) {
        lbImg.src = imgSrc;
        lb.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeInspiration() {
    const lb = document.getElementById('lightbox');
    if (lb) {
        lb.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Generátor, který nyní volá novou funkci
function initInspiration() {
    const container = document.getElementById('inspiration-container');
    if (!container) return;

    const categories = [...new Set(inspirationData.map(item => item.category))];

    container.innerHTML = categories.map(cat => {
        const images = inspirationData.filter(img => img.category === cat);
        return `
            <div class="inspiration-section">
                <h3>${cat}</h3>
                <div class="inspiration-row">
                    ${images.map(img => `
                        <img src="${img.src}" 
                             class="thumb" 
                             onclick="openInspiration('${img.src}')">
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
}

// Spuštění při načtení stránky

document.addEventListener('DOMContentLoaded', initInspiration);