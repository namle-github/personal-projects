const APIURL = 'https://api.github.com/users/';


const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getUser('namle-github');

async function getUser(userName) {
    const resp = await fetch(APIURL + userName);
    const respData = await resp.json();

    createUserCard(respData);
    getRepos(userName);
}

async function getRepos(userName) {
    const resp = await fetch(APIURL + userName + "/repos");
    const respData = await resp.json();

    addReposToCard(respData);
}

function createUserCard(user) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardHTML = `
        <div class="card">
            <div class="avatar">
                <img src="${user.avatar_url}" alt ="${user.name}" />
            </div>
            <div class="profile">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul>
                    <li>
                        <i class="fas fa-user" title="Followers"></i>
                        <span>${user.followers}</span>
                    </li>
                    <li>
                        <i class="fas fa-heart" title="Following"></i>
                        <span>${user.following}</span>
                    </li>
                    <li>
                        <i class="fas fa-database" title="Public repos"></i>
                        <span>${user.public_repos}</span>
                    </li>
                </ul>
                
                <div class="repos" id="repos"></div>
            </div>
        </div>
    `;

    main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');

    repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 10).forEach(repo => {
        const repoEl = document.createElement('a');

        repoEl.classList.add('repo');

        repoEl.href = repo.html_url;
        repoEl.target = "_blank";
        repoEl.innerText = repo.name;

        reposEl.appendChild(repoEl);
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;

    if (user) {
        getUser(user);

        search.value = '';
    }
})
