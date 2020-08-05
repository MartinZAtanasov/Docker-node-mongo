window.onload = () => {
  const form = document.getElementById('new-user-form')
  const loadingMessageEl = document.getElementById('loading-message')
  const failedMessageEl = document.getElementById('failed-message')
  const successMessageEl = document.getElementById('success-message')
  const messagesEl = [loadingMessageEl, failedMessageEl, successMessageEl]

  const clearFormMessages = () =>
    messagesEl.forEach(el => (el.style.display = 'none'))

  form.onsubmit = async e => {
    //  Set up
    e.preventDefault()
    clearFormMessages()
    loadingMessageEl.style.display = 'inline'
    // >

    // Get the form fields
    const formFields = Array.from(form.elements)
    formFields.pop()
    // >

    // Set the payload (payload will take input id as key)
    const payload = {}
    formFields.forEach(({ id, value }) => (payload[id] = value))
    // >

    // Make the request
    const response = await fetch('http://localhost:3000/api/users/', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(payload)
    })
    // >

    // Request response
    const { error } = await response.json()
    clearFormMessages()
    if (!error) {
      form.reset()
      successMessageEl.style.display = 'inline'
    } else {
      failedMessageEl.style.display = 'inline'
      let errorMessageInnerHTML = ''
      error.details.forEach(
        ({ message }) => (errorMessageInnerHTML += `${message} <br>`)
      )
      failedMessageEl.innerHTML = errorMessageInnerHTML
    }
    // >
  }
}
