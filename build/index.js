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
import { jsxDEV } from "react/jsx-dev-runtime";
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
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
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
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
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
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function Navigation({ user, showMenu, setShowMenu }) {
  let { pathname } = useLocation(), [showList, setShowList] = useState(!1);
  return /* @__PURE__ */ jsxDEV2("header", { children: /* @__PURE__ */ jsxDEV2("div", { className: "bar", children: [
    /* @__PURE__ */ jsxDEV2("div", { className: "logo-menu", children: [
      /* @__PURE__ */ jsxDEV2(Link, { to: "/", children: /* @__PURE__ */ jsxDEV2(
        "img",
        {
          src: "/img/logo-only.png",
          alt: "logo",
          className: "logo"
        },
        void 0,
        !1,
        {
          fileName: "app/components/navigation.tsx",
          lineNumber: 13,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV2(
        "img",
        {
          className: "menu-icon",
          src: "/img/menu.svg",
          alt: "menu",
          onClick: () => {
            setShowMenu(!showMenu), setShowList(!1);
          }
        },
        void 0,
        !1,
        {
          fileName: "app/components/navigation.tsx",
          lineNumber: 20,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/navigation.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV2("nav", { className: `nav ${showMenu ? "active" : ""}`, children: [
      /* @__PURE__ */ jsxDEV2(
        Link,
        {
          className: `link ${pathname === "/" ? "active" : ""}`,
          to: "/",
          onClick: () => {
            setShowMenu(!1);
          },
          children: "Inicio"
        },
        void 0,
        !1,
        {
          fileName: "app/components/navigation.tsx",
          lineNumber: 33,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(
        Link,
        {
          className: `link ${pathname.includes("/clientes") ? "active" : ""}`,
          to: "/clientes",
          onClick: () => {
            setShowMenu(!1);
          },
          children: "Clientes"
        },
        void 0,
        !1,
        {
          fileName: "app/components/navigation.tsx",
          lineNumber: 43,
          columnNumber: 11
        },
        this
      ),
      user?.AccessLevel === "A" || user?.AccessLevel === "R" ? /* @__PURE__ */ jsxDEV2(
        Link,
        {
          className: `link ${pathname.includes("/usuarios") ? "active" : ""}`,
          to: "/usuarios",
          onClick: () => {
            setShowMenu(!1);
          },
          children: "Usuarios"
        },
        void 0,
        !1,
        {
          fileName: "app/components/navigation.tsx",
          lineNumber: 55,
          columnNumber: 13
        },
        this
      ) : null,
      /* @__PURE__ */ jsxDEV2(
        Link,
        {
          className: `link ${pathname.includes("/citas") ? "active" : ""}`,
          to: "/citas",
          onClick: () => {
            setShowMenu(!1);
          },
          children: "Citas"
        },
        void 0,
        !1,
        {
          fileName: "app/components/navigation.tsx",
          lineNumber: 68,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(
        Link,
        {
          className: `link ${pathname.includes("/materias") ? "active" : ""}`,
          to: "/materias",
          onClick: () => {
            setShowMenu(!1);
          },
          children: "Materias"
        },
        void 0,
        !1,
        {
          fileName: "app/components/navigation.tsx",
          lineNumber: 78,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(
        Link,
        {
          className: `link ${pathname === "/documentacioninterna" ? "active" : ""}`,
          to: "/documentacioninterna",
          onClick: () => {
            setShowMenu(!1);
          },
          children: "Doc. interna"
        },
        void 0,
        !1,
        {
          fileName: "app/components/navigation.tsx",
          lineNumber: 88,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2("div", { className: "current-user", children: [
        /* @__PURE__ */ jsxDEV2("img", { src: "/img/user-circle.svg", alt: "user", className: "user", onClick: () => {
          setShowList(!showList);
        } }, void 0, !1, {
          fileName: "app/components/navigation.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this),
        showList && /* @__PURE__ */ jsxDEV2("div", { className: "dropdownlist", children: [
          /* @__PURE__ */ jsxDEV2("div", { className: "info", children: [
            /* @__PURE__ */ jsxDEV2("p", { className: "username", children: user?.Name }, void 0, !1, {
              fileName: "app/components/navigation.tsx",
              lineNumber: 103,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV2("p", { className: "email", children: user?.Email }, void 0, !1, {
              fileName: "app/components/navigation.tsx",
              lineNumber: 104,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/navigation.tsx",
            lineNumber: 102,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV2(Form, { className: "logout", method: "post", action: "/", children: /* @__PURE__ */ jsxDEV2("button", { className: "button", type: "submit", children: [
            /* @__PURE__ */ jsxDEV2("img", { src: "/img/logout.svg", alt: "logout" }, void 0, !1, {
              fileName: "app/components/navigation.tsx",
              lineNumber: 109,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV2("p", { children: "Cerrar sesi\xF3n" }, void 0, !1, {
              fileName: "app/components/navigation.tsx",
              lineNumber: 110,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/navigation.tsx",
            lineNumber: 108,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/navigation.tsx",
            lineNumber: 107,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/navigation.tsx",
          lineNumber: 101,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navigation.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navigation.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/navigation.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/styles/normalize.css
var normalize_default = "/build/_assets/normalize-H7PQAZ5S.css";

// app/styles/global.css
var global_default = "/build/_assets/global-6VNF4LXT.css";

// node_modules/react-pdf/dist/esm/Page/TextLayer.css
var TextLayer_default = "/build/_assets/TextLayer-7XZ4NHUX.css";

// node_modules/react-pdf/dist/esm/Page/AnnotationLayer.css
var AnnotationLayer_default = "/build/_assets/AnnotationLayer-UJYPOUOS.css";

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
    sameSite: "strict",
    path: "/",
    httpOnly: !0,
    secure: !0,
    secrets: ["s3cr3t"]
    //secure: process.env.NODE_ENV === "production",
  }
}), { getSession, commitSession, destroySession } = sessionStorage;

// app/services/auth.server.ts
async function login(username, password) {
  let body = {
    Email_Name: username.toLowerCase(),
    Password: password
  };
  return await (await fetch("http://localhost:8000/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
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
import { useState as useState2 } from "react";
import { Fragment, jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function meta() {
  return [
    {
      title: "Inicio"
    },
    {
      charset: "UTF-8"
    },
    {
      httpEquiv: "X-UA-Compatible",
      content: "IE=edge"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
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
  let loader13 = useLoaderData(), [showMenu, setShowMenu] = useState2(!1);
  return /* @__PURE__ */ jsxDEV3(Document, { user: loader13?.USER, children: /* @__PURE__ */ jsxDEV3(Outlet, { context: {
    URL_API: loader13?.ENV.URL_API,
    menuState: [showMenu, setShowMenu]
  } }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 100,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}
function Document({ children, user }) {
  let { pathname } = useLocation2(), [showMenu, setShowMenu] = useState2(!1);
  return /* @__PURE__ */ jsxDEV3("html", { lang: "es", children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("title", {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { className: showMenu ? "blocked" : "", children: [
      pathname === "/login" || pathname === "/create-account" || pathname === "/forgot-password" ? /* @__PURE__ */ jsxDEV3(Fragment, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this) : /* @__PURE__ */ jsxDEV3(
        Navigation,
        {
          user,
          showMenu,
          setShowMenu
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 127,
          columnNumber: 9
        },
        this
      ),
      children,
      /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 122,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 115,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = useRouteError();
  return isRouteErrorResponse(error) ? /* @__PURE__ */ jsxDEV3(Document, { children: /* @__PURE__ */ jsxDEV3("div", { className: "container", children: [
    /* @__PURE__ */ jsxDEV3("h1", { className: "heading", children: "Error" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 148,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV3("p", { className: "subheading", children: "Error: 404 pagina no encontrado" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 149,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 147,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 146,
    columnNumber: 7
  }, this) : error instanceof Error ? /* @__PURE__ */ jsxDEV3(Document, { children: /* @__PURE__ */ jsxDEV3("div", { className: "error-page", children: [
    /* @__PURE__ */ jsxDEV3("h1", { className: "title", children: "Ups... Ha ocurrido un error" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 157,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV3("img", { className: "image", src: "/img/info-octagon.svg", alt: "error" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 158,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV3("p", { className: "information", children: [
      "Error: ",
      error.message
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 159,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 156,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 155,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV3("h1", { children: "Unknown Error" }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 164,
    columnNumber: 12
  }, this);
}

// app/routes/documentacioninterna.tsx
var documentacioninterna_exports = {};
__export(documentacioninterna_exports, {
  action: () => action2,
  default: () => Documentacioninterna,
  loader: () => loader2
});
import { useState as useState7, useEffect as useEffect4 } from "react";
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
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function CloseButton({ hideModal }) {
  return /* @__PURE__ */ jsxDEV4(
    "img",
    {
      src: "/img/x.svg",
      className: "button-close",
      alt: "close",
      onClick: () => {
        hideModal();
      }
    },
    void 0,
    !1,
    {
      fileName: "app/components/close_button.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}

// app/components/modalMessage.tsx
import { useEffect, useState as useState3 } from "react";
import { Fragment as Fragment2, jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function ModalMessage({ features, setVisibleMessage }) {
  let { text, indexIcon, isOkCancel, data } = features, [beVisible, setBevisible] = useState3(!1), icon = {
    0: "alert-triangle.svg",
    1: "alert-circle.svg",
    2: "progress-check.svg"
  };
  useEffect(() => {
    setTimeout(() => {
      setBevisible(!0);
    }, 100);
  }, []);
  let hideModal = () => {
    setBevisible(!1), setTimeout(() => {
      setVisibleMessage(!1);
    }, 300);
  };
  return /* @__PURE__ */ jsxDEV5("div", { className: `modal ${beVisible ? "active" : ""}`, children: /* @__PURE__ */ jsxDEV5("div", { className: "message", children: [
    /* @__PURE__ */ jsxDEV5(
      CloseButton,
      {
        hideModal
      },
      void 0,
      !1,
      {
        fileName: "app/components/modalMessage.tsx",
        lineNumber: 33,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV5("div", { className: "message-information", children: [
      /* @__PURE__ */ jsxDEV5("img", { src: `/img/${icon[indexIcon]}`, alt: "reference" }, void 0, !1, {
        fileName: "app/components/modalMessage.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("p", { children: text }, void 0, !1, {
        fileName: "app/components/modalMessage.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "buttons", children: isOkCancel ? /* @__PURE__ */ jsxDEV5(Fragment2, { children: [
        /* @__PURE__ */ jsxDEV5(Form2, { method: data?.method ? data.method : "DELETE", children: [
          /* @__PURE__ */ jsxDEV5("input", { name: data?.name, type: "hidden", value: data?.value }, void 0, !1, {
            fileName: "app/components/modalMessage.tsx",
            lineNumber: 44,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV5(
            "input",
            {
              className: "button",
              type: "submit",
              value: "Aceptar"
            },
            void 0,
            !1,
            {
              fileName: "app/components/modalMessage.tsx",
              lineNumber: 45,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/modalMessage.tsx",
          lineNumber: 43,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(
          "input",
          {
            className: "button",
            type: "button",
            onClick: () => {
              hideModal();
            },
            value: "Cancelar"
          },
          void 0,
          !1,
          {
            fileName: "app/components/modalMessage.tsx",
            lineNumber: 52,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/modalMessage.tsx",
        lineNumber: 42,
        columnNumber: 15
      }, this) : /* @__PURE__ */ jsxDEV5(
        "input",
        {
          className: "button",
          type: "button",
          onClick: () => {
            hideModal();
          },
          value: "Aceptar"
        },
        void 0,
        !1,
        {
          fileName: "app/components/modalMessage.tsx",
          lineNumber: 60,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/modalMessage.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/modalMessage.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/modalMessage.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/modalMessage.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/components/internaldocument.tsx
import { useState as useState5 } from "react";
import { Link as Link2, useOutletContext as useOutletContext4 } from "@remix-run/react";

// app/components/modalDocument.tsx
import { Document as Document2, Page, pdfjs } from "react-pdf";
import { useEffect as useEffect2, useState as useState4 } from "react";
import { useOutletContext as useOutletContext3 } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function ModalDocument({ URL, setShowModalDocument, isInternalDocument = !1 }) {
  let [numPages, setNumPages] = useState4(0), [pageNumber, setPageNumber] = useState4(1), [beVisible, setBevisible] = useState4(!1);
  useEffect2(() => {
    setTimeout(() => {
      setBevisible(!0);
    }, 100);
  }, []);
  let hideModal = () => {
    setBevisible(!1), setTimeout(() => {
      setShowModalDocument(!1);
    }, 300);
  }, onDocumentLoadSuccess = ({ numPages: numPages2 }) => {
    setNumPages(numPages2);
  }, reduce = () => {
    pageNumber !== 1 && setPageNumber(pageNumber - 1);
  }, add = () => {
    pageNumber !== numPages && setPageNumber(pageNumber + 1);
  }, context = useOutletContext3();
  return /* @__PURE__ */ jsxDEV6("div", { className: `modal ${beVisible ? "active" : ""}`, children: /* @__PURE__ */ jsxDEV6("div", { className: "document", children: [
    /* @__PURE__ */ jsxDEV6(
      CloseButton,
      {
        hideModal
      },
      void 0,
      !1,
      {
        fileName: "app/components/modalDocument.tsx",
        lineNumber: 48,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ jsxDEV6(
      Document2,
      {
        file: `http://localhost:8000/api/${isInternalDocument ? "internal-documents" : "documents"}/download/${URL}`,
        onLoadError: console.error,
        onLoadSuccess: onDocumentLoadSuccess,
        className: "file",
        children: /* @__PURE__ */ jsxDEV6(Page, { pageNumber }, void 0, !1, {
          fileName: "app/components/modalDocument.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/modalDocument.tsx",
        lineNumber: 52,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ jsxDEV6("div", { className: "changerpage", children: [
      /* @__PURE__ */ jsxDEV6("img", { src: "/img/arror-left.svg", alt: "left", onClick: reduce }, void 0, !1, {
        fileName: "app/components/modalDocument.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV6("p", { children: [
        pageNumber,
        " / ",
        numPages
      ] }, void 0, !0, {
        fileName: "app/components/modalDocument.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV6("img", { src: "/img/arrow-right.svg", alt: "right", onClick: add }, void 0, !1, {
        fileName: "app/components/modalDocument.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/modalDocument.tsx",
      lineNumber: 60,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/modalDocument.tsx",
    lineNumber: 46,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/modalDocument.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this);
}

// app/components/internaldocument.tsx
import { Fragment as Fragment3, jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function InternalDocument({ InternalDocument: InternalDocument2, setSelectedDocument, setShowFormDeletedMessage }) {
  let { Name, URL } = InternalDocument2, [showModalDocument, setShowModalDocument] = useState5(!1), context = useOutletContext4();
  return /* @__PURE__ */ jsxDEV7(Fragment3, { children: [
    showModalDocument && /* @__PURE__ */ jsxDEV7(
      ModalDocument,
      {
        URL,
        isInternalDocument: !0,
        setShowModalDocument
      },
      void 0,
      !1,
      {
        fileName: "app/components/internaldocument.tsx",
        lineNumber: 14,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV7("div", { className: "item-list", children: [
      /* @__PURE__ */ jsxDEV7("div", { className: "item-main", children: [
        /* @__PURE__ */ jsxDEV7("img", { src: "/img/file-description.svg", alt: "file" }, void 0, !1, {
          fileName: "app/components/internaldocument.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { className: "item-information", onClick: () => {
          setShowModalDocument(!0);
        }, children: /* @__PURE__ */ jsxDEV7("h4", { children: Name }, void 0, !1, {
          fileName: "app/components/internaldocument.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/internaldocument.tsx",
          lineNumber: 24,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/internaldocument.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { className: "actions", children: [
        /* @__PURE__ */ jsxDEV7(Link2, { to: `http://localhost:8000/api/internaldocument/download/${URL}`, children: /* @__PURE__ */ jsxDEV7(
          "img",
          {
            src: "/img/download.svg",
            alt: "download"
          },
          void 0,
          !1,
          {
            fileName: "app/components/internaldocument.tsx",
            lineNumber: 31,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/internaldocument.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV7(
          "img",
          {
            onClick: () => {
              setSelectedDocument(InternalDocument2), setShowFormDeletedMessage(!0);
            },
            src: "/img/trash.svg",
            alt: "trash"
          },
          void 0,
          !1,
          {
            fileName: "app/components/internaldocument.tsx",
            lineNumber: 36,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/internaldocument.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/internaldocument.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/internaldocument.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/components/formInternalDocument.tsx
import { Form as Form3, useNavigation } from "@remix-run/react";
import { useEffect as useEffect3, useState as useState6 } from "react";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function FormInternalDocument({ method, errors = {}, setShowModalInternalDocument }) {
  let navigation = useNavigation(), [beVisible, setBevisible] = useState6(!1);
  return useEffect3(() => {
    setTimeout(() => {
      setBevisible(!0);
    }, 100);
  }, []), /* @__PURE__ */ jsxDEV8("div", { className: `modal ${beVisible ? "active" : ""}`, children: /* @__PURE__ */ jsxDEV8(Form3, { className: "form", method, encType: "multipart/form-data", children: [
    /* @__PURE__ */ jsxDEV8(
      CloseButton,
      {
        hideModal: () => {
          setBevisible(!1), setTimeout(() => {
            setShowModalInternalDocument(!1);
          }, 300);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/formInternalDocument.tsx",
        lineNumber: 25,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ jsxDEV8("h1", { className: "heading", children: "Agregar nuevo documento" }, void 0, !1, {
      fileName: "app/components/formInternalDocument.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV8("h2", { className: "subheading", children: "Agrega toda la informaci\xF3n sobre el documento para agregarlo al expediente" }, void 0, !1, {
      fileName: "app/components/formInternalDocument.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV8("br", {}, void 0, !1, {
      fileName: "app/components/formInternalDocument.tsx",
      lineNumber: 30,
      columnNumber: 117
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "inputs", children: [
      /* @__PURE__ */ jsxDEV8("input", { type: "hidden", name: "User", value: 2 }, void 0, !1, {
        fileName: "app/components/formInternalDocument.tsx",
        lineNumber: 33,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "input", children: [
        /* @__PURE__ */ jsxDEV8("label", { htmlFor: "title", children: "Titulo" }, void 0, !1, {
          fileName: "app/components/formInternalDocument.tsx",
          lineNumber: 36,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV8(
          "input",
          {
            name: "Name",
            id: "title",
            type: "text",
            placeholder: "Escriba el titulo del documento..."
          },
          void 0,
          !1,
          {
            fileName: "app/components/formInternalDocument.tsx",
            lineNumber: 37,
            columnNumber: 15
          },
          this
        ),
        errors?.name ? /* @__PURE__ */ jsxDEV8("p", { className: "error", children: errors.name }, void 0, !1, {
          fileName: "app/components/formInternalDocument.tsx",
          lineNumber: 43,
          columnNumber: 32
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/components/formInternalDocument.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "input", children: [
        /* @__PURE__ */ jsxDEV8("label", { htmlFor: "file", children: "Archivo" }, void 0, !1, {
          fileName: "app/components/formInternalDocument.tsx",
          lineNumber: 47,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV8(
          "input",
          {
            type: "file",
            name: "File",
            id: "file"
          },
          void 0,
          !1,
          {
            fileName: "app/components/formInternalDocument.tsx",
            lineNumber: 48,
            columnNumber: 15
          },
          this
        ),
        errors?.file ? /* @__PURE__ */ jsxDEV8("p", { className: "error", children: errors.file }, void 0, !1, {
          fileName: "app/components/formInternalDocument.tsx",
          lineNumber: 53,
          columnNumber: 32
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/components/formInternalDocument.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/formInternalDocument.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "loading", children: [
      /* @__PURE__ */ jsxDEV8("input", { className: "button", type: "submit", value: "Guardar" }, void 0, !1, {
        fileName: "app/components/formInternalDocument.tsx",
        lineNumber: 58,
        columnNumber: 13
      }, this),
      navigation?.state !== "idle" && /* @__PURE__ */ jsxDEV8("div", { className: "spinner", children: [
        /* @__PURE__ */ jsxDEV8("div", { className: "bounce1" }, void 0, !1, {
          fileName: "app/components/formInternalDocument.tsx",
          lineNumber: 61,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "bounce2" }, void 0, !1, {
          fileName: "app/components/formInternalDocument.tsx",
          lineNumber: 62,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "bounce3" }, void 0, !1, {
          fileName: "app/components/formInternalDocument.tsx",
          lineNumber: 63,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/formInternalDocument.tsx",
        lineNumber: 60,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/formInternalDocument.tsx",
      lineNumber: 57,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/formInternalDocument.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/formInternalDocument.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this);
}

// app/routes/documentacioninterna.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
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
  let [internalDocuments, setInternalDocuments] = useState7([]), [selectedDocument, setSelectedDocument] = useState7({ algo: 1 }), [showInsertedMessage, setShowInsertedMessage] = useState7(!1), [showDeletedMessage, setShowDeletedMessage] = useState7(!1), [showFormDeletedMessage, setShowFormDeletedMessage] = useState7(!1), [showFormInternalDocument, setShowFormInternalDocument] = useState7(!1), loader13 = useLoaderData2(), actionResult = useActionData();
  useEffect4(() => {
    switch (actionResult?.status) {
      case "INSERTED":
        setShowFormInternalDocument(!1), setShowInsertedMessage(!0);
        break;
      case "DELETED":
        setShowFormDeletedMessage(!1), setShowDeletedMessage(!0);
        break;
    }
  }, [actionResult]), useEffect4(() => {
    setInternalDocuments(loader13);
  }, [loader13]);
  let searchInternalDocument = (event) => {
    let value = event.target.value.toString().toLowerCase(), actualizedInternalDocuments = loader13?.filter((client) => client.Name.toLowerCase().includes(value));
    setInternalDocuments(actualizedInternalDocuments);
  };
  return /* @__PURE__ */ jsxDEV9("div", { className: "container", children: [
    showFormInternalDocument && /* @__PURE__ */ jsxDEV9(
      FormInternalDocument,
      {
        method: "POST",
        errors: actionResult?.errors,
        setShowModalInternalDocument: setShowFormInternalDocument
      },
      void 0,
      !1,
      {
        fileName: "app/routes/documentacioninterna.tsx",
        lineNumber: 111,
        columnNumber: 9
      },
      this
    ),
    showFormDeletedMessage && /* @__PURE__ */ jsxDEV9(
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
      },
      void 0,
      !1,
      {
        fileName: "app/routes/documentacioninterna.tsx",
        lineNumber: 119,
        columnNumber: 9
      },
      this
    ),
    showInsertedMessage && /* @__PURE__ */ jsxDEV9(
      ModalMessage,
      {
        features: {
          text: "El documento ha sido agregado exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowInsertedMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/documentacioninterna.tsx",
        lineNumber: 136,
        columnNumber: 9
      },
      this
    ),
    showDeletedMessage && /* @__PURE__ */ jsxDEV9(
      ModalMessage,
      {
        features: {
          text: "El documento ha sido eliminado exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowDeletedMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/documentacioninterna.tsx",
        lineNumber: 150,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV9("h1", { className: "heading", children: "Documentaci\xF3n interna" }, void 0, !1, {
      fileName: "app/routes/documentacioninterna.tsx",
      lineNumber: 163,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("h2", { className: "subheading", children: "Gestiona toda la documentacion interna del buffete" }, void 0, !1, {
      fileName: "app/routes/documentacioninterna.tsx",
      lineNumber: 164,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("div", { className: "top-options", children: /* @__PURE__ */ jsxDEV9("div", { className: "search", children: [
      /* @__PURE__ */ jsxDEV9("img", { src: "/img/search.svg", alt: "search" }, void 0, !1, {
        fileName: "app/routes/documentacioninterna.tsx",
        lineNumber: 168,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV9(
        "input",
        {
          onChange: (event) => {
            searchInternalDocument(event);
          },
          type: "text",
          placeholder: "Buscar"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/documentacioninterna.tsx",
          lineNumber: 169,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/documentacioninterna.tsx",
      lineNumber: 167,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/documentacioninterna.tsx",
      lineNumber: 166,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("div", { className: "actions", children: /* @__PURE__ */ jsxDEV9(
      "button",
      {
        className: "button",
        onClick: () => {
          setShowFormInternalDocument(!0);
        },
        type: "button",
        children: [
          /* @__PURE__ */ jsxDEV9("img", { src: "/img/add.svg", alt: "add" }, void 0, !1, {
            fileName: "app/routes/documentacioninterna.tsx",
            lineNumber: 183,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV9("p", { children: "Agregar nuevo documento" }, void 0, !1, {
            fileName: "app/routes/documentacioninterna.tsx",
            lineNumber: 184,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/documentacioninterna.tsx",
        lineNumber: 178,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/documentacioninterna.tsx",
      lineNumber: 177,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("div", { className: "list-scroll", children: internalDocuments.map(
      (internalDocument) => /* @__PURE__ */ jsxDEV9(
        InternalDocument,
        {
          InternalDocument: internalDocument,
          setSelectedDocument,
          setShowFormDeletedMessage
        },
        internalDocument?.InternalDocumentID,
        !1,
        {
          fileName: "app/routes/documentacioninterna.tsx",
          lineNumber: 191,
          columnNumber: 13
        },
        this
      )
    ) }, void 0, !1, {
      fileName: "app/routes/documentacioninterna.tsx",
      lineNumber: 188,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/documentacioninterna.tsx",
    lineNumber: 109,
    columnNumber: 5
  }, this);
}

// app/routes/clientes._index.tsx
var clientes_index_exports = {};
__export(clientes_index_exports, {
  action: () => action3,
  default: () => Clientes,
  links: () => links2,
  loader: () => loader3
});
import { useEffect as useEffect6, useState as useState9 } from "react";
import { useActionData as useActionData2, useLoaderData as useLoaderData3 } from "@remix-run/react";

// app/components/formClient.tsx
import { useEffect as useEffect5, useState as useState8 } from "react";
import { Form as Form4, useNavigation as useNavigation2 } from "@remix-run/react";

// app/components/spinner.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function Spinner({}) {
  return /* @__PURE__ */ jsxDEV10("div", { className: "spinner", children: [
    /* @__PURE__ */ jsxDEV10("div", { className: "bounce1" }, void 0, !1, {
      fileName: "app/components/spinner.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "bounce2" }, void 0, !1, {
      fileName: "app/components/spinner.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "bounce3" }, void 0, !1, {
      fileName: "app/components/spinner.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/spinner.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/input.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function Input({ title, name, type = "text", placeholder = "", maxLength = 1e3, value, setValue, error }) {
  return /* @__PURE__ */ jsxDEV11("div", { className: "input", children: [
    /* @__PURE__ */ jsxDEV11("label", { htmlFor: name, children: title }, void 0, !1, {
      fileName: "app/components/input.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV11(
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
      },
      void 0,
      !1,
      {
        fileName: "app/components/input.tsx",
        lineNumber: 5,
        columnNumber: 7
      },
      this
    ),
    error ? /* @__PURE__ */ jsxDEV11("p", { className: "error", children: error }, void 0, !1, {
      fileName: "app/components/input.tsx",
      lineNumber: 14,
      columnNumber: 17
    }, this) : null
  ] }, void 0, !0, {
    fileName: "app/components/input.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/formClient.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function FormClient({ method, errors, client = {}, setVisibleFormClient }) {
  let navigation = useNavigation2(), ClientID = client?.ClientID, [name, setName] = useState8(client?.Name || ""), [identity, setIdentity] = useState8(client?.Identity || ""), [phone, setPhone] = useState8(client?.Phone || ""), [email, setEmail] = useState8(client?.Email || ""), [address, setAddress] = useState8(client?.Address || ""), [beVisible, setBevisible] = useState8(!1);
  return useEffect5(() => {
    setTimeout(() => {
      setBevisible(!0);
    }, 100);
  }, []), /* @__PURE__ */ jsxDEV12("div", { className: `modal ${beVisible ? "active" : ""}`, children: /* @__PURE__ */ jsxDEV12(
    Form4,
    {
      className: "form",
      method,
      children: [
        /* @__PURE__ */ jsxDEV12(
          CloseButton,
          {
            hideModal: () => {
              setBevisible(!1), setTimeout(() => {
                setVisibleFormClient(!1);
              }, 300);
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/formClient.tsx",
            lineNumber: 39,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV12("h1", { className: "heading", children: Object.keys(client).length === 0 ? "Nuevo cliente" : "Modificar cliente" }, void 0, !1, {
          fileName: "app/components/formClient.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV12("h2", { className: "subheading", children: [
          "Ingresa toda la informaci\xF3n del cliente para ",
          Object.keys(client).length === 0 ? "agregarlo" : "modificarlo"
        ] }, void 0, !0, {
          fileName: "app/components/formClient.tsx",
          lineNumber: 44,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV12("div", { className: "inputs", children: [
          /* @__PURE__ */ jsxDEV12("input", { name: "ClientID", type: "hidden", value: ClientID }, void 0, !1, {
            fileName: "app/components/formClient.tsx",
            lineNumber: 49,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV12(
            Input,
            {
              title: "Nombre",
              name: "name",
              placeholder: "Nombre del cliente",
              value: name,
              setValue: setName,
              error: errors?.name
            },
            void 0,
            !1,
            {
              fileName: "app/components/formClient.tsx",
              lineNumber: 51,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV12(
            Input,
            {
              title: "Identidad",
              name: "identity",
              type: "number",
              placeholder: "Identidad del cliente",
              value: identity,
              setValue: setIdentity,
              error: errors?.identity
            },
            void 0,
            !1,
            {
              fileName: "app/components/formClient.tsx",
              lineNumber: 60,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV12(
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
            },
            void 0,
            !1,
            {
              fileName: "app/components/formClient.tsx",
              lineNumber: 70,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV12(
            Input,
            {
              title: "Correo electronico",
              name: "email",
              type: "email",
              placeholder: "Correo electronico del cliente",
              value: email,
              setValue: setEmail,
              error: errors?.email
            },
            void 0,
            !1,
            {
              fileName: "app/components/formClient.tsx",
              lineNumber: 81,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV12(
            Input,
            {
              title: "Domicilio",
              name: "address",
              placeholder: "Direcci\xF3n del cliente",
              value: address,
              setValue: setAddress,
              error: errors?.address
            },
            void 0,
            !1,
            {
              fileName: "app/components/formClient.tsx",
              lineNumber: 91,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/formClient.tsx",
          lineNumber: 48,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV12("div", { className: "loading", children: [
          /* @__PURE__ */ jsxDEV12("input", { className: "button", type: "submit", value: "Guardar" }, void 0, !1, {
            fileName: "app/components/formClient.tsx",
            lineNumber: 102,
            columnNumber: 11
          }, this),
          navigation?.state !== "idle" && /* @__PURE__ */ jsxDEV12(Spinner, {}, void 0, !1, {
            fileName: "app/components/formClient.tsx",
            lineNumber: 104,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/formClient.tsx",
          lineNumber: 101,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/formClient.tsx",
      lineNumber: 35,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/formClient.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/components/client.tsx
import { Link as Link3 } from "@remix-run/react";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
function Client({ client, clientSelected, setClientSelected }) {
  let { Name, Identity, ClientID, URL } = client;
  return /* @__PURE__ */ jsxDEV13("div", { className: "item-list", children: [
    /* @__PURE__ */ jsxDEV13(Link3, { to: `/clientes/${URL}`, className: "item-main", children: [
      /* @__PURE__ */ jsxDEV13("img", { src: "/img/user-circle.svg", alt: "user" }, void 0, !1, {
        fileName: "app/components/client.tsx",
        lineNumber: 9,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { className: "item-information", children: [
        /* @__PURE__ */ jsxDEV13("h4", { children: Name }, void 0, !1, {
          fileName: "app/components/client.tsx",
          lineNumber: 11,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV13("p", { children: Identity }, void 0, !1, {
          fileName: "app/components/client.tsx",
          lineNumber: 12,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/client.tsx",
        lineNumber: 10,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/client.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV13(
      "img",
      {
        className: "check",
        src: `/img/${clientSelected.ClientID === ClientID ? "square-check.svg" : "square.svg"}`,
        onClick: () => {
          setClientSelected(clientSelected.ClientID === ClientID ? {} : client);
        },
        alt: "square"
      },
      void 0,
      !1,
      {
        fileName: "app/components/client.tsx",
        lineNumber: 16,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/client.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this);
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
var clientes_default = "/build/_assets/clientes-RS7ICRX4.css";

// app/routes/clientes._index.tsx
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
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
  if ((request.method === "POST" || request.method === "PUT") && (name.length === 0 && (errors.name = "El nombre del cliente es obligatorio"), name.length > 80 && (errors.name = "El nombre debe contener menos de 80 caracteres"), typeof name != "string" && (errors.name = "El nombre debe ser un texto"), identity.length === 0 && (errors.identity = "La identidad es obligatorio"), (identity.length > 13 || identity.length < 13) && (errors.identity = "La identidad debe contener 13 caracteres"), request.method === "POST" && clients.filter((client2) => client2.Identity.toLowerCase() === identity.toLowerCase()).length > 0 && (errors.identity = "Ya existe un cliente registrado con esta identidad"), phone.length !== 8 && phone.length !== 11 && (errors.phone = "El numero telef\xF3nico debe contener 8 o 11 caracteres"), phone.length === 0 && (errors.phone = "El numero telef\xF3nico es obligatorio"), request.method === "POST" && clients.filter((client2) => client2.Phone.toLowerCase() === phone.toLowerCase()).length > 0 && (errors.phone = "Ya existe un cliente registrado con este num\xE9ro telef\xF3nico"), /^[^s@]+@[^s@]+.[^s@]+$/.test(email) && (errors.email = "El correo electr\xF3nico ingresado no es valido"), email.length === 0 && (errors.email = "El correo electr\xF3nico es obligatorio"), request.method === "POST" && clients.filter((client2) => client2.Email.toLowerCase() === email.toLowerCase()).length > 0 && (errors.email = "Ya existe un cliente registrado con este correo electr\xF3nico"), address.length === 0 && (errors.address = "La direcci\xF3n del cliente es obligatoria")), Object.keys(errors).length > 0)
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
  let [isVisibleFormCliente, setVisibleFormClient] = useState9(!1), [isVisibleFormClienteForEditing, setVisibleFormClientForEditing] = useState9(!1), [isVisibleDeleteClient, setVisibleDeleteClient] = useState9(!1), [insertedMessage, showInsertedMessage] = useState9(!1), [updatedMessage, showUpdatedMessage] = useState9(!1), [deleteClientMessage, showDeleteClientMessage] = useState9(!1), [clientHaveDocumentsMessage, showClientHaveDocumentsMessage] = useState9(!1), [errorSelectedMessage, showErrorSelectedMessage] = useState9(!1), [clients, setClients] = useState9([]), [clientSelected, setClientSelected] = useState9({}), loader13 = useLoaderData3(), actionResult = useActionData2();
  useEffect6(() => {
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
  }, [actionResult]), useEffect6(() => {
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
  return /* @__PURE__ */ jsxDEV14("div", { className: "container", children: [
    isVisibleFormCliente && /* @__PURE__ */ jsxDEV14(
      FormClient,
      {
        method: "POST",
        errors: actionResult?.errors,
        setVisibleFormClient
      },
      void 0,
      !1,
      {
        fileName: "app/routes/clientes._index.tsx",
        lineNumber: 264,
        columnNumber: 7
      },
      this
    ),
    isVisibleFormClienteForEditing && /* @__PURE__ */ jsxDEV14(
      FormClient,
      {
        method: "PUT",
        errors: actionResult?.errors,
        client: clientSelected,
        setVisibleFormClient: setVisibleFormClientForEditing
      },
      void 0,
      !1,
      {
        fileName: "app/routes/clientes._index.tsx",
        lineNumber: 272,
        columnNumber: 7
      },
      this
    ),
    isVisibleDeleteClient && /* @__PURE__ */ jsxDEV14(
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
      },
      void 0,
      !1,
      {
        fileName: "app/routes/clientes._index.tsx",
        lineNumber: 281,
        columnNumber: 7
      },
      this
    ),
    errorSelectedMessage && /* @__PURE__ */ jsxDEV14(
      ModalMessage,
      {
        features: {
          text: "Seleccione un cliente de la lista",
          isOkCancel: !1,
          indexIcon: 0,
          data: null
        },
        setVisibleMessage: showErrorSelectedMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/clientes._index.tsx",
        lineNumber: 298,
        columnNumber: 7
      },
      this
    ),
    insertedMessage && /* @__PURE__ */ jsxDEV14(
      ModalMessage,
      {
        features: {
          text: "El cliente ha sido ingresado exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: showInsertedMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/clientes._index.tsx",
        lineNumber: 312,
        columnNumber: 7
      },
      this
    ),
    updatedMessage && /* @__PURE__ */ jsxDEV14(
      ModalMessage,
      {
        features: {
          text: "El cliente ha sido actualizado exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: showUpdatedMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/clientes._index.tsx",
        lineNumber: 326,
        columnNumber: 7
      },
      this
    ),
    deleteClientMessage && /* @__PURE__ */ jsxDEV14(
      ModalMessage,
      {
        features: {
          text: "El cliente ha sido eliminado exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: showDeleteClientMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/clientes._index.tsx",
        lineNumber: 340,
        columnNumber: 7
      },
      this
    ),
    clientHaveDocumentsMessage && /* @__PURE__ */ jsxDEV14(
      ModalMessage,
      {
        features: {
          text: "El cliente no ha sido eliminado ya que se encontraron datos (documentos, citas) registrados para este cliente",
          isOkCancel: !1,
          indexIcon: 0,
          data: null
        },
        setVisibleMessage: showClientHaveDocumentsMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/clientes._index.tsx",
        lineNumber: 354,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV14("h1", { className: "heading", children: "Clientes" }, void 0, !1, {
      fileName: "app/routes/clientes._index.tsx",
      lineNumber: 367,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV14("p", { className: "subheading", children: "Lista completa de los clientes registrados" }, void 0, !1, {
      fileName: "app/routes/clientes._index.tsx",
      lineNumber: 368,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "top-options", children: /* @__PURE__ */ jsxDEV14("div", { className: "search", children: [
      /* @__PURE__ */ jsxDEV14("img", { src: "/img/search.svg", alt: "search" }, void 0, !1, {
        fileName: "app/routes/clientes._index.tsx",
        lineNumber: 374,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV14(
        "input",
        {
          type: "text",
          placeholder: "Buscar",
          onChange: (event) => {
            searchClient(event);
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/clientes._index.tsx",
          lineNumber: 375,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/clientes._index.tsx",
      lineNumber: 373,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/clientes._index.tsx",
      lineNumber: 372,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "actions", children: [
      /* @__PURE__ */ jsxDEV14(
        "button",
        {
          className: "button",
          onClick: () => {
            showFormCliente(!1);
          },
          type: "button",
          children: [
            /* @__PURE__ */ jsxDEV14("img", { src: "/img/add.svg", alt: "add" }, void 0, !1, {
              fileName: "app/routes/clientes._index.tsx",
              lineNumber: 389,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV14("p", { children: "Agregar" }, void 0, !1, {
              fileName: "app/routes/clientes._index.tsx",
              lineNumber: 390,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/clientes._index.tsx",
          lineNumber: 384,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV14(
        "button",
        {
          className: "button",
          onClick: () => {
            showFormCliente(!0);
          },
          children: [
            /* @__PURE__ */ jsxDEV14("img", { src: "/img/edit.svg", alt: "add" }, void 0, !1, {
              fileName: "app/routes/clientes._index.tsx",
              lineNumber: 397,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV14("p", { children: "Editar" }, void 0, !1, {
              fileName: "app/routes/clientes._index.tsx",
              lineNumber: 398,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/clientes._index.tsx",
          lineNumber: 393,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV14(
        "button",
        {
          className: "button",
          onClick: () => {
            showEliminatedClient();
          },
          type: "button",
          value: "Eliminar",
          children: [
            /* @__PURE__ */ jsxDEV14("img", { src: "/img/x.svg", alt: "add" }, void 0, !1, {
              fileName: "app/routes/clientes._index.tsx",
              lineNumber: 407,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV14("p", { children: "Eliminar" }, void 0, !1, {
              fileName: "app/routes/clientes._index.tsx",
              lineNumber: 408,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/clientes._index.tsx",
          lineNumber: 401,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/clientes._index.tsx",
      lineNumber: 383,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "list-scroll", children: clients.length > 0 ? clients.map(
      (client) => /* @__PURE__ */ jsxDEV14(
        Client,
        {
          client,
          clientSelected,
          setClientSelected
        },
        client?.ClientID,
        !1,
        {
          fileName: "app/routes/clientes._index.tsx",
          lineNumber: 417,
          columnNumber: 9
        },
        this
      )
    ) : loader13?.length === 0 ? /* @__PURE__ */ jsxDEV14("p", { className: "no-found", children: "A\xFAn no hay clientes registrados" }, void 0, !1, {
      fileName: "app/routes/clientes._index.tsx",
      lineNumber: 427,
      columnNumber: 9
    }, this) : loader13?.length > 0 && clients.length === 0 ? /* @__PURE__ */ jsxDEV14("p", { className: "no-found", children: "No se pudieron encontrar clientes" }, void 0, !1, {
      fileName: "app/routes/clientes._index.tsx",
      lineNumber: 431,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV14("div", { className: "center", children: /* @__PURE__ */ jsxDEV14(Spinner, {}, void 0, !1, {
      fileName: "app/routes/clientes._index.tsx",
      lineNumber: 434,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/routes/clientes._index.tsx",
      lineNumber: 433,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/clientes._index.tsx",
      lineNumber: 412,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/clientes._index.tsx",
    lineNumber: 262,
    columnNumber: 5
  }, this);
}

// app/routes/forgot-password.tsx
var forgot_password_exports = {};
__export(forgot_password_exports, {
  action: () => action4,
  default: () => ForgotPassword
});
import { useState as useState10, useEffect as useEffect7 } from "react";
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
import { Fragment as Fragment4, jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
function EnterEmail({ email, setEmail }) {
  let action12 = useActionData3(), navigation = useNavigation3();
  return /* @__PURE__ */ jsxDEV15(Fragment4, { children: [
    /* @__PURE__ */ jsxDEV15("h1", { className: "heading", children: "Recupera tu cuenta" }, void 0, !1, {
      fileName: "app/components/forgot-password/enter-email.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("p", { className: "subheading", children: "Para comenzar con la recuperaci\xF3n de tu cuenta, ingresa tu correo electr\xF3nico para verificar que tu cuenta realmente existe." }, void 0, !1, {
      fileName: "app/components/forgot-password/enter-email.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("br", {}, void 0, !1, {
      fileName: "app/components/forgot-password/enter-email.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("div", { className: "inputs", children: [
      /* @__PURE__ */ jsxDEV15("input", { name: "step", type: "hidden", value: 1 }, void 0, !1, {
        fileName: "app/components/forgot-password/enter-email.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15(
        Input,
        {
          title: "Correo electr\xF3nico",
          name: "email",
          placeholder: "Ingresa tu correo electronico",
          type: "email",
          value: email,
          setValue: setEmail,
          error: ""
        },
        void 0,
        !1,
        {
          fileName: "app/components/forgot-password/enter-email.tsx",
          lineNumber: 22,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV15("div", { className: "account-options", children: [
        /* @__PURE__ */ jsxDEV15(Link4, { to: "/login", className: "option", children: "\xBFYa tienes una cuenta? Inicia sesi\xF3n" }, void 0, !1, {
          fileName: "app/components/forgot-password/enter-email.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV15(Link4, { to: "/create-account", className: "option", children: "\xBFAun no tiene una cuenta? Crea una nueva" }, void 0, !1, {
          fileName: "app/components/forgot-password/enter-email.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forgot-password/enter-email.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("p", { className: "error", children: action12?.ERROR }, void 0, !1, {
        fileName: "app/components/forgot-password/enter-email.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("div", { className: "loading", children: [
        /* @__PURE__ */ jsxDEV15(
          "input",
          {
            className: "button",
            type: "submit",
            value: "Verificar"
          },
          void 0,
          !1,
          {
            fileName: "app/components/forgot-password/enter-email.tsx",
            lineNumber: 40,
            columnNumber: 11
          },
          this
        ),
        navigation?.state !== "idle" && /* @__PURE__ */ jsxDEV15(Spinner, {}, void 0, !1, {
          fileName: "app/components/forgot-password/enter-email.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forgot-password/enter-email.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/forgot-password/enter-email.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/forgot-password/enter-email.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/components/forgot-password/enter-code.tsx
import { useActionData as useActionData4, useNavigation as useNavigation4 } from "@remix-run/react";
import React from "react";
import { Fragment as Fragment5, jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV16(Fragment5, { children: [
    /* @__PURE__ */ jsxDEV16("h1", { className: "heading", children: "Ingrese el c\xF3digo de verificaci\xF3n" }, void 0, !1, {
      fileName: "app/components/forgot-password/enter-code.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16("p", { className: "subheading", children: "Para continuar ingrese el c\xF3digo que ha sido enviado ha su correo electr\xF3nico." }, void 0, !1, {
      fileName: "app/components/forgot-password/enter-code.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16("br", {}, void 0, !1, {
      fileName: "app/components/forgot-password/enter-code.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16("section", { className: "inputs", children: [
      /* @__PURE__ */ jsxDEV16("input", { type: "hidden", name: "step", value: 2 }, void 0, !1, {
        fileName: "app/components/forgot-password/enter-code.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV16("input", { type: "hidden", name: "UserID", value: UserID }, void 0, !1, {
        fileName: "app/components/forgot-password/enter-code.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV16("p", { className: "subheading", children: "C\xF3digo de recuperaci\xF3n" }, void 0, !1, {
        fileName: "app/components/forgot-password/enter-code.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "code", children: inputs.map(
        (input, index) => /* @__PURE__ */ jsxDEV16(
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
          index,
          !1,
          {
            fileName: "app/components/forgot-password/enter-code.tsx",
            lineNumber: 42,
            columnNumber: 13
          },
          this
        )
      ) }, void 0, !1, {
        fileName: "app/components/forgot-password/enter-code.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV16("p", { className: "error", children: action12?.ERROR }, void 0, !1, {
        fileName: "app/components/forgot-password/enter-code.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "loading", children: [
        /* @__PURE__ */ jsxDEV16(
          "input",
          {
            className: "button",
            type: "submit",
            value: "Verificar"
          },
          void 0,
          !1,
          {
            fileName: "app/components/forgot-password/enter-code.tsx",
            lineNumber: 59,
            columnNumber: 11
          },
          this
        ),
        navigation?.state !== "idle" && /* @__PURE__ */ jsxDEV16(Spinner, {}, void 0, !1, {
          fileName: "app/components/forgot-password/enter-code.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forgot-password/enter-code.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/forgot-password/enter-code.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/forgot-password/enter-code.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/components/forgot-password/restore-password.tsx
import { useActionData as useActionData5, useNavigation as useNavigation5 } from "@remix-run/react";
import { Fragment as Fragment6, jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
function RestorePassword({ password, setPassword, repeatPassword, setRepeatPassword, UserID }) {
  let action12 = useActionData5(), navigation = useNavigation5();
  return /* @__PURE__ */ jsxDEV17(Fragment6, { children: [
    /* @__PURE__ */ jsxDEV17("h1", { className: "heading", children: "Restablecer contrase\xF1a" }, void 0, !1, {
      fileName: "app/components/forgot-password/restore-password.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17("p", { className: "subheading", children: "Ingrese su nueva contrase\xF1a y vuelva a repetirla para finalizar con el restablecimiento de la contrase\xF1a de su cuenta." }, void 0, !1, {
      fileName: "app/components/forgot-password/restore-password.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17("br", {}, void 0, !1, {
      fileName: "app/components/forgot-password/restore-password.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17("section", { className: "inputs", children: [
      /* @__PURE__ */ jsxDEV17("input", { type: "hidden", name: "step", value: 3 }, void 0, !1, {
        fileName: "app/components/forgot-password/restore-password.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV17("input", { type: "hidden", name: "UserID", value: UserID }, void 0, !1, {
        fileName: "app/components/forgot-password/restore-password.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV17(
        Input,
        {
          title: "Nueva contrase\xF1a",
          name: "password",
          placeholder: "Ingrese la contrase\xF1a...",
          type: "password",
          value: password,
          setValue: setPassword,
          error: ""
        },
        void 0,
        !1,
        {
          fileName: "app/components/forgot-password/restore-password.tsx",
          lineNumber: 24,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV17(
        Input,
        {
          title: "Repita la nueva contrase\xF1a",
          name: "repeat-password",
          placeholder: "Repita la contrase\xF1a...",
          type: "password",
          value: repeatPassword,
          setValue: setRepeatPassword,
          error: ""
        },
        void 0,
        !1,
        {
          fileName: "app/components/forgot-password/restore-password.tsx",
          lineNumber: 34,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV17("p", { className: "error", children: action12?.ERROR }, void 0, !1, {
        fileName: "app/components/forgot-password/restore-password.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV17("div", { className: "loading", children: [
        /* @__PURE__ */ jsxDEV17("input", { className: "button", type: "submit", value: "Verificar" }, void 0, !1, {
          fileName: "app/components/forgot-password/restore-password.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        navigation?.state !== "idle" && /* @__PURE__ */ jsxDEV17(Spinner, {}, void 0, !1, {
          fileName: "app/components/forgot-password/restore-password.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forgot-password/restore-password.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/forgot-password/restore-password.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/forgot-password/restore-password.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
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
                  <meta https-equiv="X-UA-Compatible" content="IE=edge">
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
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
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
  let action12 = useActionData6(), navigate = useNavigate(), [step, setStep] = useState10(1), [userID, setUserID] = useState10(0), [email, setEmail] = useState10(""), [password, setPassword] = useState10(""), [repeatPassword, setRepeatPassword] = useState10("");
  return useEffect7(() => {
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
  }, [action12]), /* @__PURE__ */ jsxDEV18("main", { className: "login-modal", children: [
    /* @__PURE__ */ jsxDEV18(Form5, { className: "form", method: "POST", children: step === 1 ? /* @__PURE__ */ jsxDEV18(
      EnterEmail,
      {
        email,
        setEmail
      },
      void 0,
      !1,
      {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 155,
        columnNumber: 13
      },
      this
    ) : step === 2 ? /* @__PURE__ */ jsxDEV18(
      EnterCode,
      {
        UserID: userID
      },
      void 0,
      !1,
      {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 162,
        columnNumber: 13
      },
      this
    ) : /* @__PURE__ */ jsxDEV18(
      RestorePassword,
      {
        password,
        setPassword,
        repeatPassword,
        setRepeatPassword,
        UserID: userID
      },
      void 0,
      !1,
      {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 166,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/forgot-password.tsx",
      lineNumber: 152,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { className: "steps", children: [
      /* @__PURE__ */ jsxDEV18("p", { className: `step ${step === 1 ? "active" : ""}`, children: "1" }, void 0, !1, {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "step-line" }, void 0, !1, {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 179,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV18("p", { className: `step ${step === 2 ? "active" : ""}`, children: "2" }, void 0, !1, {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "step-line" }, void 0, !1, {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 181,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV18("p", { className: `step ${step === 3 ? "active" : ""}`, children: "3" }, void 0, !1, {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/forgot-password.tsx",
      lineNumber: 177,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/forgot-password.tsx",
    lineNumber: 151,
    columnNumber: 5
  }, this);
}

// app/routes/materias._index.tsx
var materias_index_exports = {};
__export(materias_index_exports, {
  action: () => action5,
  default: () => Materias,
  links: () => links3,
  loader: () => loader4
});
import { useState as useState12, useEffect as useEffect9 } from "react";
import { useActionData as useActionData7, useLoaderData as useLoaderData4 } from "@remix-run/react";

// app/components/formSubject.tsx
import { useEffect as useEffect8, useState as useState11 } from "react";
import { Form as Form6, useNavigation as useNavigation6 } from "@remix-run/react";
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
function FormSubject({ subject, method, errors = {}, setShowModalCategory }) {
  let isSubject = Object.keys(subject).length > 0, [name, setName] = useState11(subject?.Name || ""), navigation = useNavigation6(), [beVisible, setBevisible] = useState11(!1);
  return useEffect8(() => {
    setTimeout(() => {
      setBevisible(!0);
    }, 100);
  }, []), /* @__PURE__ */ jsxDEV19("div", { className: `modal ${beVisible ? "active" : ""}`, children: /* @__PURE__ */ jsxDEV19(
    Form6,
    {
      className: "form",
      method,
      action: "/materias",
      children: [
        /* @__PURE__ */ jsxDEV19(
          CloseButton,
          {
            hideModal: () => {
              setBevisible(!1), setTimeout(() => {
                setShowModalCategory(!1);
              }, 300);
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/formSubject.tsx",
            lineNumber: 32,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV19("h1", { className: "heading", children: isSubject ? "Modificar materia" : "Agregar nueva materia" }, void 0, !1, {
          fileName: "app/components/formSubject.tsx",
          lineNumber: 36,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV19("h2", { className: "subheading", children: isSubject ? "Realice los cambios necesarios para guardar" : "Agregue el nombre de la materia para guardar en la lista" }, void 0, !1, {
          fileName: "app/components/formSubject.tsx",
          lineNumber: 39,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV19("br", {}, void 0, !1, {
          fileName: "app/components/formSubject.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV19("div", { className: "inputs", children: /* @__PURE__ */ jsxDEV19("div", { className: "input", children: [
          isSubject && /* @__PURE__ */ jsxDEV19("input", { type: "hidden", name: "SubjectID", value: subject?.SubjectID }, void 0, !1, {
            fileName: "app/components/formSubject.tsx",
            lineNumber: 50,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV19("label", { htmlFor: "name", children: "Nombre" }, void 0, !1, {
            fileName: "app/components/formSubject.tsx",
            lineNumber: 53,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV19(
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
            },
            void 0,
            !1,
            {
              fileName: "app/components/formSubject.tsx",
              lineNumber: 54,
              columnNumber: 13
            },
            this
          ),
          errors?.name ? /* @__PURE__ */ jsxDEV19("p", { className: "error", children: errors.name }, void 0, !1, {
            fileName: "app/components/formSubject.tsx",
            lineNumber: 63,
            columnNumber: 30
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/components/formSubject.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/formSubject.tsx",
          lineNumber: 47,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV19("div", { className: "loading", children: [
          /* @__PURE__ */ jsxDEV19("input", { className: "button", type: "submit", value: isSubject ? "Modificar" : "Guardar" }, void 0, !1, {
            fileName: "app/components/formSubject.tsx",
            lineNumber: 68,
            columnNumber: 11
          }, this),
          navigation?.state !== "idle" && /* @__PURE__ */ jsxDEV19("div", { className: "spinner", children: [
            /* @__PURE__ */ jsxDEV19("div", { className: "bounce1" }, void 0, !1, {
              fileName: "app/components/formSubject.tsx",
              lineNumber: 71,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV19("div", { className: "bounce2" }, void 0, !1, {
              fileName: "app/components/formSubject.tsx",
              lineNumber: 72,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV19("div", { className: "bounce3" }, void 0, !1, {
              fileName: "app/components/formSubject.tsx",
              lineNumber: 73,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/formSubject.tsx",
            lineNumber: 70,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/formSubject.tsx",
          lineNumber: 67,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/formSubject.tsx",
      lineNumber: 27,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/formSubject.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/components/subject.tsx
import { Link as Link5 } from "@remix-run/react";
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
function Subject({ subject, subjectSelected, setSubjectSelected }) {
  let { SubjectID, Name, Documents } = subject;
  return /* @__PURE__ */ jsxDEV20("div", { className: "item-list", children: [
    /* @__PURE__ */ jsxDEV20(Link5, { to: `/materias/${Name}`, className: "item-main", children: [
      /* @__PURE__ */ jsxDEV20("img", { src: "/img/category.svg", alt: "user" }, void 0, !1, {
        fileName: "app/components/subject.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV20("div", { className: "item-information", children: [
        /* @__PURE__ */ jsxDEV20("h4", { children: Name }, void 0, !1, {
          fileName: "app/components/subject.tsx",
          lineNumber: 12,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV20("p", { children: [
          "Numero total de documentos: ",
          Documents?.length
        ] }, void 0, !0, {
          fileName: "app/components/subject.tsx",
          lineNumber: 13,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/subject.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/subject.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV20(
      "img",
      {
        className: "check",
        src: `/img/${subjectSelected.SubjectID === SubjectID ? "square-check.svg" : "square.svg"}`,
        onClick: () => {
          setSubjectSelected(subjectSelected.SubjectID === SubjectID ? {} : subject);
        },
        alt: "square"
      },
      void 0,
      !1,
      {
        fileName: "app/components/subject.tsx",
        lineNumber: 17,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/subject.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
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
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
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
  let [subjectSelected, setSubjectSelected] = useState12({}), [showModalSubject, setShowModalSubject] = useState12(!1), [showModalSubjectForEditing, setShowModalSubjectForEditing] = useState12(!1), [showModalSubjectDelete, setShowModalSubjectDelete] = useState12(!1), [showErrorSelectedMessage, setShowErrorSelectedMessage] = useState12(!1), [showErrorEliminationMessage, setShowErrorEliminationMessage] = useState12(!1), [showInsertedMessage, setShowInsertedMessage] = useState12(!1), [showUpdatedMessage, setShowUpdatedMessage] = useState12(!1), [showDeletedMessage, setShowDeletedMessage] = useState12(!1), loader13 = useLoaderData4(), actionResult = useActionData7(), [subjects, setSubjects] = useState12([]);
  useEffect9(() => {
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
  return useEffect9(() => {
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
  }, [actionResult]), /* @__PURE__ */ jsxDEV21("div", { className: "container", children: [
    showModalSubject && /* @__PURE__ */ jsxDEV21(
      FormSubject,
      {
        subject: {},
        method: "POST",
        errors: actionResult?.errors,
        setShowModalCategory: setShowModalSubject
      },
      void 0,
      !1,
      {
        fileName: "app/routes/materias._index.tsx",
        lineNumber: 188,
        columnNumber: 7
      },
      this
    ),
    showModalSubjectForEditing && /* @__PURE__ */ jsxDEV21(
      FormSubject,
      {
        subject: subjectSelected,
        method: "PUT",
        errors: actionResult?.errors,
        setShowModalCategory: setShowModalSubjectForEditing
      },
      void 0,
      !1,
      {
        fileName: "app/routes/materias._index.tsx",
        lineNumber: 197,
        columnNumber: 7
      },
      this
    ),
    showErrorSelectedMessage && /* @__PURE__ */ jsxDEV21(
      ModalMessage,
      {
        features: {
          text: "Seleccione una materia de la lista",
          isOkCancel: !1,
          indexIcon: 0,
          data: null
        },
        setVisibleMessage: setShowErrorSelectedMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/materias._index.tsx",
        lineNumber: 206,
        columnNumber: 7
      },
      this
    ),
    showErrorEliminationMessage && /* @__PURE__ */ jsxDEV21(
      ModalMessage,
      {
        features: {
          text: "La materia no ha sido eliminada ya que se encontraron datos (documentos) vinculados a la materia",
          isOkCancel: !1,
          indexIcon: 0,
          data: null
        },
        setVisibleMessage: setShowErrorEliminationMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/materias._index.tsx",
        lineNumber: 220,
        columnNumber: 7
      },
      this
    ),
    showInsertedMessage && /* @__PURE__ */ jsxDEV21(
      ModalMessage,
      {
        features: {
          text: "La materia ha sido agregado exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowInsertedMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/materias._index.tsx",
        lineNumber: 234,
        columnNumber: 7
      },
      this
    ),
    showUpdatedMessage && /* @__PURE__ */ jsxDEV21(
      ModalMessage,
      {
        features: {
          text: "La materia ha sido modificada exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowUpdatedMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/materias._index.tsx",
        lineNumber: 248,
        columnNumber: 7
      },
      this
    ),
    showDeletedMessage && /* @__PURE__ */ jsxDEV21(
      ModalMessage,
      {
        features: {
          text: "La materia ha sido eliminada exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowDeletedMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/materias._index.tsx",
        lineNumber: 262,
        columnNumber: 7
      },
      this
    ),
    showModalSubjectDelete && /* @__PURE__ */ jsxDEV21(
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
      },
      void 0,
      !1,
      {
        fileName: "app/routes/materias._index.tsx",
        lineNumber: 276,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV21("h1", { className: "heading", children: "Lista de materias" }, void 0, !1, {
      fileName: "app/routes/materias._index.tsx",
      lineNumber: 292,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21("h2", { className: "subheading", children: "Gestiona las listas disponibles en la plataforma creando nuevas materias." }, void 0, !1, {
      fileName: "app/routes/materias._index.tsx",
      lineNumber: 293,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21("div", { className: "top-options", children: /* @__PURE__ */ jsxDEV21("div", { className: "search", children: [
      /* @__PURE__ */ jsxDEV21("img", { src: "/img/search.svg", alt: "search" }, void 0, !1, {
        fileName: "app/routes/materias._index.tsx",
        lineNumber: 299,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV21(
        "input",
        {
          type: "text",
          placeholder: "Buscar",
          onChange: (event) => {
            searchSubjects(event);
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/materias._index.tsx",
          lineNumber: 300,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/materias._index.tsx",
      lineNumber: 298,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/materias._index.tsx",
      lineNumber: 297,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21("div", { className: "actions", children: [
      /* @__PURE__ */ jsxDEV21(
        "button",
        {
          className: "button",
          onClick: () => {
            showFormSubject(!1);
          },
          type: "button",
          children: [
            /* @__PURE__ */ jsxDEV21("img", { src: "/img/add.svg", alt: "add" }, void 0, !1, {
              fileName: "app/routes/materias._index.tsx",
              lineNumber: 314,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV21("p", { children: "Agregar materia" }, void 0, !1, {
              fileName: "app/routes/materias._index.tsx",
              lineNumber: 315,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/materias._index.tsx",
          lineNumber: 309,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV21(
        "button",
        {
          className: "button",
          onClick: () => {
            showFormSubject(!0);
          },
          children: [
            /* @__PURE__ */ jsxDEV21("img", { src: "/img/edit.svg", alt: "add" }, void 0, !1, {
              fileName: "app/routes/materias._index.tsx",
              lineNumber: 322,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV21("p", { children: "Editar materia" }, void 0, !1, {
              fileName: "app/routes/materias._index.tsx",
              lineNumber: 323,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/materias._index.tsx",
          lineNumber: 318,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV21(
        "button",
        {
          className: "button",
          onClick: () => {
            showDeleteMessage();
          },
          children: [
            /* @__PURE__ */ jsxDEV21("img", { src: "/img/x.svg", alt: "delete" }, void 0, !1, {
              fileName: "app/routes/materias._index.tsx",
              lineNumber: 330,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV21("p", { children: "Eliminar materia" }, void 0, !1, {
              fileName: "app/routes/materias._index.tsx",
              lineNumber: 331,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/materias._index.tsx",
          lineNumber: 326,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/materias._index.tsx",
      lineNumber: 308,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21("div", { className: "list-scroll", children: subjects.length > 0 ? subjects.map(
      (subject) => /* @__PURE__ */ jsxDEV21(
        Subject,
        {
          subject,
          subjectSelected,
          setSubjectSelected
        },
        subject.SubjectID,
        !1,
        {
          fileName: "app/routes/materias._index.tsx",
          lineNumber: 339,
          columnNumber: 9
        },
        this
      )
    ) : loader13?.length === 0 ? /* @__PURE__ */ jsxDEV21("p", { className: "no-found", children: "A\xFAn no hay materias registrados" }, void 0, !1, {
      fileName: "app/routes/materias._index.tsx",
      lineNumber: 349,
      columnNumber: 9
    }, this) : loader13?.length > 0 && subjects.length === 0 ? /* @__PURE__ */ jsxDEV21("p", { className: "no-found", children: "No se pudieron encontrar materias" }, void 0, !1, {
      fileName: "app/routes/materias._index.tsx",
      lineNumber: 353,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV21("div", { className: "center", children: /* @__PURE__ */ jsxDEV21(Spinner, {}, void 0, !1, {
      fileName: "app/routes/materias._index.tsx",
      lineNumber: 356,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/routes/materias._index.tsx",
      lineNumber: 355,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/materias._index.tsx",
      lineNumber: 335,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/materias._index.tsx",
    lineNumber: 185,
    columnNumber: 5
  }, this);
}

// app/routes/usuarios._index.tsx
var usuarios_index_exports = {};
__export(usuarios_index_exports, {
  action: () => action6,
  default: () => Usuarios,
  loader: () => loader5
});
import { useState as useState15, useEffect as useEffect12 } from "react";
import { useActionData as useActionData8, useLoaderData as useLoaderData5 } from "@remix-run/react";

// app/components/user.tsx
import { Link as Link6 } from "@remix-run/react";
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
function User({ user, userSelected, setUserSelected }) {
  let { UserID, Name, Email, State, URL } = user;
  return /* @__PURE__ */ jsxDEV22("div", { className: "item-list", children: [
    /* @__PURE__ */ jsxDEV22(Link6, { to: `/usuarios/${URL}`, className: "item-main", children: [
      /* @__PURE__ */ jsxDEV22("img", { src: "/img/user-circle.svg", alt: "user" }, void 0, !1, {
        fileName: "app/components/user.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV22("div", { className: "item-information", children: [
        /* @__PURE__ */ jsxDEV22("h4", { children: Name }, void 0, !1, {
          fileName: "app/components/user.tsx",
          lineNumber: 11,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV22("div", { children: [
          /* @__PURE__ */ jsxDEV22("p", { children: Email }, void 0, !1, {
            fileName: "app/components/user.tsx",
            lineNumber: 13,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV22("div", { className: "state", children: [
            /* @__PURE__ */ jsxDEV22("div", { className: `point ${State === 0 ? "" : "active"}` }, void 0, !1, {
              fileName: "app/components/user.tsx",
              lineNumber: 15,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV22("p", { children: State === 1 ? "Habilitado" : "Inhabilitado" }, void 0, !1, {
              fileName: "app/components/user.tsx",
              lineNumber: 16,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/user.tsx",
            lineNumber: 14,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/user.tsx",
          lineNumber: 12,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/user.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/user.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV22(
      "img",
      {
        className: "check",
        src: `/img/${userSelected.UserID === UserID ? "square-check.svg" : "square.svg"}`,
        onClick: () => {
          setUserSelected(userSelected.UserID === UserID ? {} : user);
        },
        alt: "square"
      },
      void 0,
      !1,
      {
        fileName: "app/components/user.tsx",
        lineNumber: 22,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/user.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/dropdownlist.tsx
import { Fragment as Fragment7, jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
function Dropdownlist({ title, name, items = [], error, setItemSelected }) {
  return /* @__PURE__ */ jsxDEV23("div", { className: "input", children: [
    /* @__PURE__ */ jsxDEV23("label", { htmlFor: name, children: title }, void 0, !1, {
      fileName: "app/components/dropdownlist.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV23(
      "select",
      {
        name,
        id: name,
        onChange: (evt) => {
          setItemSelected(evt.target.value);
        },
        children: items.length > 0 ? /* @__PURE__ */ jsxDEV23(Fragment7, { children: [
          /* @__PURE__ */ jsxDEV23("option", { value: -1, children: "-- Seleccione un elemento --" }, void 0, !1, {
            fileName: "app/components/dropdownlist.tsx",
            lineNumber: 13,
            columnNumber: 13
          }, this),
          items.map(
            (item) => /* @__PURE__ */ jsxDEV23(
              "option",
              {
                value: item?.SubjectID || item?.ClientID || item?.UserID || item?.AccessLevelID,
                children: item?.Name || "Name not found"
              },
              item?.SubjectID || item?.ClientID || item?.UserID || item?.AccessLevelID,
              !1,
              {
                fileName: "app/components/dropdownlist.tsx",
                lineNumber: 15,
                columnNumber: 15
              },
              this
            )
          )
        ] }, void 0, !0, {
          fileName: "app/components/dropdownlist.tsx",
          lineNumber: 12,
          columnNumber: 11
        }, this) : ""
      },
      void 0,
      !1,
      {
        fileName: "app/components/dropdownlist.tsx",
        lineNumber: 5,
        columnNumber: 7
      },
      this
    ),
    error ? /* @__PURE__ */ jsxDEV23("p", { className: "error", children: error }, void 0, !1, {
      fileName: "app/components/dropdownlist.tsx",
      lineNumber: 27,
      columnNumber: 17
    }, this) : null
  ] }, void 0, !0, {
    fileName: "app/components/dropdownlist.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/modalCodeMessage.tsx
import { useEffect as useEffect10, useState as useState13 } from "react";
import { jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
function ModalCodeMessage({ currentUser, setStep, accessLevelSelected, setAccessLevelSelected }) {
  let [error, setError] = useState13(""), [beVisible, setBevisible] = useState13(!1);
  useEffect10(() => {
    setTimeout(() => {
      setBevisible(!0);
    }, 100);
  }, []);
  let hideModal = () => {
    setBevisible(!1), setTimeout(() => {
      setStep(0);
    }, 300);
  }, nextModal = () => {
    setBevisible(!1), setTimeout(() => {
      setStep(2);
    }, 300);
  }, validateAccessLevelSelected = () => {
    accessLevelSelected === -1 ? setError("Debe seleccionar el nivel de acceso del usuario") : accessLevelSelected === "A" || accessLevelSelected === "R" || accessLevelSelected === "N" ? nextModal() : setError("El nivel de acceso seleccionado no es valido");
  };
  return /* @__PURE__ */ jsxDEV24("div", { className: `modal ${beVisible ? "active" : ""}`, children: /* @__PURE__ */ jsxDEV24("div", { className: "message", children: [
    /* @__PURE__ */ jsxDEV24(
      CloseButton,
      {
        hideModal
      },
      void 0,
      !1,
      {
        fileName: "app/components/modalCodeMessage.tsx",
        lineNumber: 43,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV24("div", { className: "message-information", children: [
      /* @__PURE__ */ jsxDEV24("p", { className: "just-text", children: "Para la creaci\xF3n de un nuevo usuario debera proporcionarle el c\xF3digo de creaci\xF3n al usuario en cuesti\xF3n con el cual podr\xE1 llenar el formulario de registro." }, void 0, !1, {
        fileName: "app/components/modalCodeMessage.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV24("div", { className: "inputs", children: /* @__PURE__ */ jsxDEV24(
        Dropdownlist,
        {
          title: "Nivel de acceso otorgado",
          name: "user",
          items: currentUser?.AccessLevel === "R" ? accessLevel : [accessLevel[0]],
          error: "",
          setItemSelected: setAccessLevelSelected
        },
        void 0,
        !1,
        {
          fileName: "app/components/modalCodeMessage.tsx",
          lineNumber: 54,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/modalCodeMessage.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV24("p", { className: "error", children: error }, void 0, !1, {
        fileName: "app/components/modalCodeMessage.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV24("div", { className: "buttons", children: [
        /* @__PURE__ */ jsxDEV24(
          "input",
          {
            className: "button",
            type: "submit",
            value: "Aceptar",
            onClick: () => {
              validateAccessLevelSelected();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/modalCodeMessage.tsx",
            lineNumber: 66,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV24(
          "input",
          {
            className: "button",
            type: "button",
            onClick: () => {
              setStep(0);
            },
            value: "Cancelar"
          },
          void 0,
          !1,
          {
            fileName: "app/components/modalCodeMessage.tsx",
            lineNumber: 73,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/modalCodeMessage.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/modalCodeMessage.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/modalCodeMessage.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/modalCodeMessage.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/components/modalCodeShow.tsx
import { useState as useState14, useEffect as useEffect11 } from "react";
import { Form as Form7, useNavigation as useNavigation7 } from "@remix-run/react";
import { jsxDEV as jsxDEV25 } from "react/jsx-dev-runtime";
function ModalCodeShow({ setStep, accessLevelSelected }) {
  let navigation = useNavigation7(), [code, setCode] = useState14("000000"), [beVisible, setBevisible] = useState14(!1);
  useEffect11(() => {
    setTimeout(() => {
      setBevisible(!0);
    }, 100);
  }, []);
  let hideModal = () => {
    setBevisible(!1), setTimeout(() => {
      setStep(0);
    }, 300);
  };
  function generateRandomCode2(length) {
    let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", code2 = "";
    for (let i = 0; i < length; i++) {
      let randomCharacter = character[Math.floor(Math.random() * character.length)];
      code2 += randomCharacter;
    }
    return code2;
  }
  return useEffect11(() => {
    setCode(generateRandomCode2(6));
  }, []), /* @__PURE__ */ jsxDEV25("div", { className: `modal ${beVisible ? "active" : ""}`, children: /* @__PURE__ */ jsxDEV25("div", { className: "message", children: [
    /* @__PURE__ */ jsxDEV25(
      CloseButton,
      {
        hideModal
      },
      void 0,
      !1,
      {
        fileName: "app/components/modalCodeShow.tsx",
        lineNumber: 43,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV25("div", { className: "message-information", children: [
      /* @__PURE__ */ jsxDEV25("p", { className: "just-text", children: "Recuerda no compartir el c\xF3digo generado con nadie diferente al usuario que requiere crear la cuenta." }, void 0, !1, {
        fileName: "app/components/modalCodeShow.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV25("p", { children: "El c\xF3digo generado es el siguiente:" }, void 0, !1, {
        fileName: "app/components/modalCodeShow.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV25("div", { className: "code", children: [
        /* @__PURE__ */ jsxDEV25("p", { className: "code-letter", children: code[0] }, void 0, !1, {
          fileName: "app/components/modalCodeShow.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV25("p", { className: "code-letter", children: code[1] }, void 0, !1, {
          fileName: "app/components/modalCodeShow.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV25("p", { className: "code-letter", children: code[2] }, void 0, !1, {
          fileName: "app/components/modalCodeShow.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV25("p", { className: "code-letter", children: code[3] }, void 0, !1, {
          fileName: "app/components/modalCodeShow.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV25("p", { className: "code-letter", children: code[4] }, void 0, !1, {
          fileName: "app/components/modalCodeShow.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV25("p", { className: "code-letter", children: code[5] }, void 0, !1, {
          fileName: "app/components/modalCodeShow.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/modalCodeShow.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV25(Form7, { method: "POST", children: [
        /* @__PURE__ */ jsxDEV25("input", { type: "hidden", name: "action", value: "CREATE-USER" }, void 0, !1, {
          fileName: "app/components/modalCodeShow.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV25("input", { type: "hidden", name: "Token", value: code }, void 0, !1, {
          fileName: "app/components/modalCodeShow.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV25("input", { type: "hidden", name: "AccessLevel", value: accessLevelSelected }, void 0, !1, {
          fileName: "app/components/modalCodeShow.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV25("div", { className: "loading", children: [
          /* @__PURE__ */ jsxDEV25(
            "input",
            {
              className: "button",
              type: "submit",
              value: "Guardar"
            },
            void 0,
            !1,
            {
              fileName: "app/components/modalCodeShow.tsx",
              lineNumber: 70,
              columnNumber: 15
            },
            this
          ),
          navigation?.state !== "idle" && /* @__PURE__ */ jsxDEV25(Spinner, {}, void 0, !1, {
            fileName: "app/components/modalCodeShow.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/modalCodeShow.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/modalCodeShow.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/modalCodeShow.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/modalCodeShow.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/modalCodeShow.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/routes/usuarios._index.tsx
import { jsxDEV as jsxDEV26 } from "react/jsx-dev-runtime";
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
  let [users, setUsers] = useState15([]), [userSelected, setUserSelected] = useState15({}), [accessLevelSelected, setAccessLevelSelected] = useState15(""), [addUserStep, setAddUserStep] = useState15(0), [errorSelectedMessage, showErrorSelectedMessage] = useState15(!1), [showMessageAddUser, setShowMessageAddUser] = useState15(!1), [showMessageDeleteUser, setShowMessageDeleteUser] = useState15(!1), [showMessageEnableUser, setShowMessageEnableUser] = useState15(!1), [showMessageUserDeleted, setShowMessageUserDeleted] = useState15(!1), [showMessageUserHavaData, setShowMessageUserHavaData] = useState15(!1), [showMessageUserStateChange, setShowMessageUserStateChange] = useState15(!1), loader13 = useLoaderData5(), action12 = useActionData8();
  useEffect12(() => {
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
  }, [action12]), useEffect12(() => {
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
  return /* @__PURE__ */ jsxDEV26("main", { className: "container", children: [
    errorSelectedMessage && /* @__PURE__ */ jsxDEV26(
      ModalMessage,
      {
        features: {
          text: "Seleccione un cliente de la lista",
          isOkCancel: !1,
          indexIcon: 0,
          data: null
        },
        setVisibleMessage: showErrorSelectedMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/usuarios._index.tsx",
        lineNumber: 167,
        columnNumber: 9
      },
      this
    ),
    addUserStep === 1 && /* @__PURE__ */ jsxDEV26(
      ModalCodeMessage,
      {
        currentUser: loader13?.currentUser,
        setStep: setAddUserStep,
        accessLevelSelected,
        setAccessLevelSelected
      },
      void 0,
      !1,
      {
        fileName: "app/routes/usuarios._index.tsx",
        lineNumber: 181,
        columnNumber: 9
      },
      this
    ),
    addUserStep === 2 && /* @__PURE__ */ jsxDEV26(
      ModalCodeShow,
      {
        setStep: setAddUserStep,
        accessLevelSelected
      },
      void 0,
      !1,
      {
        fileName: "app/routes/usuarios._index.tsx",
        lineNumber: 190,
        columnNumber: 9
      },
      this
    ),
    showMessageAddUser && /* @__PURE__ */ jsxDEV26(
      ModalMessage,
      {
        features: {
          text: "El c\xF3digo generado ha sido almacenado exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowMessageAddUser
      },
      void 0,
      !1,
      {
        fileName: "app/routes/usuarios._index.tsx",
        lineNumber: 197,
        columnNumber: 9
      },
      this
    ),
    showMessageDeleteUser && /* @__PURE__ */ jsxDEV26(
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
      },
      void 0,
      !1,
      {
        fileName: "app/routes/usuarios._index.tsx",
        lineNumber: 211,
        columnNumber: 9
      },
      this
    ),
    showMessageEnableUser && /* @__PURE__ */ jsxDEV26(
      ModalMessage,
      {
        features: {
          text: `\xBFEsta seguro que desea ${userSelected.State === 1 ? "inactivar" : "activar"} el usuario seleccionado?`,
          isOkCancel: !0,
          indexIcon: 2,
          data: {
            method: "PUT",
            name: "UserID",
            value: userSelected.UserID
          }
        },
        visibleMessage: showMessageEnableUser,
        setVisibleMessage: setShowMessageEnableUser
      },
      void 0,
      !1,
      {
        fileName: "app/routes/usuarios._index.tsx",
        lineNumber: 228,
        columnNumber: 9
      },
      this
    ),
    showMessageUserDeleted && /* @__PURE__ */ jsxDEV26(
      ModalMessage,
      {
        features: {
          text: "El usuario ha sido eliminado exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowMessageUserDeleted
      },
      void 0,
      !1,
      {
        fileName: "app/routes/usuarios._index.tsx",
        lineNumber: 247,
        columnNumber: 9
      },
      this
    ),
    showMessageUserHavaData && /* @__PURE__ */ jsxDEV26(
      ModalMessage,
      {
        features: {
          text: "El usuario no pudo ser eliminado ya que se encontraron datos (documentos, citas, clientes, documentos internos, materias) registrados para este usuario",
          isOkCancel: !1,
          indexIcon: 0,
          data: null
        },
        setVisibleMessage: setShowMessageUserHavaData
      },
      void 0,
      !1,
      {
        fileName: "app/routes/usuarios._index.tsx",
        lineNumber: 263,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV26("h1", { className: "heading", children: "Usuarios" }, void 0, !1, {
      fileName: "app/routes/usuarios._index.tsx",
      lineNumber: 276,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV26("p", { className: "subheading", children: "Lista completa de los usuarios registrados" }, void 0, !1, {
      fileName: "app/routes/usuarios._index.tsx",
      lineNumber: 277,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV26("div", { className: "top-options", children: /* @__PURE__ */ jsxDEV26("div", { className: "search", children: [
      /* @__PURE__ */ jsxDEV26("img", { src: "/img/search.svg", alt: "search" }, void 0, !1, {
        fileName: "app/routes/usuarios._index.tsx",
        lineNumber: 283,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV26(
        "input",
        {
          type: "text",
          placeholder: "Buscar",
          onChange: (event) => {
            searchClient(event);
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/usuarios._index.tsx",
          lineNumber: 284,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/usuarios._index.tsx",
      lineNumber: 282,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/usuarios._index.tsx",
      lineNumber: 281,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV26("div", { className: "actions", children: [
      /* @__PURE__ */ jsxDEV26(
        "button",
        {
          className: "button",
          onClick: () => {
            setAddUserStep(1);
          },
          type: "button",
          children: [
            /* @__PURE__ */ jsxDEV26("img", { src: "/img/add.svg", alt: "add" }, void 0, !1, {
              fileName: "app/routes/usuarios._index.tsx",
              lineNumber: 301,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV26("p", { children: "Agregar" }, void 0, !1, {
              fileName: "app/routes/usuarios._index.tsx",
              lineNumber: 302,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/usuarios._index.tsx",
          lineNumber: 293,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV26(
        "button",
        {
          className: "button",
          onClick: () => {
            showDisableUser();
          },
          children: [
            /* @__PURE__ */ jsxDEV26("img", { src: "/img/edit.svg", alt: "add" }, void 0, !1, {
              fileName: "app/routes/usuarios._index.tsx",
              lineNumber: 309,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV26("p", { children: "Inhabilitar" }, void 0, !1, {
              fileName: "app/routes/usuarios._index.tsx",
              lineNumber: 310,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/usuarios._index.tsx",
          lineNumber: 305,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV26(
        "button",
        {
          className: "button",
          onClick: () => {
            showEliminatedClient();
          },
          type: "button",
          value: "Eliminar",
          children: [
            /* @__PURE__ */ jsxDEV26("img", { src: "/img/x.svg", alt: "add" }, void 0, !1, {
              fileName: "app/routes/usuarios._index.tsx",
              lineNumber: 319,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV26("p", { children: "Eliminar" }, void 0, !1, {
              fileName: "app/routes/usuarios._index.tsx",
              lineNumber: 320,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/usuarios._index.tsx",
          lineNumber: 313,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/usuarios._index.tsx",
      lineNumber: 292,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV26("div", { className: "list-scroll", children: users.length > 0 ? users.map(
      (user) => /* @__PURE__ */ jsxDEV26(
        User,
        {
          user,
          userSelected,
          setUserSelected
        },
        user.UserID,
        !1,
        {
          fileName: "app/routes/usuarios._index.tsx",
          lineNumber: 329,
          columnNumber: 15
        },
        this
      )
    ) : loader13?.users?.length === 0 ? /* @__PURE__ */ jsxDEV26("p", { className: "no-found", children: "A\xFAn no hay usuarios registrados" }, void 0, !1, {
      fileName: "app/routes/usuarios._index.tsx",
      lineNumber: 339,
      columnNumber: 15
    }, this) : loader13?.users?.length > 0 && users.length === 0 ? /* @__PURE__ */ jsxDEV26("p", { className: "no-found", children: "No se pudieron encontrar usuarios" }, void 0, !1, {
      fileName: "app/routes/usuarios._index.tsx",
      lineNumber: 343,
      columnNumber: 17
    }, this) : /* @__PURE__ */ jsxDEV26("div", { className: "center", children: /* @__PURE__ */ jsxDEV26(Spinner, {}, void 0, !1, {
      fileName: "app/routes/usuarios._index.tsx",
      lineNumber: 346,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/routes/usuarios._index.tsx",
      lineNumber: 345,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/usuarios._index.tsx",
      lineNumber: 324,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/usuarios._index.tsx",
    lineNumber: 165,
    columnNumber: 5
  }, this);
}

// app/routes/create-account.tsx
var create_account_exports = {};
__export(create_account_exports, {
  action: () => action7,
  default: () => CreateAccount
});
import { useEffect as useEffect13, useState as useState16 } from "react";
import { useActionData as useActionData12, useNavigate as useNavigate2 } from "@remix-run/react";

// app/components/create-account/enter-code.tsx
import React2 from "react";
import { Link as Link7, Form as Form8, useNavigation as useNavigation8, useActionData as useActionData9 } from "@remix-run/react";
import { jsxDEV as jsxDEV27 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV27(Form8, { className: "form", method: "POST", children: [
    /* @__PURE__ */ jsxDEV27("h1", { className: "heading", children: "Ingresa tu c\xF3digo de creaci\xF3n" }, void 0, !1, {
      fileName: "app/components/create-account/enter-code.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV27("h2", { className: "subheading", children: "Para continuar y crear tu cuenta ingresa el c\xF3digo de creaci\xF3n de cuenta Otorgado por tu administrador." }, void 0, !1, {
      fileName: "app/components/create-account/enter-code.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV27("br", {}, void 0, !1, {
      fileName: "app/components/create-account/enter-code.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV27("section", { className: "inputs", children: [
      /* @__PURE__ */ jsxDEV27("input", { type: "hidden", name: "step", value: 1 }, void 0, !1, {
        fileName: "app/components/create-account/enter-code.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV27("p", { className: "subheading", children: "C\xF3digo de creaci\xF3n" }, void 0, !1, {
        fileName: "app/components/create-account/enter-code.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV27("div", { className: "code", children: inputs.map(
        (input, index) => /* @__PURE__ */ jsxDEV27(
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
          index,
          !1,
          {
            fileName: "app/components/create-account/enter-code.tsx",
            lineNumber: 41,
            columnNumber: 13
          },
          this
        )
      ) }, void 0, !1, {
        fileName: "app/components/create-account/enter-code.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV27("div", { className: "account-options", children: [
        /* @__PURE__ */ jsxDEV27(Link7, { to: "/login", className: "option", children: "\xBFYa tienes una cuenta? Inicia sesi\xF3n" }, void 0, !1, {
          fileName: "app/components/create-account/enter-code.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV27(Link7, { to: "/forgot-password", className: "option", children: "\xBFOlvidaste tu contrase\xF1a? Recuperala" }, void 0, !1, {
          fileName: "app/components/create-account/enter-code.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/create-account/enter-code.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV27("p", { className: "error", children: action12?.ERROR }, void 0, !1, {
        fileName: "app/components/create-account/enter-code.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV27("div", { className: "loading", children: [
        /* @__PURE__ */ jsxDEV27(
          "input",
          {
            className: "button",
            type: "submit",
            value: "Continuar",
            onClick: () => {
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/create-account/enter-code.tsx",
            lineNumber: 63,
            columnNumber: 11
          },
          this
        ),
        navigation?.state !== "idle" && /* @__PURE__ */ jsxDEV27(Spinner, {}, void 0, !1, {
          fileName: "app/components/create-account/enter-code.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/create-account/enter-code.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/create-account/enter-code.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/create-account/enter-code.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/components/create-account/enter-email.tsx
import { Form as Form9, useActionData as useActionData10, useNavigation as useNavigation9 } from "@remix-run/react";
import { jsxDEV as jsxDEV28 } from "react/jsx-dev-runtime";
function EnterEmail2({ name, setName, email, setEmail, phone, setPhone }) {
  let action12 = useActionData10(), navigation = useNavigation9();
  return /* @__PURE__ */ jsxDEV28(Form9, { className: "form", method: "POST", children: [
    /* @__PURE__ */ jsxDEV28("h1", { className: "heading", children: "Crea tu nueva cuenta" }, void 0, !1, {
      fileName: "app/components/create-account/enter-email.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV28("p", { className: "subheading", children: "LLena todos los campos para crear tu nueva cuenta" }, void 0, !1, {
      fileName: "app/components/create-account/enter-email.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV28("br", {}, void 0, !1, {
      fileName: "app/components/create-account/enter-email.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV28("div", { className: "inputs", children: [
      /* @__PURE__ */ jsxDEV28("input", { type: "hidden", name: "step", value: "2" }, void 0, !1, {
        fileName: "app/components/create-account/enter-email.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV28(
        Input,
        {
          title: "Nombre",
          name: "name",
          placeholder: "Ingresa tu nombre",
          type: "text",
          value: name,
          setValue: setName,
          error: ""
        },
        void 0,
        !1,
        {
          fileName: "app/components/create-account/enter-email.tsx",
          lineNumber: 20,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV28(
        Input,
        {
          title: "Correo electr\xF3nico",
          name: "email",
          placeholder: "Tu corrreo electr\xF3nico",
          type: "email",
          value: email,
          setValue: setEmail,
          error: ""
        },
        void 0,
        !1,
        {
          fileName: "app/components/create-account/enter-email.tsx",
          lineNumber: 30,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV28(
        Input,
        {
          title: "Numero telefonico",
          name: "phone",
          placeholder: "Tu numero telefonico",
          type: "tel",
          value: phone,
          setValue: setPhone,
          error: ""
        },
        void 0,
        !1,
        {
          fileName: "app/components/create-account/enter-email.tsx",
          lineNumber: 40,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV28("p", { className: "error", children: action12?.ERROR }, void 0, !1, {
        fileName: "app/components/create-account/enter-email.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV28("div", { className: "loading", children: [
        /* @__PURE__ */ jsxDEV28("input", { className: "button", type: "submit", value: "Continuar" }, void 0, !1, {
          fileName: "app/components/create-account/enter-email.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        navigation?.state !== "idle" && /* @__PURE__ */ jsxDEV28(Spinner, {}, void 0, !1, {
          fileName: "app/components/create-account/enter-email.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/create-account/enter-email.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/create-account/enter-email.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/create-account/enter-email.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/components/create-account/enter-password.tsx
import { Form as Form10, useNavigation as useNavigation10, useActionData as useActionData11 } from "@remix-run/react";
import { jsxDEV as jsxDEV29 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV29(Form10, { className: "form", method: "POST", children: [
    /* @__PURE__ */ jsxDEV29("h1", { className: "heading", children: "Agrega tu contrase\xF1a" }, void 0, !1, {
      fileName: "app/components/create-account/enter-password.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV29("p", { className: "subheading", children: "Para finalizar de crear tu cuenta agrega una contrase\xF1a" }, void 0, !1, {
      fileName: "app/components/create-account/enter-password.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV29("br", {}, void 0, !1, {
      fileName: "app/components/create-account/enter-password.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV29("input", { type: "hidden", name: "step", value: "3" }, void 0, !1, {
      fileName: "app/components/create-account/enter-password.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV29("input", { type: "hidden", name: "UserID", value: userID }, void 0, !1, {
      fileName: "app/components/create-account/enter-password.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV29("input", { type: "hidden", name: "name", value: name }, void 0, !1, {
      fileName: "app/components/create-account/enter-password.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV29("input", { type: "hidden", name: "email", value: email }, void 0, !1, {
      fileName: "app/components/create-account/enter-password.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV29("input", { type: "hidden", name: "phone", value: phone }, void 0, !1, {
      fileName: "app/components/create-account/enter-password.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV29("div", { className: "inputs", children: [
      /* @__PURE__ */ jsxDEV29(
        Input,
        {
          title: "Contrase\xF1a",
          name: "password",
          placeholder: "Ingresa tu contrase\xF1a",
          type: "password",
          value: password,
          setValue: setPassword,
          error: ""
        },
        void 0,
        !1,
        {
          fileName: "app/components/create-account/enter-password.tsx",
          lineNumber: 25,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV29(
        Input,
        {
          title: "Repite la contrase\xF1a",
          name: "repeat-password",
          placeholder: "Repite tu contrase\xF1a",
          type: "password",
          value: repeatPassword,
          setValue: setRepeatPassword,
          error: ""
        },
        void 0,
        !1,
        {
          fileName: "app/components/create-account/enter-password.tsx",
          lineNumber: 35,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV29("p", { className: "error", children: action12?.ERROR }, void 0, !1, {
        fileName: "app/components/create-account/enter-password.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV29("div", { className: "loading", children: [
        /* @__PURE__ */ jsxDEV29("input", { className: "button", type: "submit", value: "Crear cuenta" }, void 0, !1, {
          fileName: "app/components/create-account/enter-password.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        navigation?.state !== "idle" && /* @__PURE__ */ jsxDEV29(Spinner, {}, void 0, !1, {
          fileName: "app/components/create-account/enter-password.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/create-account/enter-password.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/create-account/enter-password.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/create-account/enter-password.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/create-account.tsx
import { jsxDEV as jsxDEV30 } from "react/jsx-dev-runtime";
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
  let navigate = useNavigate2(), action12 = useActionData12(), [step, setStep] = useState16(1), [userID, setUserID] = useState16(-1), [name, setName] = useState16(""), [email, setEmail] = useState16(""), [phone, setPhone] = useState16(""), [password, setPassword] = useState16(""), [repeatPassword, setRepeatPassword] = useState16("");
  return useEffect13(() => {
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
  }, [action12]), /* @__PURE__ */ jsxDEV30("main", { className: "login-modal", children: [
    step === 1 && /* @__PURE__ */ jsxDEV30(EnterCode2, {}, void 0, !1, {
      fileName: "app/routes/create-account.tsx",
      lineNumber: 169,
      columnNumber: 9
    }, this),
    step === 2 && /* @__PURE__ */ jsxDEV30(
      EnterEmail2,
      {
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone
      },
      void 0,
      !1,
      {
        fileName: "app/routes/create-account.tsx",
        lineNumber: 173,
        columnNumber: 9
      },
      this
    ),
    step === 3 && /* @__PURE__ */ jsxDEV30(
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
      },
      void 0,
      !1,
      {
        fileName: "app/routes/create-account.tsx",
        lineNumber: 184,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV30("div", { className: "steps", children: [
      /* @__PURE__ */ jsxDEV30("p", { className: `step ${step === 1 ? "active" : ""}`, children: "1" }, void 0, !1, {
        fileName: "app/routes/create-account.tsx",
        lineNumber: 197,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV30("div", { className: "step-line" }, void 0, !1, {
        fileName: "app/routes/create-account.tsx",
        lineNumber: 198,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV30("p", { className: `step ${step === 2 ? "active" : ""}`, children: "2" }, void 0, !1, {
        fileName: "app/routes/create-account.tsx",
        lineNumber: 199,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV30("div", { className: "step-line" }, void 0, !1, {
        fileName: "app/routes/create-account.tsx",
        lineNumber: 200,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV30("p", { className: `step ${step === 3 ? "active" : ""}`, children: "2" }, void 0, !1, {
        fileName: "app/routes/create-account.tsx",
        lineNumber: 201,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/create-account.tsx",
      lineNumber: 196,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/create-account.tsx",
    lineNumber: 166,
    columnNumber: 5
  }, this);
}

// app/routes/materias.$name.tsx
var materias_name_exports = {};
__export(materias_name_exports, {
  action: () => action8,
  default: () => MateriasName,
  links: () => links4,
  loader: () => loader6
});
import { useState as useState18, useEffect as useEffect14 } from "react";
import { useActionData as useActionData13, useLoaderData as useLoaderData6 } from "@remix-run/react";

// app/components/document.tsx
import { useState as useState17 } from "react";
import { Link as Link8, useOutletContext as useOutletContext6 } from "@remix-run/react";
import { Fragment as Fragment8, jsxDEV as jsxDEV31 } from "react/jsx-dev-runtime";
function Document3({ document, setSelectedDocument, setShowFormDeletedMessage }) {
  let { Name, URL } = document, [showModalDocument, setShowModalDocument] = useState17(!1), context = useOutletContext6();
  return /* @__PURE__ */ jsxDEV31(Fragment8, { children: [
    showModalDocument && /* @__PURE__ */ jsxDEV31(
      ModalDocument,
      {
        URL,
        setShowModalDocument
      },
      void 0,
      !1,
      {
        fileName: "app/components/document.tsx",
        lineNumber: 16,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV31("div", { className: "item-list", children: [
      /* @__PURE__ */ jsxDEV31("div", { className: "item-main", children: [
        /* @__PURE__ */ jsxDEV31("img", { src: "/img/file-description.svg", alt: "user" }, void 0, !1, {
          fileName: "app/components/document.tsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV31("div", { className: "item-information", onClick: () => {
          setShowModalDocument(!0);
        }, children: /* @__PURE__ */ jsxDEV31("h4", { children: Name }, void 0, !1, {
          fileName: "app/components/document.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/document.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/document.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV31("div", { className: "actions", children: [
        /* @__PURE__ */ jsxDEV31(Link8, { to: `http://localhost:8000/api/document/download/${URL}`, children: /* @__PURE__ */ jsxDEV31(
          "img",
          {
            src: "/img/download.svg",
            alt: "square"
          },
          void 0,
          !1,
          {
            fileName: "app/components/document.tsx",
            lineNumber: 32,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/document.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV31(
          "img",
          {
            onClick: () => {
              setSelectedDocument(document), setShowFormDeletedMessage(!0);
            },
            src: "/img/trash.svg",
            alt: "trash"
          },
          void 0,
          !1,
          {
            fileName: "app/components/document.tsx",
            lineNumber: 37,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/document.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/document.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/document.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/styles/materias.css
var materias_default = "/build/_assets/materias-5LCOCYYQ.css";

// app/routes/materias.$name.tsx
import { jsxDEV as jsxDEV32 } from "react/jsx-dev-runtime";
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
  let loader13 = useLoaderData6(), actionResult = useActionData13(), [showFormDeletedMessage, setShowFormDeletedMessage] = useState18(!1), [showDeletedMessage, setShowDeletedMessage] = useState18(!1), [selectedDocument, setSelectedDocument] = useState18({}), { Name, Documents, CreatedDate, UpdatedDate } = loader13, [documents, setDocuments] = useState18([]);
  useEffect14(() => {
    switch (actionResult?.status) {
      case "DELETED":
        setShowFormDeletedMessage(!1), setShowDeletedMessage(!0);
        break;
      default:
        break;
    }
  }, [actionResult]), useEffect14(() => {
    setDocuments(loader13?.Documents);
  }, [loader13]);
  let searchDocument = (event) => {
    let value = event.target.value.toString().toLowerCase(), actualizedDocuments = loader13?.Documents.filter((document) => document.Name.toLowerCase().includes(value));
    setDocuments(actualizedDocuments);
  };
  return /* @__PURE__ */ jsxDEV32("div", { className: "container", children: [
    showFormDeletedMessage && /* @__PURE__ */ jsxDEV32(
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
      },
      void 0,
      !1,
      {
        fileName: "app/routes/materias.$name.tsx",
        lineNumber: 103,
        columnNumber: 7
      },
      this
    ),
    showDeletedMessage && /* @__PURE__ */ jsxDEV32(
      ModalMessage,
      {
        features: {
          text: "El documento ha sido eliminado exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowDeletedMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/materias.$name.tsx",
        lineNumber: 120,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV32("h1", { className: "heading", children: "Informacion de la materia" }, void 0, !1, {
      fileName: "app/routes/materias.$name.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV32("h2", { className: "subheading", children: "Gestiona aqui todos los documentos de la materia" }, void 0, !1, {
      fileName: "app/routes/materias.$name.tsx",
      lineNumber: 134,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV32("main", { className: "grid-1-2", children: [
      /* @__PURE__ */ jsxDEV32("section", { className: "content", children: [
        /* @__PURE__ */ jsxDEV32("h3", { children: "Informaci\xF3n general" }, void 0, !1, {
          fileName: "app/routes/materias.$name.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV32("div", { className: "data", children: [
          /* @__PURE__ */ jsxDEV32("div", { className: "item", children: [
            /* @__PURE__ */ jsxDEV32("p", { children: "Nombre:" }, void 0, !1, {
              fileName: "app/routes/materias.$name.tsx",
              lineNumber: 143,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV32("b", { children: Name }, void 0, !1, {
              fileName: "app/routes/materias.$name.tsx",
              lineNumber: 144,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/materias.$name.tsx",
            lineNumber: 142,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV32("div", { className: "item", children: [
            /* @__PURE__ */ jsxDEV32("p", { children: "Numero de documentos:" }, void 0, !1, {
              fileName: "app/routes/materias.$name.tsx",
              lineNumber: 148,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV32("b", { children: Documents.length }, void 0, !1, {
              fileName: "app/routes/materias.$name.tsx",
              lineNumber: 149,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/materias.$name.tsx",
            lineNumber: 147,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV32("div", { className: "item", children: [
            /* @__PURE__ */ jsxDEV32("p", { children: "Fecha de creaci\xF3n:" }, void 0, !1, {
              fileName: "app/routes/materias.$name.tsx",
              lineNumber: 153,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV32("b", { children: formattedDate(CreatedDate) }, void 0, !1, {
              fileName: "app/routes/materias.$name.tsx",
              lineNumber: 154,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/materias.$name.tsx",
            lineNumber: 152,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV32("div", { className: "item", children: [
            /* @__PURE__ */ jsxDEV32("p", { children: "Ultima modificaci\xF3n:" }, void 0, !1, {
              fileName: "app/routes/materias.$name.tsx",
              lineNumber: 158,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV32("b", { children: formattedDate(UpdatedDate) }, void 0, !1, {
              fileName: "app/routes/materias.$name.tsx",
              lineNumber: 159,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/materias.$name.tsx",
            lineNumber: 157,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/materias.$name.tsx",
          lineNumber: 141,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/materias.$name.tsx",
        lineNumber: 139,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV32("section", { className: "documents", children: [
        /* @__PURE__ */ jsxDEV32("h3", { className: "documents-title", children: "Documentos registrados" }, void 0, !1, {
          fileName: "app/routes/materias.$name.tsx",
          lineNumber: 165,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV32("div", { className: "search", children: [
          /* @__PURE__ */ jsxDEV32("img", { src: "/img/search.svg", alt: "search" }, void 0, !1, {
            fileName: "app/routes/materias.$name.tsx",
            lineNumber: 168,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV32(
            "input",
            {
              type: "text",
              placeholder: "Buscar...",
              onChange: (event) => {
                searchDocument(event);
              }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/materias.$name.tsx",
              lineNumber: 169,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/materias.$name.tsx",
          lineNumber: 167,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV32("div", { className: "list-scroll", children: Object.keys(loader13).length === 0 ? /* @__PURE__ */ jsxDEV32("div", { className: "center", children: /* @__PURE__ */ jsxDEV32(Spinner, {}, void 0, !1, {
          fileName: "app/routes/materias.$name.tsx",
          lineNumber: 181,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/materias.$name.tsx",
          lineNumber: 180,
          columnNumber: 13
        }, this) : documents.length === 0 ? /* @__PURE__ */ jsxDEV32("p", { className: "no-found", children: "Aun no hay documentos disponibles..." }, void 0, !1, {
          fileName: "app/routes/materias.$name.tsx",
          lineNumber: 186,
          columnNumber: 13
        }, this) : documents.map(
          (document) => /* @__PURE__ */ jsxDEV32(
            Document3,
            {
              document,
              setSelectedDocument,
              setShowFormDeletedMessage
            },
            document.DocumentID,
            !1,
            {
              fileName: "app/routes/materias.$name.tsx",
              lineNumber: 191,
              columnNumber: 13
            },
            this
          )
        ) }, void 0, !1, {
          fileName: "app/routes/materias.$name.tsx",
          lineNumber: 176,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/materias.$name.tsx",
        lineNumber: 164,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/materias.$name.tsx",
      lineNumber: 138,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/materias.$name.tsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}

// app/routes/clientes.$URL.tsx
var clientes_URL_exports = {};
__export(clientes_URL_exports, {
  action: () => action9,
  default: () => ClientesClientID,
  links: () => links5,
  loader: () => loader7
});
import { useEffect as useEffect16, useState as useState21 } from "react";
import { useActionData as useActionData14, useLoaderData as useLoaderData7 } from "@remix-run/react";

// app/components/selectDocument.tsx
import { useState as useState19 } from "react";
import { Link as Link9, useOutletContext as useOutletContext7 } from "@remix-run/react";
import { jsxDEV as jsxDEV33 } from "react/jsx-dev-runtime";
function SelectDocument({ document, setShowFormDeletedMessage, setSelectedDocument }) {
  let { Name, URL } = document, [showModalDocument, setShowModalDocument] = useState19(!1), context = useOutletContext7();
  return /* @__PURE__ */ jsxDEV33("div", { className: "subject-document", children: [
    showModalDocument && /* @__PURE__ */ jsxDEV33(
      ModalDocument,
      {
        URL,
        setShowModalDocument
      },
      void 0,
      !1,
      {
        fileName: "app/components/selectDocument.tsx",
        lineNumber: 16,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV33(
      "div",
      {
        className: "record-document",
        children: [
          /* @__PURE__ */ jsxDEV33("p", { onClick: () => {
            setShowModalDocument(!0);
          }, children: Name }, void 0, !1, {
            fileName: "app/components/selectDocument.tsx",
            lineNumber: 25,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV33("p", { className: "actions", children: [
            /* @__PURE__ */ jsxDEV33(Link9, { to: `http://localhost:8000/api/documents/download/${URL}`, children: /* @__PURE__ */ jsxDEV33(
              "img",
              {
                src: "/img/download.svg",
                alt: "trash"
              },
              void 0,
              !1,
              {
                fileName: "app/components/selectDocument.tsx",
                lineNumber: 28,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/selectDocument.tsx",
              lineNumber: 27,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV33(
              "img",
              {
                onClick: () => {
                  setSelectedDocument(document), setShowFormDeletedMessage(!0);
                },
                src: "/img/trash.svg",
                alt: "trash"
              },
              void 0,
              !1,
              {
                fileName: "app/components/selectDocument.tsx",
                lineNumber: 33,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/selectDocument.tsx",
            lineNumber: 26,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/selectDocument.tsx",
        lineNumber: 22,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/selectDocument.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/components/selectSubject.tsx
import { jsxDEV as jsxDEV34 } from "react/jsx-dev-runtime";
function SelectSubject({ subject, showSubject, setShowSubject, setShowFormDeletedMessage, setSelectedDocument }) {
  let { SubjectID, Name, Documents } = subject;
  return /* @__PURE__ */ jsxDEV34("div", { className: "record-subject", children: [
    /* @__PURE__ */ jsxDEV34(
      "div",
      {
        className: "subject-information",
        onClick: () => {
          setShowSubject(showSubject === SubjectID ? 0 : SubjectID);
        },
        children: [
          /* @__PURE__ */ jsxDEV34("p", { children: Name }, void 0, !1, {
            fileName: "app/components/selectSubject.tsx",
            lineNumber: 12,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV34("div", { children: /* @__PURE__ */ jsxDEV34(
            "img",
            {
              className: showSubject === SubjectID ? "active" : "",
              src: "/img/chevron-down.svg",
              alt: "arrow"
            },
            void 0,
            !1,
            {
              fileName: "app/components/selectSubject.tsx",
              lineNumber: 17,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/selectSubject.tsx",
            lineNumber: 16,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/selectSubject.tsx",
        lineNumber: 8,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV34("div", { className: `subject-documents ${showSubject === SubjectID ? "active" : ""}`, children: Documents?.length > 0 ? Documents.map(
      (document) => /* @__PURE__ */ jsxDEV34(
        SelectDocument,
        {
          document,
          setSelectedDocument,
          setShowFormDeletedMessage
        },
        document.DocumentID,
        !1,
        {
          fileName: "app/components/selectSubject.tsx",
          lineNumber: 28,
          columnNumber: 13
        },
        this
      )
    ) : /* @__PURE__ */ jsxDEV34("div", { className: "subject-document", children: /* @__PURE__ */ jsxDEV34("div", { className: "record-document", children: /* @__PURE__ */ jsxDEV34("p", { children: "Aun no hay documentos disponibles" }, void 0, !1, {
      fileName: "app/components/selectSubject.tsx",
      lineNumber: 38,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/selectSubject.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/selectSubject.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/selectSubject.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/selectSubject.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/formDocument.tsx
import { Form as Form11, useNavigation as useNavigation11 } from "@remix-run/react";
import { useEffect as useEffect15, useState as useState20 } from "react";
import { Fragment as Fragment9, jsxDEV as jsxDEV35 } from "react/jsx-dev-runtime";
function FormDocument({ method, errors, subjects, ClientID, UserID, setShowModalDocument }) {
  let navigation = useNavigation11(), [beVisible, setBevisible] = useState20(!1);
  return useEffect15(() => {
    setTimeout(() => {
      setBevisible(!0);
    }, 100);
  }, []), /* @__PURE__ */ jsxDEV35("div", { className: `modal ${beVisible ? "active" : ""}`, children: /* @__PURE__ */ jsxDEV35(Form11, { className: "form", method, encType: "multipart/form-data", children: [
    /* @__PURE__ */ jsxDEV35(
      CloseButton,
      {
        hideModal: () => {
          setBevisible(!1), setTimeout(() => {
            setShowModalDocument(!1);
          }, 300);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/formDocument.tsx",
        lineNumber: 27,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV35("h1", { className: "heading", children: "Agregar nuevo documento" }, void 0, !1, {
      fileName: "app/components/formDocument.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV35("h2", { className: "subheading", children: "Agrega toda la informaci\xF3n sobre el documento para agregarlo al expediente" }, void 0, !1, {
      fileName: "app/components/formDocument.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV35("br", {}, void 0, !1, {
      fileName: "app/components/formDocument.tsx",
      lineNumber: 32,
      columnNumber: 115
    }, this),
    /* @__PURE__ */ jsxDEV35("div", { className: "inputs", children: [
      /* @__PURE__ */ jsxDEV35("div", { className: "input", children: [
        /* @__PURE__ */ jsxDEV35("input", { name: "Client", type: "hidden", value: ClientID }, void 0, !1, {
          fileName: "app/components/formDocument.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV35("input", { name: "User", type: "hidden", value: UserID }, void 0, !1, {
          fileName: "app/components/formDocument.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV35("label", { htmlFor: "title", children: "Titulo" }, void 0, !1, {
          fileName: "app/components/formDocument.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV35(
          "input",
          {
            name: "Name",
            id: "title",
            type: "text",
            placeholder: "Escriba el titulo del documento..."
          },
          void 0,
          !1,
          {
            fileName: "app/components/formDocument.tsx",
            lineNumber: 40,
            columnNumber: 13
          },
          this
        ),
        errors?.name ? /* @__PURE__ */ jsxDEV35("p", { className: "error", children: errors.name }, void 0, !1, {
          fileName: "app/components/formDocument.tsx",
          lineNumber: 46,
          columnNumber: 30
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/components/formDocument.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV35("div", { className: "input", children: [
        /* @__PURE__ */ jsxDEV35("label", { htmlFor: "subject", children: "Materia" }, void 0, !1, {
          fileName: "app/components/formDocument.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV35(
          "select",
          {
            name: "Subject",
            id: "subject",
            children: subjects.length > 0 ? /* @__PURE__ */ jsxDEV35(Fragment9, { children: [
              /* @__PURE__ */ jsxDEV35("option", { value: -1, children: "-- Seleccione una materia --" }, void 0, !1, {
                fileName: "app/components/formDocument.tsx",
                lineNumber: 58,
                columnNumber: 17
              }, this),
              subjects.map(
                (item) => /* @__PURE__ */ jsxDEV35("option", { value: item.SubjectID, children: item.Name }, item.SubjectID, !1, {
                  fileName: "app/components/formDocument.tsx",
                  lineNumber: 60,
                  columnNumber: 19
                }, this)
              )
            ] }, void 0, !0, {
              fileName: "app/components/formDocument.tsx",
              lineNumber: 57,
              columnNumber: 17
            }, this) : ""
          },
          void 0,
          !1,
          {
            fileName: "app/components/formDocument.tsx",
            lineNumber: 51,
            columnNumber: 13
          },
          this
        ),
        errors?.subject ? /* @__PURE__ */ jsxDEV35("p", { className: "error", children: errors.subject }, void 0, !1, {
          fileName: "app/components/formDocument.tsx",
          lineNumber: 67,
          columnNumber: 33
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/components/formDocument.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV35("div", { className: "input", children: [
        /* @__PURE__ */ jsxDEV35("label", { htmlFor: "file", children: "Archivo" }, void 0, !1, {
          fileName: "app/components/formDocument.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV35(
          "input",
          {
            type: "file",
            name: "File",
            id: "file"
          },
          void 0,
          !1,
          {
            fileName: "app/components/formDocument.tsx",
            lineNumber: 72,
            columnNumber: 13
          },
          this
        ),
        errors?.file ? /* @__PURE__ */ jsxDEV35("p", { className: "error", children: errors.file }, void 0, !1, {
          fileName: "app/components/formDocument.tsx",
          lineNumber: 77,
          columnNumber: 30
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/components/formDocument.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/formDocument.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV35("div", { className: "loading", children: [
      /* @__PURE__ */ jsxDEV35("input", { className: "button", type: "submit", value: "Guardar" }, void 0, !1, {
        fileName: "app/components/formDocument.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this),
      navigation?.state !== "idle" && /* @__PURE__ */ jsxDEV35(Spinner, {}, void 0, !1, {
        fileName: "app/components/formDocument.tsx",
        lineNumber: 84,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/formDocument.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/formDocument.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/formDocument.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/clientes.$URL.tsx
import { jsxDEV as jsxDEV36 } from "react/jsx-dev-runtime";
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
  let { client, subjects, currentUser } = useLoaderData7(), actionResult = useActionData14(), { ClientID, Name, Identity, Email, Phone, Address, Documents } = client[0], [showSubject, setShowSubject] = useState21(!1), [showGeneralInformation, setShowGeneralInformation] = useState21(!1), [showInsertedMessage, setShowInsertedMessage] = useState21(!1), [showDeletedMessage, setShowDeletedMessage] = useState21(!1), [showFormDocument, setShowFormDocument] = useState21(!1), [showFormDeletedMessage, setShowFormDeletedMessage] = useState21(!1), [selectedDocument, setSelectedDocument] = useState21({}), subjectsNamed = {};
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
  }), useEffect16(() => {
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
  }, [actionResult]), /* @__PURE__ */ jsxDEV36("div", { className: "container", children: [
    showFormDocument && /* @__PURE__ */ jsxDEV36(
      FormDocument,
      {
        method: "POST",
        errors: actionResult?.errors,
        subjects,
        ClientID,
        UserID: currentUser?.UserID,
        setShowModalDocument: setShowFormDocument
      },
      void 0,
      !1,
      {
        fileName: "app/routes/clientes.$URL.tsx",
        lineNumber: 169,
        columnNumber: 7
      },
      this
    ),
    showFormDeletedMessage && /* @__PURE__ */ jsxDEV36(
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
      },
      void 0,
      !1,
      {
        fileName: "app/routes/clientes.$URL.tsx",
        lineNumber: 180,
        columnNumber: 7
      },
      this
    ),
    showInsertedMessage && /* @__PURE__ */ jsxDEV36(
      ModalMessage,
      {
        features: {
          text: "El documento ha sido agregado exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowInsertedMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/clientes.$URL.tsx",
        lineNumber: 197,
        columnNumber: 7
      },
      this
    ),
    showDeletedMessage && /* @__PURE__ */ jsxDEV36(
      ModalMessage,
      {
        features: {
          text: "El documento ha sido eliminado exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowDeletedMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/clientes.$URL.tsx",
        lineNumber: 211,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV36("h1", { className: "heading", children: "Informaci\xF3n del cliente" }, void 0, !1, {
      fileName: "app/routes/clientes.$URL.tsx",
      lineNumber: 224,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV36("h2", { className: "subheading", children: "Informaci\xF3n general y expediente completo del cliente" }, void 0, !1, {
      fileName: "app/routes/clientes.$URL.tsx",
      lineNumber: 225,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV36("main", { className: "grid-1-2", children: [
      /* @__PURE__ */ jsxDEV36("section", { className: "content", onClick: () => {
        setShowGeneralInformation(!showGeneralInformation);
      }, children: [
        /* @__PURE__ */ jsxDEV36("h3", { children: "Informaci\xF3n general" }, void 0, !1, {
          fileName: "app/routes/clientes.$URL.tsx",
          lineNumber: 229,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV36("div", { className: `data ${showGeneralInformation ? "active" : ""}`, children: [
          /* @__PURE__ */ jsxDEV36("div", { className: "item", children: [
            /* @__PURE__ */ jsxDEV36("p", { children: "Nombre:" }, void 0, !1, {
              fileName: "app/routes/clientes.$URL.tsx",
              lineNumber: 232,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV36("b", { children: Name }, void 0, !1, {
              fileName: "app/routes/clientes.$URL.tsx",
              lineNumber: 233,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/clientes.$URL.tsx",
            lineNumber: 231,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV36("div", { className: "item", children: [
            /* @__PURE__ */ jsxDEV36("p", { children: "Identidad:" }, void 0, !1, {
              fileName: "app/routes/clientes.$URL.tsx",
              lineNumber: 236,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV36("b", { children: Identity }, void 0, !1, {
              fileName: "app/routes/clientes.$URL.tsx",
              lineNumber: 237,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/clientes.$URL.tsx",
            lineNumber: 235,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV36("div", { className: "item", children: [
            /* @__PURE__ */ jsxDEV36("p", { children: "Correo Electr\xF3nico:" }, void 0, !1, {
              fileName: "app/routes/clientes.$URL.tsx",
              lineNumber: 240,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV36("b", { children: Email }, void 0, !1, {
              fileName: "app/routes/clientes.$URL.tsx",
              lineNumber: 241,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/clientes.$URL.tsx",
            lineNumber: 239,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV36("div", { className: "item", children: [
            /* @__PURE__ */ jsxDEV36("p", { children: "Telef\xF3no:" }, void 0, !1, {
              fileName: "app/routes/clientes.$URL.tsx",
              lineNumber: 244,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV36("b", { children: Phone }, void 0, !1, {
              fileName: "app/routes/clientes.$URL.tsx",
              lineNumber: 245,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/clientes.$URL.tsx",
            lineNumber: 243,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV36("div", { className: "item", children: [
            /* @__PURE__ */ jsxDEV36("p", { children: "Direcci\xF3n:" }, void 0, !1, {
              fileName: "app/routes/clientes.$URL.tsx",
              lineNumber: 248,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV36("b", { children: Address }, void 0, !1, {
              fileName: "app/routes/clientes.$URL.tsx",
              lineNumber: 249,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/clientes.$URL.tsx",
            lineNumber: 247,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/clientes.$URL.tsx",
          lineNumber: 230,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/clientes.$URL.tsx",
        lineNumber: 228,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV36("section", { className: "record", children: [
        /* @__PURE__ */ jsxDEV36("h3", { className: "record-title", children: "Expediente" }, void 0, !1, {
          fileName: "app/routes/clientes.$URL.tsx",
          lineNumber: 255,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV36("div", { className: "actions", children: /* @__PURE__ */ jsxDEV36(
          "button",
          {
            className: "button",
            onClick: () => {
              setShowFormDocument(!0);
            },
            type: "button",
            children: [
              /* @__PURE__ */ jsxDEV36("img", { src: "/img/add.svg", alt: "add" }, void 0, !1, {
                fileName: "app/routes/clientes.$URL.tsx",
                lineNumber: 263,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV36("p", { children: "Agregar documento" }, void 0, !1, {
                fileName: "app/routes/clientes.$URL.tsx",
                lineNumber: 264,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/clientes.$URL.tsx",
            lineNumber: 258,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/clientes.$URL.tsx",
          lineNumber: 257,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV36("div", { className: "list-scroll", children: record.length === 0 ? /* @__PURE__ */ jsxDEV36("p", { className: "no-found", children: "Aun no hay documentos disponibles..." }, void 0, !1, {
          fileName: "app/routes/clientes.$URL.tsx",
          lineNumber: 271,
          columnNumber: 13
        }, this) : record.map(
          (subject) => /* @__PURE__ */ jsxDEV36(
            SelectSubject,
            {
              subject,
              showSubject,
              setShowSubject,
              setShowFormDeletedMessage,
              setSelectedDocument
            },
            subject.SubjectID,
            !1,
            {
              fileName: "app/routes/clientes.$URL.tsx",
              lineNumber: 276,
              columnNumber: 13
            },
            this
          )
        ) }, void 0, !1, {
          fileName: "app/routes/clientes.$URL.tsx",
          lineNumber: 268,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/clientes.$URL.tsx",
        lineNumber: 254,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/clientes.$URL.tsx",
      lineNumber: 227,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/clientes.$URL.tsx",
    lineNumber: 167,
    columnNumber: 5
  }, this);
}

// app/routes/usuarios.$URL.tsx
var usuarios_URL_exports = {};
__export(usuarios_URL_exports, {
  default: () => UsuariosURL,
  links: () => links6,
  loader: () => loader8
});
import { useState as useState22 } from "react";
import { useLoaderData as useLoaderData8 } from "@remix-run/react";

// app/components/select-item.tsx
import { Link as Link10 } from "@remix-run/react";
import { Fragment as Fragment10, jsxDEV as jsxDEV37 } from "react/jsx-dev-runtime";
function SelectItem({ title, type = "URL", url = "", onClick, when, setWhen }) {
  return /* @__PURE__ */ jsxDEV37(Fragment10, { children: [
    when && /* @__PURE__ */ jsxDEV37(
      ModalDocument,
      {
        URL: url,
        setShowModalDocument: setWhen
      },
      void 0,
      !1,
      {
        fileName: "app/components/select-item.tsx",
        lineNumber: 10,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV37("div", { className: "subject-document", children: /* @__PURE__ */ jsxDEV37(
      "div",
      {
        className: "record-document",
        children: [
          /* @__PURE__ */ jsxDEV37("p", { onClick, children: title }, void 0, !1, {
            fileName: "app/components/select-item.tsx",
            lineNumber: 20,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV37("p", { className: "actions", children: type === "URL" && /* @__PURE__ */ jsxDEV37(Link10, { to: url, children: /* @__PURE__ */ jsxDEV37(
            "img",
            {
              src: "/img/go.svg",
              alt: "go"
            },
            void 0,
            !1,
            {
              fileName: "app/components/select-item.tsx",
              lineNumber: 24,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/select-item.tsx",
            lineNumber: 23,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/select-item.tsx",
            lineNumber: 21,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/select-item.tsx",
        lineNumber: 17,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/select-item.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/select-item.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/select.tsx
import { jsxDEV as jsxDEV38 } from "react/jsx-dev-runtime";
function Select({ id, title, items = [], urlPrefix, type, showSelect, setShowSelect }) {
  return /* @__PURE__ */ jsxDEV38("div", { className: "record-subject", children: [
    /* @__PURE__ */ jsxDEV38(
      "div",
      {
        className: "subject-information",
        onClick: () => {
          setShowSelect(showSelect === id ? 0 : id);
        },
        children: [
          /* @__PURE__ */ jsxDEV38("p", { children: title }, void 0, !1, {
            fileName: "app/components/select.tsx",
            lineNumber: 10,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV38("div", { children: /* @__PURE__ */ jsxDEV38(
            "img",
            {
              className: showSelect === id ? "active" : "",
              src: "/img/chevron-down.svg",
              alt: "arrow"
            },
            void 0,
            !1,
            {
              fileName: "app/components/select.tsx",
              lineNumber: 15,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/select.tsx",
            lineNumber: 14,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/select.tsx",
        lineNumber: 6,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV38("div", { className: `subject-documents ${showSelect === id ? "active" : ""}`, children: items?.length > 0 ? items.map(
      (item) => /* @__PURE__ */ jsxDEV38(
        SelectItem,
        {
          title: item.Name,
          type,
          url: item.DocumentID ? item.URL : `/${urlPrefix}/${item.URL}`
        },
        item.ClientID || item.DocumentID,
        !1,
        {
          fileName: "app/components/select.tsx",
          lineNumber: 26,
          columnNumber: 13
        },
        this
      )
    ) : /* @__PURE__ */ jsxDEV38("div", { className: "subject-document", children: /* @__PURE__ */ jsxDEV38("div", { className: "record-document", children: /* @__PURE__ */ jsxDEV38("p", { children: "Aun no hay elementos disponibles" }, void 0, !1, {
      fileName: "app/components/select.tsx",
      lineNumber: 36,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/select.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/select.tsx",
      lineNumber: 34,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/select.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/select.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/usuarios.$URL.tsx
import { jsxDEV as jsxDEV39 } from "react/jsx-dev-runtime";
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
  let [showClients, setShowClients] = useState22(), [showDocuments, setShowDocuments] = useState22(), loader13 = useLoaderData8(), { Name, Email, Phone, State, AccessLevel, Clients, Documents } = loader13?.User;
  return /* @__PURE__ */ jsxDEV39("div", { className: "container", children: [
    /* @__PURE__ */ jsxDEV39("h1", { className: "heading", children: "Informaci\xF3n del usuario" }, void 0, !1, {
      fileName: "app/routes/usuarios.$URL.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV39("h2", { className: "subheading", children: "Informaci\xF3n general y otros datos sobre el usuario" }, void 0, !1, {
      fileName: "app/routes/usuarios.$URL.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV39("main", { className: "grid-1-2", children: [
      /* @__PURE__ */ jsxDEV39("section", { className: "content", children: [
        /* @__PURE__ */ jsxDEV39("h3", { children: "Informaci\xF3n general" }, void 0, !1, {
          fileName: "app/routes/usuarios.$URL.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV39("div", { className: "data", children: [
          /* @__PURE__ */ jsxDEV39("div", { className: "item", children: [
            /* @__PURE__ */ jsxDEV39("p", { children: "Nombre:" }, void 0, !1, {
              fileName: "app/routes/usuarios.$URL.tsx",
              lineNumber: 60,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV39("b", { children: Name }, void 0, !1, {
              fileName: "app/routes/usuarios.$URL.tsx",
              lineNumber: 61,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/usuarios.$URL.tsx",
            lineNumber: 59,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV39("div", { className: "item", children: [
            /* @__PURE__ */ jsxDEV39("p", { children: "Correo Electr\xF3nico:" }, void 0, !1, {
              fileName: "app/routes/usuarios.$URL.tsx",
              lineNumber: 64,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV39("b", { children: Email }, void 0, !1, {
              fileName: "app/routes/usuarios.$URL.tsx",
              lineNumber: 65,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/usuarios.$URL.tsx",
            lineNumber: 63,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV39("div", { className: "item", children: [
            /* @__PURE__ */ jsxDEV39("p", { children: "Tel\xE9fono:" }, void 0, !1, {
              fileName: "app/routes/usuarios.$URL.tsx",
              lineNumber: 68,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV39("b", { children: Phone }, void 0, !1, {
              fileName: "app/routes/usuarios.$URL.tsx",
              lineNumber: 69,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/usuarios.$URL.tsx",
            lineNumber: 67,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV39("div", { className: "item", children: [
            /* @__PURE__ */ jsxDEV39("p", { children: "Nivel del acceso:" }, void 0, !1, {
              fileName: "app/routes/usuarios.$URL.tsx",
              lineNumber: 72,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV39("b", { children: {
              A: "Usuario administrador",
              R: "Usuario ra\xEDz",
              N: "Usuario com\xFAn"
            }[AccessLevel] }, void 0, !1, {
              fileName: "app/routes/usuarios.$URL.tsx",
              lineNumber: 73,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/usuarios.$URL.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV39("div", { className: "item", children: [
            /* @__PURE__ */ jsxDEV39("p", { children: "Estado actual:" }, void 0, !1, {
              fileName: "app/routes/usuarios.$URL.tsx",
              lineNumber: 76,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV39("div", { className: "state", children: [
              /* @__PURE__ */ jsxDEV39("div", { className: `point ${State === 1 ? "active" : ""}` }, void 0, !1, {
                fileName: "app/routes/usuarios.$URL.tsx",
                lineNumber: 78,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV39("b", { children: State === 1 ? "Habilitado" : "Inhabilitado" }, void 0, !1, {
                fileName: "app/routes/usuarios.$URL.tsx",
                lineNumber: 79,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/usuarios.$URL.tsx",
              lineNumber: 77,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/usuarios.$URL.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/usuarios.$URL.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/usuarios.$URL.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV39("section", { className: "record", children: [
        /* @__PURE__ */ jsxDEV39("h3", { className: "record-title users", children: "Otra informaci\xF3n" }, void 0, !1, {
          fileName: "app/routes/usuarios.$URL.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV39("div", { className: "list-scroll", children: [
          /* @__PURE__ */ jsxDEV39(
            Select,
            {
              id: 1,
              title: "Clientes",
              items: Clients,
              urlPrefix: "clientes",
              showSelect: showClients,
              setShowSelect: setShowClients
            },
            void 0,
            !1,
            {
              fileName: "app/routes/usuarios.$URL.tsx",
              lineNumber: 89,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV39(
            Select,
            {
              id: 2,
              title: "Documentos",
              items: Documents,
              type: "BUTTON",
              urlPrefix: "documentos",
              showSelect: showDocuments,
              setShowSelect: setShowDocuments
            },
            void 0,
            !1,
            {
              fileName: "app/routes/usuarios.$URL.tsx",
              lineNumber: 98,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/usuarios.$URL.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/usuarios.$URL.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/usuarios.$URL.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/usuarios.$URL.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

// app/routes/citas._index.tsx
var citas_index_exports = {};
__export(citas_index_exports, {
  action: () => action10,
  default: () => Citas,
  links: () => links7,
  loader: () => loader9
});
import { useEffect as useEffect18, useState as useState24 } from "react";
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
import { useEffect as useEffect17, useState as useState23 } from "react";
import { Form as Form12, useNavigation as useNavigation12 } from "@remix-run/react";
import { jsxDEV as jsxDEV40 } from "react/jsx-dev-runtime";
function FormDate({ currentUser = null, date = {}, clients = [], users = [], errors = {}, setShowFormDate }) {
  let dateID = date?.DateID, [issue, setIssue] = useState23(""), [datetime, setDatetime] = useState23(/* @__PURE__ */ new Date()), navigation = useNavigation12(), [beVisible, setBevisible] = useState23(!1);
  return useEffect17(() => {
    setTimeout(() => {
      setBevisible(!0);
    }, 100);
  }, []), /* @__PURE__ */ jsxDEV40("div", { className: `modal ${beVisible ? "active" : ""}`, children: /* @__PURE__ */ jsxDEV40(Form12, { action: "", method: "post", className: "form", children: [
    /* @__PURE__ */ jsxDEV40(
      CloseButton,
      {
        hideModal: () => {
          setBevisible(!1), setTimeout(() => {
            setShowFormDate(!1);
          }, 300);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/formDate.tsx",
        lineNumber: 33,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV40("h1", { className: "heading", children: "Agregar nueva cita" }, void 0, !1, {
      fileName: "app/components/formDate.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV40("p", { className: "subheading", children: "Agregue todos los datos para agendar una nueva cita" }, void 0, !1, {
      fileName: "app/components/formDate.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV40("br", {}, void 0, !1, {
      fileName: "app/components/formDate.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV40("div", { className: "inputs", children: [
      /* @__PURE__ */ jsxDEV40("input", { type: "hidden", value: dateID, name: "DateID" }, void 0, !1, {
        fileName: "app/components/formDate.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV40(
        Input,
        {
          title: "Asunto",
          name: "issue",
          type: "text",
          placeholder: "Asunto de la cita",
          value: issue,
          setValue: setIssue,
          error: errors?.issue
        },
        void 0,
        !1,
        {
          fileName: "app/components/formDate.tsx",
          lineNumber: 44,
          columnNumber: 11
        },
        this
      ),
      currentUser !== null ? /* @__PURE__ */ jsxDEV40("input", { type: "hidden", name: "user", value: currentUser.UserID }, void 0, !1, {
        fileName: "app/components/formDate.tsx",
        lineNumber: 56,
        columnNumber: 15
      }, this) : /* @__PURE__ */ jsxDEV40(
        Dropdownlist,
        {
          title: "Abogado a cargo",
          name: "user",
          items: users,
          error: errors?.user
        },
        void 0,
        !1,
        {
          fileName: "app/components/formDate.tsx",
          lineNumber: 58,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ jsxDEV40(
        Dropdownlist,
        {
          title: "Cliente",
          name: "client",
          items: clients,
          error: errors?.client
        },
        void 0,
        !1,
        {
          fileName: "app/components/formDate.tsx",
          lineNumber: 66,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV40(
        Input,
        {
          title: "Fecha y hora",
          name: "datetime",
          type: "datetime-local",
          value: datetime,
          setValue: setDatetime,
          error: errors?.datetime
        },
        void 0,
        !1,
        {
          fileName: "app/components/formDate.tsx",
          lineNumber: 73,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/formDate.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV40("div", { className: "loading", children: [
      /* @__PURE__ */ jsxDEV40("input", { type: "submit", className: "button", value: "Guardar" }, void 0, !1, {
        fileName: "app/components/formDate.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this),
      navigation?.state !== "idle" && /* @__PURE__ */ jsxDEV40(Spinner, {}, void 0, !1, {
        fileName: "app/components/formDate.tsx",
        lineNumber: 86,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/formDate.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/formDate.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/formDate.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/components/date.tsx
import { Form as Form13 } from "@remix-run/react";
import { jsxDEV as jsxDEV41 } from "react/jsx-dev-runtime";
function Date2({ index, date, selectedDate, setSelectedDate }) {
  let { DateID, Issue, DateTime, User: User2, Client: Client2, State } = date;
  return /* @__PURE__ */ jsxDEV41(
    "div",
    {
      className: `date ${selectedDate.DateID === DateID ? "active" : ""}`,
      id: index,
      onClick: () => {
        setSelectedDate(date?.DateID === selectedDate?.DateID ? {} : date);
      },
      children: [
        /* @__PURE__ */ jsxDEV41("div", { children: [
          /* @__PURE__ */ jsxDEV41("div", { className: "date-issue", children: [
            /* @__PURE__ */ jsxDEV41("span", { children: "Asunto" }, void 0, !1, {
              fileName: "app/components/date.tsx",
              lineNumber: 14,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV41("p", { children: Issue }, void 0, !1, {
              fileName: "app/components/date.tsx",
              lineNumber: 15,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/date.tsx",
            lineNumber: 13,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV41("div", { className: "information", children: [
            /* @__PURE__ */ jsxDEV41("div", { className: "information-item", children: [
              /* @__PURE__ */ jsxDEV41("span", { children: "Encargado" }, void 0, !1, {
                fileName: "app/components/date.tsx",
                lineNumber: 20,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV41("p", { children: User2?.Name }, void 0, !1, {
                fileName: "app/components/date.tsx",
                lineNumber: 21,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/date.tsx",
              lineNumber: 19,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV41("div", { className: "information-item", children: [
              /* @__PURE__ */ jsxDEV41("span", { children: "Cliente" }, void 0, !1, {
                fileName: "app/components/date.tsx",
                lineNumber: 25,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV41("p", { children: Client2?.Name }, void 0, !1, {
                fileName: "app/components/date.tsx",
                lineNumber: 26,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/date.tsx",
              lineNumber: 24,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV41("div", { className: "information-item", children: [
              /* @__PURE__ */ jsxDEV41("span", { children: "Fecha" }, void 0, !1, {
                fileName: "app/components/date.tsx",
                lineNumber: 30,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV41("p", { children: formattedDate(DateTime).split(",")[0] }, void 0, !1, {
                fileName: "app/components/date.tsx",
                lineNumber: 31,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/date.tsx",
              lineNumber: 29,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV41("div", { className: "information-item", children: [
              /* @__PURE__ */ jsxDEV41("span", { children: "Hora" }, void 0, !1, {
                fileName: "app/components/date.tsx",
                lineNumber: 35,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV41("p", { children: formattedDate(DateTime).split(",")[1] }, void 0, !1, {
                fileName: "app/components/date.tsx",
                lineNumber: 36,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/date.tsx",
              lineNumber: 34,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV41("div", { className: "information-item", children: [
              /* @__PURE__ */ jsxDEV41("span", { children: "Estado actual" }, void 0, !1, {
                fileName: "app/components/date.tsx",
                lineNumber: 40,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV41("div", { className: "state", children: [
                /* @__PURE__ */ jsxDEV41("div", { className: `point ${State === "P" ? "" : "active"}` }, void 0, !1, {
                  fileName: "app/components/date.tsx",
                  lineNumber: 42,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV41("p", { children: State === "P" ? "Pendiente" : "Realizada" }, void 0, !1, {
                  fileName: "app/components/date.tsx",
                  lineNumber: 43,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/date.tsx",
                lineNumber: 41,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/date.tsx",
              lineNumber: 39,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/date.tsx",
            lineNumber: 18,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/date.tsx",
          lineNumber: 12,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV41(Form13, { method: "PUT", children: [
          /* @__PURE__ */ jsxDEV41("input", { type: "hidden", name: "DateID", value: DateID }, void 0, !1, {
            fileName: "app/components/date.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV41("input", { type: "hidden", name: "State", value: State }, void 0, !1, {
            fileName: "app/components/date.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV41(
            "input",
            {
              type: "submit",
              value: `Marcar como ${State === "P" ? "realizada" : "pendiente"}`,
              className: "button center"
            },
            void 0,
            !1,
            {
              fileName: "app/components/date.tsx",
              lineNumber: 53,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/date.tsx",
          lineNumber: 49,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/date.tsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  );
}

// app/styles/citas.css
var citas_default = "/build/_assets/citas-V6Z3EZT2.css";

// app/routes/citas._index.tsx
import { Fragment as Fragment11, jsxDEV as jsxDEV42 } from "react/jsx-dev-runtime";
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
  let action12 = useActionData15(), loader13 = useLoaderData9(), [showInsertedMessage, setShowInsertedMessage] = useState24(!1), [showUpdatedMessage, setShowUpdatedMessage] = useState24(!1), [showFormDate, setShowFormDate] = useState24(!1), [showDeleteMessage, setShowDeleteMessage] = useState24(!1), [showDeletedMessage, setShowDeletedMessage] = useState24(!1), [showErrorDeleteMessage, setShowErrorDeleteMessage] = useState24(!1), [dateType, setDateType] = useState24(""), [dateTime, setDateTime] = useState24(getCurrentDate()), [issue, setIssue] = useState24(""), [selectedDate, setSelectedDate] = useState24({}), [dates, setDates] = useState24([]);
  useEffect18(() => {
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
  }, [action12]), useEffect18(() => {
    setDates(loader13?.dates);
  }, [loader13]), useEffect18(() => {
    dateType.length > 0 ? setDates(loader13?.dates.filter((date) => date.State === dateType && date.DateTime.split("T")[0] === dateTime && date.Issue.toLowerCase().includes(issue))) : setDates(loader13?.dates.filter((date) => date.DateTime.split("T")[0] === dateTime));
  }, [dateType, dateTime, issue, loader13?.dates]);
  function getCurrentDate() {
    return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  function showEliminatedDate() {
    Object.keys(selectedDate).length === 0 || !selectedDate?.DateID ? setShowErrorDeleteMessage(!0) : setShowDeleteMessage(!0);
  }
  return /* @__PURE__ */ jsxDEV42(Fragment11, { children: [
    showFormDate && /* @__PURE__ */ jsxDEV42(
      FormDate,
      {
        currentUser: loader13?.currentUser.AccessLevel !== "N" ? null : loader13?.currentUser,
        clients: loader13?.clients,
        users: loader13?.users,
        setShowFormDate,
        errors: action12?.ERRORS
      },
      void 0,
      !1,
      {
        fileName: "app/routes/citas._index.tsx",
        lineNumber: 189,
        columnNumber: 7
      },
      this
    ),
    showInsertedMessage && /* @__PURE__ */ jsxDEV42(
      ModalMessage,
      {
        features: {
          text: "La cita ha sido agregada exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowInsertedMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/citas._index.tsx",
        lineNumber: 199,
        columnNumber: 7
      },
      this
    ),
    showDeleteMessage && /* @__PURE__ */ jsxDEV42(
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
      },
      void 0,
      !1,
      {
        fileName: "app/routes/citas._index.tsx",
        lineNumber: 211,
        columnNumber: 7
      },
      this
    ),
    showDeletedMessage && /* @__PURE__ */ jsxDEV42(
      ModalMessage,
      {
        features: {
          text: "La cita ha sido eliminada exitosamente",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowDeletedMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/citas._index.tsx",
        lineNumber: 228,
        columnNumber: 7
      },
      this
    ),
    showErrorDeleteMessage && /* @__PURE__ */ jsxDEV42(
      ModalMessage,
      {
        features: {
          text: "Debe seleccionar una cita para ser eliminada",
          isOkCancel: !1,
          indexIcon: 1,
          data: null
        },
        setVisibleMessage: setShowErrorDeleteMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/citas._index.tsx",
        lineNumber: 240,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV42("div", { className: "container", children: [
      /* @__PURE__ */ jsxDEV42("h1", { className: "heading", children: "Citas" }, void 0, !1, {
        fileName: "app/routes/citas._index.tsx",
        lineNumber: 252,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV42("p", { className: "subheading", children: "Aqu\xED veras todas las citas" }, void 0, !1, {
        fileName: "app/routes/citas._index.tsx",
        lineNumber: 253,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV42("div", { className: "top-options", children: [
        /* @__PURE__ */ jsxDEV42("div", { className: "search", children: [
          /* @__PURE__ */ jsxDEV42("img", { src: "/img/search.svg", alt: "search" }, void 0, !1, {
            fileName: "app/routes/citas._index.tsx",
            lineNumber: 257,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV42(
            "input",
            {
              type: "text",
              placeholder: "Buscar",
              value: issue,
              onChange: (event) => {
                setIssue(event.target.value);
              }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/citas._index.tsx",
              lineNumber: 258,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/citas._index.tsx",
          lineNumber: 256,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV42("div", { className: "input", children: /* @__PURE__ */ jsxDEV42("select", { name: "state", id: "state", onChange: (evt) => {
          setDateType(evt.target.value);
        }, children: [
          /* @__PURE__ */ jsxDEV42("option", { value: "", children: "-- Todas las citas --" }, void 0, !1, {
            fileName: "app/routes/citas._index.tsx",
            lineNumber: 271,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV42("option", { value: "P", children: "Pendiente" }, void 0, !1, {
            fileName: "app/routes/citas._index.tsx",
            lineNumber: 272,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV42("option", { value: "R", children: "Realizada" }, void 0, !1, {
            fileName: "app/routes/citas._index.tsx",
            lineNumber: 273,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/citas._index.tsx",
          lineNumber: 267,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/citas._index.tsx",
          lineNumber: 266,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV42("div", { className: "input", children: /* @__PURE__ */ jsxDEV42("input", { type: "date", value: dateTime.toString(), onChange: (evt) => {
          setDateTime(evt.target.value);
        } }, void 0, !1, {
          fileName: "app/routes/citas._index.tsx",
          lineNumber: 278,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/citas._index.tsx",
          lineNumber: 277,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/citas._index.tsx",
        lineNumber: 255,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV42("div", { className: "actions", children: [
        /* @__PURE__ */ jsxDEV42(
          "button",
          {
            className: "button",
            onClick: () => {
              setShowFormDate(!0);
            },
            type: "button",
            children: [
              /* @__PURE__ */ jsxDEV42("img", { src: "/img/add.svg", alt: "add" }, void 0, !1, {
                fileName: "app/routes/citas._index.tsx",
                lineNumber: 291,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV42("p", { children: "Agregar" }, void 0, !1, {
                fileName: "app/routes/citas._index.tsx",
                lineNumber: 292,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/citas._index.tsx",
            lineNumber: 286,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV42(
          "button",
          {
            className: "button",
            onClick: () => {
              showEliminatedDate();
            },
            type: "button",
            value: "Eliminar",
            children: [
              /* @__PURE__ */ jsxDEV42("img", { src: "/img/x.svg", alt: "add" }, void 0, !1, {
                fileName: "app/routes/citas._index.tsx",
                lineNumber: 301,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV42("p", { children: "Eliminar" }, void 0, !1, {
                fileName: "app/routes/citas._index.tsx",
                lineNumber: 302,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/citas._index.tsx",
            lineNumber: 295,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/citas._index.tsx",
        lineNumber: 285,
        columnNumber: 9
      }, this),
      dates.length > 0 ? /* @__PURE__ */ jsxDEV42("div", { className: "list-scroll", children: /* @__PURE__ */ jsxDEV42("section", { className: "dates", children: dates.map(
        (date, index) => /* @__PURE__ */ jsxDEV42(
          Date2,
          {
            index,
            date,
            selectedDate,
            setSelectedDate
          },
          index,
          !1,
          {
            fileName: "app/routes/citas._index.tsx",
            lineNumber: 312,
            columnNumber: 13
          },
          this
        )
      ) }, void 0, !1, {
        fileName: "app/routes/citas._index.tsx",
        lineNumber: 309,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/citas._index.tsx",
        lineNumber: 308,
        columnNumber: 9
      }, this) : loader13?.dates.length > 0 ? /* @__PURE__ */ jsxDEV42("p", { className: "no-found", children: "No se encontraron citas" }, void 0, !1, {
        fileName: "app/routes/citas._index.tsx",
        lineNumber: 326,
        columnNumber: 9
      }, this) : /* @__PURE__ */ jsxDEV42("p", { className: "no-found", children: "Aun no hay citas registradas" }, void 0, !1, {
        fileName: "app/routes/citas._index.tsx",
        lineNumber: 328,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/citas._index.tsx",
      lineNumber: 251,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/citas._index.tsx",
    lineNumber: 187,
    columnNumber: 5
  }, this);
}

// app/routes/nosotros.tsx
var nosotros_exports = {};
__export(nosotros_exports, {
  default: () => Nosotros,
  links: () => links8,
  loader: () => loader10
});

// app/components/logo.tsx
import { jsxDEV as jsxDEV43 } from "react/jsx-dev-runtime";
function Logo({}) {
  return /* @__PURE__ */ jsxDEV43("div", { className: "brand", children: [
    /* @__PURE__ */ jsxDEV43("p", { className: "group-text", children: "Grupo" }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV43("div", { className: "grafic" }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV43("div", { className: "names", children: [
      /* @__PURE__ */ jsxDEV43("p", { className: "names-text", children: "Sosa" }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV43("p", { className: "names-text", children: "Morales" }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/logo.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV43("div", { className: "grafic" }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV43("div", { className: "subtitle", children: [
      /* @__PURE__ */ jsxDEV43("p", { className: "subtitle-text", children: "Notaria" }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV43("p", { className: "subtitle-text", children: "-" }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV43("p", { className: "subtitle-text", children: "Abogacia" }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV43("p", { className: "subtitle-text", children: "-" }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV43("p", { className: "subtitle-text", children: "Asesoria" }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV43("p", { className: "subtitle-text", children: "-" }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV43("p", { className: "subtitle-text", children: "Bienes raices" }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/logo.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/logo.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/styles/nosotros.css
var nosotros_default = "/build/_assets/nosotros-NN4PDEMO.css";

// app/routes/nosotros.tsx
import { jsxDEV as jsxDEV44 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV44("div", { className: "container about-us", children: [
    /* @__PURE__ */ jsxDEV44(Logo, {}, void 0, !1, {
      fileName: "app/routes/nosotros.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV44("div", { className: "information", children: [
      /* @__PURE__ */ jsxDEV44("h1", { className: "heading", children: "Descubre mas sobre nosotros" }, void 0, !1, {
        fileName: "app/routes/nosotros.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV44("h3", { className: "subheading", children: "\xBFQuienes somos?" }, void 0, !1, {
        fileName: "app/routes/nosotros.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV44("p", { children: "Bienvenido a Grupo Sosa Morales, un distinguido despacho de abogados con una s\xF3lida presencia tanto en la ciudad de Tela como en el din\xE1mico escenario legal de Estados Unidos. En Grupo Sosa Morales, nos enorgullece ofrecer servicios legales integrales y personalizados que se adaptan a las necesidades de nuestros clientes. Nuestro equipo de abogados altamente calificados combina la experiencia local en la comunidad de Tela con un profundo conocimiento de las complejidades legales internacionales, brindando asesoramiento experto y soluciones efectivas. Con un compromiso inquebrantable con la excelencia, nos esforzamos por ser la primera opci\xF3n para aquellos que buscan representaci\xF3n legal confiable, ya sea en asuntos locales o transnacionales. En Grupo Sosa Morales, no solo defendemos sus derechos; construimos relaciones duraderas basadas en la confianza y la dedicaci\xF3n a la excelencia jur\xEDdica." }, void 0, !1, {
        fileName: "app/routes/nosotros.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/nosotros.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/nosotros.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  links: () => links9,
  loader: () => loader11,
  meta: () => meta2
});
import { useEffect as useEffect19 } from "react";
import { Link as Link12, useNavigate as useNavigate3 } from "@remix-run/react";

// app/styles/inicio.css
var inicio_default = "/build/_assets/inicio-6XCT2VBV.css";

// app/routes/_index.tsx
import { jsxDEV as jsxDEV45 } from "react/jsx-dev-runtime";
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
  return useEffect19(() => {
    localStorage.getItem("TOKEN") || navigate("/login");
  }, []), /* @__PURE__ */ jsxDEV45("div", { className: "container home", children: [
    /* @__PURE__ */ jsxDEV45(Logo, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV45("div", { className: "panels", children: [
      /* @__PURE__ */ jsxDEV45(Link12, { to: "/clientes", className: "panel", children: [
        /* @__PURE__ */ jsxDEV45("img", { src: "/img/users-group.svg", alt: "user-group" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV45("h4", { children: "Clientes" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV45("p", { children: "Gestiona tus clientes desde aqui." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV45(Link12, { to: "/citas", className: "panel", children: [
        /* @__PURE__ */ jsxDEV45("img", { src: "/img/calendar-event.svg", alt: "calendar" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV45("h4", { children: "Citas" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV45("p", { children: "Gestiona todas tus citas desde aqui." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV45(Link12, { to: "/materias", className: "panel", children: [
        /* @__PURE__ */ jsxDEV45("img", { src: "/img/category.svg", alt: "category" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV45("h4", { children: "Materias" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV45("p", { children: "Busca documentos de clientes seg\xFAn las materias disponibles" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV45(Link12, { to: "/documentacioninterna", className: "panel", children: [
        /* @__PURE__ */ jsxDEV45("img", { src: "/img/file-description.svg", alt: "category-2" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV45("h4", { children: "Documentaci\xF3n interna" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV45("p", { children: "Gestiona tu documentaci\xF3n interna" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV45(Link12, { to: "/nosotros", className: "panel", children: [
        /* @__PURE__ */ jsxDEV45("img", { src: "/img/info-octagon.svg", alt: "info" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV45("h4", { children: "A cerca de" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV45("p", { children: "Conoce mas sobre el software." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action11,
  default: () => Login,
  loader: () => loader12
});
import { useState as useState25 } from "react";
import { Form as Form14, Link as Link13, useLoaderData as useLoaderData10, useNavigation as useNavigation13 } from "@remix-run/react";
import { json } from "@remix-run/node";
import { jsxDEV as jsxDEV46 } from "react/jsx-dev-runtime";
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
  let navigation = useNavigation13(), loader13 = useLoaderData10(), [email, setEmail] = useState25(""), [password, setPassword] = useState25("");
  return /* @__PURE__ */ jsxDEV46("main", { className: "login-modal", children: /* @__PURE__ */ jsxDEV46(Form14, { className: "form", method: "POST", children: [
    /* @__PURE__ */ jsxDEV46("h1", { className: "heading", children: "Iniciar sesi\xF3n" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV46("h2", { className: "subheading", children: "Llena todos los campos para iniciar sesi\xF3n" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV46("br", {}, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV46("div", { className: "inputs", children: [
      /* @__PURE__ */ jsxDEV46(
        Input,
        {
          title: "Nombre de usuario o correo electronico",
          name: "email",
          placeholder: "Tu correo electronico",
          value: email,
          setValue: setEmail,
          error: ""
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 48,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV46(
        Input,
        {
          title: "Contrase\xF1a",
          name: "password",
          placeholder: "Tu contrase\xF1a",
          type: "password",
          value: password,
          setValue: setPassword,
          error: ""
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 57,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV46("div", { className: "account-options", children: [
        /* @__PURE__ */ jsxDEV46(Link13, { to: "/create-account", className: "option", children: "\xBFNo tienes una cuenta? Crea una" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV46(Link13, { to: "/forgot-password", className: "option", children: "\xBFOlvidaste tu contrase\xF1a? Recuperala" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV46("p", { className: "error", children: loader13?.error?.message }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV46("div", { className: "loading", children: [
        /* @__PURE__ */ jsxDEV46("input", { className: "button", type: "submit", value: "Iniciar Sesi\xF3n" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this),
        navigation?.state !== "idle" && /* @__PURE__ */ jsxDEV46(Spinner, {}, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-QHANBB4V.js", imports: ["/build/_shared/chunk-OAPPX4FA.js", "/build/_shared/chunk-U3RL2HL2.js", "/build/_shared/chunk-WEAPBHQG.js", "/build/_shared/chunk-CDMYZBNR.js", "/build/_shared/chunk-JR22VO6P.js", "/build/_shared/chunk-7PHB3BFD.js", "/build/_shared/chunk-CJ4MY3PQ.js", "/build/_shared/chunk-PZDJHGND.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-GRU5PVPG.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-J7BA2YZA.js", imports: ["/build/_shared/chunk-RTZHPADD.js", "/build/_shared/chunk-56TZOM4G.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/citas._index": { id: "routes/citas._index", parentId: "root", path: "citas", index: !0, caseSensitive: void 0, module: "/build/routes/citas._index-6VBQFDX5.js", imports: ["/build/_shared/chunk-XSG5LB2M.js", "/build/_shared/chunk-LA3NFKUD.js", "/build/_shared/chunk-A2ZPQFUT.js", "/build/_shared/chunk-EKX5GQZ6.js", "/build/_shared/chunk-5EQGMEKX.js", "/build/_shared/chunk-56TZOM4G.js", "/build/_shared/chunk-FFP3OEOV.js", "/build/_shared/chunk-OUOOIR2A.js", "/build/_shared/chunk-7LZIAPLR.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/clientes.$URL": { id: "routes/clientes.$URL", parentId: "root", path: "clientes/:URL", index: void 0, caseSensitive: void 0, module: "/build/routes/clientes.$URL-MI2NKUEU.js", imports: ["/build/_shared/chunk-LISDCSP7.js", "/build/_shared/chunk-T56LUI4W.js", "/build/_shared/chunk-XSG5LB2M.js", "/build/_shared/chunk-RSIVJDSZ.js", "/build/_shared/chunk-5HAHJGGN.js", "/build/_shared/chunk-EKX5GQZ6.js", "/build/_shared/chunk-5EQGMEKX.js", "/build/_shared/chunk-56TZOM4G.js", "/build/_shared/chunk-7LZIAPLR.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/clientes._index": { id: "routes/clientes._index", parentId: "root", path: "clientes", index: !0, caseSensitive: void 0, module: "/build/routes/clientes._index-2XKZTHQH.js", imports: ["/build/_shared/chunk-T56LUI4W.js", "/build/_shared/chunk-XSG5LB2M.js", "/build/_shared/chunk-5HAHJGGN.js", "/build/_shared/chunk-EKX5GQZ6.js", "/build/_shared/chunk-5EQGMEKX.js", "/build/_shared/chunk-56TZOM4G.js", "/build/_shared/chunk-FFP3OEOV.js", "/build/_shared/chunk-7LZIAPLR.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/create-account": { id: "routes/create-account", parentId: "root", path: "create-account", index: void 0, caseSensitive: void 0, module: "/build/routes/create-account-S2644V5L.js", imports: ["/build/_shared/chunk-FFP3OEOV.js", "/build/_shared/chunk-OUOOIR2A.js", "/build/_shared/chunk-7LZIAPLR.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/documentacioninterna": { id: "routes/documentacioninterna", parentId: "root", path: "documentacioninterna", index: void 0, caseSensitive: void 0, module: "/build/routes/documentacioninterna-BXP6WQR2.js", imports: ["/build/_shared/chunk-LISDCSP7.js", "/build/_shared/chunk-EKX5GQZ6.js", "/build/_shared/chunk-5EQGMEKX.js", "/build/_shared/chunk-56TZOM4G.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/forgot-password": { id: "routes/forgot-password", parentId: "root", path: "forgot-password", index: void 0, caseSensitive: void 0, module: "/build/routes/forgot-password-GWMCW5TM.js", imports: ["/build/_shared/chunk-A2ZPQFUT.js", "/build/_shared/chunk-FFP3OEOV.js", "/build/_shared/chunk-OUOOIR2A.js", "/build/_shared/chunk-7LZIAPLR.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-YIP32EID.js", imports: ["/build/_shared/chunk-56TZOM4G.js", "/build/_shared/chunk-FFP3OEOV.js", "/build/_shared/chunk-7LZIAPLR.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/materias.$name": { id: "routes/materias.$name", parentId: "root", path: "materias/:name", index: void 0, caseSensitive: void 0, module: "/build/routes/materias.$name-RIKJZVR4.js", imports: ["/build/_shared/chunk-LISDCSP7.js", "/build/_shared/chunk-T56LUI4W.js", "/build/_shared/chunk-RSIVJDSZ.js", "/build/_shared/chunk-5HAHJGGN.js", "/build/_shared/chunk-A2ZPQFUT.js", "/build/_shared/chunk-EKX5GQZ6.js", "/build/_shared/chunk-5EQGMEKX.js", "/build/_shared/chunk-56TZOM4G.js", "/build/_shared/chunk-7LZIAPLR.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/materias._index": { id: "routes/materias._index", parentId: "root", path: "materias", index: !0, caseSensitive: void 0, module: "/build/routes/materias._index-3F2WHN6R.js", imports: ["/build/_shared/chunk-RSIVJDSZ.js", "/build/_shared/chunk-5HAHJGGN.js", "/build/_shared/chunk-EKX5GQZ6.js", "/build/_shared/chunk-5EQGMEKX.js", "/build/_shared/chunk-56TZOM4G.js", "/build/_shared/chunk-7LZIAPLR.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/nosotros": { id: "routes/nosotros", parentId: "root", path: "nosotros", index: void 0, caseSensitive: void 0, module: "/build/routes/nosotros-P52KMY4D.js", imports: ["/build/_shared/chunk-RTZHPADD.js", "/build/_shared/chunk-56TZOM4G.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/usuarios.$URL": { id: "routes/usuarios.$URL", parentId: "root", path: "usuarios/:URL", index: void 0, caseSensitive: void 0, module: "/build/routes/usuarios.$URL-JBEE6RNT.js", imports: ["/build/_shared/chunk-LISDCSP7.js", "/build/_shared/chunk-XSG5LB2M.js", "/build/_shared/chunk-5HAHJGGN.js", "/build/_shared/chunk-5EQGMEKX.js", "/build/_shared/chunk-OUOOIR2A.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/usuarios._index": { id: "routes/usuarios._index", parentId: "root", path: "usuarios", index: !0, caseSensitive: void 0, module: "/build/routes/usuarios._index-PA7XZ7XG.js", imports: ["/build/_shared/chunk-LA3NFKUD.js", "/build/_shared/chunk-A2ZPQFUT.js", "/build/_shared/chunk-EKX5GQZ6.js", "/build/_shared/chunk-5EQGMEKX.js", "/build/_shared/chunk-56TZOM4G.js", "/build/_shared/chunk-OUOOIR2A.js", "/build/_shared/chunk-7LZIAPLR.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "18cbbe4a", hmr: { runtime: "/build/_shared\\chunk-CDMYZBNR.js", timestamp: 1708760295733 }, url: "/build/manifest-18CBBE4A.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
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
//# sourceMappingURL=index.js.map
