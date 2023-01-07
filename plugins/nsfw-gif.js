import fetch from 'node-fetch'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

let handler = async (m, { conn, usedPrefix, command }) => {
    let chat = global.db.data.chats[m.chat]
    if (!chat.nsfw && m.isGroup) throw `[ *NSFW GAK AKTIF* ]`
    const hmtai = require('hmtai')
    if (command == 'nsfwgif' || command == 'gifnsfw') {
        try {
            let res = await fetch(`https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${global.api}&img=${hmtai.nsfw.gif()}`)
            //if (!res.ok) throw `Fitur Error!`
            let json = await res.json()
            //if (!json.result) throw 'Error!'
            conn.sendButton(m.chat, `━ ━ ━ ━ [ *${command}* ] ━ ━ ━ ━`, packname + ' - ' + author, json.result, [[`⧑ next ${command} ⧑`, `${usedPrefix + command}`]], m)
        } catch (e) {
            console.log(e)
            m.reply(`Terjadi kesalahan, coba lagi nanti.`)
        }
    }
}

handler.menunsfw = ['gifnsfw','nsfwgif']
handler.tagsnsfw = ['randommp4']
handler.command = /^(nsfwgif|gifnsfw)$/i

handler.premium = true
handler.limit = true

export default handler