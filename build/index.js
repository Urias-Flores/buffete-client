var __defProp = Object.defineProperty;
var __require = /* @__PURE__ */ ((x) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(x, {
  get: (a, b) => (typeof require < "u" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require < "u")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});

// app/components/navigation.tsx
import { useState } from "react";
import { Form, Link, useLocation } from "@remix-run/react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function Navigation({ user }) {
  let { pathname } = useLocation(), [showList, setShowList] = useState(!1);
  return /* @__PURE__ */ jsx2("header", { children: /* @__PURE__ */ jsxs("div", { className: "bar", children: [
    /* @__PURE__ */ jsx2(Link, { to: "/", children: /* @__PURE__ */ jsx2("img", { src: "/img/logo-only.png", alt: "logo", className: "logo" }) }),
    /* @__PURE__ */ jsxs("nav", { className: "nav", children: [
      /* @__PURE__ */ jsx2(
        Link,
        {
          className: `link ${pathname === "/" ? "active" : ""}`,
          to: "/",
          children: "Inicio"
        }
      ),
      /* @__PURE__ */ jsx2(
        Link,
        {
          className: `link ${pathname.includes("/clientes") ? "active" : ""}`,
          to: "/clientes",
          children: "Clientes"
        }
      ),
      user?.AccessLevel === "A" || user?.AccessLevel === "R" ? /* @__PURE__ */ jsx2(
        Link,
        {
          className: `link ${pathname.includes("/usuarios") ? "active" : ""}`,
          to: "/usuarios",
          children: "Usuarios"
        }
      ) : null,
      /* @__PURE__ */ jsx2(
        Link,
        {
          className: `link ${pathname.includes("/citas") ? "active" : ""}`,
          to: "/citas",
          children: "Citas"
        }
      ),
      /* @__PURE__ */ jsx2(
        Link,
        {
          className: `link ${pathname.includes("/materias") ? "active" : ""}`,
          to: "/materias",
          children: "Materias"
        }
      ),
      /* @__PURE__ */ jsx2(
        Link,
        {
          className: `link ${pathname === "/documentacioninterna" ? "active" : ""}`,
          to: "/documentacioninterna",
          children: "Documentaci\xF3n interna"
        }
      ),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx2("img", { src: "/img/user-circle.svg", alt: "user", className: "user", onClick: () => {
          setShowList(!showList);
        } }),
        showList && /* @__PURE__ */ jsxs("div", { className: "dropdownlist", children: [
          /* @__PURE__ */ jsxs("div", { className: "info", children: [
            /* @__PURE__ */ jsx2("p", { className: "username", children: user?.Name }),
            /* @__PURE__ */ jsx2("p", { className: "email", children: user?.Email })
          ] }),
          /* @__PURE__ */ jsx2(Form, { className: "logout", method: "post", action: "/", children: /* @__PURE__ */ jsxs("button", { className: "button", type: "submit", children: [
            /* @__PURE__ */ jsx2("img", { src: "/img/logout.svg", alt: "logout" }),
            /* @__PURE__ */ jsx2("p", { children: "Cerrar sesi\xF3n" })
          ] }) })
        ] })
      ] })
    ] })
  ] }) });
}

// app/styles/normalize.css
var normalize_default = "/build/_assets/normalize-6MPO5YKD.css";

// app/styles/global.css
var global_default = "/build/_assets/global-7ICFG65C.css";

// node_modules/react-pdf/dist/esm/Page/TextLayer.css
var TextLayer_default = "/build/_assets/TextLayer-2BXAHI2H.css";

// node_modules/react-pdf/dist/esm/Page/AnnotationLayer.css
var AnnotationLayer_default = "/build/_assets/AnnotationLayer-VZWBR4TF.css";

// app/root.tsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  isRouteErrorResponse,
  useRouteError,
  useLoaderData,
  useLocation as useLocation2
} from "@remix-run/react";

// app/auth/auth.server.ts
import { Authenticator, AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";

// app/auth/session.server.ts
import { createCookieSessionStorage } from "@remix-run/node";
var sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session",
    sameSite: "none",
    path: "/",
    httpOnly: !0,
    secure: !0,
    secrets: ["s3cr3t"]
    //secure: process.env.NODE_ENV === "production",
  }
}), { getSession, commitSession, destroySession } = sessionStorage;

// app/services/auth.server.ts
async function login(username, password) {
  return await (await fetch("http://localhost:8000/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Email_Name: username,
      Password: password
    })
  })).json();
}

// app/auth/auth.server.ts
var authenticator = new Authenticator(sessionStorage, {
  throwOnError: !0,
  sessionErrorKey: "sessionErrorKey"
});
authenticator.use(
  new FormStrategy(async ({ form }) => {
    let email = form.get("email"), password = form.get("password");
    if (email.length === 0)
      throw new AuthorizationError("El email es obligatorio");
    if (password.length === 0)
      throw new AuthorizationError("La contrase\xF1a es obligatorio");
    let response = await login(email, password);
    switch (response?.Result) {
      case -2:
        throw new AuthorizationError("El correo electr\xF3nico no fue encontrado");
      case -1:
        throw new AuthorizationError("La contrase\xF1a ingresada es incorrecta");
      case 0:
        throw new AuthorizationError("El usuario ingresado se encuentra inhabilitado");
      case 1:
        return response?.User;
      default:
        throw new AuthorizationError("La respuesta obtenida del servidor no es valida`");
    }
  }),
  "user-pass"
);

// app/root.tsx
import { Fragment, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function meta() {
  return [
    {
      title: "Inicio"
    },
    {
      property: "charset",
      content: "utf-8"
    },
    {
      property: "viewport",
      content: "width=device-widht, initial-scale=1"
    }
  ];
}
var links = () => [
  {
    rel: "stylesheet",
    href: normalize_default
  },
  {
    rel: "stylesheet",
    href: global_default
  },
  {
    rel: "stylesheet",
    href: TextLayer_default
  },
  {
    rel: "stylesheet",
    href: AnnotationLayer_default
  },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "true"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700;900&display=swap"
  }
];
async function loader({ request }) {
  return {
    USER: await authenticator.isAuthenticated(request),
    ENV: {
      URL_API: process.env.API_URL
    }
  };
}
async function action({ request }) {
  return await authenticator.logout(request, {
    redirectTo: "login"
  });
}
function App() {
  let loader13 = useLoaderData();
  return /* @__PURE__ */ jsx3(Document, { user: loader13?.USER, children: /* @__PURE__ */ jsx3(Outlet, { context: {
    URL_API: loader13?.ENV.URL_API
  } }) });
}
function Document({ children, user }) {
  let { pathname } = useLocation2();
  return /* @__PURE__ */ jsxs2("html", { lang: "es", children: [
    /* @__PURE__ */ jsxs2("head", { children: [
      /* @__PURE__ */ jsx3(Meta, {}),
      /* @__PURE__ */ jsx3(Links, {}),
      /* @__PURE__ */ jsx3("title", {})
    ] }),
    /* @__PURE__ */ jsxs2("body", { children: [
      pathname === "/login" || pathname === "/create-account" || pathname === "/forgot-password" ? /* @__PURE__ */ jsx3(Fragment, {}) : /* @__PURE__ */ jsx3(Navigation, { user }),
      children,
      /* @__PURE__ */ jsx3(Scripts, {}),
      /* @__PURE__ */ jsx3(LiveReload, {})
    ] })
  ] });
}
function ErrorBoundary() {
  let error = useRouteError();
  return isRouteErrorResponse(error) ? /* @__PURE__ */ jsx3(Document, { children: /* @__PURE__ */ jsxs2("div", { className: "container", children: [
    /* @__PURE__ */ jsx3("h1", { className: "heading", children: "Error" }),
    /* @__PURE__ */ jsx3("p", { className: "subheading", children: "Error: 404 pagina no encontrado" })
  ] }) }) : error instanceof Error ? /* @__PURE__ */ jsx3(Document, { children: /* @__PURE__ */ jsxs2("div", { className: "error-page", children: [
    /* @__PURE__ */ jsx3("h1", { className: "title", children: "Ups... Ha ocurrido un error" }),
    /* @__PURE__ */ jsx3("img", { className: "image", src: "/img/info-octagon.svg", alt: "error" }),
    /* @__PURE__ */ jsxs2("p", { className: "information", children: [
      "Error: ",
      error.message
    ] })
  ] }) }) : /* @__PURE__ */ jsx3("h1", { children: "Unknown Error" });
}

// app/routes/documentacioninterna.tsx
var documentacioninterna_exports = {};
__export(documentacioninterna_exports, {
  action: () => action2,
  default: () => Documentacioninterna,
  loader: () => loader2
});
import { useState as useState4, useEffect } from "react";
import { useActionData, useLoaderData as useLoaderData2 } from "@remix-run/react";

// app/services/internaldocuments.server.ts
async function getInternalDocuments() {
  return await (await fetch("http://localhost:8000/api/internal-documents")).json();
}
async function addInternalDocument(internalDocumentFormData) {
  return await (await fetch("http://localhost:8000/api/internal-documents", {
    method: "POST",
    body: internalDocumentFormData
  })).json();
}
async function deleteInternalDocument(InternalDocumentID) {
  return await (await fetch(`http://localhost:8000/api/internal-documents/${InternalDocumentID}`, {
    method: "DELETE"
  })).json();
}

// app/components/modalMessage.tsx
import { Form as Form2 } from "@remix-run/react";

// app/components/close_button.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function CloseButton({ setVisibleForm }) {
  return /* @__PURE__ */ jsx4(
    "img",
    {
      src: "/img/x.svg",
      className: "button-close",
      alt: "close",
      onClick: () => {
        setVisibleForm(!1);
      }
    }
  );
}

