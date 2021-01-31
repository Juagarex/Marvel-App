const marvel = {
    
    render: () => {
        const ulrAPI = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=edba1463ca12ded9c1c3c25df6f6aaa3&hash=7B8F8F7778AC9F5E1D7AE1D12AB1FAD6';
        const container = document.querySelector('');
        let contentHTML = '';

        fetch(ulrAPI)
            .then(res => res.json())
            .then((json) => {
                console.log(json, 'RES.JSON');
            })
    }
}
marvel.render();