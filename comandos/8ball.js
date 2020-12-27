const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "8ball",
  alias: ["8b"],

execute (client, message, args){
 
  let respuesta = ["Si", "No", "Tal vez", "Obvio", "Yo digo que si", "Yo digo que no", "Probablemente", "No lo se, preguntame otra vez"]
	var random = respuesta[Math.floor(Math.random() * respuesta.length)]  

  var question = args.join(" ")
  if (!question) return message.channel.send('Preguntame lo que necesites')
	const embed = new Discord.MessageEmbed()//definimos el embed
  .addField("Su pregunta", `${question}`)
	.addField("Mi respuesta", `${random}`)
	.setColor("RANDOM")
	message.channel.send(embed)
  
 }
 
}