import { Link } from "@remix-run/react";

// eslint-disable-next-line no-empty-pattern
export default function Navegacion ({}){
    return (
        <header>
            <h2 className="logo">Logo</h2>
            <nav className="nav">
                <Link
                    className="link"
                    to="/" >
                    Inicio
                </Link>
            </nav>
        </header>
    )
}
