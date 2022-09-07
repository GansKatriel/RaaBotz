let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/1fe5271054f65f890aa7a.jpg',
`Hi Kak @${m.sender.split('@')[0]} 

◪ 📮 *SCRIPT BOT*
│ *Script base:* 
│ ╰ FAMILY MD 
│ *Script recode by me:* 
│ ╰ Private deck🐤
╰──────────═┅═──────────
`,`📍 *N o t e :* 
• Jangan lupa minta izin owner sebelum menggunakan scriptnya kak!
• follow github owner RielTod1!

Official By @${'0'.split('@')[0]}
Powered By @${`${global.owner[0]}`.split('@')[0]}`, 'Pemilik Bot🐤', '#owner')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
