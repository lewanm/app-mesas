import React from "react"
//import "../styles/globals.css"

interface PersonCardProps{
    personName: string;
}

export default function PersonCard({ personName }:PersonCardProps){
    return (
        <div className = "person-card">
            <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"></img>
            <p>{personName}</p>
            <button>Editar</button>
            <button>Eliminar</button>
        </div>
    )
}

