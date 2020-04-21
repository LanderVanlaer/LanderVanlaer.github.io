window.onload = async () => {
    const ul = document.querySelector("section#htmlRepositories ul");
    try {
        const response = await fetch("/HTML_repos.json");
        if (!(response.status >= 200 && response.status < 400)) throw new Error(`Got response ${response.status} instead of 200`);
        const data = await response.json();
        data.forEach(repo => {
            ul.innerHTML += `<li><a href="${repo.link}">${repo.data.name}</a></li>`;
        });
    } catch (error) {
        console.error(error);
    }
}