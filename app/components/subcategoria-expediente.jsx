export default function SubcategoriaExpediente  ({ subcategory, showSubcategory, setShowSubcategory }){

  const { SubcategoryID, Name } = subcategory

  return (
    <div className={`subcategory ${ showSubcategory === SubcategoryID ? 'active' : '' }`}>
      <p>{ Name }</p>
      <img src="/img/chevron-down.svg" alt="arrow"/>

      <div className="documents">
        <p>Aqui los documentos</p>
      </div>
    </div>
  )
}
