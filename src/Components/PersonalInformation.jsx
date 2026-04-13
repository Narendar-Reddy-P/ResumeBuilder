import { MainComponentHeaderToggler } from "../Utility";
import userIcon from "../assets/images/icons/user-icon.svg";
import { Input } from "../MinorComponents/Input";
import { usePersonalInfo } from "../contexts/personalContext";

export function PersonalInformation({
  onSelectMainComponent,
  selectMainComponent,
}) {
  const {
    firstName,
    lastName,
    jobTitle,
    phone,
    email,
    github,
    portfolio,
    address,
    changeFirstName,
    changeLastName,
    changeJobTitle,
    changePhone,
    changeEmail,
    changeGithub,
    changePortfolio,
    changeAddress,
  } = usePersonalInfo();
  const text = "Personal Information";
  return (
    <div>
      <MainComponentHeaderToggler
        mainIcon={userIcon}
        text="Personal Information"
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
      {selectMainComponent === text && (
        <div>
          <Input
            id="firstName"
            type="text"
            header="First Name"
            value={firstName}
            onChange={(e) => changeFirstName(e.target.value)}
          />
          <Input
            id="lastName"
            type="text"
            header="Last Name"
            value={lastName}
            onChange={(e) => changeLastName(e.target.value)}
          />
          <Input
            id="jobTitle"
            type="text"
            header="Job Title"
            value={jobTitle}
            onChange={(e) => changeJobTitle(e.target.value)}
          />
          <Input
            id="phone"
            type="text"
            header="Phone"
            value={phone}
            onChange={(e) => changePhone(e.target.value)}
          />
          <Input
            id="email"
            type="text"
            header="Email"
            value={email}
            onChange={(e) => changeEmail(e.target.value)}
          />
          <Input
            id="github"
            type="text"
            header="GitHub"
            value={github}
            onChange={(e) => changeGithub(e.target.value)}
          />
          <Input
            id="portfolio"
            type="text"
            header="Portfolio"
            value={portfolio}
            onChange={(e) => changePortfolio(e.target.value)}
          />
          <Input
            id="address"
            type="text"
            header="Address"
            value={address}
            onChange={(e) => changeAddress(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
