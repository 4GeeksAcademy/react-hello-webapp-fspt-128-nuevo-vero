export const initialStore = () => {
  return {
    contactos: [],

  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'traer_contactos':
      return {
        ...store,
        contactos: action.payload
      }

    default:
      throw Error('Unknown action.');



    case 'crear_contacto':
      return {
        ...store,
        contacto: action.payload

      }

    case 'borrar_contacto':
      const borrar_contacto = store.contactos.filter(contacto => contacto.id !== Number(action.payload))

      return {
        ...store,
        contactos: borrar_contacto,

      }

  }
}
