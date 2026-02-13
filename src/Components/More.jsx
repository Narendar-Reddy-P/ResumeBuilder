import { MainComponentHeaderToggler, Input } from "../Utility";
import ellipsis from "../assets/images/icons/ellipsis-horizontal.svg";
import { CircularPlus } from "../Icon";
import deleteIcon from "../assets/images/icons/delete-icon.svg";
import togglerDown from "../assets/images/icons/toggler-down.svg";
import { useState } from "react";

let tempData = [
  {
    id: crypto.randomUUID(),
    sectionName: "",
    details: [
      { id: crypto.randomUUID(), type: "section", value: "" },
      { id: crypto.randomUUID(), type: "link", linkText: "", url: "" },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "",
    details: [],
  },
];

export function More({ onSelectMainComponent, selectMainComponent }) {
  const [data, setData] = useState(tempData);
  const [selectedSection, setSelectedSection] = useState(tempData[0].id);

  function handleSelectedSection(id) {
    if (selectedSection === id) {
      setSelectedSection("");
    } else {
      setSelectedSection(id);
    }
  }

  function deleteSection(id) {
    setData(data.filter((x) => x.id !== id));
  }

  function addSection() {
    const newSection = {
      id: crypto.randomUUID(),
      name: "",
      details: [],
    };
    setData([...data, newSection]);
  }

  return (
    <div className="mainComponent">
      <MainComponentHeaderToggler
        mainIcon={ellipsis}
        text={"More"}
        onSelectMainComponent={onSelectMainComponent}
        selectMainComponent={selectMainComponent}
      />
      {selectMainComponent === "More" && (
        <div className="p-4 w-full">
          <div className="w-full grid gap-2">
            {data.map((section) => (
              <SectionForm
                section={section}
                isOpen={selectedSection === section.id}
                key={section.id}
                onSelectedSection={handleSelectedSection}
                deleteSection={deleteSection}
                data={data}
                setData={setData}
              />
            ))}
          </div>
          <div
            className="flex justify-end my-4 mb-0 text-indigo-900 font-bold cursor-pointer"
            onClick={addSection}
          >
            <CircularPlus />
            <span>&nbsp; Add Section</span>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionForm({
  section,
  isOpen,
  onSelectedSection,
  deleteSection,
  data,
  setData,
}) {
  function addLink() {
    let tempLink = {
      id: crypto.randomUUID(),
      type: "link",
      linkText: "",
      url: "",
    };
    setData(
      data.map((x) =>
        x.id !== section.id ? x : { ...x, details: [...x.details, tempLink] },
      ),
    );
  }

  function addSectionItem() {
    let tempSectionItem = {
      id: crypto.randomUUID(),
      type: "section",
      value: "",
    };
    setData(
      data.map((x) =>
        x.id !== section.id
          ? x
          : { ...x, details: [...x.details, tempSectionItem] },
      ),
    );
  }
  function handleDelete(id) {
    setData(
      data.map((x) =>
        x.id !== section.id
          ? x
          : { ...x, details: [...x.details.filter((y) => y.id !== id)] },
      ),
    );
  }
  return (
    <div className="w-full border border-indigo-800 rounded-lg">
      <header
        className="flex items-center justify-between cursor-pointer p-4 pl-3 "
        onClick={() => onSelectedSection(section.id)}
      >
        <span>{section.name || "Section Name"}</span>
        <div className="ml-auto flex gap-4">
          <img src={togglerDown} className="w-4 h-4 " />
          <img
            src={deleteIcon}
            className="w-4 h-4 "
            onClick={() => deleteSection(section.id)}
          />
        </div>
      </header>
      {isOpen && (
        <>
          <div>
            <Input
              header={"Section Name"}
              type={"text"}
              id={`sectionName`}
              value={section.name}
            ></Input>
            {section.details.length > 0 &&
              section.details.map((item) =>
                item.type === "section" ? (
                  <SectionItem
                    key={item.id}
                    onDelete={handleDelete}
                    id={item.id}
                  />
                ) : (
                  <Link key={item.id} onDelete={handleDelete} id={item.id} />
                ),
              )}
          </div>

          <div className="flex justify-end m-4 text-indigo-900 font-bold gap-4">
            <div className="flex cursor-pointer" onClick={addLink}>
              <CircularPlus />
              <span> Add Link</span>
            </div>
            <div className="flex cursor-pointer" onClick={addSectionItem}>
              <CircularPlus />
              <span> Add Section item</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function SectionItem({ id, onDelete }) {
  return (
    <div className="w-80% border border-indigo-800 rounded-lg flex p-2 gap-3 items-center mb-2 m-4">
      <input className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"></input>
      <img
        src={deleteIcon}
        className="w-4 h-4 cursor-pointer"
        onClick={() => onDelete(id)}
      />
    </div>
  );
}

function Link({ id, onDelete }) {
  return (
    <div>
      <div className="w-80% border border-indigo-800 rounded-lg flex flex-col m-4 mb-0 gap-2 items-center p-2 py-0">
        <div className="w-full flex  m-4 mt-2 mb-0 gap-3 items-center  pb-0 pt-0 ">
          <input
            className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"
            placeholder="Link Text"
          ></input>
          <img
            src={deleteIcon}
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              onDelete(id);
            }}
          />
        </div>
        <div className="w-full pr-7 pb-2 pt-0">
          <input
            className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1 "
            placeholder="URL"
          ></input>
        </div>
      </div>
    </div>
  );
}
