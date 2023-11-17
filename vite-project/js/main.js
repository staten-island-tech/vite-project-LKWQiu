import "../css/style.css";
import { assaultRiflesArray } from "../js/AssaultRifles.js";

const DomSelectors = {
  Content: document.getElementById("Content"),
  AssaultRifles: document.getElementById("AssaultRiflesButton"),
}

const printAssaultRifles = 
console.log("Button clicked!");
assaultRiflesArray.forEach(printAssaultRifles => {
  console.log(printAssaultRifles)
});
function arSetdisplay(){
  DomSelectors.Content.innerHTML ="";
  assaultRiflesArray.forEach((rifle) => {
    const arSet =` 
    <div class="ARset">
      <h3>${rifle.name}</h3>
      <p>Rank Requirement: ${rifle.rankRequirement}</p>
      <p>Damage: ${rifle.damage}</p>
      <p>Range: ${rifle.range}</p>
      <p>Weapon Type: ${rifle.weaponType}</p>
      <p>Weapon Class: ${rifle.weaponClass}</p>
      <p>Firing Modes: ${rifle.firingModes.join(", ")}</p>
      <p>Magazine Size: ${rifle.magazineSize}</p>
    </div>
  `;
  DomSelectors.Content.insertAdjacentHTML("beforeend", arSet)
  });
}
const AssaultRiflesClick = getElementById("AssaultRiflesButton")
AssaultRiflesClick.addEventListener("click", arSetdisplay);