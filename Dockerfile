# On peut voir Docker comme un système dans lequel on fabrique une boîte pour faire tourner notre application dedans
# Pour se faire, on a besoin d'une patron de la boîte, qu'on appelle aussi image. C'est ce que fait ce fichier : on fabrique l'image.

# On utilise une base pré faite qui contient ici déjà NodeJS. ça nous évite de télécharger une image debian pour installer ensuite nodejs
FROM node:14.16-alpine3.10

# On va ajouter à notre patron le contenu du répertoire courant à un répertoire "backend" dans le container
ADD . /backend/

# On dit que les prochaines commandes se font dans le répertoire backend trouvable dans le container
WORKDIR /backend

# On installe les lib et on construit l'application
RUN npm install --production
RUN npm run build 

# On dit à notre boîte qu'on ouvre un chemin vers notre api via le port 3000
EXPOSE 3000

# On lance l'api
CMD node dist/main