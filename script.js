/* Custom Method to get user data nad user repos*/

const API_URL = 'https://api.github.com/users/';
const main = document.getElementById('main');
const search = document.getElementById('search');
const form = document.getElementById('form');



async function getUser(username){
    const res = await axios(API_URL + username);
    const user = res.data;
    console.log(user);
    main.innerHTML = `
        <div class="card">
        <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
        </div>
        <div class="user-info">
        <h2>${user.name}</h2>
        ${user.bio}
        <ul>
            <li>${user.followers}<strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos"></div>
        </div>
    </div>
    `
    
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let userNameInput = search.value;
    getUser(userNameInput);
    getRepos(userNameInput);
    
});



async function getRepos(username){
    const res = await axios(API_URL + username + '/repos');
    const userRepos = res.data;
    console.log(userRepos);
    const reposEl = document.getElementById('repos'); 
    for(let i = 0; i<= 2; i++ ){
        let repoInd = document.createElement('div');
        repoInd.classList.add('repo');
        repoInd.innerText = userRepos[i].name;
        reposEl.appendChild(repoInd);
    }
        
    
    
     
    
}


