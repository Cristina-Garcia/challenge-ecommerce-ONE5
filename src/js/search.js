import { clientServices } from './service.js'
import { cardsStructure } from './createCard.js'

//search
export function search() {
  const formSearch = document.getElementById('search')

  formSearch.addEventListener('submit', (event) => {
    event.preventDefault()

    const inputToSearch = document
      .querySelector('[data-search]')
      .value.toLowerCase()

    clientServices.listProducts().then((products) => {
      const filterProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(inputToSearch)
      })

      const sections = document.querySelectorAll('.section-category')
      sections.forEach((section) => {
        section.style.display = 'none'
      })

      // const cardsElectronics = document.querySelector('[data-electronics]')
      // const cardsClothes = document.querySelector('[data-clothes]')
      // const cardsShoes = document.querySelector('[data-shoes]')

      const productsArea = document.querySelector('.products')

      const productsContainer = document.createElement('div')

      filterProducts.forEach(({ name, imageURL, price, id }) => {
        const productToShow = cardsStructure.createNewProduct(
          name,
          imageURL,
          price,
          id
        )
        productsContainer.classList.add('products-wanted')
        productsContainer.appendChild(productToShow)
      })
      productsArea.appendChild(productsContainer)
    })
  })
}

// const btnHome = document.getElementById('home')

// btnHome.addEventListener('click', () => {
//   window.location.reload()
// })
