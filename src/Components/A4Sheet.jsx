import { usePersonalInfo } from "../contexts/personalContext";
import { useEducation } from "../contexts/educationContext";
import { useWork } from "../contexts/workContext";
import { useProjects } from "../contexts/ProjectsContext";
import { useMore } from "../contexts/MoreContext";
import { useSkills } from "../contexts/SkillsContext";
import styles from "./A4Sheet.module.css";

export function A4Sheet({ id, ref }) {
  const { firstName, lastName, jobTitle, phone, email, github, portfolio, address, summary } =
    usePersonalInfo();

  const { education } = useEducation();
  const { works } = useWork();
  const { projects } = useProjects();
  const { skills } = useSkills();
  const { data } = useMore();

  return (
    <div id={id} className={styles.a4sheet} ref={ref}>
      <div className={styles.splitHeader}>
        <div className={styles.headerLeft}>
          <h1>{[firstName, lastName].filter(Boolean).join(" ")}</h1>
          {jobTitle && <h2 className={styles.jobTitle}>{jobTitle}</h2>}
        </div>
        <div className={styles.headerRight}>
          {email && <p>{email}</p>}
          {phone && <p>{phone}</p>}
          {address && <p>{address}</p>}
          {github && <p>GitHub: {github}</p>}
          {portfolio && <p>Portfolio: {portfolio}</p>}
        </div>
      </div>
      <h3>Career Objective</h3>
      <hr></hr>
      <p>{summary}</p>
      <h3>Education</h3>
      <hr></hr>
      {education.map((x) => (
        <div key={x.id} className={styles.sectionItem}>
          <div className={styles.itemHeader}>
            <span>{x.course}</span>
            <span>{`${x.startDate} - ${x.endDate}`}</span>
          </div>
          <p className={styles.itemSub}>{x.school}</p>
        </div>
      ))}
      <h3>Work Experience</h3>
      <hr></hr>
      {works.map((x) => (
        <div key={x.id} className={styles.sectionItem}>
          <div className={styles.itemHeader}>
            <span>{`${x.position} | ${x.company}`}</span>
            <span>{`${x.startDate} - ${x.endDate}`}</span>
          </div>
          <li>{x.description}</li>
        </div>
      ))}
      <h3>Projects</h3>
      <hr></hr>
      {projects.map((x) => (
        <div key={x.id} className={styles.sectionItem}>
          <div className={styles.itemHeader}>
            <span>{`${x.title} | ${x.techStack}`}</span>
            <span>{`${x.startDate} - ${x.endDate}`}</span>
          </div>
          <li>{x.description}</li>
        </div>
      ))}
      <h3>Skills</h3>
      <hr></hr>
      <p className={styles.skillsList}>
        {skills.map(skill => skill.name).filter(Boolean).join(" • ")}
      </p>
      {data.map((x) => (
        <div key={x.id} className={styles.sectionItem}>
          <h3>{x.name}</h3>
          <hr></hr>

          <div key={x.details[0]?.id || '1'} className={styles.linkContainer}>
            <span>{x.details[0]?.value}</span>
            {x.details[1] && (
              <a href={x.details[1].url}>
                <span>{x.details[1].linkText}</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
