import { useState } from "react"
import PersonCard from "./PersonCard"

function addPerson(){
    console.log("add person")
}

interface Person{
    id: number
    image: string;
    name: string;
}

interface SidebarProps{
    listaPrueba: Person[]
}

export default function Sidebar({listaPrueba}:SidebarProps) {
    const [people, setPeople] = useState<Person[]>(listaPrueba)

    return (
        <div className="sidebar">
            <h2>Lista de personas</h2>
            <ul>
                {people.map(person => (
                    <li key={person.id}>
                        <PersonCard personName={person.name}/>
                    </li>
                ))}
            </ul>
            <button className="new-guest-button" onClick={addPerson}>
                Agregar nuevo
            </button>
        </div>
    )
    
        
}

