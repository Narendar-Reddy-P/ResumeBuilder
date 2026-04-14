import styles from "./ComponentHeader.module.css";
import togglerUp from "../assets/images/icons/toggler-up.svg";
import togglerDown from "../assets/images/icons/toggler-down.svg";
import { useComponent } from "../contexts/TogglerContext";
import { Icon } from "../MinorComponents/Icon";

export function ComponentHeader({ mainIcon, text }) {
  const { component, toggleComponent } = useComponent();
  let isOpen = component === text;
  return (
    <div className={styles.container1}>
      <div
        onClick={() => toggleComponent(text)}
        className={`${styles.container2} ${isOpen && styles.selected}`}
      >
        <Icon src={mainIcon} size={"small"} />
        <h3 className={styles.title}>{text}</h3>
        <div>
          {isOpen ? (
            <Icon src={togglerUp} size={"small"} />
          ) : (
            <Icon src={togglerDown} size={"small"} />
          )}
        </div>
      </div>
    </div>
  );
}
