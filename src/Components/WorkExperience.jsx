import { useState } from "react";

import briefcase from "../assets/images/icons/briefcase.svg";

import {
  MainComponentHeaderToggler,
  WEForm,
  Input,
  TextArea,
} from "../Utility";
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
          <div className="w-full">
            {XP.map((workXP) => (
              <WEForm
                data={workXP}
                key={workXP.id}
                isOpen={workXP.id === selectXP}
                onSelect={handleSelectXP}
                onRemove={removeWorkXP}
                id={workXP.id}
                displayLabel={`${workXP.position || "Job position"}, ${workXP.company || "Company"}`}
                fields={[
                  {
                    key: "position",
                    header: "Position",
                    type: "text",
                    id: "position",
                  },
                  {
                    key: "company",
                    header: "Company",
                    type: "text",
                    id: "company",
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
