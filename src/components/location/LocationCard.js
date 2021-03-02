import React from "react"
import "./Location.css"

export const LocationCard = ({locationProps}) => (
    <section className="location">
        <h3 className="location__name">{locationProps.location.name}</h3>
        <div className="location__address">{locationProps.location.address}</div>
    </section>
)