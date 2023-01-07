let handler = async (m, { text }) => {
	let id
	if (!text) id = m.chat
	else id = `${text.includes('@') ? text : text + '@g.us'}`
	try {
		if (!text && !m.isGroup) return m.reply(`*「GROUP ONLY」*`)
		let chat = global.db.data.chats[id]
		chat.isBanned = true
		chat.permaBan = true
		chat.spamcount = 0
		m.reply('Bot dalam mode nyimak.')
	} catch (e) {
		console.log(e)
		m.reply(`ID Grup tidak ada dalam database.`)
	}
}

handler.menuowner = ['banchat']
handler.tagsowner = ['owner']
handler.command = /^(banchat)$/i

handler.owner = true

export default handler