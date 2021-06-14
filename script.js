const mainEl = document.getElementById('main');
const headerEl = document.getElementById('header');
const btn = document.getElementById('btn');
const prjListEl = document.getElementById('prj-list');

// Create list of prj objects
const prjObjects = [
    {
        path: "/password-generator/",
        imgSrc: "/password-generator/preview-pw.PNG",
        title: "Password Generator"
    },
    {
        path: "/countdown-timer/",
        imgSrc: "/countdown-timer/preview-ct.PNG",
        title: "Countdown Timer"
    },
    {
        path: "/notes-app/",
        imgSrc: "/notes-app/preview-notes.PNG",
        title: "Notes App"
    },
    {
        path: "/drawing-app/",
        imgSrc: "/drawing-app/preview-dwg.PNG",
        title: "Drawing App"
    },
    {
        path: "/todo-app/",
        imgSrc: "/todo-app/preview-todos.PNG",
        title: "Todos App"
    },
    {
        path: "/recipe-app/",
        imgSrc: "/recipe-app/preview-recipe.PNG",
        title: "Recipe App"
    },
    {
        path: "/quiz-app/",
        imgSrc: "/quiz-app/preview-quiz.PNG",
        title: "Quiz App"
    },
    {
        path: "/github-profiles/",
        imgSrc: "/github-profiles/preview-github.PNG",
        title: "Github Profiles App"
    },
    {
        path: "/movie-app/",
        imgSrc: "/movie-app/preview-mov.PNG",
        title: "Movies App"
    },
    {
        path: "/weather-app/",
        imgSrc: "/weather-app/preview-weather.PNG",
        title: "Weather App"
    },
];

loadProjects();

function loadProjects() {
    prjObjects.forEach(obj => {
        const { path, imgSrc, title } = obj;
        const prjEl = document.createElement('div');
        const aEl = document.createElement('a');
        const imgEl = document.createElement('img');
        const titleEl = document.createElement('div');

        aEl.href = path;
        aEl.target = "_blank";
        imgEl.src = imgSrc;
        imgEl.alt = title
        titleEl.innerHTML = title;

        prjEl.classList.add('prj');
        aEl.appendChild(imgEl);
        aEl.appendChild(titleEl);
        prjEl.appendChild(aEl);
        prjListEl.appendChild(prjEl);
    })
}

btn.addEventListener( 'click', () => {
    headerEl.classList.toggle('hidden');
    headerEl.classList.toggle('scroll-up');
    prjListEl.classList.toggle('scroll-right');
    prjListEl.classList.toggle('hidden');
    if (headerEl.classList.contains('hidden')) {
        btn.innerHTML = "<< HOME";
    } else {
        btn.innerHTML = "MY PROJECTS >>";
    }
} );