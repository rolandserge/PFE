import React, { useState } from "react";
import { Accordion, List, rem, ThemeIcon} from '@mantine/core';
import { PiVideoLight } from "react-icons/pi"

export default function CourseContentList({ data, activeVideo, setActiveVideo }){

    const videoChapitre = [...new Set(data && data.map((item) => item.videoSection))]

    let totalCount = 0

    
    return (
        videoChapitre.map((chapitre, index) => {
    
            // Filter videos by chapitre
            const sectionVideos = data.filter((item) => item.videoSection === chapitre)
    
            const sectionVideoCount = sectionVideos.length
    
            const sectionStartIndex = totalCount
            totalCount += sectionVideos.length
    
            return (
    
                <Accordion 
                    styles={{
                        item: {
                            // styles added to all items
                            background: "white",
                            border: `${rem(1)} solid #ededed`,
                            fontSize: "0.9em",
                            cursor: "pointer",
                            borderRadius: "4px",
                            chevron: {
                                // styles added to chevron when it should rotate
                                fontWeight: "bold",
                                '&[data-rotate]': {
                                transform: 'rotate(-90deg)',
                                },
                            },
                        }
                    }}
                    transitionDuration={100}
                    key={index}
                >
                    <Accordion.Item value="customization">
                        <Accordion.Control fw="bold" color="red">{chapitre}</Accordion.Control>
                            {
                                sectionVideos.map((video, index) => {
    
                                    const videoIndex = sectionStartIndex + index
                                    
    
                                    return (
                                        <Accordion.Panel key={index} onClick={() => setActiveVideo(videoIndex)}>
                                            <div className={`w-full flex justify-between ${videoIndex === activeVideo ? "text-[#ff7f00]" : "" } cursor-pointer transition-all p-2`}>
                                                <div className="video-image">
                                                    <PiVideoLight fontSize="1.5em"/>
                                                </div>
                                                <div className="w-[90%]">
                                                    <p>{video.title}</p>
                                                </div>
                                            </div>
                                        </Accordion.Panel>
                                        )
                                    })
                            }
                    </Accordion.Item>
                </Accordion>
            )
        })
        
        )
    }