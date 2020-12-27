const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("mega-dtbs");
require('dotenv').config();
const nekoclient = require('nekos.life');
const neko = new nekoclient();
const ms = require('ms')
const snekfetch = require('snekfetch');
const YouTube = require('youtube-node');
let youTube = new YouTube();

const { Client, Collection, Guild } = require("discord.js");
const keepAlive = require('./server.js')
const Monitor = require('ping-monitor');
 
keepAlive();
const monitor = new Monitor({
    website: 'https://host.agustngonzlez.repl.co',
    title: 'Secundario',
    interval: 15 // minutes
});

///////MONITOR/////////

monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`) );
monitor.on('error', (error) => console.log(error));

//////BOT//////////

const fs = require('fs')

let prefix_db = new db.crearDB("prefixes");

///////HANDLER///////

let { readdirSync } = require('fs'); 

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command)
}


///////PRESENCIA///////

function presence() {
  client.user.setPresence({
    status: "online",
    activity: {
      name: "DarknessRP",
      type: "WATCHING"
    }
  })
}
client.on("ready", () => {
  console.log("Presenciandoo on");
  presence();
});

///////COMANDOS///////

client.on('message', async message => {

  let prefix;
  if(prefix_db.tiene(`${message.guild.id}`)) {
    prefix = await prefix_db.obtener(`${message.guild.id}`)
  }else{
    prefix = "e!"
  }

  let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`); //Este es el RegExp que utilizaremos

 if (message.content.match(RegMention)) { 
    message.channel.send(`Mi prefix es ${prefix}`)
   }

  if (message.content.startsWith("Candela")) {
    message.channel.send("YO NO TE PIDO PACK, a menos que quieras")
  }

  if (message.content.toLowerCase().includes('gracias')) {
    message.channel.send("De nada, ndeah re metido")
  }
  
  if (message.content.startsWith("...")) {
    message.channel.send("que silencio aqui")
  }

  if (message.content.startsWith("Follamos?")) {
    message.channel.send("Ejem, cuando quieras mi amor :heart:")
  }

  if (message.content.startsWith("Hot?")) {
    message.channel.send("Contigo siempre bebe")
  }

  if (message.content.startsWith("Porque")) {
    message.channel.send("Por que si")
  }
  
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  let usuario = message.mentions.members.first() || message.member;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "candela") {

    message.channel.send(":heart_eyes: Mi amor :heart_eyes:")

  } 

  if (command === "zai") {
    message.channel.send("Cacho simp que es ese, pero lo amamos :heart:")
  }

  /////YOUTUBE////

  if (command === "youtube") {
    const YouTube = require('youtube-node');
    let youTube = new YouTube();

    youTube.setKey('AIzaSyDz1pc_66TrDQgUKr1UpC1-bEItd-2HI4w'); //Acá ponen su API-KEY

    let nombreyt = args.join(" ") //Definimos: nombreyt
    if(!nombreyt) return  message.channel.send('Debe proporcionar algo para buscar'); //Si no tiene un nombre de vídeo en yt, retornar.

    message.channel.send(':arrows_counterclockwise: Buscando..!') 
    .then(m => {
      youTube.search(args.join(' '), 2, function(err, result){
        if(err){
            return console.log(err); 

        }
        if(result.items[0]["id"].videoId == undefined){
            return message.channel.send('¡No se han encontrado resultados!'); //Si el vídeo no existe, retornar

        } else{
            let link = `https://www.youtube.com/watch?v=${result.items[0]["id"].videoId}`
            m.edit(link); //Editar el mensaje ''Búscando'' por el link del vídeo

        }
    })
 })
 }
  
  if (command === "xmas") {
    const embedx = new Discord.MessageEmbed()
    .addField('Felices fiestas 🎉', 'Les desamos desde el unico desarrollador')
    .setImage('https://cdn.discordapp.com/attachments/750842235951513674/791857263249588244/desconocido.jpeg')
    .setColor("RANDOM")
    
   message.channel.send(embedx)
  }

  if (command === "te-quiero") {

    message.channel.send("Yo a vos bb:heart:")

  }

  if (command === "menfis") {
    message.channel.send("Amor de mi vida")
  }
  
  if (command === "ig") {
    message.channel.send("de la minita pls :wink:")
  }

  if (command === "hola") {
    message.channel.send("Hola mi amor :heart:")
  }

  /////CAMBIAR PREFIX/////

  if (command === "setprefix") {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No podes cambiar el prefix :wink:")
    if(!args[0]) return message.channel.send("Que prefix queres?")
    prefix_db.agregar(`${message.guild.id}`, args[0])

     const embed = new Discord.MessageEmbed()
     .addField('Nuevo prefix!', 'Ahora el prefix es '+ args[0])
     .setColor("RANDOM")

     message.channel.send({ embed });

  }

  ///


  ///////HANDLER///////

  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
  if (cmd) {
    cmd.execute(client, message, args)
  }

});



console.log('NO ES MI VIEJA!')

client.login(process.env.TOKEN)