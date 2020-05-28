const Discord = require('discord.js');
const ks = require('node-key-sender');
const client = new Discord.Client();
const config = require('./config.json')

client.on('ready', () => {
    console.log("o u i")
});

client.on('message', message => {
    var prefix = config.prefix
    if (!message.content.startsWith(prefix)) return;
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();
    switch (cmd) {
        case "p":
            var plaque_de_pression = args[0]
            ks.setOption('globalDelayPressMillisec', config.globalDelay);
            ks.setOption('startDelayMillisec', config.pressDelay);
            ks.setOption('startDelayMillisec', config.delayBetweenPresses);
            if (args[0]){
                console.log("[" + args[0].toUpperCase() + " x " + args[1] + "] par " + message.author.tag)
            }
            if (args[1]) {
                if (args[1] >= 100) args[1] = 100
                let i;
                for (i = 0; i < parseInt(args[1]); i++) {
                    sendKeyFromDiscord(plaque_de_pression, i, parseInt(args[1]))
                }
            }else{
                sendKeyFromDiscord(plaque_de_pression, 1, 1)
            }
            function sendKeyFromDiscord(x, i, limit) {
                switch (x) {
                    case "haut":
                        ks.sendKey(config.keymapcontrols.DPadUp);
                        break
                    case "up":
                        ks.sendKey(config.keymapcontrols.JoystickUp);
                        break;
    
                    case "gauche":
                        ks.sendKey(config.keymapcontrols.DPadLeft);
                        break
                    case "left":
                        ks.sendKey(config.keymapcontrols.JoystickLeft);
                        break;
    
                    case "droite":
                        ks.sendKey(config.keymapcontrols.DPadRight);
                        break
                    case "right":
                        ks.sendKey(config.keymapcontrols.JoystickRight);
                        break;
                    
                    case "bas":
                        ks.sendKey(config.keymapcontrols.DPadDown);
                        break
                    case "down":
                        ks.sendKey(config.keymapcontrols.JoystickDown);
                        break;
    
                        
                    case "a":
                        ks.sendKey(config.keymapcontrols.A);
                        break
                    case "b":
                        ks.sendKey(config.keymapcontrols.B);
                        break;
                    case "x":
                        ks.sendKey(config.keymapcontrols.X);
                        break
                    case "y":
                        ks.sendKey(config.keymapcontrols.Y);
                        break;
    
                    
                    case "l":
                        ks.sendKey(config.keymapcontrols.L);
                        break
                    case "r":
                        ks.sendKey(config.keymapcontrols.R);
                        break;
                    case "zl":
                        ks.sendKey(config.keymapcontrols.ZL);
                        break
                    case "zr":
                        ks.sendKey(config.keymapcontrols.ZR);
                        break;
    
                    
                    case "start":
                        ks.sendKey(config.keymapcontrols.Start);
                        break
                    case "select":
                        ks.sendKey(config.keymapcontrols.Select);
                        break;
    
    
                    default:
                        var helpembed = new Discord.MessageEmbed()
                            .setTitle("Menu D'aide")
                            .setDescription("Syntaxe: "+ config.prefix +".p [touche] <nombre de fois>")
                            .addField("Touches valides:", "Joystick Gauche: \n -up \n -down \n -left \n -right \n \n Pad directionnel: \n -haut \n -bas \n -gauche \n -droite \n \n Boutons de base: \n -a \n -b \n -x \n -y \n -start \n -select \n -l \n -r \n -zl \n -zr")
                            .setFooter("[obligatoire] <optionel>")
                        message.channel.send(helpembed);
                        i = limit;
                        break;
            }
            }
            break;
    
        default:
            break;
    }
})

client.login(config.token)