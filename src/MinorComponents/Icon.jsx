import styles from "./Icon.module.css";

export function Icon({ src, onClick = undefined, size }) {
  return <img src={src} className={styles[size]} onClick={onClick} />;
}
