import * as NavigationModule from '../modules/navigation.js'
import * as HelperModule from '../modules/helper.js'
import * as FetchModule from '../modules/retrievedata.js'

const songlist = document.querySelector('.songlist')
const albumRow = document.querySelector('.album-row')
const searchField = document.querySelector('.searchField')

async function createPage(input) {
    let data = ''
    if (input.value.length > 4) {
        let searchurl = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${input.value}`
        data = await FetchModule.retrieveData(searchurl)
    }
    HelperModule.createTracklist(HelperModule.getTracks(data.data), document.querySelector('.search-songlist'))
    HelperModule.createAlbums(HelperModule.uniqueAlbums(data.data), document.querySelector('.album-row'))
}

window.onload = () => {
    searchField.onkeyup = function() { createPage(this) }
    console.log("Searchpageload");
}