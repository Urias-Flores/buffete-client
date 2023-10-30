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
import {authenticator} from "./auth/auth.server";

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


export async function loader({ request }){
  const user = await authenticator.isAuthenticated(request)

  return {
    USER: user /*{
      Name: 'Admin',
      Email: 'admin@gmail.com'
    }*/,
    ENV: {
      URL_API: process.env.API_URL
    }
  }
}

export async function action({ request }){
  return await authenticator.logout( request, {
    redirectTo: 'login'
  })
}



export default function App() {
  const loader = useLoaderData();
  return (
    <Document user={loader?.USER}>
        <Outlet context={
          {
            URL_API: loader?.ENV.URL_API
          }
        }/>
    </Document>
  );
}

function Document({children, user}){
  const { pathname } = useLocation();
  return(
    < html lang = "es" >
      <head>
        <Meta/>
        <Links/>
        <title></title>
      </head>

      <body>
      { pathname === '/login'
        || pathname === '/create-account'
        || pathname === '/forgot-password'
        ? <></>
        : <Navigation user={user}/>
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
        <div className="error-page">
          <h1 className="title">Ups... Ha ocurrido un error</h1>
          <img className='image' src="/img/info-octagon.svg" alt="error"/>
          <p className="information">
            { error.name.toString() === 'FetchError'
              ? 'No se ha podido establecer conexión con el servidor'
              : 'Probablemente no se pudo establecer conexión con el servidor'
            }
          </p>
        </div>
      </Document>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}

