/* Créez une fonction addition() qui cette fois ci retourne 
directement l'addition du nombre + 10 (si je lui donne 5 
elle doit me renvoyer 15). */

function addition(number){
    return number + 10
}
console.log(addition(5))

/*Créez une deuxieme fonction qui multiplie un nombre qu'on 
lui donne par 4 et qui renvoie le résultat.*/

function multi(number){
    return number * 4
}
console.log(multi(5))


/* Multiplication de 2 par 4 et ensuite on ajoute 10*/
console.log(addition(multi(2)))