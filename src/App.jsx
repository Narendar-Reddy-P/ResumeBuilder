import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import styles from "./App.module.css";
import { A4Sheet } from "./Components/A4Sheet";
import { PersonalInfoProvider } from "./contexts/personalContext";
import Footer from "./Components/Footer";

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
                  <main
                    className={`${styles.main} ${preview ? styles.previewMode : ""}`}
                  >
                    <section className={styles.leftSection}>
                      <header className={styles.header}>
                        <h2>Resume Builder</h2>
                        <p className={styles.p}>
                          Make instant resumes with minimal effort
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
                      <div className={styles.a4preview}>
                        <A4Sheet ref={contentRef} />
                      </div>
                    </section>

                    <Footer
                      preview={preview}
                      handlePrint={handlePrint}
                      setPreview={setPreview}
                    />
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
