
/*///////////////////////////////////////////////////////////// 
    Déclaration des variable qui me permettra d'aller chercher
dans mon HTML, les div's "disc" pour pouvoir agir dessus. 
/////////////////////////////////////////////////////////////*/


const btnEpaule = document.getElementById("disc-epaule")
const btnCoude = document.getElementById("disc-coude")
const btnPoignet = document.getElementById("disc-poignet")
const btnHanche = document.getElementById("disc-hanche")
const btnGenou = document.getElementById("disc-genou")
const btnCheville = document.getElementById("disc-cheville")

/*///////////////////////////////////////////////////////////// 
    Creation du fonction "action" qui me permettra de changer 
la couleur de mon "disc" et changer la "def" qui correspond 
au "disc" cliqué.   
/////////////////////////////////////////////////////////////*/

function action(param){
    let activeBtn = document.getElementsByClassName("btn-active")
    let activeDef = document.getElementsByClassName("def-active")
    let btn = document.getElementById("disc-"+ param)
    let def = document.getElementById("def-"+ param)

    activeBtn[0].classList.remove("btn-active")
    btn.classList.add("btn-active")

    activeDef[0].classList.remove("def-active")
    def.classList.add("def-active")
}


/*///////////////////////////////////////////////////////////// 
    La méthode qui me permettra d'appaler a chaque fois la 
la fonction action au clic.  
/////////////////////////////////////////////////////////////*/

btnEpaule.addEventListener("click", function(event){action ("epaule")})
btnCoude.addEventListener("click", function(event){action ("coude")})
btnPoignet.addEventListener("click", function(event){action ("poignet")})
btnHanche.addEventListener("click", function(event){action ("hanche")})
btnGenou.addEventListener("click", function(event){action ("genou")})
btnCheville.addEventListener("click", function(event){action ("cheville")})
