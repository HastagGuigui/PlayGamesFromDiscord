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

# Oh and, what are the available commands?
I was wondering if anybody's going to ask... Anyways, here they are! (prefix will be shown as "!")
!press <key> [number of times] is going to... well... press a key a specific number of times. (alias: !p)
!hold <key> [delay in seconds] will hold a key for a specific delay in seconds, and it works with decimals. (alias: !h)
  
# And the keys?
Well:
|Available key|Corresponding config function|
|--|--|
|haut (up in french)|DPadUp|
|up|JoystickUp (is most likely an alternative to haut if you have not a lot of buttons to map)|
|gauche (left in french)|DPadLeft|
|left|JoystickLeft|
|droite (right in french)|DPadRight|
|right|JoystickRight|
|bas (down in french)|DPadDown|
|down|JoystickDown|
|a|A|
|b|B|
|x|X|
|y|Y|
|l|L|
|r|R|
|zl|ZL|
|zr|ZR|
|start|Start|
|select|Select|

Whoo. I really need to add custom keys.
