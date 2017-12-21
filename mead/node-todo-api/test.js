const tags = document.getElementsByClassName('newtopicinput')
const textbtn = document.getElementById('textbtn')
const disconnectbtn = document.getElementsByClassName('disconnectbtn')
const chatmsg = document.getElementsByClassName('chatmsg')
const sendbtn = document.getElementsByClassName('sendbtn')

function initBot (tag, message) {
  setTimeout(function() {
    tags[0].value = `${tag}\n`
  }, 1000)

  setTimeout(function() {
    textbtn.click()
  }, 2000)

  function newChat() {
    disconnectbtn[0].click()
    disconnectbtn[0].click()
    disconnectbtn[0].click()
  }

  function setMessage() {
    chatmsg[0].value = message
  }

  function send() {
    sendbtn[0].click()
  }

  function startBot() {
    if (document.getElementsByClassName('sendbtn')[0].attributes.length === 1) {
      console.log('Chat has started')
      setTimeout(setMessage, 2000)
      setTimeout(send, 3500)
      setTimeout(newChat, 5000)
    }
    console.log('No chat started...')
  }

  setInterval(startBot, 6000)
}
