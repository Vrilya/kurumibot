const {
  MessageEmbed
} = require("discord.js");
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
module.exports = {
  name: "autoresume",
  category: `⚙️ Settings`,
  aliases: ["toggleautoresume"],
  cooldown: 10,
  usage: "autoresume",
  description: "Toggles if the Auto-Resume-Function should be enabled or not",
  memberpermissions: ["ADMINISTRATOR"],
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    //set the new state
    client.settings.set(message.guild.id, !client.settings.get(message.guild.id, "autoresume"), "autoresume");
    //send information embed
    return message.reply({
      embeds: [new MessageEmbed()
        .setFooter(client.getFooter(es))
        .setTitle(eval(client.la[ls]["cmds"]["settings"]["autoresume"]["variable1"]))
        .setDescription(eval(client.la[ls]["cmds"]["settings"]["autoresume"]["variable2"]))
      ]
    });
  }
}

