import { useState } from "react";
import summaryIcon from "../assets/images/icons/user-summary.svg";
import { MainComponentHeaderToggler, TextArea } from "../Utility";

const profileSummary = "";
export function ProfileSummary({ onSelectMainComponent, selectMainComponent }) {
  const [summary, setSummary] = useState(profileSummary);

  function handleChangeSummary(value) {
    setSummary(value);
  }

  return (
    <div className="mainComponent">
      <MainComponentHeaderToggler
        mainIcon={summaryIcon}
        text={"Profile Summary"}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
      {selectMainComponent === "Profile Summary" && (
        <div className="w-full">
          <TextArea
            header={
              "Highlight your professional experience, skills, and accomplishments in a brief, impactful statement."
            }
            id={"profileSummary"}
            value={summary}
            onChange={(e) => handleChangeSummary(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
