const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000

// Дополнительные мидлвары для парсинга application json (Json "тип" запроса)
app.use(express.json())
// Для парсинга application x-www-form-urlEncded
app.use(express.urlencoded({ extended: true }))
// путь к папке с картинками
app.use('/static', express.static(__dirname + '/assets'))

app.use('/api/planes/', require('./routes/planes'))

// app.get('/api/planes', (request, response) => {
// 	response.send('Hello World')
// })

mongoose.connect('mongodb://localhost:27017').then(() => {
	app.listen(port, () => {
		console.log(`App listening on port ' + ${port}`)
	})
})
