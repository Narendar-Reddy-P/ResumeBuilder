import briefcase from "../assets/images/icons/briefcase.svg";
import { MainComponentHeaderToggler, WorkXPForm } from "../Utility";
import { CircularPlus } from "../Icon";

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
        <div className="p-4 w-full">
          <div w-full>
            <WorkXPForm />
          </div>
          <div className="flex justify-end m-4 mb-0 text-indigo-900 font-bold">
            <CircularPlus />
            <span>&nbsp; Add work experience</span>
          </div>
        </div>
      )}
    </div>
  );
}
