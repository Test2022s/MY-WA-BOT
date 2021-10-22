let RAVANA = require('../events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let axios = require('axios');
let Config = require('../config');

let GD = "DOWNLOAD APK PLAY STORE"
let APD = "DOWNLOADING..."
let APN = "NEED LINK"
let APU = "*UPLOADING...*"
let APF = "*⚙️CAN'T FIND☹️*"

let dt = Config.WORKTYPE == 'public' ? false : true


 RAVANA.addCommand({ pattern: 'papk ?(.*)', fromMe: dt, desc: GD,  deleteCommand: false}, async (message, match) => {

    
        if (match[1] === '') return await message.client.sendMessage(message.jid,APN,MessageType.text)
        await message.client.sendMessage(message.jid,APD,MessageType.text);
        await axios
          .get('https://api.lolhuman.xyz/api/apkdownloader?apikey=411776707c9e94db8b656048&package=${match[1]}')
          .then(async (response) => {
            let {
                apk_link,
                apk_name,
            } = response.data
    
            let hacker = await axios.get(apk_link, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,APU,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(hacker.data), MessageType.document, {filename: apk_name, mimetype: 'application/vnd.android.package-archive', quoted: message.data})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,APF,MessageType.text, {quoted: message.data}),
        )
      },
    )
    
    //filename: apk_name, mimetype: 'application/vnd.android.package-archive',
