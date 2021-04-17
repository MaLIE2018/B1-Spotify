export const getToAlbumpage = (id, img, albumname) => {
    sessionStorage.setItem("id", id)
    sessionStorage.setItem("albumname", albumname)
    sessionStorage.setItem("img", img)
    console.log("test", document.querySelectorAll('a'));
    window.location.href = "albumpage.html"
}

export const showSearch = () => {
    document.querySelector('.search-section').classList.remove('d-none')
    document.querySelector('.home-section').classList.add('d-none')
    document.querySelector('.album-section').classList.add('d-none')
    document.querySelector('.artist-section').classList.add('d-none')
        // document.querySelector('.sidebar-footer-with-buttons').classList.remove('d-none')
        // document.querySelector('.sidebar-footer').classList.add('d-none')
        // document.querySelector('.album-section').classList.add('d-none')
        // location.reload(true)
        // localStorage.clear()
}

export const showHomepage = () => {
    document.querySelector('.search-section').classList.toggle('d-none')
    document.querySelector('.home-section').classList.remove('d-none')
    document.querySelector('.sidebar-footer-with-buttons').classList.remove('d-none')
    document.querySelector('.artist-section').classList.toggle('d-none')
    document.querySelector('.sidebar-footer').classList.toggle('d-none')
    document.querySelector('.album-section').classList.toggle('d-none')
        // location.reload(true)
        // localStorage.clear()
}

export const showFavoritArtistpage = (event) => {
    //event.preventDefault()
    localStorage.setItem("LOGGED", "aosdifuaosdifuasodfi")
    window.open('index.html', '_self')
    console.log("test");
}