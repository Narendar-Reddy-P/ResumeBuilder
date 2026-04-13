import { useState } from "react";
import togglerDown from "../assets/images/icons/toggler-down.svg";
import deleteIcon from "../assets/images/icons/delete-icon.svg";

import briefcase from "../assets/images/icons/briefcase.svg";

import { MainComponentHeaderToggler } from "../Utility";
import { CircularPlus } from "../Icon";

export function WorkExperience({
  onSelectMainComponent,
  selectMainComponent,
  XP,
  setXP,
}) {
  const [selectXP, setSelectXP] = useState(XP[0]?.id || "");

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
    <div>
      <MainComponentHeaderToggler
        mainIcon={briefcase}
        text={text}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
      {selectMainComponent === text && (
        <div>
          <div>
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
          <div onClick={addWorkXP}>
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
    <div>
      <header onClick={() => onSelectXP(id)}>
        <span>{`${position || "Job position"}, ${company || "Company"}`}</span>
        <div>
          <img src={togglerDown} />
          <img src={deleteIcon} onClick={() => removeWorkXP(id)} />
        </div>
      </header>
      {isOpen && (
        <div>
          <div>
            <label htmlFor={id}>{"Position"}</label>
            <br />
            <input
              type="text"
              id={id}
              value={position}
              onChange={(e) => onChangePosition(id, e.target.value)}
            />
          </div>

          <div>
            <label htmlFor={id}>{"Company"}</label>
            <br />
            <input
              type="text"
              id={id}
              value={company}
              onChange={(e) => onChangeCompany(id, e.target.value)}
            />
          </div>

          <div>
            <label htmlFor={id}>{"Start Date"}</label>
            <br />
            <input
              type="text"
              id={id}
              value={startDate}
              onChange={(e) => onChangeStartDate(id, e.target.value)}
            />
          </div>

          <div>
            <label htmlFor={id}>{"End Date"}</label>
            <br />
            <input
              type="text"
              id={id}
              value={endDate}
              onChange={(e) => onChangeEndDate(id, e.target.value)}
            />
          </div>

          <div>
            <label htmlFor={id} rows={5}>
              {"Description"}
            </label>
            <textarea
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
