// генерация состояние async метода
function async_gen_step(gen, resolve, reject, _next, _throw, key, arg) {
    try {
		var info = gen[key](arg) // инфо о состоянии выполнения функции
        var value = info.value // извлечение значения из info
    } catch (error) {
        reject(error) // изменяет состояние промиса на ошибочное
        return;
    }

    if (info.done) {
		resolve(value) // изменяет состояние промиса на завершенное
	}
	else {
		// состояние остается неизменным
        Promise.resolve(value).then(_next, _throw)
    }
}

// генерация асинхронного выполнения метода
function _asyncToGenerator(func) {
    return function() {
        var gen = func.apply(this, arguments) // вызов функции
		
		// возвращение объекта Promise
        return new Promise(function(res, rej) {
            function _next(value) {
				async_gen_step(gen, res, rej, _next, _throw, "next", value)
			}
            function _throw(err) {
				async_gen_step(gen, res, rej, _next, _throw, "throw", err)
			}
            _next(undefined)
        })
    }
}