import { clientServices } from './service.js'

const formEdit = document.querySelector('[data-formEdit]')
const getInformation = async () => {
  const url = new URL(window.location)
  const id = url.searchParams.get('id')

  const nameToEdit = document.querySelector('[data-nameProduct]')
  const categoryToEdit = document.querySelector('[data-category]')
  const imageUrlToEdit = document.querySelector('[data-url]')
  const priceToEdit = document.querySelector('[data-price]')
  const descriptionEdit = document.querySelector('[data-description]')
  try {
    const product = await clientServices.detailProduct(id)
    if (
      product.name &&
      product.imageURL &&
      product.description &&
      product.category &&
      product.price
    ) {
      nameToEdit.value = product.name
      categoryToEdit.value = product.category
      imageUrlToEdit.value = product.imageURL
      priceToEdit.value = product.price
      descriptionEdit.value = product.description
    }
  } catch {
    throw new Error()
  }
}
getInformation()

formEdit.addEventListener('submit', (event) => {
  event.preventDefault()
  const url = new URL(window.location)
  const id = url.searchParams.get('id')

  const nameToEdit = document.querySelector('[data-nameProduct]').value
  const categoryToEdit = document
    .querySelector('[data-category]')
    .value.toLowerCase()
  const imageUrlToEdit = document.querySelector('[data-url]').value
  const priceToEdit = document.querySelector('[data-price]').value
  const descriptionEdit = document.querySelector('[data-description]').value
  clientServices
    .updateProduct(
      nameToEdit,
      imageUrlToEdit,
      descriptionEdit,
      categoryToEdit,
      priceToEdit,
      id
    )
    .then(() => {
      console.log('El producto se ha editado correctamente')
    })
})
