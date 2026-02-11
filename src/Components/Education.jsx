import { MainComponentHeaderToggler } from "../Utility";
import academicCap from "../assets/images/icons/academic-cap.svg";

export function Education({ onSelectMainComponent, selectMainComponent }) {
  const text = "Education";

  return (
    <div className="mainComponent">
      <MainComponentHeaderToggler
        mainIcon={academicCap}
        text={text}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
    </div>
  );
}
