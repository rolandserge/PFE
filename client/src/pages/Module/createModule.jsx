import React, { useState } from "react";
import axios from "axios";
import { useSnackbar } from 'notistack';
import { Dropzone } from '@mantine/dropzone';
import { IconChevronDown } from '@tabler/icons-react';
import { TextInput, Group, Text, rem, Input, Button} from '@mantine/core';



export default function CreateModule() {

    const [image, setImage] = useState('')
    const [data, setData] = useState("")
    const [departement, setDepartement] = useState('')
    const { enqueueSnackbar } = useSnackbar()

    const handleChange = (event) => {
        setData(event.target.value);
    };

    const AddModule = async(e) => {

        e.preventDefault();

        if(image != '') {

            const formData = new FormData()
            formData.append('nom', data)
            formData.append('departement', departement)
            formData.append('image', image[0])
            
            try {

                const reponse = await axios.post('/api/add-module', formData, { headers: {
                    'Content-Type': 'multipart/form-data'
                }})
                console.log(reponse)

                alert('success')

            } catch (error) {

                console.log(error)
            }

        } else {
            enqueueSnackbar('Veillez choisir une image', {variant: "error"})
        }
    }

    return (
        <div className="creer-module-page">
            <div className="container-formulaire">
                <div className="title">
                    <p>Créer un module</p>
                    <div className="trait">

                    </div>
                </div>
                <form action="" method="post" onSubmit={AddModule}>
                    <div>
                        <TextInput
                            label="Le titre du module"
                            mb="1em"
                            value={data}
                            name="titre"
                            onChange={handleChange}
                            placeholder="Entrer le titre du module"
                            required
                        />
                    </div>
                    <div>
                        <Input component="select" name="departement" value={departement} onChange={e => setDepartement(e.target.value)} required rightSection={<IconChevronDown size={14} stroke={1.5} />}>
                            <option value="">Veillez choisir le département du module</option>
                            <option value="10">Departement Informatique</option>
                        </Input>
                    </div>
                    <div>
                        <Dropzone
                            onDrop={(files) => {
                                    setImage(files)
                                    enqueueSnackbar('Image choisie avec success', {variant: "success"})
                                    }
                                } 
                                onReject={(files) => enqueueSnackbar('Image choisie est invalide', {variant: "error"})}
                                //    maxSize={3 * 1024 ** 2}
                                m="1em 0"
                                accept={['image/png', 'image/jpeg', 'image/webp']}
                            >
                                <Group position="center" spacing="xl" style={{ minHeight: rem(200), pointerEvents: 'none' }}>
                                   <div>
                                        <Text size="xl" inline>
                                             Choisissez l'image du module
                                        </Text>
                                        <Text size="sm" color="dimmed" inline mt={7}>
                                             Joignez un fichier que vous souhaitez
                                        </Text>
                                   </div>
                                </Group>
                        </Dropzone>
                    </div>
                    <div>
                        <Button type="submit" h="6.5vh" fz="1em" color="orange" fullWidth>
                            Ajouter le module
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
} 