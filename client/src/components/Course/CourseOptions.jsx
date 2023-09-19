import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';


const CourseOptions = ({ active, setActive }) => {
    const options = [
        "Course Information",
        "Course Options",
        "Course Content",
        "Course Preview",
      ];
    return (
     <div>
      {options.map((option, index) => (
        <div key={index} className={`w-full flex py-5`}>
           <div
            className={`w-[35px] h-[35px] rounded-full flex items-center justify-center ${
              active + 1 > index ? "bg-blue-500" : "bg-[#384766]"
            } relative`}
          >
            <IoMdCheckmark className="text-[25px]" />
            {index !== options.length - 1 && (
              <div
                className={`absolute h-[30px] w-1 ${
                  active + 1 > index ? "bg-blue-500" : "bg-[#384766]"
                } bottom-[-100%]`}
              />
            )}
          </div>
          <h5
          className={`pl-3 ${
            active === index
              ? "dark:text-orange text-black"
              : "dark:text-blue text-black"
          } text-[20px]`}
          >
            {option}
          </h5>
          </div>
      ))}
     </div>
    )
}

export default CourseOptions