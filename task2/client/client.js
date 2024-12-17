const fs = require('fs')

// функция для чтения данных из файла
function read() {
	let read_data = null

	const read_stream = fs.createReadStream("data.json") // иниц. поток чтения

	read_stream.on('data', (chunk) => {
		// парсинг данных
		read_data = JSON.parse(chunk)

		// извлечение полезной нагрузки
		let usefull_data = read_data[0][1].text
		console.log(usefull_data)
	}) // метод для получения данных

	read_stream.on('end', () => {
		if (!read_data) {
			console.log('error: start server before client')
		}
		else {
			console.log('end')
		}
	})

	console.log('start')
}

read()