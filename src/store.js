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





    case 'crear_contacto':
      return {
        ...store,
        contactos: [...store.contactos, action.payload]

      }

    case 'borrar_contacto':
      const borrar_contacto = store.contactos.filter(contacto => contacto.id !== action.payload)

      return {
        ...store,
        contactos: borrar_contacto,

      }
    
      case 'editar_contacto':
        return{
          ...store,
          contactos: store.contactos.map(contacto =>contacto.id === action.payload.id ?action.payload : contacto)
        }
    default:
      throw Error('Unknown action.');

  }
}
