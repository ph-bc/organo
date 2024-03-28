import "./TextField.css";

const TextField = ({ required, label, placeholder, value, onChanged }) => {
  const typing = (event) => {
    onChanged(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{label}</label>
      <input
        value={value}
        onChange={typing}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
