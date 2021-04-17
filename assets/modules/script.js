/*------------------------------------*\
                #Search page
\*------------------------------------*/


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