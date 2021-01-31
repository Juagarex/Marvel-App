const marvel = {

    render: () => {
        const urlAPI = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=edba1463ca12ded9c1c3c25df6f6aaa3&hash=7b8f8f7778ac9f2ab1fad65e1d7ae1d1';
        const container = document.querySelector('#marvel-comics');
        let contentHTML = '';

        fetch(urlAPI)
            .then(res => res.json())
            .then((json) => {
                for (const hero of json.data.results) {
                    let urlHero = hero.urls[0].url;
                    contentHTML += `
              <div class="col-md-4">
                  <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                  </a>
                  <h3 class="title">${hero.title}</h3>
              </div>`;
                }
                container.innerHTML = contentHTML;
            })
    }
};
marvel.render();