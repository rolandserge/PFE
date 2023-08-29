import React, { useRef, useState } from "react";
import { useSnackbar } from 'notistack';
import { Dropzone } from '@mantine/dropzone';
import { IconChevronDown } from '@tabler/icons-react';
import { Textarea, TextInput, Group, Text, rem, Input, Accordion, Button } from '@mantine/core';


export default function CreateCours() {

    const [data, setData] = useState({
        chapitre: '',
        descripchapitre: '',
        cours: '',
        module: '',
        descripcours: ''
      });

    const [image, setImage] = useState('');
    const [video, setVideo] = useState('');
    const [currentTab, setCurrentTab] = useState(0);
    const { enqueueSnackbar } = useSnackbar()

    const handleNext = () => {
        if (validateStep()) {
            setCurrentTab((prevTab) => prevTab + 1);

          } else {
            alert('Please fill in all required fields before proceeding.');
          }
    };
    
    const handlePrevious = () => {
        setCurrentTab((prevTab) => prevTab - 1);
    };
    
    const handleSubmit = (e) => {
        // Ici, vous pouvez implémenter la logique pour soumettre les données
        e.preventDefault()
        // console.log(data.module)
        const formData = new FormData()
        formData.append('chapitre', data.chapitre)
        formData.append('descriptionc', data.descripchapitre)
        formData.append("cours", data.cours)
        formData.append('image', image[0])
        formData.append('video', video[0])
        formData.append("module", data.module)
        formData.append('descriptioncs', data.descripcours)
        alert('Formulaire soumis avec succès !');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const validateStep = () => {
        switch (currentTab) {
          case 0:
            return data.chapitre && data.descripchapitre && image != "";
          case 1:
            return data.cours && data.descripcours && video != "" && data.module;
          default:
            return true;
        }
    };

    const renderTabContent = () => {

        switch (currentTab) {
            case 0:
              return (
                <div>
                    <div>
                        <TextInput
                            mb="1em"
                            value={data.chapitre}
                            name="chapitre"
                            onChange={handleChange} 
                            label="Le titre du chapitre"
                            placeholder="Entrer le titre du chapitre"
                            required
                        />
                    </div>
                    <div>
                        <Textarea 
                            value={data.descripchapitre} 
                            onChange={handleChange} 
                            label="La description du chapitre"
                            placeholder="Entrer la description du chapitre"
                            autosize
                            name="descripchapitre"
                            m="1em 0"
                            required
                            minRows={2}
                            maxRows={4}
                        />
                    </div>
                    <div>
                        <Dropzone
                            onDrop={(files) => {
                                setImage(files)
                                enqueueSnackbar('Image choisie avec success', {variant: "success"})
                            }} 
                            m="1em 0"
                            onReject={(files) => enqueueSnackbar('L\'image choisie sont invalides', {variant: "error"})}
                            accept={['image/png', 'image/jpeg']}
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
                            value={data.cours} 
                            onChange={handleChange} 
                            label="Le titre du cours"
                            name="cours"
                            placeholder="Entrer le titre du cours"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="">Le module du cours</label>
                        <Input component="select" value={data.module} name="module" onChange={handleChange} required rightSection={<IconChevronDown size={14} stroke={1.5} />}>
                            <option value="">Choisir le module du cours</option>
                            <option value="1">Autentification Next.js/Laravel</option>
                            <option value="2">Laravel A a Z</option>
                            <option value="D">E-commerce en Laravel</option>
                            <option value="DS">Base de Next.JS</option>
                        </Input>
                    </div>
                    <div>
                        <Textarea 
                            value={data.descripcours} 
                            onChange={handleChange} 
                            label="La description du cours"
                            placeholder="Entrer la description du cours"
                            autosize
                            name="descripcours"
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
                                m="1em 0"
                                onReject={(files) => enqueueSnackbar('La video choisie sont invalides', {variant: "error"})}
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
                    <form onSubmit={handleSubmit}>
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
                                            Précédent
                                        </Button>
                                        <Button 
                                            type="submit"
                                            // onClick={handleSubmit}
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