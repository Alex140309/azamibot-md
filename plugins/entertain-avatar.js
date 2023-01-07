import fetch from 'node-fetch'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	if (!text) throw `*Format :* ${usedPrefix + command} uuid\n\n*Example :*\n${usedPrefix + command} 853c80ef3c3749fdaa49938b674adae6`
	if (text.includes('http://') || text.includes('https://')) {
		let fimg = await fetch(args[0])
		let fimgb = Buffer.from(await fimg.arrayBuffer())
        await conn.sendMessage(m.chat, { image: fimgb, caption: `${args[1] ? args.slice(1).join(' ') : '_crafatar.com_'}` }, { quoted: m })
	} else {
		const sections = [
			{
				title: `━ ━ ━ ━ 『 AVATAR LIST 』 ━ ━ ━ ━`,
				rows: [
					{title: '⚡ Avatar', rowId: `${usedPrefix}avatarget https://crafatar.com/avatars/${text} ⚡ [ Avatar ]`},
					{title: '⌛ Render', rowId: `${usedPrefix}avatarget https://crafatar.com/renders/head/${text} ⌛ [ Render ]`},
					{title: '👼🏻 Body', rowId: `${usedPrefix}avatarget https://crafatar.com/renders/body/${text} 👼🏻 [ Body ]`},
					{title: '💫 Skin', rowId: `${usedPrefix}avatarget https://crafatar.com/skins/${text} 💫 [ Skin ]`},
					{title: '🗺 Cape', rowId: `${usedPrefix}avatarget https://crafatar.com/capes/${text} 🗺 [ Cape ]`}
				]
			}
		]
		const listMessage = {
			text: `━ ━ 『 *CRAFATAR* 』 ━ ━\n\n*Request From :* ${conn.getName(m.sender)}\n\n*uuid result :* ${args[0]}`,
			footer: packname + ' - ' + author,
			//title: `⎔───「 ${packname} 」───⎔`,
			buttonText: `List Crafatar 🎫`,
			sections
		}
		await conn.sendMessage(m.chat, listMessage, {quoted: ftrol})
	}
}

handler.help = ['avatar <uuid>']
handler.tags = ['entertainment']
handler.command = /^(avatar(get)?)$/i

handler.premium = true
handler.limit = true

export default handler