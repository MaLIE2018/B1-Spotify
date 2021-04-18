import * as Module from '../modules/navigation.js';

window.onload = () => {
    document.querySelector(".login-submitbutton").onclick = () => Module.showHomepage()
    console.log("indexload");
}