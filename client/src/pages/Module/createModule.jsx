import React from "react";
import Headers from "../../components/header";
import { useState } from "react";
import { useSnackbar } from 'notistack';
import { Dropzone } from '@mantine/dropzone';
import { IconChevronDown } from '@tabler/icons-react';
import { TextInput, Group, Text, rem, Input, Button} from '@mantine/core';



export default function CreateModule() {

    const [image, setImage] = useState()
    const { enqueueSnackbar } = useSnackbar()

    return (
        <div className="creer-module-page">
            <Headers title="Module" />
            <div className="container-formulaire">
                <div className="title">
                    <p>Créer un module</p>
                    <div className="trait">

                    </div>
                </div>
                <form action="" method="post">
                    <div>
                        <TextInput
                            label="Le titre du module"
                            mb="1em"
                            placeholder="Entrer le titre du module"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="">Le département du module</label>
                        <Input component="select" required rightSection={<IconChevronDown size={14} stroke={1.5} />}>
                            <option value="1">Departement Informatique</option>
                            <option value="2">Département Infographie</option>
                            <option value="">Département Commercial</option>
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