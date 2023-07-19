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
const detailProduct = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) =>
    respuesta.json()
  )
}
const updateProduct = (name, imageURL, description, category, price, id) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      name,
      imageURL,
      description,
      category,
      price,
    }),
  })
    .then((respuesta) => {
      respuesta
    })
    .catch((error) => alert('Error' + error))
}
export const clientServices = {
  listProducts,
  createProduct,
  deleteProduct,
  detailProduct,
  updateProduct,
}
