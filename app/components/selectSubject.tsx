import SelectDocument from "./selectDocument";

export default function SelectSubject ({ subject, showSubject, setShowSubject, setShowFormDeletedMessage, setSelectedDocument }: any){
  const {SubjectID, Name, Documents } = subject

  return (
    <div className="record-subject">
      <div
        className="subject-information"
        onClick={ () => { setShowSubject( showSubject === SubjectID ? 0 : SubjectID ) } }
      >
        <p>
          { Name }
        </p>

        <div>
          <img
            className={showSubject === SubjectID ? 'active' : ''}
            src={`/img/chevron-down.svg`}
            alt="arrow"
          />
        </div>
      </div>

      <div className={`subject-documents ${ showSubject === SubjectID ? 'active' : '' }`}>
        { Documents?.length > 0 ?
          Documents.map( (document: { DocumentID: number }) =>
            <SelectDocument
              key={document.DocumentID}
              document={document}
              setSelectedDocument={setSelectedDocument}
              setShowFormDeletedMessage={setShowFormDeletedMessage}
            />
          )
          :
          <div className='subject-document'>
            <div className="record-document">
              <p>Aun no hay documentos disponibles</p>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
