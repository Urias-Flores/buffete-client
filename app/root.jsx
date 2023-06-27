import Navegacion from "./components/navegacion";
import stylesNormalize from "./styles/normalize.css"
import stylesGlobal from "./styles/global.css"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
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

export default function App() {
  return (
    <Document>
        <Outlet/>
    </Document>
  );
}

function Document({children}){
    return(
        < html lang = "es" >
            <head>
                <Meta/>
                <Links/>
            </head>

            <body>
                <Navegacion/>
                {children}
                <Scripts/>
                <LiveReload/>
            </body>
        </html>
    )
}
