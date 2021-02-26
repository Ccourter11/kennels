import React, { useState, createContext } from "react"
// We will useState to hold and set the array of animals.


// A context stores a certain kind of data to be used in your application. Therefore, when you create a data provider component in React, you need to create a context
export const AnimalContext = createContext()
// Nothing is stored in the context when it's defined. At this point, it's just an empty warehouse waiting to be filled.



// Now that the required functions are imported, and an empty context is created, it's time to define the data provider component that will allow other components to use the data in the context
export const AnimalProvider = (props) => {
  
  // Next, you will use the useState() hook to define a variable that holds the state of the component, and a function that updates it.
  const [animals, setAnimals] = useState([])


 

  const getAnimals = () => {
    return fetch("http://localhost:8088/animals")
      .then(response => response.json())
      .then(animalsData => setAnimals(animalsData))
  }

  /*
      You return a context provider which has the
      `animals` state, `getAnimals` function,
      and the `addAnimal` function as keys. This
      allows any child elements to access them.
  */
  return (
    <AnimalContext.Provider value={{
      animals: animals, 
      getAnimals: getAnimals
      // animals, getAnimals
    }}>
      {props.children}
    </AnimalContext.Provider>
  )
}