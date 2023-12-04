import "./DropdownList.css";

const DropdownList = (props) => {
  console.log(props.items);
  return (
    <div className="dropdown-list">
      <label>{props.label}</label>
      <select required={props.required}>
        {props.items.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default DropdownList;