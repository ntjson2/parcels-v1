import axios from 'axios';
import { useState } from 'react';

// AddMinedMinerals component, this component will be used to add mined minerals by the user
const AddMinedMinerals: React.FC = () => {

    const handleSubmit = (e: any) => {
        // Prevent the default submit and page reload
        e.preventDefault()
    
        // Handle validations with try catch block
        try{
            if(formData.mineralid === "" || formData.userid === ""){
                throw new Error("Please fill in all fields")
            }
            // Make an API request to add the mined mineral
            axios
            .get("https://apiaddmineralid-uoeckaebja-uc.a.run.app", {                
                params: { 
                    mineralid: formData.mineralid,
                    userid: formData.userid
                },
                headers: {
                    'Access-Control-Allow-Headers': '*',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': '*',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
             })
            .then(response => {
              console.log(response)
              setResponse("Mineral added successfully");              
            })
        }catch(err){
            console.log(err)
            setResponse("Failed to add mineral, please try again");  
        }       
      }

    // Set dispatch to handle form submission
    const [response, setResponse] = useState<any>(null);

    // State to store the form data
    const [formData, setFormData] = useState({       
        mineralid: "",
        userid: ""        
    });

      // Function to handle form input changes
    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

   
    return (
        <>
        <div className="m-3">
            <h2>Add User located minerals</h2> {/* Added header */}
            <h6>This API call accesses Firebase functions and adds relevant user/mineral data.</h6>
            <form onSubmit={handleSubmit} className="row">
                <div className="form-group col">
                    <label htmlFor="mineralid">Mineral ID:</label>
                    <select
                        className="form-control"
                        id="mineralid"
                        name="mineralid"
                        value={formData.mineralid || ''}
                        onChange={handleChange}
                    >
                        <option value="">Select Mineral</option>
                        {Object.entries(mps).map(([key, value]) => (
                            <option key={key} value={value.id}>{value.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group col">
                    <label htmlFor="userid">User ID:</label>
                    <select
                        className="form-control"
                        id="userid"
                        name="userid"
                        value={formData.userid || ''}
                        onChange={handleChange}
                    >
                        <option value="">Select User</option>
                        <option value="1">Joe</option>
                        <option value="2">Jill</option>
                        <option value="3">Dave</option>
                    </select>
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-primary mt-3">Add Mineral</button>
                </div>
            </form>
            <span>{response}</span>
        </div>
        </>
    );
    };

    export default AddMinedMinerals;
    
    const mps = {
        1: {
            id: 1,
            name: "Gold",
            commonName: "Gold",
            chemicalName: "Au",
            color: "yellow",
            hardness: 2.5,
            density: 19.3,
            luster: "metallic",
            streak: "yellow",
            crystalSystem: "cubic",
            cleavage: "none",
            chemicalFormula: "Au",
            transparency: "opaque",
            refractiveIndex: 1.0,
            desc: "A precious metal with a bright yellow color."
        },
        2: {
            id: 2,
            name: "Jasper",
            commonName: "Jasper",
            chemicalName: "SiO2",
            color: "red",
            hardness: 7,
            density: 2.6,
            luster: "vitreous",
            streak: "white",
            crystalSystem: "hexagonal",
            cleavage: "none",
            chemicalFormula: "SiO2",
            transparency: "transparent",
            refractiveIndex: 1.54,
            desc: "A type of quartz with a red color and glassy luster."
        },
        3: {
            id: 3,
            name: "Silver",
            commonName: "Silver",
            chemicalName: "Ag",
            color: "silver",
            hardness: 2.5,
            density: 10.5,
            luster: "metallic",
            streak: "silver",
            crystalSystem: "cubic",
            cleavage: "none",
            chemicalFormula: "Ag",
            transparency: "opaque",
            refractiveIndex: 1.0,
            desc: "A shiny, white metal often used in jewelry and coins."
        },
        4: {
            id: 4,
            name: "Garnet",
            commonName: "Garnet",
            chemicalName: "Fe3Al2Si3O12",
            color: "red",
            hardness: 6.5,
            density: 3.6,
            luster: "vitreous",
            streak: "white",
            crystalSystem: "cubic",
            cleavage: "none",
            chemicalFormula: "Fe3Al2Si3O12",
            transparency: "transparent",
            refractiveIndex: 1.72,
            desc: "A group of minerals with similar crystal structures and varying colors."
        },
        5: {
            id: 5,
            name: "Copper",
            commonName: "Copper",
            chemicalName: "Cu",
            color: "orange",
            hardness: 2.5,
            density: 8.96,
            luster: "metallic",
            streak: "orange",
            crystalSystem: "cubic",
            cleavage: "none",
            chemicalFormula: "Cu",
            transparency: "opaque",
            refractiveIndex: 1.0,
            desc: "A reddish-orange metal commonly used in electrical wiring and plumbing."
        }
    };

