const express = require('express')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const app = express()
const port = 3000
const link = 'https://jsonplaceholder.typicode.com/photos'

app.get('/', async (req, res) => {
	const response = await fetch(link);
	const data = await response.json();
	let responseHTML = `<html><head><title>Desafio</title></head><body>`
	
	data.map( i => {
		responseHTML += `<h3>${i.albumId} / ${i.id} - ${i.title}</h3><img src='${i.url}'><br />`
	})

	responseHTML += `</body>`
	return res.send(responseHTML)
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})