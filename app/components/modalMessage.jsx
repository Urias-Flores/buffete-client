import { Form } from "@remix-run/react";
import CloseButton from "./close_button";

export default function ModalMessage ({ features, setVisibleMessage }){

  const { text, indexIcon, isOkCancel, data } = features

  const icon = {
    0 : "alert-triangle.svg",
    1 : "alert-circle.svg",
    2 : "progress-check.svg",
  }

  return (
    <div className="modal">
      <div className="message">
        <CloseButton
          setVisibleForm={ setVisibleMessage }
        />

        <div className="message-information">
          <img src={`/img/${icon[indexIcon]}`} alt="reference"/>
          <p>{text}</p>
          <div className="buttons">
            { isOkCancel ?
              <>
                <Form method="DELETE">
                  <input name={ data?.name } type="hidden" value={ data?.value }/>
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
