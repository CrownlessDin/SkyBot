const Discord = require("discord.js");

exports.run = (client, message, args) => {

  const embed = new Discord.RichEmbed()
    .setColor(0xFFFF00)
    .setTitle("Bot Commands")

    .addField("**!help**", "Shows this list of Bot commands.")

    .addField("**!card <power name>**", "Shows the Power Card image.")

    .addField("**!hero <hero name>**", "Shows the Hero Card image.")

    .addField("**!ult <hero name>/<ultimate name>**", "Shows the Ultimate Card image.")

    .addField("**!victory <victory name>**", "Shows the Victory Card image.\nWithout params shows the Victory cards list.")

    .addField("**!outsider <outsider name>**", "Shows the Outsider Card image.\nWithout params shows the Outsiders list.")

    .setFooter("SkyBot")

  message.channel.send({ embed });
}