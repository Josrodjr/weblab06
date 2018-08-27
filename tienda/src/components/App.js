import React from 'react'
import AddItem from '../components/addItem'
import Item from './storeItem';
import VisibleShop from './VisibleShop';
const App = () => (
  <div>
    <div>Descripcion Precio Cantidad</div>
    <VisibleShop />
    <AddItem />
  </div>
)
export default App