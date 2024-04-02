import { useState } from "react";
import Button from "../Button";
import DropdownList from "../DropdownList";
import Field from "../Field";
import "./Form.css";

const Form = ({ teams, subjectRegister, teamRegister }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const [teamName, setTeamName] = useState("");
  const [color, setColor] = useState("");

  return (
    <section className="form">
      <form
        onSubmit={(event) => {
          event.preventDefault(); //Cancela o comportamento padrão do evento, como o envio de um formulário ou a navegação para outra página.
          subjectRegister({ name, role, image, team });
          setName("");
          setRole("");
          setImage("");
          setTeam("");
        }}
      >
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <Field
          required
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          onChanged={(value) => setName(value)}
        />
        <Field
          required
          label="Cargo"
          placeholder="Digite seu cargo"
          value={role}
          onChanged={(value) => setRole(value)}
        />
        <Field
          required={false}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          onChanged={(value) => setImage(value)}
        />
        <DropdownList
          required
          label="Time"
          items={teams}
          value={team}
          onChanged={(value) => setTeam(value)}
        />
        <Button>Criar card</Button>
      </form>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          teamRegister({ name: teamName, color: color });
          setTeamName("");
          setColor("");
        }}
      >
        <h2>Preencha os dados para criar um novo time:</h2>
        <Field
          required
          label="Nome"
          placeholder="Digite o nome do time"
          value={teamName}
          onChanged={(value) => setTeamName(value)}
        />
        <Field
          required
          label="Cor"
          type="color"
          placeholder="Digite a cor do time"
          value={color}
          onChanged={(value) => setColor(value)}
        />
        <Button>Criar time</Button>
      </form>
    </section>
  );
};

export default Form;
