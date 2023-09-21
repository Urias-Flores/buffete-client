import Navigation from "~/components/navigation";
import stylesNormalize from "~/styles/normalize.css"
import stylesGlobal from "~/styles/global.css"
import textLayer from 'react-pdf/dist/esm/Page/TextLayer.css';
import annotationLayer from'react-pdf/dist/esm/Page/AnnotationLayer.css';

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  isRouteErrorResponse,
  useRouteError, useLoaderData, useLocation
} from "@remix-run/react";

export function meta(){
    return (
        [
            {
                title : 'Inicio'
            },
            {
                property: 'charset',
                content: 'utf-8'
            },
            {
                property: 'viewport',
                content: 'width=device-widht, initial-scale=1'
            }
        ]
    )
}

export const links = () => [
    {
        rel: 'stylesheet',
        href: stylesNormalize
    },
    {
        rel: 'stylesheet',
        href: stylesGlobal
    },
    {
      rel: 'stylesheet',
      href: textLayer
    },
    {
      rel: 'stylesheet',
      href: annotationLayer
    },
    {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
    },
    {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: "true"
    },
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700;900&display=swap'
    }
];

export async function loader(){
  return {
    ENV: {
      URL_API: process.env.API_URL
    }
  }
}

export default function App() {
  const loader = useLoaderData();
  return (
    <Document>
        <Outlet context={
          {
            URL_API: loader?.ENV.URL_API
          }
        }/>
    </Document>
  );
}

function Document({children}){
  const { pathname } = useLocation()
  console.log(typeof pathname);
  return(
    < html lang = "es" >
      <head>
        <Meta/>
        <Links/>
        <title></title>
      </head>

      <body>
      { pathname === '/login'
        ? <></>
        : <Navigation/>
      }
        {children}
        <Scripts/>
        <LiveReload/>
      </body>
    </html>
  )
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <div className="container">
          <h1 className="heading">Error</h1>
          <p className="subheading">Error: 404 pagina no encontrado</p>
        </div>
      </Document>
    );
  } else if (error instanceof Error) {
    return (
      <Document>
        <div className="container">
          <h1 className="heading">Error</h1>
          <p className="subheading">
            { error.name.toString() === 'FetchError'
              ? 'No se ha podido establecer coneccion con el servior'
              : 'Ha sucedido un error inesperado'
            }
          </p>
        </div>
      </Document>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}

