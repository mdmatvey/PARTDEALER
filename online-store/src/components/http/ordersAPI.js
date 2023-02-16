// СОЗДАТЬ ЗАКАЗ
export const createOrder = async (order) => {
  /* ОБРАЗЕЦ ТЕЛА ЗАПРОСА

  const data = {
    cart: cart.cartItems,
    userID: user.id
  }

  ОБРАЗЕЦ ТЕЛА ЗАПРОСА */

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  }

  const response = await fetch('https://fakestoreapi.com/orders/', options) // URL API АДРЕСА
  const responseJSON = await response.json()

  return responseJSON
}

// ПОЛУЧИТЬ ЗАКАЗЫ
export const fetchOrders = async (userID) => { // userID === { userID: user.id }
  /* ID АДМИНА - 0:
    if (userID === 0) {
        ПОЛУЧИТЬ ВСЕ ЗАКАЗЫ
    }
  */

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userID)
  }

  const response = await fetch('https://fakestoreapi.com/orders/', options) // URL API АДРЕСА
  const responseJSON = await response.json()

  return responseJSON
}

// ИЗМЕНИТЬ СТАТУС ЗАКАЗА
export const changeStatus = async (status) => { // order === { status: orderStatus }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(status)
  }

  const response = await fetch('https://fakestoreapi.com/orders/', options) // URL API АДРЕСА
  const responseJSON = await response.json()

  return responseJSON
}
