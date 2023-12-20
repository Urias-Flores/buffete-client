import {Link} from "@remix-run/react";
import ModalDocument from "./modalDocument";

export default function SelectItem ({ title, type = 'URL' , url = '', onClick, when, setWhen}){


  return (
    <>
      { when &&
        <ModalDocument
          URL={url}
          setShowModalDocument={ setWhen }
        />
      }

      <div className='subject-document'>
        <div
          className="record-document"
        >
          <p onClick={ onClick }>{ title }</p>
          <p className='actions'>
            { type === 'URL' &&
              <Link to={url}>
                <img
                  src='/img/go.svg'
                  alt="go"
                />
              </Link>
            }
          </p>
        </div>
      </div>
    </>
  )
}
