const PetComponent = ({pet}) => {

    const pic = () => {
        
    }

    return(
        <div className="pet">
            <h4>Name:</h4>
            <p>{pet.name}</p>
            <h4>Age:</h4>
            <p>{pet.age}</p>
            <h4>Breed:</h4>
            <p>{pet.breed}</p>
            <h4>Type:</h4>
            <p>{pet.type}</p>
            

        </div>
        
    )
}

export default PetComponent;


// one element or one input in the json is a component