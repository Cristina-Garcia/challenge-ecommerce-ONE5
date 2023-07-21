import { clientServices } from './service.js'
import { validateForm } from './validate-form.js'

validateForm()

const formAdd = document.querySelector('[data-formadd]')

formAdd.addEventListener('submit', (event) => {
  event.preventDefault()

  const nameProduct = document.querySelector('[data-nameProduct]').value
  const imageURL = document.querySelector('[data-url]').value
  const description = document.querySelector('[data-description]').value
  const category = document.querySelector('[data-category]').value.toLowerCase()
  const price = document.querySelector('[data-price]').value

  clientServices
    .createProduct(nameProduct, imageURL, description, category, price)
    .then((response) => {
      const modal = document.querySelector('[data-modal]')
      modal.style.display = 'flex'
      window.location.href = '../products.html'
      modal.classList.add('modal-active')
      window.addEventListener('click', (event) => {
        if (event.target == modal) {
          modal.classList.remove('modal-active')
        }
      })
    })
})
