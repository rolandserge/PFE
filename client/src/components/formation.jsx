import { createStyles, SimpleGrid, Card, rem, Button, Text } from '@mantine/core';
import login from "/assets/login.jpg"
import image1 from "/assets/connexion.jpg"
import { useNavigate } from "react-router-dom"


const useStyles = createStyles((theme) => ({

     card: {
       backgroundColor: "white",    
     },
     coverCard : {
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

export default function Formation() {

     const { classes } = useStyles();

     const navigate = useNavigate()
     

     return (
          <SimpleGrid cols={3} m='1em' breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
               <Card className={classes.card}>
                    <div className="coverCardFormation">
                         <img src={login} alt={"Image d'illustration de la formation"} className="coverFormation" />
                    </div>
                    <div className='titre-formation'>
                         <p>Prise en main de node js</p>
                    </div>
                    <Text className={classes.title}>
                         Node JS est une technologie assez facile à prendre en main, notamment grâce aux...
                    </Text>
                    <div>
                         <Button
                              onClick={() => navigate('/formation/detail')}
                              fullWidth
                              styles={(theme) => ({
                                   root: {
                                   backgroundColor: "gray",
                                        '&:not([data-disabled])': theme.fn.hover({
                                             backgroundColor: '#000',
                                   }),
                                   },
                                   })}
                         >
                              Regarder le cours
                         </Button>
                    </div>
               </Card>
               <Card className={classes.card}>
                    <div className="coverCardFormation">
                         <img src={login} alt={"Image d'illustration de la formation"} className="coverFormation" />
                    </div>
                    <div className='titre-formation'>
                         <p>Prise en main de Next.js 13</p>
                    </div>
                    <Text className={classes.title}>
                         Next.js étant qualifié de framework React 
                         pour la production, il est devenu évident...
                    </Text>
                    <div>
                         <Button
                              onClick={() => navigate('/formation/detail')}
                              fullWidth
                              styles={(theme) => ({
                                   root: {
                                   backgroundColor: "gray",
                                        '&:not([data-disabled])': theme.fn.hover({
                                             backgroundColor: '#000',
                                   }),
                                   },
                              })}
                         >
                              Regarder le cours
                         </Button>
                    </div>
               </Card>
               <Card className={classes.card}>
                    <div className="coverCardFormation">
                         <img src={login} alt={"Image d'illustration de la formation"} className="coverFormation" />
                    </div>
                    <div className='titre-formation'>
                         <p>Prise en main de Laravel 9</p>
                    </div>
                    <Text className={classes.title}>
                         Laravel est un puissant Cadre(Framework) PHP MVC, 
                         conçu pour les développeurs...
                    </Text>
                    <div>
                         <Button
                              onClick={() => navigate('/formation/detail')}
                              fullWidth
                              styles={(theme) => ({
                                   root: {
                                   backgroundColor: "gray",
                                        '&:not([data-disabled])': theme.fn.hover({
                                             backgroundColor: '#000',
                                   }),
                              },
                              })}
                         >
                              Regarder le cours
                         </Button>
                    </div>
               </Card>
               {/* <Card className={classes.card} >
                    <div className="coverCardFormation">
                         <img src={image1} alt={"Image d'illustration de la formation"} className="coverFormation" />
                    </div>
                    <div className='titre-formation'>
                         <p>Authentification Next.JS/Laravel</p>
                    </div>
                    <Text className={classes.title}>
                         Comment securisé un site web de A a Z Lorem,
                         Vel atque veritatis in qui totam
                    </Text>
                    <div>
                         <Button
                              onClick={() => navigate('/formation/detail')}
                              fullWidth
                              styles={(theme) => ({
                                   root: {
                                   backgroundColor: "gray",
                                        '&:not([data-disabled])': theme.fn.hover({
                                             backgroundColor: '#000',
                                   }),
                                   },
                              })}
                         >
                              Regader le cours
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
                    <Text className={classes.title}>
                         Comment securisé un site web de A a Z Lorem,
                         Vel atque veritatis in qui totam
                    </Text>
                    <div>
                         <Button
                              onClick={() => navigate('/formation/detail')}
                              fullWidth
                              styles={(theme) => ({
                                   root: {
                                   backgroundColor: "gray",
                                        '&:not([data-disabled])': theme.fn.hover({
                                             backgroundColor: '#000',
                                   }),
                                   },
                              })}
                         >
                              Regarder le cours
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
                    <Text className={classes.title}>
                         Comment securisé un site web de A a Z Lorem,
                         Vel atque veritatis in qui totam
                    </Text>
                    <div>
                         <Button
                              onClick={() => navigate('/formation/detail')}
                              fullWidth
                              styles={(theme) => ({
                                   root: {
                                   backgroundColor: "gray",
                                        '&:not([data-disabled])': theme.fn.hover({
                                             backgroundColor: '#000',
                                   }),
                                   },
                              })}
                         >
                              Regarder le cours
                         </Button>
                    </div>
               </Card> */}
          </SimpleGrid>
     )
}