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

  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Obtém o primeiro arquivo selecionado pelo usuário
    if (file) {
      // Se um arquivo foi selecionado
      const reader = new FileReader();
      reader.onload = (e) => {
        // Quando a leitura do arquivo for concluída
        setImage(e.target.result); // Define a imagem como base64
      };
      console.log(file);
      reader.readAsDataURL(file); // Lê o arquivo como URL de dados
    }
  };

  return (
    <section className="form">
      <form
        onSubmit={(event) => {
          event.preventDefault();
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

        <label>Imagem</label>
        <input
          required
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />

        {image && <img src={image} alt="Imagem do colaborador" />}

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
