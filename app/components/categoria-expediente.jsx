import SubcategoriaExpediente from "./subcategoria-expediente";

export default function CategoriaExpediente ({ category, showCategory, setShowCategory, showSubcategory, setShowSubcategory }){

  const { CategoryID, Name } = category

  return (
    <div className="record-category">
      <div
        className="record-category-up"
        onClick={ () => { setShowCategory( showCategory === CategoryID ? 0 : CategoryID ) } }
      >
        <p>{ Name }</p>
        <img src="/img/chevron-down.svg" alt="arrow"/>
      </div>
      <div className={`record-subcategories ${ showCategory === CategoryID ? 'active' : '' }`}>
        <SubcategoriaExpediente
          subcategory={ { Name:'Subcategoria 1', SubcategoryID:1 } }
        />
        <SubcategoriaExpediente
          subcategory={ { Name:'Subcategoria 2', SubcategoryID:2 } }
        />
      </div>
    </div>
  )
}
