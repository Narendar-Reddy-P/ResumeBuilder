import { useState } from "react";

import {
  DeleteIcon,
  EditIcon,
  EyeIcon,
  PrintIcon,
  ResetIcon,
  DownloadIcon,
} from "./Icon";

import { PersonalInformation } from "./Components/PersonalInformation";
import { ProfileSummary } from "./Components/ProfileSummary";
import { WorkExperience } from "./Components/WorkExperience";
import { Education } from "./Components/Education";
import { Skills } from "./Components/Skills";
import { More } from "./Components/More";
import { Projects } from "./Components/Projects";

const personalInfo = {
  firstName: "Narendar Reddy",
  lastName: "Pucchakayala",
  jobTitle: "Web Developer",
  phone: "9392715897",
  email: "narendar.reddy.pucchakayala@gmail.com",
  github: "narendar-reddy-P",
  portfolio: "",
  address: "Thurkemjal, Hyderabad",
};

const profileSummary = "";

let courses = [
  {
    id: crypto.randomUUID(),
    school: "LRHS",
    course: "python",
    startDate: "12 Feb",
    endDate: "19 Feb",
    description:
      "Performed basic system programming tasks and fixed system bugs gaining practical eeduerience in troubleshooting and resolving Odoo system issues.",
  },
  {
    id: crypto.randomUUID(),
    school: "LRHS",
    course: "python",
    startDate: "12 Feb",
    endDate: "19 Feb",
    description:
      "Performed basic system programming tasks and fixed system bugs gaining practical eeduerience in troubleshooting and resolving Odoo system issues.",
  },
];

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

let tempProjects = [
  {
    id: crypto.randomUUID(),
    title: "Web Dev",
    techStack: "TCS",
    startDate: "12 Feb",
    endDate: "19 Feb",
    description:
      "Performed basic system programming tasks and fixed system bugs gaining practical eProjecterience in troubleshooting and resolving Odoo system issues.",
  },
  {
    id: crypto.randomUUID(),
    title: "Web Dev",
    techStack: "TCS",
    startDate: "12 Feb",
    endDate: "19 Feb",
    description:
      "Performed basic system programming tasks and fixed system bugs gaining practical eProjecterience in troubleshooting and resolving Odoo system issues.",
  },
];

const skillsList = [
  { id: crypto.randomUUID(), name: "java" },
  { id: crypto.randomUUID(), name: "python" },
];

let tempMore = [
  {
    id: crypto.randomUUID(),
    name: "",
    details: [
      { id: crypto.randomUUID(), type: "section", value: "LOL" },
      {
        id: crypto.randomUUID(),
        type: "link",
        linkText: "hello",
        url: "google.com",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "",
    details: [],
  },
];

const personalInfoEmpty = {
  firstName: "",
  lastName: "",
  jobTitle: "",
  phone: "",
  email: "",
  github: "",
  portfolio: "",
  address: "",
};

const profileSummaryEmpty = "";

let coursesEmpty = [
  {
    id: crypto.randomUUID(),
    school: "",
    course: "",
    startDate: "",
    endDate: "",
    description: "",
  },
];

let workXPsEmpty = [
  {
    id: crypto.randomUUID(),
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  },
];

let tempProjectsEmpty = [
  {
    id: crypto.randomUUID(),
    title: "",
    techStack: "",
    startDate: "",
    endDate: "",
    description: "",
  },
];

const skillsListEmpty = [
  {
    id: crypto.randomUUID(),
    name: "",
  },
];

let tempMoreEmpty = [
  {
    id: crypto.randomUUID(),
    name: "",
    details: [
      {
        id: crypto.randomUUID(),
        type: "",
        value: "",
      },
      {
        id: crypto.randomUUID(),
        type: "",
        linkText: "",
        url: "",
      },
    ],
  },
];

function App() {
  const [selectMainComponent, setSelectMainComponent] = useState("");
  const [preview, setPreview] = useState(false);

  const [info, setInfo] = useState(personalInfo);

  const [summary, setSummary] = useState(profileSummary);

  const [edu, setEdu] = useState(courses);

  const [XP, setXP] = useState(workXPs);

  const [projects, setProjects] = useState(tempProjects);

  const [skills, setSkills] = useState(skillsList);

  const [more, setMore] = useState(tempMore);

  function handleSelectMainComponent(text) {
    if (selectMainComponent === text) {
      setSelectMainComponent("");
    } else {
      setSelectMainComponent(text);
    }
  }

  function deleteResume() {
    setInfo(personalInfoEmpty);
    setSummary(profileSummaryEmpty);
    setEdu(coursesEmpty);
    setXP(workXPsEmpty);
    setProjects(tempProjectsEmpty);
    setSkills(skillsListEmpty);
    setMore(tempMoreEmpty);
  }

  function resetResume() {
    setInfo(personalInfo);
    setSummary(profileSummary);
    setEdu(courses);
    setXP(workXPs);
    setProjects(tempProjects);
    setSkills(skillsList);
    setMore(tempMore);
  }
  return (
    <div className="flex flex-col items-center justify-center py-15">
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
              info={info}
              setInfo={setInfo}
            />
            <ProfileSummary
              onSelectMainComponent={handleSelectMainComponent}
              selectMainComponent={selectMainComponent}
              summary={summary}
              setSummary={setSummary}
            />
            <Education
              onSelectMainComponent={handleSelectMainComponent}
              selectMainComponent={selectMainComponent}
              edu={edu}
              setEdu={setEdu}
            />
            <WorkExperience
              onSelectMainComponent={handleSelectMainComponent}
              selectMainComponent={selectMainComponent}
              XP={XP}
              setXP={setXP}
            />
            <Projects
              onSelectMainComponent={handleSelectMainComponent}
              selectMainComponent={selectMainComponent}
              projects={projects}
              setProjects={setProjects}
            />
            <Skills
              onSelectMainComponent={handleSelectMainComponent}
              selectMainComponent={selectMainComponent}
              skills={skills}
              setSkills={setSkills}
            />
            <More
              onSelectMainComponent={handleSelectMainComponent}
              selectMainComponent={selectMainComponent}
              data={more}
              setData={setMore}
            />
          </div>
          <div></div>
        </>
      ) : (
        <A4Sheet info={info} />
      )}
      <div className="flex gap-5 w-full h-[10vh] justify-evenly items-center bg-indigo-100 fixed bottom-0 border-t border-indigo-800">
        <div className="button" onClick={() => setPreview(!preview)}>
          {preview ? <EditIcon /> : <EyeIcon />}
        </div>
        <div className="button" onClick={deleteResume}>
          <DeleteIcon />
        </div>
        <div className="button" onClick={resetResume}>
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
function A4Sheet({ info }) {
  return (
    <div className="bg-amber-400 max-w-[210mm] aspect-210/297 mt-[5vw] mb-[15vw] sheet">
      <div className=" p-[5%]">
        <p>{info.firstName}</p>
        <p>{info.lastName}</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}
export default App;
