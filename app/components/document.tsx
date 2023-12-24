import { useState } from 'react'
import {Link, useOutletContext} from "@remix-run/react";
import ModalDocument from "./modalDocument";


export default function Document ({ document, setSelectedDocument, setShowFormDeletedMessage }: any){
  const { Name, URL } = document
  const [showModalDocument, setShowModalDocument] = useState(false);
  const context: any = useOutletContext();



  return (
    <>
      { showModalDocument &&
        <ModalDocument
          URL={URL}
          setShowModalDocument={setShowModalDocument}
        />
      }

      <div className='item-list'>
        <div className="item-main">
          <img src="/img/file-description.svg" alt="user"/>
          <div className='item-information' onClick={() => { setShowModalDocument(true) }}>
            <h4>{Name}</h4>
          </div>
        </div>

        <div className='actions'>
          <Link to={`${context.URL_API}/document/download/${URL}`}>
            <img
              src='/img/download.svg'
              alt="square"
            />
          </Link>
          <img
            onClick={ () => {
                setSelectedDocument(document)
                setShowFormDeletedMessage(true)
              }
            }
            src="/img/trash.svg"
            alt="trash"
          />
        </div>
      </div>
    </>
  )
}
