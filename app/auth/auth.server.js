import {Authenticator, AuthorizationError} from "remix-auth";
import {FormStrategy} from "remix-auth-form";
import {sessionStorage} from './session.server';
import {login} from '../services/auth.server';

export let authenticator = new Authenticator(sessionStorage, {
  throwOnError: true,
  sessionErrorKey: 'sessionErrorKey'
});

authenticator.use(
  new FormStrategy(async ({ form }) => {
    let email = form.get("email");
    let password = form.get("password");

    if(email.length === 0){
      throw new AuthorizationError('El email es obligatorio')
    }

    if(password.length === 0){
      throw new AuthorizationError('La contraseña es obligatorio')
    }

    const response = await login(email, password);
    switch ( response?.Result ){
      case -1:
        throw  new AuthorizationError('El correo electrónico no fue encontrado')
      case 0:
        throw  new AuthorizationError('La contraseña ingresada es incorrecta')
      case 1:
        return response?.User
      default:
        throw new AuthorizationError('La respuesta obtenida del servidor no es valida`')
    }
  }),
  "user-pass"
);
