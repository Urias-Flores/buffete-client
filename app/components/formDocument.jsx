export default function FormDocument ({ document, setShowModalDocument }){
  return (
    <div className="modal">
      <div className="form">
        <img
          src="/img/x.svg"
          className="button-close"
          alt="x"
          onClick={
            ()=> {
              setShowModalDocument(false)
            }
          }
        />

        <h1 className="heading">Agregar nuevo documento</h1>
        <h2 className="subheading">Agrega toda la información sobre el documento para agregarlo al expediente</h2><br/>

        <div className="inputs">
          <div className="input">
            <label htmlFor="subject">Materia</label>
            <select name="subject" id="subject">
              <option value="1">Penal</option>
              <option value="2">Civil</option>
            </select>
          </div>

          <div className="input">
            <label htmlFor="category">Categoria</label>
            <select name="category" id="">
              <option value="1">Servicios presidiarios</option>
              <option value="2">Trabajo</option>
            </select>
          </div>

          <div className="input">
            <label htmlFor="file">Archivo</label>
            <input type="file" name="file" id="file"/>
          </div>
        </div>

        <input className="button" type="submit" value={document ? 'Modificar' : 'Guardar'}/>
      </div>
    </div>
  )
}
