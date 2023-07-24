const BASE_API = 'http://localhost:3000/productos'
const mockapiUrl = 'https://64becf195ee688b6250cf3b2.mockapi.io/products'
const listProducts = () =>
  fetch(mockapiUrl).then((respuesta) => respuesta.json())

const createProduct = async (name, imageURL, description, category, price) => {
  return await fetch(mockapiUrl, {
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
  return fetch(`${mockapiUrl}/${id}`, {
    method: 'DELETE',
  })
}
const detailProduct = (id) => {
  return fetch(`${mockapiUrl}/${id}`).then((respuesta) => respuesta.json())
}
const updateProduct = (name, imageURL, description, category, price, id) => {
  return fetch(`${mockapiUrl}/${id}`, {
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
