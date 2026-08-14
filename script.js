// Know His Pattern - Single-file app logic
// State persisted in localStorage under key 'khp_state'

const STORAGE_KEY = 'khp_state_v1';

// 10 questions across categories; answers have internal `type` green/red
const QUESTIONS = [
  {id:1, category:'Love & Care', question:"Your girlfriend is on her period and is feeling uncomfortable. What would you do?", answers:[
    {text:"I would support her, give her attention, and help her feel comfortable.", type:'green'},
    {text:"Her period is natural. Why should I treat her differently?", type:'red'},
    {text:"I don't want to deal with emotional situations, so I would avoid her until she feels better.", type:'red'}
  ]},
  {id:2, category:'Communication', question:"When you disagree, how do you usually handle the conversation?", answers:[
    {text:"I try to listen and talk it through calmly.", type:'green'},
    {text:"I raise my voice to make my point clearer.", type:'red'},
    {text:"I avoid the topic and let it go unresolved.", type:'red'}
  ]},
  {id:3, category:'Respect', question:"If she says 'no' to something, how do you react?", answers:[
    {text:"I respect her decision and don't push.", type:'green'},
    {text:"I argue until she changes her mind.", type:'red'},
    {text:"I make jokes about it to get my way later.", type:'red'}
  ]},
  {id:4, category:'Trust', question:"She mentions a male friend; what do you do?", answers:[
    {text:"Trust her and ask about the friend casually.", type:'green'},
    {text:"Question her frequently about his intentions.", type:'red'},
    {text:"Check her phone later to see messages.", type:'red'}
  ]},
  {id:5, category:'Arguments', question:"After an argument, how do you act?", answers:[
    {text:"Apologize if I'm wrong and work on it.", type:'green'},
    {text:"Give silent treatment to make a point.", type:'red'},
    {text:"Blame her for things that went wrong.", type:'red'}
  ]},
  {id:6, category:'Boundaries', question:"She needs personal space — your response?", answers:[
    {text:"Give her space and check in kindly later.", type:'green'},
    {text:"Demand to know what she's doing and who with.", type:'red'},
    {text:"Pressure her to spend time together anyway.", type:'red'}
  ]},
  {id:7, category:'Effort', question:"When the relationship gets comfortable, what do you do?", answers:[
    {text:"Continue making time and small thoughtful gestures.", type:'green'},
    {text:"Stop planning and assume things will stay fine.", type:'red'},
    {text:"Expect her to do everything to keep it alive.", type:'red'}
  ]},
  {id:8, category:'Loyalty', question:"Another woman flirts with you — what do you do?", answers:[
    {text:"Politely step away and stay loyal.", type:'green'},
    {text:"Flirt back if it's flattering.", type:'red'},
    {text:"Ignore it but secretly respond later.", type:'red'}
  ]},
  {id:9, category:'Responsibility', question:"You break a promise; what do you do?", answers:[
    {text:"Admit it, apologize and make it right.", type:'green'},
    {text:"Make excuses and avoid responsibility.", type:'red'},
    {text:"Promise to fix it later but don't follow through.", type:'red'}
  ]},
  {id:10, category:'Trust & Honesty', question:"Would you hide important information from her?", answers:[
    {text:"No — honesty matters even if it's uncomfortable.", type:'green'},
    {text:"I might keep small things to avoid fights.", type:'red'},
    {text:"Yes, if it's easier for me to avoid conflict.", type:'red'}
  ]}
];

// Application state
let state = {
  current: 0, // index 0..9
  answers: Array(QUESTIONS.length).fill(null) // will store selected answer index
};

function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function loadState(){ const raw = localStorage.getItem(STORAGE_KEY); if(raw) try{ state = JSON.parse(raw); }catch(e){} }
function clearState(){ localStorage.removeItem(STORAGE_KEY); state = {current:0, answers:Array(QUESTIONS.length).fill(null)} }

