import styles from "./Input.module.css";

export function Input({
  id,
  header,
  type,
  value = "",
  onChange = { onChange },
}) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>{header}</label>
      <input className={styles.input} type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
}
