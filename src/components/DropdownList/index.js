import "./DropdownList.css";

const DropdownList = (props) => {
  return (
    <div className="dropdown-list">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.onChanged(event.target.value)}
        required={props.required}
        value={props.value}
      >
        {props.items.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default DropdownList;