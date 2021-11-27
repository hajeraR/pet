import { useState } from "react";

const NewPetForm = ({onPetSubmission}) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [breed, setBreed] = useState("");
    const [type, setType] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    }

    const handlBreedChange = (event) => {
        setBreed(event.target.value);
    }

    const handleTypeChange = (event) => {
        setType(event.target.value);
    }
    
    const handleFormSubmission = (event) => {
        event.preventDefault();

        const newPets = {
            name: name,
            age: age,
            breed: breed,
            type: type
        }

        onPetSubmission(newPets);

        
        setName("");
        setAge("");
        setBreed("");
        setType("")

    }

    


    return(
        <>
        <h2>Add a new pet:</h2>
        <form onSubmit={handleFormSubmission}>
            <div className="formElement">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" value={name} onChange={handleNameChange}/>
            </div>
            <div className="formElement">
                <label htmlFor="age">Age: </label>
                <input type="text" id="age" value={age} onChange={handleAgeChange}/>
            </div>
            <div className="formElement">
                <label htmlFor="breed">Breed: </label>
                <input type="text" id="breed" value={breed} onChange={handlBreedChange}/>
            </div>
            <div className="formElement">
                <label htmlFor="type">Type: </label>
                <input type="text" id="type" value={type} onChange={handleTypeChange}/>
            </div>
            <div className="formElement">
                <input type="submit" value="Add Pet"/>
            </div>
        </form>
    </>
    )
}

export default NewPetForm;