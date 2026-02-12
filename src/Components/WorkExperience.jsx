import { useState } from "react";

import briefcase from "../assets/images/icons/briefcase.svg";
import togglerDown from "../assets/images/icons/toggler-down.svg";
import deleteIcon from "../assets/images/icons/delete-icon.svg";

import { MainComponentHeaderToggler, Icon, Input, TextArea } from "../Utility";
import { CircularPlus } from "../Icon";

let workXPs = [
  {
    id: crypto.randomUUID(),
    position: "Web Dev",
    company: "TCS",
    startDate: "12 Feb",
    endDate: "19 Feb",
    description:
      "Performed basic system programming tasks and fixed system bugs gaining practical experience in troubleshooting and resolving Odoo system issues.",
  },
  {
    id: crypto.randomUUID(),
    position: "Web Dev",
    company: "TCS",
    startDate: "12 Feb",
    endDate: "19 Feb",
    description:
      "Performed basic system programming tasks and fixed system bugs gaining practical experience in troubleshooting and resolving Odoo system issues.",
  },
];

export function WorkExperience({ onSelectMainComponent, selectMainComponent }) {
  const [selectXP, setSelectXP] = useState(workXPs[0].id);
  const [XP, setXP] = useState(workXPs);

  function handleSelectXP(id) {
    if (selectXP === id) {
      setSelectXP("");
    } else {
      setSelectXP(id);
    }
  }

  function addWorkXP() {
    const newXP = {
      id: crypto.randomUUID(),
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    setXP([...XP, newXP]);
    setSelectXP(newXP.id);
  }

  function removeWorkXP(id) {
    setXP(XP.filter((xp) => xp.id !== id));
  }

  const text = "Work Experience";
  return (
    <div className="mainComponent">
      <MainComponentHeaderToggler
        mainIcon={briefcase}
        text={text}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
      {selectMainComponent === text && (
        <div className="p-4 w-full">
          <div w-full>
            {XP.map((workXP) => (
              <WorkXPForm
                position={workXP.position}
                company={workXP.company}
                startDate={workXP.startDate}
                endDate={workXP.endDate}
                description={workXP.description}
                isOpen={workXP.id === selectXP}
                onSelectXP={handleSelectXP}
                id={workXP.id}
                key={workXP.id}
                removeWorkXP={removeWorkXP}
              />
            ))}
          </div>
          <div
            className="flex justify-end m-4 mb-0 text-indigo-900 font-bold cursor-pointer"
            onClick={addWorkXP}
          >
            <CircularPlus />
            <span>&nbsp; Add work experience</span>
          </div>
        </div>
      )}
    </div>
  );
}

function WorkXPForm({
  position,
  company,
  startDate,
  endDate,
  description,
  isOpen,
  onSelectXP,
  id,
  removeWorkXP,
}) {
  return (
    <div className="w-full border border-indigo-800 rounded-lg mb-2">
      <header
        className="flex items-center justify-between cursor-pointer p-4 pl-3"
        onClick={() => onSelectXP(id)}
      >
        <span>{`${position || "Job position"}, ${company || "Company"}`}</span>
        <div className="ml-auto flex gap-4">
          <img src={togglerDown} className="w-4 h-4" />
          <img
            src={deleteIcon}
            className="w-4 h-4"
            onClick={() => removeWorkXP(id)}
          />
        </div>
      </header>
      {isOpen && (
        <div>
          <Input
            header={"Position"}
            type={"text"}
            id={`position`}
            value={position}
          ></Input>
          <Input
            header={"Company"}
            type={"text"}
            id={`company`}
            value={company}
          ></Input>
          <Input
            header={"Start Date"}
            type={"text"}
            id={`startDate`}
            value={startDate}
          ></Input>
          <Input
            header={"End Date"}
            type={"text"}
            id={`endDate`}
            value={endDate}
          ></Input>
          <TextArea
            header={"Description"}
            id={`description`}
            value={description}
          />
        </div>
      )}
    </div>
  );
}
