'use client'

const { createContext, useState, useEffect } = require("react")

export const appContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [addresses, setAddresses] = useState([]);
    const [order, setOrder] = useState({});

    const value = { addresses, setAddresses, order, setOrder };


    useEffect(() => {

        const cache = localStorage.getItem('addresses');
        if (cache) {
            setAddresses(JSON.parse(cache));
        }

    }, []);

    return (
        <appContext.Provider value={value}>
            {children}
        </appContext.Provider>
    );

}
