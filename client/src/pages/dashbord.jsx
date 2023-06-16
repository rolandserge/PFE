import { createStyles, Group, Paper, SimpleGrid, Text, rem } from '@mantine/core';
import { FaUsers } from "react-icons/fa"
import "../styles/pages/dashbord.css"
import { BiArchive } from "react-icons/bi"
import Formation from "../components/formation";
import Headers from "../components/header"
import Calendrier from '../components/calendrier';


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
          // border: "1px solid",
          margin: "0 0.8em 0.8em 0.8em",
          fontSize: "1.5em",
          fontWeight: 700,
     },
     calendrierContainer: {
          // height: "50vh",
          // border: "1px solid"
     }
}));

export default function Dashboad() {

     const { classes } = useStyles();

     return (
          <div className='dashbord'>
               <Headers title="Tableau de bord" />
               <div className="container-dashbord">
                    <section>
                         <div className="statistiques">
                              <div className={classes.root}>
                                   <SimpleGrid
                                        cols={2}
                                        breakpoints={[
                                        { maxWidth: 'md', cols: 2 },
                                        { maxWidth: 'xs', cols: 1 },
                                   ]}
                                   >
                                        <Paper withBorder p="md" radius="md">
                                             <Group position="apart">
                                                  <Text size="xs" color="dimmed" className={classes.title}>
                                                       Personnels
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
                                                       Formations
                                                  </Text>
                                                  <BiArchive className={classes.icon} size="1.4rem" stroke={1.5} />
                                             </Group>
                                             <Group align="flex-end" spacing="xs" mt={25}>
                                                  <Text className={classes.value}>20</Text>
                                             </Group>
                                             <Text fz="xs" c="dimmed" mt={7}>
                                                  Compared to previous month
                                             </Text>
                                        </Paper>
                                   </SimpleGrid>
                              </div>
                         </div>
                         <div className="formation-container">
                              <div className={classes.titreFormation}>
                                   <p>Mes formations</p>
                              </div>
                              <Formation />
                         </div>
                    </section>
                    <aside className="side-dashbord">
                         <div className={classes.calendrierContainer}>
                              <Calendrier />
                         </div>
                    </aside>
               </div>
          </div>
     )
}