'use client'

const { createContext, useState } = require("react")

export const appContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [addresses,setAddresses] = useState([]);
    const [order , setOrder] = useState({});

    const value = {addresses,setAddresses,order,setOrder};

    return (
        <appContext.Provider value={value}>
            {children}
        </appContext.Provider>
    );

}
