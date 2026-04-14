import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
// import styles from "./App.module.css";
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
import { useWork, WorkContextProvider } from "./contexts/workContext";
import { TogglerContextProvider } from "./contexts/TogglerContext";
import {
  ProjectsContextProvider,
  useProjects,
} from "./contexts/ProjectsContext";
import { SkillsContextProvider } from "./contexts/SkillsContext";
import { MoreContextProvider, useMore } from "./contexts/MoreContext";
// import { useSkills } from "./contexts/SkillsContext";

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
  const [preview, setPreview] = useState(false);

  function deleteResume() {
    // deletePersonalInfo();
    // setSummary(profileSummaryEmpty);
    // setEdu(coursesEmpty);
    // setXP(workXPsEmpty);
    // setProjects(tempProjectsEmpty);
    // setSkills(skillsListEmpty);
    // setMore(tempMoreEmpty);
  }

  function resetResume() {
    // resetPersonalInfo();
    // setSummary(profileSummary);
    // setEdu(courses);
    // setXP(workXPs);
    // setProjects(tempProjects);
    // setSkills(skillsList);
    // setMore(tempMore);
  }
  return (
    <TogglerContextProvider>
      <PersonalInfoProvider>
        <EducationContextProvider>
          <WorkContextProvider>
            <ProjectsContextProvider>
              <SkillsContextProvider>
                <MoreContextProvider>
                  <div>
                    <div>
                      <div>
                        <h2>Curriculum Vitae</h2>
                        <p>Your perfect CV made fast and effortless.</p>
                      </div>
                      <div>
                        <PersonalInformation />
                        <ProfileSummary />
                        <Education />
                        <WorkExperience />
                        <Projects />
                        <Skills />
                        <More />
                      </div>
                    </div>
                    <div>
                      <div>
                        <A4Sheet />
                      </div>

                      {preview && (
                        <div>
                          <A4Sheet id={"smallScreen"} />
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
                </MoreContextProvider>
              </SkillsContextProvider>
            </ProjectsContextProvider>
          </WorkContextProvider>
        </EducationContextProvider>
      </PersonalInfoProvider>
    </TogglerContextProvider>
  );
}
function A4Sheet({ id }) {
  const { firstName, lastName, phone, email, address, summary } =
    usePersonalInfo();
  const { education } = useEducation();
  const { works } = useWork();
  const { projects } = useProjects();
  // const { skills } = useSkills();
  const { data } = useMore();

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
      {works.map((x) => (
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
      {data.map((x) => (
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
