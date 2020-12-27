const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "help",
  alias: ["h"],

execute (client, message, args){

    message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.')
    const embed = new Discord.MessageEmbed()
    .setTitle('**COMANDOS DE ROMEOBOT**')
    .addField('ping', 'Comprueba la latencia del bot y de tus mensajes')
    .addField('setprefix', 'Cambia el prefix a alguno que te guste')
    .addField('avatar', 'Muestra el avatar tuyo o de un usuario especifico')
    .addField('clear', 'Borrar cierta cantidad de mensajes (Maximo 100)')
    .addField('ban', 'Banear a un usuario del servidor')
    .addField('kick', 'Expulsa a un usuario del servidor')
    .addField('hackban', 'Banear a un usuario de forma que jamas pueda volver')
    .addField('user', 'Pone la informacion del usuario mencionado')
    .addField('say', 'Haz que el bot diga un mensaje especifico')
    .addField('say-c', 'Haz que el bot diga un mensaje especifico en un canal especifico')
    .addField('8ball', 'Obten la respuesta a todas tus preguntas')
    .addField('love', 'Calcula el amor entre vos y la persona que menciones')
    .addField('rps', 'Juega piedra papel o tijera contra el bot')
    .setColor("RANDOM")
    message.author.send(embed)

    const embed2 = new Discord.MessageEmbed()
    .setTitle('**COMANDOS DE ROMEOBOT NSFW**')
    .addField('4k', 'Porno en 4k')
    .addField('boobs', 'Porno de pechos')
    .addField('ass', 'Porno de culos')
    .addField('porngif', 'Porno en GIF')
    .addField('pussy', 'Porno de pussys')
    .addField('anal', 'Porno anal')
    .addField('Hentai', 'Hentai para otakus')
    .addField('Hentaiass', 'Hentai de culos para otakus')
    .addField('solo', 'No te voy a mentir, nose que hace')
    .addField('wallpaperxxx', 'Fondos de pantallas xxx')
    .setColor("RANDOM")
    message.author.send(embed2)

    const embed3 = new Discord.MessageEmbed()
    .setTitle('**COMANDOS DE ROMEOBOT ROLEPLAY**')
    .addField('plantar', 'Planta tus semillas de marihuana (recuerda regarlas)')
    .addField('agua', 'Riega tus semillas de marihuana')
    .addField('recoger', 'Recoge tu planta de marihuana cuando ya este germinada')
    .setColor("RANDOM")
    message.author.send(embed3)
 }

}