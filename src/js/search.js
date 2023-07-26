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
    if (inputToSearch == '') {
      window.location.href = './src/screens/NotFound.html'
    } else {
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

        const productsArea = document.querySelector('.section-search')

        filterProducts.forEach(({ name, imageURL, price, id }) => {
          const productToShow = cardsStructure.createNewProduct(
            name,
            imageURL,
            price,
            id
          )
          productsArea.style.display = 'flex'
          productsArea.appendChild(productToShow)
        })
      })
    }
  })
}

// const btnHome = document.getElementById('home')

// btnHome.addEventListener('click', () => {
//   window.location.reload()
// })
