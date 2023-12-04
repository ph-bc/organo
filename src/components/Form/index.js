import Button from "../Button";
import DropdownList from "../DropdownList";
import TextField from "../TextField";
import "./Form.css";

const Form = () => {
  const teams = [
    "Programação",
    "Front-End",
    "Data Science",
    "DevOps",
    "UX e Design",
    "Mobile",
    "Inovação e Festão",
  ];

  const save = (event) => {
    event.preventDefault();
    alert("O formulário foi enviado com sucesso!");
  };

  return (
    <section className="form">
      <form onSubmit={save}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <TextField required={true} label="Nome" placeholder="Digite seu nome" />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
        <DropdownList required={true} label="Time" items={teams} />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;