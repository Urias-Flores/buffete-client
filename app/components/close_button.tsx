export default function CloseButton ({ setVisibleForm }: any){
  return (
    <img
      src="/img/x.svg"
      className="button-close"
      alt="close"
      onClick={
        ()=> {
          setVisibleForm(false)
        }
      }
    />
  )
}
