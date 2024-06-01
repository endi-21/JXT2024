var username = ""
var cards = document.querySelector('.cards')

function getUsername(element){
    username = element.value
}

async function search(){
    var response = await fetch('https://api.github.com/users/' + username)
    response = await response.json()
    cards.innerHTML = resultsDiv(response)
}

function resultsDiv(user){
    if(!user.message){
        return `<div class="card">
        <img src="${user.avatar_url}" alt="${user.login}">
        <h1>Username: ${user.login}</h1>
        <p>Public repositories: ${user.public_repos}</p>
        <p>Followers: ${user.followers}</p>
        </div>`
    }    
    else return `<h3>User not found</h3>`
}