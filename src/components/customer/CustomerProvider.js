import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const CustomerContext = createContext()

// This component establishes what data can be used.
export const CustomerProvider = (props) => {

    const [customers, setCustomers] = useState([])
    // use the useState() hook to define a variable that holds the state of the component, and a function that updates it

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
        .then(res => res.json())
        .then(setCustomers)
    }


    /*
        You return a context provider which has the
        `Customers` state, `getCustomers` function,
        and the `addCustomer` function as keys. This
        allows any child elements to access them.
    */
    return (
        <CustomerContext.Provider value={{
            customers, getCustomers
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}