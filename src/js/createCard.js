//Funcion crear producto
const createNewProduct = (name, imageURL, price, id) => {
  const card = document.createElement('div')
  const contentCard = `
      <img src="${imageURL}" alt="${name}" class="w-full"/>
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
//Funcion crear producto-redireccionar-description
const createProduct = (name, imageURL, price, id) => {
  const card = document.createElement('div')
  const contentCard = `
      <img src="${imageURL}" alt="${name}" class="w-full "/>
      <div class="flex flex-col">
      <p class="text-Wood-Charcoal text-xs">${name}</p>
      <span class="text-Wood-Charcoal font-semibold text-sm">$${price}</span>
      <a href="/src/screens/descriptionProduct.html?id=${id}" class="text-Blue-De-France font-semibold text-sm">Ver producto</a>
      </div>
     `
  card.classList.add('card')
  card.innerHTML = contentCard
  return card
}
//Funcion mostrar producto-description
const showDescription = (name, imageURL, price, description, id) => {
  const containerDescription = document.createElement('div')
  const content = `
    <figure class="w-[25rem] max-[768px]:ms-8 max-[480px]:ms-0 max-[480px]:w-full">
      <img src="${imageURL}" alt="${name}" />
    </figure>
    <div class="flex flex-col gap-2">
      <h2 class="text-Wood-Charcoal text-xl">${name}</h2>
      <span class="text-Wood-Charcoal text-base font-bold mt-2"
            >$${price}</span>
      <p class="text-Wood-Charcoal font-normal">
            ${description}
      </p>
    </div>
  `
  containerDescription.classList.add('product-description')
  containerDescription.innerHTML = content
  return containerDescription
}

export const cardsStructure = {
  createNewProduct,
  showDescription,
  createProduct,
}
