Граф зависимостей main
======================

- Входные данные:
	- challenge (элемент) => token (challenge.value)
	- incident (элемент) => incident_id (incident.value)

- Методы:
	- postMessageWithContentHeight() -- инфо о высоте окна программы у клиента
	- delayShowChallengeData() -- создает задержку для прогрузки данных
	- setRunStatus(status) -- изменяет статус
	- runChallenge() -- метод обработки
	- sendCandidate(data) -- отправляет ответ (ошибку)
	- handleMobile(data) -- рендер интерфейса ответа (телефон)
	- handleWeb(data, token) -- рендер интерфейса ответа (компьютер)