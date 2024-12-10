import { useState } from "react"
import PersonCard from "./PersonCard"
import { AddPersonModal } from "./Modals"

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
    const [people, setPeople] = useState<Person[]>(listaPrueba);
    const [isModalOpen, setIsModalOpen] = useState(false)

    const addPerson = () => {
        setIsModalOpen(true);
      };

    const savePerson = (newPerson: Person) => {
        setPeople((prevPeople) => [...prevPeople, newPerson])
    }

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

            {isModalOpen && (
                <AddPersonModal
                    onClose={() => setIsModalOpen(false)}
                    onSave={savePerson}
                />
            )}
        </div>
    )
    
        
}

