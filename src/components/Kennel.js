// My Main App Component


import React from "react"
import { AnimalCard } from "./animal/AnimalCard"
import "./animal/Animal.css"
import { CustomerCard } from "./customer/CustomerCard";
import "./customer/Customer.css"
import { EmployeeCard } from "./employee/EmployeeCard";
import "./employee/EmployeeCard";

// Functional Component
// the single line is whatever gets returned in the parenthesis
export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>
    </>
)

export const Customer = () => (
    <>
        
        <h2>Customers</h2>
        <article className="customers">
            <CustomerCard />
        </article>
    </>
)

export const Employee = () => (
    <>
        
        <h2>Employee</h2>
        <article className="employees">
            <EmployeeCard />
        </article>
    </>
)