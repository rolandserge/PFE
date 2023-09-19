import { Avatar, Text, Group } from '@mantine/core';
import User from "/assets/utilisateur.png"
import { BsCalendar3, BsCheck2Circle, BsCheckLg  } from "react-icons/bs"
import video from "/assets/video.mp4"
import { useParams } from 'react-router-dom';
import { useGetCourseContentQuery } from '../../slices/coursesApi';
import CoursePlayer from '../../components/Course/CoursePlayer';
import { useState } from 'react';
import CourseContentList from '../../components/Course/CourseContentList';



export default function DetailFormation() {

     const { id } = useParams()

     const { data } = useGetCourseContentQuery(id)

     const [activeVideo, setActiveVideo] = useState(0)

     return (
          <div>
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
                              <div className="video-card">
                                   <CoursePlayer 
                                        videoUrl={data && data.data[activeVideo]?.videoUrl}
                                   />
                              </div>
                              <div className="publier-div">
                                   <p><BsCalendar3 /> Publié le 29 aout 2023 à 15h11</p>
                              </div>
                              <div className="description-objectif">
                                   <div className="container-description">
                                        <div className="title">
                                             <p>Description</p>
                                        </div>
                                        <div className="contenu-description">
                                             <p>
                                                  {
                                                       data && data.data[activeVideo].description
                                                  }
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <section>
                         <span className="titre">Contenu du cours</span>
                              <div className="card-content">
                                   <CourseContentList 
                                        data={data && data.data}
                                        activeVideo={activeVideo}
                                        setActiveVideo={setActiveVideo}
                                   />
                              </div>
                    </section>
               </div>
          </div>
     )
}