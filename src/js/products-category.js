import { clientServices } from './service.js'
import { cardsStructure } from './createCard.js'
import { validateForm } from './validate-form.js'
import { search } from './search.js'

const showByCategory = (products, category, section) => {
  const produtsByCategory = products.filter((product) =>
    product.category.includes(category)
  )
  produtsByCategory.forEach(({ name, imageURL, price, id }) => {
    const newCard = cardsStructure.createNewProduct(name, imageURL, price, id)
    section.appendChild(newCard)
  })
}

const loadProducts = () => {
  clientServices
    .listProducts()
    .then((products) => {
      const cardsElectronics = document.querySelector('[data-electronics]')
      showByCategory(products, 'electronics', cardsElectronics)

      const cardsClothes = document.querySelector('[data-clothes]')
      showByCategory(products, 'clothes', cardsClothes)
      const cardsShoes = document.querySelector('[data-shoes]')
      showByCategory(products, 'shoes', cardsShoes)
    })
    .catch((error) => alert('Hubo un error'))
}

loadProducts()
validateForm()
search()
// clientServices
//   .listProducts()
//   .then((products) => {
//     const filterProductElectronic = products.filter((product) => {
//       return product.category.includes('electronics')
//     })
//     filterProductElectronic.forEach(({ name, imageURL, price, id }) => {
//       const newCard = cardsStructure.createNewProduct(name, imageURL, price, id)
//       cardsElectronics.appendChild(newCard)
//     })
//   })
//   .catch((error) => alert('Hubo un error'))
