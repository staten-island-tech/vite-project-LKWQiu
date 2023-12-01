import { GunsArray} from "./AssaultRifles.js";
import {arSetdisplay} from "./main.js";
const DomSelectors ={
    Content: document.getElementById("Content"),
    weaponClassBox: document.getElementById("weapnClassBox"),
    ARButton: document.getElementById("AssaultRiflesButton"),
    PDWButton: document.getElementById("PDWsButton"),
    LMGButton: document. getElementById("LMGsButton"),
    SRButton: document.getElementById("SniperRiflesButton"),
    CButton: document.getElementById("CarbinesButton"),
    DMRButton: document.getElementById("DMRsButton"),
    BRButton: document.getElementById("BattleRiflesButton"),
    SButton: document.getElementById("ShotgunsButton"),
    Theme: document.getElementById("Theme"),
    btns: document.querySelectorAll("button"),
}

DomSelectors.btns.addEventListener("click", () => {
    let filter = DomSelectors.btns.textContent
    console.log("the function doesnt wrok the button does")
    const card = GunsArray.filter((rifle) =>  rifle.weaponClass.includes(filter)).map((rifle) => arSetdisplay(rifle));
    DomSelectors.Content.insertAdjacentHTML("beforeend", card.join(""))
   });


/* DomSelectors.ARButton.addEventListener("click", () =>{
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
DomSelectors.PDWButton.addEventListener("click", () =>{
    console.log("the function broken")
    const PDWs = GunsArray.filter((rifle) =>
    rifle.weaponClass.includes("PDW")
    );
    console.log(PDWs)
    DomSelectors.Content.textContent= ""
    const PDWmap = PDWs.map((rifle) => arSetdisplay(rifle));
    DomSelectors.Content.insertAdjacentHTML(
        "beforeend",
        PDWmap.join("")
    );
});
DomSelectors.LMGButton.addEventListener("click", () =>{
    console.log("the function broken")
    const LMGs = GunsArray.filter((rifle) =>
    rifle.weaponClass.includes("LMG")
    );
    console.log(LMGs)
    DomSelectors.Content.textContent= ""
    const LMGmap = LMGs.map((rifle) => arSetdisplay(rifle));
    DomSelectors.Content.insertAdjacentHTML(
        "beforeend",
        LMGmap.join("")
    );
});
DomSelectors.SRButton.addEventListener("click", () =>{
    console.log("the function broken")
    const SRs = GunsArray.filter((rifle) =>
    rifle.weaponClass.includes("Sniper Rifle")
    );
    console.log(SRs)
    DomSelectors.Content.textContent= ""
    const SRmap = SRs.map((rifle) => arSetdisplay(rifle));
    DomSelectors.Content.insertAdjacentHTML(
        "beforeend",
        SRmap.join("")
    );
});
DomSelectors.CButton.addEventListener("click", () =>{
    console.log("the function broken")
    const Cs = GunsArray.filter((rifle) =>
    rifle.weaponClass.includes("Carbine")
    );
    console.log(Cs)
    DomSelectors.Content.textContent= ""
    const Cmap = Cs.map((rifle) => arSetdisplay(rifle));
    DomSelectors.Content.insertAdjacentHTML(
        "beforeend",
        Cmap.join("")
    );
});
DomSelectors.DMRButton.addEventListener("click", () =>{
    console.log("the function broken")
    const DMRs = GunsArray.filter((rifle) =>
    rifle.weaponClass.includes("DMR")
    );
    console.log(DMRs)
    DomSelectors.Content.textContent= ""
    const DMRmap = DMRs.map((rifle) => arSetdisplay(rifle));
    DomSelectors.Content.insertAdjacentHTML(
        "beforeend",
        DMRmap.join("")
    );
});
DomSelectors.BRButton.addEventListener("click", () =>{
    console.log("the function broken")
    const BRs = GunsArray.filter((rifle) =>
    rifle.weaponClass.includes("Battle Rifle")
    );
    console.log(BRs)
    DomSelectors.Content.textContent= ""
    const BRmap = BRs.map((rifle) => arSetdisplay(rifle));
    DomSelectors.Content.insertAdjacentHTML(
        "beforeend",
        BRmap.join("")
    );
});
DomSelectors.SButton.addEventListener("click", () =>{
    console.log("the function broken")
    const Ss = GunsArray.filter((rifle) =>
    rifle.weaponClass.includes("Shotgun")
    );
    console.log(Ss)
    DomSelectors.Content.textContent= ""
    const Smap = Ss.map((rifle) => arSetdisplay(rifle));
    DomSelectors.Content.insertAdjacentHTML(
        "beforeend",
        Smap.join("")
    );
}); */

DomSelectors.Theme.addEventListener("click", function () {
    if (document.body.classList.contains("light")) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  });