//archivo que hac el apetiicon de data y trae el la coleccion de comics
const marvel = {

    render: () => {
        const urlAPI = //Api autenticada con md5
            'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=edba1463ca12ded9c1c3c25df6f6aaa3&hash=7b8f8f7778ac9f2ab1fad65e1d7ae1d1&limit=80';
        const container = document.querySelector('#marvel-comics');
        let contentHTML = '';

        fetch(urlAPI)
            .then(res => res.json())//traigo un json, asi qu edebo manejarlo
            .then((json) => { // esta promesa recorrera el data y result y creara los cards
                for (const comic of json.data.results) {
                    let urlHero = comic.urls[0].url; //alt qu elleva a la pagin aoriginal del comic
                    contentHTML += `
<div class="col-md-3 p-3  card-m">
    <a href="${urlHero}" target="_blank"> 
        <!-- como el API trae la direccion y el formato, debo unirlos -->
        <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" alt="${comic.name}" class="img-thumbnail ">
    </a>
    <button type="button" class="btn btn-primary" id="btn-description">
        ${comic.title}
        <!-- seccion del boton al modal -->
    </button>
</div>



`;
                }
                container.innerHTML = contentHTML;
            })
    }
};
marvel.render();

