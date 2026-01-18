import { json } from "react-router-dom";

export const crearAgenda = async (agenda) => {
    await fetch(`https://playground.4geeks.com/contact/agendas/${agenda}`, {

        method: "POST"


    })

}

export const traerContactos = async (dispatch, agenda) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agenda}/contacts`)
    if (!response.ok) {
        console.log("hubo un error no hay agenda");
        crearAgenda(agenda)
        return
    }
    const data = response.json()
    dispatch({ type: 'traer_contactos', payload: data.contacts })
}

export const crearContactos = async (dispatch, contacto) => {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/${contacto}/contacts', {
        method: "POST",
        body: JSON.stringify(contacto),
        headers: { "content-type": "application/json" }
    })
    if(!response.ok){
        alert("error al crear el contacto")
        return
    }

    const data = await response.json()
    dispatch({ type: "crear_contacto", payload: data })
    console.log(data);
    


}


export const borrarContactos = async (contact_id, dispatch, contacto) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${contacto}/contacts/${contact_id}`,{
        method: "DELETE"
        
    })


   if(response.ok){
     dispatch({ type: 'borrar_contacto', payload: id });;
   }

   const data = await response.json()
   dispatch({ type: "borrar_contacto", payload: data})
   console.log(data);
   
 


}

export const editandoContacto = async (contacto, Navigate, dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${contacto}/contacts/${contacto.id}`,{
            method:"PUT",
            body: JSON.stringify(contacto),
            headers: {"content-type": "application/json"}
    })
    const data = await response.json()
    console.log(data);
    await traerContactos(dispatch)
    Navigate("/")
}











export const editaContacto = async (contactCard, Navigate, dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/daisy/contacts/${contactCard.id}`, {
        method: "PUT",
        body: JSON.stringify(contact),
        headers: { "content-type": "application/json" }
    })
    const data = await response.json()
    console.log(data);
    await getContacts(dispatch)
    Navigate("/")
}