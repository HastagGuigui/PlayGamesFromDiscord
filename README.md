## PlayGamesFromDiscord
Share the controller between all your Discord friends and make some funny gaming sessions!

# How does it works?
Magic! *laughs*
No seriously, it works with the Node.JS dependencies "node-key-sender" and "discord.js" (yes, only 2 major ones), The first allows you to use your keyboard, and the second connects to Discord (obviously)
After doing some configuration in the config.js file, you're ready to use it! Just run it using node (no, pm2 doesn't work as intended)

# How do I setup it?
The config.json is there, so that you don't have to modify all the code (lol), and it's easy to modify!
It only works with a keyboard so map your ingame controls to those in config.json.
config.json:
|key|value|
|--|--|
|token|The token of your discord bot.|
|keymapcontrols|This is to map your controls to those of a regular controller: <br/> - The value on the left is the controller button (not the one that you should send by discord <br/> - The value on the right is the keyboard key that is pressed each time you call this button on discord|
|globalDelay|It's to set the delay a key will be pressed (in milliseconds)|
|pressDelay|A delay before the key is pressed (in milliseconds)|
|delayBetweenPresses|The delay before you send another key (in milliseconds)|
|prefix|The bot's prefix|

# Help, I got an error!
~~I knew I couldn't be that good!~~ 
Uh, uh, well there's the issue tab, and there's my discord account: @_Guigui [YT]#2933
This is still in developpement, and I still look at the suggestions!
