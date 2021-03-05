import React, { useEffect, useContext, useState } from "react"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
// The useContext hook allows you to use data structures and functions that a parent provider component exposes.
// To start, you need to import the context object you created in the provider component so that the Context hook can access the objects it exposes
import { AnimalContext } from "./AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { useHistory } from "react-router-dom" // import from libraries before your local modules

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals, searchTerms } = useContext(AnimalContext)
  const { customers, getCustomers } = useContext(CustomerContext)
  const { locations, getLocations } = useContext(LocationContext)


  const [filtered, setFiltered] = useState([])
  const history = useHistory()


   // The useEffect hook allows the component to reach out into the world for anything that cannot be handled during render. In this case, it is the API call for the animals.
  useEffect(() => {
    // console.log("AnimalList: useEffect - getAnimals")
    getLocations()
    .then(getCustomers)
    .then(getAnimals)
  }, [])

  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase()))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all animals
      setFiltered(animals)
    }
  }, [searchTerms, animals])

  return (
    <>
      {/* {console.log("Data for AnimalList", animals, customers, locations)} */}
      <h4>Animals</h4>
      <button onClick={() => { history.push("/animals/create") }}>Add Animal</button>
      <article className="animals">
        {
          filtered.map(animalObject => {
            const owner = customers.find(c => c.id === animalObject.customerId)
            const location = locations.find(l => l.id === animalObject.locationId)
            return <AnimalCard key={animalObject.id} animalProps={animalObject} owner={owner} location={location} />
          })
        }
      </article>
    </>
  )
}



// vanilla JS code.
// const properties = {
//     key: animal.id,
//     animal: animal
// }
// Animal(properties)

// 
// 
// In React, that gets shortened to the following JSX.
// 
// <AnimalCard key={animal.id} animal={animal} />

