import { useNavigate } from "react-router-dom"
import { BiChevronRight } from "react-icons/bi"
import { BsCalendar3 } from "react-icons/bs"
import { HiArrowSmRight } from "react-icons/hi"
import { createStyles, Button, Group, Paper, SimpleGrid, Text, rem } from '@mantine/core';


const useStyles = createStyles((theme) => ({
     root: {
       padding: "0.5em 0",
     },
   
     value: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
     },
   
     diff: {
       lineHeight: 1,
       display: 'flex',
       alignItems: 'center',
     },
   
     icon: {
       color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
     },
   
     title: {
       fontWeight: 700,
     },
     group: {
          display: "flex",
          alignItems: "center",
     },
     continuer: {
          float: 'right',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.1em",
          background: "orange",
          color: "white",
          fontSize: "1.5em",
          borderRadius: "50px",
          marginTop: "1em",
          cursor: "pointer",
     }
}));


export default function CreerFormation() {

     const { classes } = useStyles();
     const navigate = useNavigate()

     return (
          <div>
               <div className="container-creer-formation">
                    <div className="banner-container">
                         <div className="titre">
                              <h1>Créer un cours</h1>
                         </div>
                         <div className="description">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                              Ad vel beatae, expedita aliquid necessitatibus similique 
                              voluptatum, nesciunt numquam asperiores explicabo cum iste! 
                              Nostrum pariatur voluptates quibusdam natus. Eos, nobis ratione.
                         </div>
                         <div className="add-formation">
                              <Button
                                   onClick={() => navigate("/creer-formation/page")}
                                   rightIcon={<BiChevronRight size={rem(28)} />}
                                   styles={(theme) => ({
                                        root: {
                                        backgroundColor: "black",
                                        border: 0,
                                        height: rem(50),
                                        paddingLeft: rem(10),
                                        paddingRight: rem(10),
                                        '&:not([data-disabled])': theme.fn.hover({
                                             backgroundColor: theme.fn.darken('#000', 0.5),
                                        }),
                                        },
                                        rightIcon: {
                                        marginLeft: "0.1em",
                                        },
                                   })}
                                   >
                                 Créer un cours
                              </Button>
                         </div>
                    </div>
                    <div className="creer-content">
                         <div className="indication-titre">
                              <span>Continuer à créer</span>
                         </div>
                         <div className="card-content-formateur">
                              <div className={classes.root}>
                                   <SimpleGrid
                                        cols={4}
                                        breakpoints={[
                                             { maxWidth: 'md', cols: 2 },
                                             { maxWidth: 'xs', cols: 1 },
                                        ]}     
                                   >
                                        <Paper p="md" radius="md">
                                             <Group position="apart">
                                                  <Text size="1.1em" color="black" className={classes.title}>
                                                       Formation sur les outils de developement
                                                  </Text>
                                             </Group>
                                             <Group  spacing="xs" mt={10} className={classes.group}>
                                                  <Text className={classes.value}>
                                                       <BsCalendar3 />
                                                  </Text>
                                                  <Text fz="sm" className={classes.diff}>
                                                       <span>Crée le 22 juin 2022</span>
                                                  </Text>
                                             </Group>
                                             <Text className={classes.continuer}>
                                                  <HiArrowSmRight />
                                             </Text>
                                        </Paper>
                                        <Paper p="md" radius="md">
                                             <Group position="apart">
                                                  <Text size="1.1em" color="black" className={classes.title}>
                                                       Formation sur les outils de developement
                                                  </Text>
                                             </Group>

                                             <Group spacing="xs" mt={10} className={classes.group}>
                                                  <Text className={classes.value}>
                                                       <BsCalendar3 />
                                                  </Text>
                                                  <Text fz="sm" className={classes.diff}>
                                                       <span>Crée le 22 juin 2022</span>
                                                  </Text>
                                             </Group>
                                             <Text className={classes.continuer}>
                                                  <HiArrowSmRight />
                                             </Text>
                                        </Paper>
                                        <Paper p="md" radius="md">
                                             <Group position="apart">
                                                  <Text size="1.1em" className={classes.title}>
                                                       Formation sur les outils de developement
                                                  </Text>
                                             </Group>
                                             <Group spacing="xs" mt={10} className={classes.group}>
                                                  <Text className={classes.value}>
                                                       <BsCalendar3 />
                                                  </Text>
                                                  <Text fz="sm" className={classes.diff}>
                                                       <span>Crée le 22 juin 2022</span>
                                                  </Text>
                                             </Group>
                                             <Text className={classes.continuer}>
                                                  <HiArrowSmRight />
                                             </Text>
                                        </Paper>
                                   </SimpleGrid>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}