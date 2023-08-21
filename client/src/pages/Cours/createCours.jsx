import React, { useState } from "react";
import Headers from "../../components/header";
import { useSnackbar } from 'notistack';
import { Dropzone } from '@mantine/dropzone';
import { IconChevronDown } from '@tabler/icons-react';
import { Textarea, TextInput, Group, Text, rem, Input, Button} from '@mantine/core';


export default function CreateCours() {

    const [value, setValue] = useState('');
    const [video, setVideo] = useState('');
    const { enqueueSnackbar } = useSnackbar()

    return (
        <div className="create-cours-page">
            <Headers title="Cours" />
            <div className="container-formulaire">
                <div className="title">
                    <p>Créer un cours</p>
                    <div className="trait">

                    </div>
                </div>
                <form action="post">
                    <div>
                        <TextInput
                            mb="1em"
                            label="Le titre du cours"
                            placeholder="Entrer le titre du cours"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="">Le module du cours</label>
                        <Input component="select" required rightSection={<IconChevronDown size={14} stroke={1.5} />}>
                            <option value="1">Autentification Next.js/Laravel</option>
                            <option value="2">Laravel A a Z</option>
                            <option value="">E-commerce en Laravel</option>
                            <option value="">Base de Next.JS</option>
                        </Input>
                    </div>
                    <div>
                        <Textarea 
                            value={value} 
                            onChange={(event) => setValue(event.currentTarget.value)} 
                            label="La description du cours"
                            placeholder="Entrer la description du cours"
                            autosize
                            m="1em 0"
                            required
                            minRows={2}
                            maxRows={4}
                        />
                    </div>
                    <div>
                        <Dropzone
                            onDrop={(files) => {
                                    setVideo(files)
                                    enqueueSnackbar('Vidéo choisie avec success', {variant: "success"})
                                    }
                                } 
                                onReject={(files) => enqueueSnackbar('La video choisie sont invalides', {variant: "error"})}
                                m="1em 0"
                                accept={['video/mp4']}
                            >
                                <Group position="center" spacing="xl" style={{ minHeight: rem(100), pointerEvents: 'none' }}>
                                   <div>
                                        <Text size="xl" inline>
                                             Choisissez la video du cours
                                        </Text>
                                        <Text size="sm" color="dimmed" inline mt={7}>
                                             Joignez un fichier en format video que vous souhaitez
                                        </Text>
                                   </div>
                                </Group>
                        </Dropzone>
                    </div>
                    <div>
                        <Button type="submit" h="6.5vh" fz='1em' fullWidth color="orange">
                            Ajouter le cours
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}