# LELEUREAC — Client Bot 🤠

Bot Discord à installer sur les serveurs de cheat RedM.  
Il détecte automatiquement les membres et les reporte à la base de données communautaire.

---

## Installation

### 1. Prérequis
- Node.js >= 18 → https://nodejs.org
- Git → https://git-scm.com

### 2. Cloner le projet
```bash
git clone https://github.com/LELEURE/LELEUREAC-client.git
cd LELEUREAC-client
npm install
```

### 3. Créer ton bot Discord

1. Va sur https://discord.com/developers/applications
2. Clique **New Application** → donne un nom
3. Onglet **Bot** → **Reset Token** → copie le token
4. Active uniquement : **Server Members Intent**
5. Onglet **OAuth2** → **URL Generator**
   - Coche : `bot`
   - Permission : `View Channels`
6. Copie le lien généré et invite le bot sur le serveur

### 4. Obtenir une clé API

Contacte l'administrateur de la communauté sur Discord pour obtenir :
- L'URL de l'API
- Ta clé API personnelle

### 5. Configurer le .env

```bash
cp .env.example .env
```

Remplis le fichier `.env` :

```
DISCORD_TOKEN=ton_token_bot_discord
API_URL=url_fournie_par_ladmin
API_KEY=cle_fournie_par_ladmin
GUILD_NAME=Nom exact du serveur
```

### 6. Lancer le bot

```bash
npm run dev
```

---

## Ce que fait le bot

- Au démarrage : scanne tous les membres existants du serveur
- En continu : détecte les nouveaux membres
- Ignore les autres bots

## Permissions requises

- `View Channels`
- **Server Members Intent** (activé dans le Developer Portal)

Le bot ne lit pas les messages et ne modère pas.
