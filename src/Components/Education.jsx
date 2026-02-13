import { MainComponentHeaderToggler, WEForm } from "../Utility";
import academicCap from "../assets/images/icons/academic-cap.svg";

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
          <div className="w-full">
            {edu.map((tut) => (
              <WEForm
                data={tut}
                key={tut.id}
                isOpen={tut.id === selectEdu}
                onSelect={handleSelectEdu}
                onRemove={removeEdu}
                id={tut.id}
                displayLabel={`${tut.school || " School"}, ${tut.course || "course"}`}
                fields={[
                  {
                    key: "school",
                    header: "school",
                    type: "text",
                    id: "school",
                  },
                  {
                    key: "course",
                    header: "course",
                    type: "text",
                    id: "course",
                  },
                  {
                    key: "startDate",
                    header: "Start Date",
                    type: "text",
                    id: "startDate",
                  },
                  {
                    key: "endDate",
                    header: "End Date",
                    type: "text",
                    id: "endDate",
                  },
                  {
                    key: "description",
                    header: "Description",
                    type: "textarea",
                    id: "description",
                  },
                ]}
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
