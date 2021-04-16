const songlist = document.querySelector('.songlist')
const albumRow = document.querySelector('.album-row')

/*------------------------------------*\
                #Search page
\*------------------------------------*/

let searchResults = [];

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

const createList = (searchResults) => {
    songlist.innerHTML = ''
    console.log(searchResults);
    searchResults.forEach((song, index) => {
        // if (index === 5) { break }
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
                            <span class="mx-2 songlist-artist-name">${song.artist.name}</span>
                            <span class="mx-2 songlist-songtitle">${song.title}</span>
                        </div>
                    </div>
                </li>`
    })


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
                <a href="#" id="${album.id}" onclick="getToAlbumpage(this.id, this.querySelector('.cardHoover').src, this.querySelector('.card-body').innerHTML)">
                    <div id="img-card" class="card">
                        <img class="img-fluid cardHoover" src="${album.cover}" alt="" />
                        <span id="card-text" class="card-body d-flex justify-content-center pt-2">${album.title}</span>
                        <button class="artist-album-card-button songlist-playbutton btn rounded-circle" onclick=""><ion-icon class="text-white"name="play"></ion-icon></button>
                    </div>
                </a>
            </div>`
    })
}

const getToAlbumpage = (id, img, albumname) => {
    sessionStorage.setItem("id", id)
    sessionStorage.setItem("albumname", albumname)
    sessionStorage.setItem("img", img)
    window.location.href = "albumpage.html"
        // console.log(document.querySelector('.search-section'));
        // document.querySelector('.search-section').classList.add('d-none')
        // document.querySelector('.album-section').classList.remove('d-none')
}

const playMusic = (event, url) => {
    if (event.currentTarget.children[0].classList.contains("d-none")) { //stopbutton [0]
        if (event.currentTarget.children[1].classList.contains("played")) {
            audio.play()
        } else {
            audio = new Audio(url)
            audio.play()
        }
        event.currentTarget.children[1].classList.add("d-none")
        event.currentTarget.children[1].classList.add("played") // playbutton[]
        event.currentTarget.children[0].classList.remove("d-none")
    } else {
        audio.pause()
        event.currentTarget.children[1].classList.remove("d-none")
        event.currentTarget.children[0].classList.add("d-none")
    }
    // 
}

const showSearch = (event) => {
    document.querySelector('.search-section').classList.remove('d-none')
    document.querySelector('.home-section').classList.add('d-none')
        // document.querySelector('.sidebar-footer-with-buttons').classList.remove('d-none')
        // document.querySelector('.sidebar-footer').classList.add('d-none')
        // document.querySelector('.album-section').classList.add('d-none')
        // location.reload(true)
        // localStorage.clear()
}

const showHomepage = () => {
    document.querySelector('.home-section').classList.remove('d-none')
    document.querySelector('.artist-section').classList.add('d-none')
    document.querySelector('.sidebar-footer-with-buttons').classList.remove('d-none')
    document.querySelector('.sidebar-footer').classList.add('d-none')
    document.querySelector('.album-section').classList.add('d-none')
    location.reload(true)
    localStorage.clear()
}

const showFavoritArtistpage = (event) => {
    event.preventDefault()
    localStorage.setItem("LOGGED", "aosdifuaosdifuasodfi")
    window.open('index.html', '_self')
}

window.onload = function() {
    const isLogged = Boolean(localStorage.getItem("LOGGED"));
    if (isLogged) {
        document.querySelector('.artist-section').classList.remove('d-none')
        document.querySelectorAll('.sidebar-footer')[1].classList.remove('d-none')
        document.querySelectorAll('.sidebar-footer-with-buttons')[1].classList.add('d-none')
        document.querySelector('.home-section').classList.add('d-none')
    } else {
        document.querySelectorAll('.sidebar-footer')[1].classList.add('d-none')
        document.querySelectorAll('.sidebar-footer-with-buttons')[1].classList.remove('d-none')
    }
}

const showAlbumpage = () => {

    document.querySelector('.artist-section').classList.add('d-none')
    document.querySelector('.album-section').classList.remove('d-none')

}