import { MainComponentHeaderToggler } from "../Utility";
import sparkles from "../assets/images/icons/sparkles.svg";

export function Skills({ onSelectMainComponent, selectMainComponent }) {
  const text = "Skills";

  return (
    <div className="mainComponent">
      <MainComponentHeaderToggler
        mainIcon={sparkles}
        text={text}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
    </div>
  );
}
