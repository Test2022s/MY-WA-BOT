const RAVANA = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "type some word after command\n🗡🗡"
const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'nikash', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/cc76f880d8583b8d2bfe0.jpg";
    r_text[1] = "https://telegra.ph/file/cc76f880d8583b8d2bfe0.jpg";
    r_text[2] = "https://telegra.ph/file/cc76f880d8583b8d2bfe0.jpg";
    r_text[3] = "https://telegra.ph/file/cc76f880d8583b8d2bfe0.jpg";
    r_text[4] = "https://telegra.ph/file/cc76f880d8583b8d2bfe0.jpg";
    r_text[5] = "https://telegra.ph/file/cc76f880d8583b8d2bfe0.jpg";
    
        
     var i = Math.floor(6*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━━💮RAVANA RNA LOGO PACK💮━━━━━⛦


╚═════════════RAVANA🐱‍🏍(.)



💮විධානය➜ .rnacb 

💮විධානය➜ .rnatt

💮විධානය➜ .rnarip

💮විධානය➜ .rnaht

💮විධානය➜ .rnajl

💮විධානය➜ .rnadl

💮විධානය➜ .rnawt

💮විධානය➜ .rnaln

💮විධානය➜ .rnapl

💮විධානය➜ .rnacp

💮විධානය➜ .rnach

💮විධානය➜ .rnawd

💮විධානය➜ .rnatr

💮විධානය➜ .rnain

💮විධානය➜ .rnarv



╚═══════════════════════════════

═════RAVANA═════
▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣

`}) 

}));



    RAVANA.addCommand({ pattern: 'rnacb ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/beautiful?img1=${encodeURIComponent(match[1])}&apikey=ChLCG1FaXibNn1B`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    RAVANA.addCommand({ pattern: 'rnatt ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/tatoo?img=${encodeURIComponent(match[1])}&apikey=ChLCG1FaXibNn1B`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    RAVANA.addCommand({ pattern: 'rnarip ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/rip?img=${encodeURIComponent(match[1])}&apikey=ChLCG1FaXibNn1B`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    RAVANA.addCommand({ pattern: 'rnaht ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/hitler?img=${encodeURIComponent(match[1])}&apikey=ChLCG1FaXibNn1B`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    RAVANA.addCommand({ pattern: 'rnajl ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/jail?img=${encodeURIComponent(match[1])}&apikey=ChLCG1FaXibNn1B`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    RAVANA.addCommand({ pattern: 'rnadl ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/delete?img=${encodeURIComponent(match[1])}&apikey=ChLCG1FaXibNn1B`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));
    RAVANA.addCommand({ pattern: 'rnawt ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/what?img=${encodeURIComponent(match[1])}&apikey=ChLCG1FaXibNn1B`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));
    RAVANA.addCommand({ pattern: 'rnaln ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/linus?img=${encodeURIComponent(match[1])}&apikey=ChLCG1FaXibNn1B`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    RAVANA.addCommand({ pattern: 'rnapl ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/police?img=${encodeURIComponent(match[1])}&apikey=ChLCG1FaXibNn1B`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    RAVANA.addCommand({ pattern: 'rnacp ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/captcha?img=${encodeURIComponent(match[1])}&apikey=ChLCG1FaXibNn1B`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    RAVANA.addCommand({ pattern: 'rnach ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/crush?img=${encodeURIComponent(match[1])}&apikey=ChLCG1FaXibNn1B`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    RAVANA.addCommand({ pattern: 'rnawd ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/wanted?img=${encodeURIComponent(match[1])}&apikey=ChLCG1FaXibNn1B`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

   RAVANA.addCommand({ pattern: 'rnatr ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://dapuhy-api.herokuapp.com/api/canvas/triggered?img=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }));


    RAVANA.addCommand({ pattern: 'rnain ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/invert?img=${encodeURIComponent(match[1])}&apikey=ChLCG1FaXibNn1B`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    RAVANA.addCommand({ pattern: 'rnarv ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/removebg?img=${encodeURIComponent(match[1])}&apikey=ChLCG1FaXibNn1B`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

