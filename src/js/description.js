import { clientServices } from './service.js'
import { validateForm } from './validate-form.js'
import { cardsStructure } from './createCard.js'
import { search } from './search.js'
const url = new URL(window.location)
const idProduct = url.searchParams.get('id')

const container = document.querySelector('[data-description]')
const containerSimilar = document.querySelector('[data-similarProducts]')

clientServices.listProducts().then((products) => {
  const filterProduct = products.find((product) => {
    return product.id == idProduct
  })

  const cardDescription = cardsStructure.showDescription(
    filterProduct.name,
    filterProduct.imageURL,
    filterProduct.price,
    filterProduct.description,
    filterProduct.id
  )
  //Mostramos el producto seleccionado
  container.appendChild(cardDescription)

  //Filtramos los productos similares por categoria
  const productsSimilar = products.filter((product) => {
    return product.category.includes(filterProduct.category)
  })
  //Creamos una copia de los pproductos similares
  const newArray = [...productsSimilar]
  //Eliminamos el producto con descripcion mostrado de la lista de similares
  const resultado = newArray.filter((array) => {
    console.log(array)
    return array.id !== idProduct
  })
  //Mostramos los productos similares
  resultado.forEach(({ name, imageURL, price, id }) => {
    const newCard = cardsStructure.createProduct(name, imageURL, price, id)
    containerSimilar.appendChild(newCard)
  })
})
validateForm()
search()
