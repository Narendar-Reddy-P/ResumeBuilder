import styles from "./TextArea.module.css";

export function TextArea({
  id,
  header,
  type,
  value = "",
  onChange = { onChange },
}) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>{header}</label>
      <textarea className={styles.textarea} type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
}
