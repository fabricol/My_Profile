document.addEventListener('DOMContentLoaded', function() {
    const nome = document.querySelector('#name');
    const user = document.querySelector('#user');
    const avatar = document.querySelector('#avatar');
    const repositorio = document.querySelector('#repositorios');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const linkPagina = document.querySelector('#linkPagina');

    fetch('https://api.github.com/users/fabricol')
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        nome.innerText = json.name;
        user.innerText = json.login;
        avatar.src = json.avatar_url;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        linkPagina.href = json.html_url;
        repositorio.innerText = json.public_repos;
    })
})