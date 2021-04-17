import * as Module from '../modules/navigation.js';

window.onload = () => {
    document.querySelector(".login-submitbutton").onclick = () => Module.showFavoritArtistpage()
    console.log("indexload");
}