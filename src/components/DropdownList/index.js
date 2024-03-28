import "./DropdownList.css";

const DropdownList = ({ required, label, items, value, onChanged }) => {
  return (
    <div className="dropdown-list">
      <label>{label}</label>
      <select
        onChange={(event) => onChanged(event.target.value)}
        required={required}
        value={value}
      >
        <option value=""></option>
        {items.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default DropdownList;
