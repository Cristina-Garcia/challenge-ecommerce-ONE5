import { validateForm } from './validate-form.js'

validateForm()

const form = document.querySelector('[data-form]')

const peopleAccess = [
  {
    username: 'admin',
    password: '@ccess0*',
  },
  {
    username: 'invitado',
    password: '%nv1t4d@',
  },
]
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const nameUser = document.querySelector('[data-user]').value
  const password = document.querySelector('[data-password]').value

  // if ((nameUser === 'admin') & (password === '123456')) {
  //   console.log(nameUser, password)
  //   window.location.href = './products.html'
  // } else {
  //   alert('Hay un error en el nombre o contraseña')
  // }
  for (var i = 0; i < peopleAccess.length; i++) {
    if (
      nameUser == peopleAccess[i].username &&
      password == peopleAccess[i].password
    ) {
      window.location.href = './products.html'
      return
    }
  }
  alert('El usuario o la contraseña son incorrectos')
})