// UI helpers
function show(id){ document.querySelectorAll('.screen').forEach(s=>s.classList.add('hidden')); document.getElementById(id).classList.remove('hidden'); }

function renderQuestion(){
  const q = QUESTIONS[state.current];
  document.getElementById('question-text').innerText = q.question;
  document.getElementById('question-category').innerText = q.category;
  // progress text
  document.getElementById('progress-text').innerText = `Question ${state.current+1} of ${QUESTIONS.length}`;
  const pct = Math.round(((state.current)/QUESTIONS.length)*100);
  document.getElementById('progress-fill').style.width = pct + '%';

  const list = document.getElementById('answer-list'); list.innerHTML = '';
  q.answers.forEach((a, idx)=>{
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.innerText = a.text;
    btn.addEventListener('click', ()=>selectAnswer(idx));
    if(state.answers[state.current] === idx) btn.classList.add('selected');
    list.appendChild(btn);
  });

  // nav
  document.getElementById('prev-btn').disabled = state.current === 0;
  document.getElementById('next-btn').disabled = state.answers[state.current] === null;
}

function selectAnswer(answerIndex){
  state.answers[state.current] = answerIndex;
  saveState();
  renderQuestion();
}

function goNext(){ if(state.answers[state.current]===null) return; if(state.current < QUESTIONS.length-1){ state.current++; saveState(); renderQuestion(); } else { finishQuiz(); } }
function goPrev(){ if(state.current>0){ state.current--; saveState(); renderQuestion(); } }

function finishQuiz(){
  // scoring
  let green = 0, red = 0;
  const details = [];
  QUESTIONS.forEach((q, i)=>{
    const ansIdx = state.answers[i];
    const ans = q.answers[ansIdx];
    const type = ans ? ans.type : 'red'; // unanswered defaults to red (deterministic)
    if(type === 'green') green++; else red++;
    details.push({question:q.question, selected: ans ? ans.text : '(no answer)', type});
  });

  // tie-break: deterministic rule -> choose RED when equal
  const winner = (green > red) ? 'green' : 'red';

  show('results');
  renderResults({green, red, details, winner});
}

function renderResults({green, red, details, winner}){
  // theme
  document.body.classList.remove('theme-green','theme-red');
  if(winner === 'green') document.body.classList.add('theme-green'); else document.body.classList.add('theme-red');

  const percentGreen = Math.round((green/QUESTIONS.length)*100);
  const percentRed = Math.round((red/QUESTIONS.length)*100);

  // visual circle (simple SVG)
  const rv = document.getElementById('result-visual');
  rv.innerHTML = '';
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS,'svg'); svg.setAttribute('viewBox','0 0 100 100'); svg.setAttribute('width','180'); svg.setAttribute('height','180');

  const bg = document.createElementNS(svgNS,'circle'); bg.setAttribute('cx',50); bg.setAttribute('cy',50); bg.setAttribute('r',40); bg.setAttribute('fill','none'); bg.setAttribute('stroke','#eee'); bg.setAttribute('stroke-width',12);
  svg.appendChild(bg);

  const fg = document.createElementNS(svgNS,'circle'); fg.setAttribute('cx',50); fg.setAttribute('cy',50); fg.setAttribute('r',40); fg.setAttribute('fill','none'); fg.setAttribute('stroke-width',12); fg.setAttribute('stroke-linecap','round');
  const circumference = 2*Math.PI*40; fg.setAttribute('stroke-dasharray', circumference);
  const offset = circumference * (1 - (winner==='green' ? percentGreen/100 : percentRed/100));
  fg.setAttribute('stroke-dashoffset', offset);
  fg.setAttribute('transform','rotate(-90 50 50)');
  fg.setAttribute('stroke', winner==='green' ? 'var(--green)' : 'var(--red)');
  svg.appendChild(fg);

  const text = document.createElementNS(svgNS,'text'); text.setAttribute('x',50); text.setAttribute('y',55); text.setAttribute('text-anchor','middle'); text.setAttribute('font-size','14'); text.setAttribute('fill','#333');
  text.textContent = `${winner==='green' ? percentGreen : percentRed}%`;
  svg.appendChild(text);

  rv.appendChild(svg);

  // text
  const rt = document.getElementById('result-text'); rt.innerHTML = '';
  const h = document.createElement('h2'); h.textContent = (winner==='green') ? '🟢 GREEN FLAG' : '🔴 RED FLAG'; rt.appendChild(h);
  const p = document.createElement('p'); p.className='muted'; p.textContent = (winner==='green') ? 'Your answers show more positive relationship behaviors.' : 'Your answers show more concerning relationship behaviors.';
  rt.appendChild(p);

  // detailed answers
  const detEl = document.getElementById('detailed-answers'); detEl.innerHTML = '';
  details.forEach((d,i)=>{
    const wrap = document.createElement('div'); wrap.className='cat';
    const qEl = document.createElement('div'); qEl.innerHTML = `<strong>Q${i+1}:</strong> ${d.question}`;
    const aEl = document.createElement('div'); aEl.innerHTML = `<em>Your answer:</em> ${d.selected}`;
    const tEl = document.createElement('div'); tEl.innerHTML = d.type === 'green' ? '🟢 Green Flag' : '🔴 Red Flag';
    wrap.appendChild(qEl); wrap.appendChild(aEl); wrap.appendChild(tEl);
    detEl.appendChild(wrap);
  });

  // summary area (counts)
  const summaryNode = document.createElement('div'); summaryNode.className='card'; summaryNode.style.marginTop='12px'; summaryNode.innerHTML = `<div class="cat"><div>Green Flags</div><div>${green}</div></div><div class="cat"><div>Red Flags</div><div>${red}</div></div>`;
  detEl.parentNode.insertBefore(summaryNode, detEl);
}

