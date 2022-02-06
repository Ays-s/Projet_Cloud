# Projet - Programmer le Cloud

Ayrwan GUILLERMO - ENSTA Bretagne

[toc]

## TD 1 : une application Node.js
### 2
Le fichier `package.json` est le fichier de gestion du package qui gère les dépendences, les scripts de run et le point d'entrer du package.

Le fichier `package-lock.json` permet d'indexer les packets installé avec la version précise de ceux-ci, afin d'être sur d'avoir les mêmes versions de modules.

### 3
Cela ajoute une dépendence à `systeminformation`. `devDependencies` permet d'avoir des dépendences uniquement sur l'envrionnement de developpement et non celui de production.

### 5
On utilise ce formalisme pour pouvoir avoir un point d'entrer spécifique à l'APi puis à chaque version de celle-ci.

### 6 
On écrit ce jeu de test pour pouvoir mettre en place l'intégration continue. Afin que celle-ci soit faite il faut qu'un test soit réussi.
 

## TD2 : conteneurisation avec Docker
### 4
Le flag `-p` permet une redirection de prot entre le docker et la machine qui l'éxécuter.  
Le flag `-m` permet de definir la mémoire alloué au docker.
Le flag `--cpus` indique le nombre de cpu aloué à l'éxécution du docker.  

### 5
La taille de l'image est très importante. Elle contient des utilitaires ou des parties de codes utiles uniquement pour le build. On pourrait réduire la tailll de l'image en enlevant ces utilitaires.

### 6


### 8
La commande est : 
``` shell
docker login
docker pull ayss/sysinfo-api:0.0.2
```

## TD3

### 3


### 4


## TD4

### 3


### 4


### 5


### 6



## Résultat final :