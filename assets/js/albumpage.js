import * as NavigationModule from '../modules/navigation.js'
import * as HelperModule from '../modules/helper.js'
import * as FetchModule from '../modules/retrievedata.js'

async function createArtistpage() {
    let id = sessionStorage.getItem('id')
    let url = `https://deezerdevs-deezer.p.rapidapi.com/album/${id}`
    const data = await FetchModule.retrieveData(url)
    HelperModule.createTracklist(data.tracks.data, document.querySelector(".albumpage-songlist"))
    fillArtist(data)
}

const fillArtist = (album) => {
    let tracks = album.tracks.data
    document.querySelector(".album-title").innerHTML = sessionStorage.getItem('albumname')
    document.querySelector(".artist").innerHTML = tracks[0].artist.name
    document.querySelector(".artist").parentElement.id = tracks[0].artist.id
    document.querySelector(".trackcount").innerHTML = album.nb_tracks
    document.querySelector(".albumyear").innerHTML = album.release_date.split("-")[0]
    document.querySelector(".album-img").src = sessionStorage.getItem('img')
}


window.onload = () => {
    createArtistpage()
};