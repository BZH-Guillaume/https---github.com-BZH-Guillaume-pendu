const listeMots = [
    {
        mot: "guitare",
        indice: "Un instrument de musique à cordes."
    },
    {
        mot: "argon",
        indice: "Un gaz neutre et incolore."
    },
    {
        mot: "montagne",
        indice: "Une forme topographique de relief positif."
    },
    {
        mot: "Peinture",
        indice: "Une forme d'art qui utilise la couleur pour s'exprimer."
    },
    {
        mot: "astronomie",
        indice: "Etude des objets et phrénomènes célestes."
    },
    {
        mot: "football",
        indice: "Un sport populaire."
    },
    {
        mot: "chocolat",
        indice: "Très apprécié pendant les fêtes de fin d'année."
    },
    {
        mot: "papillon",
        indice: "Un insecte aux ailes colorées."
    },
    {
        mot: "histoire",
        indice: "L'étude des évenements passés de la civilisation."
    },
    {
        mot: "pizza",
        indice: "Ronde ? Plate ? Mais meilleure avec beaucoup de fromage."
    },
    {
        mot: "jazz",
        indice: "Musique afro-américaine créée au début du xxe siècle."
    },
    {
        mot: "camera",
        indice: "Un appareil destiné à capturer des images et vidéos."
    },
    {
        mot: "diamant",
        indice: "Matériau très dur."
    },
    {
        mot: "aventure",
        indice: "Un expérience stimulante et enrichissante."
    },
    {
        mot: "science",
        indice: "Ensemble de connaissances."
    },
    {
        mot: "bicyclette",
        indice: "Un véhicule mû par la force humaine."
    },
    {
        mot: "crepuscule",
        indice: "Le moment de la journée ou le soleil passe sous l'horizon."
    },
    {
        mot: "café",
        indice: "Boisson populaire, généralement bue chaude."
    },
    {
        mot: "danse",
        indice: "Des mouvements exécutés en rythme sur de la musique."
    },
    {
        mot: "galaxie",
        indice: "Un vaste système d'étoiles, de gaz et de poussières, maintenus ensembles par la gravité."
    },
    {
        mot: "orchestre",
        indice: "Un ensemble de musiciens jouant des instruments variés."
    },
    {
        mot: "volcan",
        indice: "Une montagne ou une colline expulsant du gaz, de la lave ou des roches et poussières."
    },
    {
        mot: "roman",
        indice: "Une histoire avec des personnages et des situations fictifs."
    },
    {
        mot: "sculpture",
        indice: "Une forme d'art tri-dimansionnelle obtenue en modelant et/ou combinant des matériaux."
    },
    {
        mot: "symphonie",
        indice: "Composition musicale à plusieurs mouvements, construite sur le plan de la sonate et exécutée par un nombre important d'instrumentistes."
    },
    {
        mot: "architecture",
        indice: "L'art de construire des batiments et immeubles."
    },
    {
        mot: "ballet",
        indice: "Une danse classique exécutée par plusieurs personnes."
    },
    {
        mot: "astronaute",
        indice: "Une personne entrainée à travailler et voyager dans l'espace."
    },
    {
        mot: "cascade",
        indice: "Chute d'eau."
    },
    {
        mot: "technologie",
        indice: "L'application d'une connaissance scientifique. Étude des techniques, des outils, des machines, etc."
    },
    {
        mot: "panda",
        indice: "Un ours herbivore."
    },
    {
        mot: "univers",
        indice: "Tout ce qui existe."
    },
    {
        mot: "piano",
        indice: "Un instrument de musique à cordes frappées."
    },
    {
        mot: "vacances",
        indice: "Meilleure période de l'année."
    },
    {
        mot: "jungle",
        indice: "Foret dense, chaude et humide."
    },
    {
        mot: "souris",
        indice: "Dispositif de pointage."
    },
    {
        mot: "telephone",
        indice: "Dispositif utilisé pour transmettre le son et la voix sur de longues distances."
    },
    {
        mot: "langage",
        indice: "Un système de communication incluant des mots, des attitudes..."
    },
    {
        mot: "desert",
        indice: "très très gros tas de sable"
    },
    {
        mot: "tournesol",
        indice: "grande plante à fleurs jaunes."
    },
    {
        mot: "fantasy",
        indice: "Un genre de fiction incluant de la magie, des éléments et créatures surnaturels."
    },
    {
        mot: "telescope",
        indice: "Un instrument optique permettant l'observation des objets célestes."
    },
    {
        mot: "brise",
        indice: "Un vent léger."
    },
    {
        mot: "oasis",
        indice: "Un endroit fertile en plein désert, dû à la présence d'eau."
    },
    {
        mot: "photographie",
        indice: "Procédé, technique permettant d'obtenir l'image durable des objets, par l'action de la lumière sur une surface sensible."
    },
    {
        mot: "safari",
        indice: "Expédition de chasse aux gros animaux sauvages, en Afrique subsaharienne."
    },
    {
        mot: "planete",
        indice: "Un objet céleste qui ne produit pas de lumière."
    },
    {
        mot: "riviere",
        indice: "un large courant d'eau naturel."
    },
    {
        mot: "tropical",
        indice: "Relatif aux zones situées de part et d'autre de l'équateur."
    },
    {
        mot: "mysterieux",
        indice: "Qui est incompréhensible ou évoque la présence de forces cachées."
    },
    {
        mot: "enigme",
        indice: "Jeu d'esprit où l'on donne à deviner une chose définie ou écrite en termes obscurs."
    },
    {
        mot: "paradoxe",
        indice: "Opinion qui va à l'encontre de l'opinion communément admise. Association de deux faits, de deux idées contradictoires."
    },
    {
        mot: "puzzle",
        indice: "Jeu d'esprit ou il faut reconstituer une image avec de petites pièces découpées."
    },
    {
        mot: "murmurer",
        indice: "Parler de facon des basse, pour rassurer ou dire un secret."
    },
    {
        mot: "ombre",
        indice: "Une zone ou forme sombre produite par un objet ou une personne bloquant le passage de la lumière."
    },
    {
        mot: "secret",
        indice: "Quelque chose qui ne doit pas être connu de tous."
    },
    {
        mot: "curiosity",
        indice: "Un robot qui se ballade sur Mars."
    },
    {
        mot: "illusion",
        indice: "Une fausse perception."
    },
    {
        mot: "blaireau",
        indice: "Homme politique français, petit mammifère carnivore."
    },
    {
        mot: "livre",
        indice: "Assemblage broché ou relié d'un nombre conséquent de pages."
    },
    {
        mot: "nostalgie",
        indice: "Regret mélancolique (d'une chose révolue ou de ce qu'on n'a pas connu) ; désir insatisfait."
    },
    {
        mot: "stylo",
        indice: "Instrument pour écrire dont le corps contient une réserve d'encre."
    },
]