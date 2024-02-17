import { useState } from "react";
import {Link, useOutletContext} from "@remix-run/react";

import ModalDocument from "./modalDocument";

export default function InternalDocument ({ InternalDocument, setSelectedDocument, setShowFormDeletedMessage }: any){
  const { Name, URL } = InternalDocument
  const [showModalDocument, setShowModalDocument] = useState(false);
  const context: any = useOutletContext();

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
          <Link to={`http://localhost:8000/api/internaldocument/download/${URL}`}>
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
