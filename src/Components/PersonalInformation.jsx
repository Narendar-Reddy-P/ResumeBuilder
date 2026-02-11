import { MainComponentHeaderToggler } from "../Utility";
import userIcon from "../assets/images/icons/user-icon.svg";
import { Input } from "../Utility";

// 1122px h 793px w
export function PersonalInformation({
  onSelectMainComponent,
  selectMainComponent,
}) {
  const text = "Personal Information";
  return (
    <div className="mainComponent">
      <MainComponentHeaderToggler
        mainIcon={userIcon}
        text={text}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
      {selectMainComponent === text && (
        <div className="w-full pb-4 flex flex-col gap-3">
          <Input id={"firstName"} header={"First Name"} type={"text"} />
          <Input id={"lastName"} header={"Last Name"} type={"text"} />
          <Input id={"jobTitle"} header={"Job Title"} type={"text"} />
          <Input id={"phone"} header={"Phone"} type={"tel"} />
          <Input id={"email"} header={"Email"} type={"email"} />
          <Input id={"gitHub"} header={"GitHub"} type={"url"} />
          <Input id={"portfolio"} header={"Portfolio"} type={"url"} />
          <Input id={"address"} header={"Address"} type={"text"} />
        </div>
      )}
    </div>
  );
}
