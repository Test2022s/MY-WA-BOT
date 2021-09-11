const RAVANA = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

RAVANA.addCommand({ pattern: 'rapk ?(.*)', fromMe: true, disc: 'Download Mediafire Apk\nplease use only app link'}, async (message, match) => {
        const ratik = match[1]
        if (!ratik) return await message.client.sendMessage(message.jid,'need mediafire link',MessageType.text);
         await message.client.sendMessage(message.jid,'downloading your apk',MessageType.text)
        await axios.get(`https://docs-jojo.herokuapp.com/api/mediafire?url=${ratik}}`).then(async (response) => {
          const {
              result,
            } = response.data
            const apkravana = await axios.get(result, {responseType: 'arraybuffer'})
            await message.client.sendMessage(message.jid,'uploading your apk',MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(apkravana.data), MessageType.document, {mimetype: Mimetype.apk, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,'cant find 🥴🥴🥴',MessageType.text, {quoted: message.data}),
        )});
