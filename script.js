const symbols = ['🍒', '🍎', '🍋', '🍉', '⭐', '🛎️'];
const reels = document.querySelectorAll('.reel');
const spinButton = document.getElementById('spinButton');

function updateReel(reel, symbol) {
    const middleSymbol = reel.querySelector('.symbol-middle');
    const aboveSymbol = reel.querySelector('.symbol-above');
    const belowSymbol = reel.querySelector('.symbol-below');

    aboveSymbol.innerHTML = symbols[Math.floor(Math.random() * symbols.length)]; // 更新上方的水果
    middleSymbol.innerHTML = symbol; // 更新中間的水果
    belowSymbol.innerHTML = symbols[Math.floor(Math.random() * symbols.length)]; // 更新下方的水果
}

function spin() {
    reels.forEach((reel, index) => {
        let spins = Math.floor(Math.random() * 5) + 6; // 隨機6-10次
        let speed = 200; // 初始速度
        let spinDuration = 5000; // 10秒

        const interval = setInterval(() => {
            // 隨機選擇一個符號
            const symbolIndex = Math.floor(Math.random() * symbols.length);
            const symbol = symbols[symbolIndex];

            // 更新該滾輪的顯示
            updateReel(reel, symbol);

            spins--;
            if (spins <= 0) {
                clearInterval(interval);
            }
        }, speed);

        // 在10秒內隨機減速
        setTimeout(() => {
            clearInterval(interval);
        }, spinDuration);
    });
}

spinButton.addEventListener('click', spin);
