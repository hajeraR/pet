import PetComponent from "./PetComponent";

const PetList = ({pets}) => {

    const Pets = pets.map(pet => {
        return(
            <PetComponent pet={pet} key={pet.id}/>
        )
    })

    
    return(
       <div className="pet_list">
           {Pets}
       </div>
    )

    
}

export default PetList;



// Break up json into separate components, can format it to fit in line with pet component. Split up json file and mapping.