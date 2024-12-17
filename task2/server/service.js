const fs = require('fs')

const MODE_PARAM = 'mode'
const MOBILE_MODE = 'mobile_mode'

let document = {
  location : {},
  getElementById : function(s) {
    if (s == 'challenge') { return {value : 'token1'} }
    if (s == 'incident') {return {value : 'AAAAAA111'} }
  }
}

function postMessageWithContentHeight() {
  return 1000
}

function delayShowChallengeData() {
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

function sendCandidate(data) {
  const write_stream = fs.createWriteStream('data.json') // поток отправки data
  write_stream.write(JSON.stringify(data)) // отправка data
  write_stream.end() // отключение потока

  return new Promise((res) => {
    setTimeout(() => {
        console.log('data', data)
        res({status : true})
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

module.exports = {
  postMessageWithContentHeight,
  delayShowChallengeData,
  document,
  setRunStatus,
  runChallenge,
  _objectSpread2,
  sendCandidate,
  handleMobile,
  handleWeb,
  asString,
  MOBILE_MODE,
  MODE_PARAM
}