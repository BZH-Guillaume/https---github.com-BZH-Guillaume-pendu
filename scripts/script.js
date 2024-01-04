
const affichageMot = document.querySelector('.affichage-mot');
const motDevine = document.querySelector('.affichage-mot');
const clavierDiv = document.querySelector('.clavier');
let motActuel, nbErreur = 0;
const essaiMax = 6;

//Selection au hasard d'un mot de la liste
const motAuHasard = () => {
    const { mot, indice } = listeMots[Math.floor(Math.random() * listeMots.length)];
    motActuel = mot;
    console.log(mot);
    document.querySelector('.indice b').innerText = indice;
    affichageMot.innerHTML = mot.split('').map(() => `<li class="lettre"></li> `).join('');
}

//Vérification si la lettre cliquée est dans le mot et affichage de la lettre si c'est le cas
const initGame = (button, lettreCliquee) => {
    if(motActuel.includes(lettreCliquee)) {
        [...motActuel].forEach((lettre, index) => {
            if(lettre === lettreCliquee) {
                affichageMot.querySelectorAll('li')[index].innerText = lettre;
                affichageMot.querySelectorAll('li')[index].classList.add('devinee');
            }
        });
    } else  {
        nbErreur++;
    }
}


//Création de clavier avec les lettres de l'alphabet et ajout d'un eventListener sur chaque lettre
for (let i = 97; i < 122; i++) {
    const button = document.createElement('button');
    button.innerText = String.fromCharCode(i);
    clavierDiv.appendChild(button);
    button.addEventListener('click', (e) => initGame(e.target, String.fromCharCode(i)));
}

motAuHasard();