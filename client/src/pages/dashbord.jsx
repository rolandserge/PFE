import { createStyles, RingProgress, Center, Group, Paper, SimpleGrid, Text, rem } from '@mantine/core';
import { FaUsers } from "react-icons/fa"
import { BiArchive } from "react-icons/bi"
import Cover from "/assets/connexion.jpg"
import Formation from "../components/formation";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Calendrier from '../components/calendrier';


const useStyles = createStyles((theme) => ({
     root: {
       padding: `calc(${theme.spacing.xl} * 1.5)`,
     },
     value: {
       fontSize: rem(24),
       fontWeight: 700,
       lineHeight: 1,
     },
   
     diff: {
       lineHeight: 1,
       display: 'flex',
       alignItems: 'center',
     },
   
     icon: {
       color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : "black",
     },
   
     title: {
       fontWeight: 700,
       color: "black",
       fontSize: "1.2em",
       textTransform: 'uppercase',
     },
     titreFormation: {
          margin: "0 0.8em 0.8em 0.8em",
          fontSize: "1.5em",
          fontWeight: 700,
     },
}));

export default function Dashboad() {

     const { classes } = useStyles();
     const { userInfo } = useSelector((state) => state.auth)

     return (
          <div className='dashbord'>
               <div className="container-dashbord">
                    <section>
                         <div className="statistiques">
                              {
                                   userInfo.role === "Formateur" ?

                                        <div className={classes.root}>
                                             <SimpleGrid
                                                  cols={3}
                                                  breakpoints={[
                                                  { maxWidth: 'md', cols: 2 },
                                                  { maxWidth: 'xs', cols: 1 },
                                             ]}
                                             >
                                                  <Paper withBorder p="md" radius="md">
                                                       <Group position="apart">
                                                            <Text size="xs" color="dimmed" className={classes.title}>
                                                                 Cours
                                                            </Text>
                                                            <BiArchive className={classes.icon} size="1.4rem" stroke={1.5} />
                                                       </Group>
                                                       <Group align="flex-end" spacing="xs" mt={25}>
                                                            <Text className={classes.value}>20</Text>
                                                       </Group>
                                                       <Text fz="xs" c="dimmed" mt={7}>
                                                            Compared to previous
                                                       </Text>
                                                  </Paper>
                                                  <Paper withBorder p="md" radius="md">
                                                       <Group position="apart">
                                                            <Text size="xs" color="dimmed" className={classes.title}>
                                                                 Formateurs
                                                            </Text>
                                                            <FaUsers className={classes.icon} size="1.4rem" stroke={1.5} />
                                                       </Group>
                                                       <Group align="flex-end" spacing="xs" mt={25}>
                                                            <Text className={classes.value}>5</Text>
                                                       </Group>
                                                       <Text fz="xs" c="dimmed" mt={7}>
                                                            Compared to previous month
                                                       </Text>
                                                  </Paper>
                                                  <Paper withBorder p="md" radius="md">
                                                       <Group position="apart">
                                                            <Text size="xs" color="dimmed" className={classes.title}>
                                                                 Apprenants
                                                            </Text>
                                                            <FaUsers className={classes.icon} size="1.4rem" stroke={1.5} />
                                                       </Group>
                                                       <Group align="flex-end" spacing="xs" mt={25}>
                                                            <Text className={classes.value}>15</Text>
                                                       </Group>
                                                       <Text fz="xs" c="dimmed" mt={7}>
                                                            Compared to previous month
                                                       </Text>
                                                  </Paper>
                                             </SimpleGrid>
                                        </div>
                                   : 
                                        <div className="apprenant-dashbord">
                                             <div className='image-cover'>
                                                  <img src={Cover} alt="" />
                                             </div>
                                             <div className='cours-element'>
                                                  <div className='cours'>
                                                       <p>Formation Node.js</p>
                                                  </div>
                                                  <div className='info-cours'>
                                                       <h2>Lecon 1 : Creation du projet</h2>
                                                       <div>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                            perferendis ad, earum cupiditate ipsa quam ut! Eos, magnam
                                                            Lorem ipsum dolor sit amet consectetur adipisicing eli
                                                       </div>
                                                  </div>
                                                  <div className='navigation'>
                                                       <div>
                                                            <Link to="#" className='retour-cours'>Retour au cours</Link>
                                                       </div>
                                                       <div className='progession'>
                                                            <div>
                                                                 Progression du cours 
                                                            </div>
                                                            <span>
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
                                                            </span>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                              }
                         </div>
                         <div className="formation-container">
                              <div className={classes.titreFormation}>
                                   <p>Mes cours</p>
                              </div>
                              <Formation />
                         </div>
                    </section>
                    {/* <aside className="side-dashbord">
                         <div className={classes.calendrierContainer}>
                              <Calendrier />
                         </div>
                    </aside> */}
               </div>
          </div>
     )
}