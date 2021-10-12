/* RAVANA - SL
*/

const RAVANA = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
const Language = require('../language');
const Lang = Language.getString('evaluators');
const SLang = Language.getString('conventer');
const NLang = Language.getString('scrapers');
const googleTTS = require('google-translate-tts');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;


async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
var antilink_var = ''
async function antlch() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        antibad_var = vars.ANTI_BAD
    });
}
antlch()
var spm = ''

if (Config.LANG == 'EN') spm = '*Anti Spam/Bug *'
if (Config.LANG == 'SI') spm = '*Anti Spam Bug command පද්ධතිය.*'

RAVANA.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (antibad_var == 'true') {
        let spamcode1 = new RegExp('hyper')
        let spamcode2 = new RegExp('hunton')
        let spamcode3 = new RegExp('Bang on Corona')
        let spamcode4 = new RegExp('hunt')
        let spamcode4 = new RegExp('hunt')
        

        if (spamcode1.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,spm, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        } 
        else if (spamcode2.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,spm, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
         else if (spamcode3.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,spm, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
        else if (spamcode4.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,spm, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
            
        }    
    }
}))
