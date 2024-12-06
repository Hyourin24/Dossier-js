
import { userSection3 } from "./scriptMelissa.js"

let monBouton = document.querySelector(".monBouton");
monBouton.addEventListener("click", function () {
    userSection3.forEach(post => {
        userSection3.remove();
    });


});
