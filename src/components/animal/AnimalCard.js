import React from "react"
import "./Animal.css"

// Hard Coded 
// export const AnimalCard = () => (
//     <section className="animal">
//         <h3 className="animal__name">Doodles</h3>
//         <div className="animal__breed">Breed: Poodle</div>
//     </section>
// )


export const AnimalCard = ({animal}) => (
    <section className="animal">
      {console.log(animal)}
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">Breed: {animal.breed}</div>
    </section>
  )