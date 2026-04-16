import togglerDown from "../assets/images/icons/toggler-down.svg";
import deleteIcon from "../assets/images/icons/delete-icon.svg";

import projectIcon from "../assets/images/icons/projects-icon.svg";

import { CircularPlus } from "../Icon";
import { ComponentHeader } from "../MinorComponents/ComponentHeader";
import { useComponent } from "../contexts/TogglerContext";
import { Input } from "../MinorComponents/Input";
import { TextArea } from "../MinorComponents/TextArea";
import { Icon } from "../MinorComponents/Icon";
import { useProjects } from "../contexts/ProjectsContext";
import styles from "./Projects.module.css";

export function Projects() {
  const { component } = useComponent();
  const { projects, addProject } = useProjects();

  return (
    <div>
      <ComponentHeader mainIcon={projectIcon} text={"Projects"} />
      {component === "Projects" && (
        <div className={styles.formWrapper}>
          <div>
            {projects.map((project) => (
              <ProjectForm id={project.id} key={project.id} />
            ))}
          </div>
          <div onClick={addProject} className={styles.addButton}>
            <CircularPlus />
            <span>&nbsp; Add Project</span>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectForm({ id }) {
  const {
    projects,
    removeProject,
    selectProject,
    changeTitle,
    changeTechStack,
    changeStartDate,
    changeEndDate,
    changeDescription,
  } = useProjects();

  const { title, techStack, startDate, endDate, description, selected } =
    projects.find((project) => project.id === id);

  return (
    <div>
      <header onClick={() => selectProject(id)} className={`${styles.itemHeader} ${selected ? styles.itemHeaderOpen : ''}`}>
        <span>{`${title || "Project Title"}, ${techStack || "Tech Stack"}`}</span>
        <div className={styles.icons}>
          <Icon src={togglerDown} size={"smaller"} />
          <Icon
            src={deleteIcon}
            onClick={(e) => {
              e.stopPropagation();
              removeProject(id);
            }}
            size={"small"}
          />
        </div>
      </header>
      {selected && (
        <div>
          <Input
            id={id}
            type="text"
            header="Title"
            value={title}
            onChange={(e) => changeTitle(id, e.target.value)}
          />

          <Input
            id={id}
            type="text"
            header="Tech Stack"
            value={techStack}
            onChange={(e) => changeTechStack(id, e.target.value)}
          />

          <Input
            id={id}
            type="text"
            header="Start Date"
            value={startDate}
            onChange={(e) => changeStartDate(id, e.target.value)}
          />

          <Input
            id={id}
            type="text"
            header="End Date"
            value={endDate}
            onChange={(e) => changeEndDate(id, e.target.value)}
          />

          <TextArea
            id={id}
            header="Description"
            value={description}
            onChange={(e) => changeDescription(id, e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
