import {Link} from "@remix-run/react";

export default function Subject ({ subject, subjectSelected, setSubjectSelected }: any){

  const { SubjectID, Name, Documents } = subject

  return (
    <div className="item-list">
      <Link to={`/materias/${Name}`} className="item-main">
        <img src="/img/category.svg" alt="user"/>
        <div className="item-information">
          <h4>{Name}</h4>
          <p>Numero total de documentos: {Documents?.length}</p>
        </div>
      </Link>

      <img
        className='check'
        src={`/img/${ subjectSelected.SubjectID === SubjectID ? 'square-check.svg' : 'square.svg'}`}
        onClick={()=> { setSubjectSelected(subjectSelected.SubjectID  === SubjectID ? {} : subject) }}
        alt="square"
      />
    </div>
  )
}
