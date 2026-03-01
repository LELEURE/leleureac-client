# RedM Warden — Bot Client 🤠

Bot Discord à installer sur les serveurs de cheat RedM.  
Il détecte automatiquement les nouveaux membres et les reporte à la base de données communautaire RedM Warden.

---

## Installation

### 1. Prérequis
- Node.js >= 18
- Un compte Discord pour créer le bot

### 2. Créer le bot Discord

1. Va sur https://discord.com/developers/applications
2. **New Application** → donne un nom
3. Onglet **Bot** → **Reset Token** → copie le token
4. Active : **Server Members Intent**
5. Onglet **OAuth2** → **URL Generator** → coche `bot` → permission `View Channels` + `Read Message History`
6. Copie le lien et invite le bot sur le serveur de cheat

### 3. Installer le projet

```bash
git clone https://github.com/TON_COMPTE/redm-warden-client.git
cd redm-warden-client
npm install
```

### 4. Configurer le .env

```bash
cp .env.example .env
```

Remplis le fichier `.env` :

```
DISCORD_TOKEN=ton_token_bot
API_URL=https://api.redmwarden.fr
API_KEY=rdw_la_cle_fournie_par_admin
GUILD_NAME=Nom de ton serveur
```

> La clé API (`API_KEY`) est fournie par l'administrateur de RedM Warden.  
> Contacte-le sur Discord pour en obtenir une.

### 5. Lancer le bot

```bash
npm run dev
```

---

## Ce que fait le bot

- Écoute les nouveaux membres qui rejoignent le serveur
- Envoie leur Discord ID à l'API centrale RedM Warden
- C'est tout — le bot ne lit pas les messages, ne modère pas, n'a aucune autre action

## Permissions requises

Le bot n'a besoin que de :
- `View Channels`
- `Server Members Intent` (activé dans le Developer Portal)
