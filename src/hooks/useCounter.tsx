import { useState } from 'react';


export const useCounter = ( inicial: number = 10) => {

    const [valor, setvalor] = useState<number>(inicial);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const acumular = ( numero: number) => {
        setvalor( valor + numero );
    }

    return {
        valor,
        acumular
    }
}
