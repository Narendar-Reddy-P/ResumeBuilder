import { createContext, useContext, useReducer } from "react";

const WorkContext = createContext();

let initialValue = [
  {
    id: crypto.randomUUID(),
    position: "Frontend Developer",
    company: "Infosys",
    startDate: "Jul 2022",
    endDate: "Present",
    description:
      "Developed and maintained scalable React applications. Improved application load time by 30% through code-splitting and lazy loading. Collaborated with backend teams to integrate RESTful APIs.",
    selected: true,
  },
  {
    id: crypto.randomUUID(),
    position: "Junior Web Developer",
    company: "Wipro",
    startDate: "Jan 2021",
    endDate: "Jun 2022",
    description:
      "Built responsive UI components using HTML, CSS, and JavaScript. Fixed cross-browser compatibility issues and optimized website accessibility.",
    selected: false,
  },
];

let emptyValue = [
  {
    id: crypto.randomUUID(),
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    selected: true,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "AddWork":
      /* eslint-disable */
      let tempwork = state.map((work) => {
        return { ...work, selected: false };
      });
      /*eslint-enable*/
      return [
        ...tempwork,
        {
          id: crypto.randomUUID(),
          position: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          selected: true,
        },
      ];
    case "RemoveWork":
      return state.filter((work) => work.id != action.id);
    case "SelectWork":
      return state.map((work) =>
        work.id !== action.id
          ? { ...work, selected: false }
          : { ...work, selected: !work.selected },
      );
    case "ChangePosition":
      return state.map((work) =>
        work.id !== action.id ? work : { ...work, position: action.position },
      );
    case "ChangeCompany":
      return state.map((work) =>
        work.id !== action.id ? work : { ...work, company: action.company },
      );
    case "ChangeStartDate":
      return state.map((work) =>
        work.id !== action.id ? work : { ...work, startDate: action.startDate },
      );
    case "ChangeEndDate":
      return state.map((work) =>
        work.id !== action.id ? work : { ...work, endDate: action.endDate },
      );
    case "ChangeDescription":
      return state.map((work) =>
        work.id !== action.id
          ? work
          : { ...work, description: action.description },
      );
    case "EmptyWork":
      return [...emptyValue];
    case "ResetWork":
      return [...initialValue];
    default:
      throw new Error("Unknown action type");
  }
}
function WorkContextProvider({ children }) {
  const [works, dispatcher] = useReducer(reducer, initialValue);
  function addWork() {
    dispatcher({ type: "AddWork" });
  }
  function removeWork(id) {
    dispatcher({ type: "RemoveWork", id });
  }
  function selectWork(id) {
    dispatcher({ type: "SelectWork", id });
  }
  function changePosition(id, position) {
    dispatcher({ type: "ChangePosition", id, position });
  }
  function changeCompany(id, company) {
    dispatcher({ type: "ChangeCompany", id, company });
  }
  function changeStartDate(id, startDate) {
    dispatcher({ type: "ChangeStartDate", id, startDate });
  }
  function changeEndDate(id, endDate) {
    dispatcher({ type: "ChangeEndDate", id, endDate });
  }
  function changeDescription(id, description) {
    dispatcher({ type: "ChangeDescription", id, description });
  }
  function emptyWork() {
    dispatcher({ type: "EmptyWork" });
  }
  function resetWork() {
    dispatcher({ type: "ResetWork" });
  }
  return (
    <WorkContext.Provider
      value={{
        works,
        addWork,
        removeWork,
        selectWork,
        changePosition,
        changeCompany,
        changeStartDate,
        changeEndDate,
        changeDescription,
        emptyWork,
        resetWork,
      }}
    >
      {children}
    </WorkContext.Provider>
  );
}

function useWork() {
  const context = useContext(WorkContext);
  if (context === undefined) {
    throw new Error("useWork was used outside of WorkContext provider");
  }
  return context;
}

export { WorkContextProvider, useWork }; //eslint-disable-line
