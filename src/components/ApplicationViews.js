import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationProvider } from "./location/LocationProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeProvider } from './employee/EmployeeProvider';
import { AnimalList } from "./animal/AnimalList"
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { AnimalForm } from "./animal/AnimalForm"
import { EmployeeForm } from "./employee/EmployeeForm"
import { LocationForm } from "./location/LocationForm.js"
import { AnimalDetail } from "./animal/AnimalDetail"
import { EmployeeDetail } from './employee/EmployeeDetail'

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>

                        <Route path="/animals/create">
                            <AnimalForm />
                        </Route>

                        <Route exact path="/animals/detail/:animalId(\d+)">
                           <AnimalDetail/>
                        </Route>

                        <Route path="/animals/edit/:animalId(\d+)">
                         <AnimalForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

      {/* Now the AnimalList component can access data from all three data providers in order to access the name property on both the customer and the location */}

      <EmployeeProvider>
            <LocationProvider>
              <Route exact path="/employees">
                <EmployeeList />
              </Route>

              <Route exact path="/employees/create">
                <EmployeeForm />
              </Route>

              <Route exact path="/employees/detail/:employeeId(\d+)">
                           <EmployeeDetail/>
                        </Route>
            </LocationProvider>
        </EmployeeProvider>


            <LocationProvider>
              <Route exact path="/locations">
                <LocationList />
              </Route>

              <Route exact path="/locations/create">
                <LocationForm />
              </Route>
            </LocationProvider>

      <CustomerProvider>
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

      
    </>
  )
}