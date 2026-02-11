import { useState } from "react";

import {
  DeleteIcon,
  EditIcon,
  EyeIcon,
  PrintIcon,
  ResetIcon,
  CircularPlus,
  DownloadIcon,
} from "./Icon";

import { PersonalInformation } from "./Components/PersonalInformation";
import { ProfileSummary } from "./Components/ProfileSummary";
import { WorkExperience } from "./Components/WorkExperience";
import { Education } from "./Components/Education";
import { Skills } from "./Components/Skills";
import { More } from "./Components/More";

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
function A4Sheet() {}
export default App;
