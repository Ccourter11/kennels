import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"

export const EmployeeForm = () => {
  const {locations, getLocations} = useContext(LocationContext)
  const {updateEmployee, addEmployee, getEmployeeById} = useContext(EmployeeContext)
  const [isLoading, setIsLoading] = useState(true)
  const {employeeId} = useParams()

  const [employee, setEmployee] = useState({
    name: "",
    locationId: 0
  })

  const history = useHistory()

  useEffect(() => {
    getLocations()
    .then(()=>{
      if(employeeId){
        getEmployeeById(employeeId)
        .then(employee => {
          setEmployee(employee)
          setIsLoading(false)
        })
        
      }else{
        setIsLoading(false)
      }
    })
  }, [])

  const handleControlledInputChange = (event) => {
    const newEmployee = {...employee}

    let selectedVal = event.target.value

    if (event.target.id.includes("Id")){
      selectedVal = parseInt(selectedVal)
    }

    newEmployee[event.target.id] = selectedVal

    setEmployee(newEmployee)
  }

  const handleClickSaveEmployee = (event) => {
    event.preventDefault()
    employee.locationId = parseInt(employee.locationId)

    if (employee.locationId === 0) {
      window.alert("Please select a location")
    } else {
      if(employeeId){
        updateEmployee({name: employee.name,
                        locationId: employee.locationId,
                        id: employee.id})
        .then(()=> history.push(`/employees/detail/${employee.id}`))
      }else{
        addEmployee({name: employee.name,
                    locationId: employee.locationId})
        .then(() => history.push("/employees"))
      }
    }
  }

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">Employee Form</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Employee Name: </label>
          <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name} />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location: </label>
          <select defaultValue={employee.locationId} name="locationId" id="locationId" className="form-control" onChange={handleControlledInputChange}>
            <option valut="0">Select a location...</option>
            {locations.map(location => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary"
            disabled= {isLoading}
            onClick={handleClickSaveEmployee}>
            {employeeId ? "Edit Employee" : "Save Employee"}
        </button>
      </fieldset> 
    </form>
  )
}