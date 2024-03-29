import Navigation from "./components/navigation";
import stylesNormalize from "./styles/normalize.css";
import stylesGlobal from "./styles/global.css";
import textLayer from "react-pdf/dist/esm/Page/TextLayer.css";
import annotationLayer from "react-pdf/dist/esm/Page/AnnotationLayer.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  isRouteErrorResponse,
  useRouteError,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import { authenticator } from "./auth/auth.server";
import { useState } from "react";

export function meta() {
  return [
    {
      title: "Inicio",
    },
    {
      charset: "UTF-8",
    },
    {
      httpEquiv: "X-UA-Compatible",
      content: "IE=edge",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ];
}

export const links = () => [
  {
    rel: "stylesheet",
    href: stylesNormalize,
  },
  {
    rel: "stylesheet",
    href: stylesGlobal,
  },
  {
    rel: "stylesheet",
    href: textLayer,
  },
  {
    rel: "stylesheet",
    href: annotationLayer,
  },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "true",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700;900&display=swap",
  },
];

export async function loader({ request }: any) {
  const user = await authenticator.isAuthenticated(request);

  return {
    USER: user,
    env: {
      URL_API: process.env.API_URL,
    },
  };
}

export async function action({ request }: any) {
  return await authenticator.logout(request, {
    redirectTo: "login",
  });
}

export default function App() {
  const loader: any = useLoaderData();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Document user={loader?.USER}>
      <Outlet
        context={{
          env: loader?.env,
          menuState: [showMenu, setShowMenu],
        }}
      />
    </Document>
  );
}

function Document({ children, user }: any) {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
        <title></title>
      </head>

      <body className={showMenu ? "blocked" : ""}>
        {pathname === "/login" ||
        pathname === "/create-account" ||
        pathname === "/forgot-password" ? (
          <></>
        ) : (
          <Navigation
            user={user}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
        )}
        {children}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <div className="error-page">
          <h1 className="heading">Error</h1>
          <p className="subheading">Error: 404 pagina no encontrado</p>
        </div>
      </Document>
    );
  } else if (error instanceof Error) {
    return (
      <Document>
        <div className="error-page">
          <h1 className="title">Ups... Ha ocurrido un error</h1>
          <img className="image" src="/img/info-octagon.svg" alt="error" />
          <p className="information">Error: {error.message}</p>
        </div>
      </Document>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
