import PetList from "../components/PetList";
import { useState, useEffect } from "react";
import NewPetForm from "../components/NewPetForm";


const PetContainer = () => {

    const [pets, setPets] = useState ([]);

    const getPetData = () => {
        fetch("http://localhost:8080/pets")
        .then(response => response.json())
        .then(data => setPets(data));
    }

    useEffect(getPetData, []);

    const addNewPet = (newPet) => {
        fetch("http://localhost:8080/pets", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPet)
        })
        .then(getPetData)
    }



    return(
        pets.length > 0 ?

        <div>  
            <NewPetForm onPetSubmission={addNewPet}/>   
            <hr/>  
            <PetList pets={pets}/>
        
        </div>
        :
        <p>Loading....</p>
    )
}

export default PetContainer;

// Basic skeleton for every single function which we then can export and use. Business logic.