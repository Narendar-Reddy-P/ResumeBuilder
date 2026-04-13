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
    <div>
      <MainComponentHeaderToggler
        mainIcon={sparkles}
        text={"Skills"}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
      {selectMainComponent === "Skills" && (
        <div>
          <div>
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
          <div onClick={addSkill}>
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
    <div>
      <input value={name} onChange={onChangeSkill}></input>
      <img
        src={deleteIcon}
        onClick={() => {
          removeSkill(id);
        }}
      />
    </div>
  );
}
