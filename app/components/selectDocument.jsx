import { useState } from 'react'
import ModalDocument from "./modalDocument";

export default function SelectDocument  ({ document }){

  const { DocumentID, Name, URL } = document
  const [showModalDocument, setShowModalDocument] = useState(false);

  return (
    <div className={`subcategory`}>
      { showModalDocument &&
        <ModalDocument
          URL={URL}
          setShowModalDocument={setShowModalDocument}
        />
      }

      <div
        className="record-subcategory-up"
        onClick={ () => { setShowModalDocument(true) } }
      >
        <p>{ Name }</p>
        <p className='actions'>
          <img src="/img/trash.svg" alt="trash"/>
        </p>
      </div>
    </div>
  )
}
