import React from "react";
import login from "/assets/login.jpg"
import image1 from "/assets/connexion.jpg"
import { createStyles, SimpleGrid, Card, rem, Button, Text } from '@mantine/core';
import { useNavigate } from "react-router-dom"
import { BiChevronRight } from "react-icons/bi"

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
                        mt="0.6em"
                        h="6.3vh"
                        styles={(theme) => ({
                            root: {
                                backgroundColor: "gray",
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
               <Card className={classes.card}>
                    <div className="coverCardFormation">
                         <img src={login} alt={"Image d'illustration de la formation"} className="coverFormation" />
                    </div>
                    <div className='titre-formation'>
                         <p>Authentification Next.JS/Laravel</p>
                    </div>
                    <div>
                         <Button
                              onClick={() => navigate('/module/cours')}
                              rightIcon={<BiChevronRight size={rem(28)} />}
                              mt="0.7em"
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
                              Voir la playlist
                         </Button>
                    </div>
               </Card>
               <Card className={classes.card}>
                    <div className="coverCardFormation">
                         <img src={image1} alt={"Image d'illustration de la formation"} className="coverFormation" />
                    </div>
                    <div className='titre-formation'>
                         <p>Authentification Next.JS/Laravel</p>
                    </div>
                    <div>
                         <Button
                              onClick={() => navigate('/module/cours')}
                              rightIcon={<BiChevronRight size={rem(28)} />}
                              mt="0.7em"
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
                              Voir la playlist
                         </Button>
                    </div>
               </Card>
               <Card className={classes.card}>
                    <div className="coverCardFormation">
                         <img src={login} alt={"Image d'illustration de la formation"} className="coverFormation" />
                    </div>
                    <div className='titre-formation'>
                         <p>Authentification Next.JS/Laravel</p>
                    </div>
                    <div>
                         <Button
                              onClick={() => navigate('/module/cours')}
                              rightIcon={<BiChevronRight size={rem(28)} />}
                              mt="0.7em"
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
                              Voir la playlist
                         </Button>
                    </div>
               </Card>
               <Card className={classes.card}>
                    <div className="coverCardFormation">
                         <img src={login} alt={"Image d'illustration de la formation"} className="coverFormation" />
                    </div>
                    <div className='titre-formation'>
                         <p>Authentification Next.JS/Laravel</p>
                    </div>
                    <div>
                         <Button
                              onClick={() => navigate('/module/cours')}
                              rightIcon={<BiChevronRight size={rem(28)} />}
                              mt="0.7em"
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
                              Voir la playlist
                         </Button>
                    </div>
               </Card>
               <Card className={classes.card}>
                    <div className="coverCardFormation">
                         <img src={image1} alt={"Image d'illustration de la formation"} className="coverFormation" />
                    </div>
                    <div className='titre-formation'>
                         <p>Authentification Next.JS/Laravel</p>
                    </div>
                    <div>
                         <Button
                              onClick={() => navigate('/module/cours')}
                              rightIcon={<BiChevronRight size={rem(28)} />}
                              mt="0.7em"
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
                              Voir la playlist
                         </Button>
                    </div>
               </Card>
               <Card className={classes.card}>
                    <div className="coverCardFormation">
                         <img src={login} alt={"Image d'illustration de la formation"} className="coverFormation" />
                    </div>
                    <div className='titre-formation'>
                         <p>Authentification Next.JS/Laravel</p>
                    </div>
                    <div>
                         <Button
                              onClick={() => navigate('/module/cours')}
                              rightIcon={<BiChevronRight size={rem(28)} />}
                              mt="0.7em"
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
                              Voir la playlist
                         </Button>
                    </div>
               </Card>
          </SimpleGrid>
        </div>
    )
}