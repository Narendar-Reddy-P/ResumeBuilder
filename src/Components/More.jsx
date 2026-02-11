import { MainComponentHeaderToggler } from "../Utility";
import ellipsis from "../assets/images/icons/ellipsis-horizontal.svg";

export function More({ onSelectMainComponent, selectMainComponent }) {
  const text = "More";

  return (
    <div className="mainComponent">
      <MainComponentHeaderToggler
        mainIcon={ellipsis}
        text={text}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
    </div>
  );
}
