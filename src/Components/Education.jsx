import academicCap from "../assets/images/icons/academic-cap.svg";
import togglerDown from "../assets/images/icons/toggler-down.svg";
import deleteIcon from "../assets/images/icons/delete-icon.svg";
import { Icon } from "../MinorComponents/Icon";
import { Input } from "../MinorComponents/Input";
import { TextArea } from "../MinorComponents/TextArea";

import { CircularPlus } from "../Icon";

import { useEducation } from "../contexts/educationContext";
import { ComponentHeader } from "../MinorComponents/ComponentHeader";
import { useComponent } from "../contexts/TogglerContext";
import styles from "./Education.module.css";

export function Education() {
  const { education, addEducation } = useEducation();
  const { component } = useComponent();
  const text = "Education";

  return (
    <div>
      <ComponentHeader mainIcon={academicCap} text={text} />
      {component === text && (
        <div className={styles.formWrapper}>
          <div>
            {education.map((tut) => (
              <EducationForm key={tut.id} id={tut.id} />
            ))}
          </div>
          <div onClick={addEducation} className={styles.addButton}>
            <CircularPlus />
            <span>&nbsp; Add education</span>
          </div>
        </div>
      )}
    </div>
  );
}

function EducationForm({ id }) {
  const {
    education,
    removeEducation,
    selectEducation,
    changeSchool,
    changeCourse,
    changeStartDate,
    changeEndDate,
    changeDescription,
  } = useEducation();
  const tempEdu = education.find((edu) => edu.id === id);

  if (!tempEdu) {
    return null;
  }

  return (
    <div>
      <header onClick={() => selectEducation(id)} className={`${styles.itemHeader} ${tempEdu.selected ? styles.itemHeaderOpen : ''}`}>
        <span>{`${tempEdu.school || "School"}, ${tempEdu.course || "Course"}`}</span>
        <div className={styles.icons}>
          <Icon src={togglerDown} size={"smaller"} />
          <Icon
            src={deleteIcon}
            onClick={(e) => {
              e.stopPropagation();
              removeEducation(id);
            }}
            size={"small"}
          />
        </div>
      </header>
      {tempEdu.selected && (
        <div>
          <Input
            id={id}
            type="text"
            header="School"
            value={tempEdu.school}
            onChange={(e) => changeSchool(id, e.target.value)}
          />

          <Input
            id={id}
            type="text"
            header="Course"
            value={tempEdu.course}
            onChange={(e) => changeCourse(id, e.target.value)}
          />

          <Input
            id={id}
            type="text"
            header="Start Date"
            value={tempEdu.startDate}
            onChange={(e) => changeStartDate(id, e.target.value)}
          />

          <Input
            id={id}
            type="text"
            header="End Date"
            value={tempEdu.endDate}
            onChange={(e) => changeEndDate(id, e.target.value)}
          />

          <TextArea
            id={id}
            header="Description"
            value={tempEdu.description}
            onChange={(e) => changeDescription(id, e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
