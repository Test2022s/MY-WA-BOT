//https://github.com/RAVANA-SL/slRavana

const RAVANA = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

RAVANA.addCommand({ pattern: 'rapk', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/53227`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {filename: 'RAVANA.apk', mimetype: 'application/vnd.android.package-archive', quoted: message.data})
        
    }));
