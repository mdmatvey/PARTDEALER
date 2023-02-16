// СОЗДАТЬ КАТЕГОРИЮ
export const createCategory = async (category) => { // category === { name: value }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(category)
  }

  const response = await fetch('https://fakestoreapi.com/products/', options) // URL API АДРЕСА
  const responseJSON = await response.json()

  return responseJSON
}

// ПОЛУЧИТЬ ВСЕ КАТЕГОРИИ
export const fetchCategories = async () => {
  const response = await fetch('https://fakestoreapi.com/products/categories') // URL API ЗАПРОСА
  const responseJSON = await response.json()

  return responseJSON
}

// СОЗДАТЬ БРЕНД
export const createBrand = async (brand) => { // brand === { name: value }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(brand)
  }

  const response = await fetch('https://fakestoreapi.com/products/', options) // URL API АДРЕСА
  const responseJSON = await response.json()

  return responseJSON
}

// ПОЛУЧИТЬ ВСЕ БРЕНДЫ
export const fetchBrands = async () => {
  const response = await fetch('https://fakestoreapi.com/products/brands') // URL API ЗАПРОСА
  const responseJSON = await response.json()

  return responseJSON
}

export const createProduct = async (data) => {
  /* ОБРАЗЕЦ ТЕЛА ЗАПРОСА

  const data = {
    title: name,
    price,
    description: `${info[0].title}: ${info[0].description}`,
    category: product.selectedCategory.name
  }

  ОБРАЗЕЦ ТЕЛА ЗАПРОСА */

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  const response = await fetch('https://fakestoreapi.com/products/', options) // URL API АДРЕСА
  const responseJSON = await response.json()

  return responseJSON
}

// ПОЛУЧИТЬ ПРОДУКТЫ
export const fetchProducts = async (categoryID, brands, page, limit = 8) => {
  const data = {
    categoryID, // [number] - id категории товары которой нужно получить
    brands, // [array] - массив из id брендов товары которых нужно получить
    page, // [number] - текущая страница
    limit // [number] - количество товаров на странице пагинации
  }

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  const response = await fetch('https://fakestoreapi.com/products/', options) // URL API АДРЕСА
  const responseJSON = await response.json()

  return responseJSON
}

// ПОЛУЧИТЬ КОНКРЕТНЫЙ ПРОДУКТ
export const fetchOneProduct = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`) // URL API АДРЕСА + ID ТОВАРА
  const responseJSON = await response.json()

  return responseJSON
}

// ПОЛУЧИТЬ РЕЗУЛЬТАТ ПОИСКА ПО ПРОДУКТАМ
export const fetchFoundProducts = async (query) => {
  const response = await fetch(`https://fakestoreapi.com/products/search?query=${query}`) // URL API АДРЕСА + ПОИСКОВОЙ ЗАПРОС
  const responseJSON = await response.json()

  return responseJSON
}

// ПОЛУЧИТЬ СОРТИРОВКУ ПО ЦЕНЕ
export const fetchSortProductsPrice = async (order) => {
  const response = await fetch(`https://fakestoreapi.com/?ordering=${order}price`) // order === '-' / '+'
  const responseJSON = await response.json()

  return responseJSON
}

// ПОЛУЧИТЬ СОРТИРОВКУ ПО ПОПУЛЯРНОСТИ
export const fetchSortProductsPopularity = async (order) => {
  const response = await fetch(`https://fakestoreapi.com/?ordering=${order}popularity`) // order === '-' / '+'
  const responseJSON = await response.json()

  return responseJSON
}
