const quizData = [
    {
        question: 'How old is your cat?',
        a: '11',
        b: '12',
        c: '13',
        d: '15',
        correct: 'a'
    },
    {
        question: 'What is the most popular programming language?',
        a: 'Java',
        b: 'Python',
        c: 'C',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'Who is the second man to walk on the moon?',
        a: 'Edwin Aldrin',
        b: 'Neil Armstrong',
        c: 'Charles Conrad',
        d: 'Alan Bean',
        correct: 'a'
    },
    {
        question: 'What does UNICEF stand for?',
        a: 'World Trade Organization',
        b: 'The United Nations Children\'s Fund',
        c: 'World Health Organisation',
        d: 'United Nations',
        correct: 'b',
    },
    {
        question: 'What is the largest country in the world?',
        a: 'USA',
        b: 'China',
        c: 'India',
        d: 'Russia',
        correct: 'd'
    }
];

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
            answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    console.log(answer);
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // show results
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            
            <button onclick="location.reload()">Reload</button>`;
        }
    }
})