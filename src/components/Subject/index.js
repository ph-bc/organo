import "./Subject.css";

const Subject = ({ name, role, image }) => {
  return (
    <div className="subject">
      <div className="header">
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
};

export default Subject;