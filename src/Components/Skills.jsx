import sparkles from "../assets/images/icons/sparkles.svg";
import deleteIcon from "../assets/images/icons/delete-icon.svg";
import { CircularPlus } from "../Icon";
import { ComponentHeader } from "../MinorComponents/ComponentHeader";
import { useComponent } from "../contexts/TogglerContext";
import { Icon } from "../MinorComponents/Icon";
import { useSkills } from "../contexts/SkillsContext";
import styles from "./Skills.module.css";

export function Skills() {
  const { component } = useComponent();
  const { skills, addSkill } = useSkills();

  return (
    <div>
      <ComponentHeader mainIcon={sparkles} text={"Skills"} />
      {component === "Skills" && (
        <div className={styles.formWrapper}>
          <div>
            {skills.map((skill) => (
              <Skill key={skill.id} skill={skill} />
            ))}
          </div>
          <div onClick={addSkill} className={styles.addButton}>
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
    <div className={styles.itemHeader}>
      <input 
        value={skill.name} 
        onChange={(e) => changeSkill(skill.id, e.target.value)} 
        className={styles.skillInput}
      />
      <div className={styles.icons}>
        <Icon
          src={deleteIcon}
          onClick={() => removeSkill(skill.id)}
          size={"small"}
        />
      </div>
    </div>
  );
}
