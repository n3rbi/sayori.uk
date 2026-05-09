document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('image-container');
    const imageCount = 10;
    
    const totalSpots = parseInt(container.dataset.imageCount) || 30;
    
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function generateSpot() {
        const left = randomInt(0, 85);
        const top = randomInt(0, 75);
        const width = randomInt(12, 25);
        const rotation = randomInt(-25, 25);
        const zIndex = randomInt(1, 20);
        
        return [left, top, width, rotation, zIndex];
    }
    
    for (let i = 0; i < totalSpots; i++) {
        const spot = generateSpot();
        const imgNum = randomInt(1, imageCount);
        
        const img = document.createElement('img');
        img.src = `/static/imgs/sayori/sayori_${imgNum}.jpg`;
        img.className = 'sayori-img';
        img.alt = `Sayori fan art ${imgNum}`;
        
        img.style.left = `${spot[0]}%`;
        img.style.top = `${spot[1]}%`;
        img.style.width = `${spot[2]}%`;
        img.style.transform = `rotate(${spot[3]}deg)`;
        img.style.zIndex = spot[4];
        img.style.height = `${randomInt(120, 280)}px`;
        
        container.appendChild(img);
    }
    
    // Add disclaimer
    const disclaimer = document.createElement('div');
    disclaimer.id = 'disclaimer';
    disclaimer.innerHTML = `
        <strong>Disclaimer:</strong> We are not affiliated with the DDLC team and/or Dan Salvato. 
        All rights to Doki Doki Literature Club, its characters, and related intellectual property belong to their respective owners. 
        This is a non-commercial fan page created for personal enjoyment only.
    `;
    document.body.appendChild(disclaimer);
});