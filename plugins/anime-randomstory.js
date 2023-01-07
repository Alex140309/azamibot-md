import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
	try {
		let res = await fetch(`https://api.akuari.my.id/anime/storyanime`)
		let fimg = await fetch(res.url)
		let fimgb = Buffer.from(await fimg.arrayBuffer())
		if (Buffer.byteLength(fimgb) < 100000) throw new e()
		conn.sendButton(m.chat, `_Random Story Anime_`, packname + ' - ' + author, fimgb, [[`⧑ next ${command} ⧑`, `${usedPrefix + command}`]], m)
	} catch (e) {
		console.log(e)
		try {
			conn.sendButton(m.chat, `_Random Story Anime_`, packname + ' - ' + author, dir[Math.floor(Math.random() * dir.length)], [[`⧑ next ${command} ⧑`, `${usedPrefix + command}`]], m)
		} catch (e) {
			console.log(e)
			m.reply(`Terjadi kesalahan, coba lagi nanti.`)
		}
	}
}

handler.menuanime = ['storyanime']
handler.tagsanime = ['search']
handler.command = /^(stor(i|y)a?nime|a?nimestor(i|y))$/i

handler.premium = true
handler.limit = true

export default handler

const dir = [
'https://telegra.ph/file/0d4fb93951c620aacb229.mp4',
'https://g.top4top.io/m_2391c90iu1.mp4',
'https://h.top4top.io/m_2391mfvy22.mp4',
'https://i.top4top.io/m_2391iwmee3.mp4',
'https://j.top4top.io/m_23915x5204.mp4',
'https://l.top4top.io/m_2391e795x5.mp4',
'https://a.top4top.io/m_2391jcee66.mp4',
'https://b.top4top.io/m_2391ho0bz7.mp4',
'https://c.top4top.io/m_23910hulw8.mp4',
'https://d.top4top.io/m_2391dj01a9.mp4',
'https://e.top4top.io/m_23912fdr210.mp4',
'https://a.top4top.io/m_23911dhqx1.mp4',
'https://b.top4top.io/m_2391wwr402.mp4',
'https://c.top4top.io/m_2391vfkp63.mp4',
'https://d.top4top.io/m_2391b7cey4.mp4',
'https://e.top4top.io/m_2391fxdc85.mp4',
'https://telegra.ph/file/c3deeb5b0b7f7738a95ad.mp4',
'https://telegra.ph/file/7ca9eef850f5edc53f7f2.mp4',
'https://telegra.ph/file/44f73812ae0c19f097264.mp4',
'https://telegra.ph/file/10399f910bb90de8a6c53.mp4',
'https://telegra.ph/file/f7b440b02e742d1d4bed6.mp4',
'https://telegra.ph/file/3571f86c9c8843f48ce03.mp4',
'https://telegra.ph/file/c0b4e700e2d696f6ae448.mp4',
'https://telegra.ph/file/c0b4e700e2d696f6ae448.mp4',
'https://telegra.ph/file/fbfa5ac6baca454de22ad.mp4',
'https://telegra.ph/file/899cb30e29de1f0692ea1.mp4',
'https://telegra.ph/file/30e226e2d30e51bda678f.mp4',
'https://telegra.ph/file/4b20016e2f4ff96280fea.mp4',
'https://telegra.ph/file/d48fde63f91f9aa585716.mp4',
'https://telegra.ph/file/3a1f2afb1172b4606cd50.mp4',
'https://telegra.ph/file/fe7de67cadcddf80e4f23.mp4',
'https://telegra.ph/file/f4eabe96d994b28b7020d.mp4',
'https://telegra.ph/file/f8adc8f3af8ce6f80254b.mp4',
'https://telegra.ph/file/909a4beb3be92dae9e8ef.mp4',
'https://telegra.ph/file/57dff983fe52d49cf9e11.mp4',
'https://telegra.ph/file/70ed984ecf1382e0e74ce.mp4',
'https://telegra.ph/file/a922d3d0214e7b95dfb89.mp4',
'https://telegra.ph/file/ff7a0e8598bfd47898932.mp4',
'https://telegra.ph/file/c992c64d4bb59df46f06e.mp4',
'https://telegra.ph/file/137346459c02371cf5de9.mp4',
'https://telegra.ph/file/2ae60a3fc1509f779cba0.mp4',
'https://telegra.ph/file/223ac432cbca27313c59c.mp4',
'https://telegra.ph/file/6411bbcedc5da320b8656.mp4',
'https://telegra.ph/file/33a005837185d86435a26.mp4',
'https://telegra.ph/file/3b5cf36d1fc154ee36345.mp4',
'https://telegra.ph/file/c5606fb628f4c8268f1bb.mp4',
'https://telegra.ph/file/a91ba184bd2faedf2ca93.mp4',
'https://telegra.ph/file/aebad466be77f72498981.mp4',
'https://telegra.ph/file/a38ff1a80c53fb374af90.mp4',
'https://telegra.ph/file/607217019e1e5952920c1.mp4',
'https://telegra.ph/file/8a98532caa714b28acce1.mp4',
'https://telegra.ph/file/9eb4be5e79b7e71bfecc5.mp4',
'https://telegra.ph/file/10bbd3972f7b75a8b2ef6.mp4',
'https://telegra.ph/file/3fae1c6aacaba812ea651.mp4',
'https://telegra.ph/file/68378ab14e55b8a4113c2.mp4',
'https://telegra.ph/file/9cb140f6f74012cce30c7.mp4',
'https://telegra.ph/file/17a3d58921c2754cf86ef.mp4',
'https://telegra.ph/file/3ac2c8447b8915a879e7a.mp4',
'https://telegra.ph/file/269cd09dcf42f8bd3a6f9.mp4',
'https://telegra.ph/file/d2e59e56cfdaac79ca7f8.mp4',
'https://telegra.ph/file/504ac80844f99a8e3fc54.mp4',
'https://telegra.ph/file/dd2b8fba0010f539085d1.mp4',
'https://telegra.ph/file/af9726aad0dce10dc4529.mp4',
'https://telegra.ph/file/c693724dba3bb96bb6c70.mp4',
'https://telegra.ph/file/5b91438135d01c11e7c92.mp4',
'https://telegra.ph/file/d2a468ff7cd4c29dcdb4a.mp4',
'https://telegra.ph/file/9cc245954979317b3484c.mp4',
'https://telegra.ph/file/cde12f0fd2c73ab8eb933.mp4',
'https://telegra.ph/file/ab58119a87c7f2c2367dc.mp4',
'https://telegra.ph/file/9146e2d5490c1b01c6e87.mp4',
'https://telegra.ph/file/09c9e72d3e0d44175c304.mp4',
'https://telegra.ph/file/2f01ddd037c40477ed07f.mp4',
'https://telegra.ph/file/be72f95d92490f0a1db3b.mp4',
'https://telegra.ph/file/d1464f070543fb3aaeaee.mp4',
'https://telegra.ph/file/99f02aa82825f1bf61e9a.mp4',
'https://telegra.ph/file/d540762b1d4f9e767357d.mp4',
'https://telegra.ph/file/98d09d227e8552d4e2bea.mp4',
'https://telegra.ph/file/4a9dc4ba09484791dfa9a.mp4',
'https://telegra.ph/file/91d8701c2783775637125.mp4',
]