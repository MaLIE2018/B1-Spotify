import * as HelperModule from '../modules/helper.js'
import * as FetchModule from '../modules/retrievedata.js'

async function createHomepage() {
    let url = 'https://deezerdevs-deezer.p.rapidapi.com/artist/412/top?limit=50'
    const data = await FetchModule.retrieveData(url)
    HelperModule.createAlbums(HelperModule.uniqueAlbums(data.data), document.querySelector('.album-row'))
}

window.onload = () => {
    createHomepage()
};