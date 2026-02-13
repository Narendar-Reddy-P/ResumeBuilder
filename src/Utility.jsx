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
export function Input({ id, header, type, value = "" }) {
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
        value={value}
      />
    </div>
  );
}
export function TextArea({ id, header, value = "" }) {
  return (
    <div className="flex flex-col  gap-3 w-full p-4">
      <label htmlFor={id} rows={5} className="text-indigo-900 cursor-pointer">
        {header}
      </label>
      <textarea
        className="bg-indigo-100  text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm  p-1 outline-none h-30 w-full "
        id={id}
        value={value}
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

export function WEForm({
  data,
  isOpen,
  onSelect,
  onRemove,
  id,
  fields,
  displayLabel,
}) {
  return (
    <div className="w-full border border-indigo-800 rounded-lg mb-2">
      <header
        className="flex items-center justify-between cursor-pointer p-4 pl-3"
        onClick={() => onSelect(id)}
      >
        <span>{displayLabel}</span>
        <div className="ml-auto flex gap-4">
          <img src={togglerDown} className="w-4 h-4" />
          <img
            src={deleteIcon}
            className="w-4 h-4"
            onClick={(e) => {
              e.stopPropagation();
              onRemove(id);
            }}
          />
        </div>
      </header>
      {isOpen && (
        <div>
          {fields.map((field) =>
            field.type === "textarea" ? (
              <TextArea
                key={field.id}
                header={field.header}
                id={field.id}
                value={data[field.key]}
              />
            ) : (
              <Input
                key={field.id}
                header={field.header}
                type={field.type}
                id={field.id}
                value={data[field.key]}
              />
            ),
          )}
        </div>
      )}
    </div>
  );
}
