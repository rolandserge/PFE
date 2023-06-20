import Headers from "../components/header";
import "../styles/pages/detailFormation.css"
import { Avatar, Text, Group } from '@mantine/core';
import User from "../assets/utilisateur.png"
import { BsCalendar3 } from "react-icons/bs"
import video from "../assets/video.mp4"



export default function DetailFormation() {

     return (
          <div>
               <Headers title="Detail de formation" />
               <div className="container-detail-formation">
                    <div className="detail-formation-gauche">
                         <div className="user-post">
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
                         </div>
                         <div className="video-container">
                              <div className="video-card">
                                   <video width="100%" style={{ borderRadius: "4px"}} height="100%" controls muted>
                                        <source src={video} type="video/mp4" />
                                   </video>
                              </div>
                              <div className="publier-div">
                                   <p><BsCalendar3 /> Publié le 19 juin 2023 à 15h11</p>
                              </div>
                              <div className="description-formation">
                                   <div className="titre-description">
                                        <p>Description & objectif</p>
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
                         </div>
                    </div>
                    <div className="container-formation-droite">
                         <span className="titre">Playlist de la formation</span>
                              <div className="card-content">
                                   <div className="card-video">
                                        <div className="video">
                                             <video width="100%" height="100%" style={{ borderRadius: "4px"}} muted>
                                                  <source src={video} type="video/mp4" />
                                             </video>
                                        </div>
                                        <div className="titre-formation">
                                             <p>Titre de la formation prise en main  de flutter et figma</p>
                                             {/* <span>Video courte - 25min</span> */}
                                        </div>
                                   </div>
                                   <div className="card-video">
                                        <div className="video">
                                             <video width="100%" height="100%" muted style={{ borderRadius: "4px"}}>
                                                  <source src={video} type="video/mp4" />
                                             </video>
                                        </div>
                                        <div className="titre-formation">
                                             <p>Titre de la formation</p>
                                             <span>Video courte - 25min</span>
                                        </div>
                                   </div>
                                   <div className="card-video">
                                        <div className="video">
                                             <video width="100%" height="100%" muted>
                                                  <source src={video} type="video/mp4" />
                                             </video>
                                        </div>
                                        <div className="titre-formation">
                                             <p>Titre de la formation</p>
                                             <span>Video courte - 25min</span>
                                        </div>
                                   </div>
                                   <div className="card-video">
                                        <div className="video">
                                             <video width="100%" height="100%" muted>
                                                  <source src={video} type="video/mp4" />
                                             </video>
                                        </div>
                                        <div className="titre-formation">
                                             <p>Titre de la formation</p>
                                             <span>Video courte - 25min</span>
                                        </div>
                                   </div>
                              </div>
                    </div>
               </div>
          </div>
     )
}