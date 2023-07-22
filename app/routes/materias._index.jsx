import CategoriaExpediente from "../components/categoria-expediente";
import { getCategories } from "~/models/category.server";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import clientStyle from '~/styles/clientes.css'
import FormCategory from "../components/formCategory";

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: clientStyle
    }
  ]
}

export async function loader(){
  return await getCategories()
}

export default function Categorias (){

  const [showCategory, setShowCategory] = useState(0);
  const [showSubcategory, setShowSubcategory] = useState(0);

  const [showModalCategory, setShowModalCategory] = useState(false);
  const [category, setCategory] = useState({});

  const categories = useLoaderData()

  return (
    <div className="container">

      { showModalCategory &&
        <FormCategory
          category={category}
          setShowModalCategory={setShowModalCategory}
        />
      }

      <h1 className="heading">Lista de materias de documentos</h1>
      <h2 className="subheading">
        Gestiona las listas disponibles en la plataforma creando nuevas materias.
      </h2>

      <div className="search">
        <img src="/img/search.svg" alt="search"/>
        <input type="text" placeholder="Buscar"/>
      </div>

      <div className="actions">
        <button
          className="button"
          onClick={()=>{ setShowModalCategory(true) }}
          type="button"
        >
          <img src="/img/add.svg" alt="add"/>
          <p>Agregar documento</p>
        </button>
      </div>

      <div className="record-categories">
        { categories.map( category =>
            <CategoriaExpediente
              key = {category.CategoryID}
              category={category}
              showCategory={showCategory}
              setShowCategory={setShowCategory}
              showSubcategory={showSubcategory}
              setShowSubcategory={setShowSubcategory}
            />
          )
        }
      </div>
    </div>
  )
}
