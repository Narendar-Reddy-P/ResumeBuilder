import deleteIcon from "./assets/images/icons/delete-icon.svg";
import togglerDown from "./assets/images/icons/toggler-down.svg";
import { DeleteIcon, CircularPlus } from "./Icon";

export function Image({ url }) {
  return <img src={url} className="icon" />;
}

export function Input({ id, header, type, value = "" }) {
  return (
    <div>
      <label htmlFor={id}>{header}</label>
      <br />
      <input type={type} id={id} value={value} />
    </div>
  );
}
export function TextArea({ id, header, value = "", onChange = {}, rows = 5 }) {
  return (
    <div>
      <label htmlFor={id} rows={rows}>
        {header}
      </label>
      <textarea id={id} value={value} onChange={onChange} />
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
    <div>
      <header onClick={() => onSelect(id)}>
        <span>{displayLabel}</span>
        <div>
          <img src={togglerDown} />
          <img
            src={deleteIcon}
            onClick={() => {
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
