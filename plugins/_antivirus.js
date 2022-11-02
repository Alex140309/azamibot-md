export async function before(m, { conn, isAdmin, isBotAdmin }) {
	if (m.isBaileys && m.fromMe) return !0
	if (m.isGroup) {
		let chat = global.db.data.chats[m.chat]
		if (m.text.length > 40000 && chat.antivirus && isBotAdmin) {
			try {
				await this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
				await this.updateBlockStatus(m.sender, 'block')
				await this.sendMessage(m.chat, { text: `@${(m.sender || '').replace(/@s\.whatsapp\.net/g, '')} *terdeteksi* mengirim Virus !`, mentions: [m.sender] }, { quoted: fkontak })
				await this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender } })
			} catch (e) {
				console.log(e)
			}
		}
	} else {
		if (m.text.length > 40000) {
			try {
				await this.updateBlockStatus(m.sender, 'block')
			} catch (e) {
				console.log(e)
			}
		}
	}
	return !0
}