window.onload = () => {
  const form = document.getElementById('user-form')
  const loadingMessageEl = document.getElementById('loading-message')
  const failedMessageEl = document.getElementById('failed-message')
  const successMessageEl = document.getElementById('success-message')
  const messagesEl = [loadingMessageEl, failedMessageEl, successMessageEl]
  const userID = form.getAttribute('user-id')

  const isUpdateForm = !!userID

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
    if (isUpdateForm) payload._id = userID
    // >

    // Make the request
    const apiPoint = isUpdateForm
      ? `http://localhost:3000/api/users/${userID}`
      : `http://localhost:3000/api/users/`
    const method = isUpdateForm ? 'PUT' : 'POST'

    const response = await fetch(apiPoint, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method,
      body: JSON.stringify(payload)
    })
    // >

    // Request response
    const { error } = await response.json()
    clearFormMessages()
    if (!error) {
      successMessageEl.style.display = 'inline'
      if (!isUpdateForm) form.reset()
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
