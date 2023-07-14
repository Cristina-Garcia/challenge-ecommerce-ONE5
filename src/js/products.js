import { clientServices } from './service.js'

//Show all products

const createNewProduct = (name, imageURL, price, id) => {
  const card = document.createElement('div')
  const contentCard = `
      <div class="card-container flex flex-col">
        <img src="${imageURL}" alt="${name}" class="w-[150px]"/>
        <p class="text-Wood-Charcoal text-xs mt-4">${name}</p>
        <span class="text-Wood-Charcoal font-semibold text-sm">${price}</span>
        <span class="font-raleway text-Wood-Charcoal text-xs">#${id}</span>
      </div>
      <div class="flex gap-4 text-Blue-De-France" style="position: absolute; top: 0; right: 0">
      <button id="${id}">
      <i class="fa-solid fa-trash"></i>
      </button>
      <a href="">
      <i class="fa-solid fa-pen"></i>
      </a>
      </div>
     `
  card.classList.add('card')
  card.innerHTML = contentCard
  const btnDelete = card.querySelector('button')
  btnDelete.addEventListener('click', () => {
    const id = btnDelete.id
    clientServices
      .deleteProduct(id)
      .then(() => {})
      .catch((error) => alert('Ha ocurrido un error'))
  })

  return card
}

const cards = document.querySelector('[data-cards]')
clientServices
  .listProducts()
  .then((products) => {
    products.forEach(({ name, imageURL, price, id }) => {
      const newCard = createNewProduct(name, imageURL, price, id)
      cards.appendChild(newCard)
    })
  })
  .catch((err) => alert('Hubo un error'))
