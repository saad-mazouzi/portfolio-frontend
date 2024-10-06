# Utiliser Node.js comme image de base
FROM node:16

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier les fichiers de l'application
COPY . .

# Construire l'application pour la production
RUN npm run build

# Installer et utiliser un serveur statique pour servir l'app
RUN npm install -g serve
CMD ["serve", "-s", "build"]
