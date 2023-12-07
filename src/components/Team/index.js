import Subject from "../Subject";
import "./Team.css";

const Team = (props) => {
  return (
    props.subjects.length > 0 && (
      <section className="team" style={{ backgroundColor: props.sColor }}>
        <h3 style={{ borderColor: props.pColor }}>{props.name}</h3>
        <div className="subjects">
          {props.subjects.map((subject) => (
            <Subject
              name={subject.name}
              role={subject.role}
              img={subject.image}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;