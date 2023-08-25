import Headers from "../../components/header";
import { Avatar, Text, Group } from '@mantine/core';
import User from "/assets/utilisateur.png"
import { PiVideoLight } from "react-icons/pi"
import { BsCalendar3, BsCheck2Circle  } from "react-icons/bs"
import video from "/assets/video.mp4"
import { Accordion, List, rem, ThemeIcon} from '@mantine/core';



export default function DetailFormation() {

     return (
          <div>
               <Headers title="Detail de formation" />
               <div className="container-detail-formation">
                    <div className="detail-formation-gauche">
                         {/* <div className="user-post">
                              <Group>
                                   <Avatar src={User} size={50} radius="xl" />
                                   <div style={{ flex: 1 }}>
                                        <Text size="sm" weight={500}>
                                        Serge Roland
                                        </Text>

                                        <Text color="dimmed" size="xs">
                                             roland@gmail.com
                                        </Text>
                                   </div>
                              </Group>
                         </div> */}
                         <div className="video-container">
                              <div className="title-formation">
                                   <p>Authentification Next.js/Laravel</p>
                              </div>
                              <div className="video-card">
                                   <video width="100%" style={{ borderRadius: "4px"}} height="100%" controls muted>
                                        <source src={video} type="video/mp4" />
                                   </video>
                              </div>
                              <div className="publier-div">
                                   <p><BsCalendar3 /> Publié le 19 juin 2023 à 15h11</p>
                              </div>
                              <div className="description-objectif">
                                   <div className="container-description">
                                        <div className="title">
                                             <p>Description</p>
                                        </div>
                                        <div className="contenu-description">
                                             <p>
                                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                  Cumque, nisi laudantium sed modi dolorem dicta saepe dolor 
                                                  reprehenderit repellendus expedita soluta! Vel dicta voluptates 
                                                  sapiente, placeat eius assumenda cupiditate autem!
                                                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                                  Enim, obcaecati?
                                             </p>
                                        </div>
                                   </div>
                                   {/* <div className="container-objectif">
                                        <div className="title">
                                             <p>Objectifs</p>
                                        </div>
                                        <div className="contenu-objectif">
                                             <List
                                                  spacing="1em"
                                                  m="1em 0"
                                                  border= "1px solid"
                                                  center
                                                  icon={
                                                  <ThemeIcon color="teal" size={24} radius="xl">
                                                       <BsCheck2Circle size="1rem" />
                                                  </ThemeIcon>
                                                  }
                                             >
                                                  <List.Item>Clone or download repository from GitHub</List.Item>
                                                  <List.Item>Install dependencies with yarn</List.Item>
                                                  <List.Item>To start development server run npm start command</List.Item>
                                                  <List.Item>Run tests to make sure your changes do not break the build</List.Item>
                                             </List>
                                        </div>
                                   </div> */}
                              </div>
                         </div>
                    </div>
                    <section>
                         <span className="titre">Contenu du cours</span>
                              <div className="card-content">
                                   <Accordion 
                                        styles={{
                                             item: {
                                                  // styles added to all items
                                                  background: "white",
                                                  border: `${rem(1)} solid #ededed`,
                                                  fontSize: "0.9em",
                                                  cursor: "pointer",
                                                 borderRadius: "4px",
                                             },

                                             chevron: {
                                                  // styles added to chevron when it should rotate
                                                  fontWeight: "bold",
                                                  '&[data-rotate]': {
                                                  transform: 'rotate(-90deg)',
                                                  },
                                             },
                                             }}
                                        transitionDuration={100}
                                   >
                                        <Accordion.Item value="customization">
                                             <Accordion.Control fw="bold" color="red">Customization</Accordion.Control>
                                             <Accordion.Panel>
                                                  <div className="accordeon">
                                                       <div className="video-image">
                                                            <PiVideoLight fontSize="1.5em"/>
                                                       </div>
                                                       <p>Configure components appearance and behavior with vast amount</p>
                                                  </div>
                                             </Accordion.Panel>
                                             <Accordion.Panel>
                                                  <div className="accordeon">
                                                       <div className="video-image">
                                                            <PiVideoLight fontSize="1.5em"/>
                                                       </div>
                                                       <p>Configure components appearance</p>         
                                                  </div>
                                             </Accordion.Panel>
                                             <Accordion.Panel>
                                                  <div className="accordeon">
                                                       <div className="video-image">
                                                            <PiVideoLight fontSize="1.5em"/>
                                                       </div>
                                                       <p>Configure components appearance and behavior with vast amount</p>
                                                  </div>
                                             </Accordion.Panel>
                                             <Accordion.Panel>
                                                  <div className="accordeon">
                                                       <div className="video-image">
                                                            <PiVideoLight fontSize="1.5em"/>
                                                       </div>
                                                       <p>Configure components appearance and behavior with vast amount</p>
                                                  </div>
                                             </Accordion.Panel>
                                             <Accordion.Panel>
                                                  <div className="accordeon">
                                                       <div className="video-image">
                                                            <PiVideoLight fontSize="1.5em"/>
                                                       </div>
                                                       <p>Configure components appearance</p>         
                                                  </div>
                                             </Accordion.Panel>
                                             <Accordion.Panel>
                                                  <div className="accordeon">
                                                       <div className="video-image">
                                                            <PiVideoLight fontSize="1.5em"/>
                                                       </div>
                                                       <p>Configure components appearance and behavior with vast amount</p>
                                                  </div>
                                             </Accordion.Panel>
                                             <Accordion.Panel>
                                                  <div className="accordeon">
                                                       <div className="video-image">
                                                            <PiVideoLight fontSize="1.5em"/>
                                                       </div>
                                                       <p>Configure components appearance and behavior with vast amount</p>
                                                  </div>
                                             </Accordion.Panel>
                                             <Accordion.Panel>
                                                  <div className="accordeon">
                                                       <div className="video-image">
                                                            <PiVideoLight fontSize="1.5em"/>
                                                       </div>
                                                       <p>Configure components appearance</p>         
                                                  </div>
                                             </Accordion.Panel>
                                             <Accordion.Panel>
                                                  <div className="accordeon">
                                                       <div className="video-image">
                                                            <PiVideoLight fontSize="1.5em"/>
                                                       </div>
                                                       <p>Configure components appearance and behavior with vast amount</p>
                                                  </div>
                                             </Accordion.Panel>
                                        </Accordion.Item>
                                        <Accordion.Item value="flexibility">
                                             <Accordion.Control>Flexibility</Accordion.Control>
                                             <Accordion.Panel>
                                                  <div className="accordeon">
                                                       <div className="video-image">
                                                            <PiVideoLight fontSize="1.5em"/>
                                                       </div>
                                                       <p>Configure components appearance and behavior with vast amount</p>
                                                  </div>
                                             </Accordion.Panel>
                                             <Accordion.Panel>
                                                  <div className="accordeon">
                                                       <div className="video-image">
                                                            <PiVideoLight fontSize="1.5em"/>
                                                       </div>
                                                       <p>Configure components appearance</p>         
                                                  </div>
                                             </Accordion.Panel>
                                             <Accordion.Panel>
                                                  <div className="accordeon">
                                                       <div className="video-image">
                                                            <PiVideoLight fontSize="1.5em"/>
                                                       </div>
                                                       <p>Configure components appearance and behavior with vast amount</p>
                                                  </div>
                                             </Accordion.Panel>
                                        </Accordion.Item>
                                        <Accordion.Item value="Titre de la formation">
                                             <Accordion.Control>Titre de la formation</Accordion.Control>
                                             <Accordion.Panel>
                                                  <div className="accordeon">
                                                       <div className="video-image">
                                                            <PiVideoLight fontSize="1.5em"/>
                                                       </div>
                                                       <p>Configure components appearance and behavior with vast amount</p>
                                                  </div>
                                             </Accordion.Panel>
                                             <Accordion.Panel>
                                                  <div className="accordeon">
                                                       <div className="video-image">
                                                            <PiVideoLight fontSize="1.5em"/>
                                                       </div>
                                                       <p>Configure components appearance</p>         
                                                  </div>
                                             </Accordion.Panel>
                                             <Accordion.Panel>
                                                  <div className="accordeon">
                                                       <div className="video-image">
                                                            <PiVideoLight fontSize="1.5em"/>
                                                       </div>
                                                       <p>Configure components appearance and behavior with vast amount</p>
                                                  </div>
                                             </Accordion.Panel>
                                             <Accordion.Panel>
                                                  <div className="accordeon">
                                                       <div className="video-image">
                                                            <PiVideoLight fontSize="1.5em"/>
                                                       </div>
                                                       <p>Configure components appearance and behavior with vast amount</p>
                                                  </div>
                                             </Accordion.Panel>
                                             <Accordion.Panel>
                                                  <div className="accordeon">
                                                       <div className="video-image">
                                                            <PiVideoLight fontSize="1.5em"/>
                                                       </div>
                                                       <p>Configure components appearance</p>         
                                                  </div>
                                             </Accordion.Panel>
                                             <Accordion.Panel>
                                                  <div className="accordeon">
                                                       <div className="video-image">
                                                            <PiVideoLight fontSize="1.5em"/>
                                                       </div>
                                                       <p>Configure components appearance and behavior with vast amount</p>
                                                  </div>
                                             </Accordion.Panel>
                                        </Accordion.Item>
                                   </Accordion>
                              </div>
                    </section>
               </div>
          </div>
     )
}