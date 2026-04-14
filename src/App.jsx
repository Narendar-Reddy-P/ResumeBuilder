import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import styles from "./App.module.css";
import {
  PersonalInfoProvider,
  usePersonalInfo,
} from "./contexts/personalContext";

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
import {
  EducationContextProvider,
  useEducation,
} from "./contexts/educationContext";

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
  const viewportWidth = window.innerWidth;
  let previewId;
  console.log(viewportWidth);
  console.log(viewportWidth < 1024);
  if (viewportWidth < 1024) {
    if (!document.querySelector("#smallScreen")) {
      alert(
        "Please click the preview button first to view your CV before downloading",
      );
      return;
    }
    previewId = "smallScreen";
  } else {
    previewId = "bigScreen";
  }
  const preview = document.querySelector(`#${previewId}`);
  if (!preview) return alert("Preview not found!");

  const rect = preview.getBoundingClientRect();
  console.log("Element dimensions:", {
    width: rect.width,
    height: rect.height,
    scrollWidth: preview.scrollWidth,
    scrollHeight: preview.scrollHeight,
  });

  if (rect.width === 0 || rect.height === 0) {
    alert("Element has no dimensions. Make sure it's visible!");
    return;
  }
  const originalStyle = preview.style.transform;
  preview.style.transform = "scale(1)";
  preview.style.transformOrigin = "top left";

  await new Promise((resolve) => setTimeout(resolve, 100));
  try {
    const canvas = await html2canvas(preview, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      windowWidth: preview.scrollWidth,
      windowHeight: preview.scrollHeight,
      logging: true,
    });

    preview.style.transform = originalStyle;

    if (!canvas || canvas.width === 0 || canvas.height === 0) {
      throw new Error("Failed to create canvas from element");
    }
    const imgData = canvas.toDataURL("image/png");

    if (!imgData || !imgData.startsWith("data:image/png;base64,")) {
      throw new Error("Invalid image data generated");
    }
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
  } catch (error) {
    console.error("PDF generation error:", error);
    alert("Failed to generate PDF: " + error.message);
  }
};

function App() {
  const [selectMainComponent, setSelectMainComponent] = useState("");
  const [preview, setPreview] = useState(false);

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
    // deletePersonalInfo();
    // setSummary(profileSummaryEmpty);
    // setEdu(coursesEmpty);
    setXP(workXPsEmpty);
    setProjects(tempProjectsEmpty);
    setSkills(skillsListEmpty);
    setMore(tempMoreEmpty);
  }

  function resetResume() {
    // resetPersonalInfo();
    // setSummary(profileSummary);
    // setEdu(courses);
    setXP(workXPs);
    setProjects(tempProjects);
    setSkills(skillsList);
    setMore(tempMore);
  }
  return (
    <PersonalInfoProvider>
      <EducationContextProvider>
        <div>
          <div>
            <div>
              <h2>Curriculum Vitae</h2>
              <p>Your perfect CV made fast and effortless.</p>
            </div>
            <div>
              <PersonalInformation
                onSelectMainComponent={handleSelectMainComponent}
                selectMainComponent={selectMainComponent}
              />
              <ProfileSummary
                onSelectMainComponent={handleSelectMainComponent}
                selectMainComponent={selectMainComponent}
              />
              <Education
                onSelectMainComponent={handleSelectMainComponent}
                selectMainComponent={selectMainComponent}
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
            <div>
              <A4Sheet
                XP={XP}
                projects={projects}
                skills={skills}
                more={more}
                id={"bigScreen"}
              />
            </div>

            {preview && (
              <div>
                <A4Sheet
                  XP={XP}
                  projects={projects}
                  skills={skills}
                  more={more}
                  id={"smallScreen"}
                />
              </div>
            )}
          </div>

          <div>
            <div onClick={() => setPreview(!preview)}>
              <div onClick={() => setPreview(!preview)}>
                {preview ? <EditIcon /> : <EyeIcon />}
              </div>
            </div>
            <div onClick={deleteResume}>
              <DeleteIcon />
            </div>
            <div onClick={resetResume}>
              <ResetIcon />
            </div>
            <div onClick={handleDownloadPDF}>
              <DownloadIcon />
            </div>
            <div>
              <PrintIcon />
            </div>
          </div>
        </div>
      </EducationContextProvider>
    </PersonalInfoProvider>
  );
}
function A4Sheet({ XP, projects, skills, more, id }) {
  const { firstName, lastName, phone, email, address, summary } =
    usePersonalInfo();
  const { education } = useEducation();
  return (
    <div id={id}>
      <h1>{`${firstName} ${lastName}`}</h1>
      <p>{`${email} | ${phone} | ${address}`}</p>
      <br></br>
      <h3>Career Objective</h3>
      <hr></hr>
      <p>{summary}</p>
      <br></br>
      <h3>Education</h3>
      <hr></hr>
      {education.map((x) => (
        <div key={x.id}>
          <div>
            <span>{x.course}</span>
            <span>{`${x.startDate} - ${x.endDate}`}</span>
          </div>
          <p>{x.school}</p>
          <br></br>
        </div>
      ))}
      <h3>Work Experience</h3>
      <hr></hr>
      {XP.map((x) => (
        <div key={x.id}>
          <div>
            <span>{`${x.position} | ${x.company}`}</span>
            <span>{`${x.startDate} - ${x.endDate}`}</span>
          </div>
          <li>{x.description}</li>
          <br></br>
        </div>
      ))}
      <h3>Projects</h3>
      <hr></hr>
      {projects.map((x) => (
        <div key={x.id}>
          <div>
            <span>{`${x.title} | ${x.techStack}`}</span>
            <span>{`${x.startDate} - ${x.endDate}`}</span>
          </div>
          <li>{x.description}</li>
          <br></br>
        </div>
      ))}
      {more.map((x) => (
        <div key={x.id}>
          <h3>{x.name}</h3>
          <hr></hr>

          <span key={x.details[0].id}>
            <span>{`${x.details[0].value}`}</span>

            <a href={x.details[1]?.url}>
              <span>{x.details[1]?.linkText}</span>
            </a>
          </span>
        </div>
      ))}
    </div>
  );
}
export default App;
