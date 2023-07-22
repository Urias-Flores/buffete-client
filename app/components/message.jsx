import {Form} from "@remix-run/react";

export default function Message ({ features, setVisibleMessage }){

  const { text, indexIcon, isOkCancel, data } = features

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
          alt="x"
          className="button-close"
          onClick={
            () => {
              setVisibleMessage(false)
            }
          }
        />

        <div className="message-information">
          <img src={`/img/${icon[indexIcon]}`} alt="reference"/>
          <p>{text}</p>
          <div className="actions">
            { isOkCancel ?
              <>
                <Form method="DELETE" onSubmit={ () => { setVisibleMessage(false) } }>
                  <input name="id" type="hidden" value={ data }/>
                  <input
                    className="button"
                    type="submit"
                    value="Aceptar"
                  />
                </Form>

                <input
                  className="button"
                  type="button"
                  onClick={ () => { setVisibleMessage(false) } }
                  value="Cancelar"
                />
              </>
              :
              <input
                className="button"
                type="button"
                onClick={ () => { setVisibleMessage(false) } }
                value="Aceptar"
              />
            }
          </div>
        </div>
      </div>
    </div>
  )
}
