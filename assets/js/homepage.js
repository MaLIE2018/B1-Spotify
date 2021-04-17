import * as Module from '../modules/navigation.js'


const createAlbums = (jsonobj) => {
    let dataArray = jsonobj.data;
    let albums = []
    dataArray.forEach(function(album) {
        var i = albums.findIndex(x => x.id === album.album.id)
        if (i <= -1) {
            albums.push({ id: album.album.id, cover: album.album.cover_big, title: album.album.title, name: album.artist.name, artistid: album.artist.id })
        }
    })
    const myDiv = document.getElementById('albums');
    myDiv.innerHTML = albums.map((album) => {
        return `<div
                  id="img-card"
                  class="card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                  <a href="#" id=${album.id}>
                  <img
                    class="img-fluid cardHoover"
                    src="${album.cover}"
                    alt=""/>
                    <div class="card-body">
                        <span id="card-text" class="d-flex justify-content-center pt-2">
                        <p>${album.title}</p>
                        <span><a class="artistlink" href="" id="${album.artistid}">${album.name}</a></span>
                    </span>
                  </div>
                  
                  <button class="artist-album-card-button btn rounded-circle">
                    <ion-icon class="text-white" name="play"></ion-icon>
                  </button>
                </a></div>`
    }).join('');
    [...myDiv.children].forEach((el) => el.querySelector("a").onclick = () =>
        Module.getToAlbumpage(el.querySelector("a").id,
            el.closest('.card').querySelector('.cardHoover').src,
            el.closest('.card').querySelector('#card-text p').innerHTML,
            el.closest('.card').querySelector('.artistlink').id)
    )
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