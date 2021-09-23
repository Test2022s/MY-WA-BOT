const RAVANA = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

RAVANA.addCommand({pattern: 'khunter', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/fb0e77def483d7a80c6a0.jpg";
    r_text[1] = "https://telegra.ph/file/fb0e77def483d7a80c6a0.jpg";
    r_text[2] = "https://telegra.ph/file/fb0e77def483d7a80c6a0.jpg";
    r_text[3] = "https://telegra.ph/file/fb0e77def483d7a80c6a0.jpg";
    r_text[4] = "https://telegra.ph/file/fb0e77def483d7a80c6a0.jpg";
    r_text[5] = "https://telegra.ph/file/fb0e77def483d7a80c6a0.jpg";
    
        
     var i = Math.floor(6*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Knowledge Hunter*
    |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|
    | kh1. Animals. |
    |               |
    | kh2. Places.  |
    |               |
    | kh3. Wonderful|
    |               |
    |_______________|
   `}) 

}));
