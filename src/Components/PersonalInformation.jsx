import { MainComponentHeaderToggler } from "../Utility";
import { useState } from "react";
import userIcon from "../assets/images/icons/user-icon.svg";
import { Input } from "../Utility";

const personalInfo = {
  firstName: "",
  lastName: "",
  jobTitle: "",
  phone: "",
  email: "",
  github: "",
  portfolio: "",
  address: "",
};
export function PersonalInformation({
  onSelectMainComponent,
  selectMainComponent,
}) {
  const [info, setInfo] = useState(personalInfo);
  const text = "Personal Information";
  return (
    <div className="mainComponent">
      <MainComponentHeaderToggler
        mainIcon={userIcon}
        text="text"
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
      {selectMainComponent === text && (
        <div className="w-full pb-4 flex flex-col gap-3">
          <div className=" w-full px-4 ">
            <label
              htmlFor="firstName"
              className="text-indigo-900 cursor-pointer"
            >
              {"First Name"}
            </label>
            <br />
            <input
              type="text"
              className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"
              id="firstName"
              value={info.firstName}
              onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
            />
          </div>
          <div className=" w-full px-4 ">
            <label
              htmlFor="lastName"
              className="text-indigo-900 cursor-pointer"
            >
              Last Name
            </label>
            <br />
            <input
              type="text"
              className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"
              id="lastName"
              value={info.lastName}
              onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
            />
          </div>
          <div className=" w-full px-4 ">
            <label
              htmlFor="jobTitle"
              className="text-indigo-900 cursor-pointer"
            >
              Job Title
            </label>
            <br />
            <input
              type="text"
              className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"
              id="jobTitle"
              value={info.jobTitle}
              onClick={(e) => setInfo({ ...info, jobTitle: e.target.value })}
            />
          </div>
          <div className=" w-full px-4 ">
            <label htmlFor="phone" className="text-indigo-900 cursor-pointer">
              Phone
            </label>
            <br />
            <input
              type="text"
              className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"
              id="phone"
              value={info.phone}
              onChange={(e) => setInfo({ ...info, phone: e.target.value })}
            />
          </div>
          <div className=" w-full px-4 ">
            <label htmlFor="email" className="text-indigo-900 cursor-pointer">
              Email
            </label>
            <br />
            <input
              type="text"
              className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"
              id="email"
              value={info.email}
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
            />
          </div>
          <div className=" w-full px-4 ">
            <label htmlFor="github" className="text-indigo-900 cursor-pointer">
              GitHub
            </label>
            <br />
            <input
              type="text"
              className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"
              id="github"
              value={info.github}
              onChange={(e) => setInfo({ ...info, github: e.target.value })}
            />
          </div>
          <div className=" w-full px-4 ">
            <label
              htmlFor="portfolio"
              className="text-indigo-900 cursor-pointer"
            >
              Portfolio
            </label>
            <br />
            <input
              type="text"
              className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"
              id="portfolio"
              value={info.portfolio}
              onChange={(e) => setInfo({ ...info, portfolio: e.target.value })}
            />
          </div>
          <div className=" w-full px-4 ">
            <label htmlFor="address" className="text-indigo-900 cursor-pointer">
              Address
            </label>
            <br />
            <input
              type="text"
              className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"
              id="address"
              value={info.address}
              onChnage={(e) => setInfo({ ...info, address: e.target.value })}
            />
          </div>
        </div>
      )}
    </div>
  );
}
