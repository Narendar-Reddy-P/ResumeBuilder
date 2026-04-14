import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import styles from "./App.module.css";
import { A4Sheet } from "./Components/A4Sheet";
import { PersonalInfoProvider } from "./contexts/personalContext";

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
import { EducationContextProvider } from "./contexts/educationContext";
import { WorkContextProvider } from "./contexts/workContext";
import { TogglerContextProvider } from "./contexts/TogglerContext";
import { ProjectsContextProvider } from "./contexts/ProjectsContext";
import { SkillsContextProvider } from "./contexts/SkillsContext";
import { MoreContextProvider } from "./contexts/MoreContext";

function App() {
  const [preview, setPreview] = useState(false);
  const contentRef = useRef(null);

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

  const handlePrint = useReactToPrint({
    contentRef,
    pageStyle: `
      @page { size: A4; margin: 0; }
      @media print { body { margin: 0; } }
    `,
  });

  return (
    <TogglerContextProvider>
      <PersonalInfoProvider>
        <EducationContextProvider>
          <WorkContextProvider>
            <ProjectsContextProvider>
              <SkillsContextProvider>
                <MoreContextProvider>
                  <main className={styles.main}>
                    <section className={styles.leftSection}>
                      <header className={styles.header}>
                        <h2>Curriculum Vitae</h2>
                        <p className={styles.p}>
                          Your perfect CV made fast and effortless.
                        </p>
                      </header>
                      <section className={styles.componentSection}>
                        <PersonalInformation />
                        <ProfileSummary />
                        <Education />
                        <WorkExperience />
                        <Projects />
                        <Skills />
                        <More />
                      </section>
                    </section>
                    <section className={styles.previewWrapper}>
                      <div className={styles.a4preview} ref={contentRef}>
                        <A4Sheet />
                      </div>
                      {preview && <A4Sheet id={"smallScreen"} />}
                    </section>

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
                      <div onClick={handlePrint}>
                        <DownloadIcon />
                      </div>
                      <div>
                        <PrintIcon />
                      </div>
                    </div>
                  </main>
                </MoreContextProvider>
              </SkillsContextProvider>
            </ProjectsContextProvider>
          </WorkContextProvider>
        </EducationContextProvider>
      </PersonalInfoProvider>
    </TogglerContextProvider>
  );
}
export default App;
