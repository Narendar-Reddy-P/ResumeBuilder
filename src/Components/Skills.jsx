import { MainComponentHeaderToggler } from "../Utility";
import sparkles from "../assets/images/icons/sparkles.svg";
import { DeleteIcon, CircularPlus } from "../Icon";

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
      {selectMainComponent === text && (
        <div className="p-4 w-full">
          <div w-full>
            <Skill />
          </div>
          <div className="flex justify-end m-4 mb-0 text-indigo-900 font-bold">
            <CircularPlus />
            <span>&nbsp; Add Skill</span>
          </div>
        </div>
      )}
    </div>
  );
}

function Skill() {
  return (
    <div className="w-full border border-indigo-800 rounded-lg flex p-2  gap-3 items-center">
      <input className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"></input>
      <DeleteIcon />
    </div>
  );
}
