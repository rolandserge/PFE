import React, { useEffect, useState } from "react";
import login from "/assets/login.jpg"
import image1 from "/assets/connexion.jpg"
import { createStyles, SimpleGrid, Card, rem, Button, Text } from '@mantine/core';
import { useNavigate } from "react-router-dom"
import { BiChevronRight } from "react-icons/bi"
import axios from "axios";
import { useGetAllModulesQuery } from "../../slices/moduleApiSlice";

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: "white",    
      },
      coverCard : {
           border: "1px solid black",
           height: "30vh",
           overflow: "hidden",
      },
      cover : {
           height:"10vh",
           width: "100%",
      },
      title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        margin: "0.1em 0 1em 0"
      },
}));


export default function Module() {

    const { classes } = useStyles();
    const navigate = useNavigate()

    const [modules, setModules] = useState([])

    const { data } = useGetAllModulesQuery()

    useEffect(() => {

          if (data) {
            setModules(data.data);
          }
    }, [data])

    const deletModule = async(id) => {

          try {
               const { data } = await axios.delete(`/api/delete-module/${id}`)
               console.log(data.message)
               alert("successfully")
          } catch (error) {
               console.log(error)
          }
    }

    return (
        <div className="playlist-page">
            <div className="playlist-head">
                <div className="titre-playlist">
                    <h2>Liste des modules</h2>
                </div>
                <div className="btn-create-playlist">
                    <p>Créer un module</p>
                    <Button
                        onClick={() => navigate('/creer-module')}
                        fullWidth
                        className="bg-black"
                        mt="0.6em"
                        h="6.3vh"
                        styles={(theme) => ({
                            root: {
                                backgroundColor: "#000",
                                '&:not([data-disabled])': theme.fn.hover({
                                    backgroundColor: '#000',
                                }),
                            }}
                        )}
                    >
                        Ajouter un module
                    </Button>
                </div>
            </div>
            <SimpleGrid cols={3} m='1em' breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            {
               modules.map((module, index) => (
                    <Card className={classes.card} key={index}>
                         <div className="coverCardFormation">
                              <img src={`http://localhost:5000/images/${module.image}`} alt={"Image d'illustration de la formation"} className="coverFormation" />
                         </div>
                         <div className='titre-formation'>
                              <p>{module.nom}</p>
                         </div>
                         <div>
                         <Button
                                   onClick={() => deletModule(module._id)}
                                   rightIcon={<BiChevronRight size={rem(28)} />}
                                   mt="0.7em"
                                   fullWidth
                                   styles={(theme) => ({
                                        root: {
                                        backgroundColor: "green",
                                             '&:not([data-disabled])': theme.fn.hover({
                                                  backgroundColor: '#008000',
                                        }),
                                        },
                                        rightIcon: {
                                        marginLeft: "0.1em",
                                             },
                                   })}
                              >
                                   Supprimer le module
                              </Button>
                         </div>
                         <div>
                              <Button
                                   onClick={() => navigate('/module/cours')}
                                   rightIcon={<BiChevronRight size={rem(28)} />}
                                   mt="0.7em"
                                   className="bg-[#ff8000]"
                                   fullWidth
                                   styles={(theme) => ({
                                        root: {
                                        backgroundColor: "orange",
                                             '&:not([data-disabled])': theme.fn.hover({
                                                  backgroundColor: '#ff8000',
                                        }),
                                        },
                                        rightIcon: {
                                        marginLeft: "0.1em",
                                             },
                                   })}
                              >
                                   Voir les cours
                              </Button>
                         </div>
                    </Card>
               ))
            }
          </SimpleGrid>
        </div>
    )
}