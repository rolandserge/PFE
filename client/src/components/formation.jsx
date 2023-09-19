import { createStyles, RingProgress, SimpleGrid, Group, Center, Card, rem, Button, Text } from '@mantine/core';
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
     action : {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
     }
   
}));

export default function Formation({cours}) {

     const { classes } = useStyles();

     const navigate = useNavigate()
     

     return (
          <SimpleGrid cols={3} m='1em' breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          {
               cours.map((cour, index) => (


                    <Card className={classes.card} key={index}>
                         <div className="coverCardFormation">
                              <img src={cour.thumbnail.url} alt={"Image d'illustration de la formation"} className="coverFormation" />
                         </div>
                         <div className='titre-formation'>
                              <p>{cour.name}</p>
                         </div>
                         <Text className={classes.title}>
                              {
                                   cour.description
                              }
                         </Text>
                         <div className={classes.action}>
                              <Button
                                   onClick={() => navigate(`/formation/${cour._id}`)}
                                   w="70%"
                                   className='bg-black'
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
                              <Group>
                                   <RingProgress
                                   size={65}
                                   roundCaps
                                   thickness={4}
                                   sections={[{ value: 50, color: "orange" }]}
                                   label={
                                        <Center>
                                             50%
                                        </Center>
                                   }
                              />
                              </Group>
                         </div>
                    </Card>
               ))
          }
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