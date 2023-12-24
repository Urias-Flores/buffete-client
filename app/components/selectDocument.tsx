import { useState } from 'react'
import ModalDocument from "./modalDocument";
import {Link, useOutletContext} from "@remix-run/react";

export default function SelectDocument  ({ document, setShowFormDeletedMessage, setSelectedDocument }: any){

  const { Name, URL } = document

  const [showModalDocument, setShowModalDocument] = useState(false);

  const context: any = useOutletContext();

  return (
    <div className='subject-document'>
      { showModalDocument &&
        <ModalDocument
          URL={URL}
          setShowModalDocument={ setShowModalDocument }
        />
      }

      <div
        className="record-document"
      >
        <p onClick={ () => { setShowModalDocument(true) } }>{ Name }</p>
        <p className='actions'>
          <Link to={`${context.URL_API}/documents/download/${URL}`}>
            <img
              src='/img/download.svg'
              alt="trash"
            />
          </Link>
          <img
            onClick={ () => {
                setSelectedDocument(document)
                setShowFormDeletedMessage(true)
              }
            }
            src="/img/trash.svg" alt="trash"
          />
        </p>
      </div>
    </div>
  )
}
