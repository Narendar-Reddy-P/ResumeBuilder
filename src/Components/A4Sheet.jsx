import { usePersonalInfo } from "../contexts/personalContext";
import { useEducation } from "../contexts/educationContext";
import { useWork } from "../contexts/workContext";
import { useProjects } from "../contexts/ProjectsContext";
import { useMore } from "../contexts/MoreContext";
import { useSkills } from "../contexts/SkillsContext";
import styles from "./A4Sheet.module.css";

export function A4Sheet({ id }) {
  const { firstName, lastName, phone, email, address, summary } =
    usePersonalInfo();
  const { education } = useEducation();
  const { works } = useWork();
  const { projects } = useProjects();
  const { skills } = useSkills();
  const { data } = useMore();

  return (
    <div id={id} className={styles.a4sheet}>
      <h1>{`${firstName} ${lastName}`}</h1>
      <p>{`${email} | ${phone} | ${address}`}</p>
      <br></br>
      <h3>Career Objective</h3>
      <hr></hr>
      <p>{summary}</p>
      <br></br>
      <h3>Education</h3>
      <hr></hr>
      {education.map((x) => (
        <div key={x.id}>
          <div>
            <span>{x.course}</span>
            <span>{`${x.startDate} - ${x.endDate}`}</span>
          </div>
          <p>{x.school}</p>
          <br></br>
        </div>
      ))}
      <h3>Work Experience</h3>
      <hr></hr>
      {works.map((x) => (
        <div key={x.id}>
          <div>
            <span>{`${x.position} | ${x.company}`}</span>
            <span>{`${x.startDate} - ${x.endDate}`}</span>
          </div>
          <li>{x.description}</li>
          <br></br>
        </div>
      ))}
      <h3>Projects</h3>
      <hr></hr>
      {projects.map((x) => (
        <div key={x.id}>
          <div>
            <span>{`${x.title} | ${x.techStack}`}</span>
            <span>{`${x.startDate} - ${x.endDate}`}</span>
          </div>
          <li>{x.description}</li>
          <br></br>
        </div>
      ))}
      {data.map((x) => (
        <div key={x.id}>
          <h3>{x.name}</h3>
          <hr></hr>

          <span key={x.details[0].id}>
            <span>{`${x.details[0].value}`}</span>

            <a href={x.details[1]?.url}>
              <span>{x.details[1]?.linkText}</span>
            </a>
          </span>
        </div>
      ))}
    </div>
  );
}
