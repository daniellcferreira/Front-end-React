import React from "react";

import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";


// COMPONENTE em classe é uma classe que herda a classe Component do React e retorna HTML dentro do metodos render

class App extends React.Component {
  render() {
    return (
      <Navbar />
    );
  }
}

export default App;
