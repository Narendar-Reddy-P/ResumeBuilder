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
  firstName: "Arjun",
  lastName: "Mehta",
  jobTitle: "Frontend Developer",
  phone: "9876543210",
  email: "arjun.mehta.dev@gmail.com",
  github: "arjunmehta-dev",
  portfolio: "https://arjunmehta.dev",
  address: "Bangalore, India",
};

const profileSummary =
  "Detail-oriented Frontend Developer with 3+ years of experience building scalable web applications using React and modern JavaScript. Strong understanding of component-driven architecture, performance optimization, and responsive design principles.";

let courses = [
  {
    id: crypto.randomUUID(),
    school: "Indian Institute of Technology Madras",
    course: "Full Stack Web Development",
    startDate: "Jan 2022",
    endDate: "Jun 2022",
    description:
      "Completed intensive training in MERN stack. Built REST APIs, implemented authentication using JWT, and deployed applications using Docker and Nginx.",
  },
  {
    id: crypto.randomUUID(),
    school: "Udemy",
    course: "Advanced React & Redux",
    startDate: "Aug 2021",
    endDate: "Oct 2021",
    description:
      "Learned advanced React patterns, custom hooks, state management with Redux Toolkit, and performance optimization techniques.",
  },
];

let workXPs = [
  {
    id: crypto.randomUUID(),
    position: "Frontend Developer",
    company: "Infosys",
    startDate: "Jul 2022",
    endDate: "Present",
    description:
      "Developed and maintained scalable React applications. Improved application load time by 30% through code-splitting and lazy loading. Collaborated with backend teams to integrate RESTful APIs.",
  },
  {
    id: crypto.randomUUID(),
    position: "Junior Web Developer",
    company: "Wipro",
    startDate: "Jan 2021",
    endDate: "Jun 2022",
    description:
      "Built responsive UI components using HTML, CSS, and JavaScript. Fixed cross-browser compatibility issues and optimized website accessibility.",
  },
];

let tempProjects = [
  {
    id: crypto.randomUUID(),
    title: "E-Commerce Platform",
    techStack: "React, Node.js, Express, MongoDB",
    startDate: "Mar 2023",
    endDate: "May 2023",
    description:
      "Designed and developed a full-stack e-commerce platform with authentication, product filtering, cart management, and Stripe payment integration.",
  },
  {
    id: crypto.randomUUID(),
    title: "Task Management App",
    techStack: "React, Firebase",
    startDate: "Nov 2022",
    endDate: "Dec 2022",
    description:
      "Built a real-time task management application with drag-and-drop functionality and Firebase authentication.",
  },
];

const skillsList = [
  { id: crypto.randomUUID(), name: "JavaScript" },
  { id: crypto.randomUUID(), name: "React" },
  { id: crypto.randomUUID(), name: "Node.js" },
  { id: crypto.randomUUID(), name: "MongoDB" },
  { id: crypto.randomUUID(), name: "Tailwind CSS" },
];

let tempMore = [
  {
    id: crypto.randomUUID(),
    name: "Certifications",
    details: [
      {
        id: crypto.randomUUID(),
        type: "section",
        value: "AWS Certified Cloud Practitioner (2023)",
      },
      {
        id: crypto.randomUUID(),
        type: "link",
        linkText: "View Certificate",
        url: "https://aws.amazon.com/certification/",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Languages",
    details: [
      {
        id: crypto.randomUUID(),
        type: "section",
        value: "English (Fluent), Hindi (Native)",
      },
    ],
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
    pdf.addImage(imgData, "JNG", 0, position, imgWidth, imgHeight);
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
    <div className="flex flex-col lg:grid lg:grid-cols-[10fr_9fr_2fr]  lg:gap-5 justify-center  pb-15 lg:pb-0">
      <div
        className={`lg:self-start w-full lg:flex-initial  flex flex-col items-center justify-center ${preview && "hidden lg:block"} `}
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
        <div className="hidden lg:h-screen lg:flex lg:justify-center lg:items-center ">
          <A4Sheet
            info={info}
            summary={summary}
            edu={edu}
            XP={XP}
            projects={projects}
            skills={skills}
            more={more}
          />
        </div>

        {preview && (
          <div className="lg:hidden flex justify-center items-center mb-14 mt-4">
            <A4Sheet
              info={info}
              summary={summary}
              edu={edu}
              XP={XP}
              projects={projects}
              skills={skills}
              more={more}
            />
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
function A4Sheet({ info, summary, edu, XP, projects, skills, more }) {
  return (
    <div
      className="flex flex-col top-8 h-(--height) w-[calc(var(--height)*(210/297))] @container items-stretch border p-[4%] leading-3"
      id="sheet"
    >
      <h1 className="text-[90%] font-extrabold text-center">{`${info.firstName} ${info.lastName}`}</h1>
      <p className="text-[50%] text-center">{`${info.email} | ${info.phone} | ${info.address}`}</p>
      <br></br>
      <h3 className="text-[70%] font-bold">Career Objective</h3>
      <hr></hr>
      <p className="text-[50%]">{summary}</p>
      <br></br>
      <h3 className="text-[70%] font-bold">Education</h3>
      <hr></hr>
      {edu.map((x) => (
        <div key={x.id}>
          <div className=" flex justify-between">
            <span className="text-[50%] font-semibold">{x.course}</span>
            <span className="text-[50%] font-semibold">{`${x.startDate} - ${x.endDate}`}</span>
          </div>
          <p className="text-[50%]">{x.school}</p>
          <br></br>
        </div>
      ))}
      <h3 className="text-[70%] font-bold">Work Experience</h3>
      <hr></hr>
      {XP.map((x) => (
        <div key={x.id}>
          <div className=" flex justify-between">
            <span className="text-[50%] font-semibold">{`${x.position} | ${x.company}`}</span>
            <span className="text-[50%] font-semibold">{`${x.startDate} - ${x.endDate}`}</span>
          </div>
          <li className="text-[50%]">{x.description}</li>
          <br></br>
        </div>
      ))}
      <h3 className="text-[70%] font-bold">Projects</h3>
      <hr></hr>
      {projects.map((x) => (
        <div key={x.id}>
          <div className=" flex justify-between">
            <span className="text-[50%] font-semibold">{`${x.title} | ${x.techStack}`}</span>
            <span className="text-[50%] font-semibold">{`${x.startDate} - ${x.endDate}`}</span>
          </div>
          <li className="text-[50%]">{x.description}</li>
          <br></br>
        </div>
      ))}
      {more.map((x) => (
        <div key={x.id}>
          <h3 className="text-[70%] font-bold">{x.name}</h3>
          <hr></hr>

          <span className=" flex justify-between" key={x.details[0].id}>
            <span className="text-[50%] font-semibold">{`${x.details[0].value}`}</span>

            <a href={x.details[1]?.url}>
              <span className="text-[50%] font-semibold">
                {x.details[1]?.linkText}
              </span>
            </a>
          </span>
        </div>
      ))}
    </div>
  );
}
export default App;
