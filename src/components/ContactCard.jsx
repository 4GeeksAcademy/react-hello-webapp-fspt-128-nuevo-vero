import { crearContactos } from "../pages/apiService"
import { borrarContactos } from "../pages/apiService"
import  useGlobalReducer  from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";



export const ContactCard = ({ contacto }) => {
  const { store, dispatch } = useGlobalReducer()


  if (!contacto.exist) {
    crearContactos()

  }

  return (
    <li className="row contact">
      <div className="col- md-3 photo">
        <img src="https://imgs.search.brave.com/pvXbsw8nvjxu5VaAqWK-K5AoE-nx-9DzrlzMlCioBDc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYmFi/eS1jYXQtcGljdHVy/ZXMtazA5ZHlvcjJj/NHBkOHNubS5qcGc"
          className="rounded-circle"
          alt=""
          srcSet=""
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
      </div>
      <div>
        <div className="name fw-bold fs-3 text">{contacto.name.ToUpperCase()}</div>
        <div className="direccion"><i className="fa-solid fa-location-dot me-2"></i>{contacto.address}</div>
        <div className="phone"><i className="fa-solid fa-phone me-2"></i>{contacto.phone}</div>
        <div className="email"><i className="fa-solid fa-envelope me-2"></i>{contacto.email}</div>

      </div>

      <Link to={`/edit/${contacto.id}`}>
        <button type="button" className="btn p-0 border-0-bg-transparent me-2">< i className="fa-solid fa-pen-to square"></i></button>
      </Link>


      <button
        type="button" className="btn p-0 border-0-bg-transparent"
        data-bs-toggle="modal"
        data-bs-target={`#modal-${contacto.id}`}
        aria-label={`Delete ${contacto.name}`}
        onClick={async () => {
          await borrarContactos(store.contacto.id, dispatch);
          navigate("/");
        }}
      >

        < i className="fa-trash"></i>
      </button>

      {/* comienzo del modalLabel */}

      <div className="modal fade" id={`modal-${contacto.id}`} tabIndex="-1" aria-labelledby={`modalLabel-${contacto.id}`}>
        <div className="modal-dialog">
          <div className="modal-content" id={`modalLabel-${contacto.id}`}>
            <div className="modal-body">
              estas totalmente seguro de borrar a {contacto.name}?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">close</button>
              <Link to={"/borrar"}>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={borrarContactos()}>borrar</button>
              </Link >
            </div>
          </div>

        </div>
      </div>

    </li>


  )



}