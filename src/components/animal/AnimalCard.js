import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"


export const AnimalCard = ({ animalProps }) => {
  return (
    <section className="animal">
      <h3 className="animal__name">
        <Link to={`/animals/detail/${animalProps.id}`}>
          { animalProps.name }
        </Link>
      </h3>
      <div className="animal__breed">{ animalProps.breed }</div>
  </section>
)}