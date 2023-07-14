const form = document.querySelector('[data-form]')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const nameUser = document.querySelector('[data-user]').value
  const password = document.querySelector('[data-password]').value

  if ((nameUser === 'admin') & (password === '123456')) {
    console.log(nameUser, password)
    window.location.href = './products.html'
  } else {
    alert('Hay un error en el nombre o contraseña')
  }
})
