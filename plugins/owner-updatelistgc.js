let handler = async (m) => {
	let gc
	try { gc = await conn.groupFetchAllParticipating() }
	catch (e) { return m.reply('[!] rate-overlimit.') }
	let datas = global.db.data.datas
	datas.listgc = []
	for (let x of Object.keys(gc)) { datas.listgc.push(x) }
	m.reply('Berhasil update list grup.')
	console.log(global.db.data.datas.listgc)
}

handler.menuowner = ['updatelistgc']
handler.tagsowner = ['owner']
handler.command = /^(updatelist(gro?up|gc))$/i

handler.owner = true

export default handler