import { clientServices } from './service.js'
import { cardsStructure } from './createCard.js'

//search
export function search() {
  // const formSearch = document.getElementById('search')
  const formSearch = document.querySelector('.form-search')

  // const formsTypeSearch = document.querySelectorAll('.form-search')
  const search = document.getElementById('btnSearch')
  const closeMenu = document.querySelector('.close-menu')
  const menuSearch = document.querySelector('.wrapper-menu-mobile')

  search.addEventListener('click', () => {
    menuSearch.style.display = 'flex'
    formSearch.classList.add('form-search-mobile--active')
    closeMenu.classList.add('close-menu--active')
  })

  closeMenu.addEventListener('click', () => {
    menuSearch.style.display = 'none'
    formSearch.classList.remove('form-search-mobile--active')
    closeMenu.classList.remove('close-menu--active')
  })

  formSearch.addEventListener('submit', (event) => {
    event.preventDefault()

    const inputToSearch = document
      .querySelector('.input-search')
      .value.toLowerCase()

    if (inputToSearch == '') {
      window.location.href = './src/screens/NotFound.html'
    } else {
      clientServices
        .listProducts()
        .then((products) => {
          const filterProducts = products.filter((product) => {
            return product.name.toLowerCase().includes(inputToSearch)
          })

          const sections = document.querySelectorAll('.section-category')
          sections.forEach((section) => {
            section.style.display = 'none'
          })

          //Si estamos modo mobile y esta abierto el area de busqueda entonces lo cerramos  antes de devolver la busqueda
          if ((menuSearch.style.display = 'flex')) {
            menuSearch.style.display = 'none'
            formSearch.classList.remove('form-search-mobile--active')

            closeMenu.classList.remove('close-menu--active')
          }
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
        .catch((error) => alert('Hubo un error'))
    }
  })
}

// const btnHome = document.getElementById('home')

// btnHome.addEventListener('click', () => {
//   window.location.reload()
// })
