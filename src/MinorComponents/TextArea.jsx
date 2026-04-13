export function TextArea({ id, header, value = "", onChange = {}, rows = 5 }) {
  return (
    <div>
      <label htmlFor={id} rows={rows}>
        {header}
      </label>
      <textarea id={id} value={value} onChange={onChange} />
    </div>
  );
}
