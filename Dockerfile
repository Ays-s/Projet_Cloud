# image de départ
 FROM alpine:3.15 AS builder

 # chemin de travail
 WORKDIR /app

 USER root
 
 # installation des paquets système
 RUN apk update && apk upgrade
 RUN apk add git
 RUN apk add --update nodejs>=16 npm>=8

 # copie des fichiers du dépôt
 RUN git clone https://github.com/Ays-s/Projet_Cloud.git
 WORKDIR /app/Projet_Cloud
 
 # installation des dépendances avec npm
 RUN npm install --only=production 
 RUN cp -R node_modules prod_module
 RUN npm install

 # build avec npm
 RUN npm run build

 #  stage exécution
 FROM alpine:3.15 AS runner

 WORKDIR /app

 USER root

 RUN apk update && apk upgrade
 RUN apk add --update nodejs>=16
 
 #  ajout users
 RUN addgroup -S node && adduser -S node -G node

 # downgrade des privilèges
 # USER node
 # COPY --from=builder --chown=node:node /app/Projet_Cloud/prod_module node_modules
 # COPY --from=builder --chown=node:node /app/Projet_Cloud/dist dist

 COPY --from=builder --chown=node:root /app/Projet_Cloud/prod_module node_modules
 COPY --from=builder --chown=node:node /app/Projet_Cloud/dist dist

# downgrade des privilèges
 USER node

 # Run App
 CMD ["node", "dist/index.js"]