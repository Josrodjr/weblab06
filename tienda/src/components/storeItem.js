import React from 'react'
import './style.css'

const Item = ({ descripcion, precio, cantidad }) => (
  /*
  <li >
    {descripcion} {precio} {cantidad}
  </li>
  */
  <table className='latabla' cellPadding = '10px'>
  <tr>
    <td>{descripcion}</td>
    <td>{precio}</td> 
    <td>{cantidad}</td>
  </tr>
  </table>
)

export default Item
