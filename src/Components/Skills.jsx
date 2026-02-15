import { MainComponentHeaderToggler } from "../Utility";
import sparkles from "../assets/images/icons/sparkles.svg";
import deleteIcon from "../assets/images/icons/delete-icon.svg";
import { CircularPlus } from "../Icon";

export function Skills({
  onSelectMainComponent,
  selectMainComponent,
  skills,
  setSkills,
}) {
  function addSkill() {
    setSkills([...skills, { id: crypto.randomUUID(), name: "" }]);
  }

  function removeSkill(id) {
    setSkills(skills.filter((skill) => skill.id !== id));
  }

  function handleChangeSkill(id, value) {
    setSkills(skills.map((x) => (x.id !== id ? x : { ...x, name: value })));
  }
  return (
    <div className="mainComponent">
      <MainComponentHeaderToggler
        mainIcon={sparkles}
        text={"Skills"}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
      {selectMainComponent === "Skills" && (
        <div className="p-4 w-full">
          <div className="w-full">
            {skills.map((skill) => (
              <Skill
                key={skill.id}
                name={skill.name}
                removeSkill={removeSkill}
                id={skill.id}
                onChangeSkill={handleChangeSkill}
              />
            ))}
          </div>
          <div
            className="flex justify-end m-4 mb-0 text-indigo-900 font-bold cursor-pointer"
            onClick={addSkill}
          >
            <CircularPlus />
            <span>&nbsp; Add Skill</span>
          </div>
        </div>
      )}
    </div>
  );
}

function Skill({ name, removeSkill, id, onChangeSkill }) {
  return (
    <div className="w-full border border-indigo-800 rounded-lg flex p-2  gap-3 items-center mb-2">
      <input
        className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"
        value={name}
        onChange={onChangeSkill}
      ></input>
      <img
        src={deleteIcon}
        className="w-4 h-4 cursor-pointer"
        onClick={() => {
          removeSkill(id);
        }}
      />
    </div>
  );
}
