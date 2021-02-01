const marvelSeries = {

    render: () => {
        const urlAPI = 'http://gateway.marvel.com/v1/public/series?ts=1&apikey=edba1463ca12ded9c1c3c25df6f6aaa3&hash=7b8f8f7778ac9f2ab1fad65e1d7ae1d1&limit=100';
        const container = document.querySelector('#marvel-series');
        let contentHTML = '';

        fetch(urlAPI)
            .then(res => res.json())
            .then((json) => {
                for (const serie of json.data.results) {
                    let urlHero = serie.urls[0].url;
                    contentHTML += `
              <div class="col-md-3 p-3 card-m">
                  <a href="${urlHero}" target="_blank">
                    <img src="${serie.thumbnail.path}.${serie.thumbnail.extension}" alt="${serie.name}" class="img-thumbnail">
                  </a>
                  <button type="button" class="btn btn-primary" id="btn-description">
        ${serie.title}
    </button>
              </div>`;
                }
                container.innerHTML = contentHTML;
            })
    }
};
marvelSeries.render();