window.onload = () => {
    document.querySelectorAll('section.repos').forEach(sec => {
        if (sec.dataset.json) loadJson(sec.querySelector('ul'), `/${sec.dataset.json}.json`)
    })
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