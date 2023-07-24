import { clientServices } from './service.js'
import { validateForm } from './validate-form.js'

validateForm()

const createNewProduct = (name, imageURL, price, id) => {
  const card = document.createElement('div')
  const contentCard = `
      <img src="${imageURL}" alt="${name}" class="w-full "/>
      <div class="flex flex-col">
      <p class="text-Wood-Charcoal text-xs">${name}</p>
      <span class="text-Wood-Charcoal font-semibold text-sm">$${price}</span>
      <a href="./src/screens/descriptionProduct.html?id=${id}" class="text-Blue-De-France font-semibold text-sm">Ver producto</a>
      </div>
     `
  card.classList.add('card')
  card.innerHTML = contentCard
  return card
}

const cardsElectronics = document.querySelector('[data-electronics]')
const cardsClothes = document.querySelector('[data-clothes]')
const cardsShoes = document.querySelector('[data-shoes]')

clientServices
  .listProducts()
  .then((products) => {
    const filterProductElectronic = products.filter((product) => {
      return product.category.includes('electronics')
    })
    filterProductElectronic.forEach(({ name, imageURL, price, id }) => {
      const newCard = createNewProduct(name, imageURL, price, id)
      cardsElectronics.appendChild(newCard)
    })
  })
  .catch((error) => alert('Hubo un error'))

clientServices
  .listProducts()
  .then((products) => {
    const filterProductClothes = products.filter((product) => {
      return product.category.includes('clothes')
    })
    filterProductClothes.forEach(({ name, imageURL, price, id }) => {
      const newCard = createNewProduct(name, imageURL, price, id)
      cardsClothes.appendChild(newCard)
    })
  })
  .catch((error) => alert('Hubo un error'))

clientServices
  .listProducts()
  .then((products) => {
    const filterProductShoes = products.filter((product) => {
      return product.category.includes('shoes')
    })
    filterProductShoes.forEach(({ name, imageURL, price, id }) => {
      const newCard = createNewProduct(name, imageURL, price, id)
      cardsShoes.appendChild(newCard)
    })
  })
  .catch((error) => alert('Hubo un error'))
