let PSoupe = document.querySelectorAll (".soupe p")
console.log(PSoupe)
let BtnBoire = document.querySelector("#boire")
console.log(BtnBoire)

let PFauteuil = document.querySelectorAll(".fauteuil p")
console.log(PFauteuil)
let BtnReposer = document.querySelector("#reposer")
console.log(BtnReposer)

let PLit = document.querySelectorAll(".lit p")
console.log(PLit)
let BtnDormir = document.querySelector("#dormir")
console.log(BtnDormir)





BtnBoire.addEventListener("click", function(){
    PSoupe.forEach(function(txt){
        txt.textContent = "Bol de soupe vide"
    })
})

BtnReposer.addEventListener("click", function(){
    PFauteuil.forEach(function(txt){
        txt.textContent = "fauteuil usé"
    })
})

BtnDormir.addEventListener("click", function(){
    PLit.forEach(function(txt){
        txt.textContent = "lit pas fait"
    })
})




// Ceci est une manière differente de faire les deux derniere 
// action demander

// BtnBoire.onclick = function(){                   
//     PSoupe[0].innerHTML = "Bol vide"
//     PSoupe[1].innerHTML = "Bol vide"
//     PSoupe[1].innerHTML = "Bol vide"
// }