export default function Dropdownlist ({ title, name, items = [], error, setItemSelected }: any){
  return (
    <div className="input">
      <label htmlFor={name}>{title}</label>
      <select
        name={name}
        id={name}
        onChange={ (evt) => { setItemSelected(evt.target.value) } }
      >
        { items.length > 0
          ?
          <>
            <option value={-1}>-- Seleccione un elemento --</option>
            {items.map((item: { SubjectID: number; ClientID: number; UserID: number; AccessLevelID: string; Name: string }) =>
              <option
                key={item?.SubjectID || item?.ClientID || item?.UserID || item?.AccessLevelID}
                value={item?.SubjectID || item?.ClientID || item?.UserID || item?.AccessLevelID}
              >
                {item?.Name || 'Name not found'}
              </option>
            )}
          </>
          :
          ''
        }
      </select>
      { error ? <p className="error">{error}</p> : null }
    </div>
  )
}
