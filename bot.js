const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
bot.login(config.BOT_TOKEN);

const prefix = (config.prefix) //Bot command prefix
var request = require('request');
var CMD = (config.CMD); //Command to trigger
var mcIP = (config.ip); //Add your Minecraft server IP
var mcPort = (config.port); //The port of the server, default it 25565
var serverName = (config.ServerName); //Your server name
var serverUrl = (config.ServerWebsite); //Server website
var serverLogo = (config.ServerLogo); //Server logo

bot.once('ready', () => {
  console.log('Ready to ping!');
});

bot.on('message', message => {

  if (message.content === prefix + CMD) {
    var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
    request(url, function (err, response, body) {
      if (err) {
        console.log(err);
        return message.reply('Error getting Minecraft server status...');
      }
      
      body = JSON.parse(body);
      var status = "Offline"
      var color = 16711680
      if (body.online) {
        status = "Online";
        color = 65280
      }
      var players = 0
      if (body.players.now) {
        players += body.players.now;
      }
      else {
        players += 0
      }
      
      const embed = {
        "author": {
          "name": serverName + " Status",
          "url": serverUrl,
          "icon_url": serverLogo
        },
        "color": color,
        "fields": [
          {
            "name": "Status:",
            "value": status,
            "inline": true
          },
          {
            "name": "Players Online:",
            "value": "**" + body.players.now + "** / **" + body.players.max + "**",
            "inline": true
          }
        ],
        "footer": {
          "text": "IP: " + mcIP
        }
      };
      message.channel.send({ embed });
    });
  };
});

bot.on('ready', () => {
  bot.user.setActivity(prefix + CMD + " to see the server status.", {type: "LISTENING"})
});
