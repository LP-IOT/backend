FROM node:lts-alpine

#Ajout du dossier pour l'API
ADD . /backend
WORKDIR /backend

#Installation des dépendances
RUN npm install

#Ouverture du port
EXPOSE 3000

#Lancement de l'application
CMD npm start