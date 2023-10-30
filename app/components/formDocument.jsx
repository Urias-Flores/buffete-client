import {Form, useNavigation} from "@remix-run/react";

import Spinner from "./spinner";
import CloseButton from "./close_button";

export default function FormDocument ({ method, errors, subjects, ClientID, UserID, setShowModalDocument }){
  const navigation = useNavigation()

  return (
    <div className="modal">
      <Form className="form" method={method} encType="multipart/form-data">
        <CloseButton
          setVisibleForm={setShowModalDocument}
        />

        <h1 className="heading">Agregar nuevo documento</h1>
        <h2 className="subheading">Agrega toda la información sobre el documento para agregarlo al expediente</h2><br/>

        <div className="inputs">
          <div className="input">
            <input name='Client' type="hidden" value={ClientID}/>
            <input name='User' type="hidden" value={UserID}/>

            <label htmlFor="title">Titulo</label>
            <input
              name='Name'
              id='title'
              type="text"
              placeholder='Escriba el titulo del documento...'
            />
            { errors?.name ? <p className="error">{errors.name}</p> : null }
          </div>

          <div className="input">
            <label htmlFor="subject">Materia</label>
            <select
              name="Subject"
              id="subject"
            >
              { subjects.length > 0
                ?
                <>
                <option value={-1}>-- Seleccione una materia --</option>
                {subjects.map(item =>
                  <option key={item.SubjectID} value={item.SubjectID}>{item.Name}</option>
                )}
                </>
                :
                ''
              }
            </select>
            { errors?.subject ? <p className="error">{errors.subject}</p> : null }
          </div>

          <div className="input">
            <label htmlFor="file">Archivo</label>
            <input
              type="file"
              name="File"
              id="file"
            />
            { errors?.file ? <p className="error">{errors.file}</p> : null }
          </div>
        </div>

        <div className='loading'>
          <input className="button" type="submit" value='Guardar'/>
          { navigation?.state !== 'idle' &&
            <Spinner/>
          }
        </div>
      </Form>
    </div>
  )
}
