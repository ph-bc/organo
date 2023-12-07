import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";

function App() {
  const [subjects, setSubjects] = useState([]);

  const registered = (subject) => {
    console.log(subject);
    setSubjects([...subjects, subject]);
  };

  return (
    <div className="App">
      <Banner />
      <Form register={(subject) => registered(subject)} />
    </div>
  );
}

export default App;