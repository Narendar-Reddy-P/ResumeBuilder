import styles from "./ComponentHeader.module.css";
import togglerUp from "../assets/images/icons/toggler-up.svg";
import togglerDown from "../assets/images/icons/toggler-down.svg";
import { useComponent } from "../contexts/TogglerContext";
import { Icon } from "../MinorComponents/Icon";

export function ComponentHeader({ mainIcon, text }) {
  const { component, toggleComponent } = useComponent();
  let isOpen = component === text;
  return (
    <div onClick={() => toggleComponent(text)} className={styles.header}>
      <Icon src={mainIcon} size={"small"} />
      <h3>{text}</h3>
      <div>
        {isOpen ? (
          <Icon src={togglerUp} size={"small"} />
        ) : (
          <Icon src={togglerDown} size={"small"} />
        )}
      </div>
    </div>
  );
}
