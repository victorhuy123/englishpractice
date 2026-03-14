let currentLevelData = [];
let currentIndex = 0;
let xp = parseInt(localStorage.getItem('speakeasy_xp')) || 0;

document.getElementById('xp-count').innerText = xp;

function startLevel(lvl) {
    if (lvl === 'A1') currentLevelData = A1_CONTENT;
    else if (lvl === 'A2') currentLevelData = A2_CONTENT;
    else if (lvl === 'B1') currentLevelData = B1_CONTENT;
    else if (lvl === 'B2') currentLevelData = B2_CONTENT;
    else return;

    currentLevelData = [...currentLevelData].sort(() => Math.random() - 0.5);
    currentIndex = 0;
    showScreen('practice-screen');
    renderQuestion();
}

function renderQuestion() {
    const item = currentLevelData[currentIndex];
    const container = document.getElementById('question-container');
    document.getElementById('next-btn').style.display = "none";
    document.getElementById('feedback').innerText = "";

    if (item.type === "mcq") {
        let html = `<h3>${item.q}</h3>`;
        item.options.forEach((opt, i) => {
            html += `<button class="opt-btn" onclick="checkAnswer(${i === item.correct})">${opt}</button>`;
        });
        container.innerHTML = html;
    } 
    else if (item.type === "scramble") {
        container.innerHTML = `
            <h3>Sắp xếp câu: ${item.vn}</h3>
            <div id="word-bank"></div>
            <div id="user-answer" style="margin:20px 0; padding:15px; border-bottom:2px dashed #6366f1; min-height:40px; color:#6366f1; font-weight:bold;"></div>
            <button class="btn btn-main" onclick="checkScramble('${item.answer}')">Kiểm tra</button>
            <button class="btn-text" onclick="renderQuestion()">Làm lại câu này</button>
        `;
        [...item.words].sort(() => Math.random() - 0.5).forEach(word => {
            let b = document.createElement('span'); b.className="word-chip"; b.innerText=word;
            b.onclick = () => { 
                // FIXED: Adds a space after each word
                document.getElementById('user-answer').innerText += word + " "; 
                b.style.visibility="hidden"; 
            };
            document.getElementById('word-bank').appendChild(b);
        });
    }
    else if (item.type === "flashcard") {
        container.innerHTML = `
            <div class="card-box" onclick="this.innerText='${item.en}'">${item.vn}<br><small>(Chạm để lật)</small></div>
            <button class="btn btn-success" style="margin-top:20px" onclick="success()">Tôi đã thuộc!</button>
        `;
    }
}

function checkScramble(correct) {
