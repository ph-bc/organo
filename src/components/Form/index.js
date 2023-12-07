import { useState } from "react";
import Button from "../Button";
import DropdownList from "../DropdownList";
import TextField from "../TextField";
import "./Form.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const save = (event) => {
    event.preventDefault(); //Cancela o comportamento padrão do evento, como o envio de um formulário ou a navegação para outra página.
    props.register({ name, role, image, team });
    setName("");
    setRole("");
    setImage("");
    setTeam("");
  };

  return (
    <section className="form">
      <form onSubmit={save}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          onChanged={(value) => setName(value)}
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={role}
          onChanged={(value) => setRole(value)}
        />
        <TextField
          required={false}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          onChanged={(value) => setImage(value)}
        />
        <DropdownList
          required={true}
          label="Time"
          items={props.teams}
          value={team}
          onChanged={(value) => setTeam(value)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;