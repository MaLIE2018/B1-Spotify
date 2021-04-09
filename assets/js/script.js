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

// const login = () => {
//     localStorage.setItem("LOGGED", "aosdifuaosdifuasodfi")
// }

window.onload = function() {
    const isLogged = Boolean(localStorage.getItem("LOGGED"));
    console.log('isLogged:', isLogged)
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