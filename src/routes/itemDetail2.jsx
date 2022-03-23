import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getItem from '../services/getItem'

export default function ItemDetail () {
  const { itemId } = useParams()
  const [item, setItem] = useState([])
let title = ''
  useEffect(() => {

    setItem(null)
    getItem(itemId).then(item => {
      console.log('item', item.title)
      title = item.title
      setItem(item)
    })
  }, [itemId])

  return (
    <>
      <h2>ItemDetail: {itemId}</h2>
      <h2>title: {title}</h2>
    </>
  )
}
