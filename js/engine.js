let currentLevelData = [];
let currentIndex = 0;
let xp = parseInt(localStorage.getItem('speakeasy_xp')) || 0;

document.getElementById('xp-count').innerText = xp;

function startLevel(lvl) {
    // 1. Decide which data to use based on the 'lvl' passed from the button
    if (lvl === 'A1') {
        currentLevelData = A1_CONTENT;
    } else if (lvl === 'A2') {
        currentLevelData = A2_CONTENT;
    } else if (lvl === 'B1') {
        currentLevelData = B1_CONTENT;
    } else if (lvl === 'B2') {
        currentLevelData = B2_CONTENT;
    } else {
        alert("Dữ liệu trình độ này đang được cập nhật!"); // Safety message
        return;
    }

    // 2. Shuffle the questions so 48 hours of practice doesn't feel repetitive
    currentLevelData = [...currentLevelData].sort(() => Math.random() - 0.5); 

    // 3. Reset the counter to the first question
    currentIndex = 0;

    // 4. Switch the screen and show the first question
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
        container.innerHTML = `<h3>Sắp xếp: ${item.vn}</h3><div id="word-bank"></div><div id="user-answer" style="margin:20px 0; font-weight:bold; color:var(--primary); min-height:24px"></div><button class="btn btn-main" onclick="checkScramble('${item.answer}')">Kiểm tra</button>`;
        item.words.sort(() => Math.random() - 0.5).forEach(word => {
            let b = document.createElement('span'); b.className="word-chip"; b.innerText=word;
            b.onclick = () => { document.getElementById('user-answer').innerText += word + " "; b.style.display="none"; };
            document.getElementById('word-bank').appendChild(b);
        });
    }
    else if (item.type === "flashcard") {
        container.innerHTML = `<div class="card-box" onclick="this.innerText='${item.en}'">${item.vn}<br><small>(Chạm để xem tiếng Anh)</small></div><button class="btn btn-success" style="margin-top:20px" onclick="success()">Tôi đã nhớ!</button>`;
    }
}

function checkAnswer(isCorrect) {
    if(isCorrect) success();
    else alert("Chưa đúng, thử lại nhé!");
}

function checkScramble(correct) {
    const userAns = document.getElementById('user-answer').innerText.trim();
    if(userAns === correct) success();
    else alert("Sai thứ tự! Đáp án: " + correct);
}

function success() {
    xp += 10;
    localStorage.setItem('speakeasy_xp', xp);
    document.getElementById('xp-count').innerText = xp;
    document.getElementById('feedback').innerText = "🎉 Tuyệt vời! +10 XP";
    document.getElementById('next-btn').style.display = "block";
}

function nextQuestion() {
    currentIndex++;
    if(currentIndex < currentLevelData.length) renderQuestion();
    else { alert("Bạn đã hoàn thành bài tập!"); showMenu(); }
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}
function showMenu() { showScreen('menu-screen'); }
function resetXP() { localStorage.clear(); location.reload(); }
