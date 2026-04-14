import ellipsis from "../assets/images/icons/ellipsis-horizontal.svg";
import { CircularPlus } from "../Icon";
import deleteIcon from "../assets/images/icons/delete-icon.svg";
import togglerDown from "../assets/images/icons/toggler-down.svg";
import { useState } from "react";
import { ComponentHeader } from "../MinorComponents/ComponentHeader";
import { useComponent } from "../contexts/TogglerContext";
import { Icon } from "../MinorComponents/Icon";
import { Input } from "../MinorComponents/Input";

export function More({ data, setData }) {
  const [selectedSection, setSelectedSection] = useState(data[0]?.id || "");
  const { component } = useComponent();

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

  function handleChangeSectionName(id, value) {
    setData(data.map((x) => (x.id != id ? x : { ...x, name: value })));
  }

  function handleChangeSectionItem(sectionId, id, parameter, value) {
    setData(
      data.map((x) =>
        x.id !== sectionId
          ? x
          : {
              ...x,
              details: x.details.map((y) =>
                y.id !== id ? y : { ...y, [parameter]: value },
              ),
            },
      ),
    );
    console.log(data);
  }

  return (
    <div>
      <ComponentHeader mainIcon={ellipsis} text={"More"} />
      {component === "More" && (
        <div>
          <div>
            {data.map((section) => (
              <SectionForm
                section={section}
                isOpen={selectedSection === section.id}
                key={section.id}
                onSelectedSection={handleSelectedSection}
                deleteSection={deleteSection}
                data={data}
                setData={setData}
                onChangeSectionName={handleChangeSectionName}
                onChangeSectionItem={handleChangeSectionItem}
              />
            ))}
          </div>
          <div onClick={addSection}>
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
  onChangeSectionName,
  onChangeSectionItem,
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
    <div>
      <header onClick={() => onSelectedSection(section.id)}>
        <span>{section.name || "Section"}</span>
        <div>
          <Icon src={togglerDown} size={"small"} />
          <Icon
            src={deleteIcon}
            onClick={(e) => deleteSection(section.id, e.target.value)}
            size={"small"}
          />
        </div>
      </header>
      {isOpen && (
        <>
          <div>
            <Input
              id="sectionName"
              type="text"
              header="Section Name"
              value={section.name}
              onChange={(e) => onChangeSectionName(section.id, e.target.value)}
            />
            {section.details.length > 0 &&
              section.details.map((item) =>
                item.type === "section" ? (
                  <SectionItem
                    key={item.id}
                    onDelete={handleDelete}
                    id={item.id}
                    value={item.value}
                    onChangeSectionItem={onChangeSectionItem}
                    sectionId={section.id}
                  />
                ) : (
                  <Link
                    key={item.id}
                    onDelete={handleDelete}
                    id={item.id}
                    sectionId={section.id}
                    onChangeSectionItem={onChangeSectionItem}
                    linkText={item.linkText}
                    url={item.url}
                  />
                ),
              )}
          </div>

          <div>
            <div onClick={addLink}>
              <CircularPlus />
              <span> Add Link</span>
            </div>
            <div onClick={addSectionItem}>
              <CircularPlus />
              <span> Add Section item</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function SectionItem({ id, onDelete, sectionId, onChangeSectionItem, value }) {
  return (
    <div>
      <input
        className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"
        value={value}
        onChange={(e) =>
          onChangeSectionItem(sectionId, id, "value", e.target.value)
        }
      ></input>
      <Icon src={deleteIcon} onClick={() => onDelete(id)} size={"small"} />
    </div>
  );
}

function Link({ id, onDelete, linkText, url, sectionId, onChangeSectionItem }) {
  return (
    <div>
      <div>
        <div>
          <input
            placeholder="Link Text"
            value={linkText}
            onChange={(e) =>
              onChangeSectionItem(sectionId, id, "linkText", e.target.value)
            }
          ></input>
          <Icon
            src={deleteIcon}
            onClick={() => {
              onDelete(id);
            }}
            size={"small"}
          />
        </div>
        <div>
          <input
            placeholder="URL"
            value={url}
            onChange={(e) =>
              onChangeSectionItem(sectionId, id, "url", e.target.value)
            }
          ></input>
        </div>
      </div>
    </div>
  );
}
