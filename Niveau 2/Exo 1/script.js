//Les variables
    //nombre

    let nombre = 34 
    console.log(nombre);

    //tableau

    let tab = [2, 5, 6, 7, 9]
    console.log(tab);
    

    //chaine de caracteres

    let chaine = "ceci est une chaine de caracteres"
    console.log(chaine);

//Conditions

    //if, else if ,else
    if (nombre >= 50) {
        console.log("supermoitmoit")
    } else if (nombre <= 40) {
        console.log("peux mieux faire")
    } else {
        console.log("Je ne connais pas le nombre d'éléments du tableau")
    }

    //switch
    
    switch (tab.length) {
        case 10:
            console.log ("il y a 10 éléments dans le tableau")
            break;
        case 5:
            console.log("il y a 5 éléments dans le tableau")
            break;
        case 0:
            console.log("le tableau est vide")
            break;
        default:
            console.log("Je ne connais pas le nombre d'éléments du tableau")
    }


//Boucles

    //while
    
    let compteur = 0

    while (compteur < 5) {
        compteur++;  
        console.log ("Messire")
        
    }
   
    //for

    for (let compteur = 0; compteur < 5; compteur++){
        console.log ("Messire")
    }
