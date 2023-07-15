import { clientServices } from './service.js'

const formAdd = document.querySelector('[data-formAdd]')

formAdd.addEventListener('submit', (event) => {
  event.preventDefault()
  const nameProduct = document.querySelector('[data-nameProduct]').value
  const imageURL = document.querySelector('[data-url]').value
  const description = document.querySelector('[data-description]').value
  const category = document.querySelector('[data-category]').value
  const price = document.querySelector('[data-price]').value

  clientServices
    .createProduct(nameProduct, imageURL, description, category, price)
    .then((respuesta) => {
      console.log('agregado')
      const modal = document.querySelector('.modal')
      modal.style.display = 'flex'
      window.addEventListener('click', (event) => {
        if (event.target == modal) {
          modal.style.display = 'none'
        }
      })
    })
    .catch((err) => err)
})
