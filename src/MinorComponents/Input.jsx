export function Input({
  id,
  header,
  type,
  value = "",
  onChange = { onChange },
}) {
  return (
    <div>
      <label htmlFor={id}>{header}</label>
      <br />
      <input type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
}
