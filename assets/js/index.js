import * as Module from '../modules/navigation.js'


window.onload = () => {
    [...document.querySelectorAll(".navbar-search")].forEach((el) => el.onclick = () => Module.showSearch());
    [...document.querySelectorAll(".navbar-home")].forEach((el) => el.onclick = () => Module.showHomepage())
}