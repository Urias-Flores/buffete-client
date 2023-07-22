import SubcategoriaExpediente from "./subcategoria-expediente";

export default function CategoriaExpediente ({ category, showCategory, setShowCategory, showSubcategory, setShowSubcategory }){

  const { CategoryID, Name, Subcategories } = category

  console.log(category)

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
        {
          Subcategories.map( subcategory =>
            <SubcategoriaExpediente
              key={subcategory.SubcategoryID}
              subcategory={subcategory}
              showSubcategory={showSubcategory}
              setShowSubcategory={setShowSubcategory}
            />
          )
        }
      </div>
    </div>
  )
}
