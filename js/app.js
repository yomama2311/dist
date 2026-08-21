// --- TAB NAVIGATION ---
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and tabs
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked button and target tab
        btn.classList.add('active');
        document.getElementById(btn.getAttribute('data-tab')).classList.add('active');
    });
});

// --- TIMELINE ---
function renderTimeline() {
    const track = document.getElementById('timeline-track');
    track.innerHTML = '';
    
    timelineData.forEach((item, index) => {
        const node = document.createElement('div');
        node.className = 'timeline-node';
        node.innerHTML = `
            <div class="node-date">${item.date}</div>
            <div class="node-point"></div>
            <div class="node-label">${item.title}</div>
        `;
        node.addEventListener('click', () => {
            // Highlight active node
            document.querySelectorAll('.timeline-node').forEach(n => n.classList.remove('active'));
            node.classList.add('active');
            
            // Show details
            const detailBox = document.getElementById('timeline-detail-box');
            document.getElementById('td-title').innerText = item.title;
            document.getElementById('td-date').innerText = item.date;
            document.getElementById('td-content').innerHTML = item.detail;
            detailBox.classList.remove('hidden');
            
            // Scroll to detail box on mobile
            if (window.innerWidth <= 768) {
                detailBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
        track.appendChild(node);
    });
}

function closeTimelineDetail() {
    document.getElementById('timeline-detail-box').classList.add('hidden');
    document.querySelectorAll('.timeline-node').forEach(n => n.classList.remove('active'));
}

// --- OVERVIEW CONTENT ---
function renderOverview() {
    const part1 = document.getElementById('overview-part1');
    part1.innerHTML = `<h3 class="part-title">${overviewData.part1.title}</h3>`;
    overviewData.part1.sections.forEach(sec => {
        part1.innerHTML += `
            <div class="overview-section">
                <h4>${sec.heading}</h4>
                <div>${sec.content}</div>
            </div>
        `;
    });

    const part2 = document.getElementById('overview-part2');
    part2.innerHTML = `<h3 class="part-title">${overviewData.part2.title}</h3>`;
    overviewData.part2.sections.forEach(sec => {
        part2.innerHTML += `
            <div class="overview-section">
                <h4>${sec.heading}</h4>
                <div>${sec.content}</div>
            </div>
        `;
    });
}

function renderLogicTree() {
    const tree = document.getElementById('logic-tree');
    tree.innerHTML = '';
    logicTreeData.forEach((item, index) => {
        tree.innerHTML += `<div class="tree-node">${item}</div>`;
        if (index < logicTreeData.length - 1) {
            tree.innerHTML += `<div class="tree-arrow">↓</div>`;
        }
    });
}

// --- QUIZ ---
let currentQuizIndex = 0;
let score = 0;
let shuffledQuiz = [];

function shuffleArray(array) {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

function initQuiz() {
    shuffledQuiz = shuffleArray(quizData);
    currentQuizIndex = 0;
    score = 0;
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('all-answers-list').classList.add('hidden');
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const quizArea = document.getElementById('quiz-area');
    quizArea.innerHTML = '';
    
    if (currentQuizIndex >= shuffledQuiz.length) {
        showQuizResult();
        return;
    }

    const q = shuffledQuiz[currentQuizIndex];
    
    // We shuffle options too, but keep track of correct option
    const originalOptions = q.options.map((opt, i) => ({ text: opt, isCorrect: i === q.correctIndex }));
    const shuffledOptions = shuffleArray(originalOptions);

    let html = `
        <div class="quiz-question-box">
            <p class="quiz-q-text">Câu ${currentQuizIndex + 1}/${shuffledQuiz.length}: ${q.question.replace(/^Câu \d+\.\s*/, '')}</p>
            <div class="quiz-options">
    `;
    
    shuffledOptions.forEach((opt, i) => {
        html += `<button class="quiz-option" onclick="selectQuizOption(this, ${opt.isCorrect})">${opt.text.replace(/^[A-D]\.\s*/, '')}</button>`;
    });

    html += `
            </div>
            <div class="quiz-explanation hidden" id="quiz-exp-${currentQuizIndex}">
                <p><strong>Giải thích:</strong> ${q.explanation}</p>
                <button class="btn-primary" style="margin-top: 1rem;" onclick="nextQuizQuestion()">Câu tiếp theo</button>
            </div>
        </div>
    `;
    
    quizArea.innerHTML = html;
}

window.selectQuizOption = function(btn, isCorrect) {
    // Disable all options
    const options = btn.parentElement.querySelectorAll('.quiz-option');
    options.forEach(o => o.disabled = true);
    
    if (isCorrect) {
        btn.classList.add('correct');
        score++;
    } else {
        btn.classList.add('incorrect');
        // Find and highlight correct answer
        // Note: we can't easily find it since we shuffled, but we can highlight correct ones if we added data-correct
        // Since we didn't add data-correct to HTML, let's just show explanation which tells the answer.
    }
    
    document.getElementById(`quiz-exp-${currentQuizIndex}`).classList.remove('hidden');
}

window.nextQuizQuestion = function() {
    currentQuizIndex++;
    renderQuizQuestion();
}

function showQuizResult() {
    document.getElementById('quiz-area').innerHTML = '';
    const resultBox = document.getElementById('quiz-result');
    resultBox.classList.remove('hidden');
    document.getElementById('score-display').innerText = `${score}/${shuffledQuiz.length}`;
}

window.restartQuiz = function() {
    initQuiz();
}

window.showAllAnswers = function() {
    const list = document.getElementById('all-answers-list');
    list.innerHTML = '<h3>Toàn bộ câu hỏi và đáp án</h3>';
    quizData.forEach((q, i) => {
        list.innerHTML += `
            <div class="answer-item">
                <p><strong>${q.question}</strong></p>
                <p style="color: var(--success); font-weight: bold;">Đáp án đúng: ${q.options[q.correctIndex]}</p>
                <p>${q.explanation}</p>
            </div>
        `;
    });
    list.classList.remove('hidden');
}

// --- DECISION GAME ---
let gameStats = { doiMoi: 0, onDinh: 10, niemTin: 5 };
let currentCardIndex = 0;
let initialChoice = "";

function updateProgressBars() {
    const dmPercent = Math.min((gameStats.doiMoi / 30) * 100, 100);
    const odPercent = Math.min((gameStats.onDinh / 20) * 100, 100);
    
    // Niềm tin cơ sở max is 20, but can exceed to 24. 
    // We allow the bar to go over 100% physically if container allows, or max at 100 and change color.
    const ntPercentCalc = (gameStats.niemTin / 20) * 100;
    const ntPercent = Math.min(ntPercentCalc, 100);

    document.getElementById('val-doimoi').innerText = `${gameStats.doiMoi}/30`;
    document.getElementById('val-ondinh').innerText = `${gameStats.onDinh}/20`;
    document.getElementById('val-niemtin').innerText = `${gameStats.niemTin}/20`;

    document.getElementById('bar-doimoi').style.width = `${dmPercent}%`;
    document.getElementById('bar-ondinh').style.width = `${odPercent}%`;
    
    const barNiemTin = document.getElementById('bar-niemtin');
    barNiemTin.style.width = `${ntPercent}%`;
    if (ntPercentCalc > 100) {
        barNiemTin.classList.add('over-max');
    } else {
        barNiemTin.classList.remove('over-max');
    }
}

function switchGameScreen(screenId) {
    document.querySelectorAll('.game-screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

function initGame() {
    gameStats = { doiMoi: 0, onDinh: 10, niemTin: 5 };
    currentCardIndex = 0;
    updateProgressBars();
    
    document.getElementById('game-context-text').innerText = decisionGameData.intro.context;
    document.getElementById('game-startup-q').innerText = decisionGameData.intro.question;
    
    const optsDiv = document.getElementById('game-startup-options');
    optsDiv.innerHTML = '';
    decisionGameData.intro.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.innerText = opt;
        btn.onclick = () => {
            initialChoice = opt;
            startCards();
        };
        optsDiv.appendChild(btn);
    });
    
    switchGameScreen('screen-intro');
}

function startCards() {
    currentCardIndex = 0;
    renderCard();
    switchGameScreen('screen-card');
}

function renderCard() {
    const card = decisionGameData.cards[currentCardIndex];
    document.getElementById('card-title').innerText = card.title;
    document.getElementById('card-situation').innerText = card.situation;
    
    const optsDiv = document.getElementById('card-options');
    optsDiv.innerHTML = '';
    
    // Shuffle options to prevent guessing by position
    const shuffledOpts = shuffleArray(card.options);
    
    shuffledOpts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        // Hide the A/B/C prefix for cleaner shuffled UI, or keep it. Let's strip A. B. C.
        btn.innerText = opt.label.replace(/^[A-C]\.\s*/, '');
        btn.onclick = () => processChoice(opt, card.debrief);
        optsDiv.appendChild(btn);
    });
}

function processChoice(opt, debriefText) {
    // Core Logic: Đổi mới tư duy never decreases
    const deltaDoiMoi = Math.max(0, opt.deltas.doiMoi);
    const deltaOnDinh = opt.deltas.onDinh;
    const deltaNiemTin = opt.deltas.niemTin;

    gameStats.doiMoi += deltaDoiMoi;
    gameStats.onDinh += deltaOnDinh;
    gameStats.niemTin += deltaNiemTin;
    
    updateProgressBars();
    
    showDebrief(deltaDoiMoi, deltaOnDinh, deltaNiemTin, debriefText, opt.isHistorical);
}

function showDebrief(dD, dO, dN, text, isHist) {
    const formatDelta = (val) => val > 0 ? `+${val}` : val;
    const getClass = (val) => val > 0 ? 'delta-pos' : (val < 0 ? 'delta-neg' : 'delta-zero');
    
    document.getElementById('debrief-deltas').innerHTML = `
        <span class="${getClass(dD)}">Đổi mới: ${formatDelta(dD)}</span>
        <span class="${getClass(dO)}">Ổn định: ${formatDelta(dO)}</span>
        <span class="${getClass(dN)}">Niềm tin: ${formatDelta(dN)}</span>
    `;
    
    let histLabel = isHist ? `<strong style="color:var(--success)">[ĐÚNG LỊCH SỬ]</strong> ` : `<strong style="color:var(--warning)">[PHƯƠNG ÁN KHÁC]</strong> `;
    document.getElementById('debrief-content').innerHTML = histLabel + text;
    
    document.getElementById('btn-next-card').onclick = () => {
        currentCardIndex++;
        if (currentCardIndex < decisionGameData.cards.length) {
            renderCard();
            switchGameScreen('screen-card');
        } else {
            showSummary();
        }
    };
    
    switchGameScreen('screen-debrief');
}

function showSummary() {
    // Render timeline
    const tlDiv = document.getElementById('summary-timeline-list');
    tlDiv.innerHTML = '';
    decisionGameData.summaryTimeline.forEach(item => {
        tlDiv.innerHTML += `
            <div class="summary-item">
                <div class="sum-time">${item.time}</div>
                <div class="sum-content">
                    <div class="sum-event">${item.event}</div>
                    <div class="sum-retained">${item.retained}</div>
                </div>
            </div>
        `;
    });
    
    // Evaluate
    const evalRes = document.getElementById('eval-result');
    const evalDesc = document.getElementById('eval-desc');
    let title = "";
    let desc = "";
    
    if (gameStats.doiMoi >= 25) {
        title = "🏆 Nhà lãnh đạo bám sát thực tiễn";
        desc = "Nhóm đã đi gần sát con đường mà Đảng thực sự lựa chọn: liên tục thừa nhận sáng kiến từ cơ sở và quy luật khách quan, kể cả khi phải trả giá ngắn hạn.";
    } else if (gameStats.doiMoi >= 15) {
        title = "⚖️ Người cải cách thận trọng";
        desc = "Nhóm có đổi mới nhưng còn giữ lại tư duy cũ ở một số bước. Tiến bộ thật nhưng chưa dứt khoát, nên đổi mới bị kéo dài hơn cần thiết.";
    } else {
        title = "🔒 Người bảo thủ trì trệ";
        desc = "Nhóm ưu tiên giữ ổn định cơ chế cũ, từ chối thừa nhận thực tiễn đang thay đổi. Lựa chọn này kéo dài khủng hoảng kinh tế — xã hội chứ không ngăn được nó.";
    }
    
    evalRes.innerText = title;
    evalDesc.innerText = desc;
    
    // Add cross-check logic based on intro question
    let crossCheck = `<br><strong>Phân tích lựa chọn mở đầu:</strong> Bạn đã chọn <em>${initialChoice}</em>. Thái độ lắng nghe thực tiễn ngay từ điểm xuất phát là yếu tố xuyên suốt quyết định toàn bộ chuỗi tích lũy đổi mới.`;
    evalDesc.innerHTML += crossCheck;
    
    switchGameScreen('screen-summary');
}

window.restartGame = function() {
    initGame();
}


// --- INITIALIZATION ---
window.onload = () => {
    renderTimeline();
    renderOverview();
    renderLogicTree();
    initQuiz();
    initGame();
};
