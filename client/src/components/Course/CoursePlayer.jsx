import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ReactPlayer from 'react-player';


const CoursePlayer = ({ videoUrl }) => {

  return (
    <div className="w-full h-full">
    {
      <ReactPlayer
        url={videoUrl}
        controls={true}
        playing={true}
        width="100%"
        height="100%"
      /> 
    }
  </div>
  );
};

export default CoursePlayer;
