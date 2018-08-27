let nextItemId = 0

export const addItem = (descripcion, precio, cantidad) => ({
  type: 'ADDED_ITEM',
  id: nextItemId++,
  descripcion,
  precio,
  cantidad
})
