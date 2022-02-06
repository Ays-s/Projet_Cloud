# Projet - Programmer le Cloud

Ayrwan GUILLERMO - ENSTA Bretagne

[toc]

## TD 1
### 2
Le fichier `package.json` est le fichier de gestion du package qui gère les dépendences, les scripts de run et le point d'entrer du package.

Le fichier `package-lock.json` permet d'indexer les packets installé avec la version précise de ceux-ci, afin d'être sur d'avoir les mêmes versions de modules.

### 3
Cela ajoute une dépendence à `systeminformation`. `devDependencies` permet d'avoir des dépendences uniquement sur l'envrionnement de developpement et non celui de production.

### 4



0.0.2 -> Total Image size : 55 MB


### 5


### 6 


### 7 

## TD2

### 4


### 5
![dive v1](./images/divev1.png)
La taille du contener est très grande : Total Image size: 226 MB 


### 6
![dive v2](./images/divev2.png)
La taille du contener est beaucoup plus petite : Total Image size: 55 MB 

Le delta est de 171MB soit une baisse de 75%.  
Pour une application cette dimunution est très importante, sur un système 

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
![resultat](./images/resultat_heroku.png)