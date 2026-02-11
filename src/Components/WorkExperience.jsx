import briefcase from "../assets/images/icons/briefcase.svg";
import { MainComponentHeaderToggler, WorkXPForm } from "../Utility";

export function WorkExperience({ onSelectMainComponent, selectMainComponent }) {
  const text = "Work Experience";

  return (
    <div className="mainComponent">
      <MainComponentHeaderToggler
        mainIcon={briefcase}
        text={text}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
      {selectMainComponent === text && (
        <div>
          <div>
            <WorkXPForm />
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
}
