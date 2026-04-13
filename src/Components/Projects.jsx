import { useState } from "react";
import togglerDown from "../assets/images/icons/toggler-down.svg";
import deleteIcon from "../assets/images/icons/delete-icon.svg";

import projectIcon from "../assets/images/icons/projects-icon.svg";

import { MainComponentHeaderToggler } from "../Utility";
import { CircularPlus } from "../Icon";

export function Projects({
  onSelectMainComponent,
  selectMainComponent,
  projects,
  setProjects,
}) {
  const [selectProject, setSelectProject] = useState(projects[0]?.id || "");

  function handleSelectProject(id) {
    if (selectProject === id) {
      setSelectProject("");
    } else {
      setSelectProject(id);
    }
  }

  function addProject() {
    const newProject = {
      id: crypto.randomUUID(),
      title: "",
      techStack: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    setProjects([...projects, newProject]);
    setSelectProject(newProject.id);
  }

  function removeProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }

  function handleChangeTitle(id, value) {
    setProjects(
      projects.map((x) => (x.id !== id ? x : { ...x, title: value })),
    );
  }

  function handleChangeTechStack(id, value) {
    setProjects(
      projects.map((x) => (x.id !== id ? x : { ...x, techStack: value })),
    );
  }

  function handleChangeStartDate(id, value) {
    setProjects(
      projects.map((x) => (x.id !== id ? x : { ...x, startDate: value })),
    );
  }

  function handleChangeEndDate(id, value) {
    setProjects(
      projects.map((x) => (x.id !== id ? x : { ...x, endDate: value })),
    );
  }

  function handleChangeDescription(id, value) {
    setProjects(
      projects.map((x) => (x.id !== id ? x : { ...x, description: value })),
    );
  }

  return (
    <div>
      <MainComponentHeaderToggler
        mainIcon={projectIcon}
        text={"Projects"}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
      {selectMainComponent === "Projects" && (
        <div>
          <div>
            {projects.map((project) => (
              <ProjectForm
                title={project.title}
                techStack={project.techStack}
                startDate={project.startDate}
                endDate={project.endDate}
                description={project.description}
                isOpen={project.id === selectProject}
                onSelectProject={handleSelectProject}
                id={project.id}
                key={project.id}
                removeProject={removeProject}
                onChangeTitle={handleChangeTitle}
                onChangeTechStack={handleChangeTechStack}
                onChangeStartDate={handleChangeStartDate}
                onChangeEndDate={handleChangeEndDate}
                onChangeDescription={handleChangeDescription}
              />
            ))}
          </div>
          <div onClick={addProject}>
            <CircularPlus />
            <span>&nbsp; Add Project</span>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectForm({
  title,
  techStack,
  startDate,
  endDate,
  description,
  isOpen,
  onSelectProject,
  id,
  removeProject,
  onChangeTitle,
  onChangeTechStack,
  onChangeStartDate,
  onChangeEndDate,
  onChangeDescription,
}) {
  return (
    <div>
      <header onClick={() => onSelectProject(id)}>
        <span>{`${title || "Project Title"}, ${techStack || "Tech Stack"}`}</span>
        <div>
          <img src={togglerDown} />
          <img src={deleteIcon} onClick={() => removeProject(id)} />
        </div>
      </header>
      {isOpen && (
        <div>
          <div>
            <label htmlFor={id}>{"Title"}</label>
            <br />
            <input
              type="text"
              id={id}
              value={title}
              onChange={(e) => onChangeTitle(id, e.target.value)}
            />
          </div>

          <div>
            <label htmlFor={id}>{"Tech Stack"}</label>
            <br />
            <input
              type="text"
              id={id}
              value={techStack}
              onChange={(e) => onChangeTechStack(id, e.target.value)}
            />
          </div>

          <div>
            <label htmlFor={id}>{"Start Date"}</label>
            <br />
            <input
              type="text"
              id={id}
              value={startDate}
              onChange={(e) => onChangeStartDate(id, e.target.value)}
            />
          </div>

          <div>
            <label htmlFor={id}>{"End Date"}</label>
            <br />
            <input
              type="text"
              id={id}
              value={endDate}
              onChange={(e) => onChangeEndDate(id, e.target.value)}
            />
          </div>

          <div>
            <label htmlFor={id} rows={5}>
              {"Description"}
            </label>
            <textarea
              id={id}
              value={description}
              onChange={(e) => onChangeDescription(id, e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
