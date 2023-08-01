var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
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
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 47,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
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
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
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

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});

// app/components/navegacion.jsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Navegacion({}) {
  let { pathname } = (0, import_react2.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "logo", children: "Logo" }, void 0, !1, {
      fileName: "app/components/navegacion.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "nav", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        import_react2.Link,
        {
          className: `link ${pathname === "/" ? "active" : ""}`,
          to: "/",
          children: "Inicio"
        },
        void 0,
        !1,
        {
          fileName: "app/components/navegacion.jsx",
          lineNumber: 13,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        import_react2.Link,
        {
          className: `link ${pathname.includes("/clientes") ? "active" : ""}`,
          to: "/clientes",
          children: "Clientes"
        },
        void 0,
        !1,
        {
          fileName: "app/components/navegacion.jsx",
          lineNumber: 18,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        import_react2.Link,
        {
          className: `link ${pathname.includes("/materias") ? "active" : ""}`,
          to: "/materias",
          children: "Materias"
        },
        void 0,
        !1,
        {
          fileName: "app/components/navegacion.jsx",
          lineNumber: 23,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        import_react2.Link,
        {
          className: `link ${pathname === "/documentacioninterna" ? "active" : ""}`,
          to: "/documentacioninterna",
          children: "Documentaci\xF3n interna"
        },
        void 0,
        !1,
        {
          fileName: "app/components/navegacion.jsx",
          lineNumber: 28,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/navegacion.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navegacion.jsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/navegacion.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/styles/normalize.css
var normalize_default = "/build/_assets/normalize-H7PQAZ5S.css";

// app/styles/global.css
var global_default = "/build/_assets/global-RLRVN3L2.css";

// node_modules/react-pdf/dist/esm/Page/TextLayer.css
var TextLayer_default = "/build/_assets/TextLayer-7XZ4NHUX.css";

// node_modules/react-pdf/dist/esm/Page/AnnotationLayer.css
var AnnotationLayer_default = "/build/_assets/AnnotationLayer-UJYPOUOS.css";

// app/root.jsx
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
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
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 70,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "es", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 79,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 80,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 81,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 78,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navegacion, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 85,
        columnNumber: 17
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 87,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 88,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 84,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react3.useRouteError)();
  return (0, import_react3.isRouteErrorResponse)(error) ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "heading", children: "Error" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 101,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "subheading", children: "Error: 404 pagina no encontrado" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 102,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 100,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 99,
    columnNumber: 7
  }, this) : error instanceof Error ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "heading", children: "Error" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 110,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "subheading", children: error.name.toString() === "FetchError" ? "No se ha podido establecer coneccion con el servior" : "Ha sucedido un error inesperado" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 111,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 109,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 108,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Unknown Error" }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 121,
    columnNumber: 12
  }, this);
}

// app/routes/documentacioninterna.jsx
var documentacioninterna_exports = {};
__export(documentacioninterna_exports, {
  default: () => Documentacioninterna
});
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Documentacioninterna() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "heading", children: "Documentaci\xF3n interna" }, void 0, !1, {
      fileName: "app/routes/documentacioninterna.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "subheading", children: "Gestiona toda la documentacion interna del buffete" }, void 0, !1, {
      fileName: "app/routes/documentacioninterna.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "search", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: "/img/search.svg", alt: "search" }, void 0, !1, {
        fileName: "app/routes/documentacioninterna.jsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "input",
        {
          type: "text",
          placeholder: "Buscar"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/documentacioninterna.jsx",
          lineNumber: 11,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/documentacioninterna.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/documentacioninterna.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/clientes._index.jsx
var clientes_index_exports = {};
__export(clientes_index_exports, {
  action: () => action,
  default: () => Clientes,
  links: () => links2,
  loader: () => loader
});
var import_react8 = require("react"), import_react9 = require("@remix-run/react");

// app/components/formClient.jsx
var import_react4 = require("react"), import_react5 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function FormClient({ method, errors, client = {}, setVisibleFormClient }) {
  let navigation = (0, import_react5.useNavigation)(), ClientID = client == null ? void 0 : client.ClientID, [name, setName] = (0, import_react4.useState)((client == null ? void 0 : client.Name) || ""), [identity, setIdentity] = (0, import_react4.useState)((client == null ? void 0 : client.Identity) || ""), [phone, setPhone] = (0, import_react4.useState)((client == null ? void 0 : client.Phone) || ""), [email, setEmail] = (0, import_react4.useState)((client == null ? void 0 : client.Email) || ""), [address, setAddress] = (0, import_react4.useState)((client == null ? void 0 : client.Address) || "");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "modal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_react5.Form,
    {
      className: "form",
      method,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "img",
          {
            src: "/img/x.svg",
            className: "button-close",
            alt: "close",
            onClick: () => {
              setVisibleFormClient(!1);
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/formClient.jsx",
            lineNumber: 21,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "heading", children: Object.keys(client).length === 0 ? "Agregar nuevo cliente" : "Modificar cliente" }, void 0, !1, {
          fileName: "app/components/formClient.jsx",
          lineNumber: 32,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "subheading", children: [
          "Ingresa toda la informaci\xF3n del cliente para ",
          Object.keys(client).length === 0 ? "agregarlo" : "modificarlo"
        ] }, void 0, !0, {
          fileName: "app/components/formClient.jsx",
          lineNumber: 33,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/formClient.jsx",
          lineNumber: 36,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inputs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "input", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { name: "ClientID", type: "hidden", value: ClientID }, void 0, !1, {
              fileName: "app/components/formClient.jsx",
              lineNumber: 40,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "name", children: "Nombre" }, void 0, !1, {
              fileName: "app/components/formClient.jsx",
              lineNumber: 42,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "input",
              {
                name: "name",
                id: "name",
                type: "text",
                placeholder: "Nombre del cliente",
                onChange: (e) => {
                  setName(e.target.value);
                },
                value: name
              },
              void 0,
              !1,
              {
                fileName: "app/components/formClient.jsx",
                lineNumber: 43,
                columnNumber: 13
              },
              this
            ),
            errors != null && errors.name ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "error", children: errors.name }, void 0, !1, {
              fileName: "app/components/formClient.jsx",
              lineNumber: 51,
              columnNumber: 30
            }, this) : null
          ] }, void 0, !0, {
            fileName: "app/components/formClient.jsx",
            lineNumber: 39,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "input", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "identity", children: "Identidad" }, void 0, !1, {
              fileName: "app/components/formClient.jsx",
              lineNumber: 55,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "input",
              {
                name: "identity",
                id: "identity",
                type: "number",
                placeholder: "Identidad del cliente",
                onChange: (e) => {
                  setIdentity(e.target.value);
                },
                value: identity
              },
              void 0,
              !1,
              {
                fileName: "app/components/formClient.jsx",
                lineNumber: 56,
                columnNumber: 13
              },
              this
            ),
            errors != null && errors.identity ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "error", children: errors.identity }, void 0, !1, {
              fileName: "app/components/formClient.jsx",
              lineNumber: 64,
              columnNumber: 34
            }, this) : null
          ] }, void 0, !0, {
            fileName: "app/components/formClient.jsx",
            lineNumber: 54,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "input", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "phone", children: "N\xFAmero telef\xF3nico" }, void 0, !1, {
              fileName: "app/components/formClient.jsx",
              lineNumber: 68,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "input",
              {
                name: "phone",
                id: "phone",
                type: "number",
                maxLength: 15,
                placeholder: "N\xFAmero telef\xF3nico del cliente",
                onChange: (e) => {
                  setPhone(e.target.value);
                },
                value: phone
              },
              void 0,
              !1,
              {
                fileName: "app/components/formClient.jsx",
                lineNumber: 69,
                columnNumber: 13
              },
              this
            ),
            errors != null && errors.phone ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "error", children: errors.phone }, void 0, !1, {
              fileName: "app/components/formClient.jsx",
              lineNumber: 78,
              columnNumber: 31
            }, this) : null
          ] }, void 0, !0, {
            fileName: "app/components/formClient.jsx",
            lineNumber: 67,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "input", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "email", children: "Correo electr\xF3nico" }, void 0, !1, {
              fileName: "app/components/formClient.jsx",
              lineNumber: 82,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "input",
              {
                name: "email",
                id: "email",
                type: "email",
                placeholder: "Correo electr\xF3nico del cliente",
                onChange: (e) => {
                  setEmail(e.target.value);
                },
                value: email
              },
              void 0,
              !1,
              {
                fileName: "app/components/formClient.jsx",
                lineNumber: 83,
                columnNumber: 13
              },
              this
            ),
            errors != null && errors.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "error", children: errors.email }, void 0, !1, {
              fileName: "app/components/formClient.jsx",
              lineNumber: 91,
              columnNumber: 31
            }, this) : null
          ] }, void 0, !0, {
            fileName: "app/components/formClient.jsx",
            lineNumber: 81,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "input", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "address", children: "Domicilio" }, void 0, !1, {
              fileName: "app/components/formClient.jsx",
              lineNumber: 95,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "input",
              {
                name: "address",
                id: "address",
                type: "text",
                placeholder: "Direcci\xF3n del cliente",
                onChange: (e) => {
                  setAddress(e.target.value);
                },
                value: address
              },
              void 0,
              !1,
              {
                fileName: "app/components/formClient.jsx",
                lineNumber: 96,
                columnNumber: 13
              },
              this
            ),
            errors != null && errors.address ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "error", children: errors.address }, void 0, !1, {
              fileName: "app/components/formClient.jsx",
              lineNumber: 104,
              columnNumber: 33
            }, this) : null
          ] }, void 0, !0, {
            fileName: "app/components/formClient.jsx",
            lineNumber: 94,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/formClient.jsx",
          lineNumber: 38,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "loading", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { className: "button", type: "submit", value: "Guardar" }, void 0, !1, {
            fileName: "app/components/formClient.jsx",
            lineNumber: 109,
            columnNumber: 11
          }, this),
          (navigation == null ? void 0 : navigation.state) !== "idle" && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "spinner", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bounce1" }, void 0, !1, {
              fileName: "app/components/formClient.jsx",
              lineNumber: 112,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bounce2" }, void 0, !1, {
              fileName: "app/components/formClient.jsx",
              lineNumber: 113,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bounce3" }, void 0, !1, {
              fileName: "app/components/formClient.jsx",
              lineNumber: 114,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/formClient.jsx",
            lineNumber: 111,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/formClient.jsx",
          lineNumber: 108,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/formClient.jsx",
      lineNumber: 17,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/formClient.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/components/modalMessage.jsx
