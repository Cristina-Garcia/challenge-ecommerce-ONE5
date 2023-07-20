export function validateForm() {
  const inputs = document.querySelectorAll('.input-in')

  inputs.forEach((inputIn) => {
    inputIn.addEventListener('blur', (inputIn) => {
      validate(inputIn.target)
    })
  })

  function validate(input) {
    const typeInput = input.dataset.type
    const span = input.parentElement.querySelector('.message-error')

    if (input.validity.valid) {
      input.parentElement.classList.remove('field-form--invalid')
      span.innerHTML = ''
      span.style.display = 'none'
    } else {
      input.parentElement.classList.add('field-form--invalid')

      span.innerHTML = showMessageError(typeInput, input)
      span.style.display = 'block'
    }
  }

  const typeError = ['valueMissing']
  const messageAlert = {
    nameclient: {
      valueMissing: 'El campo nombre es necesario.',
    },
    msgclient: {
      valueMissing: 'El campo mensaje es necesario.',
    },
    user: {
      valueMissing: 'El campo usuario es necesario.',
    },
    password: {
      valueMissing: 'Debe ingresar una contraseña.',
    },
    url: {
      valueMissing: 'El campo url de la imagen es necesario.',
    },
    productname: {
      valueMissing: 'El nombre del producto es necesario.',
    },
    price: {
      valueMissing: 'El precio del producto es requerido.',
    },
    description: {
      valueMissing: 'La descripción del producto es necesaria.',
    },
    category: {
      valueMissing: 'La categoria del producto es necesaria.',
    },
  }
  function showMessageError(typeInput, input) {
    let message = ''
    typeError.forEach((error) => {
      if (input.validity[error]) {
        message = messageAlert[typeInput][error]
        console.log(message)
      }
    })
    return message
  }
}
