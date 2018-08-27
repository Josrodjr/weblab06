import React from 'react'
import Item from './storeItem'

const ItemList = ({ items }) => (
  <ul>
    {items.map(item =>
      <Item
        key={item.id}
        {...item}
      />
    )}
  </ul>
)

export default ItemList