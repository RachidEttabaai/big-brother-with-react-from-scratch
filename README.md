Brief projet "Big brother" V2
==========================

Le projet se déroulera sur 2 semaines, **1 semaine en binôme** suivi **d'1 semaine en individuel**. L'objectif est de proposer une application permettant de surveiller la population, plateforme à destination de la police de la pensée.

## Objectifs

* Découverte de la bibliothèque React
* Manipulation d'un DOM virtuel
* Gestion d'un état de données

## Compétences visées

* Compétence 1 : Maquetter une application
* Compétence 2 : Réaliser une interface utilisateur Web statique et adaptable aux différents périphériques
* Compétence 3 : Développer une interface utilisateur Web dynamique

Semaine 1
---------

### Etapes

1. Créer un dépôt Git principal qui sera utilisé par le binôme
2. Initialiser une application via [Create React App](https://github.com/facebook/create-react-app)
3. Ouvrir le fichier *data.json* afin d'analyser les données pouvant être exploitées
4. Réaliser un *wireframe* pensé pour le mobile en premier et adaptable aux différents terminaux et tailles d'écran

### Tâches

* Lister les personnes surveillées ; pour chaque personne présente dans la liste, il faudra afficher au minimum sa photo, son nom et son prénom
* Afficher des informations complémentaires d'une personne (age, email, phone,...) lorsque l'utilisateur clique sur sa photo

### Tâches - Bonus

* Ajouter une barre de recherche afin de filtrer les personnes affichées depuis la liste (filtrer à partir du prénom et/ou nom)

Semaine 2
---------

## Etapes

1. Chaque apprenant devra *forker* le dépôt Git principal afin de se partager le travail
2. Le code source réalisé par **chaque apprenant devra être envoyé sur son fork**, le projet pourra ainsi évoluer de facon distincte. A ce stade vous devez posséder deux projets : projet *principal* + projet *forké*
3. Choisir qui fait quoi ;-)

### Tâches - Apprenant 1

* Pouvoir lister les messages envoyés par une personne surveillée
* Ajouter un système permettant de filtrer les messages via : source et/ou date
* Permettre l'identification rapide d'une personne si celle-ci possède un message contenant les termes *veniam* ou *nulla*

### Tâches - Apprenant 2

* Pouvoir lister les achats réalisés par une personne surveillée
* Ajouter un système permettant de filtrer les achats via : montant et/ou date
* Permettre l'identification rapide d'une personne si celle-ci à réalisé un achat > 3000€

### Tâches - Bonus

* Fusionner le code source des projets *forkés* afin d'intégrer les fonctionnalités développées par chaque apprenant dans le dépôt principal. Pour continuer à faire évoluer le projet, deux choix s'offrent à vous :

  1. Travailler à deux sur le projet principal
  2. Continuer à travailler chacun sur son *fork* en récupérant le code du dépôt principal : pour se faire, configurer un nouveau depôt distant nommé *upstream* (votre dépôt principal) sur votre projet *forké* afin de pouvoir récupérer et fusionner le code source de *upstream*

* Afficher les déplacements d'une personne sur une carte

* Ajouter un système permettant de croiser les données :

  1. Personnes surveillées avec des amis en commun
  2. Personnes surveillées qui travaillent dans la même société