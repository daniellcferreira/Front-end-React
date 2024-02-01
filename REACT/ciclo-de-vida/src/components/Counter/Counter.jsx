import React from "react";

export class Counter extends React.Component {

    constructor() {
        super();
        this.state = {contador: 0};
        console.log("Construindo a classe Counter!");
    }

    UNSAFE_componentWillMount() {
        console.log("O componente Counter esta sendo chamado!");
    }

    componentDidMount() {
        console.log("O componente foi montado!");
    }

    shouldComponentUpdate() {
        if(this.state.contador === 5) return false;
        return true;
    }

    UNSAFE_componentWillUpdate() {
        console.log("O componente será atualizado!");
    }

    componentDidUpdate() {
        console.log("O componente foi atualizado!");
    }

    componentWillUnmount() {
        console.log("O componente será desmontado!")
    }

    render() {
        return (
            <div>
                <h1>{this.state.contador}</h1>

                <button onClick={() => this.setState({contador: this.state.contador - 1})}>Diminuir</button>
                <button onClick={() => this.setState({contador: this.state.contador + 1})}>Aumentar</button>
            </div>
        )
    }
}