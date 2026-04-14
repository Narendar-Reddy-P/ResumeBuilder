import { createContext, useContext, useReducer } from "react";

const EducationContext = createContext();

let initialValue = [
  {
    id: crypto.randomUUID(),
    school: "Indian Institute of Technology Madras",
    course: "Full Stack Web Development",
    startDate: "Jan 2022",
    endDate: "Jun 2022",
    description:
      "Completed intensive training in MERN stack. Built REST APIs, implemented authentication using JWT, and deployed applications using Docker and Nginx.",
    selected: true,
  },
  {
    id: crypto.randomUUID(),
    school: "Udemy",
    course: "Advanced React & Redux",
    startDate: "Aug 2021",
    endDate: "Oct 2021",
    description:
      "Learned advanced React patterns, custom hooks, state management with Redux Toolkit, and performance optimization techniques.",
    selected: false,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "AddEducation":
      /* eslint-disable */
      let tempState = state.map((edu) => {
        return { ...edu, selected: false };
      });
      /* eslint-disable */
      return [
        ...tempState,
        {
          id: crypto.randomUUID(),
          school: "",
          course: "",
          startDate: "",
          endDate: "",
          description: "",
          selected: true,
        },
      ];
    case "RemoveEducation":
      return state.filter((edu) => edu.id != action.id);
    case "SelectEducation":
      return state.map((edu) =>
        edu.id !== action.id
          ? { ...edu, selected: false }
          : { ...edu, selected: !edu.selected },
      );
    case "ChangeSchool":
      return state.map((edu) =>
        edu.id !== action.id ? edu : { ...edu, school: action.school },
      );
    case "ChangeCourse":
      return state.map((edu) =>
        edu.id !== action.id ? edu : { ...edu, course: action.course },
      );
    case "ChangeStartDate":
      return state.map((edu) =>
        edu.id !== action.id ? edu : { ...edu, startDate: action.startDate },
      );
    case "ChangeEndDate":
      return state.map((edu) =>
        edu.id !== action.id ? edu : { ...edu, endDate: action.endDate },
      );
    case "ChangeDescription":
      return state.map((edu) =>
        edu.id !== action.id
          ? edu
          : { ...edu, description: action.description },
      );
    default:
      console.log("hehe");
  }
}
function EducationContextProvider({ children }) {
  const [education, dispatcher] = useReducer(reducer, initialValue);
  function addEducation() {
    dispatcher({ type: "AddEducation" });
  }
  function removeEducation(id) {
    dispatcher({ type: "RemoveEducation", id });
  }
  function selectEducation(id) {
    dispatcher({ type: "SelectEducation", id });
  }
  function changeSchool(id, school) {
    dispatcher({ type: "ChangeSchool", id, school });
  }
  function changeCourse(id, course) {
    dispatcher({ type: "ChangeCourse", id, course });
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
  return (
    <EducationContext.Provider
      value={{
        education,
        addEducation,
        removeEducation,
        selectEducation,
        changeSchool,
        changeCourse,
        changeStartDate,
        changeEndDate,
        changeDescription,
      }}
    >
      {children}
    </EducationContext.Provider>
  );
}

function useEducation() {
  const context = useContext(EducationContext);
  if (context === undefined) {
    throw new Error(
      "useEducation was used outside of EducationContext provider",
    );
  }
  return context;
}

export { EducationContextProvider, useEducation };
