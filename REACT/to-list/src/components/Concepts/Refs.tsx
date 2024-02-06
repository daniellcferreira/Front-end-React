import { FormEvent, useRef } from "react"

export const Refs: React.FC = () => {
    const inputNameRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    function handleOnSubmit(event: FormEvent) {
        event.preventDefault();   
    }

    return (
        <form style={{padding: "2rem"}} onSubmit={(event) => handleOnSubmit(event)}>
            <h1>useRef</h1>
            <br />
            <input type="text" placeholder="Nome" ref={inputNameRef} />
            <input type="email" placeholder="E-mail" ref={inputEmailRef} />
            <input type="password" placeholder="Senha" ref={inputPasswordRef} />
            <br />
            <button type="submit">Submeter</button>
            
        </form>
    );
};