import { API_URL } from './settings'

const apiURL = `${API_URL}/items/`
let myURL

const fromApiResponseToItem = apiResponse => {
  const data = apiResponse
  if (typeof data === 'object') {
    const {
      id,
      title,
      picture,
      free_shipping,
      description,
      sold_quantity,
      condition
    } = data.item
    const { amount, currency, decimals } = data.item.price
    const item = {
      id,
      title,
      picture,
      free_shipping,
      description,
      sold_quantity,
      condition,
      amount,
      currency,
      decimals
    }
    return item
  }
  return null
}

export default function getItem (itemId = '') {
  if (itemId) {
    myURL = new URL(itemId, apiURL)
  }

  return (
    fetch(myURL)
      .then(response => response.json())
      // .then(json => json);
      .then(fromApiResponseToItem)
  )
}
