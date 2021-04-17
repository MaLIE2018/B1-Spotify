const createArtistAblums = (album) => {
    let tracks = album.tracks.data
    const myDiv = document.querySelector('.special');
    myDiv.innerHTML = tracks
        .map(
            (track) => {
                document.querySelector(".album-title").innerHTML = sessionStorage.getItem('albumname')
                document.querySelector(".artist").innerHTML = track.artist.name
                document.querySelector(".artist").parentElement.id = track.artist.id
                document.querySelector(".album-img").src = sessionStorage.getItem('img')
                return `<div class="album-songrow row flex-nowrap mx-1">
                                <div
                                    class="col-1 text-white d-inline-block d-md-flex justify-content-start justify-content-md-end"
                                >
                                    <ion-icon
                                    class="pt-1 album-note"
                                    name="musical-note-outline"
                                    ></ion-icon>
                                </div>
                                <div class="col-9 text-white d-flex flex-column">
                                    <span class="album-songname">${track.title}</span>
                                    <a href="#" id="${track.artist.id}"><span class="album-artist">${track.artist.name}</span></a>
                                </div>
                                <div class="col-2">
                                    <span class="album-songname">${track.duration}</span>
                                </div>
                                </div>`
            }
        )
        .join('');
    [...myDiv.children].forEach((el) => el.querySelector("a").onclick = () =>
        Module.getToArtistPage(el.querySelector("a").id, el.closest('.card').querySelector('.cardHoover').src, el.closest('.card').querySelector('#card-text').innerHTML))

}

const retrieveData = (id) => {
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/album/${id}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "3e0ee43bffmsh46314b57fd57dc1p16035fjsn04092eace9f0",
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
            }
        })
        .then((resp) => resp.json())
        .then((album) => {
            createArtistAlbums(album)
        })
        .catch(err => { console.log(err); })
}


window.onload = () => {
    let id = sessionStorage.getItem('id');
    retrieveData(id)
    console.log("Albumpageload");
};