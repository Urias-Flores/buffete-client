import Category from '~/components/categoria'
import { getCategories } from "~/models/category.server";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import styles from '~/styles/categorias.css'
import FormCategory from "../components/formCategory";

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader(){
  return await getCategories()
}

export default function Categorias ({}){

  const [showModalCategory, setShowModalCategory] = useState(false);
  const [category, setCategory] = useState({});

  const categories = useLoaderData()

  const showModal = ()=>{
    setShowModalCategory(true)
  }

  return (
    <div className="container">

      { showModalCategory &&
        <FormCategory
          category={category}
          setShowModalCategory={setShowModalCategory}
        />
      }

      <h1 className="heading">Lista de categorias de documentos</h1>
      <h2 className="subheading">
        Gestiona las listas disponibles en la plataforma creando nuevas,
        modifcando alguna existente o eliminando categorias.
      </h2>

      <div className="search">
        <img src="/img/search.svg" alt="image-search"/>
        <input type="text" placeholder="Buscar"/>
      </div>

      <div className="actions">
        <input
          className="button"
          onClick={()=>{ showModal() }}
          type="button"
          value="Agregar nuevo"
        />

        <input
          className="button"
          onClick={()=>{  }}
          type="submit"
          value="Editar"
        />

        <input
          className="button"
          onClick={() => {  }}
          type="submit"
          value="Eliminar"
        />
      </div>

      <div className="categories">
        { categories.map( category => <Category
          key = {category.CategoryID}
          category={category}
        /> ) }
      </div>
    </div>
  )
}
