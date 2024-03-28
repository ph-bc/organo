import { FaCircleXmark } from "react-icons/fa6";
import "./Subject.css";

const Subject = ({ subject, color, onDel }) => {
  return (
    <div className="subject">
      <FaCircleXmark size={25} className="delete" onClick={() => onDel(subject.id)} />
      <div className="header" style={{ backgroundColor: color }}>
        <img src={subject.image} alt={subject.name} />
      </div>
      <div className="footer">
        <h4 style={{ color: color }}>{subject.name}</h4>
        <h5>{subject.role}</h5>
      </div>
    </div>
  );
};

export default Subject;
