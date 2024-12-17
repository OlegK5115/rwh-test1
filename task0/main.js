function main() {
  // запуск _main в контексте window
  return _main.apply(this, arguments);
}

function _main() {
  /* генерация асинхронной функции и обозначение, что она
  может останавливать и возобновлять свою работу */
  return (_main = _asyncToGenerator(_regeneratorRuntime().mark((function A() {
    var t, e, r, n, i, o, a, c, s, u, l, d;

    return _regeneratorRuntime().wrap((function (A) {
      // бесконечный цикл для обработки запроса
      for (; ; )
        switch (A.prev = A.next) {
        case 0:
          return postMessageWithContentHeight(), // инфо о высоте окна программы у клиента
          delayShowChallengeData(), // задержка для прогрузки данных
          A.prev = 2,

          // получение элемента и извлечение токена
          e = null === (i = document.getElementById('challenge')) || void 0 === i ? void 0 : i.value,
          
          // получение элемента incident и извлечение id элемента
          r = null === (o = document.getElementById('incident')) || void 0 === o ? void 0 : o.value,
          
          setRunStatus("⧗"), // изменение статуса
          A.next = 8, // при следующей итерации цикла был переход к case8
          runChallenge(); // выполнение метода обработки

        case 8:
          a = A.sent, // получение результата выполнения 
          setRunStatus("✔"), // изменение статуса
          t = a.token, // извлечение токена результата

          // формирование ответа
          n = _objectSpread2(_objectSpread2({}, a), {}, {
            error: ""
          }),
          
          A.next = 21; // при следующей итерации цикла был переход к case21
          break; // выход из switch для следующей итерации

        case 14:
          A.prev = 14, // при итерации цикла попадать снова в case14
          A.t0 = A.catch(2), // получение ошибки
          console.error(A.t0), // вывод ошибки
          setRunStatus("✖"), // изменение статуса

          // формирование данных об ошибке
          c = {
            level: 'critical', // cтатус ошибки
            build_ts: '2024-10-15T09:22:43.174Z', // время конфигурации кода
            lib_version: '0.3.2', // версия библиотеки
            challenge_id: asString(r, 128), // входные данные runChallenge(incident_id вызова)
            user_agent: asString(window.navigator.userAgent, 384),
            url: asString(window.location.href, 512), // адрес
            client_ts: (new Date).toISOString() // дата и время
          },

          // текст ошибки
          A.t0 instanceof Error ? (c.message = asString(A.t0.message, 256),
          s = A.t0.stack,
          
          // стек вызовов в момент ошибки
          c.stack_trace = asString("string" == typeof s ? s.split(window.location.href).join("") : s, 1024)) : c.message = asString(A.t0, 1024),
          
          // формирование ответа
          n = {
            token: e,
            fp: "",
            error: JSON.stringify(c)
          };

        case 21:
          // получение параметров url
          return u = new URLSearchParams(document.location.search),

          l = u.get(MODE_PARAM) === MOBILE_MODE, // получение типа интерфейса
          A.next = 25, // при следующей итерации перейти в case25
          sendCandidate(n); // отправка ответа

        case 25:
          d = A.sent, // получение данных для отправки

          // рендер в зависимости от типа интерфейса
          l ? handleMobile(d) : handleWeb(d, t);

        case 27:
        case 'end':
          return A.stop() // остановка бесконечного цикла
        }
    }), A, null, [[2, 14]])
  })))).apply(this, arguments)
}

// при событии load срабатывает вызов main
window.addEventListener('load', main);
