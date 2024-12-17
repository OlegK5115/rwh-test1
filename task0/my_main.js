// асинхронный метод для обработки запроса
async function main() {
  let token, incident_id
  let token_res, response

  try {
    postMessageWithContentHeight() // инфо о высоте окна программы у клиента
	  delayShowChallengeData() // задержка для прогрузки данных

    // получение элементов по их id
	  const elem_challenge = document.getElementById('challenge')
	  const elem_incident = document.getElementById('incident')

    // извлечение данных из полученных элементов через св-во value
    token = elem_challenge ? elem_challenge.value : null
	  incident_id = elem_incident ? elem_incident.value : null

    // обновление статуса и запуск метода
    setRunStatus("⧗")
	  const result = await runChallenge()
	  
    // обновление статуса после завершения работы
	  setRunStatus("✔️")
	  
    // извлечение результата из runChallenge
    token_res = result.token
	  response = { ...result, error: "" }
  }
  catch(err) {
    // вывод ошибки, изменение статуса
    console.error(err)
    setRunStatus("✖")

    // формирование объекта с данными об ошибке
    const error_data = {
      level: 'critical', // cтатус ошибки
      build_ts: '2024-10-15T09:22:43.174Z', // время конфигурации кода
      lib_version: '0.3.2', // версия библиотеки
      challenge_id: asString(incident_id, 128), // входные данные runChallenge(incident_id вызова)
      user_agent: asString(window.navigator.userAgent, 384),
      url: asString(window.location.href, 512), // адрес
      client_ts: (new Date).toISOString(), // дата и время
      message: err instanceof Error ? asString(err.message, 256) : asString(err, 1024), // текст ошибки
      stack_trace: err instanceof Error ? asString(err.stack?.split(window.location.href).join("") || "", 1024) : undefined
      // стек вызовов в момент ошибки
    }

    // формирование ответа
    response = {
      token: token, // исходный токен
      fp: "",
      error: JSON.stringify(error_data) // ошибка
    }
  }

  // параметры url запроса
  const params = new URLSearchParams(window.location.search)

  // является ли устройство клиента мобильным
  const is_mobile = params.get(MODE_PARAM) === MOBILE_MODE

  // отправка ответа (ошибки)
  const send_response = await sendCandidate(response)
  
  if (is_mobile) {
    handleMobile(send_response) // рендер интерфейса ответа (телефон)
  }
  else {
    handleWeb(send_response, token_res) // рендер интерфейса ответа (компьютер)
  }
}

// при событии load срабатывает вызов main
window.addEventListener('load', main);