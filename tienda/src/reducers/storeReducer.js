const storeReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADDED_ITEM':
      return [
        ...state,
        {
          id: action.id,
          descripcion: action.descripcion,
          precio: action.precio,
          cantidad: action.cantidad
        }
      ]
    //todavia no se ha implementado la venta de items
    case 'SOLD_ITEM':
      return state
    default:
      return state
  }
}

export default storeReducer