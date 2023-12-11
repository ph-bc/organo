import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const teams = [
    { name: "Programação", pColor: "#57c278", sColor: "#D9F7E9" },
    { name: "Front-End", pColor: "#82CFFA", sColor: "#E8F8FF" },
    { name: "Data Science", pColor: "#A6D157", sColor: "#F0F8E2" },
    { name: "DevOps", pColor: "#E06869", sColor: "#FDE7E8" },
    { name: "UX e Design", pColor: "#DB6EBF", sColor: "#FAE9F5" },
    { name: "Mobile", pColor: "#FFBA05", sColor: "#FFF5D9" },
    { name: "Inovação e Gestão", pColor: "#FF8A29", sColor: "#FFEEDF" },
  ];

  const [subjects, setSubjects] = useState([]);

  const registered = (subject) => {
    setSubjects([...subjects, subject]); // O operador spread (...) é usado para criar uma cópia do array original
  };

  return (
    <div className="App">
      <Banner />

      <Form
        teams={teams.map((team) => team.name)}
        register={(subject) => registered(subject)}
      />

      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          subjects={subjects.filter((subject) => subject.team === team.name)} // Cria um novo array com todos os elementos que passam no teste
          pColor={team.pColor}
          sColor={team.sColor}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;