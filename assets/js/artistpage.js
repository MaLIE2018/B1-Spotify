import * as HelperModule from '../modules/helper.js'
import * as FetchModule from '../modules/retrievedata.js'

async function createArtistpage() {
    let id = sessionStorage.getItem('artistid')
    let url = `https://deezerdevs-deezer.p.rapidapi.com/artist/${id}/top?limit=50`
    const data = await FetchModule.retrieveData(url)
    const artistdata = await FetchModule.retrieveData(`https://deezerdevs-deezer.p.rapidapi.com/artist/${id}`)
    fillArtistDetails(artistdata)
    HelperModule.createAlbums(HelperModule.uniqueAlbums(data.data), document.querySelector('.artist-albums .row'))
}

const fillArtistDetails = (artistdata) => {
    // document.querySelector(".artist-header:before").style.backgroundImage = url(`${artistdata.picture_xl}`)
    document.querySelector(".artistpage-artist-title").innerHTML = artistdata.name
    document.querySelector('.fancount').innerHTML = artistdata.nb_fan
}

window.onload = () => {
    createArtistpage()
};