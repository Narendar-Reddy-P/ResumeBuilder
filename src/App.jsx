import { useState } from "react";

import userIcon from "./assets/images/icons/user-icon.svg";
import summaryIcon from "./assets/images/icons/user-summary.svg";
import briefcase from "./assets/images/icons/briefcase.svg";
import academicCap from "./assets/images/icons/academic-cap.svg";
import sparkles from "./assets/images/icons/sparkles.svg";
import ellipsis from "./assets/images/icons/ellipsis-horizontal.svg";
import togglerUp from "./assets/images/icons/toggler-up.svg";
import togglerDown from "./assets/images/icons/toggler-down.svg";
import deleteIcon from "./assets/images/icons/delete-icon.svg";

function App() {
  const [selectMainComponent, setSelectMainComponent] = useState("");
  const [preview, setPreview] = useState(false);

  function handleSelectMainComponent(text) {
    if (selectMainComponent === text) {
      setSelectMainComponent("");
    } else {
      setSelectMainComponent(text);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center">
      {!preview ? (
        <>
          <div className="">
            <h2 className="text-center text-2xl font-bold text-indigo-800 mt-6">
              Curriculum Vitae
            </h2>
            <p className="text-center text-indigo-800">
              Your perfect CV made fast and effortless.
            </p>
          </div>
          <div className="flex flex-col gap-3 p-4 w-full max-w-150">
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
          <div></div>
        </>
      ) : (
        <div className="bg-amber-400 max-w-[210mm] aspect-210/297 mt-[5vw] mb-[15vw] w-[90vw] ">
          <div className=" p-[5%] text-[2%]"> Hello </div>
        </div>
      )}
      <div className="flex gap-5 w-full h-[10vh] justify-evenly items-center bg-indigo-100 fixed bottom-0 border-t border-indigo-800">
        <div className="button" onClick={() => setPreview(!preview)}>
          {preview ? <EditIcon /> : <EyeIcon />}
        </div>
        <div className="button">
          <DeleteIcon />
        </div>
        <div className="button">
          <ResetIcon />
        </div>
        <div className="button">
          <DownloadIcon />
        </div>
        <div className="button">
          <PrintIcon />
        </div>
      </div>
    </div>
  );
}
// 1122px h 793px w
function PersonalInformation({ onSelectMainComponent, selectMainComponent }) {
  const text = "Personal Information";
  return (
    <div className="mainComponent">
      <MainComponentHeaderToggler
        mainIcon={userIcon}
        text={text}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
      {selectMainComponent === text && (
        <div className="w-full pb-4 flex flex-col gap-3">
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
        mainIcon={summaryIcon}
        text={text}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
      {selectMainComponent === text && (
        <div className="w-full">
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
        mainIcon={briefcase}
        text={text}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
      {selectMainComponent === text && (
        <div>
          <WorkXPForm />
        </div>
      )}
    </div>
  );
}

function Education({ onSelectMainComponent, selectMainComponent }) {
  const text = "Education";

  return (
    <div className="mainComponent">
      <MainComponentHeaderToggler
        mainIcon={academicCap}
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
        mainIcon={sparkles}
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
        mainIcon={ellipsis}
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
  let isOpen = selectMainComponent === text;
  return (
    <div
      className={`flex tracking-wide text-xl items-center px-4  h-12 gap-x-4 hover:bg-indigo-100 text-indigo-950 transition-all duration-300 m-1 cursor-pointer ${isOpen && "bg-indigo-100"} rounded-lg `}
      onClick={() => onSelectMainComponent(text)}
    >
      <Image url={mainIcon} />
      <h3 className="">{text}</h3>
      <div className="ml-auto">
        {isOpen ? <Image url={togglerUp} /> : <Image url={togglerDown} />}
      </div>
    </div>
  );
}
function Image({ url }) {
  return (
    <>
      <img src={url} className="w-5 h-5 " />
    </>
  );
}
function Icon({ url }) {
  return <img src={url} className="w-4 h-4 " />;
}
function Input({ id, header, type }) {
  return (
    <div className=" w-full px-4">
      <label htmlFor={id} className="text-indigo-900">
        {header}
      </label>
      <br />
      <input
        type={type}
        id={id}
        className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-2 transition-all duration-300 rounded-sm w-full"
      />
    </div>
  );
}

function TextArea({ id, header }) {
  return (
    <div className="flex flex-col  gap-3 w-full p-4">
      <label htmlFor={id} rows={5} className="text-indigo-900">
        {header}
      </label>
      <textarea
        id={id}
        className="bg-indigo-100  text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-2 transition-all duration-300 w-88 outline-none h-30 w-full"
      />
    </div>
  );
}

function WorkXPForm() {
  return (
    <>
      <header className="flex items-center justify-between p-4">
        <span>Job position, Company</span>
        <div className="ml-auto flex gap-4">
          <Icon url={togglerDown}></Icon>
          <Icon url={deleteIcon}></Icon>
        </div>
      </header>
      <div></div>
    </>
  );
}

function EyeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
}

function DeleteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
    </svg>
  );
}

function ResetIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );
}

function PrintIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
      />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
      />
    </svg>
  );
}
function A4Sheet() {}
export default App;
