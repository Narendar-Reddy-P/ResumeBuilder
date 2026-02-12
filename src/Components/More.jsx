import { MainComponentHeaderToggler, SectionForm } from "../Utility";
import ellipsis from "../assets/images/icons/ellipsis-horizontal.svg";
import { CircularPlus } from "../Icon";

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
      {selectMainComponent === text && (
        <div className="p-4 w-full">
          <div w-full>
            <SectionForm />
          </div>
          <div className="flex justify-end my-4 mb-0 text-indigo-900 font-bold">
            <CircularPlus />
            <span>&nbsp; Add Section</span>
          </div>
        </div>
      )}
    </div>
  );
}
