# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# SportSee

SportSee est une application de tableau de bord pour suivre les performances sportives des utilisateurs. Ce projet est développé avec React et utilise Vite comme outil de construction.

## Table des matières

- [Installation](#installation)
- [Démarrage](#démarrage)
- [Pré-requis](#pré-requis)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Documentation](#documentation)
- [Fonctionnement de l'API](#fonctionnement-de-lapi)
- [Contributeurs](#contributeurs)

---

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/geoffreybunel/sportsee.git
   
2. Accédez au dossier du projet :
   cd sportsee

3. Installez les dépendances :
   npm install


## Démarrage

1. Lancez le serveur de développement :
   npm run dev
   
2. Ouvrez votre navigateur à l'adresse suivante :
   [cd sportsee](http://localhost:5173)


## Pré-requis

Avant de commencer, assurez-vous d'avoir les versions suivantes installées sur votre machine :

- **Node.js** : v16 ou supérieur
- **npm** : v8 ou supérieur
- **Git** : v2.25 ou supérieur

Pour vérifier les versions installées, utilisez les commandes suivantes dans votre terminal :

- `node -v` : Vérifie la version de Node.js.
- `npm -v` : Vérifie la version de npm.
- `git --version` : Vérifie la version de Git.


## Fonctionnalités

- Affichage des performances sportives des utilisateurs.
- Graphiques interactifs (Recharts).
- Fallback automatique sur des données mockées si l'API est indisponible.
- Gestion des utilisateurs via l'URL (exemple : /user/12 ou /user/18).


## Technologies utilisées

- React (v19.2.0) : Framework JavaScript pour construire l'interface utilisateur.
- Vite (v7.2.4) : Outil de construction rapide pour les projets React.
- Recharts (v3.5.0) : Librairie pour les graphiques.
- Tailwind CSS (v4.1.17) : Framework CSS pour le style.
- Node.js (v24.11.1) : Backend pour l'API.


## Fonctionnement de l'API

1. Pré-requis
- NodeJS (version 12.18) ou supérieure (testé jusqu’à Node 20.0)
- Yarn

Si vous travaillez avec plusieurs versions de NodeJS, nous vous recommandons d’installer nvm. Cet outil vous permettra de gérer facilement vos versions de NodeJS.

2. Lancement du projet
- Forkez le dépôt : https://github.com/geoffreybunel/SportSeeAPI
- Clonez-le sur votre ordinateur
- La commande yarn vous permettra d’installer les dépendances
- La commande yarn dev vous permettra de lancer la micro-API

3. Endpoints
Ce projet comprend quatre endpoints utilisables :
- http://localhost:3000/user/${userId} – récupère les informations d’un utilisateur.
  Cet endpoint inclut l’ID, les informations utilisateur (prénom, nom, âge), le score du jour (todayScore) et les données clés (calories, macronutriments, etc.).
- http://localhost:3000/user/${userId}/activity – récupère l’activité quotidienne de 
  l’utilisateur (kilogrammes et calories).
- http://localhost:3000/user/${userId}/average-sessions – récupère les sessions 
  moyennes par jour. La semaine commence le lundi.
- http://localhost:3000/user/${userId}/performance – récupère les performances de 
  l’utilisateur (énergie, endurance, etc.).

Attention : actuellement seuls deux utilisateurs ont été mockés. Leurs userId sont 12 et 18.


## Documentation

JSDoc
La documentation du code est disponible dans les fichiers source sous forme de commentaires JSDoc.

PropTypes
Tous les composants utilisent des PropTypes pour valider les props.


## Contributeur

Geoffrey Bunel