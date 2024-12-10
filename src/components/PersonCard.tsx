import React from "react"
import { PersonModal } from "./Modals";

interface PersonCardProps{
    personName: string;
    onEdit: () => void;
    onDelete: () => void;
}

export default function PersonCard({ personName, onEdit, onDelete }:PersonCardProps){
    return (
        <div className = "person-card">
            <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"></img>
            <p>{personName}</p>
            <button onClick={onEdit}>Editar</button>
            <button onClick={onDelete}>Eliminar</button>
            {}
        </div>
    )
}

