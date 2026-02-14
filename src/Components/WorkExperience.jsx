import { useState } from "react";
import togglerDown from "../assets/images/icons/toggler-down.svg";
import deleteIcon from "../assets/images/icons/delete-icon.svg";

import briefcase from "../assets/images/icons/briefcase.svg";

import { MainComponentHeaderToggler } from "../Utility";
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

  function handleChangePosition(id, value) {
    setXP(XP.map((x) => (x.id !== id ? x : { ...x, position: value })));
  }

  function handleChangeCompany(id, value) {
    setXP(XP.map((x) => (x.id !== id ? x : { ...x, company: value })));
  }

  function handleChangeStartDate(id, value) {
    setXP(XP.map((x) => (x.id !== id ? x : { ...x, startDate: value })));
  }

  function handleChangeEndDate(id, value) {
    setXP(XP.map((x) => (x.id !== id ? x : { ...x, endDate: value })));
  }

  function handleChangeDescription(id, value) {
    setXP(XP.map((x) => (x.id !== id ? x : { ...x, description: value })));
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
          <div className="w-full">
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
                onChangePosition={handleChangePosition}
                onChangeCompany={handleChangeCompany}
                onChangeStartDate={handleChangeStartDate}
                onChangeEndDate={handleChangeEndDate}
                onChangeDescription={handleChangeDescription}
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
  onChangePosition,
  onChangeCompany,
  onChangeStartDate,
  onChangeEndDate,
  onChangeDescription,
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
          <div className=" w-full px-4 ">
            <label htmlFor={id} className="text-indigo-900 cursor-pointer">
              {"Position"}
            </label>
            <br />
            <input
              type="text"
              className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"
              id={id}
              value={position}
              onChange={(e) => onChangePosition(id, e.target.value)}
            />
          </div>

          <div className=" w-full px-4 ">
            <label htmlFor={id} className="text-indigo-900 cursor-pointer">
              {"Company"}
            </label>
            <br />
            <input
              type="text"
              className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"
              id={id}
              value={company}
              onChange={(e) => onChangeCompany(id, e.target.value)}
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
