
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {ContactCard} from "../components/ContactCard.jsx"
import { useEffect } from "react";
import { traerContactos } from "./apiService.js";


export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  useEffect(()=>{
	traerContactos(dispatch)
  },[])

	return (
      	<div className="container ">
			<div className="contactos ">

				{store.contactos.map((contacto) => {

					return <ContactCard contacto={contacto} key={contacto.id} />

				})}
			</div>
		</div>
    );	
	
}; 