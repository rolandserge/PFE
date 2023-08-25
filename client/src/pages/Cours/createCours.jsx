import React, { useState } from "react";
import Headers from "../../components/header";
import { useSnackbar } from 'notistack';
import { Dropzone } from '@mantine/dropzone';
import { IconChevronDown } from '@tabler/icons-react';
import { Textarea, TextInput, Group, Text, rem, Input, Accordion, Button } from '@mantine/core';


export default function CreateCours() {

    const [value, setValue] = useState('');
    const [video, setVideo] = useState('');
    const [currentTab, setCurrentTab] = useState(0);
    const { enqueueSnackbar } = useSnackbar()

    const handleNext = () => {
        setCurrentTab((prevTab) => prevTab + 1);
      };
    
      const handlePrevious = () => {
        setCurrentTab((prevTab) => prevTab - 1);
      };
    
      const handleSubmit = () => {
        // Ici, vous pouvez implémenter la logique pour soumettre les données
        alert('Formulaire soumis avec succès !');
      };

    const renderTabContent = () => {

        switch (currentTab) {
            case 0:
              return (
                <div>
                    <div>
                            <TextInput
                                mb="1em"
                                label="Le titre du chapitre"
                                placeholder="Entrer le titre du chapitre"
                                required
                            />
                    </div>
                    <div>
                        <Textarea 
                            value={value} 
                            onChange={(event) => setValue(event.currentTarget.value)} 
                            label="La description du chapitre"
                            placeholder="Entrer la description du chapitre"
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
                                enqueueSnackbar('Image choisie avec success', {variant: "success"})
                            }
                        } 
                                    onReject={(files) => enqueueSnackbar('L\'image choisie sont invalides', {variant: "error"})}
                                    m="1em 0"
                                    accept={['video/mp4']}
                                >
                                    <Group position="center" spacing="xl" style={{ minHeight: rem(100), pointerEvents: 'none' }}>
                                    <div>
                                            <Text size="xl" inline>
                                                Choisissez l'image de coverture du cours
                                            </Text>
                                            <Text size="sm" color="dimmed" inline mt={7}>
                                                Joignez un fichier que vous souhaitez
                                            </Text>
                                    </div>
                                    </Group>
                            </Dropzone>
                        </div>
                </div>
              );
            case 1:
              return (
                <div>
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
                </div>
              );
         
            default:
              return null;
          }
    }

    return (
        <div className="create-cours-page">
            <Headers title="Cours" />
            <div className="container-formulaire">
                <div className="title">
                    <p>Créer un cours</p>
                    <div className="trait">

                    </div>
                </div>
                <div className="ajouter-cours">
                    <div className="container-chapitre">
                        <div className="titre-chapitre">
                            <p>Chapitre du cours</p>
                        </div>

                            <div className="cards-chapitre">
                                <div className="chapitre">
                                    <div className="numero">
                                        <p>1</p>
                                    </div>
                                    <div className="titre">
                                        <p>Creation de projet node.js</p>
                                    </div>
                                </div>
                                <div className="chapitre">
                                    <div className="numero">
                                        <p>2</p>
                                    </div>
                                    <div className="titre">
                                        <p>Creation de projet node.js</p>
                                    </div>
                                </div>
                                <div className="chapitre">
                                    <div className="numero">
                                        <p>3</p>
                                    </div>
                                    <div className="titre">
                                        <p>Creation de projet node.js</p>
                                    </div>
                                </div>
                                <div className="chapitre">
                                    <div className="numero">
                                        <p>4</p>
                                    </div>
                                    <div className="titre">
                                        <p>Creation de projet node.js</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <form action="post">
                        {
                            renderTabContent()
                        }
                        <div className="action-button">
                            {
                                currentTab !== 0 && (
                                    <>
                                        <Button 
                                            type="button"
                                            h="6.5vh"
                                            onClick={handlePrevious}
                                            color="gray"
                                        >
                                            Précédant
                                        </Button>
                                        <Button 
                                            type="submit"
                                            onClick={handleSubmit}
                                            color="orange"
                                            h="6.5vh"
                                        >
                                        Ajouter le cours
                                        </Button>
                                    </>
                                )
                            }
                            {
                                currentTab !== 1 && (
                                    <Group position="right" style={{
                                        width: "100%",
                                        }}
                                    >
                                        <Button 
                                            bg="black"
                                            h="6.5vh"
                                            color="gray"
                                            onClick={handleNext}
                                            right
                                        >
                                            Suivant
                                        </Button> 
                                    </Group>
                                )
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}