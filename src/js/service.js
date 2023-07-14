const listProducts = () =>
  fetch('http://localhost:3000/productos').then((respuesta) => respuesta.json())

const createProduct = (name, imageURL, description, category, price) => {
  return fetch('http://localhost:3000/productos', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      name,
      imageURL,
      description,
      category,
      price,
      id: uuid.v4(),
    }),
  })
}

const deleteProduct = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: 'DELETE',
  })
}

export const clientServices = {
  listProducts,
  createProduct,
  deleteProduct,
}
