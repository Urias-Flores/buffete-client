import {authenticator} from "../auth/auth.server";

export async function loader({ request }){
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  return {

  }
}

export default function Nosotros ({}){
    return (
        <div className="container">
            <h1>Desde nosotros</h1>
        </div>
    )
}
