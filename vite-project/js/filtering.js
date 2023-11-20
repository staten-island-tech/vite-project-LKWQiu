import { GunsArray } from "./AssaultRifles.js";
import { DomSelectors, arSetdisplay } from "./main.js";
DomSelectors ={
    ARButton: document.getElementById("AssaultRiflesButton"),
    CButton: document.getElementById("CarbinesButton"),
}

ARButton.addEventListener("click", () =>{
    const ARs = GunsArray.filter((rifle) =>
    gun.weaponClass.includes("Assault Rifle")
    );
    console.log(ARs)
    DomSelectors.Content.textContent= ""
    const ARmap = ARs.map((rifle) => arSetdisplay(rifle));
    DomSelectors.Content.insertAdjacentHTML("beforeend", ARmap.join(""));
});