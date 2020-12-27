const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "poll",
  alias: ["encuesta"],

async execute (client, message, args){
 
 const test = args.join(" ").split(" | "); //Definimos test como un argumento, usamos un .split(" | ") para tener sepasada la pregunta de las opciones
        const [pregunta, opcion1, opcion2] = test; //Definimos que "Pregunta, opcion1, opcion2" equivale a test, el .split de test fue para separar estas definiciones
        
        let [react1, react2] = ["1??", "2??"] // Definimos que react1 y react2 equivalen a los emojis "1??", "2??"
        //Puedes cambiar los emojis que definimos como react1 y react2, si deseas poner un emoji de tu servidor solo pon la id del emoji.


        if(!pregunta) return message.channel.send("Ingrese una pregunta") //Si no escribe la pregunta de la encuesta enviara este mensaje

        if(!opcion1) return message.channel.send("Necesitas ingresar dos opciones") //Si no escribe lo que significa la primera opcion retorna esto

        if(!opcion2) return message.channel.send("Necesitas ingresar dos opciones") //Si no escribe lo que significa la segunda opcion retorna esto




      const encuesta = new Discord.MessageEmbed() //Creamos el embed con el nombre encuesta

      .setTitle(`${pregunta} \n`)
      .addField(`${react1}`, `${opcion1}`)
      .addField(`${react2}`, `${opcion2}`)
      .setFooter(`Encuesta realizada por: ${message.author.tag}`)
      .setColor("RANDOM")

        message.channel.send(encuesta).then(async msg => { //Enviamos el embed llamado encuesta
            await msg.react(`${react1}`), await msg.react(`${react2}`) //añadimos las reacciones al embed enviado
        
        })

//Recuerda no c&p
//Si haces c&p deja tu like.
  
 }
 
}