window.onload = async () => {
    //htmlRepositories
    loadJson(document.querySelector("section#htmlRepositories ul"), "/HTML_repos.json");
    //gitRepos
    loadJson(document.querySelector("section#gitRepositories ul"), "/git_repos.json");
    //gitRepoHtmlJsCss
    loadJson(document.querySelector("section#gitRepoHtmlJsCss ul"), "/html_js_css.json");
}

const loadJson = async (ul, fetchLink) => {
    try {
        const response = await fetch(fetchLink);
        if (!(response.status >= 200 && response.status < 400)) throw new Error(`Got response ${response.status} instead of 200`);
        const data = await response.json();
        data.forEach(repo => {
            ul.innerHTML += `<li><a href="${repo.link}">${repo.data.name}</a></li>`;
        });
    } catch (error) {
        console.error(error);
    }
}