var import_react6 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function ModalMessage({ features, setVisibleMessage }) {
  let { text, indexIcon, isOkCancel, data } = features;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "modal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "message", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "img",
      {
        src: "/img/x.svg",
        alt: "x",
        className: "button-close",
        onClick: () => {
          setVisibleMessage(!1);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/modalMessage.jsx",
        lineNumber: 16,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "message-information", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: `/img/${{
        0: "alert-triangle.svg",
        1: "alert-circle.svg",
        2: "progress-check.svg"
      }[indexIcon]}`, alt: "reference" }, void 0, !1, {
        fileName: "app/components/modalMessage.jsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: text }, void 0, !1, {
        fileName: "app/components/modalMessage.jsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "buttons", children: isOkCancel ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Form, { method: "DELETE", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { name: data == null ? void 0 : data.name, type: "hidden", value: data == null ? void 0 : data.value }, void 0, !1, {
            fileName: "app/components/modalMessage.jsx",
            lineNumber: 34,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "input",
            {
              className: "button",
              type: "submit",
              value: "Aceptar"
            },
            void 0,
            !1,
            {
              fileName: "app/components/modalMessage.jsx",
              lineNumber: 35,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/modalMessage.jsx",
          lineNumber: 33,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "input",
          {
            className: "button",
            type: "button",
            onClick: () => {
              setVisibleMessage(!1);
            },
            value: "Cancelar"
          },
          void 0,
          !1,
          {
            fileName: "app/components/modalMessage.jsx",
            lineNumber: 42,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/modalMessage.jsx",
        lineNumber: 32,
        columnNumber: 15
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "input",
        {
          className: "button",
          type: "button",
          onClick: () => {
            setVisibleMessage(!1);
          },
          value: "Aceptar"
        },
        void 0,
        !1,
        {
          fileName: "app/components/modalMessage.jsx",
          lineNumber: 50,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/modalMessage.jsx",
        lineNumber: 30,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/modalMessage.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/modalMessage.jsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/modalMessage.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/components/client.jsx
var import_react7 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Client({ client, clientSelected, setClientSelected }) {
  let { Name, Identity, ClientID, URL } = client;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "item-list", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: `/clientes/${URL}`, className: "item-main", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: "/img/user-circle.svg", alt: "user" }, void 0, !1, {
        fileName: "app/components/client.jsx",
        lineNumber: 9,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "item-information", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { children: Name }, void 0, !1, {
          fileName: "app/components/client.jsx",
          lineNumber: 11,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: Identity }, void 0, !1, {
          fileName: "app/components/client.jsx",
          lineNumber: 12,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/client.jsx",
        lineNumber: 10,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/client.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
        fileName: "app/components/client.jsx",
        lineNumber: 16,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/client.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this);
}

// app/components/spinner.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Spinner({}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "spinner", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "bounce1" }, void 0, !1, {
      fileName: "app/components/spinner.jsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "bounce2" }, void 0, !1, {
      fileName: "app/components/spinner.jsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "bounce3" }, void 0, !1, {
      fileName: "app/components/spinner.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/spinner.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/models/client.server.js
async function getClients() {
  return await (await fetch(`${process.env.API_URL}/client`)).json();
}
async function getClientByURL(URL) {
  return await (await fetch(`${process.env.API_URL}/client/URL/${URL}`)).json();
}
async function addClient(client) {
  return await (await fetch(`${process.env.API_URL}/client`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(client)
  })).json();
}
async function updateClient(ClientID, client) {
  return await (await fetch(`${process.env.API_URL}/client/${ClientID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(client)
  })).json();
}
async function deleteClient(ClientID) {
  return await (await fetch(`${process.env.API_URL}/client/${ClientID}`, {
    method: "DELETE"
  })).json();
}

// app/models/document.server.js
async function addDocument(documentFormData) {
  return await (await fetch(`${process.env.API_URL}/document`, {
    method: "POST",
    body: documentFormData
  })).json();
}
async function deleteDocument(DocumentID) {
  return await (await fetch(`${process.env.API_URL}/document/${DocumentID}`, {
    method: "DELETE"
  })).json();
}

// app/styles/clientes.css
var clientes_default = "/build/_assets/clientes-FYRB3TCE.css";

// app/routes/clientes._index.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function links2() {
  return [
    {
      rel: "stylesheet",
      href: clientes_default
    }
  ];
}
async function loader() {
  return await getClients();
}
async function action({ request }) {
  let form = await request.formData(), clientID = form.get("ClientID"), documentID = form.get("DocumentID"), name = form.get("name"), identity = form.get("identity"), phone = form.get("phone"), email = form.get("email"), address = form.get("address"), errors = {};
  if ((request.method === "POST" || request.method === "PUT") && (name.length === 0 && (errors.name = "El nombre del cliente es obligatorio"), name.length > 80 && (errors.name = "El nombre debe contener menos de 80 caracteres"), typeof name != "string" && (errors.name = "El nombre debe ser un texto"), identity.length === 0 && (errors.identity = "La identidad es obligatorio"), (identity.length > 13 || identity.length < 13) && (errors.identity = "La identidad debe contener 13 caracteres"), phone.length !== 8 && phone.length !== 11 && (errors.phone = "El numero telef\xF3nico debe contener 8 o 11 caracteres"), phone.length === 0 && (errors.phone = "El numero telef\xF3nico es obligatorio"), /^[^s@]+@[^s@]+.[^s@]+$/.test(email) && (errors.email = "El correo electr\xF3nico ingresado no es valido"), email.length === 0 && (errors.email = "El correo electr\xF3nico es obligatorio"), address.length === 0 && (errors.address = "La direcci\xF3n del cliente es obligatoria")), Object.keys(errors).length > 0)
    return {
      state: "ERROR",
      data: {},
      errors
    };
  let client = {
    User: 2,
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
        data: await updateClient(clientID, client),
        errors: {}
      };
    case "DELETE": {
      let returnedState;
      return clientID ? (returnedState = await deleteClient(clientID), {
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
  let [isVisibleFormCliente, setVisibleFormClient] = (0, import_react8.useState)(!1), [isVisibleFormClienteForEditing, setVisibleFormClientForEditing] = (0, import_react8.useState)(!1), [isVisibleDeleteClient, setVisibleDeleteClient] = (0, import_react8.useState)(!1), [insertedMessage, showInsertedMessage] = (0, import_react8.useState)(!1), [updatedMessage, showUpdatedMessage] = (0, import_react8.useState)(!1), [deleteClientMessage, showDeleteClientMessage] = (0, import_react8.useState)(!1), [errorSelectedMessage, showErrorSelectedMessage] = (0, import_react8.useState)(!1), [clientSelected, setClientSelected] = (0, import_react8.useState)({}), loader5 = (0, import_react9.useLoaderData)(), actionResult = (0, import_react9.useActionData)(), [clients, setClients] = (0, import_react8.useState)({});
  (0, import_react8.useEffect)(() => {
    switch (actionResult == null ? void 0 : actionResult.state) {
      case "INSERTED":
        setVisibleFormClient(!1), showInsertedMessage(!0);
        break;
      case "UPDATED":
        setVisibleFormClientForEditing(!1), showUpdatedMessage(!0);
        break;
      case "CLIENT DELETED":
        setVisibleDeleteClient(!1), showDeleteClientMessage(!0);
        break;
      default:
        break;
    }
  }, [actionResult]), (0, import_react8.useEffect)(() => {
    setClients(loader5);
  }, [loader5]);
  let showFormCliente = (isEditign) => {
    isEditign ? Object.keys(clientSelected).length > 0 ? setVisibleFormClientForEditing(!0) : showErrorSelectedMessage(!0) : setVisibleFormClient(!0);
  }, showEliminatedClient = () => {
    Object.keys(clientSelected).length <= 0 ? showErrorSelectedMessage(!0) : setVisibleDeleteClient(!0);
  }, searchClient = (event) => {
    let value = event.target.value.toString().toLowerCase(), actualizedClients = loader5.filter((client) => client.Name.toLowerCase().includes(value));
    setClients(actualizedClients);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "container", children: [
    isVisibleFormCliente && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      FormClient,
      {
        method: "POST",
        errors: actionResult == null ? void 0 : actionResult.errors,
        setVisibleFormClient
      },
      void 0,
      !1,
      {
        fileName: "app/routes/clientes._index.jsx",
        lineNumber: 224,
        columnNumber: 7
      },
      this
    ),
    isVisibleFormClienteForEditing && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      FormClient,
      {
        method: "PUT",
        errors: actionResult == null ? void 0 : actionResult.errors,
        client: clientSelected,
        setVisibleFormClient: setVisibleFormClientForEditing
      },
      void 0,
      !1,
      {
        fileName: "app/routes/clientes._index.jsx",
        lineNumber: 232,
        columnNumber: 7
      },
      this
    ),
    isVisibleDeleteClient && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
        fileName: "app/routes/clientes._index.jsx",
        lineNumber: 241,
        columnNumber: 7
      },
      this
    ),
    errorSelectedMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
        fileName: "app/routes/clientes._index.jsx",
        lineNumber: 258,
        columnNumber: 7
      },
      this
    ),
    insertedMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
        fileName: "app/routes/clientes._index.jsx",
        lineNumber: 272,
        columnNumber: 7
      },
      this
    ),
    updatedMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
        fileName: "app/routes/clientes._index.jsx",
        lineNumber: 286,
        columnNumber: 7
      },
      this
    ),
    deleteClientMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
        fileName: "app/routes/clientes._index.jsx",
        lineNumber: 300,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "heading", children: "Gestiona tus clientes" }, void 0, !1, {
      fileName: "app/routes/clientes._index.jsx",
      lineNumber: 313,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "subheading", children: "Lista completa de los clientes registrados por ti, puedes escribir y filtrar para una busqueda mas rapida." }, void 0, !1, {
      fileName: "app/routes/clientes._index.jsx",
      lineNumber: 314,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "top-options", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "search", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: "/img/search.svg", alt: "search" }, void 0, !1, {
          fileName: "app/routes/clientes._index.jsx",
          lineNumber: 320,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
            fileName: "app/routes/clientes._index.jsx",
            lineNumber: 321,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/clientes._index.jsx",
        lineNumber: 319,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "actions", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "button",
          {
            className: "button",
            onClick: () => {
              showFormCliente(!1);
            },
            type: "button",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: "/img/add.svg", alt: "add" }, void 0, !1, {
                fileName: "app/routes/clientes._index.jsx",
                lineNumber: 334,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Agregar" }, void 0, !1, {
                fileName: "app/routes/clientes._index.jsx",
                lineNumber: 335,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/clientes._index.jsx",
            lineNumber: 329,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "button",
          {
            className: "button",
            onClick: () => {
              showFormCliente(!0);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: "/img/edit.svg", alt: "add" }, void 0, !1, {
                fileName: "app/routes/clientes._index.jsx",
                lineNumber: 342,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Editar" }, void 0, !1, {
                fileName: "app/routes/clientes._index.jsx",
                lineNumber: 343,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/clientes._index.jsx",
            lineNumber: 338,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "button",
          {
            className: "button",
            onClick: () => {
              showEliminatedClient();
            },
            type: "button",
            value: "Eliminar",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: "/img/x.svg", alt: "add" }, void 0, !1, {
                fileName: "app/routes/clientes._index.jsx",
                lineNumber: 352,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Eliminar" }, void 0, !1, {
                fileName: "app/routes/clientes._index.jsx",
                lineNumber: 353,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/clientes._index.jsx",
            lineNumber: 346,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/clientes._index.jsx",
        lineNumber: 328,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/clientes._index.jsx",
      lineNumber: 318,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "list-scroll", children: Object.keys(clients).length > 0 ? clients.map(
      (client) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        Client,
        {
          client,
          clientSelected,
          setClientSelected
        },
        client.ClientID,
        !1,
        {
          fileName: "app/routes/clientes._index.jsx",
          lineNumber: 362,
          columnNumber: 9
        },
        this
      )
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Spinner, {}, void 0, !1, {
      fileName: "app/routes/clientes._index.jsx",
      lineNumber: 371,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/clientes._index.jsx",
      lineNumber: 370,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/clientes._index.jsx",
      lineNumber: 358,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/clientes._index.jsx",
    lineNumber: 221,
    columnNumber: 5
  }, this);
}

// app/routes/materias._index.jsx
var materias_index_exports = {};
__export(materias_index_exports, {
  action: () => action2,
  default: () => Materias,
  links: () => links3,
  loader: () => loader2
});
var import_react13 = require("react"), import_react14 = require("@remix-run/react");

// app/components/formSubject.jsx
var import_react10 = require("react"), import_react11 = require("@remix-run/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function FormSubject({ subject, method, errors = {}, setShowModalCategory }) {
  let isSubject = Object.keys(subject).length > 0, [name, setName] = (0, import_react10.useState)((subject == null ? void 0 : subject.Name) || ""), navigation = (0, import_react11.useNavigation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "modal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    import_react11.Form,
    {
      className: "form",
      method,
      action: "/materias",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "img",
          {
            src: "/img/x.svg",
            className: "button-close",
            alt: "x",
            onClick: () => {
              setShowModalCategory(!1);
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/formSubject.jsx",
            lineNumber: 17,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "heading", children: isSubject ? "Modificar materia" : "Agregar nueva materia" }, void 0, !1, {
          fileName: "app/components/formSubject.jsx",
          lineNumber: 28,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "subheading", children: isSubject ? "Realice los cambios necesarios para guardar" : "Agregue el nombre de la materia para guardar en la lista" }, void 0, !1, {
          fileName: "app/components/formSubject.jsx",
          lineNumber: 31,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/formSubject.jsx",
          lineNumber: 37,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "inputs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "input", children: [
          isSubject && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "SubjectID", value: subject == null ? void 0 : subject.SubjectID }, void 0, !1, {
            fileName: "app/components/formSubject.jsx",
            lineNumber: 42,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "name", children: "Nombre" }, void 0, !1, {
            fileName: "app/components/formSubject.jsx",
            lineNumber: 45,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
              fileName: "app/components/formSubject.jsx",
              lineNumber: 46,
              columnNumber: 13
            },
            this
          ),
          errors != null && errors.name ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "error", children: errors.name }, void 0, !1, {
            fileName: "app/components/formSubject.jsx",
            lineNumber: 55,
            columnNumber: 30
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/components/formSubject.jsx",
          lineNumber: 40,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/formSubject.jsx",
          lineNumber: 39,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "loading", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { className: "button", type: "submit", value: isSubject ? "Modificar" : "Guardar" }, void 0, !1, {
            fileName: "app/components/formSubject.jsx",
            lineNumber: 60,
            columnNumber: 11
          }, this),
          (navigation == null ? void 0 : navigation.state) !== "idle" && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "spinner", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "bounce1" }, void 0, !1, {
              fileName: "app/components/formSubject.jsx",
              lineNumber: 63,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "bounce2" }, void 0, !1, {
              fileName: "app/components/formSubject.jsx",
              lineNumber: 64,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "bounce3" }, void 0, !1, {
              fileName: "app/components/formSubject.jsx",
              lineNumber: 65,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/formSubject.jsx",
            lineNumber: 62,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/formSubject.jsx",
          lineNumber: 59,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/formSubject.jsx",
      lineNumber: 12,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/formSubject.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/components/subject.jsx
var import_react12 = require("@remix-run/react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Subject({ subject, subjectSelected, setSubjectSelected }) {
  let { SubjectID, Name, Documents } = subject;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "item-list", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react12.Link, { to: `/materias/${Name}`, className: "item-main", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: "/img/category.svg", alt: "user" }, void 0, !1, {
        fileName: "app/components/subject.jsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "item-information", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h4", { children: Name }, void 0, !1, {
          fileName: "app/components/subject.jsx",
          lineNumber: 12,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: [
          "Numero total de documentos: ",
          Documents == null ? void 0 : Documents.length
        ] }, void 0, !0, {
          fileName: "app/components/subject.jsx",
          lineNumber: 13,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/subject.jsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/subject.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
        fileName: "app/components/subject.jsx",
        lineNumber: 17,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/subject.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/models/subject.server.js
async function getSubjects() {
  return await (await fetch(`${process.env.API_URL}/subject`)).json();
}
async function getSubjectByName(name) {
  return await (await fetch(`${process.env.API_URL}/subject/name/${name}`)).json();
}
async function addSubject(subject) {
  return await (await fetch(`${process.env.API_URL}/subject`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(subject)
  })).json();
}
async function updateSubject(SubjectID, subject) {
  return await (await fetch(`${process.env.API_URL}/subject/${SubjectID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(subject)
  })).json();
}

// app/routes/materias._index.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function links3() {
  return [
    {
      rel: "stylesheet",
      href: clientes_default
    }
  ];
}
async function loader2() {
  return await getSubjects();
}
async function action2({ request }) {
  let form = await request.formData(), name = form.get("Name"), errors = {};
  if ((request.method === "POST" || request.method === "PUT") && (name.length === 0 && (errors.name = "El nombre de la categoria es obligatorio"), name.length > 30 && (errors.name = "El nombre no debe exceder los 30 caracteres")), Object.keys(errors).length > 0)
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
      let SubjectID = form.get("SubjectID"), updatedSubject = await updateSubject(SubjectID, subject);
      return {
        status: "UPDATED",
        errors: {},
        data: updatedSubject
      };
    case "DELETE":
      return {
        status: "DELETED",
        errors: {},
        data: null
      };
    default:
      throw new Error("Unexpected action");
  }
}
function Materias() {
  let [subjectSelected, setSubjectSelected] = (0, import_react13.useState)({}), [showModalSubject, setShowModalSubject] = (0, import_react13.useState)(!1), [showModalSubjectForEditing, setShowModalSubjectForEditing] = (0, import_react13.useState)(!1), [showErrorSelectedMessage, setShowErrorSelectedMessage] = (0, import_react13.useState)(!1), [showInsertedMessage, setShowInsertedMessage] = (0, import_react13.useState)(!1), [showUpdatedMessage, setShowUpdatedMessage] = (0, import_react13.useState)(!1), loader5 = (0, import_react14.useLoaderData)(), actionResult = (0, import_react14.useActionData)(), [subjects, setSubjects] = (0, import_react13.useState)({});
  (0, import_react13.useEffect)(() => {
    setSubjects(loader5);
  }, [loader5]);
  let searchSubjects = (event) => {
    let value = event.target.value.toString().toLowerCase(), actualizedSubjects = loader5.filter((subject) => subject.Name.toLowerCase().includes(value));
    setSubjects(actualizedSubjects);
  }, showFormSubject = (isEditing) => {
    isEditing ? Object.keys(subjectSelected).length > 0 ? setShowModalSubjectForEditing(!0) : setShowErrorSelectedMessage(!0) : setShowModalSubject(!0);
  };
  return (0, import_react13.useEffect)(() => {
    switch (actionResult == null ? void 0 : actionResult.status) {
      case "INSERTED":
        setShowModalSubject(!1), setShowInsertedMessage(!0);
        break;
      case "UPDATED":
        setShowModalSubjectForEditing(!1), setShowUpdatedMessage(!0);
        break;
      default:
        break;
    }
  }, [actionResult]), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "container", children: [
    showModalSubject && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      FormSubject,
      {
        subject: {},
        method: "POST",
        errors: actionResult == null ? void 0 : actionResult.errors,
        setShowModalCategory: setShowModalSubject
      },
      void 0,
      !1,
      {
        fileName: "app/routes/materias._index.jsx",
        lineNumber: 141,
        columnNumber: 7
      },
      this
    ),
    showModalSubjectForEditing && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      FormSubject,
      {
        subject: subjectSelected,
        method: "PUT",
        errors: actionResult == null ? void 0 : actionResult.errors,
        setShowModalCategory: setShowModalSubjectForEditing
      },
      void 0,
      !1,
      {
        fileName: "app/routes/materias._index.jsx",
        lineNumber: 150,
        columnNumber: 7
      },
      this
    ),
    showErrorSelectedMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
        fileName: "app/routes/materias._index.jsx",
        lineNumber: 159,
        columnNumber: 7
      },
      this
    ),
    showInsertedMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
        fileName: "app/routes/materias._index.jsx",
        lineNumber: 173,
        columnNumber: 7
      },
      this
    ),
    showUpdatedMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      ModalMessage,
      {
        features: {
          text: "La materia ha sido modificada con exito",
          isOkCancel: !1,
          indexIcon: 2,
          data: null
        },
        setVisibleMessage: setShowUpdatedMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/materias._index.jsx",
        lineNumber: 187,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "heading", children: "Lista de materias" }, void 0, !1, {
      fileName: "app/routes/materias._index.jsx",
      lineNumber: 200,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { className: "subheading", children: "Gestiona las listas disponibles en la plataforma creando nuevas materias." }, void 0, !1, {
      fileName: "app/routes/materias._index.jsx",
      lineNumber: 201,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "search", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: "/img/search.svg", alt: "search" }, void 0, !1, {
        fileName: "app/routes/materias._index.jsx",
        lineNumber: 206,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
          fileName: "app/routes/materias._index.jsx",
          lineNumber: 207,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/materias._index.jsx",
      lineNumber: 205,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        "button",
        {
          className: "button",
          onClick: () => {
            showFormSubject(!1);
          },
          type: "button",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: "/img/add.svg", alt: "add" }, void 0, !1, {
              fileName: "app/routes/materias._index.jsx",
              lineNumber: 220,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "Agregar materia" }, void 0, !1, {
              fileName: "app/routes/materias._index.jsx",
              lineNumber: 221,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/materias._index.jsx",
          lineNumber: 215,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        "button",
        {
          className: "button",
          onClick: () => {
            showFormSubject(!0);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: "/img/edit.svg", alt: "add" }, void 0, !1, {
              fileName: "app/routes/materias._index.jsx",
              lineNumber: 228,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "Editar materia" }, void 0, !1, {
              fileName: "app/routes/materias._index.jsx",
              lineNumber: 229,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/materias._index.jsx",
          lineNumber: 224,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/materias._index.jsx",
      lineNumber: 214,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "list-scroll", children: Object.keys(subjects).length > 0 ? subjects.map(
      (subject) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        Subject,
        {
          subject,
          subjectSelected,
          setSubjectSelected
        },
        subject.SubjectID,
        !1,
        {
          fileName: "app/routes/materias._index.jsx",
          lineNumber: 237,
          columnNumber: 9
        },
        this
      )
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Spinner, {}, void 0, !1, {
      fileName: "app/routes/materias._index.jsx",
      lineNumber: 246,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/materias._index.jsx",
      lineNumber: 245,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/materias._index.jsx",
      lineNumber: 233,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/materias._index.jsx",
    lineNumber: 138,
    columnNumber: 5
  }, this);
}

// app/routes/materias.$name.jsx
var materias_name_exports = {};
__export(materias_name_exports, {
  action: () => action3,
  default: () => MateriasName,
  links: () => links4,
  loader: () => loader3
});
var import_react18 = require("react"), import_react19 = require("@remix-run/react");

// app/components/document.jsx
var import_react16 = require("react"), import_react17 = require("@remix-run/react");

// app/components/modalDocument.jsx
var import_react_pdf = require("react-pdf"), import_react15 = require("react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
import_react_pdf.pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${import_react_pdf.pdfjs.version}/pdf.worker.js`;
function ModalDocument({ URL, setShowModalDocument }) {
  let [numPages, setNumPages] = (0, import_react15.useState)(null), [pageNumber, setPageNumber] = (0, import_react15.useState)(1), onDocumentLoadSuccess = ({ numPages: numPages2 }) => {
    setNumPages(numPages2);
  }, reduce = () => {
    pageNumber !== 1 && setPageNumber(pageNumber - 1);
  }, add = () => {
    pageNumber !== numPages && setPageNumber(pageNumber + 1);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "modal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "document", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "img",
      {
        src: "/img/x.svg",
        className: "button-close",
        alt: "close",
        onClick: () => {
          setShowModalDocument(!1);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/modalDocument.jsx",
        lineNumber: 28,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      import_react_pdf.Document,
      {
        file: `http://localhost:3001/api/document/download/${URL}`,
        onLoadError: console.error,
        onLoadSuccess: onDocumentLoadSuccess,
        className: "file",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react_pdf.Page, { pageNumber }, void 0, !1, {
          fileName: "app/components/modalDocument.jsx",
          lineNumber: 44,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/modalDocument.jsx",
        lineNumber: 38,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "changerpage", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { src: "/img/arror-left.svg", alt: "left", onClick: reduce }, void 0, !1, {
        fileName: "app/components/modalDocument.jsx",
        lineNumber: 47,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: [
        pageNumber,
        " / ",
        numPages
      ] }, void 0, !0, {
        fileName: "app/components/modalDocument.jsx",
        lineNumber: 48,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { src: "/img/arrow-right.svg", alt: "right", onClick: add }, void 0, !1, {
        fileName: "app/components/modalDocument.jsx",
        lineNumber: 49,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/modalDocument.jsx",
      lineNumber: 46,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/modalDocument.jsx",
    lineNumber: 27,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/modalDocument.jsx",
    lineNumber: 26,
    columnNumber: 7
  }, this);
}

// app/components/document.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Document3({ document, setSelectedDocument, setShowFormDeletedMessage }) {
  let { Name, URL, Client: Client2 } = document, [showModalDocument, setShowModalDocument] = (0, import_react16.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
    showModalDocument && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      ModalDocument,
      {
        URL,
        setShowModalDocument
      },
      void 0,
      !1,
      {
        fileName: "app/components/document.jsx",
        lineNumber: 13,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "item-list", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "item-main", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("img", { src: "/img/file-description.svg", alt: "user" }, void 0, !1, {
          fileName: "app/components/document.jsx",
          lineNumber: 21,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "item-information", onClick: () => {
          setShowModalDocument(!0);
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h4", { children: Name }, void 0, !1, {
          fileName: "app/components/document.jsx",
          lineNumber: 23,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/document.jsx",
          lineNumber: 22,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/document.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "actions", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react17.Link, { to: `http://localhost:3001/api/document/download/${URL}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "img",
          {
            src: "/img/download.svg",
            alt: "square"
          },
          void 0,
          !1,
          {
            fileName: "app/components/document.jsx",
            lineNumber: 29,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/document.jsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
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
            fileName: "app/components/document.jsx",
            lineNumber: 34,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/document.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/document.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/document.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/utils/helpers.js
function formattedDate(timestamp) {
  let dateObj = new Date(timestamp), options = {
    year: "numeric",
    month: "long",
    // "long" para el nombre del mes completo en español, "short" para la versión corta
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: !0
    // Puedes usar "long" para mostrar el nombre del huso horario completo
  };
  return dateObj.toLocaleString("es-ES", options);
}

// app/styles/materias.css
var materias_default = "/build/_assets/materias-VVKHX22A.css";

// app/routes/materias.$name.jsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
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
async function loader3({ params }) {
  let { name } = params;
  return await getSubjectByName(name);
}
async function action3({ request }) {
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
  let loader5 = (0, import_react19.useLoaderData)(), actionResult = (0, import_react19.useActionData)(), [showFormDeletedMessage, setShowFormDeletedMessage] = (0, import_react18.useState)(!1), [showDeletedMessage, setShowDeletedMessage] = (0, import_react18.useState)(!1), [selectedDocument, setSelectedDocument] = (0, import_react18.useState)({}), { Name, Documents, CreatedDate, UpdatedDate } = loader5, [documents, setDocuments] = (0, import_react18.useState)({});
  (0, import_react18.useEffect)(() => {
    switch (actionResult == null ? void 0 : actionResult.status) {
      case "DELETED":
        setShowFormDeletedMessage(!1), setShowDeletedMessage(!0);
        break;
      default:
        break;
    }
  }, [actionResult]), (0, import_react18.useEffect)(() => {
    setDocuments(loader5 == null ? void 0 : loader5.Documents);
  }, [loader5]);
  let searchDocument = (event) => {
    let value = event.target.value.toString().toLowerCase(), actualizedDocuments = loader5 == null ? void 0 : loader5.Documents.filter((document) => document.Name.toLowerCase().includes(value));
    setDocuments(actualizedDocuments);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "container", children: [
    showFormDeletedMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      ModalMessage,
      {
        features: {
          text: "\xBFEsta seguro de la eliminaci\xF3n del documento?",
          isOkCancel: !0,
          indexIcon: 1,
          data: {
            name: "DocumentID",
            value: selectedDocument == null ? void 0 : selectedDocument.DocumentID
          }
        },
        setVisibleMessage: setShowFormDeletedMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/materias.$name.jsx",
        lineNumber: 90,
        columnNumber: 7
      },
      this
    ),
    showDeletedMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
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
        fileName: "app/routes/materias.$name.jsx",
        lineNumber: 107,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { className: "heading", children: "Informacion de la materia" }, void 0, !1, {
      fileName: "app/routes/materias.$name.jsx",
      lineNumber: 120,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "subheading", children: "Gestiona aqui todos los documentos de la materia" }, void 0, !1, {
      fileName: "app/routes/materias.$name.jsx",
      lineNumber: 121,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("main", { className: "grid-1-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("section", { className: "content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h3", { children: "Informaci\xF3n general" }, void 0, !1, {
          fileName: "app/routes/materias.$name.jsx",
          lineNumber: 127,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "data", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "item", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: "Nombre:" }, void 0, !1, {
              fileName: "app/routes/materias.$name.jsx",
              lineNumber: 130,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("b", { children: Name }, void 0, !1, {
              fileName: "app/routes/materias.$name.jsx",
              lineNumber: 131,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/materias.$name.jsx",
            lineNumber: 129,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "item", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: "Numero de documentos:" }, void 0, !1, {
              fileName: "app/routes/materias.$name.jsx",
              lineNumber: 135,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("b", { children: Documents.length }, void 0, !1, {
              fileName: "app/routes/materias.$name.jsx",
              lineNumber: 136,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/materias.$name.jsx",
            lineNumber: 134,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "item", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: "Fecha de creaci\xF3n:" }, void 0, !1, {
              fileName: "app/routes/materias.$name.jsx",
              lineNumber: 140,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("b", { children: formattedDate(CreatedDate) }, void 0, !1, {
              fileName: "app/routes/materias.$name.jsx",
              lineNumber: 141,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/materias.$name.jsx",
            lineNumber: 139,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "item", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: "Ultima modificaci\xF3n:" }, void 0, !1, {
              fileName: "app/routes/materias.$name.jsx",
              lineNumber: 145,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("b", { children: formattedDate(UpdatedDate) }, void 0, !1, {
              fileName: "app/routes/materias.$name.jsx",
              lineNumber: 146,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/materias.$name.jsx",
            lineNumber: 144,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/materias.$name.jsx",
          lineNumber: 128,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/materias.$name.jsx",
        lineNumber: 126,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("section", { className: "documents", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h3", { className: "documents-title", children: "Documentos registrados" }, void 0, !1, {
          fileName: "app/routes/materias.$name.jsx",
          lineNumber: 152,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "search", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("img", { src: "/img/search.svg", alt: "search" }, void 0, !1, {
            fileName: "app/routes/materias.$name.jsx",
            lineNumber: 155,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
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
              fileName: "app/routes/materias.$name.jsx",
              lineNumber: 156,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/materias.$name.jsx",
          lineNumber: 154,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "list-scroll", children: Object.keys(loader5).length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Spinner, {}, void 0, !1, {
          fileName: "app/routes/materias.$name.jsx",
          lineNumber: 168,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/materias.$name.jsx",
          lineNumber: 167,
          columnNumber: 13
        }, this) : Object.keys(documents).length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "no-found", children: "Aun no hay documentos disponibles..." }, void 0, !1, {
          fileName: "app/routes/materias.$name.jsx",
          lineNumber: 173,
          columnNumber: 13
        }, this) : documents.map(
          (document) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            Document3,
            {
              document,
              setSelectedDocument,
              setShowFormDeletedMessage
            },
            document.DocumentID,
            !1,
            {
              fileName: "app/routes/materias.$name.jsx",
              lineNumber: 178,
              columnNumber: 13
            },
            this
          )
        ) }, void 0, !1, {
          fileName: "app/routes/materias.$name.jsx",
          lineNumber: 163,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/materias.$name.jsx",
        lineNumber: 151,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/materias.$name.jsx",
      lineNumber: 125,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/materias.$name.jsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}

// app/routes/clientes.$URL.jsx
var clientes_URL_exports = {};
__export(clientes_URL_exports, {
  action: () => action4,
  default: () => ClientesClientID,
  links: () => links5,
  loader: () => loader4
});
var import_react23 = require("react"), import_react24 = require("@remix-run/react");

// app/components/selectDocument.jsx
var import_react20 = require("react");
var import_react21 = require("@remix-run/react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function SelectDocument({ document, setShowFormDeletedMessage, setSelectedDocument }) {
  let { Name, URL } = document, [showModalDocument, setShowModalDocument] = (0, import_react20.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "subject-document", children: [
    showModalDocument && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      ModalDocument,
      {
        URL,
        setShowModalDocument
      },
      void 0,
      !1,
      {
        fileName: "app/components/selectDocument.jsx",
        lineNumber: 15,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      "div",
      {
        className: "record-document",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { onClick: () => {
            setShowModalDocument(!0);
          }, children: Name }, void 0, !1, {
            fileName: "app/components/selectDocument.jsx",
            lineNumber: 24,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "actions", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react21.Link, { to: `http://localhost:3001/api/document/download/${URL}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              "img",
              {
                src: "/img/download.svg",
                alt: "trash"
              },
              void 0,
              !1,
              {
                fileName: "app/components/selectDocument.jsx",
                lineNumber: 27,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/selectDocument.jsx",
              lineNumber: 26,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
                fileName: "app/components/selectDocument.jsx",
                lineNumber: 32,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/selectDocument.jsx",
            lineNumber: 25,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/selectDocument.jsx",
        lineNumber: 21,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/selectDocument.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/components/selectSubject.jsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function SelectSubject({ subject, showSubject, setShowSubject, setShowFormDeletedMessage, setSelectedDocument }) {
  let { SubjectID, Name, Documents } = subject;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "record-subject", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      "div",
      {
        className: "subject-information",
        onClick: () => {
          setShowSubject(showSubject === SubjectID ? 0 : SubjectID);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: Name }, void 0, !1, {
            fileName: "app/components/selectSubject.jsx",
            lineNumber: 12,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "img",
            {
              className: showSubject === SubjectID ? "active" : "",
              src: "/img/chevron-down.svg",
              alt: "arrow"
            },
            void 0,
            !1,
            {
              fileName: "app/components/selectSubject.jsx",
              lineNumber: 17,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/selectSubject.jsx",
            lineNumber: 16,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/selectSubject.jsx",
        lineNumber: 8,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: `subject-documents ${showSubject === SubjectID ? "active" : ""}`, children: (Documents == null ? void 0 : Documents.length) > 0 ? Documents.map(
      (document) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        SelectDocument,
        {
          document,
          setSelectedDocument,
          setShowFormDeletedMessage
        },
        document.DocumentID,
        !1,
        {
          fileName: "app/components/selectSubject.jsx",
          lineNumber: 28,
          columnNumber: 13
        },
        this
      )
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "subject-document", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "record-document", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "Aun no hay documentos disponibles" }, void 0, !1, {
      fileName: "app/components/selectSubject.jsx",
      lineNumber: 38,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/selectSubject.jsx",
      lineNumber: 37,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/selectSubject.jsx",
      lineNumber: 36,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/selectSubject.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/selectSubject.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/formDocument.jsx
var import_react22 = require("@remix-run/react"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function FormDocument({ method, errors, subjects, ClientID, setShowModalDocument }) {
  let navigation = (0, import_react22.useNavigation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "modal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react22.Form, { className: "form", method, encType: "multipart/form-data", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      "img",
      {
        src: "/img/x.svg",
        className: "button-close",
        alt: "x",
        onClick: () => {
          setShowModalDocument(!1);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/formDocument.jsx",
        lineNumber: 9,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h1", { className: "heading", children: "Agregar nuevo documento" }, void 0, !1, {
      fileName: "app/components/formDocument.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h2", { className: "subheading", children: "Agrega toda la informaci\xF3n sobre el documento para agregarlo al expediente" }, void 0, !1, {
      fileName: "app/components/formDocument.jsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/components/formDocument.jsx",
      lineNumber: 21,
      columnNumber: 115
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "inputs", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "input", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("input", { name: "Client", type: "hidden", value: ClientID }, void 0, !1, {
          fileName: "app/components/formDocument.jsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("label", { htmlFor: "title", children: "Titulo" }, void 0, !1, {
          fileName: "app/components/formDocument.jsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
            fileName: "app/components/formDocument.jsx",
            lineNumber: 28,
            columnNumber: 13
          },
          this
        ),
        errors != null && errors.name ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "error", children: errors.name }, void 0, !1, {
          fileName: "app/components/formDocument.jsx",
          lineNumber: 34,
          columnNumber: 30
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/components/formDocument.jsx",
        lineNumber: 24,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "input", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("label", { htmlFor: "subject", children: "Materia" }, void 0, !1, {
          fileName: "app/components/formDocument.jsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "select",
          {
            name: "Subject",
            id: "subject",
            children: subjects.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("option", { value: -1, children: "-- Seleccione una materia --" }, void 0, !1, {
                fileName: "app/components/formDocument.jsx",
                lineNumber: 46,
                columnNumber: 17
              }, this),
              subjects.map(
                (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("option", { value: item.SubjectID, children: item.Name }, item.SubjectID, !1, {
                  fileName: "app/components/formDocument.jsx",
                  lineNumber: 48,
                  columnNumber: 19
                }, this)
              )
            ] }, void 0, !0, {
              fileName: "app/components/formDocument.jsx",
              lineNumber: 45,
              columnNumber: 17
            }, this) : ""
          },
          void 0,
          !1,
          {
            fileName: "app/components/formDocument.jsx",
            lineNumber: 39,
            columnNumber: 13
          },
          this
        ),
        errors != null && errors.subject ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "error", children: errors.subject }, void 0, !1, {
          fileName: "app/components/formDocument.jsx",
          lineNumber: 55,
          columnNumber: 33
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/components/formDocument.jsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "input", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("label", { htmlFor: "file", children: "Archivo" }, void 0, !1, {
          fileName: "app/components/formDocument.jsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "input",
          {
            type: "file",
            name: "File",
            id: "file"
          },
          void 0,
          !1,
          {
            fileName: "app/components/formDocument.jsx",
            lineNumber: 60,
            columnNumber: 13
          },
          this
        ),
        errors != null && errors.file ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "error", children: errors.file }, void 0, !1, {
          fileName: "app/components/formDocument.jsx",
          lineNumber: 65,
          columnNumber: 30
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/components/formDocument.jsx",
        lineNumber: 58,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/formDocument.jsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "loading", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("input", { className: "button", type: "submit", value: "Guardar" }, void 0, !1, {
        fileName: "app/components/formDocument.jsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      (navigation == null ? void 0 : navigation.state) !== "idle" && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "spinner", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "bounce1" }, void 0, !1, {
          fileName: "app/components/formDocument.jsx",
          lineNumber: 73,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "bounce2" }, void 0, !1, {
          fileName: "app/components/formDocument.jsx",
          lineNumber: 74,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "bounce3" }, void 0, !1, {
          fileName: "app/components/formDocument.jsx",
          lineNumber: 75,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/formDocument.jsx",
        lineNumber: 72,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/formDocument.jsx",
      lineNumber: 69,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/formDocument.jsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/formDocument.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/clientes.$URL.jsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function links5() {
  return [
    {
      rel: "stylesheet",
      href: clientes_default
    }
  ];
}
async function loader4({ params }) {
  let { URL } = params, client = await getClientByURL(URL), subjects = await getSubjects();
  return {
    client,
    subjects
  };
}
async function action4({ request }) {
  let documentFormData = await request.formData(), documentID = documentFormData.get("DocumentID"), name = documentFormData.get("Name"), subject = documentFormData.get("Subject"), file = documentFormData.get("File"), errors = {};
  if (request.method === "POST" && (name.length === 0 && (errors.name = "El titulo del documento es obligatorio"), name.length > 30 && (errors.name = "El titulo del documento no debe exceder las 30 letras"), parseInt(subject) === -1 && (errors.subject = "La seleccion de una materia es obligatoria"), file || (errors.file = "debe seleccionar un documento")), Object.keys(errors).length > 0)
    return {
      state: "ERROR",
      data: null,
      errors
    };
  switch (request.method) {
    case "POST":
      return {
        state: "INSERTED",
        data: await addDocument(documentFormData),
        errors: {}
      };
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
  let { client, subjects } = (0, import_react24.useLoaderData)(), actionResult = (0, import_react24.useActionData)(), { ClientID, Name, Identity, Email, Phone, Address, Documents } = client[0], [showSubject, setShowSubject] = (0, import_react23.useState)(!1), [showInsertedMessage, setShowInsertedMessage] = (0, import_react23.useState)(!1), [showDeletedMessage, setShowDeletedMessage] = (0, import_react23.useState)(!1), [showFormDocument, setShowFormDocument] = (0, import_react23.useState)(!1), [showFormDeletedMessage, setShowFormDeletedMessage] = (0, import_react23.useState)(!1), [selectedDocument, setSelectedDocument] = (0, import_react23.useState)({}), subjectsNamed = {};
  subjects.forEach((subject) => {
    subjectsNamed[subject.SubjectID] = subject.Name;
  });
  let record = [];
  return Documents.forEach((document) => {
    let subjectExist = !1;
    record.forEach((item) => {
      document.Subject === item.SubjectID && (item.Documents = [...item.Documents, document], subjectExist = !0);
    }), subjectExist || record.push({
      SubjectID: document.Subject,
      Name: subjectsNamed[document.Subject],
      Documents: [document]
    });
  }), (0, import_react23.useEffect)(() => {
    switch (actionResult == null ? void 0 : actionResult.state) {
      case "INSERTED":
        setShowFormDocument(!1), setShowInsertedMessage(!0);
        break;
      case "DELETED":
        setShowFormDeletedMessage(!1), setShowDeletedMessage(!0);
        break;
      default:
        break;
    }
  }, [actionResult]), /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "container", children: [
    showFormDocument && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      FormDocument,
      {
        method: "POST",
        errors: actionResult == null ? void 0 : actionResult.errors,
        subjects,
        ClientID,
        setShowModalDocument: setShowFormDocument
      },
      void 0,
      !1,
      {
        fileName: "app/routes/clientes.$URL.jsx",
        lineNumber: 147,
        columnNumber: 7
      },
      this
    ),
    showFormDeletedMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      ModalMessage,
      {
        features: {
          text: "\xBFEsta seguro de la eliminaci\xF3n del documento?",
          isOkCancel: !0,
          indexIcon: 1,
          data: {
            name: "DocumentID",
            value: selectedDocument == null ? void 0 : selectedDocument.DocumentID
          }
        },
        setVisibleMessage: setShowFormDeletedMessage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/clientes.$URL.jsx",
        lineNumber: 157,
        columnNumber: 7
      },
      this
    ),
    showInsertedMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
        fileName: "app/routes/clientes.$URL.jsx",
        lineNumber: 174,
        columnNumber: 7
      },
      this
    ),
    showDeletedMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
        fileName: "app/routes/clientes.$URL.jsx",
        lineNumber: 188,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { className: "heading", children: "Informaci\xF3n del cliente" }, void 0, !1, {
      fileName: "app/routes/clientes.$URL.jsx",
      lineNumber: 201,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { className: "subheading", children: "Informaci\xF3n general y expediente completo del cliente" }, void 0, !1, {
      fileName: "app/routes/clientes.$URL.jsx",
      lineNumber: 202,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("main", { className: "grid-1-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("section", { className: "content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h3", { children: "Informaci\xF3n general" }, void 0, !1, {
          fileName: "app/routes/clientes.$URL.jsx",
          lineNumber: 206,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "data", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "item", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: "Nombre:" }, void 0, !1, {
              fileName: "app/routes/clientes.$URL.jsx",
              lineNumber: 209,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("b", { children: Name }, void 0, !1, {
              fileName: "app/routes/clientes.$URL.jsx",
              lineNumber: 210,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/clientes.$URL.jsx",
            lineNumber: 208,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "item", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: "Identidad:" }, void 0, !1, {
              fileName: "app/routes/clientes.$URL.jsx",
              lineNumber: 213,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("b", { children: Identity }, void 0, !1, {
              fileName: "app/routes/clientes.$URL.jsx",
              lineNumber: 214,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/clientes.$URL.jsx",
            lineNumber: 212,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "item", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: "Correo Electr\xF3nico:" }, void 0, !1, {
              fileName: "app/routes/clientes.$URL.jsx",
              lineNumber: 217,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("b", { children: Email }, void 0, !1, {
              fileName: "app/routes/clientes.$URL.jsx",
              lineNumber: 218,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/clientes.$URL.jsx",
            lineNumber: 216,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "item", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: "Telef\xF3no:" }, void 0, !1, {
              fileName: "app/routes/clientes.$URL.jsx",
              lineNumber: 221,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("b", { children: Phone }, void 0, !1, {
              fileName: "app/routes/clientes.$URL.jsx",
              lineNumber: 222,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/clientes.$URL.jsx",
            lineNumber: 220,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "item", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: "Direcci\xF3n:" }, void 0, !1, {
              fileName: "app/routes/clientes.$URL.jsx",
              lineNumber: 225,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("b", { children: Address }, void 0, !1, {
              fileName: "app/routes/clientes.$URL.jsx",
              lineNumber: 226,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/clientes.$URL.jsx",
            lineNumber: 224,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/clientes.$URL.jsx",
          lineNumber: 207,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/clientes.$URL.jsx",
        lineNumber: 205,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("section", { className: "record", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h3", { className: "record-title", children: "Expediente" }, void 0, !1, {
          fileName: "app/routes/clientes.$URL.jsx",
          lineNumber: 232,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "actions", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          "button",
          {
            className: "button",
            onClick: () => {
              setShowFormDocument(!0);
            },
            type: "button",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("img", { src: "/img/add.svg", alt: "add" }, void 0, !1, {
                fileName: "app/routes/clientes.$URL.jsx",
                lineNumber: 240,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: "Agregar documento" }, void 0, !1, {
                fileName: "app/routes/clientes.$URL.jsx",
                lineNumber: 241,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/clientes.$URL.jsx",
            lineNumber: 235,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/clientes.$URL.jsx",
          lineNumber: 234,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "list-scroll", children: Object.keys(record).length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "no-found", children: "Aun no hay documentos disponibles..." }, void 0, !1, {
          fileName: "app/routes/clientes.$URL.jsx",
          lineNumber: 248,
          columnNumber: 13
        }, this) : record.map(
          (subject) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
              fileName: "app/routes/clientes.$URL.jsx",
              lineNumber: 253,
              columnNumber: 13
            },
            this
          )
        ) }, void 0, !1, {
          fileName: "app/routes/clientes.$URL.jsx",
          lineNumber: 245,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/clientes.$URL.jsx",
        lineNumber: 231,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/clientes.$URL.jsx",
      lineNumber: 204,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/clientes.$URL.jsx",
    lineNumber: 145,
    columnNumber: 5
  }, this);
}

// app/routes/nosotros.jsx
var nosotros_exports = {};
__export(nosotros_exports, {
  default: () => Nosotros
});
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function Nosotros({}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h1", { children: "Desde nosotros" }, void 0, !1, {
    fileName: "app/routes/nosotros.jsx",
    lineNumber: 6,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/nosotros.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  links: () => links6,
  meta: () => meta2
});
var import_react25 = require("@remix-run/react");

// app/styles/inicio.css
var inicio_default = "/build/_assets/inicio-CV5R5PLC.css";

// app/routes/_index.jsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), meta2 = () => [
  { title: "Inicio" },
  { name: "description", content: "Welcome to Remix!" }
];
function links6() {
  return [
    {
      rel: "stylesheet",
      href: inicio_default
    }
  ];
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "container home", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "title", children: "Grupo Sosa Morales" }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "subtitle", children: "Notaria - Abogacia - Asesoria - Bienes raices" }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "panels", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react25.Link, { to: "/clientes", className: "panel", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("img", { src: "/img/users-group.svg", alt: "user-group" }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 28,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h4", { children: "Clientes" }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 29,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: "Gestiona tus clientes desde aqui." }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 30,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 27,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react25.Link, { to: "/materias", className: "panel", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("img", { src: "/img/category.svg", alt: "category" }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 34,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h4", { children: "Materias" }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 35,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: "Busca documentos de clientes seg\xFAn las materias disponibles" }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 36,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 33,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react25.Link, { to: "/documentacioninterna", className: "panel", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("img", { src: "/img/category-2.svg", alt: "category-2" }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 40,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h4", { children: "Documentaci\xF3n interna" }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 41,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: "Gestiona tu documentaci\xF3n interna" }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 42,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 39,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react25.Link, { to: "/nosotros", className: "panel", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("img", { src: "/img/info-octagon.svg", alt: "info" }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 46,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h4", { children: "A cerca de" }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 47,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: "Gestiona tus subcategorias desde aqui." }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 48,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 45,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 26,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-EK7Y7CUF.js", imports: ["/build/_shared/chunk-7HYTYZPS.js", "/build/_shared/chunk-PYR5W2H5.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ACR6QSZ5.js", imports: ["/build/_shared/chunk-72ATKWD2.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-DPZQBSGV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/clientes.$URL": { id: "routes/clientes.$URL", parentId: "root", path: "clientes/:URL", index: void 0, caseSensitive: void 0, module: "/build/routes/clientes.$URL-UU2VV6KV.js", imports: ["/build/_shared/chunk-TL7GRFDP.js", "/build/_shared/chunk-GFOJG3BT.js", "/build/_shared/chunk-4UHD7ILB.js", "/build/_shared/chunk-7BXY2VJR.js", "/build/_shared/chunk-ZNFFMIJN.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/clientes._index": { id: "routes/clientes._index", parentId: "root", path: "clientes", index: !0, caseSensitive: void 0, module: "/build/routes/clientes._index-OK3V4G7G.js", imports: ["/build/_shared/chunk-XRHCDOQN.js", "/build/_shared/chunk-TL7GRFDP.js", "/build/_shared/chunk-4UHD7ILB.js", "/build/_shared/chunk-ZNFFMIJN.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/documentacioninterna": { id: "routes/documentacioninterna", parentId: "root", path: "documentacioninterna", index: void 0, caseSensitive: void 0, module: "/build/routes/documentacioninterna-KVGJ5A63.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/materias.$name": { id: "routes/materias.$name", parentId: "root", path: "materias/:name", index: void 0, caseSensitive: void 0, module: "/build/routes/materias.$name-63R2RBWC.js", imports: ["/build/_shared/chunk-XRHCDOQN.js", "/build/_shared/chunk-GFOJG3BT.js", "/build/_shared/chunk-4UHD7ILB.js", "/build/_shared/chunk-7BXY2VJR.js", "/build/_shared/chunk-ZNFFMIJN.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/materias._index": { id: "routes/materias._index", parentId: "root", path: "materias", index: !0, caseSensitive: void 0, module: "/build/routes/materias._index-PPKZJFFU.js", imports: ["/build/_shared/chunk-XRHCDOQN.js", "/build/_shared/chunk-7BXY2VJR.js", "/build/_shared/chunk-ZNFFMIJN.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/nosotros": { id: "routes/nosotros", parentId: "root", path: "nosotros", index: void 0, caseSensitive: void 0, module: "/build/routes/nosotros-MAY26PKE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "e7179664", hmr: void 0, url: "/build/manifest-E7179664.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
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
  "routes/materias._index": {
    id: "routes/materias._index",
    parentId: "root",
    path: "materias",
    index: !0,
    caseSensitive: void 0,
    module: materias_index_exports
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
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