// app/components/modalMessage.tsx
import { Fragment as Fragment2, jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
function ModalMessage({ features, setVisibleMessage }) {
  let { text, indexIcon, isOkCancel, data } = features;
  return /* @__PURE__ */ jsx5("div", { className: "modal", children: /* @__PURE__ */ jsxs3("div", { className: "message", children: [
    /* @__PURE__ */ jsx5(
      CloseButton,
      {
        setVisibleForm: setVisibleMessage
      }
    ),
    /* @__PURE__ */ jsxs3("div", { className: "message-information", children: [
      /* @__PURE__ */ jsx5("img", { src: `/img/${{
        0: "alert-triangle.svg",
        1: "alert-circle.svg",
        2: "progress-check.svg"
      }[indexIcon]}`, alt: "reference" }),
      /* @__PURE__ */ jsx5("p", { children: text }),
      /* @__PURE__ */ jsx5("div", { className: "buttons", children: isOkCancel ? /* @__PURE__ */ jsxs3(Fragment2, { children: [
        /* @__PURE__ */ jsxs3(Form2, { method: data?.method ? data.method : "DELETE", children: [
          /* @__PURE__ */ jsx5("input", { name: data?.name, type: "hidden", value: data?.value }),
          /* @__PURE__ */ jsx5(
            "input",
            {
              className: "button",
              type: "submit",
              value: "Aceptar"
            }
          )
        ] }),
        /* @__PURE__ */ jsx5(
          "input",
          {
            className: "button",
            type: "button",
            onClick: () => {
              setVisibleMessage(!1);
            },
            value: "Cancelar"
          }
        )
      ] }) : /* @__PURE__ */ jsx5(
        "input",
        {
          className: "button",
          type: "button",
          onClick: () => {
            setVisibleMessage(!1);
          },
          value: "Aceptar"
        }
      ) })
    ] })
  ] }) });
}

// app/components/internaldocument.tsx
import { useState as useState3 } from "react";
import { Link as Link2, useOutletContext as useOutletContext2 } from "@remix-run/react";

// app/components/modalDocument.tsx
import { Document as Document2, Page, pdfjs } from "react-pdf";
import { useState as useState2 } from "react";
import { useOutletContext } from "@remix-run/react";
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function ModalDocument({ URL, setShowModalDocument, isInternalDocument = !1 }) {
  let [numPages, setNumPages] = useState2(0), [pageNumber, setPageNumber] = useState2(1), onDocumentLoadSuccess = ({ numPages: numPages2 }) => {
    setNumPages(numPages2);
  }, reduce = () => {
    pageNumber !== 1 && setPageNumber(pageNumber - 1);
  }, add = () => {
    pageNumber !== numPages && setPageNumber(pageNumber + 1);
  }, context = useOutletContext();
  return /* @__PURE__ */ jsx6("div", { className: "modal", children: /* @__PURE__ */ jsxs4("div", { className: "document", children: [
    /* @__PURE__ */ jsx6(
      "img",
      {
        src: "/img/x.svg",
        className: "button-close",
        alt: "close",
        onClick: () => {
          setShowModalDocument(!1);
        }
      }
    ),
    /* @__PURE__ */ jsx6(
      Document2,
      {
        file: `http://localhost:8000/${isInternalDocument ? "internal-documents" : "documents"}/download/${URL}`,
        onLoadError: console.error,
        onLoadSuccess: onDocumentLoadSuccess,
        className: "file",
        children: /* @__PURE__ */ jsx6(Page, { pageNumber })
      }
    ),
    /* @__PURE__ */ jsxs4("div", { className: "changerpage", children: [
      /* @__PURE__ */ jsx6("img", { src: "/img/arror-left.svg", alt: "left", onClick: reduce }),
      /* @__PURE__ */ jsxs4("p", { children: [
        pageNumber,
        " / ",
        numPages
      ] }),
      /* @__PURE__ */ jsx6("img", { src: "/img/arrow-right.svg", alt: "right", onClick: add })
    ] })
  ] }) });
}

// app/components/internaldocument.tsx
import { Fragment as Fragment3, jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
function InternalDocument({ InternalDocument: InternalDocument2, setSelectedDocument, setShowFormDeletedMessage }) {
  let { Name, URL } = InternalDocument2, [showModalDocument, setShowModalDocument] = useState3(!1), context = useOutletContext2();
  return /* @__PURE__ */ jsxs5(Fragment3, { children: [
    showModalDocument && /* @__PURE__ */ jsx7(
      ModalDocument,
      {
        URL,
        isInternalDocument: !0,
        setShowModalDocument
      }
    ),
    /* @__PURE__ */ jsxs5("div", { className: "item-list", children: [
      /* @__PURE__ */ jsxs5("div", { className: "item-main", children: [
        /* @__PURE__ */ jsx7("img", { src: "/img/file-description.svg", alt: "file" }),
        /* @__PURE__ */ jsx7("div", { className: "item-information", onClick: () => {
          setShowModalDocument(!0);
        }, children: /* @__PURE__ */ jsx7("h4", { children: Name }) })
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "actions", children: [
        /* @__PURE__ */ jsx7(Link2, { to: `http://localhost:8000/internaldocument/download/${URL}`, children: /* @__PURE__ */ jsx7(
          "img",
          {
            src: "/img/download.svg",
            alt: "download"
          }
        ) }),
        /* @__PURE__ */ jsx7(
          "img",
          {
            onClick: () => {
              setSelectedDocument(InternalDocument2), setShowFormDeletedMessage(!0);
            },
            src: "/img/trash.svg",
            alt: "trash"
          }
        )
      ] })
    ] })
  ] });
}

// app/components/formInternalDocument.tsx
import { Form as Form3, useNavigation } from "@remix-run/react";
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
function FormInternalDocument({ method, errors = {}, setShowModalInternalDocument }) {
  let navigation = useNavigation();
  return /* @__PURE__ */ jsx8("div", { className: "modal", children: /* @__PURE__ */ jsxs6(Form3, { className: "form", method, encType: "multipart/form-data", children: [
    /* @__PURE__ */ jsx8(
      "img",
      {
        src: "/img/x.svg",
        className: "button-close",
        alt: "x",
        onClick: () => {
          setShowModalInternalDocument(!1);
        }
      }
    ),
    /* @__PURE__ */ jsx8("h1", { className: "heading", children: "Agregar nuevo documento" }),
    /* @__PURE__ */ jsx8("h2", { className: "subheading", children: "Agrega toda la informaci\xF3n sobre el documento para agregarlo al expediente" }),
    /* @__PURE__ */ jsx8("br", {}),
    /* @__PURE__ */ jsxs6("div", { className: "inputs", children: [
      /* @__PURE__ */ jsx8("input", { type: "hidden", name: "User", value: 2 }),
      /* @__PURE__ */ jsxs6("div", { className: "input", children: [
        /* @__PURE__ */ jsx8("label", { htmlFor: "title", children: "Titulo" }),
        /* @__PURE__ */ jsx8(
          "input",
          {
            name: "Name",
            id: "title",
            type: "text",
            placeholder: "Escriba el titulo del documento..."
          }
        ),
        errors?.name ? /* @__PURE__ */ jsx8("p", { className: "error", children: errors.name }) : null
      ] }),
      /* @__PURE__ */ jsxs6("div", { className: "input", children: [
        /* @__PURE__ */ jsx8("label", { htmlFor: "file", children: "Archivo" }),
        /* @__PURE__ */ jsx8(
          "input",
          {
            type: "file",
            name: "File",
            id: "file"
          }
        ),
        errors?.file ? /* @__PURE__ */ jsx8("p", { className: "error", children: errors.file }) : null
      ] })
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: "loading", children: [
      /* @__PURE__ */ jsx8("input", { className: "button", type: "submit", value: "Guardar" }),
      navigation?.state !== "idle" && /* @__PURE__ */ jsxs6("div", { className: "spinner", children: [
        /* @__PURE__ */ jsx8("div", { className: "bounce1" }),
        /* @__PURE__ */ jsx8("div", { className: "bounce2" }),
        /* @__PURE__ */ jsx8("div", { className: "bounce3" })
      ] })
    ] })
  ] }) });
}

// app/routes/documentacioninterna.tsx
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
async function loader2({ request }) {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  }), await getInternalDocuments();
}
async function action2({ request }) {
  let form = await request.formData(), InternalDocumentID = form.get("InternalDocumentID"), name = form.get("Name"), file = form.get("File"), internalFiles = await getInternalDocuments(), errors = {};
  if (request.method === "POST" && (name.length === 0 && (errors.name = "El titulo del documento es obligatorio"), name.length > 80 && (errors.name = "El titulo del documento no puede exceder las 80 letras"), internalFiles.filter((internalFile) => internalFile.Name.toLowerCase() === name.toLowerCase()).length > 0 && (errors.name = "Ya existe un documento registrado con el nombre descrito"), file || (errors.file = "Debe seleccionar un documento")), Object.keys(errors).length > 0)
    return {
      status: "ERROR",
      data: null,
      errors
    };
  switch (request.method) {
    case "POST":
      return {
        status: "INSERTED",
        data: await addInternalDocument(form),
        errors: {}
      };
    case "DELETE":
      return {
        status: "DELETED",
        data: await deleteInternalDocument(InternalDocumentID),
        errors: {}
      };
  }
}
function Documentacioninterna() {
  let [internalDocuments, setInternalDocuments] = useState4([]), [selectedDocument, setSelectedDocument] = useState4({ algo: 1 }), [showInsertedMessage, setShowInsertedMessage] = useState4(!1), [showDeletedMessage, setShowDeletedMessage] = useState4(!1), [showFormDeletedMessage, setShowFormDeletedMessage] = useState4(!1), [showFormInternalDocument, setShowFormInternalDocument] = useState4(!1), loader13 = useLoaderData2(), actionResult = useActionData();
  useEffect(() => {
    switch (actionResult?.status) {
      case "INSERTED":
        setShowFormInternalDocument(!1), setShowInsertedMessage(!0);
        break;
      case "DELETED":
        setShowFormDeletedMessage(!1), setShowDeletedMessage(!0);
        break;
    }
  }, [actionResult]), useEffect(() => {
    setInternalDocuments(loader13);
  }, [loader13]);
  let searchInternalDocument = (event) => {
    let value = event.target.value.toString().toLowerCase(), actualizedInternalDocuments = loader13?.filter((client) => client.Name.toLowerCase().includes(value));
    setInternalDocuments(actualizedInternalDocuments);
  };
  return /* @__PURE__ */ jsxs7("div", { className: "container", children: [
    showFormInternalDocument && /* @__PURE__ */ jsx9(
      FormInternalDocument,
      {
        method: "POST",
        errors: actionResult?.errors,
        setShowModalInternalDocument: setShowFormInternalDocument
      }
    ),
    showFormDeletedMessage && /* @__PURE__ */ jsx9(
      ModalMessage,
      {
        features: {
          text: "\xBFEsta seguro de la eliminaci\xF3n del documento?",
          isOkCancel: !0,
          indexIcon: 1,
          data: {
            name: "InternalDocumentID",
            value: selectedDocument?.InternalDocumentID
          }
        },
        setVisibleMessage: setShowFormDeletedMessage
      }
    ),
    showInsertedMessage && /* @__PURE__ */ jsx9(
      ModalMessage,
      {
        features: {
          text: "El documento ha sido agregado exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowInsertedMessage
      }
    ),
    showDeletedMessage && /* @__PURE__ */ jsx9(
      ModalMessage,
      {
        features: {
          text: "El documento ha sido eliminado exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowDeletedMessage
      }
    ),
    /* @__PURE__ */ jsx9("h1", { className: "heading", children: "Documentaci\xF3n interna" }),
    /* @__PURE__ */ jsx9("h2", { className: "subheading", children: "Gestiona toda la documentacion interna del buffete" }),
    /* @__PURE__ */ jsx9("div", { className: "top-options", children: /* @__PURE__ */ jsxs7("div", { className: "search", children: [
      /* @__PURE__ */ jsx9("img", { src: "/img/search.svg", alt: "search" }),
      /* @__PURE__ */ jsx9(
        "input",
        {
          onChange: (event) => {
            searchInternalDocument(event);
          },
          type: "text",
          placeholder: "Buscar"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx9("div", { className: "actions", children: /* @__PURE__ */ jsxs7(
      "button",
      {
        className: "button",
        onClick: () => {
          setShowFormInternalDocument(!0);
        },
        type: "button",
        children: [
          /* @__PURE__ */ jsx9("img", { src: "/img/add.svg", alt: "add" }),
          /* @__PURE__ */ jsx9("p", { children: "Agregar nuevo documento" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx9("div", { className: "list-scroll", children: internalDocuments.map(
      (internalDocument) => /* @__PURE__ */ jsx9(
        InternalDocument,
        {
          InternalDocument: internalDocument,
          setSelectedDocument,
          setShowFormDeletedMessage
        },
        internalDocument?.InternalDocumentID
      )
    ) })
  ] });
}

// app/routes/clientes._index.tsx
var clientes_index_exports = {};
__export(clientes_index_exports, {
  action: () => action3,
  default: () => Clientes,
  links: () => links2,
  loader: () => loader3
});
import { useEffect as useEffect2, useState as useState6 } from "react";
import { useActionData as useActionData2, useLoaderData as useLoaderData3 } from "@remix-run/react";

// app/components/formClient.tsx
import { useState as useState5 } from "react";
import { Form as Form4, useNavigation as useNavigation2 } from "@remix-run/react";

// app/components/spinner.tsx
import { jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
function Spinner({}) {
  return /* @__PURE__ */ jsxs8("div", { className: "spinner", children: [
    /* @__PURE__ */ jsx10("div", { className: "bounce1" }),
    /* @__PURE__ */ jsx10("div", { className: "bounce2" }),
    /* @__PURE__ */ jsx10("div", { className: "bounce3" })
  ] });
}

// app/components/input.tsx
import { jsx as jsx11, jsxs as jsxs9 } from "react/jsx-runtime";
function Input({ title, name, type = "text", placeholder = "", maxLength = 1e3, value, setValue, error }) {
  return /* @__PURE__ */ jsxs9("div", { className: "input", children: [
    /* @__PURE__ */ jsx11("label", { htmlFor: name, children: title }),
    /* @__PURE__ */ jsx11(
      "input",
      {
        name,
        id: name,
        type,
        maxLength,
        placeholder,
        onChange: (e) => {
          setValue(e.target.value);
        },
        value
      }
    ),
    error ? /* @__PURE__ */ jsx11("p", { className: "error", children: error }) : null
  ] });
}

// app/components/formClient.tsx
import { jsx as jsx12, jsxs as jsxs10 } from "react/jsx-runtime";
function FormClient({ method, errors, client = {}, setVisibleFormClient }) {
  let navigation = useNavigation2(), ClientID = client?.ClientID, [name, setName] = useState5(client?.Name || ""), [identity, setIdentity] = useState5(client?.Identity || ""), [phone, setPhone] = useState5(client?.Phone || ""), [email, setEmail] = useState5(client?.Email || ""), [address, setAddress] = useState5(client?.Address || "");
  return /* @__PURE__ */ jsx12("div", { className: "modal", children: /* @__PURE__ */ jsxs10(
    Form4,
    {
      className: "form",
      method,
      children: [
        /* @__PURE__ */ jsx12(
          CloseButton,
          {
            setVisibleForm: setVisibleFormClient
          }
        ),
        /* @__PURE__ */ jsx12("h1", { className: "heading", children: Object.keys(client).length === 0 ? "Agregar nuevo cliente" : "Modificar cliente" }),
        /* @__PURE__ */ jsxs10("h2", { className: "subheading", children: [
          "Ingresa toda la informaci\xF3n del cliente para ",
          Object.keys(client).length === 0 ? "agregarlo" : "modificarlo"
        ] }),
        /* @__PURE__ */ jsx12("br", {}),
        /* @__PURE__ */ jsxs10("div", { className: "inputs", children: [
          /* @__PURE__ */ jsx12("input", { name: "ClientID", type: "hidden", value: ClientID }),
          /* @__PURE__ */ jsx12(
            Input,
            {
              title: "Nombre",
              name: "name",
              placeholder: "Nombre del cliente",
              value: name,
              setValue: setName,
              error: errors?.name
            }
          ),
          /* @__PURE__ */ jsx12(
            Input,
            {
              title: "Identidad",
              name: "identity",
              type: "number",
              placeholder: "Identidad del cliente",
              value: identity,
              setValue: setIdentity,
              error: errors?.identity
            }
          ),
          /* @__PURE__ */ jsx12(
            Input,
            {
              title: "Numero telefonico",
              name: "phone",
              type: "tel",
              maxLength: 15,
              placeholder: "Numero telefonico del cliente",
              value: phone,
              setValue: setPhone,
              error: errors?.phone
            }
          ),
          /* @__PURE__ */ jsx12(
            Input,
            {
              title: "Correo electronico",
              name: "email",
              type: "email",
              placeholder: "Correo electronico del cliente",
              value: email,
              setValue: setEmail,
              error: errors?.email
            }
          ),
          /* @__PURE__ */ jsx12(
            Input,
            {
              title: "Domicilio",
              name: "address",
              placeholder: "Direcci\xF3n del cliente",
              value: address,
              setValue: setAddress,
              error: errors?.address
            }
          )
        ] }),
        /* @__PURE__ */ jsxs10("div", { className: "loading", children: [
          /* @__PURE__ */ jsx12("input", { className: "button", type: "submit", value: "Guardar" }),
          navigation?.state !== "idle" && /* @__PURE__ */ jsx12(Spinner, {})
        ] })
      ]
    }
  ) });
}

// app/components/client.tsx
import { Link as Link3 } from "@remix-run/react";
import { jsx as jsx13, jsxs as jsxs11 } from "react/jsx-runtime";
function Client({ client, clientSelected, setClientSelected }) {
  let { Name, Identity, ClientID, URL } = client;
  return /* @__PURE__ */ jsxs11("div", { className: "item-list", children: [
    /* @__PURE__ */ jsxs11(Link3, { to: `/clientes/${URL}`, className: "item-main", children: [
      /* @__PURE__ */ jsx13("img", { src: "/img/user-circle.svg", alt: "user" }),
      /* @__PURE__ */ jsxs11("div", { className: "item-information", children: [
        /* @__PURE__ */ jsx13("h4", { children: Name }),
        /* @__PURE__ */ jsx13("p", { children: Identity })
      ] })
    ] }),
    /* @__PURE__ */ jsx13(
      "img",
      {
        className: "check",
        src: `/img/${clientSelected.ClientID === ClientID ? "square-check.svg" : "square.svg"}`,
        onClick: () => {
          setClientSelected(clientSelected.ClientID === ClientID ? {} : client);
        },
        alt: "square"
      }
    )
  ] });
}

// app/services/client.server.ts
async function getClients() {
  return await (await fetch("http://localhost:8000/api/clients")).json();
}
async function getClientByID(clientID) {
  return await (await fetch(`http://localhost:8000/api/clients/${clientID}`)).json();
}
async function addClient(client) {
  return await (await fetch("http://localhost:8000/api/clients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(client)
  })).json();
}
async function updateClient(client) {
  return await (await fetch("http://localhost:8000/api/clients", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(client)
  })).json();
}
async function deleteClient(ClientID) {
  return await (await fetch(`http://localhost:8000/api/clients/${ClientID}`, {
    method: "DELETE"
  })).json();
}

// app/services/document.server.ts
async function addDocument(documentFormData) {
  return await (await fetch("http://localhost:8000/api/documents", {
    method: "POST",
    body: documentFormData
  })).json();
}
async function deleteDocument(DocumentID) {
  return await (await fetch(`http://localhost:8000/api/documents/${DocumentID}`, {
    method: "DELETE"
  })).json();
}

// app/styles/clientes.css
var clientes_default = "/build/_assets/clientes-CCX7QCYC.css";

// app/routes/clientes._index.tsx
import { jsx as jsx14, jsxs as jsxs12 } from "react/jsx-runtime";
function links2() {
  return [
    {
      rel: "stylesheet",
      href: clientes_default
    }
  ];
}
async function loader3({ request }) {
  let currentUser = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  return (await getClients()).filter((client) => client.User.UserID === currentUser.UserID);
}
async function action3({ request }) {
  let form = await request.formData(), currentUser = await authenticator.isAuthenticated(request), clients = await getClients(), clientID = form.get("ClientID"), documentID = form.get("DocumentID"), name = form.get("name"), identity = form.get("identity"), phone = form.get("phone"), email = form.get("email"), address = form.get("address"), errors = {};
  if ((request.method === "POST" || request.method === "PUT") && (name.length === 0 && (errors.name = "El nombre del cliente es obligatorio"), name.length > 80 && (errors.name = "El nombre debe contener menos de 80 caracteres"), typeof name != "string" && (errors.name = "El nombre debe ser un texto"), identity.length === 0 && (errors.identity = "La identidad es obligatorio"), (identity.length > 13 || identity.length < 13) && (errors.identity = "La identidad debe contener 13 caracteres"), clients.filter((client2) => client2.Identity.toLowerCase() === identity.toLowerCase()).length > 0 && (errors.identity = "Ya existe un cliente registrado con esta identidad"), phone.length !== 8 && phone.length !== 11 && (errors.phone = "El numero telef\xF3nico debe contener 8 o 11 caracteres"), phone.length === 0 && (errors.phone = "El numero telef\xF3nico es obligatorio"), clients.filter((client2) => client2.Phone.toLowerCase() === phone.toLowerCase()).length > 0 && (errors.phone = "Ya existe un cliente registrado con este num\xE9ro telef\xF3nico"), /^[^s@]+@[^s@]+.[^s@]+$/.test(email) && (errors.email = "El correo electr\xF3nico ingresado no es valido"), email.length === 0 && (errors.email = "El correo electr\xF3nico es obligatorio"), clients.filter((client2) => client2.Email.toLowerCase() === email.toLowerCase()).length > 0 && (errors.email = "Ya existe un cliente registrado con este correo electr\xF3nico"), address.length === 0 && (errors.address = "La direcci\xF3n del cliente es obligatoria")), Object.keys(errors).length > 0)
    return {
      state: "ERROR",
      data: {},
      errors
    };
  let client = {
    User: currentUser.UserID,
    Name: name,
    Identity: identity,
    Phone: phone,
    Email: email,
    Address: address
  };
  switch (request.method) {
    case "POST":
      return {
        state: "INSERTED",
        data: await addClient(client),
        errors: {}
      };
    case "PUT":
      return client.ClientID = parseInt(clientID), {
        state: "UPDATED",
        data: await updateClient(client),
        errors: {}
      };
    case "DELETE": {
      let returnedState, selectedClient = await getClientByID(clientID);
      return selectedClient?.Documents.length > 0 || selectedClient?.Dates.length > 0 ? {
        state: "CLIENT HAVE DOCUMENTS",
        data: null,
        errors: {}
      } : clientID ? (returnedState = await deleteClient(clientID), {
        state: "CLIENT DELETED",
        data: returnedState,
        errors: {}
      }) : documentID ? (returnedState = await deleteDocument(documentID), {
        state: "DOCUMENT DELETED",
        data: returnedState,
        errors: {}
      }) : {
        state: "UNKNOWN",
        data: null,
        errors: {
          unknown: "Ha sucedido un error inesperado"
        }
      };
    }
    default:
      throw new Error("Unexpected action");
  }
}
function Clientes() {
  let [isVisibleFormCliente, setVisibleFormClient] = useState6(!1), [isVisibleFormClienteForEditing, setVisibleFormClientForEditing] = useState6(!1), [isVisibleDeleteClient, setVisibleDeleteClient] = useState6(!1), [insertedMessage, showInsertedMessage] = useState6(!1), [updatedMessage, showUpdatedMessage] = useState6(!1), [deleteClientMessage, showDeleteClientMessage] = useState6(!1), [clientHaveDocumentsMessage, showClientHaveDocumentsMessage] = useState6(!1), [errorSelectedMessage, showErrorSelectedMessage] = useState6(!1), [clients, setClients] = useState6([]), [clientSelected, setClientSelected] = useState6({}), loader13 = useLoaderData3(), actionResult = useActionData2();
  useEffect2(() => {
    switch (actionResult?.state) {
      case "INSERTED":
        setVisibleFormClient(!1), showInsertedMessage(!0);
        break;
      case "UPDATED":
        setVisibleFormClientForEditing(!1), showUpdatedMessage(!0);
        break;
      case "CLIENT DELETED":
        setVisibleDeleteClient(!1), showDeleteClientMessage(!0);
        break;
      case "CLIENT HAVE DOCUMENTS":
        setVisibleDeleteClient(!1), showClientHaveDocumentsMessage(!0);
        break;
      default:
        break;
    }
  }, [actionResult]), useEffect2(() => {
    setClients(loader13);
  }, [loader13]);
  let showFormCliente = (isEditing) => {
    isEditing ? Object.keys(clientSelected).length > 0 ? setVisibleFormClientForEditing(!0) : showErrorSelectedMessage(!0) : setVisibleFormClient(!0);
  }, showEliminatedClient = () => {
    Object.keys(clientSelected).length <= 0 ? showErrorSelectedMessage(!0) : setVisibleDeleteClient(!0);
  }, searchClient = (event) => {
    let value = event.target.value.toString().toLowerCase(), actualizedClients = loader13?.filter((client) => client.Name.toLowerCase().includes(value));
    setClients(actualizedClients);
  };
  return /* @__PURE__ */ jsxs12("div", { className: "container", children: [
    isVisibleFormCliente && /* @__PURE__ */ jsx14(
      FormClient,
      {
        method: "POST",
        errors: actionResult?.errors,
        setVisibleFormClient
      }
    ),
    isVisibleFormClienteForEditing && /* @__PURE__ */ jsx14(
      FormClient,
      {
        method: "PUT",
        errors: actionResult?.errors,
        client: clientSelected,
        setVisibleFormClient: setVisibleFormClientForEditing
      }
    ),
    isVisibleDeleteClient && /* @__PURE__ */ jsx14(
      ModalMessage,
      {
        features: {
          text: "\xBFEsta seguro de la eliminaci\xF3n del cliente?",
          isOkCancel: !0,
          indexIcon: 1,
          data: {
            name: "ClientID",
            value: clientSelected.ClientID
          }
        },
        setVisibleMessage: setVisibleDeleteClient
      }
    ),
    errorSelectedMessage && /* @__PURE__ */ jsx14(
      ModalMessage,
      {
        features: {
          text: "Seleccione un cliente de la lista",
          isOkCancel: !1,
          indexIcon: 0,
          data: null
        },
        setVisibleMessage: showErrorSelectedMessage
      }
    ),
    insertedMessage && /* @__PURE__ */ jsx14(
      ModalMessage,
      {
        features: {
          text: "El cliente ha sido ingresado exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: showInsertedMessage
      }
    ),
    updatedMessage && /* @__PURE__ */ jsx14(
      ModalMessage,
      {
        features: {
          text: "El cliente ha sido actualizado exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: showUpdatedMessage
      }
    ),
    deleteClientMessage && /* @__PURE__ */ jsx14(
      ModalMessage,
      {
        features: {
          text: "El cliente ha sido eliminado exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: showDeleteClientMessage
      }
    ),
    clientHaveDocumentsMessage && /* @__PURE__ */ jsx14(
      ModalMessage,
      {
        features: {
          text: "El cliente no ha sido eliminado ya que se encontraron datos (documentos, citas) registrados para este cliente",
          isOkCancel: !1,
          indexIcon: 0,
          data: null
        },
        setVisibleMessage: showClientHaveDocumentsMessage
      }
    ),
    /* @__PURE__ */ jsx14("h1", { className: "heading", children: "Gestiona tus clientes" }),
    /* @__PURE__ */ jsx14("p", { className: "subheading", children: "Lista completa de los clientes registrados, puedes escribir y filtrar para una b\xFAsqueda mas r\xE1pida." }),
    /* @__PURE__ */ jsx14("div", { className: "top-options", children: /* @__PURE__ */ jsxs12("div", { className: "search", children: [
      /* @__PURE__ */ jsx14("img", { src: "/img/search.svg", alt: "search" }),
      /* @__PURE__ */ jsx14(
        "input",
        {
          type: "text",
          placeholder: "Buscar",
          onChange: (event) => {
            searchClient(event);
          }
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs12("div", { className: "actions", children: [
      /* @__PURE__ */ jsxs12(
        "button",
        {
          className: "button",
          onClick: () => {
            showFormCliente(!1);
          },
          type: "button",
          children: [
            /* @__PURE__ */ jsx14("img", { src: "/img/add.svg", alt: "add" }),
            /* @__PURE__ */ jsx14("p", { children: "Agregar" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs12(
        "button",
        {
          className: "button",
          onClick: () => {
            showFormCliente(!0);
          },
          children: [
            /* @__PURE__ */ jsx14("img", { src: "/img/edit.svg", alt: "add" }),
            /* @__PURE__ */ jsx14("p", { children: "Editar" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs12(
        "button",
        {
          className: "button",
          onClick: () => {
            showEliminatedClient();
          },
          type: "button",
          value: "Eliminar",
          children: [
            /* @__PURE__ */ jsx14("img", { src: "/img/x.svg", alt: "add" }),
            /* @__PURE__ */ jsx14("p", { children: "Eliminar" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx14("div", { className: "list-scroll", children: clients.length > 0 ? clients.map(
      (client) => /* @__PURE__ */ jsx14(
        Client,
        {
          client,
          clientSelected,
          setClientSelected
        },
        client?.ClientID
      )
    ) : loader13?.length === 0 ? /* @__PURE__ */ jsx14("p", { className: "no-found", children: "A\xFAn no hay clientes registrados" }) : loader13?.length > 0 && clients.length === 0 ? /* @__PURE__ */ jsx14("p", { className: "no-found", children: "No se pudieron encontrar clientes" }) : /* @__PURE__ */ jsx14("div", { className: "center", children: /* @__PURE__ */ jsx14(Spinner, {}) }) })
  ] });
}

// app/routes/forgot-password.tsx
var forgot_password_exports = {};
__export(forgot_password_exports, {
  action: () => action4,
  default: () => ForgotPassword
});
import { useState as useState7, useEffect as useEffect3 } from "react";
import { Form as Form5, useActionData as useActionData6, useNavigate } from "@remix-run/react";

// app/services/user.server.ts
async function getUsers() {
  return await (await fetch("http://localhost:8000/api/users")).json();
}
async function getUsersByID(UserID) {
  return await (await fetch(`http://localhost:8000/api/users/${UserID}`)).json();
}
async function createPreviousUser(code, accessLevel2) {
  return await (await fetch("http://localhost:8000/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Name: "",
      Email: "",
      Phone: "",
      Password: code,
      Token: code,
      AccessLevel: accessLevel2,
      State: 0
    })
  })).json();
}
async function updateUser(user) {
  return await (await fetch("http://localhost:8000/api/users", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })).json();
}
async function deleteUser(userID) {
  return await (await fetch(`http://localhost:8000/api/users/${userID}`, {
    method: "DELETE"
  })).json();
}

// app/components/forgot-password/enter-email.tsx
import { Link as Link4, useActionData as useActionData3, useNavigation as useNavigation3 } from "@remix-run/react";
import { Fragment as Fragment4, jsx as jsx15, jsxs as jsxs13 } from "react/jsx-runtime";
function EnterEmail({ email, setEmail }) {
  let action12 = useActionData3(), navigation = useNavigation3();
  return /* @__PURE__ */ jsxs13(Fragment4, { children: [
    /* @__PURE__ */ jsx15("h1", { className: "heading", children: "Recupera tu cuenta" }),
    /* @__PURE__ */ jsx15("p", { className: "subheading", children: "Para comenzar con la recuperaci\xF3n de tu cuenta, ingresa tu correo electr\xF3nico para verificar que tu cuenta realmente existe." }),
    /* @__PURE__ */ jsx15("br", {}),
    /* @__PURE__ */ jsxs13("div", { className: "inputs", children: [
      /* @__PURE__ */ jsx15("input", { name: "step", type: "hidden", value: 1 }),
      /* @__PURE__ */ jsx15(
        Input,
        {
          title: "Correo electr\xF3nico",
          name: "email",
          placeholder: "Ingresa tu correo electronico",
          type: "email",
          value: email,
          setValue: setEmail,
          error: ""
        }
      ),
      /* @__PURE__ */ jsxs13("div", { className: "account-options", children: [
        /* @__PURE__ */ jsx15(Link4, { to: "/login", className: "option", children: "\xBFYa tienes una cuenta? Inicia sesi\xF3n" }),
        /* @__PURE__ */ jsx15(Link4, { to: "/create-account", className: "option", children: "\xBFAun no tiene una cuenta? Crea una nueva" })
      ] }),
      /* @__PURE__ */ jsx15("p", { className: "error", children: action12?.ERROR }),
      /* @__PURE__ */ jsxs13("div", { className: "loading", children: [
        /* @__PURE__ */ jsx15(
          "input",
          {
            className: "button",
            type: "submit",
            value: "Verificar"
          }
        ),
        navigation?.state !== "idle" && /* @__PURE__ */ jsx15(Spinner, {})
      ] })
    ] })
  ] });
}

// app/components/forgot-password/enter-code.tsx
import { useActionData as useActionData4, useNavigation as useNavigation4 } from "@remix-run/react";
import React from "react";
import { Fragment as Fragment5, jsx as jsx16, jsxs as jsxs14 } from "react/jsx-runtime";
function EnterCode({ UserID }) {
  let action12 = useActionData4(), navigation = useNavigation4(), inputs = [
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef()
  ], handleInput = (e, index) => {
    e.target.value.length === e.target.maxLength && (e.target.value = e.target.value.toString().toUpperCase(), inputs[index + 1]?.current.focus());
  };
  return /* @__PURE__ */ jsxs14(Fragment5, { children: [
    /* @__PURE__ */ jsx16("h1", { className: "heading", children: "Ingrese el c\xF3digo de verificaci\xF3n" }),
    /* @__PURE__ */ jsx16("p", { className: "subheading", children: "Para continuar ingrese el c\xF3digo que ha sido enviado ha su correo electr\xF3nico." }),
    /* @__PURE__ */ jsx16("br", {}),
    /* @__PURE__ */ jsxs14("section", { className: "inputs", children: [
      /* @__PURE__ */ jsx16("input", { type: "hidden", name: "step", value: 2 }),
      /* @__PURE__ */ jsx16("input", { type: "hidden", name: "UserID", value: UserID }),
      /* @__PURE__ */ jsx16("p", { className: "subheading", children: "C\xF3digo de recuperaci\xF3n" }),
      /* @__PURE__ */ jsx16("div", { className: "code", children: inputs.map(
        (input, index) => /* @__PURE__ */ jsx16(
          "input",
          {
            type: "text",
            placeholder: "-",
            className: "code-letter",
            ref: input,
            name: `letter${index}`,
            maxLength: 1,
            onChange: (e) => {
              handleInput(e, index);
            }
          },
          index
        )
      ) }),
      /* @__PURE__ */ jsx16("p", { className: "error", children: action12?.ERROR }),
      /* @__PURE__ */ jsxs14("div", { className: "loading", children: [
        /* @__PURE__ */ jsx16(
          "input",
          {
            className: "button",
            type: "submit",
            value: "Verificar"
          }
        ),
        navigation?.state !== "idle" && /* @__PURE__ */ jsx16(Spinner, {})
      ] })
    ] })
  ] });
}

// app/components/forgot-password/restore-password.tsx
import { useActionData as useActionData5, useNavigation as useNavigation5 } from "@remix-run/react";
import { Fragment as Fragment6, jsx as jsx17, jsxs as jsxs15 } from "react/jsx-runtime";
function RestorePassword({ password, setPassword, repeatPassword, setRepeatPassword, UserID }) {
  let action12 = useActionData5(), navigation = useNavigation5();
  return /* @__PURE__ */ jsxs15(Fragment6, { children: [
    /* @__PURE__ */ jsx17("h1", { className: "heading", children: "Restablecer contrase\xF1a" }),
    /* @__PURE__ */ jsx17("p", { className: "subheading", children: "Ingrese su nueva contrase\xF1a y vuelva a repetirla para finalizar con el restablecimiento de la contrase\xF1a de su cuenta." }),
    /* @__PURE__ */ jsx17("br", {}),
    /* @__PURE__ */ jsxs15("section", { className: "inputs", children: [
      /* @__PURE__ */ jsx17("input", { type: "hidden", name: "step", value: 3 }),
      /* @__PURE__ */ jsx17("input", { type: "hidden", name: "UserID", value: UserID }),
      /* @__PURE__ */ jsx17(
        Input,
        {
          title: "Nueva contrase\xF1a",
          name: "password",
          placeholder: "Ingrese la contrase\xF1a...",
          type: "password",
          value: password,
          setValue: setPassword,
          error: ""
        }
      ),
      /* @__PURE__ */ jsx17(
        Input,
        {
          title: "Repita la nueva contrase\xF1a",
          name: "repeat-password",
          placeholder: "Repita la contrase\xF1a...",
          type: "password",
          value: repeatPassword,
          setValue: setRepeatPassword,
          error: ""
        }
      ),
      /* @__PURE__ */ jsx17("p", { className: "error", children: action12?.ERROR }),
      /* @__PURE__ */ jsxs15("div", { className: "loading", children: [
        /* @__PURE__ */ jsx17("input", { className: "button", type: "submit", value: "Verificar" }),
        navigation?.state !== "idle" && /* @__PURE__ */ jsx17(Spinner, {})
      ] })
    ] })
  ] });
}

// app/utils/helpers.ts
function formattedDate(timestamp) {
  let dateObj = new Date(timestamp), options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: !0
  };
  return dateObj.toLocaleString("es-ES", options);
}
var accessLevel = [
  {
    AccessLevelID: "N",
    Name: "Dependiente"
  },
  {
    AccessLevelID: "A",
    Name: "Administrador"
  },
  {
    AccessLevelID: "R",
    Name: "Ra\xEDz"
  }
];
function generateRandomCode(length) {
  let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", code = "";
  for (let i = 0; i < length; i++) {
    let randomCharacter = character[Math.floor(Math.random() * character.length)];
    code += randomCharacter;
  }
  return code;
}

// app/services/email.server.ts
async function sendRecoverAccountEmail(name, token, email) {
  let transporter = __require("nodemailer").createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  }), mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Recupera tu cuenta",
    html: `<!DOCTYPE html>
              <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Document</title>
                  <style>
                    body {
                      background-color: #f5f5f5;
                      font-family: Arial, Helvetica, sans-serif;
                      line-height: 1.5;
                      text-align: center;
                    }
                    .titulo{
                      text-align: center;
                      max-width: 500px;
                      width: 90%;
                      margin: 20px auto 0 auto;
                      padding: 20px;
                      background-color: rgb(3, 57, 103);
                      border-radius: 15px 15px 0 0;
                      box-shadow: 0 -2px 7px 0 rgba(166,166,166,1);
                    }
                    .contenedor{
                      text-align: center;
                      max-width: 500px;
                      width: 90%;
                      margin: 0 auto;
                      padding: 20px;
                      border-radius: 0 0 15px 15px;
                      background-color: white;
                      box-shadow: 0 2px 7px 0 rgba(166,166,166,1);
                    }
                    h1 {
                      width: 100%;
                      color: #fff;
                      margin: 0;
                    }
                    p{
                      color: #333;
                      font-size: 18px;
                    }
            
                    .codigo {
                      text-align: center;
                      width: 140px;
                      background-color: rgb(3, 57, 103);
                      color: white;
                      padding: 10px;
                      border-radius: 5px;
                      font-size: 20px;
                      font-weight: bold;
                      margin: 0 auto;
                    }
                  </style>
                </head>
                <body>
                  <div class="titulo">
                      <h1>Olvidaste tu contrase\xF1a</h1>
                  </div>
                    <div class="contenedor">
                      <p>
                        Hola, <strong>${name}</strong> se ha solicitado el cambio de contrase\xF1a para tu cuenta 
                        en Grupo sosa para poder restablecer se requiere \xFAnicamente del c\xF3digo de recuperaci\xF3n que se te otorgara
                        por medio de este correo.
                      </p>
                      <p>
                        Tu c\xF3digo de para la recuperaci\xF3n de tu cuenta es el siguiente:
                      </p>
                      <p class="contenedor-codigo">
                        <div class="codigo">${token.split("").join(" ")}</div>
                      </p>
                      <p>
                        Te recomendamos no compartir este c\xF3digo con nadie. <br>
                        Si no has solicitado el cambio de contrase\xF1a, por favor ignora este correo. <br>
                      </p>
                    </div>
                </body>n
              </html>`
  };
  console.log("Enviando correo..."), await transporter.sendMail(mailOptions, (error, info) => {
    error ? console.log("Error al enviar el correo:", error) : console.log("Correo enviado:", info.response);
  });
}

// app/routes/forgot-password.tsx
import { jsx as jsx18, jsxs as jsxs16 } from "react/jsx-runtime";
async function action4({ request }) {
  let form = await request.formData(), step = parseInt(form.get("step")), users = await getUsers(), UserID, user;
  switch (step) {
    case 1:
      let email = form.get("email");
      if (email.length === 0)
        return { STATUS: "ERROR", ERROR: "El correo electr\xF3nico es obligatorio" };
      let selectedUser = users.filter((user2) => user2.Email === email);
      if (selectedUser.length === 0)
        return { STATUS: "ERROR", ERROR: "No se encontr\xF3 ning\xFAn usuario con el correo electr\xF3nico ingresado" };
      let token = generateRandomCode(6);
      return user = {
        UserID: selectedUser[0]?.UserID,
        Token: token
      }, await updateUser(user), await sendRecoverAccountEmail(selectedUser[0]?.Name, token, selectedUser[0]?.Email), {
        STATUS: "VALIDATED",
        DATA: selectedUser[0]?.UserID
      };
    case 2:
      UserID = form.get("UserID");
      let letter0 = form.get("letter0"), letter1 = form.get("letter1"), letter2 = form.get("letter2"), letter3 = form.get("letter3"), letter4 = form.get("letter4"), letter5 = form.get("letter5"), code = [letter0, letter1, letter2, letter3, letter4, letter5];
      for (let i = 0; i < 6; i++)
        if (code[i]?.length === 0)
          return {
            STATUS: "ERROR",
            ERROR: "Todos los d\xEDgitos son obligatorios"
          };
      let currentUser = await getUsersByID(UserID), completeCode = code.join("");
      return currentUser?.Token === completeCode ? {
        STATUS: "CODEPASSED"
      } : {
        STATUS: "ERROR",
        ERROR: "El c\xF3digo ingresado es incorrecto"
      };
    case 3:
      UserID = form.get("UserID");
      let password = form.get("password"), repeatPassword = form.get("repeat-password");
      return password.length === 0 ? { STATUS: "ERROR", ERROR: "La contrase\xF1a es obligatorio" } : password.length > 0 && password.length < 8 ? { STATUS: "ERROR", ERROR: "La contrase\xF1a debe contener al menos 8 caracteres" } : repeatPassword.length === 0 ? { STATUS: "ERROR", ERROR: "Por favor, repita la contrase\xF1a" } : repeatPassword.length > 0 && repeatPassword.length < 8 ? { STATUS: "ERROR", ERROR: "La contrase\xF1a debe contener al menos 8 caracteres" } : password !== repeatPassword ? { STATUS: "ERROR", ERROR: "Las contrase\xF1as no coinciden" } : (user = {
        UserID,
        Password: password,
        Token: null
      }, await updateUser(user), {
        STATUS: "RESTORED"
      });
    default:
      return {
        STATUS: "ERROR",
        ERROR: "No valid option"
      };
  }
}
function ForgotPassword() {
  let action12 = useActionData6(), navigate = useNavigate(), [step, setStep] = useState7(1), [userID, setUserID] = useState7(0), [email, setEmail] = useState7(""), [password, setPassword] = useState7(""), [repeatPassword, setRepeatPassword] = useState7("");
  return useEffect3(() => {
    switch (action12?.STATUS) {
      case "VALIDATED":
        setUserID(action12?.DATA), setStep(2);
        break;
      case "CODEPASSED":
        setStep(3);
        break;
      case "RESTORED":
        navigate("/login");
        break;
    }
  }, [action12]), /* @__PURE__ */ jsxs16("main", { className: "login-modal", children: [
    /* @__PURE__ */ jsx18(Form5, { className: "form", method: "POST", children: step === 1 ? /* @__PURE__ */ jsx18(
      EnterEmail,
      {
        email,
        setEmail
      }
    ) : step === 2 ? /* @__PURE__ */ jsx18(
      EnterCode,
      {
        UserID: userID
      }
    ) : /* @__PURE__ */ jsx18(
      RestorePassword,
      {
        password,
        setPassword,
        repeatPassword,
        setRepeatPassword,
        UserID: userID
      }
    ) }),
    /* @__PURE__ */ jsxs16("div", { className: "steps", children: [
      /* @__PURE__ */ jsx18("p", { className: `step ${step === 1 ? "active" : ""}`, children: "1" }),
      /* @__PURE__ */ jsx18("div", { className: "step-line" }),
      /* @__PURE__ */ jsx18("p", { className: `step ${step === 2 ? "active" : ""}`, children: "2" }),
      /* @__PURE__ */ jsx18("div", { className: "step-line" }),
      /* @__PURE__ */ jsx18("p", { className: `step ${step === 3 ? "active" : ""}`, children: "3" })
    ] })
  ] });
}

// app/routes/materias._index.tsx
var materias_index_exports = {};
__export(materias_index_exports, {
  action: () => action5,
  default: () => Materias,
  links: () => links3,
  loader: () => loader4
});
import { useState as useState9, useEffect as useEffect4 } from "react";
import { useActionData as useActionData7, useLoaderData as useLoaderData4 } from "@remix-run/react";

// app/components/formSubject.tsx
import { useState as useState8 } from "react";
import { Form as Form6, useNavigation as useNavigation6 } from "@remix-run/react";
import { jsx as jsx19, jsxs as jsxs17 } from "react/jsx-runtime";
function FormSubject({ subject, method, errors = {}, setShowModalCategory }) {
  let isSubject = Object.keys(subject).length > 0, [name, setName] = useState8(subject?.Name || ""), navigation = useNavigation6();
  return /* @__PURE__ */ jsx19("div", { className: "modal", children: /* @__PURE__ */ jsxs17(
    Form6,
    {
      className: "form",
      method,
      action: "/materias",
      children: [
        /* @__PURE__ */ jsx19(
          "img",
          {
            src: "/img/x.svg",
            className: "button-close",
            alt: "x",
            onClick: () => {
              setShowModalCategory(!1);
            }
          }
        ),
        /* @__PURE__ */ jsx19("h1", { className: "heading", children: isSubject ? "Modificar materia" : "Agregar nueva materia" }),
        /* @__PURE__ */ jsx19("h2", { className: "subheading", children: isSubject ? "Realice los cambios necesarios para guardar" : "Agregue el nombre de la materia para guardar en la lista" }),
        /* @__PURE__ */ jsx19("br", {}),
        /* @__PURE__ */ jsx19("div", { className: "inputs", children: /* @__PURE__ */ jsxs17("div", { className: "input", children: [
          isSubject && /* @__PURE__ */ jsx19("input", { type: "hidden", name: "SubjectID", value: subject?.SubjectID }),
          /* @__PURE__ */ jsx19("label", { htmlFor: "name", children: "Nombre" }),
          /* @__PURE__ */ jsx19(
            "input",
            {
              name: "Name",
              id: "Name",
              type: "text",
              placeholder: "Escriba el nombre de la materia...",
              onChange: (e) => {
                setName(e.target.value);
              },
              value: name
            }
          ),
          errors?.name ? /* @__PURE__ */ jsx19("p", { className: "error", children: errors.name }) : null
        ] }) }),
        /* @__PURE__ */ jsxs17("div", { className: "loading", children: [
          /* @__PURE__ */ jsx19("input", { className: "button", type: "submit", value: isSubject ? "Modificar" : "Guardar" }),
          navigation?.state !== "idle" && /* @__PURE__ */ jsxs17("div", { className: "spinner", children: [
            /* @__PURE__ */ jsx19("div", { className: "bounce1" }),
            /* @__PURE__ */ jsx19("div", { className: "bounce2" }),
            /* @__PURE__ */ jsx19("div", { className: "bounce3" })
          ] })
        ] })
      ]
    }
  ) });
}

// app/components/subject.tsx
import { Link as Link5 } from "@remix-run/react";
import { jsx as jsx20, jsxs as jsxs18 } from "react/jsx-runtime";
function Subject({ subject, subjectSelected, setSubjectSelected }) {
  let { SubjectID, Name, Documents } = subject;
  return /* @__PURE__ */ jsxs18("div", { className: "item-list", children: [
    /* @__PURE__ */ jsxs18(Link5, { to: `/materias/${Name}`, className: "item-main", children: [
      /* @__PURE__ */ jsx20("img", { src: "/img/category.svg", alt: "user" }),
      /* @__PURE__ */ jsxs18("div", { className: "item-information", children: [
        /* @__PURE__ */ jsx20("h4", { children: Name }),
        /* @__PURE__ */ jsxs18("p", { children: [
          "Numero total de documentos: ",
          Documents?.length
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx20(
      "img",
      {
        className: "check",
        src: `/img/${subjectSelected.SubjectID === SubjectID ? "square-check.svg" : "square.svg"}`,
        onClick: () => {
          setSubjectSelected(subjectSelected.SubjectID === SubjectID ? {} : subject);
        },
        alt: "square"
      }
    )
  ] });
}

// app/services/subject.server.ts
async function getSubjects() {
  return await (await fetch("http://localhost:8000/api/subjects")).json();
}
async function getSubjectByID(SubjectID) {
  return await (await fetch(`http://localhost:8000/api/subjects/${SubjectID}`)).json();
}
async function addSubject(subject) {
  return await (await fetch("http://localhost:8000/api/subjects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(subject)
  })).json();
}
async function updateSubject(subject) {
  return await (await fetch("http://localhost:8000/api/subjects", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(subject)
  })).json();
}
async function deleteSubject(SubjectID) {
  return await (await fetch(`http://localhost:8000/api/subjects/${SubjectID}`, {
    method: "DELETE"
  })).json();
}

// app/routes/materias._index.tsx
import { jsx as jsx21, jsxs as jsxs19 } from "react/jsx-runtime";
function links3() {
  return [
    {
      rel: "stylesheet",
      href: clientes_default
    }
  ];
}
async function loader4({ request }) {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  }), await getSubjects();
}
async function action5({ request }) {
  let form = await request.formData(), name = form.get("Name"), subjects = await getSubjects(), errors = {};
  if ((request.method === "POST" || request.method === "PUT") && (name.length === 0 && (errors.name = "El nombre de la categor\xEDa es obligatorio"), name.length > 30 && (errors.name = "El nombre no debe exceder los 30 caracteres"), subjects.filter((subject2) => subject2.Name.toLowerCase() === name.toLowerCase()).length > 0 && (errors.name = "Ya existe una categor\xEDa con el nombre descrito")), Object.keys(errors).length > 0)
    return {
      status: "ERROR",
      errors,
      data: null
    };
  let subject = {
    Name: name,
    User: 1
  };
  switch (request.method) {
    case "POST":
      let insertedSubject = await addSubject(subject);
      return {
        status: "INSERTED",
        errors: {},
        data: insertedSubject
      };
    case "PUT":
      let SubjectID = form.get("SubjectID");
      subject.SubjectID = SubjectID;
      let updatedSubject = await updateSubject(subject);
      return {
        status: "UPDATED",
        errors: {},
        data: updatedSubject
      };
    case "DELETE":
      let SubjectIDForDelete = form.get("SubjectID"), subjectTarget = await getSubjectByID(SubjectIDForDelete);
      if (console.log(subjectTarget), subjectTarget?.Documents.length > 0)
        return {
          status: "SUBJECT HAVE DOCUMENTS",
          errors: {},
          data: null
        };
      let deleteResponse = await deleteSubject(SubjectIDForDelete);
      return {
        status: "DELETED",
        errors: {},
        data: deleteResponse
      };
    default:
      throw new Error("Unexpected action");
  }
}
function Materias() {
  let [subjectSelected, setSubjectSelected] = useState9({}), [showModalSubject, setShowModalSubject] = useState9(!1), [showModalSubjectForEditing, setShowModalSubjectForEditing] = useState9(!1), [showModalSubjectDelete, setShowModalSubjectDelete] = useState9(!1), [showErrorSelectedMessage, setShowErrorSelectedMessage] = useState9(!1), [showErrorEliminationMessage, setShowErrorEliminationMessage] = useState9(!1), [showInsertedMessage, setShowInsertedMessage] = useState9(!1), [showUpdatedMessage, setShowUpdatedMessage] = useState9(!1), [showDeletedMessage, setShowDeletedMessage] = useState9(!1), loader13 = useLoaderData4(), actionResult = useActionData7(), [subjects, setSubjects] = useState9([]);
  useEffect4(() => {
    setSubjects(loader13);
  }, [loader13]);
  let searchSubjects = (event) => {
    let value = event.target.value.toString().toLowerCase(), actualizedSubjects = loader13?.filter((subject) => subject.Name.toLowerCase().includes(value));
    setSubjects(actualizedSubjects);
  }, showFormSubject = (isEditing) => {
    isEditing ? Object.keys(subjectSelected).length > 0 ? setShowModalSubjectForEditing(!0) : setShowErrorSelectedMessage(!0) : setShowModalSubject(!0);
  }, showDeleteMessage = () => {
    Object.keys(subjectSelected).length > 0 ? setShowModalSubjectDelete(!0) : setShowErrorSelectedMessage(!0);
  };
  return useEffect4(() => {
    switch (actionResult?.status) {
      case "INSERTED":
        setShowModalSubject(!1), setShowInsertedMessage(!0);
        break;
      case "UPDATED":
        setShowModalSubjectForEditing(!1), setShowUpdatedMessage(!0);
        break;
      case "DELETED":
        setShowModalSubjectDelete(!1), setShowDeletedMessage(!0);
        break;
      case "SUBJECT HAVE DOCUMENTS":
        setShowModalSubjectDelete(!1), setShowErrorEliminationMessage(!0);
        break;
      default:
        break;
    }
  }, [actionResult]), /* @__PURE__ */ jsxs19("div", { className: "container", children: [
    showModalSubject && /* @__PURE__ */ jsx21(
      FormSubject,
      {
        subject: {},
        method: "POST",
        errors: actionResult?.errors,
        setShowModalCategory: setShowModalSubject
      }
    ),
    showModalSubjectForEditing && /* @__PURE__ */ jsx21(
      FormSubject,
      {
        subject: subjectSelected,
        method: "PUT",
        errors: actionResult?.errors,
        setShowModalCategory: setShowModalSubjectForEditing
      }
    ),
    showErrorSelectedMessage && /* @__PURE__ */ jsx21(
      ModalMessage,
      {
        features: {
          text: "Seleccione una materia de la lista",
          isOkCancel: !1,
          indexIcon: 0,
          data: null
        },
        setVisibleMessage: setShowErrorSelectedMessage
      }
    ),
    showErrorEliminationMessage && /* @__PURE__ */ jsx21(
      ModalMessage,
      {
        features: {
          text: "La materia no ha sido eliminada ya que se encontraron datos (documentos) vinculados a la materia",
          isOkCancel: !1,
          indexIcon: 0,
          data: null
        },
        setVisibleMessage: setShowErrorEliminationMessage
      }
    ),
    showInsertedMessage && /* @__PURE__ */ jsx21(
      ModalMessage,
      {
        features: {
          text: "La materia ha sido agregado exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowInsertedMessage
      }
    ),
    showUpdatedMessage && /* @__PURE__ */ jsx21(
      ModalMessage,
      {
        features: {
          text: "La materia ha sido modificada exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowUpdatedMessage
      }
    ),
    showDeletedMessage && /* @__PURE__ */ jsx21(
      ModalMessage,
      {
        features: {
          text: "La materia ha sido eliminada exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowDeletedMessage
      }
    ),
    showModalSubjectDelete && /* @__PURE__ */ jsx21(
      ModalMessage,
      {
        features: {
          text: "\xBFEsta seguro de la eliminaci\xF3n de la materia seleccionada?",
          isOkCancel: !0,
          indexIcon: 1,
          data: {
            name: "SubjectID",
            value: subjectSelected?.SubjectID
          }
        },
        setVisibleMessage: setShowModalSubjectDelete
      }
    ),
    /* @__PURE__ */ jsx21("h1", { className: "heading", children: "Lista de materias" }),
    /* @__PURE__ */ jsx21("h2", { className: "subheading", children: "Gestiona las listas disponibles en la plataforma creando nuevas materias." }),
    /* @__PURE__ */ jsx21("div", { className: "top-options", children: /* @__PURE__ */ jsxs19("div", { className: "search", children: [
      /* @__PURE__ */ jsx21("img", { src: "/img/search.svg", alt: "search" }),
      /* @__PURE__ */ jsx21(
        "input",
        {
          type: "text",
          placeholder: "Buscar",
          onChange: (event) => {
            searchSubjects(event);
          }
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs19("div", { className: "actions", children: [
      /* @__PURE__ */ jsxs19(
        "button",
        {
          className: "button",
          onClick: () => {
            showFormSubject(!1);
          },
          type: "button",
          children: [
            /* @__PURE__ */ jsx21("img", { src: "/img/add.svg", alt: "add" }),
            /* @__PURE__ */ jsx21("p", { children: "Agregar materia" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs19(
        "button",
        {
          className: "button",
          onClick: () => {
            showFormSubject(!0);
          },
          children: [
            /* @__PURE__ */ jsx21("img", { src: "/img/edit.svg", alt: "add" }),
            /* @__PURE__ */ jsx21("p", { children: "Editar materia" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs19(
        "button",
        {
          className: "button",
          onClick: () => {
            showDeleteMessage();
          },
          children: [
            /* @__PURE__ */ jsx21("img", { src: "/img/x.svg", alt: "delete" }),
            /* @__PURE__ */ jsx21("p", { children: "Eliminar materia" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx21("div", { className: "list-scroll", children: subjects.length > 0 ? subjects.map(
      (subject) => /* @__PURE__ */ jsx21(
        Subject,
        {
          subject,
          subjectSelected,
          setSubjectSelected
        },
        subject.SubjectID
      )
    ) : loader13?.length === 0 ? /* @__PURE__ */ jsx21("p", { className: "no-found", children: "A\xFAn no hay materias registrados" }) : loader13?.length > 0 && subjects.length === 0 ? /* @__PURE__ */ jsx21("p", { className: "no-found", children: "No se pudieron encontrar materias" }) : /* @__PURE__ */ jsx21("div", { className: "center", children: /* @__PURE__ */ jsx21(Spinner, {}) }) })
  ] });
}

// app/routes/usuarios._index.tsx
var usuarios_index_exports = {};
__export(usuarios_index_exports, {
  action: () => action6,
  default: () => Usuarios,
  loader: () => loader5
});
import { useState as useState12, useEffect as useEffect6 } from "react";
import { useActionData as useActionData8, useLoaderData as useLoaderData5 } from "@remix-run/react";

// app/components/user.tsx
import { Link as Link6 } from "@remix-run/react";
import { jsx as jsx22, jsxs as jsxs20 } from "react/jsx-runtime";
function User({ user, userSelected, setUserSelected }) {
  let { UserID, Name, Email, State, URL } = user;
  return /* @__PURE__ */ jsxs20("div", { className: "item-list", children: [
    /* @__PURE__ */ jsxs20(Link6, { to: `/usuarios/${URL}`, className: "item-main", children: [
      /* @__PURE__ */ jsx22("img", { src: "/img/user-circle.svg", alt: "user" }),
      /* @__PURE__ */ jsxs20("div", { className: "item-information", children: [
        /* @__PURE__ */ jsx22("h4", { children: Name }),
        /* @__PURE__ */ jsxs20("div", { children: [
          /* @__PURE__ */ jsx22("p", { children: Email }),
          /* @__PURE__ */ jsxs20("div", { className: "state", children: [
            /* @__PURE__ */ jsx22("div", { className: `point ${State === 0 ? "" : "active"}` }),
            /* @__PURE__ */ jsx22("p", { children: State === 1 ? "Habilitado" : "Inhabilitado" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx22(
      "img",
      {
        className: "check",
        src: `/img/${userSelected.UserID === UserID ? "square-check.svg" : "square.svg"}`,
        onClick: () => {
          setUserSelected(userSelected.UserID === UserID ? {} : user);
        },
        alt: "square"
      }
    )
  ] });
}

// app/components/modalCodeMessage.tsx
import { useState as useState10 } from "react";

// app/components/dropdownlist.tsx
import { Fragment as Fragment7, jsx as jsx23, jsxs as jsxs21 } from "react/jsx-runtime";
function Dropdownlist({ title, name, items = [], error, setItemSelected }) {
  return /* @__PURE__ */ jsxs21("div", { className: "input", children: [
    /* @__PURE__ */ jsx23("label", { htmlFor: name, children: title }),
    /* @__PURE__ */ jsx23(
      "select",
      {
        name,
        id: name,
        onChange: (evt) => {
          setItemSelected(evt.target.value);
        },
        children: items.length > 0 ? /* @__PURE__ */ jsxs21(Fragment7, { children: [
          /* @__PURE__ */ jsx23("option", { value: -1, children: "-- Seleccione un elemento --" }),
          items.map(
            (item) => /* @__PURE__ */ jsx23(
              "option",
              {
                value: item?.SubjectID || item?.ClientID || item?.UserID || item?.AccessLevelID,
                children: item?.Name || "Name not found"
              },
              item?.SubjectID || item?.ClientID || item?.UserID || item?.AccessLevelID
            )
          )
        ] }) : ""
      }
    ),
    error ? /* @__PURE__ */ jsx23("p", { className: "error", children: error }) : null
  ] });
}

// app/components/modalCodeMessage.tsx
import { jsx as jsx24, jsxs as jsxs22 } from "react/jsx-runtime";
function ModalCodeMessage({ currentUser, setStep, accessLevelSelected, setAccessLevelSelected }) {
  let [error, setError] = useState10(""), validateAccessLevelSelected = () => {
    accessLevelSelected === -1 ? setError("Debe seleccionar el nivel de acceso del usuario") : accessLevelSelected === "A" || accessLevelSelected === "R" || accessLevelSelected === "N" ? setStep(2) : setError("El nivel de acceso seleccionado no es valido");
  };
  return /* @__PURE__ */ jsx24("div", { className: "modal", children: /* @__PURE__ */ jsxs22("div", { className: "message", children: [
    /* @__PURE__ */ jsx24(
      "img",
      {
        src: "/img/x.svg",
        className: "button-close",
        alt: "close",
        onClick: () => {
          setStep(0);
        }
      }
    ),
    /* @__PURE__ */ jsxs22("div", { className: "message-information", children: [
      /* @__PURE__ */ jsx24("p", { className: "just-text", children: "Para la creaci\xF3n de un nuevo usuario debera proporcionarle el c\xF3digo de creaci\xF3n al usuario en cuesti\xF3n con el cual podr\xE1 llenar el formulario de registro." }),
      /* @__PURE__ */ jsx24("div", { className: "inputs", children: /* @__PURE__ */ jsx24(
        Dropdownlist,
        {
          title: "Nivel de acceso otorgado",
          name: "user",
          items: currentUser?.AccessLevel === "R" ? accessLevel : [accessLevel[0]],
          error: "",
          setItemSelected: setAccessLevelSelected
        }
      ) }),
      /* @__PURE__ */ jsx24("p", { className: "error", children: error }),
      /* @__PURE__ */ jsxs22("div", { className: "buttons", children: [
        /* @__PURE__ */ jsx24(
          "input",
          {
            className: "button",
            type: "submit",
            value: "Aceptar",
            onClick: () => {
              validateAccessLevelSelected();
            }
          }
        ),
        /* @__PURE__ */ jsx24(
          "input",
          {
            className: "button",
            type: "button",
            onClick: () => {
              setStep(0);
            },
            value: "Cancelar"
          }
        )
      ] })
    ] })
  ] }) });
}

// app/components/modalCodeShow.tsx
import { useState as useState11, useEffect as useEffect5 } from "react";
import { Form as Form7, useNavigation as useNavigation7 } from "@remix-run/react";
import { jsx as jsx25, jsxs as jsxs23 } from "react/jsx-runtime";
function ModalCodeShow({ setStep, accessLevelSelected }) {
  let navigation = useNavigation7(), [code, setCode] = useState11("000000");
  function generateRandomCode2(length) {
    let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", code2 = "";
    for (let i = 0; i < length; i++) {
      let randomCharacter = character[Math.floor(Math.random() * character.length)];
      code2 += randomCharacter;
    }
    return code2;
  }
  return useEffect5(() => {
    setCode(generateRandomCode2(6));
  }, []), /* @__PURE__ */ jsx25("div", { className: "modal", children: /* @__PURE__ */ jsxs23("div", { className: "message", children: [
    /* @__PURE__ */ jsx25(
      "img",
      {
        src: "/img/x.svg",
        className: "button-close",
        alt: "close",
        onClick: () => {
          setStep(0);
        }
      }
    ),
    /* @__PURE__ */ jsxs23("div", { className: "message-information", children: [
      /* @__PURE__ */ jsx25("p", { className: "just-text", children: "Recuerda no compartir el c\xF3digo generado con nadie diferente al usuario que requiere crear la cuenta." }),
      /* @__PURE__ */ jsx25("p", { children: "El c\xF3digo generado es el siguiente:" }),
      /* @__PURE__ */ jsxs23("div", { className: "code", children: [
        /* @__PURE__ */ jsx25("p", { className: "code-letter", children: code[0] }),
        /* @__PURE__ */ jsx25("p", { className: "code-letter", children: code[1] }),
        /* @__PURE__ */ jsx25("p", { className: "code-letter", children: code[2] }),
        /* @__PURE__ */ jsx25("p", { className: "code-letter", children: code[3] }),
        /* @__PURE__ */ jsx25("p", { className: "code-letter", children: code[4] }),
        /* @__PURE__ */ jsx25("p", { className: "code-letter", children: code[5] })
      ] }),
      /* @__PURE__ */ jsxs23(Form7, { method: "POST", children: [
        /* @__PURE__ */ jsx25("input", { type: "hidden", name: "action", value: "CREATE-USER" }),
        /* @__PURE__ */ jsx25("input", { type: "hidden", name: "Token", value: code }),
        /* @__PURE__ */ jsx25("input", { type: "hidden", name: "AccessLevel", value: accessLevelSelected }),
        /* @__PURE__ */ jsxs23("div", { className: "loading", children: [
          /* @__PURE__ */ jsx25(
            "input",
            {
              className: "button",
              type: "submit",
              value: "Guardar"
            }
          ),
          navigation?.state !== "idle" && /* @__PURE__ */ jsx25(Spinner, {})
        ] })
      ] })
    ] })
  ] }) });
}

// app/routes/usuarios._index.tsx
import { jsx as jsx26, jsxs as jsxs24 } from "react/jsx-runtime";
async function loader5({ request }) {
  let currentUser = await authenticator.isAuthenticated(request), users = await getUsers();
  if (currentUser?.AccessLevel === "N")
    throw new Error("Acceso no permitido");
  return {
    currentUser,
    users: users.filter((user) => currentUser.UserID !== user.UserID && user.Name.length > 0)
  };
}
async function action6({ request }) {
  let form = await request.formData(), currentAction = form.get("action");
  if (currentAction)
    switch (currentAction) {
      case "CREATE-USER":
        let token = form.get("Token"), accessLevelSelected = form.get("AccessLevel");
        return {
          STATUS: "CODE-SAVE",
          RESULT: await createPreviousUser(token, accessLevelSelected),
          ERROR: ""
        };
      default:
        throw new Error("Invalid option");
    }
  else {
    let userID = form.get("UserID");
    switch (request.method) {
      case "PUT":
        let userInactivated = await getUsersByID(userID), inactivatedUser = {
          UserID: userID,
          State: userInactivated.State === 1 ? 0 : 1
        };
        return {
          STATUS: "USER STATE CHANGE",
          RESULT: await updateUser(inactivatedUser),
          ERROR: ""
        };
      case "DELETE":
        let user = await getUsersByID(userID);
        return user?.Documents.length > 0 || user?.Dates.length > 0 || user?.InternalDocuments.length > 0 || user?.Subjects.length > 0 || user?.Clients.length > 0 ? {
          STATUS: "USER HAVE DATA",
          RESULT: null,
          ERROR: ""
        } : {
          STATUS: "DELETED",
          RESULT: await deleteUser(userID),
          ERROR: ""
        };
      default:
        throw new Error("Invalid method");
    }
  }
}
function Usuarios() {
  let [users, setUsers] = useState12([]), [userSelected, setUserSelected] = useState12({}), [accessLevelSelected, setAccessLevelSelected] = useState12(""), [addUserStep, setAddUserStep] = useState12(0), [errorSelectedMessage, showErrorSelectedMessage] = useState12(!1), [showMessageAddUser, setShowMessageAddUser] = useState12(!1), [showMessageDeleteUser, setShowMessageDeleteUser] = useState12(!1), [showMessageEnableUser, setShowMessageEnableUser] = useState12(!1), [showMessageUserDeleted, setShowMessageUserDeleted] = useState12(!1), [showMessageUserHavaData, setShowMessageUserHavaData] = useState12(!1), [showMessageUserStateChange, setShowMessageUserStateChange] = useState12(!1), loader13 = useLoaderData5(), action12 = useActionData8();
  useEffect6(() => {
    switch (action12?.STATUS) {
      case "CODE-SAVE":
        setAddUserStep(0), setAccessLevelSelected(""), setShowMessageAddUser(!0);
        break;
      case "DELETED":
        setUserSelected({}), setShowMessageUserDeleted(!0), setShowMessageDeleteUser(!1);
        break;
      case "USER HAVE DATA":
        setUserSelected({}), setShowMessageDeleteUser(!1), setShowMessageUserHavaData(!0);
        break;
      case "USER STATE CHANGE":
        setUserSelected({}), setShowMessageEnableUser(!1), setShowMessageUserStateChange(!0);
    }
  }, [action12]), useEffect6(() => {
    setUsers(loader13?.users);
  }, [loader13]);
  let showEliminatedClient = () => {
    Object.keys(userSelected).length <= 0 ? showErrorSelectedMessage(!0) : setShowMessageDeleteUser(!0);
  }, showDisableUser = () => {
    Object.keys(userSelected).length <= 0 ? showErrorSelectedMessage(!0) : setShowMessageEnableUser(!0);
  }, searchClient = (event) => {
    let value = event.target.value.toString().toLowerCase(), actualizedUsers = loader13?.users?.filter((user) => user.Name.toLowerCase().includes(value));
    setUsers(actualizedUsers);
  };
  return /* @__PURE__ */ jsxs24("main", { className: "container", children: [
    errorSelectedMessage && /* @__PURE__ */ jsx26(
      ModalMessage,
      {
        features: {
          text: "Seleccione un cliente de la lista",
          isOkCancel: !1,
          indexIcon: 0,
          data: null
        },
        setVisibleMessage: showErrorSelectedMessage
      }
    ),
    addUserStep === 1 && /* @__PURE__ */ jsx26(
      ModalCodeMessage,
      {
        currentUser: loader13?.currentUser,
        setStep: setAddUserStep,
        accessLevelSelected,
        setAccessLevelSelected
      }
    ),
    addUserStep === 2 && /* @__PURE__ */ jsx26(
      ModalCodeShow,
      {
        setStep: setAddUserStep,
        accessLevelSelected
      }
    ),
    showMessageAddUser && /* @__PURE__ */ jsx26(
      ModalMessage,
      {
        features: {
          text: "El c\xF3digo generado ha sido almacenado exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowMessageAddUser
      }
    ),
    showMessageDeleteUser && /* @__PURE__ */ jsx26(
      ModalMessage,
      {
        features: {
          text: "\xBFEsta seguro que desea eliminar el usuario seleccionado?",
          isOkCancel: !0,
          indexIcon: 2,
          data: {
            name: "UserID",
            value: userSelected.UserID
          }
        },
        setVisibleMessage: setShowMessageDeleteUser
      }
    ),
    showMessageEnableUser && /* @__PURE__ */ jsx26(
      ModalMessage,
      {
        features: {
          text: `\xBFEsta seguro que desea ${userSelected.State === 1 ? "Inactivar" : "Activar"} el usuario seleccionado?`,
          isOkCancel: !0,
          indexIcon: 2,
          data: {
            method: "PUT",
            name: "UserID",
            value: userSelected.UserID
          }
        },
        setVisibleMessage: setShowMessageEnableUser
      }
    ),
    showMessageUserDeleted && /* @__PURE__ */ jsx26(
      ModalMessage,
      {
        features: {
          text: "El usuario ha sido eliminado exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowMessageUserDeleted
      }
    ),
    showMessageUserHavaData && /* @__PURE__ */ jsx26(
      ModalMessage,
      {
        features: {
          text: "El usuario no pudo ser eliminado ya que se encontraron datos (documentos, citas, clientes, documentos internos, materias) registrados para este usuario",
          isOkCancel: !1,
          indexIcon: 0,
          data: null
        },
        setVisibleMessage: setShowMessageUserHavaData
      }
    ),
    /* @__PURE__ */ jsx26("h1", { className: "heading", children: "Gestiona los usuarios" }),
    /* @__PURE__ */ jsx26("p", { className: "subheading", children: "Lista completa de los usuarios registrados, puedes escribir y filtrar para una b\xFAsqueda mas r\xE1pida." }),
    /* @__PURE__ */ jsx26("div", { className: "top-options", children: /* @__PURE__ */ jsxs24("div", { className: "search", children: [
      /* @__PURE__ */ jsx26("img", { src: "/img/search.svg", alt: "search" }),
      /* @__PURE__ */ jsx26(
        "input",
        {
          type: "text",
          placeholder: "Buscar",
          onChange: (event) => {
            searchClient(event);
          }
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs24("div", { className: "actions", children: [
      /* @__PURE__ */ jsxs24(
        "button",
        {
          className: "button",
          onClick: () => {
            setAddUserStep(1);
          },
          type: "button",
          children: [
            /* @__PURE__ */ jsx26("img", { src: "/img/add.svg", alt: "add" }),
            /* @__PURE__ */ jsx26("p", { children: "Agregar" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs24(
        "button",
        {
          className: "button",
          onClick: () => {
            showDisableUser();
          },
          children: [
            /* @__PURE__ */ jsx26("img", { src: "/img/edit.svg", alt: "add" }),
            /* @__PURE__ */ jsx26("p", { children: "Inhabilitar" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs24(
        "button",
        {
          className: "button",
          onClick: () => {
            showEliminatedClient();
          },
          type: "button",
          value: "Eliminar",
          children: [
            /* @__PURE__ */ jsx26("img", { src: "/img/x.svg", alt: "add" }),
            /* @__PURE__ */ jsx26("p", { children: "Eliminar" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx26("div", { className: "list-scroll", children: users.length > 0 ? users.map(
      (user) => /* @__PURE__ */ jsx26(
        User,
        {
          user,
          userSelected,
          setUserSelected
        },
        user.UserID
      )
    ) : loader13?.users?.length === 0 ? /* @__PURE__ */ jsx26("p", { className: "no-found", children: "A\xFAn no hay usuarios registrados" }) : loader13?.users?.length > 0 && users.length === 0 ? /* @__PURE__ */ jsx26("p", { className: "no-found", children: "No se pudieron encontrar usuarios" }) : /* @__PURE__ */ jsx26("div", { className: "center", children: /* @__PURE__ */ jsx26(Spinner, {}) }) })
  ] });
}

// app/routes/create-account.tsx
var create_account_exports = {};
__export(create_account_exports, {
  action: () => action7,
  default: () => CreateAccount
});
import { useEffect as useEffect7, useState as useState13 } from "react";
import { useActionData as useActionData12, useNavigate as useNavigate2 } from "@remix-run/react";

// app/components/create-account/enter-code.tsx
import React2 from "react";
import { Link as Link7, Form as Form8, useNavigation as useNavigation8, useActionData as useActionData9 } from "@remix-run/react";
import { jsx as jsx27, jsxs as jsxs25 } from "react/jsx-runtime";
function EnterCode2() {
  let action12 = useActionData9(), navigation = useNavigation8(), inputs = [
    React2.createRef(),
    React2.createRef(),
    React2.createRef(),
    React2.createRef(),
    React2.createRef(),
    React2.createRef()
  ], handleInput = (e, index) => {
    e.target.value.length === e.target.maxLength && (e.target.value = e.target.value.toString().toUpperCase(), inputs[index + 1]?.current.focus());
  };
  return /* @__PURE__ */ jsxs25(Form8, { className: "form", method: "POST", children: [
    /* @__PURE__ */ jsx27("h1", { className: "heading", children: "Ingresa tu c\xF3digo de creaci\xF3n" }),
    /* @__PURE__ */ jsx27("h2", { className: "subheading", children: "Para continuar y crear tu cuenta ingresa el c\xF3digo de creaci\xF3n de cuenta Otorgado por tu administrador." }),
    /* @__PURE__ */ jsx27("br", {}),
    /* @__PURE__ */ jsxs25("section", { className: "inputs", children: [
      /* @__PURE__ */ jsx27("input", { type: "hidden", name: "step", value: 1 }),
      /* @__PURE__ */ jsx27("p", { className: "subheading", children: "C\xF3digo de creaci\xF3n" }),
      /* @__PURE__ */ jsx27("div", { className: "code", children: inputs.map(
        (input, index) => /* @__PURE__ */ jsx27(
          "input",
          {
            type: "text",
            placeholder: "-",
            className: "code-letter",
            ref: input,
            name: `letter${index}`,
            maxLength: 1,
            onChange: (e) => {
              handleInput(e, index);
            }
          },
          index
        )
      ) }),
      /* @__PURE__ */ jsxs25("div", { className: "account-options", children: [
        /* @__PURE__ */ jsx27(Link7, { to: "/login", className: "option", children: "\xBFYa tienes una cuenta? Inicia sesi\xF3n" }),
        /* @__PURE__ */ jsx27(Link7, { to: "/forgot-password", className: "option", children: "\xBFOlvidaste tu contrase\xF1a? Recuperala" })
      ] }),
      /* @__PURE__ */ jsx27("p", { className: "error", children: action12?.ERROR }),
      /* @__PURE__ */ jsxs25("div", { className: "loading", children: [
        /* @__PURE__ */ jsx27(
          "input",
          {
            className: "button",
            type: "submit",
            value: "Continuar",
            onClick: () => {
            }
          }
        ),
        navigation?.state !== "idle" && /* @__PURE__ */ jsx27(Spinner, {})
      ] })
    ] })
  ] });
}

// app/components/create-account/enter-email.tsx
import { Form as Form9, useActionData as useActionData10, useNavigation as useNavigation9 } from "@remix-run/react";
import { jsx as jsx28, jsxs as jsxs26 } from "react/jsx-runtime";
function EnterEmail2({ name, setName, email, setEmail, phone, setPhone }) {
  let action12 = useActionData10(), navigation = useNavigation9();
  return /* @__PURE__ */ jsxs26(Form9, { className: "form", method: "POST", children: [
    /* @__PURE__ */ jsx28("h1", { className: "heading", children: "Crea tu nueva cuenta" }),
    /* @__PURE__ */ jsx28("p", { className: "subheading", children: "LLena todos los campos para crear tu nueva cuenta" }),
    /* @__PURE__ */ jsx28("br", {}),
    /* @__PURE__ */ jsxs26("div", { className: "inputs", children: [
      /* @__PURE__ */ jsx28("input", { type: "hidden", name: "step", value: "2" }),
      /* @__PURE__ */ jsx28(
        Input,
        {
          title: "Nombre",
          name: "name",
          placeholder: "Ingresa tu nombre",
          type: "text",
          value: name,
          setValue: setName,
          error: ""
        }
      ),
      /* @__PURE__ */ jsx28(
        Input,
        {
          title: "Correo electr\xF3nico",
          name: "email",
          placeholder: "Tu corrreo electr\xF3nico",
          type: "email",
          value: email,
          setValue: setEmail,
          error: ""
        }
      ),
      /* @__PURE__ */ jsx28(
        Input,
        {
          title: "Numero telefonico",
          name: "phone",
          placeholder: "Tu numero telefonico",
          type: "tel",
          value: phone,
          setValue: setPhone,
          error: ""
        }
      ),
      /* @__PURE__ */ jsx28("p", { className: "error", children: action12?.ERROR }),
      /* @__PURE__ */ jsxs26("div", { className: "loading", children: [
        /* @__PURE__ */ jsx28("input", { className: "button", type: "submit", value: "Continuar" }),
        navigation?.state !== "idle" && /* @__PURE__ */ jsx28(Spinner, {})
      ] })
    ] })
  ] });
}

// app/components/create-account/enter-password.tsx
import { Form as Form10, useNavigation as useNavigation10, useActionData as useActionData11 } from "@remix-run/react";
import { jsx as jsx29, jsxs as jsxs27 } from "react/jsx-runtime";
function EnterPassword({
  userID,
  name,
  email,
  phone,
  password,
  setPassword,
  repeatPassword,
  setRepeatPassword
}) {
  let action12 = useActionData11(), navigation = useNavigation10();
  return /* @__PURE__ */ jsxs27(Form10, { className: "form", method: "POST", children: [
    /* @__PURE__ */ jsx29("h1", { className: "heading", children: "Agrega tu contrase\xF1a" }),
    /* @__PURE__ */ jsx29("p", { className: "subheading", children: "Para finalizar de crear tu cuenta agrega una contrase\xF1a" }),
    /* @__PURE__ */ jsx29("br", {}),
    /* @__PURE__ */ jsx29("input", { type: "hidden", name: "step", value: "3" }),
    /* @__PURE__ */ jsx29("input", { type: "hidden", name: "UserID", value: userID }),
    /* @__PURE__ */ jsx29("input", { type: "hidden", name: "name", value: name }),
    /* @__PURE__ */ jsx29("input", { type: "hidden", name: "email", value: email }),
    /* @__PURE__ */ jsx29("input", { type: "hidden", name: "phone", value: phone }),
    /* @__PURE__ */ jsxs27("div", { className: "inputs", children: [
      /* @__PURE__ */ jsx29(
        Input,
        {
          title: "Contrase\xF1a",
          name: "password",
          placeholder: "Ingresa tu contrase\xF1a",
          type: "password",
          value: password,
          setValue: setPassword,
          error: ""
        }
      ),
      /* @__PURE__ */ jsx29(
        Input,
        {
          title: "Repite la contrase\xF1a",
          name: "repeat-password",
          placeholder: "Repite tu contrase\xF1a",
          type: "password",
          value: repeatPassword,
          setValue: setRepeatPassword,
          error: ""
        }
      ),
      /* @__PURE__ */ jsx29("p", { className: "error", children: action12?.ERROR }),
      /* @__PURE__ */ jsxs27("div", { className: "loading", children: [
        /* @__PURE__ */ jsx29("input", { className: "button", type: "submit", value: "Crear cuenta" }),
        navigation?.state !== "idle" && /* @__PURE__ */ jsx29(Spinner, {})
      ] })
    ] })
  ] });
}

// app/routes/create-account.tsx
import { jsx as jsx30, jsxs as jsxs28 } from "react/jsx-runtime";
async function action7({ request }) {
  let form = await request.formData(), step = form.get("step"), name, email, phone, error = "";
  switch (parseInt(step)) {
    case 1:
      let letter0 = form.get("letter0"), letter1 = form.get("letter1"), letter2 = form.get("letter2"), letter3 = form.get("letter3"), letter4 = form.get("letter4"), letter5 = form.get("letter5"), code = [letter0, letter1, letter2, letter3, letter4, letter5];
      for (let i = 0; i < 6; i++)
        if (code[i]?.length === 0)
          return {
            STATUS: "ERROR",
            ERROR: "Todos los d\xEDgitos son obligatorios"
          };
      let selectedUser = (await getUsers()).filter((user2) => user2.Token === code.join(""));
      return selectedUser.length > 0 ? {
        STATUS: "VALIDATED",
        DATA: selectedUser[0]
      } : {
        STATUS: "ERROR",
        ERROR: "Token no valido"
      };
    case 2:
      return name = form.get("name"), email = form.get("email"), phone = form.get("phone"), name.length === 0 ? { ERROR: "Tu nombre es obligatorio" } : email.length === 0 ? { ERROR: "El correo electr\xF3nico es obligatorio" } : phone.length !== 8 ? { ERROR: "El n\xFAmero telef\xF3nico debe contener 8 caracteres" } : error.length > 0 ? {
        STATUS: "ERROR",
        ERROR: error
      } : {
        STATUS: "PENDING",
        DATA: {
          Name: name,
          Email: email,
          Phone: phone
        }
      };
    case 3:
      let userID = form.get("UserID");
      name = form.get("name"), email = form.get("email"), phone = form.get("phone");
      let password = form.get("password"), repeatPassword = form.get("repeat-password");
      if (password.length === 0)
        return { ERROR: "La contrase\xF1a es obligatoria" };
      if (password.length < 8)
        return { ERROR: "La contrase\xF1a debe contener al menos 8 caracteres" };
      if (repeatPassword.length === 0)
        return { ERROR: "Ingresa nuevamente tu contrase\xF1a" };
      if (repeatPassword.length < 8)
        return { ERROR: "La contrase\xF1a debe contener al menos 8 caracteres" };
      if (password !== repeatPassword)
        return { ERROR: "Las contrase\xF1as ingresadas no coinciden" };
      let user = {
        UserID: userID,
        Name: name,
        Email: email,
        Phone: phone,
        Password: password,
        Token: null,
        State: 1
      };
      try {
        return await updateUser(user), {
          STATUS: "CREATED"
        };
      } catch (error2) {
        return {
          STATUS: "ERROR",
          ERROR: "Error al crear el usuario",
          MESSAGE: error2
        };
      }
    default:
      throw new Error("Invalid detected option");
  }
}
function CreateAccount() {
  let navigate = useNavigate2(), action12 = useActionData12(), [step, setStep] = useState13(1), [userID, setUserID] = useState13(-1), [name, setName] = useState13(""), [email, setEmail] = useState13(""), [phone, setPhone] = useState13(""), [password, setPassword] = useState13(""), [repeatPassword, setRepeatPassword] = useState13("");
  return useEffect7(() => {
    switch (action12?.STATUS) {
      case "VALIDATED":
        setUserID(action12?.DATA.UserID), setStep(2);
        break;
      case "PENDING":
        setName(action12?.DATA.Name), setEmail(action12?.DATA.Email), setPhone(action12?.DATA.Phone), setStep(3);
        break;
      case "CREATED":
        navigate("/login");
        break;
    }
  }, [action12]), /* @__PURE__ */ jsxs28("main", { className: "login-modal", children: [
    step === 1 && /* @__PURE__ */ jsx30(EnterCode2, {}),
    step === 2 && /* @__PURE__ */ jsx30(
      EnterEmail2,
      {
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone
      }
    ),
    step === 3 && /* @__PURE__ */ jsx30(
      EnterPassword,
      {
        userID,
        name,
        email,
        phone,
        password,
        setPassword,
        repeatPassword,
        setRepeatPassword
      }
    ),
    /* @__PURE__ */ jsxs28("div", { className: "steps", children: [
      /* @__PURE__ */ jsx30("p", { className: `step ${step === 1 ? "active" : ""}`, children: "1" }),
      /* @__PURE__ */ jsx30("div", { className: "step-line" }),
      /* @__PURE__ */ jsx30("p", { className: `step ${step === 2 ? "active" : ""}`, children: "2" }),
      /* @__PURE__ */ jsx30("div", { className: "step-line" }),
      /* @__PURE__ */ jsx30("p", { className: `step ${step === 3 ? "active" : ""}`, children: "2" })
    ] })
  ] });
}

// app/routes/materias.$name.tsx
var materias_name_exports = {};
__export(materias_name_exports, {
  action: () => action8,
  default: () => MateriasName,
  links: () => links4,
  loader: () => loader6
});
import { useState as useState15, useEffect as useEffect8 } from "react";
import { useActionData as useActionData13, useLoaderData as useLoaderData6 } from "@remix-run/react";

// app/components/document.tsx
import { useState as useState14 } from "react";
import { Link as Link8, useOutletContext as useOutletContext3 } from "@remix-run/react";
import { Fragment as Fragment8, jsx as jsx31, jsxs as jsxs29 } from "react/jsx-runtime";
function Document3({ document, setSelectedDocument, setShowFormDeletedMessage }) {
  let { Name, URL } = document, [showModalDocument, setShowModalDocument] = useState14(!1), context = useOutletContext3();
  return /* @__PURE__ */ jsxs29(Fragment8, { children: [
    showModalDocument && /* @__PURE__ */ jsx31(
      ModalDocument,
      {
        URL,
        setShowModalDocument
      }
    ),
    /* @__PURE__ */ jsxs29("div", { className: "item-list", children: [
      /* @__PURE__ */ jsxs29("div", { className: "item-main", children: [
        /* @__PURE__ */ jsx31("img", { src: "/img/file-description.svg", alt: "user" }),
        /* @__PURE__ */ jsx31("div", { className: "item-information", onClick: () => {
          setShowModalDocument(!0);
        }, children: /* @__PURE__ */ jsx31("h4", { children: Name }) })
      ] }),
      /* @__PURE__ */ jsxs29("div", { className: "actions", children: [
        /* @__PURE__ */ jsx31(Link8, { to: `http://localhost:8000/document/download/${URL}`, children: /* @__PURE__ */ jsx31(
          "img",
          {
            src: "/img/download.svg",
            alt: "square"
          }
        ) }),
        /* @__PURE__ */ jsx31(
          "img",
          {
            onClick: () => {
              setSelectedDocument(document), setShowFormDeletedMessage(!0);
            },
            src: "/img/trash.svg",
            alt: "trash"
          }
        )
      ] })
    ] })
  ] });
}

// app/styles/materias.css
var materias_default = "/build/_assets/materias-RLKFEWPQ.css";

// app/routes/materias.$name.tsx
import { jsx as jsx32, jsxs as jsxs30 } from "react/jsx-runtime";
function links4() {
  return [
    {
      rel: "stylesheet",
      href: materias_default
    },
    {
      rel: "stylesheet",
      href: clientes_default
    }
  ];
}
async function loader6({ params, request }) {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  let { name } = params, selectedSubject = (await getSubjects()).filter((subject) => subject.Name === name);
  if (selectedSubject.length === 0)
    throw new Error("Nombre de materia no valido");
  return selectedSubject[0];
}
async function action8({ request }) {
  let DocumentID = (await request.formData()).get("DocumentID");
  switch (request.method) {
    case "DELETE":
      return {
        status: "DELETED",
        data: await deleteDocument(DocumentID),
        errors: {}
      };
    default:
      throw new Error("Unexpected action");
  }
}
function MateriasName() {
  let loader13 = useLoaderData6(), actionResult = useActionData13(), [showFormDeletedMessage, setShowFormDeletedMessage] = useState15(!1), [showDeletedMessage, setShowDeletedMessage] = useState15(!1), [selectedDocument, setSelectedDocument] = useState15({}), { Name, Documents, CreatedDate, UpdatedDate } = loader13, [documents, setDocuments] = useState15([]);
  useEffect8(() => {
    switch (actionResult?.status) {
      case "DELETED":
        setShowFormDeletedMessage(!1), setShowDeletedMessage(!0);
        break;
      default:
        break;
    }
  }, [actionResult]), useEffect8(() => {
    setDocuments(loader13?.Documents);
  }, [loader13]);
  let searchDocument = (event) => {
    let value = event.target.value.toString().toLowerCase(), actualizedDocuments = loader13?.Documents.filter((document) => document.Name.toLowerCase().includes(value));
    setDocuments(actualizedDocuments);
  };
  return /* @__PURE__ */ jsxs30("div", { className: "container", children: [
    showFormDeletedMessage && /* @__PURE__ */ jsx32(
      ModalMessage,
      {
        features: {
          text: "\xBFEsta seguro de la eliminaci\xF3n del documento?",
          isOkCancel: !0,
          indexIcon: 1,
          data: {
            name: "DocumentID",
            value: selectedDocument?.DocumentID
          }
        },
        setVisibleMessage: setShowFormDeletedMessage
      }
    ),
    showDeletedMessage && /* @__PURE__ */ jsx32(
      ModalMessage,
      {
        features: {
          text: "El documento ha sido eliminado exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowDeletedMessage
      }
    ),
    /* @__PURE__ */ jsx32("h1", { className: "heading", children: "Informacion de la materia" }),
    /* @__PURE__ */ jsx32("h2", { className: "subheading", children: "Gestiona aqui todos los documentos de la materia" }),
    /* @__PURE__ */ jsxs30("main", { className: "grid-1-2", children: [
      /* @__PURE__ */ jsxs30("section", { className: "content", children: [
        /* @__PURE__ */ jsx32("h3", { children: "Informaci\xF3n general" }),
        /* @__PURE__ */ jsxs30("div", { className: "data", children: [
          /* @__PURE__ */ jsxs30("div", { className: "item", children: [
            /* @__PURE__ */ jsx32("p", { children: "Nombre:" }),
            /* @__PURE__ */ jsx32("b", { children: Name })
          ] }),
          /* @__PURE__ */ jsxs30("div", { className: "item", children: [
            /* @__PURE__ */ jsx32("p", { children: "Numero de documentos:" }),
            /* @__PURE__ */ jsx32("b", { children: Documents.length })
          ] }),
          /* @__PURE__ */ jsxs30("div", { className: "item", children: [
            /* @__PURE__ */ jsx32("p", { children: "Fecha de creaci\xF3n:" }),
            /* @__PURE__ */ jsx32("b", { children: formattedDate(CreatedDate) })
          ] }),
          /* @__PURE__ */ jsxs30("div", { className: "item", children: [
            /* @__PURE__ */ jsx32("p", { children: "Ultima modificaci\xF3n:" }),
            /* @__PURE__ */ jsx32("b", { children: formattedDate(UpdatedDate) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs30("section", { className: "documents", children: [
        /* @__PURE__ */ jsx32("h3", { className: "documents-title", children: "Documentos registrados" }),
        /* @__PURE__ */ jsxs30("div", { className: "search", children: [
          /* @__PURE__ */ jsx32("img", { src: "/img/search.svg", alt: "search" }),
          /* @__PURE__ */ jsx32(
            "input",
            {
              type: "text",
              placeholder: "Buscar...",
              onChange: (event) => {
                searchDocument(event);
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsx32("div", { className: "list-scroll", children: Object.keys(loader13).length === 0 ? /* @__PURE__ */ jsx32("div", { className: "center", children: /* @__PURE__ */ jsx32(Spinner, {}) }) : documents.length === 0 ? /* @__PURE__ */ jsx32("p", { className: "no-found", children: "Aun no hay documentos disponibles..." }) : documents.map(
          (document) => /* @__PURE__ */ jsx32(
            Document3,
            {
              document,
              setSelectedDocument,
              setShowFormDeletedMessage
            },
            document.DocumentID
          )
        ) })
      ] })
    ] })
  ] });
}

// app/routes/clientes.$URL.tsx
var clientes_URL_exports = {};
__export(clientes_URL_exports, {
  action: () => action9,
  default: () => ClientesClientID,
  links: () => links5,
  loader: () => loader7
});
import { useEffect as useEffect9, useState as useState17 } from "react";
import { useActionData as useActionData14, useLoaderData as useLoaderData7 } from "@remix-run/react";

// app/components/selectDocument.tsx
import { useState as useState16 } from "react";
import { Link as Link9, useOutletContext as useOutletContext4 } from "@remix-run/react";
import { jsx as jsx33, jsxs as jsxs31 } from "react/jsx-runtime";
function SelectDocument({ document, setShowFormDeletedMessage, setSelectedDocument }) {
  let { Name, URL } = document, [showModalDocument, setShowModalDocument] = useState16(!1), context = useOutletContext4();
  return /* @__PURE__ */ jsxs31("div", { className: "subject-document", children: [
    showModalDocument && /* @__PURE__ */ jsx33(
      ModalDocument,
      {
        URL,
        setShowModalDocument
      }
    ),
    /* @__PURE__ */ jsxs31(
      "div",
      {
        className: "record-document",
        children: [
          /* @__PURE__ */ jsx33("p", { onClick: () => {
            setShowModalDocument(!0);
          }, children: Name }),
          /* @__PURE__ */ jsxs31("p", { className: "actions", children: [
            /* @__PURE__ */ jsx33(Link9, { to: `http://localhost:8000/documents/download/${URL}`, children: /* @__PURE__ */ jsx33(
              "img",
              {
                src: "/img/download.svg",
                alt: "trash"
              }
            ) }),
            /* @__PURE__ */ jsx33(
              "img",
              {
                onClick: () => {
                  setSelectedDocument(document), setShowFormDeletedMessage(!0);
                },
                src: "/img/trash.svg",
                alt: "trash"
              }
            )
          ] })
        ]
      }
    )
  ] });
}

// app/components/selectSubject.tsx
import { jsx as jsx34, jsxs as jsxs32 } from "react/jsx-runtime";
function SelectSubject({ subject, showSubject, setShowSubject, setShowFormDeletedMessage, setSelectedDocument }) {
  let { SubjectID, Name, Documents } = subject;
  return /* @__PURE__ */ jsxs32("div", { className: "record-subject", children: [
    /* @__PURE__ */ jsxs32(
      "div",
      {
        className: "subject-information",
        onClick: () => {
          setShowSubject(showSubject === SubjectID ? 0 : SubjectID);
        },
        children: [
          /* @__PURE__ */ jsx34("p", { children: Name }),
          /* @__PURE__ */ jsx34("div", { children: /* @__PURE__ */ jsx34(
            "img",
            {
              className: showSubject === SubjectID ? "active" : "",
              src: "/img/chevron-down.svg",
              alt: "arrow"
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsx34("div", { className: `subject-documents ${showSubject === SubjectID ? "active" : ""}`, children: Documents?.length > 0 ? Documents.map(
      (document) => /* @__PURE__ */ jsx34(
        SelectDocument,
        {
          document,
          setSelectedDocument,
          setShowFormDeletedMessage
        },
        document.DocumentID
      )
    ) : /* @__PURE__ */ jsx34("div", { className: "subject-document", children: /* @__PURE__ */ jsx34("div", { className: "record-document", children: /* @__PURE__ */ jsx34("p", { children: "Aun no hay documentos disponibles" }) }) }) })
  ] });
}

// app/components/formDocument.tsx
import { Form as Form11, useNavigation as useNavigation11 } from "@remix-run/react";
import { Fragment as Fragment9, jsx as jsx35, jsxs as jsxs33 } from "react/jsx-runtime";
function FormDocument({ method, errors, subjects, ClientID, UserID, setShowModalDocument }) {
  let navigation = useNavigation11();
  return /* @__PURE__ */ jsx35("div", { className: "modal", children: /* @__PURE__ */ jsxs33(Form11, { className: "form", method, encType: "multipart/form-data", children: [
    /* @__PURE__ */ jsx35(
      CloseButton,
      {
        setVisibleForm: setShowModalDocument
      }
    ),
    /* @__PURE__ */ jsx35("h1", { className: "heading", children: "Agregar nuevo documento" }),
    /* @__PURE__ */ jsx35("h2", { className: "subheading", children: "Agrega toda la informaci\xF3n sobre el documento para agregarlo al expediente" }),
    /* @__PURE__ */ jsx35("br", {}),
    /* @__PURE__ */ jsxs33("div", { className: "inputs", children: [
      /* @__PURE__ */ jsxs33("div", { className: "input", children: [
        /* @__PURE__ */ jsx35("input", { name: "Client", type: "hidden", value: ClientID }),
        /* @__PURE__ */ jsx35("input", { name: "User", type: "hidden", value: UserID }),
        /* @__PURE__ */ jsx35("label", { htmlFor: "title", children: "Titulo" }),
        /* @__PURE__ */ jsx35(
          "input",
          {
            name: "Name",
            id: "title",
            type: "text",
            placeholder: "Escriba el titulo del documento..."
          }
        ),
        errors?.name ? /* @__PURE__ */ jsx35("p", { className: "error", children: errors.name }) : null
      ] }),
      /* @__PURE__ */ jsxs33("div", { className: "input", children: [
        /* @__PURE__ */ jsx35("label", { htmlFor: "subject", children: "Materia" }),
        /* @__PURE__ */ jsx35(
          "select",
          {
            name: "Subject",
            id: "subject",
            children: subjects.length > 0 ? /* @__PURE__ */ jsxs33(Fragment9, { children: [
              /* @__PURE__ */ jsx35("option", { value: -1, children: "-- Seleccione una materia --" }),
              subjects.map(
                (item) => /* @__PURE__ */ jsx35("option", { value: item.SubjectID, children: item.Name }, item.SubjectID)
              )
            ] }) : ""
          }
        ),
        errors?.subject ? /* @__PURE__ */ jsx35("p", { className: "error", children: errors.subject }) : null
      ] }),
      /* @__PURE__ */ jsxs33("div", { className: "input", children: [
        /* @__PURE__ */ jsx35("label", { htmlFor: "file", children: "Archivo" }),
        /* @__PURE__ */ jsx35(
          "input",
          {
            type: "file",
            name: "File",
            id: "file"
          }
        ),
        errors?.file ? /* @__PURE__ */ jsx35("p", { className: "error", children: errors.file }) : null
      ] })
    ] }),
    /* @__PURE__ */ jsxs33("div", { className: "loading", children: [
      /* @__PURE__ */ jsx35("input", { className: "button", type: "submit", value: "Guardar" }),
      navigation?.state !== "idle" && /* @__PURE__ */ jsx35(Spinner, {})
    ] })
  ] }) });
}

// app/routes/clientes.$URL.tsx
import { jsx as jsx36, jsxs as jsxs34 } from "react/jsx-runtime";
function links5() {
  return [
    {
      rel: "stylesheet",
      href: clientes_default
    }
  ];
}
async function loader7({ params, request }) {
  let currentUser = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  }), { URL } = params, client = (await getClients()).filter((value) => value.URL === URL);
  if (client.length === 0)
    throw new Error("Cliente no encontrado");
  let subjects = await getSubjects();
  return {
    client,
    subjects,
    currentUser
  };
}
async function action9({ request }) {
  let documentFormData = await request.formData(), documentID = documentFormData.get("DocumentID"), name = documentFormData.get("Name"), subject = documentFormData.get("Subject"), file = documentFormData.get("File"), errors = {};
  if (request.method === "POST" && (name.length === 0 && (errors.name = "El titulo del documento es obligatorio"), name.length > 30 && (errors.name = "El titulo del documento no debe exceder las 30 letras"), parseInt(subject) === -1 && (errors.subject = "La selecci\xF3n de una materia es obligatoria"), file || (errors.file = "debe seleccionar un documento")), Object.keys(errors).length > 0)
    return {
      state: "ERROR",
      data: null,
      errors
    };
  switch (request.method) {
    case "POST":
      try {
        return {
          state: "INSERTED",
          data: await addDocument(documentFormData),
          errors: {}
        };
      } catch {
        return {
          state: "ERROR",
          data: null,
          errors: {}
        };
      }
    case "DELETE":
      return {
        state: "DELETED",
        data: await deleteDocument(documentID),
        errors: {}
      };
    default:
      throw new Error("Unexpected action");
  }
}
function ClientesClientID() {
  let { client, subjects, currentUser } = useLoaderData7(), actionResult = useActionData14(), { ClientID, Name, Identity, Email, Phone, Address, Documents } = client[0], [showSubject, setShowSubject] = useState17(!1), [showInsertedMessage, setShowInsertedMessage] = useState17(!1), [showDeletedMessage, setShowDeletedMessage] = useState17(!1), [showFormDocument, setShowFormDocument] = useState17(!1), [showFormDeletedMessage, setShowFormDeletedMessage] = useState17(!1), [selectedDocument, setSelectedDocument] = useState17({}), subjectsNamed = {};
  subjects.forEach((subject) => {
    subjectsNamed[subject.SubjectID] = subject.Name;
  });
  let record = [];
  return Documents.forEach((document) => {
    let subjectExist = !1;
    record.forEach((item) => {
      document?.Subject === item.SubjectID && (item.Documents = [...item.Documents, document], subjectExist = !0);
    }), subjectExist || record.push({
      SubjectID: document?.Subject,
      Name: subjectsNamed[document?.Subject],
      Documents: [document]
    });
  }), useEffect9(() => {
    switch (actionResult?.state) {
      case "INSERTED":
        setShowFormDocument(!1), setShowInsertedMessage(!0);
        break;
      case "DELETED":
        setShowFormDeletedMessage(!1), setShowDeletedMessage(!0);
        break;
      default:
        break;
    }
  }, [actionResult]), /* @__PURE__ */ jsxs34("div", { className: "container", children: [
    showFormDocument && /* @__PURE__ */ jsx36(
      FormDocument,
      {
        method: "POST",
        errors: actionResult?.errors,
        subjects,
        ClientID,
        UserID: currentUser?.UserID,
        setShowModalDocument: setShowFormDocument
      }
    ),
    showFormDeletedMessage && /* @__PURE__ */ jsx36(
      ModalMessage,
      {
        features: {
          text: "\xBFEsta seguro de la eliminaci\xF3n del documento?",
          isOkCancel: !0,
          indexIcon: 1,
          data: {
            name: "DocumentID",
            value: selectedDocument?.DocumentID
          }
        },
        setVisibleMessage: setShowFormDeletedMessage
      }
    ),
    showInsertedMessage && /* @__PURE__ */ jsx36(
      ModalMessage,
      {
        features: {
          text: "El documento ha sido agregado exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowInsertedMessage
      }
    ),
    showDeletedMessage && /* @__PURE__ */ jsx36(
      ModalMessage,
      {
        features: {
          text: "El documento ha sido eliminado exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowDeletedMessage
      }
    ),
    /* @__PURE__ */ jsx36("h1", { className: "heading", children: "Informaci\xF3n del cliente" }),
    /* @__PURE__ */ jsx36("h2", { className: "subheading", children: "Informaci\xF3n general y expediente completo del cliente" }),
    /* @__PURE__ */ jsxs34("main", { className: "grid-1-2", children: [
      /* @__PURE__ */ jsxs34("section", { className: "content", children: [
        /* @__PURE__ */ jsx36("h3", { children: "Informaci\xF3n general" }),
        /* @__PURE__ */ jsxs34("div", { className: "data", children: [
          /* @__PURE__ */ jsxs34("div", { className: "item", children: [
            /* @__PURE__ */ jsx36("p", { children: "Nombre:" }),
            /* @__PURE__ */ jsx36("b", { children: Name })
          ] }),
          /* @__PURE__ */ jsxs34("div", { className: "item", children: [
            /* @__PURE__ */ jsx36("p", { children: "Identidad:" }),
            /* @__PURE__ */ jsx36("b", { children: Identity })
          ] }),
          /* @__PURE__ */ jsxs34("div", { className: "item", children: [
            /* @__PURE__ */ jsx36("p", { children: "Correo Electr\xF3nico:" }),
            /* @__PURE__ */ jsx36("b", { children: Email })
          ] }),
          /* @__PURE__ */ jsxs34("div", { className: "item", children: [
            /* @__PURE__ */ jsx36("p", { children: "Telef\xF3no:" }),
            /* @__PURE__ */ jsx36("b", { children: Phone })
          ] }),
          /* @__PURE__ */ jsxs34("div", { className: "item", children: [
            /* @__PURE__ */ jsx36("p", { children: "Direcci\xF3n:" }),
            /* @__PURE__ */ jsx36("b", { children: Address })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs34("section", { className: "record", children: [
        /* @__PURE__ */ jsx36("h3", { className: "record-title", children: "Expediente" }),
        /* @__PURE__ */ jsx36("div", { className: "actions", children: /* @__PURE__ */ jsxs34(
          "button",
          {
            className: "button",
            onClick: () => {
              setShowFormDocument(!0);
            },
            type: "button",
            children: [
              /* @__PURE__ */ jsx36("img", { src: "/img/add.svg", alt: "add" }),
              /* @__PURE__ */ jsx36("p", { children: "Agregar documento" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx36("div", { className: "list-scroll", children: record.length === 0 ? /* @__PURE__ */ jsx36("p", { className: "no-found", children: "Aun no hay documentos disponibles..." }) : record.map(
          (subject) => /* @__PURE__ */ jsx36(
            SelectSubject,
            {
              subject,
              showSubject,
              setShowSubject,
              setShowFormDeletedMessage,
              setSelectedDocument
            },
            subject.SubjectID
          )
        ) })
      ] })
    ] })
  ] });
}

// app/routes/usuarios.$URL.tsx
var usuarios_URL_exports = {};
__export(usuarios_URL_exports, {
  default: () => UsuariosURL,
  links: () => links6,
  loader: () => loader8
});
import { useState as useState18 } from "react";
import { useLoaderData as useLoaderData8 } from "@remix-run/react";

// app/components/select-item.tsx
import { Link as Link10 } from "@remix-run/react";
import { Fragment as Fragment10, jsx as jsx37, jsxs as jsxs35 } from "react/jsx-runtime";
function SelectItem({ title, type = "URL", url = "", onClick, when, setWhen }) {
  return /* @__PURE__ */ jsxs35(Fragment10, { children: [
    when && /* @__PURE__ */ jsx37(
      ModalDocument,
      {
        URL: url,
        setShowModalDocument: setWhen
      }
    ),
    /* @__PURE__ */ jsx37("div", { className: "subject-document", children: /* @__PURE__ */ jsxs35(
      "div",
      {
        className: "record-document",
        children: [
          /* @__PURE__ */ jsx37("p", { onClick, children: title }),
          /* @__PURE__ */ jsx37("p", { className: "actions", children: type === "URL" && /* @__PURE__ */ jsx37(Link10, { to: url, children: /* @__PURE__ */ jsx37(
            "img",
            {
              src: "/img/go.svg",
              alt: "go"
            }
          ) }) })
        ]
      }
    ) })
  ] });
}

// app/components/select.tsx
import { jsx as jsx38, jsxs as jsxs36 } from "react/jsx-runtime";
function Select({ id, title, items = [], urlPrefix, type, showSelect, setShowSelect }) {
  return /* @__PURE__ */ jsxs36("div", { className: "record-subject", children: [
    /* @__PURE__ */ jsxs36(
      "div",
      {
        className: "subject-information",
        onClick: () => {
          setShowSelect(showSelect === id ? 0 : id);
        },
        children: [
          /* @__PURE__ */ jsx38("p", { children: title }),
          /* @__PURE__ */ jsx38("div", { children: /* @__PURE__ */ jsx38(
            "img",
            {
              className: showSelect === id ? "active" : "",
              src: "/img/chevron-down.svg",
              alt: "arrow"
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsx38("div", { className: `subject-documents ${showSelect === id ? "active" : ""}`, children: items?.length > 0 ? items.map(
      (item) => /* @__PURE__ */ jsx38(
        SelectItem,
        {
          title: item.Name,
          type,
          url: item.DocumentID ? item.URL : `/${urlPrefix}/${item.URL}`
        },
        item.ClientID || item.DocumentID
      )
    ) : /* @__PURE__ */ jsx38("div", { className: "subject-document", children: /* @__PURE__ */ jsx38("div", { className: "record-document", children: /* @__PURE__ */ jsx38("p", { children: "Aun no hay elementos disponibles" }) }) }) })
  ] });
}

// app/routes/usuarios.$URL.tsx
import { jsx as jsx39, jsxs as jsxs37 } from "react/jsx-runtime";
function links6() {
  return [
    {
      rel: "stylesheet",
      href: clientes_default
    }
  ];
}
async function loader8({ params }) {
  let { URL } = params, selectedUser = (await getUsers()).filter((user) => user.URL === URL)[0];
  return {
    Clients: (await getClients()).filter((client) => client.User.UserID === selectedUser.UserID),
    User: selectedUser
  };
}
function UsuariosURL() {
  let [showClients, setShowClients] = useState18(), [showDocuments, setShowDocuments] = useState18(), loader13 = useLoaderData8(), { Name, Email, Phone, State, AccessLevel, Clients, Documents } = loader13?.User;
  return /* @__PURE__ */ jsxs37("div", { className: "container", children: [
    /* @__PURE__ */ jsx39("h1", { className: "heading", children: "Informaci\xF3n del usuario" }),
    /* @__PURE__ */ jsx39("h2", { className: "subheading", children: "Informaci\xF3n general y otros datos sobre el usuario" }),
    /* @__PURE__ */ jsxs37("main", { className: "grid-1-2", children: [
      /* @__PURE__ */ jsxs37("section", { className: "content", children: [
        /* @__PURE__ */ jsx39("h3", { children: "Informaci\xF3n general" }),
        /* @__PURE__ */ jsxs37("div", { className: "data", children: [
          /* @__PURE__ */ jsxs37("div", { className: "item", children: [
            /* @__PURE__ */ jsx39("p", { children: "Nombre:" }),
            /* @__PURE__ */ jsx39("b", { children: Name })
          ] }),
          /* @__PURE__ */ jsxs37("div", { className: "item", children: [
            /* @__PURE__ */ jsx39("p", { children: "Correo Electr\xF3nico:" }),
            /* @__PURE__ */ jsx39("b", { children: Email })
          ] }),
          /* @__PURE__ */ jsxs37("div", { className: "item", children: [
            /* @__PURE__ */ jsx39("p", { children: "Tel\xE9fono:" }),
            /* @__PURE__ */ jsx39("b", { children: Phone })
          ] }),
          /* @__PURE__ */ jsxs37("div", { className: "item", children: [
            /* @__PURE__ */ jsx39("p", { children: "Nivel del acceso:" }),
            /* @__PURE__ */ jsx39("b", { children: {
              A: "Usuario administrador",
              R: "Usuario ra\xEDz",
              N: "Usuario com\xFAn"
            }[AccessLevel] })
          ] }),
          /* @__PURE__ */ jsxs37("div", { className: "item", children: [
            /* @__PURE__ */ jsx39("p", { children: "Estado actual:" }),
            /* @__PURE__ */ jsxs37("div", { className: "state", children: [
              /* @__PURE__ */ jsx39("div", { className: `point ${State === 1 ? "active" : ""}` }),
              /* @__PURE__ */ jsx39("b", { children: State === 1 ? "Habilitado" : "Inhabilitado" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs37("section", { className: "record", children: [
        /* @__PURE__ */ jsx39("h3", { className: "record-title users", children: "Otra informaci\xF3n" }),
        /* @__PURE__ */ jsxs37("div", { className: "list-scroll", children: [
          /* @__PURE__ */ jsx39(
            Select,
            {
              id: 1,
              title: "Clientes",
              items: Clients,
              urlPrefix: "clientes",
              showSelect: showClients,
              setShowSelect: setShowClients
            }
          ),
          /* @__PURE__ */ jsx39(
            Select,
            {
              id: 2,
              title: "Documentos",
              items: Documents,
              type: "BUTTON",
              urlPrefix: "documentos",
              showSelect: showDocuments,
              setShowSelect: setShowDocuments
            }
          )
        ] })
      ] })
    ] })
  ] });
}

// app/routes/citas._index.tsx
var citas_index_exports = {};
__export(citas_index_exports, {
  action: () => action10,
  default: () => Citas,
  links: () => links7,
  loader: () => loader9
});
import { useEffect as useEffect10, useState as useState20 } from "react";
import { useActionData as useActionData15, useLoaderData as useLoaderData9 } from "@remix-run/react";

// app/services/date.server.ts
async function getAllDates() {
  return await (await fetch("http://localhost:8000/api/dates")).json();
}
async function addDate(date) {
  return await (await fetch("http://localhost:8000/api/dates", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(date)
  })).json();
}
async function updateDate(date) {
  return await (await fetch("http://localhost:8000/api/dates", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(date)
  })).json();
}
async function deleteDate(DateID) {
  return await (await fetch(`http://localhost:8000/api/dates/${DateID}`, {
    method: "DELETE"
  })).json();
}

// app/components/formDate.tsx
import { useState as useState19 } from "react";
import { Form as Form12, useNavigation as useNavigation12 } from "@remix-run/react";
import { jsx as jsx40, jsxs as jsxs38 } from "react/jsx-runtime";
function FormDate({ currentUser = null, date = {}, clients = [], users = [], errors = {}, setShowFormDate }) {
  let dateID = date?.DateID, [issue, setIssue] = useState19(""), [datetime, setDatetime] = useState19(/* @__PURE__ */ new Date()), navigation = useNavigation12();
  return /* @__PURE__ */ jsx40("div", { className: "modal", children: /* @__PURE__ */ jsxs38(Form12, { action: "", method: "post", className: "form", children: [
    /* @__PURE__ */ jsx40(
      CloseButton,
      {
        setVisibleForm: setShowFormDate
      }
    ),
    /* @__PURE__ */ jsx40("h1", { className: "heading", children: "Agregar nueva cita" }),
    /* @__PURE__ */ jsx40("p", { className: "subheading", children: "Agregue todos los datos para agendar una nueva cita" }),
    /* @__PURE__ */ jsx40("br", {}),
    /* @__PURE__ */ jsxs38("div", { className: "inputs", children: [
      /* @__PURE__ */ jsx40("input", { type: "hidden", value: dateID, name: "DateID" }),
      /* @__PURE__ */ jsx40(
        Input,
        {
          title: "Asunto",
          name: "issue",
          type: "text",
          placeholder: "Asunto de la cita",
          value: issue,
          setValue: setIssue,
          error: errors?.issue
        }
      ),
      currentUser !== null ? /* @__PURE__ */ jsx40("input", { type: "hidden", name: "user", value: currentUser.UserID }) : /* @__PURE__ */ jsx40(
        Dropdownlist,
        {
          title: "Abogado a cargo",
          name: "user",
          items: users,
          error: errors?.user
        }
      ),
      /* @__PURE__ */ jsx40(
        Dropdownlist,
        {
          title: "Cliente",
          name: "client",
          items: clients,
          error: errors?.client
        }
      ),
      /* @__PURE__ */ jsx40(
        Input,
        {
          title: "Fecha y hora",
          name: "datetime",
          type: "datetime-local",
          value: datetime,
          setValue: setDatetime,
          error: errors?.datetime
        }
      )
    ] }),
    /* @__PURE__ */ jsxs38("div", { className: "loading", children: [
      /* @__PURE__ */ jsx40("input", { type: "submit", className: "button", value: "Guardar" }),
      navigation?.state !== "idle" && /* @__PURE__ */ jsx40(Spinner, {})
    ] })
  ] }) });
}

// app/components/date.tsx
import { Form as Form13 } from "@remix-run/react";
import { jsx as jsx41, jsxs as jsxs39 } from "react/jsx-runtime";
function Date2({ date, selectedDate, setSelectedDate }) {
  let { DateID, Issue, DateTime, User: User2, Client: Client2, State } = date;
  return /* @__PURE__ */ jsxs39(
    "div",
    {
      className: `date ${selectedDate.DateID === DateID ? "active" : ""}`,
      onClick: () => {
        setSelectedDate(date?.DateID === selectedDate?.DateID ? {} : date);
      },
      children: [
        /* @__PURE__ */ jsxs39("div", { children: [
          /* @__PURE__ */ jsxs39("div", { className: "date-issue", children: [
            /* @__PURE__ */ jsx41("span", { children: "Asunto" }),
            /* @__PURE__ */ jsx41("p", { children: Issue })
          ] }),
          /* @__PURE__ */ jsxs39("div", { className: "information", children: [
            /* @__PURE__ */ jsxs39("div", { className: "information-item", children: [
              /* @__PURE__ */ jsx41("span", { children: "Encargado" }),
              /* @__PURE__ */ jsx41("p", { children: User2?.Name })
            ] }),
            /* @__PURE__ */ jsxs39("div", { className: "information-item", children: [
              /* @__PURE__ */ jsx41("span", { children: "Cliente" }),
              /* @__PURE__ */ jsx41("p", { children: Client2?.Name })
            ] }),
            /* @__PURE__ */ jsxs39("div", { className: "information-item", children: [
              /* @__PURE__ */ jsx41("span", { children: "Fecha" }),
              /* @__PURE__ */ jsx41("p", { children: formattedDate(DateTime).split(",")[0] })
            ] }),
            /* @__PURE__ */ jsxs39("div", { className: "information-item", children: [
              /* @__PURE__ */ jsx41("span", { children: "Hora" }),
              /* @__PURE__ */ jsx41("p", { children: formattedDate(DateTime).split(",")[1] })
            ] }),
            /* @__PURE__ */ jsxs39("div", { className: "information-item", children: [
              /* @__PURE__ */ jsx41("span", { children: "Estado actual" }),
              /* @__PURE__ */ jsxs39("div", { className: "state", children: [
                /* @__PURE__ */ jsx41("div", { className: `point ${State === "P" ? "" : "active"}` }),
                /* @__PURE__ */ jsx41("p", { children: State === "P" ? "Pendiente" : "Realizada" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs39(Form13, { method: "PUT", children: [
          /* @__PURE__ */ jsx41("input", { type: "hidden", name: "DateID", value: DateID }),
          /* @__PURE__ */ jsx41("input", { type: "hidden", name: "State", value: State }),
          /* @__PURE__ */ jsx41(
            "input",
            {
              type: "submit",
              value: `Marcar como ${State === "P" ? "realizada" : "pendiente"}`,
              className: "button center"
            }
          )
        ] })
      ]
    }
  );
}

// app/styles/citas.css
var citas_default = "/build/_assets/citas-JOTSDGW6.css";

// app/routes/citas._index.tsx
import { Fragment as Fragment11, jsx as jsx42, jsxs as jsxs40 } from "react/jsx-runtime";
function links7() {
  return [
    {
      rel: "stylesheet",
      href: citas_default
    }
  ];
}
async function loader9({ request }) {
  let currentUser = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  }), clients = await getClients(), users = await getUsers(), dates = await getAllDates();
  return currentUser?.AccessLevel === "N" && (dates = dates.filter((date) => date.User.UserID === currentUser.UserID)), {
    clients,
    users,
    dates,
    currentUser
  };
}
async function action10({ request }) {
  let currentUser = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  }), form = await request.formData(), issue = form.get("issue"), user = form.get("user"), client = form.get("client"), formDateTime = form.get("datetime"), datetime = new Date(formDateTime), errors = {};
  if (request.method === "POST" && (issue.length === 0 && (errors.issue = "Es necesario agregar un asunto a la cita"), (currentUser.AccessLevel === "A" || currentUser.AccessLevel === "R") && parseInt(user) === -1 && (errors.user = "Debe seleccionar un usuario"), parseInt(client) === -1 && (errors.client = "Debe seleccionar un cliente"), datetime < /* @__PURE__ */ new Date() && (errors.datetime = "La fecha seleccionada no puede ser menor que la fecha actual")), Object.keys(errors).length > 0)
    return { STATUS: "ERROR", ERRORS: errors };
  switch (request.method) {
    case "POST":
      return {
        STATUS: "INSERTED",
        DATA: await addDate({
          Issue: issue,
          User: user,
          Client: client,
          DateTime: datetime,
          State: "P"
        })
      };
    case "PUT":
      let dateID = form.get("DateID"), currentState = form.get("State");
      return {
        STATUS: "UPDATED",
        DATA: await updateDate({
          DateID: dateID,
          State: currentState === "P" ? "R" : "P"
        })
      };
    case "DELETE":
      let DateID = form.get("DateID");
      return {
        STATUS: "DELETED",
        DATA: await deleteDate(DateID)
      };
    default:
      throw new Error("Invalid option");
  }
}
function Citas() {
  let action12 = useActionData15(), loader13 = useLoaderData9(), [showInsertedMessage, setShowInsertedMessage] = useState20(!1), [showUpdatedMessage, setShowUpdatedMessage] = useState20(!1), [showFormDate, setShowFormDate] = useState20(!1), [showDeleteMessage, setShowDeleteMessage] = useState20(!1), [showDeletedMessage, setShowDeletedMessage] = useState20(!1), [showErrorDeleteMessage, setShowErrorDeleteMessage] = useState20(!1), [dateType, setDateType] = useState20(""), [dateTime, setDateTime] = useState20(getCurrentDate()), [issue, setIssue] = useState20(""), [selectedDate, setSelectedDate] = useState20({}), [dates, setDates] = useState20([]);
  useEffect10(() => {
    switch (action12?.STATUS) {
      case "INSERTED":
        setShowFormDate(!1), setShowInsertedMessage(!0);
        break;
      case "UPDATED":
        setShowUpdatedMessage(!0);
        break;
      case "DELETED":
        setShowDeleteMessage(!1), setShowDeletedMessage(!0);
        break;
    }
  }, [action12]), useEffect10(() => {
    setDates(loader13?.dates);
  }, [loader13]), useEffect10(() => {
    dateType.length > 0 ? setDates(loader13?.dates.filter((date) => date.State === dateType && date.DateTime.split("T")[0] === dateTime && date.Issue.toLowerCase().includes(issue))) : setDates(loader13?.dates.filter((date) => date.DateTime.split("T")[0] === dateTime));
  }, [dateType, dateTime, issue, loader13?.dates]);
  function getCurrentDate() {
    return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  function showEliminatedDate() {
    Object.keys(selectedDate).length === 0 || !selectedDate?.DateID ? setShowErrorDeleteMessage(!0) : setShowDeleteMessage(!0);
  }
  return /* @__PURE__ */ jsxs40(Fragment11, { children: [
    showFormDate && /* @__PURE__ */ jsx42(
      FormDate,
      {
        currentUser: loader13?.currentUser.AccessLevel !== "N" ? null : loader13?.currentUser,
        clients: loader13?.clients,
        users: loader13?.users,
        setShowFormDate,
        errors: action12?.ERRORS
      }
    ),
    showInsertedMessage && /* @__PURE__ */ jsx42(
      ModalMessage,
      {
        features: {
          text: "La cita ha sido agregada exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowInsertedMessage
      }
    ),
    showDeleteMessage && /* @__PURE__ */ jsx42(
      ModalMessage,
      {
        features: {
          text: "\xBFEsta seguro de la eliminaci\xF3n del cliente?",
          isOkCancel: !0,
          indexIcon: 1,
          data: {
            name: "DateID",
            value: selectedDate?.DateID
          }
        },
        setVisibleMessage: setShowDeleteMessage
      }
    ),
    showDeletedMessage && /* @__PURE__ */ jsx42(
      ModalMessage,
      {
        features: {
          text: "La cita ha sido eliminada exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowDeletedMessage
      }
    ),
    showErrorDeleteMessage && /* @__PURE__ */ jsx42(
      ModalMessage,
      {
        features: {
          text: "Debe seleccionar una cita para ser eliminada",
          isOkCancel: !1,
          indexIcon: 1,
          data: null
        },
        setVisibleMessage: setShowErrorDeleteMessage
      }
    ),
    /* @__PURE__ */ jsxs40("div", { className: "container", children: [
      /* @__PURE__ */ jsx42("h1", { className: "heading", children: "Citas" }),
      /* @__PURE__ */ jsx42("p", { className: "subheading", children: "Aqu\xED veras todas las citas tanto pendientes como las realizadas anteriormente" }),
      /* @__PURE__ */ jsxs40("div", { className: "top-options", children: [
        /* @__PURE__ */ jsxs40("div", { className: "search", children: [
          /* @__PURE__ */ jsx42("img", { src: "/img/search.svg", alt: "search" }),
          /* @__PURE__ */ jsx42(
            "input",
            {
              type: "text",
              placeholder: "Buscar",
              value: issue,
              onChange: (event) => {
                setIssue(event.target.value);
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsx42("div", { className: "input", children: /* @__PURE__ */ jsxs40("select", { name: "state", id: "state", onChange: (evt) => {
          setDateType(evt.target.value);
        }, children: [
          /* @__PURE__ */ jsx42("option", { value: "", children: "-- Todas las citas --" }),
          /* @__PURE__ */ jsx42("option", { value: "P", children: "Pendiente" }),
          /* @__PURE__ */ jsx42("option", { value: "R", children: "Realizada" })
        ] }) }),
        /* @__PURE__ */ jsx42("div", { className: "input", children: /* @__PURE__ */ jsx42("input", { type: "date", value: dateTime.toString(), onChange: (evt) => {
          setDateTime(evt.target.value);
        } }) })
      ] }),
      /* @__PURE__ */ jsxs40("div", { className: "actions", children: [
        /* @__PURE__ */ jsxs40(
          "button",
          {
            className: "button",
            onClick: () => {
              setShowFormDate(!0);
            },
            type: "button",
            children: [
              /* @__PURE__ */ jsx42("img", { src: "/img/add.svg", alt: "add" }),
              /* @__PURE__ */ jsx42("p", { children: "Agregar" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs40(
          "button",
          {
            className: "button",
            onClick: () => {
              showEliminatedDate();
            },
            type: "button",
            value: "Eliminar",
            children: [
              /* @__PURE__ */ jsx42("img", { src: "/img/x.svg", alt: "add" }),
              /* @__PURE__ */ jsx42("p", { children: "Eliminar" })
            ]
          }
        )
      ] }),
      dates.length > 0 ? /* @__PURE__ */ jsx42("section", { className: "dates", children: dates.map(
        (date, index) => /* @__PURE__ */ jsx42(
          Date2,
          {
            date,
            selectedDate,
            setSelectedDate
          },
          index
        )
      ) }) : loader13?.dates.length > 0 ? /* @__PURE__ */ jsx42("p", { className: "no-found", children: "No se encontraron citas" }) : /* @__PURE__ */ jsx42("p", { className: "no-found", children: "Aun no hay citas registradas" })
    ] })
  ] });
}

// app/routes/nosotros.tsx
var nosotros_exports = {};
__export(nosotros_exports, {
  default: () => Nosotros,
  links: () => links8,
  loader: () => loader10
});

// app/components/logo.tsx
import { jsx as jsx43, jsxs as jsxs41 } from "react/jsx-runtime";
function Logo({}) {
  return /* @__PURE__ */ jsxs41("div", { className: "brand", children: [
    /* @__PURE__ */ jsx43("p", { className: "group-text", children: "Grupo" }),
    /* @__PURE__ */ jsx43("div", { className: "grafic" }),
    /* @__PURE__ */ jsxs41("div", { className: "names", children: [
      /* @__PURE__ */ jsx43("p", { className: "names-text", children: "Sosa" }),
      /* @__PURE__ */ jsx43("p", { className: "names-text", children: "Morales" })
    ] }),
    /* @__PURE__ */ jsx43("div", { className: "grafic" }),
    /* @__PURE__ */ jsxs41("div", { className: "subtitle", children: [
      /* @__PURE__ */ jsx43("p", { className: "subtitle-text", children: "Notaria" }),
      /* @__PURE__ */ jsx43("p", { className: "subtitle-text", children: "-" }),
      /* @__PURE__ */ jsx43("p", { className: "subtitle-text", children: "Abogacia" }),
      /* @__PURE__ */ jsx43("p", { className: "subtitle-text", children: "-" }),
      /* @__PURE__ */ jsx43("p", { className: "subtitle-text", children: "Asesoria" }),
      /* @__PURE__ */ jsx43("p", { className: "subtitle-text", children: "-" }),
      /* @__PURE__ */ jsx43("p", { className: "subtitle-text", children: "Bienes raices" })
    ] })
  ] });
}

// app/styles/nosotros.css
var nosotros_default = "/build/_assets/nosotros-AFIEICDO.css";

// app/routes/nosotros.tsx
import { jsx as jsx44, jsxs as jsxs42 } from "react/jsx-runtime";
function links8() {
  return [
    {
      rel: "stylesheet",
      href: nosotros_default
    }
  ];
}
async function loader10({ request }) {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  }), {};
}
function Nosotros() {
  return /* @__PURE__ */ jsxs42("div", { className: "container about-us", children: [
    /* @__PURE__ */ jsx44(Logo, {}),
    /* @__PURE__ */ jsxs42("div", { className: "information", children: [
      /* @__PURE__ */ jsx44("h1", { className: "heading", children: "Descubre mas sobre nosotros" }),
      /* @__PURE__ */ jsx44("h3", { className: "subheading", children: "\xBFQuienes somos?" }),
      /* @__PURE__ */ jsx44("p", { children: "Bienvenido a Grupo Sosa Morales, un distinguido despacho de abogados con una s\xF3lida presencia tanto en la ciudad de Tela como en el din\xE1mico escenario legal de Estados Unidos. En Grupo Sosa Morales, nos enorgullece ofrecer servicios legales integrales y personalizados que se adaptan a las necesidades de nuestros clientes. Nuestro equipo de abogados altamente calificados combina la experiencia local en la comunidad de Tela con un profundo conocimiento de las complejidades legales internacionales, brindando asesoramiento experto y soluciones efectivas. Con un compromiso inquebrantable con la excelencia, nos esforzamos por ser la primera opci\xF3n para aquellos que buscan representaci\xF3n legal confiable, ya sea en asuntos locales o transnacionales. En Grupo Sosa Morales, no solo defendemos sus derechos; construimos relaciones duraderas basadas en la confianza y la dedicaci\xF3n a la excelencia jur\xEDdica." })
    ] })
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  links: () => links9,
  loader: () => loader11,
  meta: () => meta2
});
import { useEffect as useEffect11 } from "react";
import { Link as Link11, useNavigate as useNavigate3 } from "@remix-run/react";

// app/styles/inicio.css
var inicio_default = "/build/_assets/inicio-ILRPEOCC.css";

// app/routes/_index.tsx
import { jsx as jsx45, jsxs as jsxs43 } from "react/jsx-runtime";
var meta2 = () => [
  { title: "Inicio" },
  { name: "description", content: "Welcome to Remix!" }
];
function links9() {
  return [
    {
      rel: "stylesheet",
      href: inicio_default
    }
  ];
}
async function loader11({ request }) {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
}
function Index() {
  let navigate = useNavigate3();
  return useEffect11(() => {
    localStorage.getItem("TOKEN") || navigate("/login");
  }, []), /* @__PURE__ */ jsxs43("div", { className: "container home", children: [
    /* @__PURE__ */ jsx45(Logo, {}),
    /* @__PURE__ */ jsxs43("div", { className: "panels", children: [
      /* @__PURE__ */ jsxs43(Link11, { to: "/clientes", className: "panel", children: [
        /* @__PURE__ */ jsx45("img", { src: "/img/users-group.svg", alt: "user-group" }),
        /* @__PURE__ */ jsx45("h4", { children: "Clientes" }),
        /* @__PURE__ */ jsx45("p", { children: "Gestiona tus clientes desde aqui." })
      ] }),
      /* @__PURE__ */ jsxs43(Link11, { to: "/citas", className: "panel", children: [
        /* @__PURE__ */ jsx45("img", { src: "/img/calendar-event.svg", alt: "calendar" }),
        /* @__PURE__ */ jsx45("h4", { children: "Citas" }),
        /* @__PURE__ */ jsx45("p", { children: "Gestiona todas tus citas desde aqui." })
      ] }),
      /* @__PURE__ */ jsxs43(Link11, { to: "/materias", className: "panel", children: [
        /* @__PURE__ */ jsx45("img", { src: "/img/category.svg", alt: "category" }),
        /* @__PURE__ */ jsx45("h4", { children: "Materias" }),
        /* @__PURE__ */ jsx45("p", { children: "Busca documentos de clientes seg\xFAn las materias disponibles" })
      ] }),
      /* @__PURE__ */ jsxs43(Link11, { to: "/documentacioninterna", className: "panel", children: [
        /* @__PURE__ */ jsx45("img", { src: "/img/file-description.svg", alt: "category-2" }),
        /* @__PURE__ */ jsx45("h4", { children: "Documentaci\xF3n interna" }),
        /* @__PURE__ */ jsx45("p", { children: "Gestiona tu documentaci\xF3n interna" })
      ] }),
      /* @__PURE__ */ jsxs43(Link11, { to: "/nosotros", className: "panel", children: [
        /* @__PURE__ */ jsx45("img", { src: "/img/info-octagon.svg", alt: "info" }),
        /* @__PURE__ */ jsx45("h4", { children: "A cerca de" }),
        /* @__PURE__ */ jsx45("p", { children: "Conoce mas sobre el software." })
      ] })
    ] })
  ] });
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action11,
  default: () => Login,
  loader: () => loader12
});
import { useState as useState21 } from "react";
import { Form as Form14, Link as Link12, useLoaderData as useLoaderData10, useNavigation as useNavigation13 } from "@remix-run/react";
import { json } from "@remix-run/node";
import { jsx as jsx46, jsxs as jsxs44 } from "react/jsx-runtime";
async function loader12({ request }) {
  await authenticator.isAuthenticated(request, {
    successRedirect: "/"
  });
  let error = (await getSession(request.headers.get("cookie"))).get(authenticator.sessionErrorKey);
  return json({ error });
}
async function action11({ request, context }) {
  return await authenticator.authenticate("user-pass", request, {
    successRedirect: "/",
    failureRedirect: "/login",
    throwOnError: !0,
    context
  });
}
function Login() {
  let navigation = useNavigation13(), loader13 = useLoaderData10(), [email, setEmail] = useState21(""), [password, setPassword] = useState21("");
  return /* @__PURE__ */ jsx46("main", { className: "login-modal", children: /* @__PURE__ */ jsxs44(Form14, { className: "form", method: "POST", children: [
    /* @__PURE__ */ jsx46("h1", { className: "heading", children: "Iniciar sesi\xF3n" }),
    /* @__PURE__ */ jsx46("h2", { className: "subheading", children: "Llena todos los campos para iniciar sesi\xF3n" }),
    /* @__PURE__ */ jsx46("br", {}),
    /* @__PURE__ */ jsxs44("div", { className: "inputs", children: [
      /* @__PURE__ */ jsx46(
        Input,
        {
          title: "Nombre de usuario o correo electronico",
          name: "email",
          placeholder: "Tu correo electronico",
          value: email,
          setValue: setEmail,
          error: ""
        }
      ),
      /* @__PURE__ */ jsx46(
        Input,
        {
          title: "Contrase\xF1a",
          name: "password",
          placeholder: "Tu contrase\xF1a",
          type: "password",
          value: password,
          setValue: setPassword,
          error: ""
        }
      ),
      /* @__PURE__ */ jsxs44("div", { className: "account-options", children: [
        /* @__PURE__ */ jsx46(Link12, { to: "/create-account", className: "option", children: "\xBFNo tienes una cuenta? Crea una" }),
        /* @__PURE__ */ jsx46(Link12, { to: "/forgot-password", className: "option", children: "\xBFOlvidaste tu contrase\xF1a? Recuperala" })
      ] }),
      /* @__PURE__ */ jsx46("p", { className: "error", children: loader13?.error?.message }),
      /* @__PURE__ */ jsxs44("div", { className: "loading", children: [
        /* @__PURE__ */ jsx46("input", { className: "button", type: "submit", value: "Iniciar Sesi\xF3n" }),
        navigation?.state !== "idle" && /* @__PURE__ */ jsx46(Spinner, {})
      ] })
    ] })
  ] }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-YS2UJBDJ.js", imports: ["/build/_shared/chunk-KUWA33JL.js", "/build/_shared/chunk-SF3EXJND.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-GEEX5D5Z.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-ZRZA37N2.js", imports: ["/build/_shared/chunk-APHS7L2N.js", "/build/_shared/chunk-ZQON7HPT.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/citas._index": { id: "routes/citas._index", parentId: "root", path: "citas", index: !0, caseSensitive: void 0, module: "/build/routes/citas._index-VP5CQCT4.js", imports: ["/build/_shared/chunk-YLHTJQT6.js", "/build/_shared/chunk-4XRQ5IV2.js", "/build/_shared/chunk-FGVI6XAJ.js", "/build/_shared/chunk-RESCBRKQ.js", "/build/_shared/chunk-ZQON7HPT.js", "/build/_shared/chunk-TV522PF3.js", "/build/_shared/chunk-C5XJXL5O.js", "/build/_shared/chunk-CCNXPPDT.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/clientes.$URL": { id: "routes/clientes.$URL", parentId: "root", path: "clientes/:URL", index: void 0, caseSensitive: void 0, module: "/build/routes/clientes.$URL-IYBWM5LZ.js", imports: ["/build/_shared/chunk-R75GC5XK.js", "/build/_shared/chunk-LCMD7AFA.js", "/build/_shared/chunk-YLHTJQT6.js", "/build/_shared/chunk-PCWHGVJN.js", "/build/_shared/chunk-VAG6IE6C.js", "/build/_shared/chunk-RESCBRKQ.js", "/build/_shared/chunk-ZQON7HPT.js", "/build/_shared/chunk-CCNXPPDT.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/clientes._index": { id: "routes/clientes._index", parentId: "root", path: "clientes", index: !0, caseSensitive: void 0, module: "/build/routes/clientes._index-CAAYQTUM.js", imports: ["/build/_shared/chunk-LCMD7AFA.js", "/build/_shared/chunk-YLHTJQT6.js", "/build/_shared/chunk-VAG6IE6C.js", "/build/_shared/chunk-RESCBRKQ.js", "/build/_shared/chunk-ZQON7HPT.js", "/build/_shared/chunk-TV522PF3.js", "/build/_shared/chunk-CCNXPPDT.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/create-account": { id: "routes/create-account", parentId: "root", path: "create-account", index: void 0, caseSensitive: void 0, module: "/build/routes/create-account-52QBPF7U.js", imports: ["/build/_shared/chunk-TV522PF3.js", "/build/_shared/chunk-C5XJXL5O.js", "/build/_shared/chunk-CCNXPPDT.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/documentacioninterna": { id: "routes/documentacioninterna", parentId: "root", path: "documentacioninterna", index: void 0, caseSensitive: void 0, module: "/build/routes/documentacioninterna-QG77PVOU.js", imports: ["/build/_shared/chunk-R75GC5XK.js", "/build/_shared/chunk-RESCBRKQ.js", "/build/_shared/chunk-ZQON7HPT.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/forgot-password": { id: "routes/forgot-password", parentId: "root", path: "forgot-password", index: void 0, caseSensitive: void 0, module: "/build/routes/forgot-password-WYBJ32B7.js", imports: ["/build/_shared/chunk-FGVI6XAJ.js", "/build/_shared/chunk-TV522PF3.js", "/build/_shared/chunk-C5XJXL5O.js", "/build/_shared/chunk-CCNXPPDT.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-5HHSS5NV.js", imports: ["/build/_shared/chunk-ZQON7HPT.js", "/build/_shared/chunk-TV522PF3.js", "/build/_shared/chunk-CCNXPPDT.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/materias.$name": { id: "routes/materias.$name", parentId: "root", path: "materias/:name", index: void 0, caseSensitive: void 0, module: "/build/routes/materias.$name-TNEIQQSI.js", imports: ["/build/_shared/chunk-R75GC5XK.js", "/build/_shared/chunk-LCMD7AFA.js", "/build/_shared/chunk-PCWHGVJN.js", "/build/_shared/chunk-VAG6IE6C.js", "/build/_shared/chunk-FGVI6XAJ.js", "/build/_shared/chunk-RESCBRKQ.js", "/build/_shared/chunk-ZQON7HPT.js", "/build/_shared/chunk-CCNXPPDT.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/materias._index": { id: "routes/materias._index", parentId: "root", path: "materias", index: !0, caseSensitive: void 0, module: "/build/routes/materias._index-EXMGUSTH.js", imports: ["/build/_shared/chunk-PCWHGVJN.js", "/build/_shared/chunk-VAG6IE6C.js", "/build/_shared/chunk-RESCBRKQ.js", "/build/_shared/chunk-ZQON7HPT.js", "/build/_shared/chunk-CCNXPPDT.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/nosotros": { id: "routes/nosotros", parentId: "root", path: "nosotros", index: void 0, caseSensitive: void 0, module: "/build/routes/nosotros-BU3DZB7K.js", imports: ["/build/_shared/chunk-APHS7L2N.js", "/build/_shared/chunk-ZQON7HPT.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/usuarios.$URL": { id: "routes/usuarios.$URL", parentId: "root", path: "usuarios/:URL", index: void 0, caseSensitive: void 0, module: "/build/routes/usuarios.$URL-DWOKQUIF.js", imports: ["/build/_shared/chunk-R75GC5XK.js", "/build/_shared/chunk-YLHTJQT6.js", "/build/_shared/chunk-VAG6IE6C.js", "/build/_shared/chunk-C5XJXL5O.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/usuarios._index": { id: "routes/usuarios._index", parentId: "root", path: "usuarios", index: !0, caseSensitive: void 0, module: "/build/routes/usuarios._index-TDGIGKMO.js", imports: ["/build/_shared/chunk-4XRQ5IV2.js", "/build/_shared/chunk-FGVI6XAJ.js", "/build/_shared/chunk-RESCBRKQ.js", "/build/_shared/chunk-ZQON7HPT.js", "/build/_shared/chunk-C5XJXL5O.js", "/build/_shared/chunk-CCNXPPDT.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "323ef87f", hmr: void 0, url: "/build/manifest-323EF87F.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/documentacioninterna": {
    id: "routes/documentacioninterna",
    parentId: "root",
    path: "documentacioninterna",
    index: void 0,
    caseSensitive: void 0,
    module: documentacioninterna_exports
  },
  "routes/clientes._index": {
    id: "routes/clientes._index",
    parentId: "root",
    path: "clientes",
    index: !0,
    caseSensitive: void 0,
    module: clientes_index_exports
  },
  "routes/forgot-password": {
    id: "routes/forgot-password",
    parentId: "root",
    path: "forgot-password",
    index: void 0,
    caseSensitive: void 0,
    module: forgot_password_exports
  },
  "routes/materias._index": {
    id: "routes/materias._index",
    parentId: "root",
    path: "materias",
    index: !0,
    caseSensitive: void 0,
    module: materias_index_exports
  },
  "routes/usuarios._index": {
    id: "routes/usuarios._index",
    parentId: "root",
    path: "usuarios",
    index: !0,
    caseSensitive: void 0,
    module: usuarios_index_exports
  },
  "routes/create-account": {
    id: "routes/create-account",
    parentId: "root",
    path: "create-account",
    index: void 0,
    caseSensitive: void 0,
    module: create_account_exports
  },
  "routes/materias.$name": {
    id: "routes/materias.$name",
    parentId: "root",
    path: "materias/:name",
    index: void 0,
    caseSensitive: void 0,
    module: materias_name_exports
  },
  "routes/clientes.$URL": {
    id: "routes/clientes.$URL",
    parentId: "root",
    path: "clientes/:URL",
    index: void 0,
    caseSensitive: void 0,
    module: clientes_URL_exports
  },
  "routes/usuarios.$URL": {
    id: "routes/usuarios.$URL",
    parentId: "root",
    path: "usuarios/:URL",
    index: void 0,
    caseSensitive: void 0,
    module: usuarios_URL_exports
  },
  "routes/citas._index": {
    id: "routes/citas._index",
    parentId: "root",
    path: "citas",
    index: !0,
    caseSensitive: void 0,
    module: citas_index_exports
  },
  "routes/nosotros": {
    id: "routes/nosotros",
    parentId: "root",
    path: "nosotros",
    index: void 0,
    caseSensitive: void 0,
    module: nosotros_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
