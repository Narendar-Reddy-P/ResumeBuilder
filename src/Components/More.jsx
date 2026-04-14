import ellipsis from "../assets/images/icons/ellipsis-horizontal.svg";
import { CircularPlus } from "../Icon";
import deleteIcon from "../assets/images/icons/delete-icon.svg";
import togglerDown from "../assets/images/icons/toggler-down.svg";
import { ComponentHeader } from "../MinorComponents/ComponentHeader";
import { useComponent } from "../contexts/TogglerContext";
import { Icon } from "../MinorComponents/Icon";
import { Input } from "../MinorComponents/Input";
import { useMore } from "../contexts/MoreContext";

export function More() {
  const { component } = useComponent();
  const { addSection, data } = useMore();

  return (
    <div>
      <ComponentHeader mainIcon={ellipsis} text={"More"} />
      {component === "More" && (
        <div>
          <div>
            {data.map((section) => (
              <SectionForm key={section.id} id={section.id} section={section} />
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

function SectionForm({ section }) {
  const {
    handleSelected,
    deleteSection,
    changeSectionName,
    addLink,
    addSectionItem,
  } = useMore();

  return (
    <div>
      <header onClick={() => handleSelected(section.id)}>
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
      {section.selected && (
        <>
          <div>
            <Input
              id="sectionName"
              type="text"
              header="Section Name"
              value={section.name}
              onChange={(e) => changeSectionName(section.id, e.target.value)}
            />
            {section.details.length > 0 &&
              section.details.map((item) =>
                item.type === "section" ? (
                  <SectionItem
                    key={item.id}
                    item={item}
                    sectionId={section.id}
                  />
                ) : (
                  <Link key={item.id} item={item} sectionId={section.id} />
                ),
              )}
          </div>

          <div>
            <div onClick={() => addLink(section.id)}>
              <CircularPlus />
              <span> Add Link</span>
            </div>
            <div onClick={() => addSectionItem(section.id)}>
              <CircularPlus />
              <span> Add Section item</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function SectionItem({ item, sectionId }) {
  const { changeSectionItem, deleteSectionItem } = useMore();
  return (
    <div>
      <input
        className="bg-indigo-100 border-1.5 border-indigo-500 focus:border-indigo-500 text-indigo-900 focus:outline-none focus:ring focus:ring-indigo-900 focus:ring-offset-1 transition-all duration-300 rounded-sm w-full p-1"
        value={item.value}
        onChange={(e) =>
          changeSectionItem(item.id, sectionId, "value", e.target.value)
        }
      ></input>
      <Icon
        src={deleteIcon}
        onClick={() => deleteSectionItem(item.id)}
        size={"small"}
      />
    </div>
  );
}

function Link({ item, sectionId }) {
  const { changeSectionItem, deleteSectionItem } = useMore();
  return (
    <div>
      <div>
        <div>
          <input
            placeholder="Link Text"
            value={item.linkText}
            onChange={(e) =>
              changeSectionItem(item.id, sectionId, "linkText", e.target.value)
            }
          ></input>
          <Icon
            src={deleteIcon}
            onClick={() => {
              deleteSectionItem(sectionId, item.id);
            }}
            size={"small"}
          />
        </div>
        <div>
          <input
            placeholder="URL"
            value={item.url}
            onChange={(e) =>
              changeSectionItem(item.id, sectionId, "url", e.target.value)
            }
          ></input>
        </div>
      </div>
    </div>
  );
}
