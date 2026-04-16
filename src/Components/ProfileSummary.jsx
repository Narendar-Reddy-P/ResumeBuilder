import summaryIcon from "../assets/images/icons/user-summary.svg";
import { usePersonalInfo } from "../contexts/personalContext";
import { TextArea } from "../MinorComponents/TextArea";
import { ComponentHeader } from "../MinorComponents/ComponentHeader";
import { useComponent } from "../contexts/TogglerContext";
import styles from "./ProfileSummary.module.css";

export function ProfileSummary() {
  const { summary, changeSummary } = usePersonalInfo();
  const { component } = useComponent();
  return (
    <div>
      <ComponentHeader mainIcon={summaryIcon} text={"Profile Summary"} />
      {component === "Profile Summary" && (
        <div className={styles.formWrapper}>
          <TextArea
            header={
              "Highlight your professional experience, skills, and accomplishments in a brief, impactful statement."
            }
            id={"profileSummary"}
            value={summary}
            onChange={(e) => changeSummary(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
