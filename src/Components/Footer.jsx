import { useEducation } from "../contexts/educationContext";
import { DeleteIcon, EditIcon, EyeIcon, PrintIcon, ResetIcon } from "../Icon";
import { useMore } from "../contexts/MoreContext";
import { useProjects } from "../contexts/ProjectsContext";
import { useSkills } from "../contexts/SkillsContext";
import { useWork } from "../contexts/workContext";
import { usePersonalInfo } from "../contexts/personalContext";
import styles from "./Footer.module.css";
import { useEffect, useState } from "react";

export default function Footer({ preview, setPreview, handlePrint }) {
  const [width, setWidth] = useState(window.innerWidth);
  const { emptyEducation, resetEducation } = useEducation();
  const { emptyMore, resetMore } = useMore();
  const { emptyProjects, resetProjects } = useProjects();
  const { emptySkills, resetSkills } = useSkills();
  const { emptyWork, resetWork } = useWork();
  const { emptyPersonalInfo, resetPersonalInfo } = usePersonalInfo();

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      {width <= 1024 && (
        <div className={styles.button} onClick={() => setPreview(!preview)}>
          {preview ? <EditIcon /> : <EyeIcon />}
        </div>
      )}
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
