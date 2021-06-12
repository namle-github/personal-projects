const mainEl = document.getElementById('main');
const headerEl = document.getElementById('header');
const btn = document.getElementById('btn');
const prjListEl = document.getElementById('prj-list');

btn.addEventListener( 'click', () => {
    headerEl.classList.toggle('hidden');
    headerEl.classList.toggle('scroll-up');
    prjListEl.classList.toggle('scroll-down');
    prjListEl.classList.toggle('hidden');
    if (headerEl.classList.contains('hidden')) {
        btn.innerHTML = "<< HOME";
    } else {
        btn.innerHTML = "MY PROJECTS >>";
    }
} );