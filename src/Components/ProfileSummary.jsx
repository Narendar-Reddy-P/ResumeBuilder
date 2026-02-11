import summaryIcon from "../assets/images/icons/user-summary.svg";
import { MainComponentHeaderToggler, TextArea } from "../Utility";

export function ProfileSummary({ onSelectMainComponent, selectMainComponent }) {
  const text = "Profile Summary";
  return (
    <div className="mainComponent">
      <MainComponentHeaderToggler
        mainIcon={summaryIcon}
        text={text}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
      {selectMainComponent === text && (
        <div className="w-full">
          <TextArea
            header={
              "Highlight your professional experience, skills, and accomplishments in a brief, impactful statement."
            }
            id={"profileSummary"}
          />
        </div>
      )}
    </div>
  );
}
