

const agenda = "Veronica"
const crearAgenda = async () => {
   const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agenda}`, {
         method: "POST"
    })

    if(response.ok){
        traerContactos()
        return
    }
}
export const traerContactos = async (dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agenda}`)
    if (!response.ok) {
        console.log('La agenda no existe');
       crearAgenda()
        return
    }
    const data = await response.json()
    dispatch({ type: 'traer_contactos', payload: data.contacts })
}

export const crearContactos = async (contacto, dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agenda}/contacts`, {
        method: "POST",
        body: JSON.stringify(contacto),
        headers: { "content-type": "application/json" }
    })   
    const data = await response.json()
    console.log(data);  
    dispatch({type: 'crear_contacto', payload:data})
}


export const borrarContactos = async (id, dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agenda}/contacts/${id}`,{
        method: "DELETE"       
    })
   if(response.ok){
     dispatch({ type: 'borrar_contacto', payload: id });
   }
}



export const editandoContacto = async (id, contacto, dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agenda}/contacts/${id}`,{
            method:"PUT",
            body: JSON.stringify(contacto),
            headers: {"content-type": "application/json"}
    })
    const data = await response.json()
    console.log(data); 
      dispatch({ type: 'editar_contacto', payload: id });  

}











