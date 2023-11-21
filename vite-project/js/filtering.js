import { GunsArray} from "./AssaultRifles.js";
import {arSetdisplay} from "./main.js";
const DomSelectors ={
    Content: document.getElementById("Content"),
    weaponClassBox: document.getElementById("weapnClassBox"),
    ARButton: document.getElementById("AssaultRiflesButton"),
    CButton: document.getElementById("CarbinesButton"),
}

DomSelectors.ARButton.addEventListener("click", () =>{
    console.log("the function broken")
    const ARs = GunsArray.filter((rifle) =>
    rifle.weaponClass.includes("Assault Rifle")
    );
    console.log(ARs)
    DomSelectors.Content.textContent= ""
    const ARmap = ARs.map((rifle) => arSetdisplay(rifle));
    DomSelectors.Content.insertAdjacentHTML(
        "beforeend",
        ARmap.join("")
    );
});