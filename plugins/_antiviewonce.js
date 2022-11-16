export async function before(m) {
	if (m.isBaileys && m.fromMe) return !0
	if (!m.isGroup) return !1
	if ((m.hydratedMessage || m.buttons || m.hydratedFourRowTemplate) !== undefined) return !0
	if (m.isCommand) return !0
	if (m.mtype == 'templateMessage') return !0
	if (m.message) {
		let chat = global.db.data.chats[m.chat]
		if (chat.viewonce && m.message.viewOnceMessage) {
			try {
				let buffer = await m.download()
				let media = m.mediaMessage[m.mediaType]
				let i = `[ ANTIVIEWONCE AKTIF ]\n\n👾 *Sender* : @${m.sender.split`@`[0]}${media.caption ? `\n\n*Caption :*\n${media.caption}` : ''}`
				let j = [m.sender]
				let k = media.caption ? [...media.caption.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
				j = [...j, ...k]
				if (/video/.test(media.mimetype)) {
					await this.sendMessage(m.chat, { video: buffer, caption: i, mentions: j }, { quoted: fkontak })
				} else {
					await this.sendMessage(m.chat, { image: buffer, caption: i, mentions: j }, { quoted: fkontak })
				}
			} catch (e) {
				console.log(e)
			}
		}
	}
	return !0
}