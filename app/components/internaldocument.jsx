import ModalDocument from "./modalDocument";
import { useState } from "react";
import {Link} from "@remix-run/react";

export default function InternalDocument ({ InternalDocument, setSelectedDocument, setShowFormDeletedMessage }){
  const { Name, URL } = InternalDocument
  const [showModalDocument, setShowModalDocument] = useState(false);

  return (
    <>
      { showModalDocument &&
        <ModalDocument
          URL={URL}
          isInternalDocument={true}
          setShowModalDocument={setShowModalDocument}
        />
      }

      <div className='item-list'>
        <div className="item-main">
          <img src="/img/file-description.svg" alt="file"/>
          <div className='item-information' onClick={() => { setShowModalDocument(true) }}>
            <h4>{Name}</h4>
          </div>
        </div>

        <div className='actions'>
          <Link to={`http://localhost:3001/api/internaldocument/download/${URL}`}>
            <img
              src='/img/download.svg'
              alt="download"
            />
          </Link>
          <img
            onClick={ () => {
                setSelectedDocument(InternalDocument)
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
