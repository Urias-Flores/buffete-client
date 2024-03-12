export default function Input({
  title,
  name,
  type = "text",
  placeholder = "",
  maxLength = 1000,
  value,
  setValue,
  error,
}: any) {
  return (
    <div className="input">
      <label htmlFor={name}>{title}</label>
      <input
        name={name}
        id={name}
        type={type}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      {error ? <p className="error">{error}</p> : null}
    </div>
  );
}
