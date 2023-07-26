import SelectDocument from "./selectDocument";

export default function SelectSubject ({ subject, showSubject, setShowSubject }){
  const {SubjectID, Name, Documents } = subject

  return (
    <div className="record-category">
      <div
        className="record-category-up"
        onClick={ () => { setShowSubject( showSubject === SubjectID ? 0 : SubjectID ) } }
      >
        <p>{ Name }</p>
        <img src="/img/chevron-down.svg" alt="arrow"/>
      </div>
      <div className={`record-subcategories ${ showSubject === SubjectID ? 'active' : '' }`}>
        { Documents &&
          Documents.map( document =>
            <SelectDocument
              key={document.DocumentID}
              document={document}
            />
          )
        }
      </div>
    </div>
  )
}
