import { isNumber, someincludes } from '../lib/others.js'

const cooldown = 60000

let handler = async (m, { conn, participants, usedPrefix, command, args, isOwner, isPrems, isAdmin }) => {
	let admins = []
	for (let i of participants) {
		i.admin === "admin" ? admins.push(i.id.split('@')[0]) : ''
	}
	if ((!m.quoted && !args[1]) || (m.quoted && !args[0])) return m.reply(`Format : ${usedPrefix + command} <timer> <@tag/quote>\n1 = 1 menit\n5 = 5 menit ... dst.\n\nContoh : *${usedPrefix + command} 10 @Alan*`)
	const total = Math.floor(isNumber(args[0]) ? Math.min(Math.max(parseInt(args[0]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
	let who
	if (m.isGroup) who = args[1] ? args[1].replace(/[^0-9]/g, '')+ '@s.whatsapp.net' : m.quoted ? m.quoted.sender : m.mentionedJid ? m.mentionedJid[0] : ''
	else who = m.chat
	if (!who) throw 'Tag salah satu lah'
	const data = [...global.db.data.datas.rowner.filter(([id, isCreator]) => id && isCreator), ...global.db.data.datas.owner.filter(([id, isCreator]) => id && isCreator)]
	const we = data.map(([id]) => id).toString()
	if ((who.includes(we) || who.includes(m.conn.user.jid))) throw `Gaboleh gitu ${who.includes(conn.user.jid) ? 'ama bot ' : ''}:v`
	if (isOwner || isAdmin || isPrems) {
		if (someincludes(admins, who) && !isOwner) throw `Gaboleh gitu sesama admin :v`
		if (total > 200 && !isPrems) throw `_... >> not premium ..._\n[!] Maksimal ${command} : 200 menit.`
		if (total > 400 && !isOwner) throw `[!] Maksimal ${command} : 400 menit.`
		let users = global.db.data.users[who]
	    if (users.permaban) return m.reply(`[!] Tidak perlu *${command}* karena sudah di *ban*`)
		if (users.banned == true) throw `Dia sudah di *mute* sebelumnya.`
		try {
			users.banned = true
		    users.lastbanned = new Date * 1
		    users.bannedcd = cooldown * total
		    users.spamcount = 0
			await conn.sendMessage(m.chat, { text: `@${(who || '').replace(/@s\.whatsapp\.net/g, '')} di *mute* selama ${total} menit.`, mentions: [who] }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.reply(`User tidak ada dalam database.`)
		}
	} else {
		m.reply(`*「ADMIN GROUP ONLY」*`)
	}
}

handler.menugroup = ['diem @tag <timer>']
handler.tagsgroup = ['group']
handler.command = /^(di(e|a)m|silent)$/i

export default handler