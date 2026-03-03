# LELEUREAC — Client Bot 🤠

Discord bot to install on RedM cheat servers.  
It automatically detects members and reports them to the community database.

---

## Installation

### 1. Requirements
- Node.js >= 18 → https://nodejs.org
- Git → https://git-scm.com

### 2. Clone the project
```bash
git clone https://github.com/LELEURE/LELEUREAC-client.git
cd LELEUREAC-client
npm install
```

### 3. Create your Discord bot

1. Go to https://discord.com/developers/applications
2. Click **New Application** → give it a name
3. **Bot** tab → **Reset Token** → copy the token
4. Enable only: **Server Members Intent**
5. **OAuth2** tab → **URL Generator**
   - Check: `bot`
   - Permission: `View Channels`
6. Copy the generated link and invite the bot to the server

### 4. Get an API key

Contact the community administrator on Discord to get:
- The API URL
- Your personal API key

### 5. Configure the .env

```bash
cp .env.example .env
```

Fill in the `.env` file:

```
DISCORD_TOKEN=your_discord_bot_token
API_URL=https://leleureac-production.up.railway.app
API_KEY=key_provided_by_admin
GUILD_NAME=Exact name of the server
```

### 6. Start the bot

```bash
npm run dev
```

---

## What the bot does

- On startup: scans all existing members of the server
- Continuously: detects new members joining
- Ignores other bots

## Required permissions

- `View Channels`
- **Server Members Intent** (enabled in the Developer Portal)

The bot does not read messages and does not moderate.
