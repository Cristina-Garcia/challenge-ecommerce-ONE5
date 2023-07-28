import { validateForm } from './validate-form.js'
import { search } from './search.js'

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

validateForm()
search()
