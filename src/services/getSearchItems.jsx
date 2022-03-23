import { API_URL } from './settings'

const apiURL = new URL(`${API_URL}/items/`)
const params = new URLSearchParams(apiURL.search)

const fromApiResponseToItems = apiResponse => {
  const data = apiResponse
  if (data.items.length !== 0) {
    const items = data.items.map(item => {
      const { id, title, picture, free_shipping } = item
      const { amount, currency, decimals } = item.price
      return {
        id,
        title,
        picture,
        amount,
        currency,
        decimals,
        free_shipping
      }
    })
    return items
  }
  return []
}

export default function getSearchItemsItems (searchText = '', limit = 4) {
  if (searchText) {
    params.set('q', searchText)
    params.set('limit', limit)
    apiURL.search = new URLSearchParams(params).toString()
  }

  return fetch(apiURL)
    .then(response => response.json())
    .then(fromApiResponseToItems)
}
