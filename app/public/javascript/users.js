let loadingMessageEl, failedMessageEl, successMessageEl, messagesEl

window.onload = () => {
  loadingMessageEl = document.getElementById('loading-message')
  failedMessageEl = document.getElementById('failed-message')
  successMessageEl = document.getElementById('success-message')
  messagesEl = [loadingMessageEl, failedMessageEl, successMessageEl]
}

const clearMessages = () =>
  messagesEl.forEach(el => (el.style.display = 'none'))

const deleteUser = async id => {
  // Set up

  clearMessages()
  // >

  // Make the request
  loadingMessageEl.style.display = 'inline'
  const response = await fetch(`http://localhost:3000/api/users/${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'DELETE'
  })
  // >

  // Request response
  const { status } = response
  let messageEl
  clearMessages()
  if (status >= 200 && status < 300) {
    messageEl = successMessageEl
  } else {
    messageEl = failedMessageEl
  }
  messageEl.style.display = 'inline'
  const userRowEl = document.getElementById(id)
  userRowEl.parentNode.removeChild(userRowEl)
  // >
}
