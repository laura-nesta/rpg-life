# Projet RPG-Life 

RPG-Life est une application web mobile. Elle a pour but de se motiver a réaliser des tâches régulière pour instaurer une habitude dans sa vie et améliorer ses compétences dans différents domaines.    
  
A la manière d'un RPG, en réalisant des tâches l'utilisateur gagne de l'expérience et augmente son niveau dans les différente catégorie.   
L'application est simple avec une interface qui se veut intuitive.   

Toutes les compétences et tâches sont entièrement personnalisable. Lors de la première connexion (inscription), des compétences et tâches sont déjà définies pour exemples.  
Il est possible de modifier, supprimer ou ajouter une compétence ou une tâche.  

Des documents complémentaires sont disponibles sur le drive suivant : 
https://drive.google.com/drive/folders/1618Mrqp6o1Gz7JrQdFMK14gA2WJs6QVU?usp=sharing

## L'application

Lors du premier lancement de l'application, on est sur la page de connexion. 

### Connexion

La page de connexion permet de renseigner les informations de compte (pseudo et mot de passe) pour se connecter 
Une fois connecter, l'utilisateur se retrouve sur la page d'accueil.  
Il est possible de passer sur la page d'inscription si on ne possède pas de compte.  

![image](https://user-images.githubusercontent.com/99044194/215353006-cb14f748-92b9-475b-acd9-683cb5c2668c.png)


### Inscription

La page d'inscription permet de renseigner les informations de compte (pseudo, mot de passe et confirmation de mot de passe) pour se connecter.  
Une fois connecté, l'utilisateur se retrouve sur la page d'accueil.  
Il est possible de passer sur la page de connexion si on possède un compte.  

![image](https://user-images.githubusercontent.com/99044194/215353028-4e2c19d0-93c6-4b2a-a37a-90fa5e6d2c4a.png)


### Accueil

Sur la page d'accueil, l'utilisateur à un apperçu de ses compétences et de son niveau dans chacune de ses compétences.  
Il peut également ajouter une nouvelle compétence grâce au bouton "nouvelle compétence" 

![image](https://user-images.githubusercontent.com/99044194/215345985-7dbbbb1b-33f1-4c4f-80ae-40ed02e0d3c4.png)

### Paramètres 

Sur la page de paramètres, on retrouve la liste de tâches.  
Il est possible d'ajouter une nouvelle tâche. Mais également de modifier ou supprimer une tâche.  

![image](https://user-images.githubusercontent.com/99044194/215886882-b63df025-68bb-4623-9974-6810d9188cc9.png)
![image](https://user-images.githubusercontent.com/99044194/215886814-97bfba93-a83c-487a-9cea-cc01d8489b98.png)



### Tâches

La page des tâches permet d'afficher les tâches en cours en fonction de la périodicité.  
Quand l'utilisateur clique sur une tâche, elle considérée comme faite. 

![image](https://user-images.githubusercontent.com/99044194/215353073-d6a02e8d-cdb5-43f5-836d-bed5f2456a78.png)
![image](https://user-images.githubusercontent.com/99044194/215353089-9f61d067-231c-44ed-b9a6-b4eebfbf6a35.png)
![image](https://user-images.githubusercontent.com/99044194/215353103-efb906ec-9053-4ff4-9b49-4053058bff91.png)
![image](https://user-images.githubusercontent.com/99044194/215355815-9bd4f6d1-63a2-4743-bf4a-35b233833478.png)




### Compte 

Sur la page de compte l'utilisateur retrouve sa photo de profil et son pseudo. 
Il peut égallement se déconnecter. 

![image](https://user-images.githubusercontent.com/99044194/215353132-e15932b7-0fa2-4bfb-a4b1-ba1d281fa0c3.png)


## Le code 

L'application est en React JS   
L'ensemble du code de l'application est dans le dossier /src   

Dans le fichier de base /App.js, on fait appel au componsant <Router> qui gère quelle page est afficher selon l'url.  

-> Le composant <Router> est créer dans le fichier /routes/router.jsx  
-> Chaque page est dans un dossier au nom de la page dans le dossier /routes  
 
Les composants : 

Le composant <BottomNavBar> est dans le dossier /components/atoms/BotomNavBar  
Le composant <CardTache> est dans le dossier /components/molecules/cardTache  

## Les évoluations 
### Le projet actuellement 

Le front de l'apllication est en place. Toutes les pages s'affichent et la navigation fonctionne.   
Les données sont pour l'instant en statiques dans l'application.  
L'API sur directus est en place.  
Le back de l'application utilise Redux. Pour l'instant le back ne fonctionne pas.  
Les fonctionnalitées de l'application ne sont pas encore mise en place. 

### A faire prochainement 

* Mettre en place le back de l'application avec redeux 
* Réinitialiser les tâches une fois la périodicité écoulée.  
    * Tous les jours pour les tâches quotidiennes  
    * Toutes les semaines pour les hebdomadaires   
    * Tous les mois pour les mensuelles  
* Connecter l'application à l'API directus 
* Mettre en place la montée de niveau en fonction des tâches validées. 
* Ajouter la possibilité de modifier son pseudo et sa photo de profil. 

### Les évolutions prossibles

* Mettre en place un systeme d'amis pour partagé sa toile de compétence. 
* Pouvoir se lancé des défis entre amis avec des tâches communes. 

## Lancer l'application

* Télecharger ou cloner le repertoire 
* Dans un terminal, se placer dans le dossier du reprtoire. 
* lancer la commande `npm i`
* lancer la commande `npm start`

L'application est adapté au modèle mobile. Il est donc conseillé de visualiser l'application en iPhone SE  
(click droit -> inspecter l'élement -> 2eme icone en haut a gauche de l'inspecteur -> Dimension : iPhone SE dans la page )

Il est possible d'utiliser un compte de test pour se connecter (pseudo : gandalf ; mdp : password) 
 