// navigation wiring
document.addEventListener('DOMContentLoaded', ()=>{
  loadState();
  // home -> instructions
  document.getElementById('go-instructions').addEventListener('click', ()=> show('instructions'));
  document.getElementById('back-home').addEventListener('click', ()=> show('home'));
  document.getElementById('start-quiz').addEventListener('click', ()=>{ show('quiz'); renderQuestion(); });

  document.getElementById('next-btn').addEventListener('click', goNext);
  document.getElementById('prev-btn').addEventListener('click', goPrev);
  document.getElementById('retake').addEventListener('click', ()=>{ clearState(); show('instructions'); });
  document.getElementById('to-home').addEventListener('click', ()=>{ clearState(); show('home'); });

  // if there's saved progress, resume on quiz
  if(state.answers.some(a=>a!==null)){
    show('quiz'); renderQuestion();
  } else {
    show('home');
  }
});


const baseQuestions = [
    {
        question: "When you make a mistake, what do you usually do?",
        green: "I apologize and try to fix it.",
        red: "I blame others or pretend it didn't happen."
    },
    {
        question: "How do you handle it when your partner/friend wants to go out without you?",
        green: "I encourage them to have fun!",
        red: "I get angry or text them constantly."
    },
    {
        question: "If someone tells you 'No', how do you react?",
        green: "I respect their boundary and back off.",
        red: "I keep pushing until they say yes."
    }
];

// Saved questions from localStorage
let savedQuestions = [];
let questions = [];
let currentQuestion = 0;
let score = 0;
let totalAnswers = 0;
let greenCount = 0;

function loadSaved() {
    try {
        const raw = localStorage.getItem('savedQuestions');
        savedQuestions = raw ? JSON.parse(raw) : [];
    } catch (e) {
        savedQuestions = [];
    }
}

function saveSaved() {
    localStorage.setItem('savedQuestions', JSON.stringify(savedQuestions));
}

function rebuildQuestions() {
    questions = [...baseQuestions, ...savedQuestions];
}

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        document.getElementById('question-text').innerText = q.question;
        // update progress
        const ci = document.getElementById('current-index');
        const tq = document.getElementById('total-questions');
        if (ci) ci.innerText = (currentQuestion + 1);
        if (tq) tq.innerText = questions.length;
    } else {
        showResult();
    }
}

