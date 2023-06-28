export default function Message ({ isOkCancel, text, setVisibleMessage, indexIcon }){

  const icon = {
    0 : "alert-triangle.svg",
    1 : "alert-circle.svg",
    2 : "progress-check.svg",
  }

  return (
    <div className="modal">
      <div className="message">
        <img
          src="/img/x.svg"
          alt="image-x"
          className="button-close"
          onClick={
            () => {
              setVisibleMessage(false)
            }
          }
        />

        <div className="message-information">
          <img src={`/img/${icon[indexIcon]}`} alt="image-reference"/>
          <p>{text}</p>
          <div className="actions">
            <button
              className="button"
              onClick={ () => { setVisibleMessage(false) }}
            >
              Aceptar
            </button>
            { isOkCancel &&
              <button
                className="button"
                onClick={ () => { setVisibleMessage(false) }}
              >
                Cancelar
              </button> }
          </div>
        </div>
      </div>
    </div>
  )
}
