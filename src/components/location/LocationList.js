// import React, { useEffect, useContext } from "react"
// import { LocationCard } from "./LocationCard";
// import "./Location.css"
// // To start, you need to import the context object you created in the provider component so that the Context hook can access the objects it exposes
// import { LocationContext } from "./LocationProvider";

// export const LocationList = () => {
//   // This state changes when `getLocations()` is invoked below
//   const { locations, getLocations } = useContext(LocationContext)


//    // The useEffect hook allows the component to reach out into the world for anything that cannot be handled during render. In this case, it is the API call for the locations.
//    useEffect(() => {
//     console.log("LocationList: useEffect - getLocations")
//     getLocations()
//   }, [])


//   return (
//   <>
//     <h4>Locations</h4>
//     <article className="locations">
//         {/* Use the .map() array method to iterate the array of animals and generate HTML for each one by invoking the LocationCard component function. */}
//       {locations.map(locationObject => {
//         return <LocationCard key={locationObject.id} locationProps={locationObject} />
//       })
//       }
//        {/* even though it looks like you are specifying an HTML component, you are actually invoking a function. Also, the key and location arguments look like HTML attributes here, but they actually become properties on an object that gets passed as an argument */}
//     </article>
//   </>
// )
// }

import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"
import { useHistory } from "react-router-dom"

export const LocationList = () => {
  const {locations, getLocations} = useContext(LocationContext)

  const history = useHistory()

  useEffect(() => {
    getLocations()
  }, [])

  return (
    <div className="locations">
      <h2>Locations</h2>
      <button onClick={() => history.push("locations/create")}>
        Add Locations
      </button>
      {
        locations.map(location => {
          return <LocationCard key={location.id} location={location} />
        })
      }
    </div>
  )
}