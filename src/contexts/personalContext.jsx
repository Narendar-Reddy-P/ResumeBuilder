import { createContext, useContext, useReducer } from "react";

const PersonalInfoContext = createContext();
const initialValue = {
  firstName: "Narendar",
  lastName: "Reddy",
  jobTitle: "Frontend Developer",
  phone: "9392715897",
  email: "narendar.reddy.pucchakayala@gmail.com",
  github: "narendar-reddy-p",
  portfolio: "",
  address: "Hyderabad, India",
  summary:
    "Detail-oriented Frontend Developer with 3+ years of experience building scalable web applications using React and modern JavaScript. Strong understanding of component-driven architecture, performance optimization, and responsive design principles.",
};
const emptyInfo = {
  firstName: "",
  lastName: "",
  jobTitle: "",
  phone: "",
  email: "",
  github: "",
  portfolio: "",
  address: "",
  summary: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "firstNameChange":
      return { ...state, firstName: action.payload };
    case "lastNameChange":
      return { ...state, lastName: action.payload };
    case "jobTitleChange":
      return { ...state, jobTitle: action.payload };
    case "phoneChange":
      return { ...state, phone: action.payload };
    case "emailChange":
      return { ...state, email: action.payload };
    case "githubChange":
      return { ...state, github: action.payload };
    case "portfolioChange":
      return { ...state, portfolio: action.payload };
    case "addressChange":
      return { ...state, address: action.payload };
    case "summaryChange":
      return { ...state, summary: action.payload };
    case "resetInfo":
      return { ...initialValue };
    case "emptyInfo":
      return { ...emptyInfo };
    default:
      throw new Error("Unknown action type");
  }
}

function PersonalInfoProvider({ children }) {
  const [
    {
      firstName,
      lastName,
      jobTitle,
      phone,
      email,
      github,
      portfolio,
      address,
      summary,
    },
    dispatcher,
  ] = useReducer(reducer, initialValue);

  function changeFirstName(value) {
    dispatcher({ type: "firstNameChange", payload: value });
  }

  function changeLastName(value) {
    dispatcher({ type: "lastNameChange", payload: value });
  }

  function changeJobTitle(value) {
    dispatcher({ type: "jobTitleChange", payload: value });
  }

  function changePhone(value) {
    dispatcher({ type: "phoneChange", payload: value });
  }

  function changeEmail(value) {
    dispatcher({ type: "emailChange", payload: value });
  }

  function changeGithub(value) {
    dispatcher({ type: "githubChange", payload: value });
  }

  function changePortfolio(value) {
    dispatcher({ type: "portfolioChange", payload: value });
  }

  function changeAddress(value) {
    dispatcher({ type: "addressChange", payload: value });
  }

  function changeSummary(value) {
    dispatcher({ type: "summaryChange", payload: value });
  }

  function resetPersonalInfo() {
    dispatcher({ type: "resetInfo" });
  }

  function emptyPersonalInfo() {
    dispatcher({ type: "emptyInfo" });
  }

  return (
    <PersonalInfoContext.Provider
      value={{
        firstName,
        lastName,
        jobTitle,
        phone,
        email,
        github,
        portfolio,
        address,
        summary,
        changeFirstName,
        changeLastName,
        changeJobTitle,
        changePhone,
        changeEmail,
        changeGithub,
        changePortfolio,
        changeAddress,
        changeSummary,
        resetPersonalInfo,
        emptyPersonalInfo,
      }}
    >
      {children}
    </PersonalInfoContext.Provider>
  );
}

function usePersonalInfo() {
  const context = useContext(PersonalInfoContext);
  if (context === undefined) {
    throw new Error("PersonalInfo was used outside of personalInfo provider");
  }
  return context;
}

export { PersonalInfoProvider, usePersonalInfo }; //eslint-disable-line
