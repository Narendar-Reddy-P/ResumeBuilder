import ellipsis from "../assets/images/icons/ellipsis-horizontal.svg";
import { CircularPlus } from "../Icon";
import deleteIcon from "../assets/images/icons/delete-icon.svg";
import togglerDown from "../assets/images/icons/toggler-down.svg";
import { ComponentHeader } from "../MinorComponents/ComponentHeader";
import { useComponent } from "../contexts/TogglerContext";
import { Icon } from "../MinorComponents/Icon";
import { Input } from "../MinorComponents/Input";
import { useMore } from "../contexts/MoreContext";
import styles from "./More.module.css";

export function More() {
  const { component } = useComponent();
  const { addSection, data } = useMore();

  return (
    <div>
      <ComponentHeader mainIcon={ellipsis} text={"More"} />
      {component === "More" && (
        <div className={styles.formWrapper}>
          <div>
            {data.map((section) => (
              <SectionForm key={section.id} id={section.id} section={section} />
            ))}
          </div>
          <div onClick={addSection} className={styles.addButton}>
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
    <div className={section.selected ? styles.openedSection : undefined}>
      <header onClick={() => handleSelected(section.id)} className={`${styles.itemHeader} ${section.selected ? styles.itemHeaderOpen : ''}`}>
        <span>{section.name || "Section"}</span>
        <div className={styles.icons}>
          <Icon src={togglerDown} size={"small"} />
          <Icon
            src={deleteIcon}
            onClick={(e) => {
              e.stopPropagation();
              deleteSection(section.id, e.target.value);
            }}
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

          <div className={styles.buttonContainer}>
            <div onClick={() => addLink(section.id)} className={styles.addButton}>
              <CircularPlus />
              <span> Add Link</span>
            </div>
            <div onClick={() => addSectionItem(section.id)} className={styles.addButton}>
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
    <div className={styles.sectionItemRow}>
      <input
        className={styles.input}
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
    <div className={styles.linkBox}>
      <input
        className={styles.input}
        placeholder="Link Text"
        value={item.linkText}
        onChange={(e) =>
          changeSectionItem(item.id, sectionId, "linkText", e.target.value)
        }
      />
      <input
        className={styles.input}
        placeholder="URL"
        value={item.url}
        onChange={(e) =>
          changeSectionItem(item.id, sectionId, "url", e.target.value)
        }
      />
      <div style={{ position: "absolute", top: "0.8rem", right: "0.5rem" }}>
        <Icon
          src={deleteIcon}
          onClick={() => {
            deleteSectionItem(sectionId, item.id);
          }}
          size={"small"}
        />
      </div>
    </div>
  );
}
