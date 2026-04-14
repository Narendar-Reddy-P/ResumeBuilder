import sparkles from "../assets/images/icons/sparkles.svg";
import deleteIcon from "../assets/images/icons/delete-icon.svg";
import { CircularPlus } from "../Icon";
import { ComponentHeader } from "../MinorComponents/ComponentHeader";
import { useComponent } from "../contexts/TogglerContext";
import { Icon } from "../MinorComponents/Icon";
import { useSkills } from "../contexts/SkillsContext";

export function Skills() {
  const { component } = useComponent();
  const { skills, addSkill } = useSkills();

  return (
    <div>
      <ComponentHeader mainIcon={sparkles} text={"Skills"} />
      {component === "Skills" && (
        <div>
          <div>
            {skills.map((skill) => (
              <Skill key={skill.id} skill={skill} />
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

function Skill({ skill }) {
  const { removeSkill, changeSkill } = useSkills();
  return (
    <div>
      <input value={skill.name} onChange={changeSkill}></input>
      <Icon
        src={deleteIcon}
        onClick={() => removeSkill(skill.id)}
        size={"small"}
      />
    </div>
  );
}
