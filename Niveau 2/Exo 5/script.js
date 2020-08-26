function recup(id){
    return document.getElementById(id)
}

/* Ici on va utiliser "textContent" au lieu de "innerHTML" car
c'est recommandé lorsqu'on insere un texte brut. Cela n'analyse pas 
le contenu passé en HTML, mais l'insère à la place en tant que texte
brut */ 

function eliminer(txt){
    txt.textContent = "Je suis un poisson mort"
}

eliminer(recup("poisson1"))
eliminer(recup("poisson2"))