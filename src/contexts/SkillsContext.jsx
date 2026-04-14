import { createContext, useContext, useState } from "react";

const SkillsContext = createContext();
const skillsList = [
  { id: crypto.randomUUID(), name: "JavaScript" },
  { id: crypto.randomUUID(), name: "React" },
  { id: crypto.randomUUID(), name: "Node.js" },
  { id: crypto.randomUUID(), name: "MongoDB" },
  { id: crypto.randomUUID(), name: "Tailwind CSS" },
];
const skillsListEmpty = [
  {
    id: crypto.randomUUID(),
    name: "",
  },
];

function SkillsContextProvider({ children }) {
  const [skills, setSkills] = useState(skillsList);
  function addSkill() {
    setSkills([...skills, { id: crypto.randomUUID(), name: "" }]);
  }

  function removeSkill(id) {
    setSkills(skills.filter((skill) => skill.id !== id));
  }

  function changeSkill(id, value) {
    setSkills(skills.map((x) => (x.id !== id ? x : { ...x, name: value })));
  }
  function emptySkills() {
    setSkills(skillsListEmpty);
  }
  function resetSkills() {
    setSkills(skillsList);
  }
  return (
    <SkillsContext.Provider
      value={{ skills, addSkill, removeSkill, changeSkill, emptySkills, resetSkills }}
    >
      {children}
    </SkillsContext.Provider>
  );
}

function useSkills() {
  const context = useContext(SkillsContext);
  if (context === undefined) {
    throw new Error("useSkills was used outside of SkillsContext provider");
  }
  return context;
}
export { SkillsContextProvider, useSkills }; //eslint-disable-line
