import {authenticator} from "../auth/auth.server";

import Logo from '../components/logo';

import Styles from '../styles/nosotros.css';

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: Styles
    }
  ]
}

export async function loader({ request }: any){
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  return {

  }
}

export default function Nosotros (){
  return (
    <div className="container about-us">
      <Logo/>

      <div className='information'>
        <h1 className='heading'>Descubre mas sobre nosotros</h1>
        <h3 className='subheading'>¿Quienes somos?</h3>

        <p>
          Bienvenido a Grupo Sosa Morales, un distinguido despacho de abogados con una sólida presencia tanto
          en la ciudad de Tela como en el dinámico escenario legal de Estados Unidos. En Grupo Sosa Morales,
          nos enorgullece ofrecer servicios legales integrales y personalizados que se adaptan a las necesidades de
          nuestros clientes. Nuestro equipo de abogados altamente calificados combina la experiencia local en la comunidad
          de Tela con un profundo conocimiento de las complejidades legales internacionales, brindando asesoramiento
          experto y soluciones efectivas. Con un compromiso inquebrantable con la excelencia, nos esforzamos por ser
          la primera opción para aquellos que buscan representación legal confiable, ya sea en asuntos
          locales o transnacionales. En Grupo Sosa Morales, no solo defendemos sus derechos; construimos relaciones
          duraderas basadas en la confianza y la dedicación a la excelencia jurídica.
        </p>
      </div>


    </div>
  )
}
