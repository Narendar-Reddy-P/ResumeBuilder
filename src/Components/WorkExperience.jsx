import togglerDown from "../assets/images/icons/toggler-down.svg";
import deleteIcon from "../assets/images/icons/delete-icon.svg";

import briefcase from "../assets/images/icons/briefcase.svg";

import { MainComponentHeaderToggler } from "../Utility";
import { CircularPlus } from "../Icon";
import { useWork } from "../contexts/workContext";
import { Icon } from "../MinorComponents/Icon";
import { Input } from "../MinorComponents/Input";
import { TextArea } from "../MinorComponents/TextArea";

export function WorkExperience({ onSelectMainComponent, selectMainComponent }) {
  const { works, addWork } = useWork();
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
            {works.map((workXP) => (
              <WorkXPForm key={workXP.id} id={workXP.id} />
            ))}
          </div>
          <div onClick={addWork}>
            <CircularPlus />
            <span>&nbsp; Add work experience</span>
          </div>
        </div>
      )}
    </div>
  );
}

function WorkXPForm({ id }) {
  const {
    works,
    removeWork,
    selectWork,
    changePosition,
    changeCompany,
    changeStartDate,
    changeEndDate,
    changeDescription,
  } = useWork();
  const workXP = works.find((work) => work.id === id);

  if (!workXP) {
    return null;
  }

  return (
    <div>
      <header onClick={() => selectWork(id)}>
        <span>{`${workXP.position || "Job position"}, ${workXP.company || "Company"}`}</span>
        <div>
          <Icon src={togglerDown} size={"smaller"} />
          <Icon
            src={deleteIcon}
            onClick={() => removeWork(id)}
            size={"small"}
          />
        </div>
      </header>
      {workXP.selected && (
        <div>
          <Input
            id={id}
            type="text"
            header="Position"
            value={workXP.position}
            onChange={(e) => changePosition(id, e.target.value)}
          />

          <Input
            id={id}
            type="text"
            header="Company"
            value={workXP.company}
            onChange={(e) => changeCompany(id, e.target.value)}
          />

          <Input
            id={id}
            type="date"
            header="Start Date"
            value={workXP.startDate}
            onChange={(e) => changeStartDate(id, e.target.value)}
          />

          <Input
            id={id}
            type="date"
            header="End Date"
            value={workXP.endDate}
            onChange={(e) => changeEndDate(id, e.target.value)}
          />

          <TextArea
            id={id}
            header="Description"
            value={workXP.description}
            onChange={(e) => changeDescription(id, e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
