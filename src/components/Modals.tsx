import { useState, ChangeEvent, FormEvent } from "react";

interface Person{
    id: number
    image: string;
    name: string;
}

interface ModalProps{
    onClose: () => void;
    onSave: (person:Person) => void;
}
//revisar todo el tema de interfaces, ya que se esta duplicando.
//ver si hago archivo aparte o que

export function AddPersonModal({onClose, onSave}:ModalProps){
    //tendria que tipar formData?
    const [formData, setFormData] = useState ({
        name: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSave({
            id: Date.now(),
            image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
            name: formData.name
        })
        console.log(formData)
        onClose();
    }

    return(
        <div className="modal">
            <form className="modal-content" onSubmit={handleSubmit}>
                <h2>Agregar Persona</h2>
                <div>
                    <label htmlFor="">Nombre:</label>
                    <input 
                        type="text"
                        value={formData.name} 
                        name = "name"
                        onChange={handleChange} required />
                    <button type="submit">Guardar</button>
                    <button onClick={onClose}> Cancelar</button>
                </div>
            </form>
        </div>
    )
}