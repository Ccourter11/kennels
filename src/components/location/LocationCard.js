import React from "react"
import { Link } from "react-router-dom"
import "./Location.css"

export const LocationCard = (props) => (
    <section className="location">
        <h3 className="location__name"><Link to={`/locations/detail/${props.location.id}`}>
        {props.location.name}
        </Link></h3>
    </section>
)