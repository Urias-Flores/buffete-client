import {Link} from "@remix-run/react";

export default function SelectItem ({ title, url }){
  return (
    <div className='subject-document'>
      <div
        className="record-document"
      >
        <p>{ title }</p>
        <p className='actions'>
          <Link to={url}>
            <img
              src='/img/go.svg'
              alt="go"
            />
          </Link>
        </p>
      </div>
    </div>
  )
}
