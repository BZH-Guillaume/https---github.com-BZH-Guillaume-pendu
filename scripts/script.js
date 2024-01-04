
const penduImage = document.querySelector('.box-pendu img');
const affichageMot = document.querySelector('.affichage-mot');
const motDevine = document.querySelector('.nbErreurs b');
const clavierDiv = document.querySelector('.clavier');
const gameModal = document.querySelector('.game-modal');
const boutonRejouer = document.querySelector('.rejouer');

let motActuel, lettreCorrecte, nbErreur;
const essaiMax = 6;
const resetGame = () => { //reset du jeu, interface et variables
    lettreCorrecte = [];
    nbErreur = 0;
    motDevine.innerText = `${nbErreur}/${essaiMax}`;
    penduImage.src = `images/hangman-${nbErreur}.svg`;
    clavierDiv.querySelectorAll('button').forEach(button => button.disabled = false);
    affichageMot.innerHTML = motActuel.split('').map(() => `<li class="lettre"></li> `).join('');
    gameModal.classList.remove('show');
}

//Selection au hasard d'un mot de la liste
const motAuHasard = () => {
    const { mot, indice } = listeMots[Math.floor(Math.random() * listeMots.length)];
    motActuel = mot;
    console.log(mot);
    document.querySelector('.indice b').innerText = indice;
    resetGame(motAuHasard);
    
}

const gameOver = (isVictory) => {
    setTimeout(() => {
        const modalText = isVictory ? `Vous avez trouvé le mot !` : `Vous avez perdu ! Le mot était :`;
        gameModal.querySelector('img').src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModal.querySelector('h4').innerText = `${isVictory ? 'Félicitations !' : 'Game Over'}`;
        gameModal.querySelector('p').innerHTML = `${modalText} <b>${motActuel}</b>`;
        gameModal.classList.add('show');   
    }, 300);
}

//Vérification si la lettre cliquée est dans le mot et affichage de la lettre si c'est le cas
const initGame = (button, lettreCliquee) => {
    if(motActuel.includes(lettreCliquee)) {
        [...motActuel].forEach((lettre, index) => {
            if(lettre === lettreCliquee) {
                lettreCorrecte.push(lettre);
                affichageMot.querySelectorAll('li')[index].innerText = lettre;
                affichageMot.querySelectorAll('li')[index].classList.add('devinee');
            }
        });
    } else  { // incrément du nombre d'erreur et modification visuelle du pendu
        nbErreur++;
        penduImage.src = `images/hangman-${nbErreur}.svg`;
    }

    button.disabled = true;
    motDevine.innerText = `${nbErreur}/${essaiMax}`;

    //Conditions de victoire ou de défaite
    if(nbErreur === essaiMax) return gameOver(false);
    if(lettreCorrecte.length === motActuel.length) return gameOver(true);
}


//Création de clavier avec les lettres de l'alphabet et ajout d'un eventListener sur chaque lettre
for (let i = 97; i < 123; i++) { // les codes ASCII de 97 à 123 correspondent aux lettres de l'alphabet
    const button = document.createElement('button');
    button.innerText = String.fromCharCode(i);
    clavierDiv.appendChild(button);
    button.addEventListener('click', (e) => initGame(e.target, String.fromCharCode(i)));
}

motAuHasard();
boutonRejouer.addEventListener('click', motAuHasard);