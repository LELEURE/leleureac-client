// src/index.ts

import 'dotenv/config';
import { Client, GatewayIntentBits, Events } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
  ],
});

const { DISCORD_TOKEN, API_URL, API_KEY, GUILD_NAME } = process.env;

if (!DISCORD_TOKEN || !API_URL || !API_KEY) {
  console.error('❌ Erreur : DISCORD_TOKEN, API_URL et API_KEY sont requis dans le .env');
  process.exit(1);
}

// ── Fonction pour reporter un user ────────────────────────────────────────────
async function reportUser(discordId: string, guildId: string, guildName: string) {
  try {
    const response = await fetch(`${API_URL}/api/sighting`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({ discordId, guildId, guildName }),
    });

    if (response.ok) {
      console.log(`[+] Signalé : ${discordId} sur ${guildName}`);
    } else {
      const err = await response.json();
      console.error(`[!] Erreur API (${response.status}):`, err);
    }
  } catch (error) {
    console.error('[!] Impossible de contacter l\'API centrale :', error);
  }
}

// ── Scan d'un serveur complet ─────────────────────────────────────────────────
async function scanGuild(guildId: string) {
  const guild = client.guilds.cache.get(guildId);
  if (!guild) return;

  const guildName = GUILD_NAME ?? guild.name;
  console.log(`[~] Scan de ${guild.name} (${guild.memberCount} membres)...`);

  try {
    const members = await guild.members.fetch();
    let count = 0;

    for (const [, member] of members) {
      if (member.user.bot) continue;
      await reportUser(member.user.id, guild.id, guildName);
      count++;
    }

    console.log(`[~] Scan terminé : ${count} membre(s) reporté(s)`);
  } catch (error) {
    console.error('[!] Erreur lors du scan :', error);
  }
}

// ── Ready → scan de tous les serveurs au démarrage ───────────────────────────
client.once(Events.ClientReady, async () => {
  console.log(`✅ Bot connecté en tant que ${client.user?.tag}`);
  console.log(`📡 Surveillance de ${client.guilds.cache.size} serveur(s)`);
  console.log(`🔗 API : ${API_URL}`);

  for (const [guildId] of client.guilds.cache) {
    await scanGuild(guildId);
  }
});

// ── Bot rejoint un nouveau serveur ────────────────────────────────────────────
client.on(Events.GuildCreate, async (guild) => {
  await scanGuild(guild.id);
});

// ── Nouveau membre ────────────────────────────────────────────────────────────
client.on(Events.GuildMemberAdd, async (member) => {
  if (member.user.bot) return;
  const guildName = GUILD_NAME ?? member.guild.name;
  await reportUser(member.user.id, member.guild.id, guildName);
});

// ── Login ─────────────────────────────────────────────────────────────────────
client.login(DISCORD_TOKEN);  