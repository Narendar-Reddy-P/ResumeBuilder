import styles from './ComponentToggler.module.css';
import { Image } from './Image';
import togglerUp from '../assets/toggler-up.png';
import togglerDown from '../assets/toggler-down.png';

export function ComponentToggler({
  mainIcon,
  text,
  onSelectMainComponent,
  selectMainComponent,
}) {
  let isOpen = selectMainComponent === text;
  return (
    <div onClick={() => onSelectMainComponent(text)} className={styles.header}>
      <Image url={mainIcon} />
      <h3>{text}</h3>
      <div>
        {isOpen ? <Image url={togglerUp} /> : <Image url={togglerDown} />}
      </div>
    </div>
  );
}
