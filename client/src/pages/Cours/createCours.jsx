import React, { useRef, useState } from "react";
import { useSnackbar } from 'notistack';
import { Dropzone } from '@mantine/dropzone';
import { IconChevronDown } from '@tabler/icons-react';
import { Textarea, TextInput, Group, Text, rem, Input, Accordion, Button } from '@mantine/core';


export default function CreateCours() {

    const [courseData, setCourseData] = useState({
        title: '',
        description: '',
        module: '',
        chapters: [
          {
            title: 'de baseline',
            videos: [
              { title: 'video titre', description: "descri", url: 'htpp' },
            ],
          },
        ],
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData({ ...courseData, [name]: value });
      };
    
      const handleChapterChange = (e, chapterIndex) => {
        const { name, value } = e.target;
        const updatedChapters = [...courseData.chapters];
        updatedChapters[chapterIndex] = {
          ...updatedChapters[chapterIndex],
          [name]: value,
        };
        setCourseData({ ...courseData, chapters: updatedChapters });
      };
    
      const handleVideoChange = (e, chapterIndex, videoIndex) => {
        const { name, value } = e.target;
        const updatedChapters = [...courseData.chapters];
        updatedChapters[chapterIndex].videos[videoIndex] = {
          ...updatedChapters[chapterIndex].videos[videoIndex],
          [name]: value,
        };
        setCourseData({ ...courseData, chapters: updatedChapters });
      };
    
      const handleAddChapter = () => {
        const newChapter = {
          title: '',
          videos: [
            { title: '', description: '', url: '' },
          ],
        };
        setCourseData({
          ...courseData,
          chapters: [...courseData.chapters, newChapter],
        });
      };
    
      const handleAddVideo = (chapterIndex) => {
        const newVideo = { title: '', url: '' };
        const updatedChapters = [...courseData.chapters];
        updatedChapters[chapterIndex].videos.push(newVideo);
        setCourseData({ ...courseData, chapters: updatedChapters });
      };

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
        console.log(courseData);
        // Réinitialiser le formulaire ou rediriger l'utilisateur
        setCourseData({
          title: '',
          description: '',
          chapters: [
            {
              title: '',
              videos: [
                { title: '', description: '', url: '' },
              ],
            },
          ],
        });
        // console.log(data.module)
        // const formData = new FormData()
        // formData.append('chapitre', data.chapitre)
        // formData.append('descriptionc', data.descripchapitre)
        // formData.append("cours", data.cours)
        // formData.append('image', image[0])
        // formData.append('video', video[0])
        // formData.append("module", data.module)
        // formData.append('descriptioncs', data.descripcours)
        alert('Formulaire soumis avec succès !');
    };

    const validateStep = () => {
        switch (currentTab) {
          case 0:
            // return courseData.title && courseData.description && image != "";
          case 1:
            // return data.cours && data.descripcours && video != "" && data.module;
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
                            value={courseData.title}
                            name="title"
                            onChange={handleChange} 
                            label="Le titre du cours"
                            placeholder="Entrer le titre du cours"
                            required
                        />
                    </div>
                    <div>
                        <Textarea 
                            value={courseData.description}
                            onChange={handleChange} 
                            label="La description du cours"
                            placeholder="Entrer la description du cours"
                            autosize
                            name="description"
                            m="1em 0"
                            required
                            minRows={2}
                            maxRows={4}
                        />
                    </div>
                    <div>
                        <Input component="select" name="departement" value={""} onChange={(e) => setCourseData} required rightSection={<IconChevronDown size={14} stroke={1.5} />}>
                            <option value="">Veillez choisir le module du cours</option>
                            <option value="10">Departement Informatique</option>
                        </Input>
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
                        <h3>Chapitres</h3>
                        {courseData.chapters.map((chapter, chapterIndex) => (
                            <div key={chapterIndex}>
                                <div>
                                    <TextInput
                                        mb="1em"
                                        value={chapter.title} 
                                        onChange={(e) => handleChapterChange(e, chapterIndex)}
                                        label="Le nom du chapitre"
                                        name={`chapters[${chapterIndex}].title`}                                    placeholder="Entrer le titre du cours"
                                        required
                                        // placeholder="{`chapters[${chapterIndex}].title`}"
                                    />
                                </div>
        
                    {/* Ajouter des vidéos au chapitre */}
                    <div>
                        <h4>Vidéos</h4>
                        {chapter.videos.map((video, videoIndex) => (
                        <div key={videoIndex}>
                            <label>
                            Titre de la vidéo:
                            <input
                                type="text"
                                name={`chapters[${chapterIndex}].videos[${videoIndex}].title`}
                                value={video.title}
                                onChange={(e) => handleVideoChange(e, chapterIndex, videoIndex)}
                                required
                            />
                            </label>
                            <div>
                            <div>
                                <TextInput
                                    mb="1em"
                                    type="text"
                                    name={`chapters[${chapterIndex}].videos[${videoIndex}].title`}
                                    value={video.title}
                                    onChange={(e) => handleVideoChange(e, chapterIndex, videoIndex)}
                                    label="Le nom du chapitre"
                                    placeholder="Entrer le titre de la video"
                                    required
                                />
                            </div>
                            <div>
                                <Textarea 
                                    value={video.description}
                                    label="La description de la video"
                                    onChange={(e) => handleVideoChange(e, chapterIndex, videoIndex)}
                                    placeholder="Entrer la description de la video"
                                    autosize
                                    name={`chapters[${chapterIndex}].videos[${videoIndex}].description`}
                                    m="1em 0"
                                    required
                                    minRows={4}
                                    maxRows={4}
                                />
                            </div>
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
                        </div>
                        ))}
                        <button type="button" onClick={() => handleAddVideo(chapterIndex)}>
                        Ajouter une vidéo
                        </button>
                    </div>
                    </div>
                ))}
                <button type="button" onClick={handleAddChapter}>
                    Ajouter un chapitre
                </button>
                {/* </div> */}
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