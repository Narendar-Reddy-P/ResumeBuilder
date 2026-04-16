import { useEducation } from "../contexts/educationContext";
import { DeleteIcon, EditIcon, EyeIcon, PrintIcon, ResetIcon } from "../Icon";
import { useMore } from "../contexts/MoreContext";
import { useProjects } from "../contexts/ProjectsContext";
import { useSkills } from "../contexts/SkillsContext";
import { useWork } from "../contexts/workContext";
import { usePersonalInfo } from "../contexts/personalContext";
import styles from "./Footer.module.css";

export default function Footer({ preview, setPreview, handlePrint }) {
  const { emptyEducation, resetEducation } = useEducation();
  const { emptyMore, resetMore } = useMore();
  const { emptyProjects, resetProjects } = useProjects();
  const { emptySkills, resetSkills } = useSkills();
  const { emptyWork, resetWork } = useWork();
  const { emptyPersonalInfo, resetPersonalInfo } = usePersonalInfo();

  function emptyResume() {
    emptyEducation();
    emptyMore();
    emptyProjects();
    emptySkills();
    emptyWork();
    emptyPersonalInfo();
  }

  function resetResume() {
    resetEducation();
    resetMore();
    resetProjects();
    resetSkills();
    resetWork();
    resetPersonalInfo();
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.button} onClick={() => setPreview(!preview)}>
        {preview ? <EditIcon /> : <EyeIcon />}
      </div>
      <div className={styles.button} onClick={emptyResume}>
        <DeleteIcon />
      </div>
      <div className={styles.button} onClick={resetResume}>
        <ResetIcon />
      </div>
      <div className={styles.button} onClick={handlePrint}>
        <PrintIcon />
      </div>
    </footer>
  );
}
