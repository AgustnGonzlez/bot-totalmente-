const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "love",
  alias: ["ship"],

async execute (client, message, args){
 
  let users =  message.mentions.users.first();
  if (!users) return message.channel.send("Menciona a alguien !")
  if (users === message.author) return message.channel.send("**No puedes hacer eso contigo mismo**")
  if (users === client.user) return message.channel.send("**No puedo calcular eso conmigo!**")



  const random = Math.floor(Math.random() * 100);
  let heard = "";
  if(random < 50) {
    heard=':broken_heart:';

  }else if(random < 80) {
    heard=':sparkling_heart: ';
  }else if(random < 101) {
    heard=':heart:';
  }

  let resp = [`El porcetanje de ${message.author.username} & ${users.username} son:`,`Valla yo calculo que ${message.author.username} & ${users.username} da a:`]

  let msg = resp[Math.floor(Math.random() * resp.length)]

  const embed = new Discord.MessageEmbed()
  .setAuthor(`${msg}`)
  .setDescription(`${heard} ${random} %${heard}`)
  .setColor(0xff4d4d)
  message.channel.send(embed)
  
 }
 
}