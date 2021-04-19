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