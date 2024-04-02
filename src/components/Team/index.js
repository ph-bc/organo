import hexToRgba from "hex-to-rgba";
import Subject from "../Subject";
import "./Team.css";

const Team = ({ team, subjects, changeColor, onDel, onFavorite }) => {
  return (
    subjects.length > 0 && (
      <section
        className="team"
        style={{
          backgroundImage: "url(/images/fundo.png)",
          backgroundColor: hexToRgba(team.color, "0.5"),
        }}
      >
        <input
          value={team.color}
          onChange={(event) => changeColor(event.target.value, team.id)}
          type="color"
          className="input-color"
        />
        <h3 style={{ borderColor: team.color }}>{team.name}</h3>
        <div className="subjects">
          {subjects.map((subject) => {
            return (
              <Subject
                key={subject.id}
                subject={subject}
                color={team.color}
                onDel={onDel}
                onFavorite={onFavorite}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Team;
