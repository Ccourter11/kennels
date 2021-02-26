import React, { useEffect, useContext } from "react"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

// The useContext hook allows you to use data structures and functions that a parent provider component exposes.
// To start, you need to import the context object you created in the provider component so that the Context hook can access the objects it exposes
import { AnimalContext } from "./AnimalProvider"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)

    // The useEffect hook allows the component to reach out into the world for anything that cannot be handled during render. In this case, it is the API call for the animals.
  useEffect(() => {
    console.log("Fetching animals data from API")
    getAnimals()
  }, [])

  return (
    <>
      <h4>Animals</h4>
      <article className="animals">
          {/* Use the .map() array method to iterate the array of animals and generate HTML for each one by invoking the AnimalCard component function. */}
        {
          animals.map(animalObject => {
            return <AnimalCard key={animalObject.id} animalProps={animalObject} />
          })
        }
        {/* even though it looks like you are specifying an HTML component, you are actually invoking a function. Also, the key and animal arguments look like HTML attributes here, but they actually become properties on an object that gets passed as an argument */}
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