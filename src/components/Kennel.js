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


    export const Kennel = () => {
        const kennel = {
          name: "Nashville Kennels: #1 in Davidson County",
          locations: [
            {
              name: "Nashville North",
              address: "500 Puppy Way"
            }
          ]
        }
      
        const animals = [
          {
            "name": "Doodles",
            "breed": "Poodle",
            "locationId": 1,
            "customerId": 3,
            "id": 1
          },
          {
            "id": 2,
            "name": "Kelvin",
            "breed": "Bulldog",
            "customerId": 3,
            "locationId": 2,
          },
          {
            "name": "Midnight",
            "breed": "Bulldog",
            "locationId": 2,
            "customerId": 3,
            "id": 3
          },
          {
            "name": "Chowder",
            "breed": "Pomeranian",
            "locationId": 1,
            "customerId": 3,
            "id": 4
          },
          {
            "name": "Nimbus",
            "breed": "Bulldog",
            "locationId": 1,
            "customerId": 3,
            "id": 5
          }
        ]
      
        const koopa = {
          name: "Koopa",
          breed: "Sulcata tortoise"
        }
      
        // debugger
      
        return (
          <>
            {console.log("kennel object", kennel.locations)}
            <h2>{kennel.name}</h2>
            <small>Loving care when you're not there.</small>
            <address>
              <div>Visit Us at the {kennel.locations[0].name} Location</div>
              <div>{kennel.locations[0].address}</div>
            </address>
            <article className="animals">
              {
                animals.map(animal => {
                  return <AnimalCard key={animal.id} animal={animal} />
                })
              }
            </article>
      
            <AnimalCard animal={koopa} />
          </>
        )
      }

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