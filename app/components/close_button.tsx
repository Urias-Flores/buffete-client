export default function CloseButton({ hideModal }: any) {
  return (
    <img
      src="/img/x.svg"
      className="button-close"
      alt="close"
      onClick={() => {
        hideModal();
      }}
    />
  );
}
