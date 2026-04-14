import { createContext, useContext, useReducer } from "react";

const ProjectsContext = createContext();

let initialValue = [
  {
    id: crypto.randomUUID(),
    title: "E-Commerce Platform",
    techStack: "React, Node.js, Express, MongoDB",
    startDate: "Mar 2023",
    endDate: "May 2023",
    description:
      "Designed and developed a full-stack e-commerce platform with authentication, product filtering, cart management, and Stripe payment integration.",
    selected: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Task Management App",
    techStack: "React, Firebase",
    startDate: "Nov 2022",
    endDate: "Dec 2022",
    description:
      "Built a real-time task management application with drag-and-drop functionality and Firebase authentication.",
    selected: false,
  },
];

let tempProjectsEmpty = [
  {
    id: crypto.randomUUID(),
    title: "",
    techStack: "",
    startDate: "",
    endDate: "",
    description: "",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "AddProject":
      return [
        ...state.map((project) => {
          return { ...project, selected: false };
        }),
        {
          id: crypto.randomUUID(),
          title: "",
          techStack: "",
          startDate: "",
          endDate: "",
          description: "",
          selected: true,
        },
      ];
    case "RemoveProject":
      return [...state.filter((project) => project.id !== action.id)];
    case "SelectProject":
      return [
        ...state.map((project) =>
          project.id !== action.id
            ? { ...project, selected: false }
            : { ...project, selected: !project.selected },
        ),
      ];
    case "ChangeTitle":
      return [
        ...state.map((project) =>
          project.id !== action.id
            ? project
            : { ...project, title: action.title },
        ),
      ];
    case "ChangeTechStack":
      return [
        ...state.map((project) =>
          project.id !== action.id
            ? project
            : { ...project, techStack: action.techStack },
        ),
      ];

    case "ChangeStartDate":
      return [
        ...state.map((project) =>
          project.id !== action.id
            ? project
            : { ...project, startDate: action.startDate },
        ),
      ];
    case "ChangeEndDate":
      return [
        ...state.map((project) =>
          project.id !== action.id
            ? project
            : { ...project, endDate: action.endDate },
        ),
      ];
    case "ChangeDescription":
      return [
        ...state.map((project) =>
          project.id !== action.id
            ? project
            : { ...project, description: action.description },
        ),
      ];
    case "EmptyProjects":
      return [...tempProjectsEmpty];
    default:
  }
}

function ProjectsContextProvider({ children }) {
  const [projects, dispatcher] = useReducer(reducer, initialValue);
  function addProject() {
    dispatcher({ type: "AddProject" });
  }
  function removeProject(id) {
    dispatcher({ type: "RemoveProject", id });
  }
  function selectProject(id) {
    dispatcher({ type: "SelectProject", id });
  }
  function changeTitle(id, title) {
    dispatcher({ type: "ChangeTitle", title });
  }
  function changeTechStack(id, techStack) {
    dispatcher({ type: "ChangeTechStack", techStack });
  }
  function changeStartDate(id, startDate) {
    dispatcher({ type: "ChangeStartDate", startDate });
  }
  function changeEndDate(id, endDate) {
    dispatcher({ type: "ChangeEndDate", endDate });
  }
  function changeDescription(id, description) {
    dispatcher({ type: "ChangeDescription", description });
  }
  function emptyProjects() {
    dispatcher({ type: "EmptyProjects" });
  }
  return (
    <ProjectsContext.Provider
      value={{
        projects,
        addProject,
        removeProject,
        selectProject,
        changeTitle,
        changeTechStack,
        changeStartDate,
        changeEndDate,
        changeDescription,
        emptyProjects,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

function useProjects() {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error("useProjects was used outside of ProjectsContext provider");
  }
  return context;
}

export { ProjectsContextProvider, useProjects }; //eslint-disable-line
