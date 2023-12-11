import "./Subject.css";

const Subject = ({ name, role, image, bColor }) => {
  return (
    <div className="subject">
      <div className="header" style={{ backgroundColor: bColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4 style={{ color: bColor }}>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
};

export default Subject;