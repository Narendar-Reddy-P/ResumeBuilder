import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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

const handleDownloadPDF = async () => {
  const preview = document.querySelector("#sheet");
  console.log("preview");
  if (!preview) return alert("Preview not found!");

  const originalStyle = preview.style.transform;
  preview.style.transform = "scale(1)";
  preview.style.transformOrigin = "top left";

  const canvas = await html2canvas(preview, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
    windowWidth: preview.scrollWidth,
    windowHeight: preview.scrollHeight,
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft > 0) {
    position -= pageHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  // remove blank last page
  if (heightLeft < -pageHeight / 2) {
    pdf.deletePage(pdf.internal.getNumberOfPages());
  }

  preview.style.transform = originalStyle;
  pdf.save("My_CV.pdf");
};

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
    <div className="flex flex-col lg:grid lg:grid-cols-[9fr_9fr_2fr] lg:gap-3 justify-center  pb-15 lg:pb-0">
      <div
        className={`lg:self-start w-full lg:flex-initial flex flex-col items-center justify-center ${preview && "hidden lg:block"} lg:overflow-hidden`}
      >
        <div className="w-full lg:w-full flex flex-col items-center p-4">
          <h2 className="text-center text-2xl font-bold text-indigo-800 mt-6 ">
            Curriculum Vitae
          </h2>
          <p className="text-center text-indigo-800">
            Your perfect CV made fast and effortless.
          </p>
        </div>
        <div className="flex flex-col gap-3 p-4 lg:pr-0 w-full max-w-150 items-center">
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
      </div>
      <div>
        <div className="hidden lg:h-screen lg:flex lg:justify-center lg:items-center">
          <A4Sheet info={info} />
        </div>

        {preview && (
          <div className="lg:hidden ">
            <A4Sheet info={info} />
          </div>
        )}
      </div>

      <div
        className="flex gap-5 w-full h-[10vh] justify-evenly items-center fixed bottom-0 border-t border-indigo-800  lg:flex-col lg:w-auto  lg:gap-6 lg:fixed lg:right-0 lg:bottom-0
       lg:justify-center lg:self-center  lg:border-none lg:h-screen lg:p-10 "
      >
        <div className="lg:hidden" onClick={() => setPreview(!preview)}>
          <div
            className="button lg:hidden"
            onClick={() => setPreview(!preview)}
          >
            {preview ? <EditIcon /> : <EyeIcon />}
          </div>
        </div>
        <div className="button" onClick={deleteResume}>
          <DeleteIcon />
        </div>
        <div className="button" onClick={resetResume}>
          <ResetIcon />
        </div>
        <div className="button" onClick={handleDownloadPDF}>
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
    <div
      className=" max-w-[210mm] aspect-210/297 mt-[2vw]  bg-cyan-100 lg:fixed  "
      id="sheet"
    >
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
