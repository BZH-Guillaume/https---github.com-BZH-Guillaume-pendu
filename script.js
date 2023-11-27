// Liste de mots possibles (ajoute autant que tu veux)
const wordList = ["javascript", "developper", "pendu", "challenge", "coding", "tenace"];

// Mot secret actuel
let secretWord = "";

// Lettres correctement devinées
let correctGuesses = [];

// Lettres incorrectement devinées
let incorrectGuesses = [];

// Chances restantes
let chances = 6; // Ou le nombre que tu préfères

// Fonction pour choisir un mot au hasard
function chooseRandomWord() {
    secretWord = wordList[Math.floor(Math.random() * wordList.length)];
}

// Fonction pour initialiser le jeu
function initializeGame() {
    chooseRandomWord();
    correctGuesses = [];
    incorrectGuesses = [];
    chances = 6;
    updateDisplay();
}


// Fonction pour mettre à jour l'affichage
function updateDisplay() {
    // Met à jour l'affichage du mot secret avec les lettres correctes devinées
    document.getElementById("word-container").innerHTML = secretWord
        .split("")
        .map(letter => (correctGuesses.includes(letter) ? letter : "_"))
        .join(" ");

    // Met à jour l'affichage du pendu
    document.getElementById("hangman-container").textContent = `Chances restantes : ${chances}`;

    // Met à jour l'affichage des lettres incorrectes devinées
    document.getElementById("guesses-container").textContent = `Lettres incorrectes : ${incorrectGuesses.join(", ")}`;

    // Met à jour l'affichage du nombre de chances restantes
    document.getElementById("chances-container").textContent = `Chances restantes : ${chances}`;

    // Efface le champ d'entrée
    document.getElementById("input").value = "";
}

// Fonction pour traiter la proposition du joueur
function submitGuess() {
    const input = document.getElementById("input").value.toLowerCase();

    if (input.length === 1 && input.match(/[a-z]/i)) {
        // Le joueur a proposé une lettre
        handleLetterGuess(input);
    } else if (input.length > 1) {
        // Le joueur a proposé un mot
        handleWordGuess(input);
    } else {
        // Entrée invalide
        alert("Veuillez entrer une lettre ou un mot valide.");
    }
}

// Fonction pour traiter la proposition de lettre du joueur
function handleLetterGuess(letter) {
    if (secretWord.includes(letter)) {
        // Lettre correcte
        correctGuesses.push(letter);
    } else {
        // Lettre incorrecte
        incorrectGuesses.push(letter);
        chances--;
    }

    checkGameStatus();
}

// Fonction pour ajouter un mot à la liste
function addWord() {
    const newWord = prompt("Entrez un nouveau mot :").toLowerCase();
    
    // Vérifie si le mot est valide (non vide et ne contient que des lettres)
    if (newWord && /^[a-z]+$/.test(newWord)) {
        wordList.push(newWord);
        alert(`Le mot "${newWord}" a été ajouté avec succès.`);
        // Réinitialise le jeu après l'ajout d'un mot
        initializeGame();
    } else {
        alert("Veuillez entrer un mot valide.");
    }
}

// Nouvelle fonction pour traiter la proposition de mot du joueur
function handleWordGuess(word) {
    if (word === secretWord) {
        // Le joueur a deviné correctement le mot
        endGame(true);
    } else {
        // Le joueur a deviné incorrectement
        incorrectGuesses.push(word);
        chances--;
        // Met à jour l'affichage du pendu après chaque proposition
        updateHangman();
        checkGameStatus();
    }
}

// Fonction pour vérifier l'état du jeu (victoire ou défaite)
function checkGameStatus() {
    if (chances === 0) {
        // Le joueur a épuisé toutes ses chances
        endGame(false);
    } else if (!document.getElementById("word-container").textContent.includes("_")) {
        // Le joueur a deviné correctement toutes les lettres du mot secret
        endGame(true);
    } else {
        // Met à jour l'affichage après chaque proposition
        updateDisplay();
    }
}

// Fonction pour terminer le jeu
function endGame(isWinner) {
    if (isWinner) {
        // Déclenche l'animation de confettis
        confetti.start();

        // Affiche un message de félicitations
        setTimeout(() => {
            alert("Bravo, tu as trouvé le mot!");
            // Arrête l'animation de confettis
            confetti.stop();
            // Réinitialise le jeu
            initializeGame();
        }, 3000); // Attend 3 secondes avant d'afficher l'alerte
    } else {
        alert(`Dommage, le mot secret était "${secretWord}". Tu feras mieux la prochaine fois.`);
        // Réinitialise le jeu
        initializeGame();
    }
}

// Initialise le jeu au chargement de la page
window.onload = initializeGame;
