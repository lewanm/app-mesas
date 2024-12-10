import { useEffect, useState } from "react"
import PersonCard from "./PersonCard"
import { PersonModal } from "./Modals"
import { getPeople } from "../services/apiService"

interface Person{
    id: number
    image: string;
    name: string;
}
export default function Sidebar() {
    const [people, setPeople] = useState<Person[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [personToEdit, setPersonToEdit] = useState<Person | null>(null)

    const addPerson = () => {
        setPersonToEdit(null);
        setIsModalOpen(true);
      };

    const openEditModal = (person: Person) => {
        setPersonToEdit(person);
        setIsModalOpen(true);
    }

    const savePerson = (person: Person) => {
        setPeople((prevPeople) =>{
            const personIndex = prevPeople.findIndex((p) => p.id === person.id);
            if (personIndex !== -1){
                const newPeople = [...prevPeople];
                newPeople[personIndex] = person;
                return newPeople;
            }
            return [...prevPeople, person];
        });
    }

    const deletePerson = (id: number) => {
        //esto es por ahora, solo filtro la lista que no tiene el ID, despues con el crud lo modifico.
        setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
    }

    useEffect(() => {
        const fetchPeople = async () => {
            try{
                const data = await getPeople();
                setPeople(data)
            } catch (err: any){
                console.log("Error al cargar los datos");
                console.log(err)
            } finally{
                setLoading(false)
            }
        }

        fetchPeople();
    }, [])

    if(loading) return <p>Cargando... </p>

    return (
        <div className="sidebar">
            <h2>Lista de personas</h2>

            <ul>
                {people.map(person => (
                    <li key={person.id}>
                        <PersonCard 
                            personName={person.name}
                            onEdit={() => openEditModal(person)}
                            onDelete={() => deletePerson(person.id)}/>
                    </li>
                ))}
            </ul>
            <button className="new-guest-button" onClick={addPerson}>
                Agregar nuevo
            </button>


            {isModalOpen && (
                <PersonModal
                    personToEdit={personToEdit || undefined}
                    onClose={() => setIsModalOpen(false)}
                    onSave={savePerson}
                />
            )}
        </div>
    )
    
        
}

