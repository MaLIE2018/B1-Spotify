import * as Module from '../modules/navigation.js'
let searchResults = [];
const songlist = document.querySelector('.songlist')
const albumRow = document.querySelector('.album-row')
const searchField = document.querySelector('.searchField')

const retrieveData = (input) => {
    if (input.value.length > 4) {
        fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${input.value}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "3e0ee43bffmsh46314b57fd57dc1p16035fjsn04092eace9f0",
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
                }
            })
            .then(response => response.json())
            .then((data) => {
                searchResults = data.data
                createList(searchResults)
                createAlbums(searchResults)
            })
            .catch(err => console.log(err.message))
    }
}


const createAlbums = (searchResults) => {
    albumRow.innerHTML = ''
    let uniqueAlbum = []
    searchResults.forEach((song) => {
        let i = uniqueAlbum.findIndex((x) => {
            return x.id === song.album.id
        })
        if (i <= -1) {
            uniqueAlbum.push({ id: song.album.id, cover: song.album.cover_medium, title: song.album.title })
        }
    })
    uniqueAlbum.forEach((album) => {
        albumRow.innerHTML +=
            `<div class="col-12 col-sm-6 col-md-4">
                <a href="#" id="${album.id}" >
                    <div id="img-card" class="card">
                        <img class="img-fluid cardHoover" src="${album.cover}" alt="" />
                        <span id="card-text" class="card-body d-flex justify-content-center pt-2">${album.title}</span>
                        <button class="artist-album-card-button songlist-playbutton btn rounded-circle" onclick=""><ion-icon class="text-white"name="play"></ion-icon></button>
                    </div>
                </a>
            </div>`
    });
    [...albumRow.children].forEach((el) => el.querySelector("a").onclick = () => {
        return Module.getToAlbumpage(el.querySelector("a").id, el.querySelector('.cardHoover').src, el.querySelector('.card-body').innerHTML);
    })
}

const createList = (searchResults) => {
    songlist.innerHTML = ''
    console.log(searchResults);
    searchResults.forEach((song) => {
        songlist.innerHTML +=
            `<li class="list-group-item bg-transparent">
                    <div class="row">
                        <div class="col">
                            <button class="btn btn-outline-light rounded-circle songlist-playbutton" ]
                            onclick="playMusic(event,'${song.preview}')">
                            <ion-icon class="songlist-stopbutton d-none" name="pause-outline"></ion-icon>
                            <ion-icon class="songlist-playbutton" name="play-outline"></ion-icon>
                            </button>
                            <span class="mx-2 songlist-songduration">${(parseFloat(song.duration)/60).toFixed(2)}</span>
                            <img class="mx-2 songlist-albumcover" src="${song.album.cover_small}" alt="">
                            <a href="" id="${song.artist.id}"><span class="mx-2 songlist-artist-name" }'>${song.artist.name}</span></a>
                            <span class="mx-2 songlist-songtitle">${song.title}</span>
                        </div>
                    </div>
                </li>`
    })


}

window.onload = () => {
    searchField.onkeyup = function() { retrieveData(this) }
    console.log("Searchpageload");
    // retrieveData()
}