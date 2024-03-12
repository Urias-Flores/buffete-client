import { Form } from "@remix-run/react";
import CloseButton from "./close_button";
import { useEffect, useState } from "react";

export default function ModalMessage({ features, setVisibleMessage }: any) {
  const { text, indexIcon, isOkCancel, data } = features;
  const [beVisible, setBevisible] = useState(false);

  const icon: any = {
    0: "alert-triangle.svg",
    1: "alert-circle.svg",
    2: "progress-check.svg",
  };

  useEffect(() => {
    setTimeout(() => {
      setBevisible(true);
    }, 100);
  }, []);

  const hideModal = () => {
    setBevisible(false);
    setTimeout(() => {
      setVisibleMessage(false);
    }, 300);
  };

  return (
    <div className={`modal ${beVisible ? "active" : ""}`}>
      <div className="message">
        <CloseButton hideModal={hideModal} />

        <div className="message-information">
          <img src={`/img/${icon[indexIcon]}`} alt="reference" />
          <p>{text}</p>
          <div className="buttons">
            {isOkCancel ? (
              <>
                <Form method={!data?.method ? "DELETE" : data.method}>
                  <input name={data?.name} type="hidden" value={data?.value} />
                  <input className="button" type="submit" value="Aceptar" />
                </Form>

                <input
                  className="button"
                  type="button"
                  onClick={() => {
                    hideModal();
                  }}
                  value="Cancelar"
                />
              </>
            ) : (
              <input
                className="button"
                type="button"
                onClick={() => {
                  hideModal();
                }}
                value="Aceptar"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
