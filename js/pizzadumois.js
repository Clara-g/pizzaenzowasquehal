//Pop up pizza du mois//
document.addEventListener('DOMContentLoaded', function() {
 const FOOTER = document.getElementsByTagName('footer')[0];
 const POPUP = document.createElement("article");
 document.body.insertBefore(POPUP, FOOTER);

 const BTN_CLOSE = document.createElement("button");
 const TITRE =  document.createElement("h2");
 const NOUVEAU = document.createElement("p");
 const NomPizza = document.createElement("p");
 const Ingredient = document.createElement("p");
 const Prix = document.createElement("p");
 const Flag = document.createElement("section");
 const divVert = document.createElement("div");
 const divBlanc = document.createElement("div");
 const divRouge = document.createElement("div");

 POPUP.appendChild(BTN_CLOSE);
 POPUP.appendChild(TITRE);
 POPUP.appendChild(NOUVEAU);
 POPUP.appendChild(NomPizza);
 POPUP.appendChild(Ingredient);
 POPUP.appendChild(Prix);
 POPUP.setAttribute("id","popup");
 POPUP.appendChild(Flag);
 Flag.appendChild(divVert);
 Flag.appendChild(divBlanc);
 Flag.appendChild(divRouge);

 TITRE.textContent = "Ouvert le 1er et 8 Mai";
 NOUVEAU.textContent = " nouveau !"
 NomPizza.textContent = " la gorgonzola";
 Ingredient.textContent = "Sauce tomate, gorgonzola, chorizo, champignons, mozzarella";
 Prix.textContent= "7,50€"; 


BTN_CLOSE.addEventListener('click', function(close){
 close = POPUP.style.display= "none";
});

});

 
 
 

