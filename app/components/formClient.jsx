import { useState } from "react";

export default function FormClient ({ setVisibleFormClient, setVisibleFormClientForEditing, client }){

  const [name, setName] = useState(client?.Name);
  const [identity, setIdentity] = useState(client?.Identity);
  const [phone, setPhone] = useState(client?.Phone);
  const [email, setEmail] = useState(client?.Email);
  const [address, setAddress] = useState(client?.Address);

  return (
        <div className="modal">
          <div className="form">
            <img
              src="/img/x.svg"
              className="button-close"
              alt="image-x"
              onClick={
                ()=> {
                  setVisibleFormClient(false)
                  setVisibleFormClientForEditing(false)
                }
              }
            />

            <h1 className="heading">Agregar nuevo cliente</h1>
            <h2 className="subheading">Agrega toda la información del cliente para agregarlos a tu lista</h2><br/>

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

              <div className="input">
                <label htmlFor="identity">Identidad</label>
                <input
                  id="identity"
                  type="text"
                  placeholder="Nombre del cliente"
                  onChange={(e) => { setIdentity(e.target.value) }}
                  value={identity}
                />
              </div>

              <div className="input">
                <label htmlFor="number">Número telefónico</label>
                <input
                  id="number"
                  type="text"
                  placeholder="Nombre del cliente"
                  onChange={(e) => { setPhone(e.target.value) }}
                  value={phone}/>
              </div>

              <div className="input">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  id="email"
                  type="text"
                  placeholder="Nombre del cliente"
                  onChange={(e) => { setEmail(e.target.value) }}
                  value={email}/>
              </div>

              <div className="input">
                <label htmlFor="address">Domicilio</label>
                <input
                  id="address"
                  type="text"
                  placeholder="Nombre del cliente"
                  onChange={(e) => { setAddress(e.target.value) }}
                  value={address}
                />
              </div>
            </div>

            <input className="button" type="submit" value={client ? 'Modificar' : 'Guardar'}/>
          </div>
        </div>
    )
}
