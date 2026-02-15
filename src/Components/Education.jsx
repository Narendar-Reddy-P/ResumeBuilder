import { MainComponentHeaderToggler, Input, TextArea } from "../Utility";
import academicCap from "../assets/images/icons/academic-cap.svg";
import togglerDown from "../assets/images/icons/toggler-down.svg";
import deleteIcon from "../assets/images/icons/delete-icon.svg";

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
  onChangeSchool,
  onChangeCourse,
  onChangeStartDate,
  onChangeEndDate,
  onChangeDescription,
}) {
  return (
    <div className="w-full border border-indigo-800 rounded-lg mb-2">
      <header
        className="flex items-center justify-between cursor-pointer p-4 pl-3"
        onClick={() => onSelectEdu(id)}
      >
        <span>{`${school || "School"}, ${course || "Course"}`}</span>
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
        // School
        <div>
          <div className=" w-full px-4 ">
            <label htmlFor={id} className="text-indigo-900 cursor-pointer">
              {"School"}
            </label>
            <br />
            <input
              type="text"
              className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"
              id={id}
              value={school}
              onChange={(e) => onChangeSchool(id, e.target.value)}
            />
          </div>

          <div className=" w-full px-4 ">
            <label htmlFor={id} className="text-indigo-900 cursor-pointer">
              {"Course"}
            </label>
            <br />
            <input
              type="text"
              className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"
              id={id}
              value={course}
              onChange={(e) => onChangeCourse(id, e.target.value)}
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
