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
  const url = new URL(window.location)
  const id = url.searchParams.get('category')
  clientServices
    .listProducts()
    .then((products) => {
      const sectionAll = document.getElementById('all-products')
      showByCategory(products, id, sectionAll)
    })
    .catch((error) => alert('Hubo un error'))
}

loadProducts()
validateForm()
search()
