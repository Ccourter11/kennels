// // My Main App Component

import React, { useState, useEffect } from "react"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import "./Kennel.css"
import { CustomerCard } from "./customer/CustomerCard";
import "./customer/Customer.css"
import { EmployeeCard } from "./employee/EmployeeCard";
import "./employee/EmployeeCard";
import { PropsAndState } from "./PropsAndState";
import "./PropsAndState"



export const Kennel = () => {
  // let counter = 1
  let [counter, setCounter] = useState(1)

  const [kennel, setKennel] = useState({
    name: "Nashville Kennels: #1 in Davidson County",
    locations: [
      {
        name: "Nashville North",
        address: "500 Puppy Way"
      }
    ]
  })

  // useEffect(() => {
  //   console.log("useEffect that runs every time counter changes")
  // }, [counter])

  const incrementCounter = () => {
    // debugger
    const newCounterValue = ++counter

    // DO NOT DO: counter = newCounterValue
    setCounter(newCounterValue)
    // console.log("counter", counter)
    // console.log("setCounter", setCounter)
  }

  // debugger

  return (
    <>
      {console.log("render jsx")}
      <h2>{kennel.name}</h2>
      <small>Loving care when you're not there.</small>
      <address>
        <div>Visit Us at the {kennel.locations[0].name} Location</div>
        <div>{kennel.locations[0].address}</div>
      </address>
      <article>
        <PropsAndState yourName={"calvin"} />
      
        <div>Currently helping #{counter}</div>
        <button onClick={incrementCounter}>Take a number</button>
      </article>
      <AnimalProvider>
        <AnimalList />
      </AnimalProvider>
    </>
  )
}
export const Customer = () => {
    // creating a new variable that contains an obj
    const customer = {
        name: "Hannah Hall",
        // name is a key value pair
        locations: [
            {
                state:"Tennessee",
                city:"Nashville"
            }
        ]

    }
    // console.log("customer object", customer.locations)
    return (

    <>
        <h2>{customer.name}</h2>
        <small>I love shopping here!</small>
        <address>In {customer.locations[0].city}</address>
        <article className="customers">
            <CustomerCard />
        </article>
    </>
    )
 }
export const Employee = () => (
    <>
        
        <h2>Employee</h2>
        <article className="employees">
            <EmployeeCard />
        </article>
    </>
)