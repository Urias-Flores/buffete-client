import {useState} from "react";

export default function FormCategory ({ category, setShowModalCategory }){

  const [name, setName] = useState("");

  return (
    <div className="modal">
      <div className="form">
        <img
          src="/img/x.svg"
          className="button-close"
          alt="image-x"
          onClick={
            ()=> {
              setShowModalCategory(false)
            }
          }
        />

        <h1 className="heading">Agregar nueva materia</h1>
        <h2 className="subheading">Agregue el nombre de la materia para guardar en la lista</h2><br/>

        <div className="inputs">
          <div className="input">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              type="text"
              placeholder="Nombre del cliente"
              onChange={(e) => { setName(e.target.value) }}
              value={name}
            />
          </div>
        </div>

        <input className="button" type="submit" value={category ? 'Modificar' : 'Guardar'}/>
      </div>
    </div>
  )
}
