import SelectItem from "./select-item";

export default function Select ({ id, title, items = [], urlPrefix, type, showSelect, setShowSelect }: any){
  return (
    <div className='record-subject'>
      <div
        className="subject-information"
        onClick={ () => { setShowSelect( showSelect === id ? 0 : id ) } }
      >
        <p>
          { title }
        </p>

        <div>
          <img
            className={showSelect === id ? 'active' : ''}
            src={`/img/chevron-down.svg`}
            alt="arrow"
          />
        </div>
      </div>

      <div className={`subject-documents ${ showSelect === id ? 'active' : '' }`}>
        { items?.length > 0 ?
          items.map( (item: { ClientID: number; DocumentID: number; Name: string; URL: string; }) =>
            <SelectItem
              key={ item.ClientID || item.DocumentID }
              title={ item.Name }
              type={type}
              url={ item.DocumentID ? item.URL : `/${urlPrefix}/${item.URL}` }
            />
          )
          :
          <div className='subject-document'>
            <div className="record-document">
              <p>Aun no hay elementos disponibles</p>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
