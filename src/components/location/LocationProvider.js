import React, { useState, createContext } from "react"

export const LocationContext = createContext()

export const LocationProvider = (props) => {
  const [locations, setLocations] = useState([])

  const getLocations = () => {
    return fetch("http://localhost:8088/locations")
      .then(response => response.json())
      .then(setLocations)
  }
  const getLocationById = (id) => {
    return fetch(`http://localhost:8088/locations/${id}?_embed=employees&_embed=animals`)
    .then(res => res.json())
}
  const addLocation = locationObj => {
    return fetch("http://localhost:8088/locations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(locationObj)
    })
    .then(getLocations)
}
const updateLocation = locationObj => {
  return fetch(`http://localhost:8088/locations/${locationObj.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(locationObj)
  })
  .then(getLocations)
}

  return (
    <LocationContext.Provider value={{
      locations, getLocations, addLocation, updateLocation, getLocationById
    }}>
      {props.children}
    </LocationContext.Provider>
  )
}