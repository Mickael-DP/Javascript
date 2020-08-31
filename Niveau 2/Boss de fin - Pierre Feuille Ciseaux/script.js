const PierreBtn = document.querySelector("#pierre")
const FeuilleBtn = document.querySelector("#feuille")
const CiseauxBtn = document.querySelector("#ciseaux")

const resultat = document.querySelector("#result")
const partie = document.querySelector("#partie")

const tab = [PierreBtn, FeuilleBtn, CiseauxBtn]


function jeu(){

    let choixPlayer = this.name;
    console.log(choixPlayer)
    let numaleatoire = Math.floor(Math.random()*tab.length);
    console.log(numaleatoire)
    let choixOrdi = tab[numaleatoire].id;
    console.log(choixOrdi)

    partie.textContent = "l'ordi a choisi: " + choixOrdi + " et le joueur a choisi " + choixPlayer;

    if ((choixPlayer == "feuille" && choixOrdi== "pierre")||(choixPlayer == "ciseaux" &&
        choixOrdi == "feuille" )||(choixPlayer == "pierre" && choixOrdi == "ciseaux")){
        resultat.textContent = "Vous avez gagné ! :)"
    } else if (choixPlayer == choixOrdi) {
        resultat.textContent = "Vous êtes à égalité ! :/ "
    } else {
        resultat.textContent = "Vous avez perdu ! :("
    }

}

PierreBtn.addEventListener("click", jeu);
FeuilleBtn.addEventListener("click", jeu);
CiseauxBtn.addEventListener("click", jeu);



