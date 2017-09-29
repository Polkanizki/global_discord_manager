const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

//Variabili sull'orario
var data = new Date();
var ore = data.getHours();
var minuti = data.getMinutes();
var giorno = data.getDate();
var giornosettimana = data.getDay();
var giornisettimana = ["Domenica", "Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato"];
var mese = data.getMonth();
var mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
var anno = data.getFullYear();
var admin = '187657725407264768';

client.on('ready', () => {
    console.log(`${client.user.tag} loggato su ${client.guilds.size} server con ${client.channels.size} canali e ${client.users.size} utenti totali`);
    client.user.setPresence({ game: {
        name: `Manage Global Discord ~Polkanizki`, type: 0
    }});
});

client.on('reconnecting', () => {
    console.log("Errore di connessione. Riconnessione in corso...");
});

client.on('resume', () => {
    console.log("Riconnessione effettuata");
});

client.on('message', message => {
	if(!message.guild) return;
	if(message.guild.id == '359476597440512010') {
		if(message.content == '!italian') {
			let ruolo = message.guild.roles.find("name", "Italian");
			if(message.member.roles.has(ruolo.id)) {
				message.reply("You already have this role")
					.then(message => message.delete('10000'))
				message.delete('7000');
			} else {
				message.member.addRole('359653213621846016');
				message.reply("You've been added the role **Italian**. **YAY!**")
					.then(message => message.delete('10000'))
				message.delete('7000');
			}
		} else if(message.content === '!english') {
			let ruolo = message.guild.roles.find("name", "English");
			if(message.member.roles.has(ruolo.id)) {
				message.reply("You already have this role")
					.then(message => message.delete('10000'))
				message.delete('7000');
			} else {
				message.member.addRole('359653426306744321');
				message.reply("You've been added the role **English**. **YAY!**")
					.then(message => message.delete('10000'))
				message.delete('7000');
			}
		}
	}
});

client.on('message', message => {
	if (!message.guild) return;
	if (message.guild.id == '359476597440512010') {
		if (message.content.startsWith('!spam')) {
			var spam = message.content.split('-');
			var server = spam[1].split(';');
			var nome = server[0];
			var tipo = server[1];
			var descrizione = server[2];
			var membri = server[4];
			var link = server[3];
			if (message.channel.id == '359658704670425098' || message.channel.id == '359663809180467200') {
				message.delete();
				message.channel.send({embed: {
					color: 3447003,
					author: {
						name: message.author.username,
						icon_url: message.author.avatarURL
					},
					title: `${nome} ← Clicca per entrare`,
					url: `${link}`,
					fields: [{
						name: "Argomento server",
						value: `${tipo}`
					},
					{
						name: "Descrizione",
						value: `${descrizione}`,
						inline: true
					},
					{
						name: "Utenza attuale",
						value: `${membri} membri`,
						inline: true
					}
					],
					footer: {
						icon_url: 'https://cdn.discordapp.com/attachments/314060737993768961/360086190436646914/globaldiscordlogo.png',
						text: `Global Discord | ${ore}:${minuti} del giorno ${giorno} ${mesi[mese]} ${anno}`
					}
				}});
			} else if (message.channel.id == '359658782751457290' || message.channel.id == '359663809180467200') {
				message.delete();
				message.channel.send({embed: {
					color: 3447003,
					author: {
						name: message.author.username,
						icon_url: message.author.avatarURL
					},
					title: `${nome} ← Click to join`,
					url: `${link}`,
					fields: [{
						name: "Server argument",
						value: `${tipo}`
					},
					{
						name: "Description",
						value: `${descrizione}`,
						inline: true
					},
					{
						name: "Actually members",
						value: `${membri} members`,
						inline: true
					}
					],
					timestamp: new Date(),
					footer: {
						icon_url: 'https://cdn.discordapp.com/attachments/314060737993768961/360086190436646914/globaldiscordlogo.png',
						text: 'Global Discord'
					}
				}});
			}
		} else {
			message.delete();
		}
	}
});

//2° metodo | Work In Progress
/*client.on('guildCreate', guild => {
	if(message.guild.id != '359476597440512010') {
		guild.owner.send('Prova');
		var invito = guild.defaultChannel.createInvite();
		var membri = guild.members;
		var nome = guild.name;
		var dataCreazione = guild.createdTimestamp;
		
	}
});*/

//Notifica per categoria | Work In Progress
/*client.on('message', message => {
	if(server[1] == 'Community') {
		let notifica = message.guild.roles.find("name", "Community");
		if()
	}
});*/