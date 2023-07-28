import { clientServices } from './service.js'
import { validateForm } from './validate-form.js'
import { search } from './search.js'
const formAdd = document.getElementById('form-add')

formAdd.addEventListener('submit', (event) => {
  event.preventDefault()

  const nameProduct = document.querySelector('[data-nameProduct]').value
  const imageURL = document.querySelector('[data-url]').value
  const description = document.querySelector('[data-description]').value
  const category = document.querySelector('[data-category]').value.toLowerCase()
  const price = document.querySelector('[data-price]').value

  console.log(price)

  clientServices
    .createProduct(nameProduct, imageURL, description, category, price)
    .then((response) => {
      const modal = document.getElementById('modal-exit')
      modal.style.display = 'flex'
      // window.location.href = './products.html'
      // modal.classList.add('modal-active')
      setTimeout(() => {
        window.addEventListener(
          'click',
          (event) => {
            if (event.target == modal) {
              // modal.classList.remove('modal-active')
              modal.style.display = 'flex'
            }
          },
          1000
        )
      })
    })
})

validateForm()
search()
