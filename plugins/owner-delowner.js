let handler = async (m, { conn, text }) => {
	let who = m.quoted ? m.quoted.sender : (m.mentionedJid && m.mentionedJid[0]) ? m.mentionedJid[0] : text ? (text.replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
	if (!who) throw `tag atau ketik nomornya!`
	who = who.split('@')[0]
	let owners = global.db.data.store.owner
	if (!owners.map(([number]) => number).map(v => v).includes(who)) return m.reply(`[ ! ] User tidak ada dalam list owner.`)
	global.db.data.store.owner = owners.filter(([v]) => !v.includes(who))
	await conn.sendMessage(m.chat, { text: `Menghapus @${(who || '').replace(/@s\.whatsapp\.net/g, '')} dari list *owner*.`, mentions: [who + '@s.whatsapp.net'] }, { quoted: m })
}

handler.menugroup = ['delowner']
handler.tagsgroup = ['owner']
handler.command = /^(del(ete)?owner)$/i

handler.rowner = true

export default handler

