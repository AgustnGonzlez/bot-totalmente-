const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ass",
  alias: ["culo"],

async execute (client, message, args){
 
 if(!message.channel.nsfw) return message.channel.send("❌ | No puedes utilizar este comando en un chat que no es **NSFW**") ///esto hara que no funcione en chats normales.

    const image = await nsfw.ass(); ///definimos a img o gif que saldra en el embed.
    const embed = new Discord.MessageEmbed() ///creamos el embed.
    .setTitle("Disfrutalo 💖")
    .setImage(image)
    .setColor("RANDOM")
    .setFooter(" RomeoBot | NSFW", client.user.displayAvatarURL())
    message.channel.send(embed) ///enviamos.
  
 }
 
}