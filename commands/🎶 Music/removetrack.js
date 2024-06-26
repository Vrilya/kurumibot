const {
  MessageEmbed
} = require(`discord.js`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
module.exports = {
  name: `removetrack`,
  category: `🎶 Music`,
  aliases: [`rt`, `remove`],
  description: `Removes a track from the Queue`,
  usage: `removetrack <Trackindex>`,
  parameters: {
    "type": "music",
    "activeplayer": true,
    "check_dj": true,
    "previoussong": false
  },
  type: "queue",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    //if no args return error
    if (!args[0])
      return message.reply({
        embeds: [new MessageEmbed()

          .setColor(es.wrongcolor)
          .setTitle(eval(client.la[ls]["cmds"]["music"]["removetrack"]["variable1"]))
          .setDescription(eval(client.la[ls]["cmds"]["music"]["removetrack"]["variable2"]))
        ]
      });
    //if the Number is not a valid Number return error
    if (isNaN(args[0]))
      return message.reply({
        embeds: [new MessageEmbed()

          .setColor(es.wrongcolor)
          .setTitle(eval(client.la[ls]["cmds"]["music"]["removetrack"]["variable3"]))
          .setDescription(eval(client.la[ls]["cmds"]["music"]["removetrack"]["variable4"]))
        ]
      });
    //if the Number is too big return error
    if (Number(args[0]) > player.queue.size)
      return message.reply({
        embeds: [new MessageEmbed()

          .setColor(es.wrongcolor)
          .setTitle(eval(client.la[ls]["cmds"]["music"]["removetrack"]["variable5"]))
          .setDescription(eval(client.la[ls]["cmds"]["music"]["removetrack"]["variable6"]))
        ]
      });
    //remove the Song from the QUEUE
    player.queue.remove(Number(args[0]) - 1);
    //Send Success Message
    return message.reply({
      embeds: [new MessageEmbed()
        .setTitle(eval(client.la[ls]["cmds"]["music"]["removetrack"]["variable7"]))
        .setColor(es.color)

      ]
    });
  }
};

