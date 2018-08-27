import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'

const AddItem = ({ dispatch }) => {
  let descripcion
  let precio
  let cantidad
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!descripcion.value.trim()) {
            return
          }
          dispatch(addItem(descripcion.value, precio.value, cantidad.value))
          descripcion.value = ''
          precio.value = ''
          cantidad.value = ''
        }}
      >
        <input ref={node1 => descripcion = node1} placeholder='Descripcion del Objeto' type='text'/>
        <input ref={node2 => precio = node2}  placeholder='Precio' type='number'/>
        <input ref={node3 => cantidad = node3} placeholder='Cantidad' type='number'/>
        <button type="submit">
          Add Item
        </button>
      </form>
    </div>
  )
}

export default connect()(AddItem)