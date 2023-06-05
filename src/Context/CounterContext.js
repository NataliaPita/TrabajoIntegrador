import React, { createContext, useState } from 'react';

export const CounterContext = createContext();

export const ContadorProvider = ({ children }) => {
    const [contador, setContador] = useState(0);

    const incrementarContador = () => {
    setContador(contador + 1);
};

    return (
    <CounterContext.Provider value={{ contador, incrementarContador }}>
        {children}
    </CounterContext.Provider>
    );
};
