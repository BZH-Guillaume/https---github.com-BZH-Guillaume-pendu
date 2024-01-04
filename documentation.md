# Documentation du projet Pendu

## Description

Ce projet est une implémentation du jeu classique du pendu. L'utilisateur doit deviner un mot en cliquant sur les lettres. Si l'utilisateur fait trop d'erreurs, une image de pendu est progressivement dessinée et le jeu se termine.

## Structure du code

Le code est structuré autour de plusieurs variables et fonctions.

### Variables

- `penduImage` : Référence à l'élément d'image où l'image du pendu est affichée.
- `affichageMot` : Référence à l'élément où le mot à deviner est affiché.
- `motDevine` : Référence à l'élément où le nombre d'erreurs est affiché.
- `clavierDiv` : Référence à l'élément où le clavier virtuel est affiché.
- `gameModal` : Référence à l'élément modal qui s'affiche lorsque le jeu est terminé.
- `boutonRejouer` : Référence au bouton qui permet de recommencer le jeu.
- `motActuel` : Le mot actuellement à deviner.
- `lettreCorrecte` : Un tableau contenant les lettres correctement devinées.
- `nbErreur` : Le nombre d'erreurs actuelles.
- `essaiMax` : Le nombre maximum d'erreurs autorisées.

### Fonctions

- `resetGame` : Réinitialise le jeu, l'interface et les variables.
- `motAuHasard` : Sélectionne un mot au hasard dans une liste de mots.
- `gameOver` : Affiche un modal de fin de jeu, indiquant si l'utilisateur a gagné ou perdu.
- `initGame` : Vérifie si la lettre cliquée est dans le mot et affiche la lettre si c'est le cas.

## Utilisation

Pour jouer au jeu, ouvrez le fichier HTML dans un navigateur web. Utilisez le clavier virtuel pour deviner les lettres du mot. Le jeu se termine lorsque vous avez deviné le mot ou fait trop d'erreurs.

## Développement futur

Des améliorations possibles pourraient inclure l'ajout de plus de mots à deviner, l'ajout d'un système de score, ou l'ajout d'une fonctionnalité pour permettre à l'utilisateur de choisir la difficulté du jeu.