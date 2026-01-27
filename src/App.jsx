import { useState } from "react";

import personalInformationIcon from "./assets/images/icons-buttons/personalInformation.svg";
import profileSummaryIcon from "./assets/images/icons-buttons/profileSummary.svg";
import workExperienceIcon from "./assets/images/icons-buttons/workExperience.svg";
import educationIcon from "./assets/images/icons-buttons/education.svg";
import skillsIcon from "./assets/images/icons-buttons/skills.svg";
import moreIcon from "./assets/images/icons-buttons/more.svg";

import triangleDownIcon from "./assets/images/icons-buttons/triangleDown.svg";
import triangleUpIcon from "./assets/images/icons-buttons/triangleUp.svg";

function App() {
  const [selectMainComponent, setSelectMainComponent] = useState("");

  function handleSelectMainComponent(text) {
    if (selectMainComponent === text) {
      setSelectMainComponent("");
    } else {
      setSelectMainComponent(text);
    }
  }
  return (
    <>
      <div className="A4Sheet"></div>
      <div className="main">
        <PersonalInformation
          onSelectMainComponent={handleSelectMainComponent}
          selectMainComponent={selectMainComponent}
        />
        <ProfileSummary
          onSelectMainComponent={handleSelectMainComponent}
          selectMainComponent={selectMainComponent}
        />
        <WorkExperience
          onSelectMainComponent={handleSelectMainComponent}
          selectMainComponent={selectMainComponent}
        />
        <Education
          onSelectMainComponent={handleSelectMainComponent}
          selectMainComponent={selectMainComponent}
        />
        <Skills
          onSelectMainComponent={handleSelectMainComponent}
          selectMainComponent={selectMainComponent}
        />
        <More
          onSelectMainComponent={handleSelectMainComponent}
          selectMainComponent={selectMainComponent}
        />
      </div>
    </>
  );
}

function PersonalInformation({ onSelectMainComponent, selectMainComponent }) {
  const text = "Personal Information";
  return (
    <div className="mainComponent">
      <MainComponentHeaderToggler
        mainIcon={personalInformationIcon}
        text={text}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
      {selectMainComponent === text && (
        <div className="mainComponentBody">
          <Input id={"firstName"} header={"First Name"} type={"text"} />
          <Input id={"lastName"} header={"Last Name"} type={"text"} />
          <Input id={"jobTitle"} header={"Job Title"} type={"text"} />
          <Input id={"phone"} header={"Phone"} type={"tel"} />
          <Input id={"email"} header={"Email"} type={"email"} />
          <Input id={"gitHub"} header={"GitHub"} type={"url"} />
          <Input id={"portfolio"} header={"Portfolio"} type={"url"} />
          <Input id={"address"} header={"Address"} type={"text"} />
        </div>
      )}
    </div>
  );
}

function ProfileSummary({ onSelectMainComponent, selectMainComponent }) {
  const text = "Profile Summary";
  return (
    <div className="mainComponent">
      <MainComponentHeaderToggler
        mainIcon={profileSummaryIcon}
        text={text}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
      {selectMainComponent === text && (
        <div className="mainComponentBody">
          <TextArea
            header={
              "Highlight your professional experience, skills, and accomplishments in a brief, impactful statement."
            }
            id={"profileSummary"}
          />
        </div>
      )}
    </div>
  );
}

function WorkExperience({ onSelectMainComponent, selectMainComponent }) {
  const text = "Work Experience";

  return (
    <div className="mainComponent">
      <MainComponentHeaderToggler
        mainIcon={workExperienceIcon}
        text={text}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
    </div>
  );
}

function Education({ onSelectMainComponent, selectMainComponent }) {
  const text = "Education";

  return (
    <div className="mainComponent">
      <MainComponentHeaderToggler
        mainIcon={educationIcon}
        text={text}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
    </div>
  );
}

function Skills({ onSelectMainComponent, selectMainComponent }) {
  const text = "Skills";

  return (
    <div className="mainComponent">
      <MainComponentHeaderToggler
        mainIcon={skillsIcon}
        text={text}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
    </div>
  );
}

function More({ onSelectMainComponent, selectMainComponent }) {
  const text = "More";

  return (
    <div className="mainComponent">
      <MainComponentHeaderToggler
        mainIcon={moreIcon}
        text={text}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
    </div>
  );
}

function MainComponentHeaderToggler({
  mainIcon,
  text,
  onSelectMainComponent,
  selectMainComponent,
}) {
  return (
    <div
      className="mainComponentHeader"
      onClick={() => onSelectMainComponent(text)}
    >
      <img src={mainIcon} className="icon" alt="main icon" />
      <h3 className="mainComponentHeaderText">{text}</h3>
      <img
        src={selectMainComponent === text ? triangleUpIcon : triangleDownIcon}
        className="icon"
        alt="toggler"
      />
    </div>
  );
}

function Input({ id, header, type }) {
  return (
    <div className="inputComponent">
      <label htmlFor={id}>{header}</label>
      <input type={type} id={id} className="normalInput" />
    </div>
  );
}

function TextArea({ id, header }) {
  return (
    <div className="inputComponent">
      <label htmlFor={id} rows={5}>
        {header}
      </label>
      <textarea id={id} />
    </div>
  );
}

function A4Sheet() {}
export default App;
