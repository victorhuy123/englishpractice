let currentLevelData = [];
let currentIndex = 0;
let xp = parseInt(localStorage.getItem('speakeasy_xp')) || 0;

// Update XP display on load
document.getElementById('xp-count').innerText = xp;

/**
 * Starts a specific level and shuffles the questions
 * @param {string} lvl - 'A1', 'A2', 'B1', or 'B2'
 */
function startLevel(lvl) {
    if (lvl === 'A1') currentLevelData = A1_CONTENT;
    else if (lvl === 'A2') currentLevelData = A2_CONTENT;
    else if (lvl === 'B1') currentLevelData = B1_CONTENT;
    else if (lvl === 'B2') currentLevelData = B2_CONTENT;
    else return;

    // Create a shuffled copy of the data
    currentLevelData = [...currentLevelData].sort(() => Math.random() - 0.5);
    
    currentIndex = 0;
    showScreen('practice-screen');
    renderQuestion();
}

/**
 * Renders the current question based on its type
 */
function renderQuestion() {
    const item = currentLevelData[currentIndex];
    const container = document.getElementById('question-container');
    document.getElementById('next-btn').style.display = "none";
    document.getElementById('feedback').innerText = "";

    // --- TYPE: MULTIPLE CHOICE ---
    if (item.type === "mcq") {
        let html = `<h3 style="margin-bottom:20px">${item.q}</h3>`;
        item.options.forEach((opt, i) => {
            html += `<button class="opt-btn" onclick="checkAnswer(${i === item.correct})">${opt}</button>`;
        });
        container.innerHTML = html;
    } 
    
    // --- TYPE: SCRAMBLE (FIXED SPACING) ---
    else if (item.type === "scramble") {
        container.innerHTML = `
            <h3>Sắp xếp câu: ${item.vn}</h3>
            <div id="word-bank" style="margin-top:20px; min-height:80px"></div>
            <div id="user-answer" style="margin:20px 0; padding:15px; border-bottom:2px dashed #6366f1; min-height:40px; color:#6366f1; font-weight:bold; font-size:1.1rem; line-height:1.5;"></div>
            <button class="btn btn-main" onclick="checkScramble('${item.answer.replace(/'/g, "\\'")}')">Kiểm tra</button>
            <button class="btn-text" onclick="renderQuestion()">Làm lại câu này</button>
        `;

        // Create word chips
        [...item.words].sort(() => Math.random() - 0.5).forEach(word => {
            let b = document.createElement('span'); 
            b.className = "word-chip"; 
            b.innerText = word;
            b.onclick = () => { 
                // FIXED: Explicitly adds a space and updates the innerText
                const currentText = document.getElementById('user-answer').innerText;
                document.getElementById('user-answer').innerText = currentText + word + " "; 
                b.style.visibility = "hidden"; 
                b.style.pointerEvents = "none"; // Prevent double clicking
            };
            document.getElementById('word-bank').appendChild(b);
        });
    }

    //
