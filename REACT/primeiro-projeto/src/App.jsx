import React from "react";

import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import { Counter } from "./components/Counter/Counter";


// COMPONENTE em classe é uma classe que herda a classe Component do React e retorna HTML dentro do metodos render

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <Counter />
        <section id="articles">
          <Article title="Designing Dashboards" provider="Nasa" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae dolore id nam a debitis quas inventore animi quaerat sed enim laboriosam quis odio beatae harum, earum, ex explicabo ipsa eligendi"/>

          <Article title="Vibrant Portraits of 2020" provider="SpaceNews" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae dolore id nam a debitis quas inventore animi quaerat sed enim laboriosam quis odio beatae harum, earum, ex explicabo ipsa eligendi" />

          <Article title="36 Days of Malayalam type" provider="Spaceflght Now" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae dolore id nam a debitis quas inventore animi quaerat sed enim laboriosam quis odio beatae harum, earum, ex explicabo ipsa eligendi" />

          <Article title="Designing Dashboards" provider="Nasa" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae dolore id nam a debitis quas inventore animi quaerat sed enim laboriosam quis odio beatae harum, earum, ex explicabo ipsa eligendi"/>
        </section>
      </>
    );
  }
}

export default App;
