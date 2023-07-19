import { clientServices } from './service.js'

const formAdd = document.querySelector('[data-formAdd]')

formAdd.addEventListener('submit', (event) => {
  event.preventDefault()
  const nameProduct = document.querySelector('[data-nameProduct]').value
  const imageURL = document.querySelector('[data-url]').value
  const description = document.querySelector('[data-description]').value
  const category = document.querySelector('[data-category]').value.toLowerCase()
  const price = document.querySelector('[data-price]').value

  clientServices
    .createProduct(nameProduct, imageURL, description, category, price)
    .then((respuesta) => {
      console.log('agregado').catch((err) => err)
      const modal = document.querySelector('.modal')
      console.log(modal)
      // setTimeout(() => {
      //   modal.style.display = 'flex'
      // }, 1000)
      // window.addEventListener('click', (event) => {
      //   if (event.target == modal) {
      //     modal.style.display = 'none'
      //   }
      // })
    })
})
