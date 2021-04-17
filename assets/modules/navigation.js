export const getToAlbumpage = (id, img, albumname, artistid) => {
    sessionStorage.setItem("id", id)
    sessionStorage.setItem("albumname", albumname)
    sessionStorage.setItem("img", img)
    sessionStorage.setItem("artistid", artistid)
    parent.document.querySelector('.album-section').classList.remove('d-none')
    parent.document.querySelector('.search-section').classList.add('d-none')
    parent.document.querySelector('.home-section').classList.add('d-none')
    parent.document.querySelector('.artist-section').classList.add('d-none')
    parent.document.getElementById('albumpage').contentDocument.location.reload(true);
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
    document.querySelector('.search-section').classList.add('d-none')
    document.querySelector('.home-section').classList.remove('d-none')
    document.querySelector('.sidebar-footer-with-buttons').classList.remove('d-none')
    document.querySelector('.artist-section').classList.add('d-none')
    document.querySelector('.sidebar-footer').classList.toggle('d-none')
    document.querySelector('.album-section').classList.add('d-none')
        // location.reload(true)
        // localStorage.clear()
}

export const showArtistpage = (artistid, img, artistname) => {
    sessionStorage.setItem("artistid", artistid)
    sessionStorage.setItem("artistname", artistname)
    sessionStorage.setItem("img", img)
    parent.document.querySelector('.search-section').classList.add('d-none')
    parent.document.querySelector('.home-section').classList.add('d-none')
    parent.document.querySelector('.album-section').classList.add('d-none')
    parent.document.querySelector('.artist-section').classList.remove('d-none')
    parent.document.getElementById('artistpage').contentDocument.location.reload(true);
    console.log("test");
}