import "../css/style.css";
import { GunsArray } from "../js/AssaultRifles.js";

const printAssaultRifles = 
GunsArray.forEach(printAssaultRifles => {
  console.log(printAssaultRifles)
});
console.log(printAssaultRifles)

function arSetdisplay(rifle){
    const arSet =` 
    <div class="ARset">
      <img src="imgs/${rifle.image}.webp" alt="Broken">
      <h3>${rifle.name}</h3>
      <p>Rank Requirement: ${rifle.rankRequirement}</p>
      <p>Damage: ${rifle.damage}</p>
      <p>Range: ${rifle.range}</p>
      <p>Weapon Type: ${rifle.weaponType}</p>
      <p>Weapon Class: ${rifle.weaponClass}</p>
      <p>Firing Modes: ${rifle.firingModes.join(", ")}</p>
      <p>Magazine Size: ${rifle.magazineSize}</p>
      <p>Credit Cost: ${rifle.credits}</p>
    </div>
  `;
  document.getElementById("Content").insertAdjacentHTML("beforeend", arSet);
  };

  GunsArray.forEach((rifle) => arSetdisplay(rifle));

  export{arSetdisplay};


