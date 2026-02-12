import { MainComponentHeaderToggler } from "../Utility";
import academicCap from "../assets/images/icons/academic-cap.svg";
import { EducationForm } from "../Utility";
import { CircularPlus } from "../Icon";

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
      {selectMainComponent === text && (
        <div className="p-4 w-full">
          <div w-full>
            <EducationForm />
          </div>
          <div className="flex justify-end m-4 mb-0 text-indigo-900 font-bold">
            <CircularPlus />
            <span>&nbsp; Add education</span>
          </div>
        </div>
      )}
    </div>
  );
}
