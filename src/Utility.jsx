import deleteIcon from "./assets/images/icons/delete-icon.svg";
import togglerDown from "./assets/images/icons/toggler-down.svg";
import togglerUp from "./assets/images/icons/toggler-up.svg";
import { DeleteIcon, CircularPlus } from "./Icon";

export function Image({ url }) {
  return (
    <>
      <img src={url} className="w-5 h-5 " />
    </>
  );
}
export function Icon({ url }) {
  return <img src={url} className="w-4 h-4 " />;
}
export function Input({ id, header, type }) {
  return (
    <div className=" w-full px-4 ">
      <label htmlFor={id} className="text-indigo-900 cursor-pointer">
        {header}
      </label>
      <br />
      <input
        type={type}
        className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"
        id={id}
      />
    </div>
  );
}
export function TextArea({ id, header }) {
  return (
    <div className="flex flex-col  gap-3 w-full p-4">
      <label htmlFor={id} rows={5} className="text-indigo-900 cursor-pointer">
        {header}
      </label>
      <textarea
        className="bg-indigo-100  text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm  p-1 outline-none h-30 w-full "
        id={id}
      />
    </div>
  );
}
export function MainComponentHeaderToggler({
  mainIcon,
  text,
  onSelectMainComponent,
  selectMainComponent,
}) {
  let isOpen = selectMainComponent === text;
  return (
    <div
      className={`flex tracking-wide text-xl items-center px-4  h-12 gap-x-4 hover:bg-indigo-100 text-indigo-950 transition-all duration-300 m-1 cursor-pointer ${isOpen && "bg-indigo-100"} rounded-lg `}
      onClick={() => onSelectMainComponent(text)}
    >
      <Image url={mainIcon} />
      <h3 className="">{text}</h3>
      <div className="ml-auto">
        {isOpen ? <Image url={togglerUp} /> : <Image url={togglerDown} />}
      </div>
    </div>
  );
}
export function WorkXPForm() {
  return (
    <div className="w-full border border-indigo-800 rounded-lg">
      <header className="flex items-center justify-between cursor-pointer p-4 pl-3 ">
        <span>Job position, Company</span>
        <div className="ml-auto flex gap-4">
          <Icon url={togglerDown}></Icon>
          <Icon url={deleteIcon}></Icon>
        </div>
      </header>
      <div>
        <Input header={"Position"} type={"text"} id={`position`}></Input>
        <Input header={"Company"} type={"text"} id={`company`}></Input>
        <Input header={"Start Date"} type={"text"} id={`startDate`}></Input>
        <Input header={"End Date"} type={"text"} id={`endDate`}></Input>
        <TextArea header={"Description"} id={`description`} />
      </div>
    </div>
  );
}
export function EducationForm() {
  return (
    <div className="w-full border border-indigo-800 rounded-lg">
      <header className="flex items-center justify-between cursor-pointer p-4 pl-3 ">
        <span>School Name, Course</span>
        <div className="ml-auto flex gap-4">
          <Icon url={togglerDown}></Icon>
          <Icon url={deleteIcon}></Icon>
        </div>
      </header>
      <div>
        <Input header={"School"} type={"text"} id={`position`}></Input>
        <Input header={"Course"} type={"text"} id={`company`}></Input>
        <Input header={"Start Date"} type={"text"} id={`startDate`}></Input>
        <Input header={"End Date"} type={"text"} id={`endDate`}></Input>
        <TextArea header={"Description"} id={`description`} />
      </div>
    </div>
  );
}

export function SectionForm() {
  return (
    <div className="w-full border border-indigo-800 rounded-lg">
      <header className="flex items-center justify-between cursor-pointer p-4 pl-3 ">
        <span>Section Name</span>
        <div className="ml-auto flex gap-4">
          <Icon url={togglerDown}></Icon>
          <Icon url={deleteIcon}></Icon>
        </div>
      </header>
      <div>
        <Input header={"Section Name"} type={"text"} id={`sectionName`}></Input>
        <div className="w-80% border border-indigo-800 rounded-lg flex m-4  gap-3 items-center p-2">
          <input className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"></input>
          <DeleteIcon />
        </div>
        <LinkSection />
      </div>

      <div className="flex justify-end m-4 text-indigo-900 font-bold gap-4">
        <div className="flex ">
          <CircularPlus />
          <span> Add Link</span>
        </div>
        <div className="flex">
          <CircularPlus />
          <span> Add Section item</span>
        </div>
      </div>
    </div>
  );
}

function LinkSection() {
  return (
    <div>
      <div className="w-80% border border-indigo-800 rounded-lg flex flex-col m-4 mb-0 gap-2 items-center p-2 py-0">
        <div className="w-full  flex  m-4 mt-2 mb-0 gap-3 items-center  pb-0 pt-0 ">
          <input className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"></input>
          <DeleteIcon />
        </div>
        <div className="w-full pr-8.5 pb-2 pt-0">
          <input className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1 "></input>
        </div>
      </div>
    </div>
  );
}
