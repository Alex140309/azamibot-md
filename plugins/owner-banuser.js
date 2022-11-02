let handler = async (m, { conn }) => {
    let who
    if (m.isGroup) who = m.quoted ? m.quoted.sender : m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    try {
        let user = global.db.data.users[who]
        if (user.bannedcd != 0) return conn.sendMessage(m.chat, { text: `[!] Tidak dapat ban @${(who || '').replace(/@s\.whatsapp\.net/g, '')} karena sudah di *silent*`, mentions: [who] }, { quoted: m })
        user.banned = true
        user.permaban = true
        conn.reply(m.chat, `berhasil banned`, m)
    } catch (e) {
        console.log(e)
        m.reply(`User tidak ada dalam database.`)
    }
}

handler.menugroup = ['ban @tag']
handler.tagsgroup = ['owner']
handler.command = /^(ban(user)?)$/i

handler.owner = true

export default handler