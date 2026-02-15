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
    <div className="mainComponent">
      <MainComponentHeaderToggler
        mainIcon={projectIcon}
        text={"Projects"}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
      {selectMainComponent === "Projects" && (
        <div className="p-4 w-full">
          <div className="w-full">
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
          <div
            className="flex justify-end m-4 mb-0 text-indigo-900 font-bold cursor-pointer"
            onClick={addProject}
          >
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
    <div className="w-full border border-indigo-800 rounded-lg mb-2">
      <header
        className="flex items-center justify-between cursor-pointer p-4 pl-3"
        onClick={() => onSelectProject(id)}
      >
        <span>{`${title || "Project Title"}, ${techStack || "Tech Stack"}`}</span>
        <div className="ml-auto flex gap-4">
          <img src={togglerDown} className="w-4 h-4" />
          <img
            src={deleteIcon}
            className="w-4 h-4"
            onClick={() => removeProject(id)}
          />
        </div>
      </header>
      {isOpen && (
        <div>
          <div className=" w-full px-4 ">
            <label htmlFor={id} className="text-indigo-900 cursor-pointer">
              {"Title"}
            </label>
            <br />
            <input
              type="text"
              className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"
              id={id}
              value={title}
              onChange={(e) => onChangeTitle(id, e.target.value)}
            />
          </div>

          <div className=" w-full px-4 ">
            <label htmlFor={id} className="text-indigo-900 cursor-pointer">
              {"Tech Stack"}
            </label>
            <br />
            <input
              type="text"
              className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"
              id={id}
              value={techStack}
              onChange={(e) => onChangeTechStack(id, e.target.value)}
            />
          </div>

          <div className=" w-full px-4 ">
            <label htmlFor={id} className="text-indigo-900 cursor-pointer">
              {"Start Date"}
            </label>
            <br />
            <input
              type="text"
              className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"
              id={id}
              value={startDate}
              onChange={(e) => onChangeStartDate(id, e.target.value)}
            />
          </div>

          <div className=" w-full px-4 ">
            <label htmlFor={id} className="text-indigo-900 cursor-pointer">
              {"End Date"}
            </label>
            <br />
            <input
              type="text"
              className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"
              id={id}
              value={endDate}
              onChange={(e) => onChangeEndDate(id, e.target.value)}
            />
          </div>

          <div className="flex flex-col  gap-3 w-full p-4">
            <label
              htmlFor={id}
              rows={5}
              className="text-indigo-900 cursor-pointer"
            >
              {"Description"}
            </label>
            <textarea
              className="bg-indigo-100  text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm  p-1 outline-none h-30 w-full "
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
