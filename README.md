# **MinecraftServer-DiscordBot**
This is a simple discord bot that will ping your minecraft server (using [this](https://mcapi.us/)) and show the status of it in a discord embed.

## Required packages
To run this bot you will need to install ([node.js](https://nodejs.org/)) and these two pakages:
1. **discord.js** `npm install discord.js`
2. **request** `npm install request`

## Configure
1. Open the `config.json` file.
2. Change the `BOT_TOKEN` to your bot's token.
3. You can also change the **prefix**, **command** (CMD), **ip**, **port** (if needed), **ServerName**, **ServerWebsite** and **ServerLogo**.

## Run
To actually run the bot you will need to run the following command:
`node bot.js`
