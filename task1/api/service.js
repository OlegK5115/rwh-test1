const MODE_PARAM = 'mode'
const MOBILE_MODE = 'mobile_mode'

function postMessageWithContentHeight() {
  return 1000
}

async function delayShowChallengeData() {
  setTimeout(() => {
    console.log("delay show challenge data")
  }, 500)
}

function setRunStatus(status) {
  console.log('status - ', status)
}

function runChallenge() {
  return new Promise((res) => {
    setTimeout(() => {
      res({ token: "res_token1", status : true, text : 'ok' })
    }, 1000)
  })
}

function _objectSpread2(...arguments) {
  // соединяет все присланные объекты в единый массив
  return arguments
}

function sendCandidate() {
  return new Promise((res) => {
    setTimeout(() => {
        res({ status: true })
    }, 1000)
  })
}

function handleMobile(data) {
  console.log(`render mobile response -- ${data}`)
}

function handleWeb(data, token) {
  console.log(`render web response -- ${data}; token -- ${token}`)
}

function asString(s, size) {
  if (typeof(size) != Int32Array || typeof(s) != String) {
    throw("wrong data type")
  }

  if (s.length > size) { throw("wrong string size")}

  let buffer = new ArrayBuffer(size)
  for (let i = 0; i < s; i++) { buffer[i] = s[i] }
  return buffer
}