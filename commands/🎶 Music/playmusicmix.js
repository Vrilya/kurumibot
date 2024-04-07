const {
  MessageEmbed
} = require(`discord.js`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const playermanager = require(`${process.cwd()}/handlers/playermanager`);
module.exports = {
  name: `playmusicmix`,
  category: `🎶 Music`,
  aliases: [`pmusicmix`, "pmm", "musicmix"],
  description: `Plays an awesome Music Mix`,
  usage: `playmusicmix`,
  parameters: {
    "type": "music",
    "activeplayer": false,
    "previoussong": false
  },
  type: "queuesong",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    let link = "https://open.spotify.com/playlist/37i9dQZF1DWU1f2CQHNexG";
    if (args[0]) {
      //ncs | no copyrighted music
      if (args[0].toLowerCase().startsWith("k")) link = "https://open.spotify.com/playlist/2EoheVFjqIxgJMb8VnDRtZ";
      //pop
      if (args[0].toLowerCase().startsWith("agg")) link = "https://open.spotify.com/playlist/1PsMQlUhGksx5OBKO8Anpz";
      //default
      if (args[0].toLowerCase().startsWith("d")) link = "https://open.spotify.com/playlist/2YG4fdSRohmAQxW1zE2fZN";
      //remixes from Magic Release
      if (args[0].toLowerCase().startsWith("mid")) link = "https://open.spotify.com/playlist/2xWMsuuZRIHbj5bZOG6Cpm"
      //rock
      if (args[0].toLowerCase().startsWith("syn")) link = "https://open.spotify.com/playlist/37i9dQZF1EIhx14vjEjMgT";
      //oldgaming
      if (args[0].toLowerCase().startsWith("bes")) link = "https://open.spotify.com/playlist/5jymRcVFR42T9DbQMOT5jR"
      //gaming
      if (args[0].toLowerCase().startsWith("org")) link = "https://open.spotify.com/playlist/1UBNCp6aLkZNzvRJ9Jhwan";
      //Charts
      if (args[0].toLowerCase().startsWith("ret")) link = "https://open.spotify.com/playlist/3ebHKSjHujS4Tyt2KKP97R"
      //Chill
      if (args[0].toLowerCase().startsWith("dark")) link = "https://open.spotify.com/playlist/3gmpLUPjxqgEAyeT793OpE";
      //Jazz
      if (args[0].toLowerCase().startsWith("dar")) link = "https://open.spotify.com/playlist/37i9dQZF1EIgszvYrzhf9n";
      //blues
      if (args[0].toLowerCase().startsWith("j")) link = "https://open.spotify.com/playlist/5SY8V1uXPByFVrkJFNdTJG";
      //strange-fruits
      if (args[0].toLowerCase().startsWith("h")) link = "https://open.spotify.com/playlist/37i9dQZF1DX9qNs32fujYe";
    }
    message.reply({
      embeds: [new MessageEmbed()
        .setColor(es.color)
        .setAuthor(client.getAuthor(`Loading '${args[0] ? args[0] : "Default"}' Music Mix`, "https://imgur.com/xutrSuq.gif", link))
        .setTitle(eval(client.la[ls]["cmds"]["music"]["playmusicmix"]["variable1"]))
        .setDescription(eval(client.la[ls]["cmds"]["music"]["playmusicmix"]["variable2"]))
        .addField(eval(client.la[ls]["cmds"]["music"]["playmusicmix"]["variablex_3"]), eval(client.la[ls]["cmds"]["music"]["playmusicmix"]["variable3"]))
        .setFooter(client.getFooter(es))
      ]
    })
    //play the SONG from YOUTUBE
    playermanager(client, message, Array(link), `song:youtube`, false, "songoftheday");
  }
};

