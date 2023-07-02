export default function Categoria ({ category }){

  const { Name } = category

  return (
    <div className="category">
      <div className="information">
        <p className="name">{Name}</p>
        <hr className="line"/>
      </div>
      <ul className="subcategories">
        <li><span>Subcategoria 1</span></li>
        <li><span>Subcategoria 2</span></li>
        <li><span>Subcategoria 3</span></li>
      </ul>
    </div>
  )
}
