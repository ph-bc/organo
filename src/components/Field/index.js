import "./Field.css";

const Field = ({ required, label, type = 'text', placeholder, value, onChanged }) => {
  const typing = (event) => {
    onChanged(event.target.value);
  };

  return (
    <div className={`field field-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={typing}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Field;
