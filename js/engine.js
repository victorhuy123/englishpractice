let currentLevelData = [];
let currentIndex = 0;
let xp = parseInt(localStorage.getItem('speakeasy_xp')) || 0;

document.getElementById('xp-count').innerText = xp;

function startLevel(lvl) {
    // Determine which data to load
    if (lvl === 'A1') currentLevelData = A1_CONTENT;
    else if (lvl === 'A2') currentLevelData = A2_CONTENT;
    else if (lvl === 'B1') currentLevelData = B1_CONTENT;
    else if (lvl === 'B2') currentLevelData = B2_CONTENT;
    else return;

    // Shuffle current data for a fresh experience
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
        let html = `<h3 style="margin-bottom:20px">${item.q}</h3>`;
        item.options.forEach((opt, i) => {
            html += `<button class="opt-btn" onclick="checkAnswer(${i === item.correct})">${opt}</button>`;
        });
        container.innerHTML = html;
    } 
    else if (item.type === "scramble") {
        container.innerHTML = `<h3>Sắp xếp: ${item.vn}</h3>
        <div id="word-bank" style="margin-top:20px"></div>
        <div id="user-answer" style="margin:30px 0; padding:15px; border-bottom:2px dashed #6366f1; font-weight:bold; color:#6366f1; min-height:30px; font-size:1.1rem"></div>
        <button class="btn btn-main" onclick="checkScramble('${item.answer}')">Kiểm tra</button>`;
        
        [...item.words].sort(() => Math.random() - 0.5).forEach(word => {
            let b = document.createElement('span'); b.className="word-chip"; b.innerText=word;
            b.onclick = () => { document.getElementById('user-answer').innerText += word + " "; b.style.visibility="hidden"; };
            document.getElementById('word-bank').appendChild(b);
        });
    }
    else if (item.type === "flashcard") {
        container.innerHTML = `
        <div class="card-box" onclick="this.innerHTML='<span style=color:var(--primary)>${item.en}</span>'">
            ${item.vn}<br><small style="font-size:0.8rem; color:#94a3b8">(Chạm để xem tiếng Anh)</small>
        </div>
        <button class="btn btn-success" style="margin-top:30px" onclick="success()">Tôi đã nhớ từ này!</button>`;
    }
}

function checkAnswer(isCorrect) {
    if(isCorrect) success();
    else {
        document.getElementById('feedback').innerText = "❌ Sai rồi, thử lại nhé!";
        document.getElementById('feedback').style.color = "#ef4444";
    }
}

function checkScramble(correct) {
    const userAns = document.getElementById('user-answer').innerText.trim();
    if(userAns === correct) success();
    else alert("Chưa chính xác! Đáp án đúng: " + correct);
}

function success() {
    xp += 10;
    localStorage.setItem('speakeasy_xp', xp);
    document.getElementById('xp-count').innerText = xp;
    document.getElementById('feedback').innerText = "🎉 Tuyệt vời! +10 XP";
    document.getElementById('feedback').style.color = "var(--success)";
    document.getElementById('next-btn').style.display = "block";
}

function nextQuestion() {
    currentIndex++;
    if(currentIndex < currentLevelData.length) renderQuestion();
    else {
        alert("Chúc mừng! Bạn đã hoàn thành toàn bộ bài tập ở trình độ này.");
        showMenu();
    }
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function showMenu() { showScreen('menu-screen'); }
function resetXP() { if(confirm("Xóa toàn bộ điểm XP và bắt đầu lại?")) { localStorage.clear(); location.reload(); } }