function answerQuestion(points) {
    score += points;
    if (points === 1) greenCount++;
    totalAnswers++;
    currentQuestion++;
    loadQuestion();
}

function showResult() {
    // show results (only Green or Red)
    const quizEl = document.getElementById('quiz');
    const resultsEl = document.getElementById('results');
    if (quizEl) quizEl.classList.add('hidden');
    if (resultsEl) resultsEl.classList.remove('hidden');

    const title = document.getElementById('result-title');
    const summary = document.getElementById('result-summary-text');

    const percent = totalAnswers ? Math.round((greenCount / totalAnswers) * 100) : 0;
    const isGreen = percent >= 50;

    if (isGreen) {
        title.innerText = '🟢 Mostly Healthy Patterns';
        summary.innerText = 'Your answers show more positive, repeating patterns. Consider what is working well and keep communication open.';
    } else {
        title.innerText = '🔴 Concerning Patterns';
        summary.innerText = 'Your answers indicate repeated behaviors that may be concerning. Consider seeking support and setting clear boundaries.';
    }

    // simple overall breakdown
    const breakdown = document.getElementById('category-breakdown');
    if (breakdown) {
        breakdown.innerHTML = '';
        const node = document.createElement('div');
        node.className = 'cat';
        node.innerHTML = `<div class="meta">Overall pattern</div><div class="score">${percent}% ${isGreen ? 'Green' : 'Red'}</div>`;
        breakdown.appendChild(node);
    }
}

// Add-question UI handlers
function toggleAddBox() {
    const box = document.getElementById('add-box');
    box.classList.toggle('hidden');
}

function clearInputs() {
    document.getElementById('new-question').value = '';
    document.getElementById('new-green').value = '';
    document.getElementById('new-red').value = '';
}

function addNewQuestion() {
    const q = document.getElementById('new-question').value.trim();
    const g = document.getElementById('new-green').value.trim();
    const r = document.getElementById('new-red').value.trim();
    if (!q || !g || !r) {
        alert('Please fill all fields to save a question.');
        return;
    }
    const obj = { question: q, green: g, red: r };
    savedQuestions.push(obj);
    saveSaved();
    rebuildQuestions();
    clearInputs();
    alert('Question saved for future quizzes.');
}

function clearSavedQuestions() {
    if (!confirm('Remove all saved questions?')) return;
    savedQuestions = [];
    saveSaved();
    rebuildQuestions();
    alert('Saved questions cleared.');
}

// Initialize app
window.addEventListener('DOMContentLoaded', () => {
    loadSaved();
    rebuildQuestions();

    // wire choice buttons (green/red)
    const choices = document.querySelectorAll('.choice');
    choices.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const v = parseInt(btn.dataset.value || btn.getAttribute('data-value'), 10) || 0;
            answerQuestion(v);
        });
    });

    const showAddBtn = document.getElementById('show-add');
    if (showAddBtn) showAddBtn.addEventListener('click', toggleAddBox);
    const saveQBtn = document.getElementById('save-question');
    if (saveQBtn) saveQBtn.addEventListener('click', addNewQuestion);
    const clearQBtn = document.getElementById('clear-questions');
    if (clearQBtn) clearQBtn.addEventListener('click', clearSavedQuestions);

    // start button (show quiz)
    const startBtn = document.getElementById('start-test');
    if (startBtn) startBtn.addEventListener('click', () => {
        document.getElementById('welcome').classList.add('hidden');
        document.getElementById('quiz').classList.remove('hidden');
        // reset counters and start
        currentQuestion = 0; score = 0; totalAnswers = 0; greenCount = 0;
        rebuildQuestions();
        loadQuestion();
    });

    const restartBtn = document.getElementById('restart');
    if (restartBtn) restartBtn.addEventListener('click', () => {
        // reload page to reset session
        location.reload();
    });
});
