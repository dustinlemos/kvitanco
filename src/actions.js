export const openOrder = (id) => {
  return { 
    type: 'OPEN_ORDER',
    id
  }
}

export const closeOrder = (id) => {
  return { 
    type: 'CLOSE_ORDER',
    id
  }
}

export const refundOrder = (id) => {
  return { 
    type: 'REFUND_ORDER',
    id
  }
}

export const addNote = (id, note) => {
  return { 
    type: 'ADD_NOTE',
    id,
    note
  }
}

export const updateFilter = (filter) => {
  return { 
    type: 'UPDATE_FILTER',
    filter
  }
}