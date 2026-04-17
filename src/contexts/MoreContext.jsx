import { createContext, useContext, useReducer } from "react";

let MoreContext = createContext();

let initialMore = [
  {
    id: crypto.randomUUID(),
    name: "Certifications",
    selected: true,
    details: [
      {
        id: crypto.randomUUID(),
        type: "section",
        value: "AWS Certified Cloud Practitioner (2023)",
      },
      {
        id: crypto.randomUUID(),
        type: "link",
        linkText: "View Certificate",
        url: "https://aws.amazon.com/certification/",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Languages",
    selected: false,
    details: [
      {
        id: crypto.randomUUID(),
        type: "section",
        value: "English (Fluent), Hindi (Native)",
      },
    ],
  },
];

let emptyValue = [
  {
    id: crypto.randomUUID(),
    name: "",
    selected: false,
    details: [
      {
        id: crypto.randomUUID(),
        type: "",
        value: "",
      },
      {
        id: crypto.randomUUID(),
        type: "",
        linkText: "",
        url: "",
      },
    ],
  },
];
function reducer(state, action) {
  switch (action.type) {
    case "HandleSelected":
      return state.map((section) =>
        section.id !== action.id
          ? { ...section, selected: false }
          : { ...section, selected: !section.selected },
      );
    case "DeleteSection":
      return state.filter((section) => section.id !== action.id);

    case "AddSection":
      /*eslint-disable*/
      let newSection = {
        id: crypto.randomUUID(),
        name: "",
        selected: true,
        details: [
          {
            id: crypto.randomUUID(),
            type: "",
            value: "",
          },
        ],
      };
      /*eslint-enable*/
      return [...state, newSection];
    case "ChangeSectionName":
      return state.map((section) =>
        section.id !== action.id ? section : { ...section, name: action.name },
      );
    case "ChangeSectionItem":
      return state.map((section) =>
        section.id !== action.id
          ? section
          : {
              ...section,
              details: section.details.map((y) =>
                y.id !== action.itemId
                  ? y
                  : { ...y, [action.parameter]: action.value },
              ),
            },
      );
    case "AddLink":
      /* eslint-disable */
      let tempLink = {
        id: crypto.randomUUID(),
        type: "link",
        linkText: "",
        url: "",
      };
      /* eslint-enable */
      return state.map((section) =>
        section.id !== action.sectionId
          ? section
          : { ...section, details: [...section.details, tempLink] },
      );
    case "AddSectionItem":
      /* eslint-disable */
      let tempSectionItem = {
        id: crypto.randomUUID(),
        type: "section",
        value: "",
      };
      /* eslint-enable */
      return state.map((section) =>
        section.id !== action.sectionId
          ? section
          : { ...section, details: [...section.details, tempSectionItem] },
      );
    case "DeleteSectionItem":
      return state.map((section) =>
        section.id !== action.sectionId
          ? section
          : {
              ...section,
              details: section.details.filter((y) => y.id !== action.itemId),
            },
      );
    case "ResetMore":
      return [...initialMore];
    case "EmptyMore":
      return [...emptyValue];
    default:
      throw new Error("Unknown action type");
  }
}
function MoreContextProvider({ children }) {
  const [data, dispatcher] = useReducer(reducer, initialMore);
  function handleSelected(id) {
    dispatcher({ type: "HandleSelected", id });
  }
  function deleteSection(id) {
    dispatcher({ type: "DeleteSection", id });
  }
  function addSection() {
    dispatcher({ type: "AddSection" });
  }
  function changeSectionName(id, name) {
    dispatcher({ type: "ChangeSectionName", id, name });
  }
  function changeSectionItem(itemId, id, parameter, value) {
    dispatcher({ type: "ChangeSectionItem", itemId, id, parameter, value });
  }
  function addLink(sectionId) {
    dispatcher({ type: "AddLink", sectionId });
  }
  function addSectionItem(sectionId) {
    dispatcher({ type: "AddSectionItem", sectionId });
  }
  function deleteSectionItem(sectionId, itemId) {
    dispatcher({ type: "DeleteSectionItem", sectionId, itemId });
  }
  function resetMore() {
    dispatcher({ type: "ResetMore" });
  }
  function emptyMore() {
    dispatcher({ type: "EmptyMore" });
  }
  return (
    <MoreContext.Provider
      value={{
        handleSelected,
        deleteSection,
        addSection,
        changeSectionItem,
        changeSectionName,
        data,
        addLink,
        addSectionItem,
        deleteSectionItem,
        resetMore,
        emptyMore,
      }}
    >
      {children}
    </MoreContext.Provider>
  );
}

function useMore() {
  const context = useContext(MoreContext);
  if (context === undefined) {
    throw new Error("useMore was used outside of MoreContext provider");
  }
  return context;
}

export { MoreContextProvider, useMore }; //eslint-disable-line
