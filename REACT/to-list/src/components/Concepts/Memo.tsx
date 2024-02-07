import { useMemo, useState } from "react";

interface MemoizationProps {
    financialData: {
        incomes: number[],
        outcomes: number[],
    }
}

export const Memoization: React.FC<MemoizationProps> = ({financialData}) => {

    const [showValues, setShowValues] = useState(true);

    const totalIncomes = useMemo(() => {
        return financialData.incomes.reduce((total, income) => {
            return total += income;
        }, 0);
    }, [financialData.incomes]);

    const totalOutcomes = useMemo(() => {
        financialData.outcomes.reduce((total, outcome) => {
            return total += outcome;
        }, 0);
    }, [financialData.outcomes]);

    

    return (
        <div style={{padding: '2rem'}}>
            <h1>Memoization</h1>
            <h2>UseMemo</h2>
            <p>{`Total de receitas: R$${showValues ? totalIncomes : 'XXXXX'}`}</p>
            <br />
            <p>{`Total de depesas: R$${showValues ? totalOutcomes : 'XXXXX'}`}</p>
            <br />
            <br />
            <button onClick={() => setShowValues(!showValues)}>{showValues ? 'Ocultar valores' : 'Mostrar valores'}</button>       
            </div>
    );
};