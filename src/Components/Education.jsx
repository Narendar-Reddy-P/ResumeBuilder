import { MainComponentHeaderToggler, Input, TextArea } from "../Utility";
import academicCap from "../assets/images/icons/academic-cap.svg";
import togglerDown from "../assets/images/icons/toggler-down.svg";
import deleteIcon from "../assets/images/icons/delete-icon.svg";

import { CircularPlus } from "../Icon";

import { useState } from "react";

let courses = [
  {
    id: crypto.randomUUID(),
    school: "LRHS",
    course: "python",
    startDate: "12 Feb",
    endDate: "19 Feb",
    description:
      "Performed basic system programming tasks and fixed system bugs gaining practical experience in troubleshooting and resolving Odoo system issues.",
  },
  {
    id: crypto.randomUUID(),
    school: "LRHS",
    course: "python",
    startDate: "12 Feb",
    endDate: "19 Feb",
    description:
      "Performed basic system programming tasks and fixed system bugs gaining practical experience in troubleshooting and resolving Odoo system issues.",
  },
];

export function Education({ onSelectMainComponent, selectMainComponent }) {
  const [selectEdu, setSelectEdu] = useState(courses[0].id);
  const [edu, setEdu] = useState(courses);
  const text = "Education";

  function handleSelectEdu(id) {
    if (selectEdu === id) {
      setSelectEdu("");
    } else {
      setSelectEdu(id);
    }
  }

  function addEdu() {
    const newEdu = {
      id: crypto.randomUUID(),
      school: "",
      course: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    setEdu([...edu, newEdu]);
    setSelectEdu(newEdu.id);
  }

  function removeEdu(id) {
    setEdu(edu.filter((tut) => tut.id !== id));
  }
  return (
    <div className="mainComponent">
      <MainComponentHeaderToggler
        mainIcon={academicCap}
        text={text}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
      {selectMainComponent === text && (
        <div className="p-4 w-full">
          <div w-full>
            {edu.map((tut) => (
              <EducationForm
                school={tut.school}
                course={tut.course}
                startDate={tut.startDate}
                endDate={tut.endDate}
                description={tut.description}
                isOpen={tut.id === selectEdu}
                onSelectEdu={handleSelectEdu}
                id={tut.id}
                key={tut.id}
                removeEdu={removeEdu}
              />
            ))}
          </div>
          <div
            className="flex justify-end m-4 mb-0 text-indigo-900 font-bold "
            onClick={addEdu}
          >
            <CircularPlus />
            <span>&nbsp; Add education</span>
          </div>
        </div>
      )}
    </div>
  );
}

function EducationForm({
  school,
  course,
  startDate,
  endDate,
  description,
  isOpen,
  onSelectEdu,
  id,
  removeEdu,
}) {
  return (
    <div className="w-full border border-indigo-800 rounded-lg mb-2">
      <header
        className="flex items-center justify-between cursor-pointer p-4 pl-3"
        onClick={() => onSelectEdu(id)}
      >
        <span>{`${school || "Job school"}, ${course || "course"}`}</span>
        <div className="ml-auto flex gap-4">
          <img src={togglerDown} className="w-4 h-4" />
          <img
            src={deleteIcon}
            className="w-4 h-4"
            onClick={() => removeEdu(id)}
          />
        </div>
      </header>
      {isOpen && (
        <div>
          <Input
            header={"school"}
            type={"text"}
            id={`school`}
            value={school}
          ></Input>
          <Input
            header={"course"}
            type={"text"}
            id={`course`}
            value={course}
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
