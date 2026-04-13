import { MainComponentHeaderToggler, Input, TextArea } from "../Utility";
import academicCap from "../assets/images/icons/academic-cap.svg";
import togglerDown from "../assets/images/icons/toggler-down.svg";
import deleteIcon from "../assets/images/icons/delete-icon.svg";
import { Icon } from "../MinorComponents/Icon";

import { CircularPlus } from "../Icon";

import { useState } from "react";

export function Education({
  onSelectMainComponent,
  selectMainComponent,
  edu,
  setEdu,
}) {
  const [selectEdu, setSelectEdu] = useState(edu[0]?.id || "");

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

  function handleChangeSchool(id, value) {
    setEdu(edu.map((x) => (x.id !== id ? x : { ...x, school: value })));
  }

  function handleChangeCourse(id, value) {
    setEdu(edu.map((x) => (x.id !== id ? x : { ...x, course: value })));
  }

  function handleChangeStartDate(id, value) {
    setEdu(edu.map((x) => (x.id !== id ? x : { ...x, startDate: value })));
  }

  function handleChangeEndDate(id, value) {
    setEdu(edu.map((x) => (x.id !== id ? x : { ...x, endDate: value })));
  }

  function handleChangeDescription(id, value) {
    setEdu(edu.map((x) => (x.id !== id ? x : { ...x, description: value })));
  }

  return (
    <div>
      <MainComponentHeaderToggler
        mainIcon={academicCap}
        text={text}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
      {selectMainComponent === text && (
        <div>
          <div>
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
                onChangeSchool={handleChangeSchool}
                onChangeCourse={handleChangeCourse}
                onChangeStartDate={handleChangeStartDate}
                onChangeEndDate={handleChangeEndDate}
                onChangeDescription={handleChangeDescription}
              />
            ))}
          </div>
          <div onClick={addEdu}>
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
  onChangeSchool,
  onChangeCourse,
  onChangeStartDate,
  onChangeEndDate,
  onChangeDescription,
}) {
  return (
    <div>
      <header onClick={() => onSelectEdu(id)}>
        <span>{`${school || "School"}, ${course || "Course"}`}</span>
        <div>
          <Icon src={togglerDown} size={"smaller"} />
          <Icon src={deleteIcon} onClick={() => removeEdu(id)} size={"small"} />
        </div>
      </header>
      {isOpen && (
        // School
        <div>
          <Input
            id={id}
            type="text"
            header="School"
            value={school}
            onChange={(e) => onChangeSchool(id, e.target.value)}
          />

          <Input
            id={id}
            type="text"
            header="Course"
            value={course}
            onChange={(e) => onChangeCourse(id, e.target.value)}
          />

          <Input
            id={id}
            type="text"
            header="Start Date"
            value={startDate}
            onChange={(e) => onChangeStartDate(id, e.target.value)}
          />

          <Input
            id={id}
            type="text"
            header="End Date"
            value={endDate}
            onChange={(e) => onChangeEndDate(id, e.target.value)}
          />

          <TextArea
            id={id}
            header="Description"
            value={description}
            onChange={(e) => onChangeDescription(id, e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
