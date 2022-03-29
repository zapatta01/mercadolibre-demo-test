export default function Price ({ price }) {
  const { amount } = price
  const priceFormat = new Intl.NumberFormat('de-DE').format(parseInt(amount))

  return <span>$ {priceFormat}</span>
}
