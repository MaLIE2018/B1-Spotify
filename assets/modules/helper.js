import * as NavigationModule from '../modules/navigation.js'
import * as HelperModule from '../modules/helper.js'


let audio = ''

//Get unique albums in a query search and artist fetch
export const uniqueAlbums = (data) => {
    let uniqueAlbums = [];
    data.forEach((song) => {
        let i = uniqueAlbums.findIndex((x) => {
            return x.id === song.album.id
        })
        if (i <= -1) {
            uniqueAlbums.push({ id: song.album.id, cover: song.album.cover_medium, title: song.album.title, name: song.artist.name, artistid: song.artist.id })
        }
    })
    return uniqueAlbums
}

//Return Tracks
export const getTracks = (data) => {
    let tracks = [];
    data.forEach((song) => {
        tracks.push({
            artist: { name: song.artist.name, id: song.artist.id },
            preview: song.preview,
            title: song.title,
            duration: song.duration
        })
    })
    return tracks
}

export const createAlbums = (uniqueAlbums, myDiv) => {
    myDiv.innerHTML = uniqueAlbums.map((album) => {
        return `<div class="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-2 d-flex mt-3">
                  <div class="artist-album-card card align-self-stretch">
                      <a href="" id='${album.id}' class="">
                          <div class="artist-album-img-container">
                              <img src="${album.cover}" class="card-img-top p-3" alt="...">
                          </div>
                          <div class="card-body d-flex justify-content-center justify-self-end">
                              <button class="artist-album-card-button btn rounded-circle"><ion-icon class="text-white"name="play"></ion-icon></button>
                              <p class="card-text d-flex flex-column">
                                  <span class="artist-album-card-albumTitle text-center">${album.title}</span>
                                  <a href="" id="${album.artistid}">
                                      <span class="artist-album-card-subTitle text-center">${album.name}</span>
                                  </a>
                              </p>
                          </div>
                      </a>
                  </div>
                </div>`
    });
    [...myDiv.children].forEach((el) => el.querySelector("a").onclick = () =>
        NavigationModule.getToAlbumpage(el.querySelector("a").id,
            el.querySelector('img').src,
            el.querySelector('.artist-album-card-albumTitle').innerText,
            el.querySelector(".card-text a").id));
    //links artists
    [...myDiv.children].forEach((el) => el.querySelector(".card-text a:not(:first-child)").onclick = () =>
        NavigationModule.showArtistpage(el.querySelector(".card-text a:not(:first-child)").id,
            el.querySelector('.card-img-top').src,
            el.querySelector('.artist-album-card-albumTitle').innerText));
}

export const createTracklist = (albumtracks, myDiv) => {
    myDiv.innerHTML = albumtracks.map((track) => {
        return `<div class="album-songrow row flex-nowrap mx-1 my-1">
                  <div class="col-1 text-white d-inline-block d-md-flex justify-content-start justify-content-md-end">
                      <ion-icon class="pt-1 album-note" name="musical-note-outline"></ion-icon>
                  </div>
                  <div class="col-1 text-white d-inline-block d-md-flex">
                      <button class="btn btn-outline-light rounded-circle songlist-playbutton" id='${track.preview}'>
                              <ion-icon class="songlist-stopbutton d-none" name="pause-outline"></ion-icon>
                              <ion-icon class="songlist-playbutton" name="play-outline"></ion-icon>
                      </button>   
                  </div>
                  <div class="col-9 text-white d-flex flex-column">
                      <span class="album-songname">${track.title}</span>
                      <a href="#" id="${track.artist.id}" class="album-songrow-artistpagelink"><span class="album-artist">${track.artist.name}</span></a>
                  </div>
                  <div class="col-1">
                      <span class="album-songname">${(parseFloat(track.duration)/60).toFixed(2).split(".").join(":")}</span>
                  </div>
              </div>`
    }).join('');
    [...myDiv.children].forEach((songrow) => songrow.querySelector("a").onclick = () => {
        return NavigationModule.getToAlbumpage(songrow.querySelector("a").id, songrow.querySelector('.cardHoover').src, songrow.querySelector('.card-body').innerHTML);
    });
    [...myDiv.children].forEach((songrow) => songrow.querySelector(".songlist-playbutton").addEventListener('click', (e) => {
        return HelperModule.playMusic(e, songrow.querySelector(".songlist-playbutton").id)
    }));
    [...myDiv.children].forEach((songrow) => songrow.querySelector(".album-songrow-artistpagelink").onclick = () =>
        NavigationModule.showArtistpage(songrow.querySelector(".album-songrow-artistpagelink").id))
}


export function playMusic(event, url) {
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