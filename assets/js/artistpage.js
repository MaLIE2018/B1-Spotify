const createAlbums = (jsonobj) => {
    let dataArray = jsonobj.data;
    let albums = []
    dataArray.forEach(function(album) {
        var i = albums.findIndex(x => x.id === album.album.id)
        if (i <= -1) {
            albums.push({ id: album.album.id, cover: album.album.cover_big, title: album.album.title, name: album.artist.name, artistid: album.artist.id })
        }
    })
    const myDiv = document.getElementById('.artist-albums .row');
    myDiv.innerHTML = albums.map((album) => {
        return `<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 d-flex mt-3">
        <div class="artist-album-card card align-self-stretch">
        <a href="" id='${album.id}' class="${album.artist.id}">
            <div class="artist-album-img-container">
                <img src="${album.cover}" class="card-img-top p-3" alt="...">
            </div>
            <div class="card-body d-flex justify-content-center justify-self-end">
                <button class="artist-album-card-button btn rounded-circle"><ion-icon class="text-white"name="play"></ion-icon></button>
                <p class="card-text d-flex flex-column">
                    <span class="artist-album-card-albumTitle text-center">${album.title}</span>
                    <a href="" id="${album.artistid}"><span class="artist-album-card-subTitle text-center">${album.artist.name}</span></a>
                </p>
            </div>
            </div>
        </a>
    </div>`
    }).join('');
    [...myDiv.children].forEach((el) => el.querySelector("a").onclick = () =>
        Module.getToAlbumpage(el.querySelector("a").id, el.closest('.card').querySelector('.cardHoover').src, el.closest('.card').querySelector('#card-text').innerHTML))
}

window.onload = () => {
    fetch(
            'https://deezerdevs-deezer.p.rapidapi.com/artist/412/top?limit=50', {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'e88938dcfcmsh276f73df3fb1e5ep1a09e1jsn71c6fe23b716',
                    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
                },
            }
        )
        .then((resp) => resp.json())
        .then((jsonobj) => {
            createAlbums(jsonobj)
        })
        .catch((err) => console.log(err.message));
    console.log("homepageload");
};