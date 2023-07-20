import { clientServices } from './service.js'
import { validateForm } from './validate-form.js'

validateForm()
const url = new URL(window.location)
const idProduct = url.searchParams.get('id')

const createNewProduct = (name, imageURL, price, id) => {
  const card = document.createElement('div')
  const contentCard = `
      <img src="${imageURL}" alt="${name}" class="w-full "/>
      <p class="text-Wood-Charcoal text-xs">${name}</p>
      <span class="text-Wood-Charcoal font-semibold text-sm">${price}</span>
      <a href="./descriptionProduct.html?id=${id}" class="text-Blue-De-France font-semibold text-sm">Ver producto</a>
     `
  card.classList.add('card')
  card.innerHTML = contentCard
  return card
}

const showDescription = (name, imageURL, price, description, id) => {
  const containerDescription = document.createElement('div')
  const content = `
    <figure class="w-[25rem] max-[768px]:ms-8">
      <img src="${imageURL}" alt="${name}" />
    </figure>
    <div class="flex flex-col gap-2">
      <h2 class="text-Wood-Charcoal text-xl">${name}</h2>
      <span class="text-Wood-Charcoal text-base font-bold mt-2"
            >${price}</span>
      <p class="text-Wood-Charcoal font-normal">
            ${description}
      </p>
    </div>
  `
  containerDescription.classList.add('product-description')
  containerDescription.innerHTML = content
  return containerDescription
}

const container = document.querySelector('[data-description]')
const containerSimilar = document.querySelector('[data-similarProducts]')

clientServices.listProducts().then((products) => {
  const filterProduct = products.find((product) => {
    return product.id == idProduct
  })

  const cardDescription = showDescription(
    filterProduct.name,
    filterProduct.imageURL,
    filterProduct.price,
    filterProduct.description,
    filterProduct.id
  )

  container.appendChild(cardDescription)

  const productsSimilar = products.filter((product) => {
    return product.category.includes(filterProduct.category)
  })
  // const similars = productsSimilar.splice(filterProduct)
  // console.log(similars)
  productsSimilar.forEach(({ name, imageURL, price, id }) => {
    const newCard = createNewProduct(name, imageURL, price, id)
    containerSimilar.appendChild(newCard)
  })
})
