import summaryIcon from "../assets/images/icons/user-summary.svg";
import { usePersonalInfo } from "../contexts/personalContext";
import { MainComponentHeaderToggler, TextArea } from "../Utility";

export function ProfileSummary({ onSelectMainComponent, selectMainComponent }) {
  const { summary, changeSummary } = usePersonalInfo();
  return (
    <div>
      <MainComponentHeaderToggler
        mainIcon={summaryIcon}
        text={"Profile Summary"}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
      {selectMainComponent === "Profile Summary" && (
        <div>
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
