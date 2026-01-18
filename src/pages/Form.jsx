


import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate, useParams } from "react-router-dom";
import { crearContactos, editandoContacto } from "../service/apiService";

export const Form = () => {

    const {store, dispatch} = useGlobalReducer()
    
    const { id } = useParams()

    const navigate = useNavigate()

    const [contacto, setcontacto] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    })
    console.log(contacto);

    const [editado, setEditar] = useState(false)

    const [showAlert, setShowAlert] = useState(false);


    //funcion que añade el valor del input 
    const handleInputsChange = (evento) => {
        setcontacto({
            ...contacto,
            [evento.target.name]: evento.target.value
        })


    }
    //funcion que envia
    const handleSubmit = (evento) => {
        evento.preventDefault();
        if (!contacto.name || !contacto.email || !contacto.phone || !contacto.address) {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 2000);
            return;
        }

        //peticion a la API para agregar o editar el contacto
        if(editado){
            editandoContacto(contacto.id, contacto, dispatch)

        }
        else crearContactos(contacto,dispatch)
        navigate("/")
    }


const contactoaEditar = () =>{
   const contactoEncontrado = store.contactos.find (contacto => {
    return contacto.id === Number(id) 
})
    setcontacto(contactoEncontrado)
}


    useEffect(() => {
        if (id) {
            console.log("estoy editando");
            setEditar(true)
            contactoaEditar()
        } else {
            console.log("estoy creando un contacto");
            setEditar(false)
        }

    }, [])
    return (
        <div className="container">
            <form onSubmit={handleSubmit} >
                {showAlert && (
                    <div className="alert alert-warning" role="alert">
                        todos los campos son obligatorios

                    </div>
                )}

                <input className="form-control mb-2"
                    type="text"
                    placeholder="name"
                    value={contacto.name}
                    name="name"
                    onChange={handleInputsChange}
                />
                <input className="form-control mb-2"
                    type="text"
                    placeholder="address"
                    value={contacto.address}
                    name="address"
                    onChange={handleInputsChange}
                />
                <input className="form-control mb-2"
                    type="text"
                    placeholder="phone"
                    value={contacto.phone}
                    name="phone"
                    onChange={handleInputsChange}
                />
                <input className="form-control mb-2"
                    type="text"
                    placeholder="email"
                    value={contacto.email}
                    name="email"
                    onChange={handleInputsChange}
                />
                <button className="btn-btn-success w-100" type="submit">guardar</button>
            </form>
        </div>

    )


}
