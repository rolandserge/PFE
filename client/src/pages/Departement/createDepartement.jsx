import React, { useState } from "react"
import { TextInput, Textarea, Button} from '@mantine/core';
import axios from "axios";

export default function CreateDepartement() {

    const [data, setData] = useState({
        libele: "",
        description: "",
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };


    const addDepartement = async(event) => {

        event.preventDefault();
        const formaData = new FormData()
        formaData.append('libele', data.libele)
        formaData.append('description', data.description)

        try {
            const response = await axios.post('/api/add-departement', formaData)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="creer-module-page">
        <div className="container-formulaire">
            <div className="title">
                <p>Créer un departement</p>
                <div className="trait">

                </div>
            </div>
            <form onSubmit={addDepartement}>
                <div>
                    <TextInput
                        label="Le libelé du département"
                        mb="0.8em"
                        value={data.libele}
                        name="libele"
                        onChange={handleChange}
                        placeholder="Entrer le libelé du departement"
                        required
                    />
                </div>
                <div>
                    <Textarea 
                        value={data.description} 
                        onChange={handleChange} 
                        label="La description du departement"
                        placeholder="Entrer la description du departement"
                        autosize
                        name="description"
                        m="1em 0"
                        required
                        minRows={5}
                        maxRows={4}
                    />
                </div>
                <div>
                    <Button type="submit" h="6.5vh" fz="1em" color="orange" fullWidth>
                        Ajouter le departement
                    </Button>
                </div>
            </form>
        </div>
    </div>
    )
}