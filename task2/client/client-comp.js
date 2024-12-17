"use strict";

var fs = require('fs');

// функция для чтения данных из файла
function read() {
  var read_data = null;
  var read_stream = fs.createReadStream("data.json"); // иниц. поток чтения

  read_stream.on('data', function (chunk) {
    // парсинг данных
    read_data = JSON.parse(chunk);

    // извлечение полезной нагрузки
    var usefull_data = read_data[0][1].text;
    console.log(usefull_data);
  }); // метод для получения данных

  read_stream.on('end', function () {
    if (!read_data) {
      console.log('error: start server before client');
    } else {
      console.log('end');
    }
  });
  console.log('start');
}
read();
