const formRond = document.querySelectorAll(".rond")
const ligne = document.querySelectorAll(".line")
const formCarre = document.querySelectorAll(".carre")
const formLosange = document.querySelector (".losange")
const colonne = document.querySelectorAll(".col")
const formPlein = document.querySelector("#plein")
const formVide = document.querySelector("#vide")


formPlein.addEventListener("click", function(){
    formPlein.classList.add("plein")
})

formVide.addEventListener("click", function(){
    formVide.classList.remove("plein")
})


for (i = 0; i < formRond.length; i++){

    formRond[i].addEventListener("click", function(){
        this.classList.toggle("plein")
    })

}

/* je récupère son 1er parent avec parentNode (donc la div avec la class "line") 
 et je récupère tous ses enfants avec children (qui renvoie une liste d'élement, 
 javais utilisé childNodes mais ca marche pas tout à fait pareil).
Enfin pour chaque élément je toggle la classe plein comme t'as fait au dessus*/
 
function lignepleine(elem) {
	for (let item of elem.parentNode.children) {
		item.classList.toggle("plein");
	};
}

for (i = 0; i < formCarre.length; i++){

formCarre[i].addEventListener("click", function(){
    lignepleine(this);
});

}

formLosange.addEventListener("click", function(){
    lignepleine(this)

    for (i = 0; i < colonne.length; i++) {
        colonne[i].classList.toggle("plein");
    }
})
