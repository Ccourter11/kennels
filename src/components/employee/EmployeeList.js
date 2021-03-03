import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"
import { useHistory } from "react-router-dom"
import { LocationContext } from "../location/LocationProvider"

export const EmployeeList = () => {
  const {employees, getEmployees} = useContext(EmployeeContext)
  const {locations, getLocations} = useContext(LocationContext)

  const history = useHistory()
  // this useHistory() hook is from our routing package @ import { useHistory } from "react-router-dom"

  useEffect(() => {
    getLocations()
    .then(getEmployees)
  }, [])

  return (
  <div className="employees">
      <h2>Employees</h2>
      {/* history.push changes the URL without the user taking any action */}
      {/* every page you visit gets inserted into the useHistory array, so when you push to that array */}
      {/* whatever item is at the end of the array, is the current URL, were taking the useHistory array and adding to it and that is the current page you will go to */}
      <button onClick={() => {history.push("employees/create")}}>
        Add Employee
      </button>
    {
    employees.map(employee => {
      const location = locations.find(l => l.id === employee.locationId)
      return <EmployeeCard key={employee.id} employee={employee} location={location}/>
    })
    }
  </div>
  )
}