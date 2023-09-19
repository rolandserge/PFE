import React, { useRef, useState } from "react";
import { useSnackbar } from "notistack";
import { Dropzone } from "@mantine/dropzone";
import { IconChevronDown } from "@tabler/icons-react";
import {
  Textarea,
  TextInput,
  Group,
  Text,
  rem,
  Input,
  Accordion,
  Button,
} from "@mantine/core";
import { useCreateCourseMutation } from "../../slices/coursesApi";
import CourseData from "../../components/Course/CourseData";
import CourseInformation from "../../components/Course/CourseInformation";
import CoursePreview from "../../components/Course/CoursePreview";
import CourseContent from "../../components/Course/CourseContent";
import CourseOptions from "../../components/Course/CourseOptions";

export default function CreateCours() {

  const [active, setActive] = useState(0);

  const [courseInfo, setCourseInfo] = useState({
    name: "",
    description: "",
    modules: "",
    thumbnail: "",
  });
  const [createCourse, { isLoading, isSuccess, error }] = useCreateCourseMutation()
  const [benefits, setBenefits] = useState([{ title: "" }]);
  const [prerequisites, setPrerequisites] = useState([{ title: "" }]);
  const [courseContentData, setCourseContentData] = useState([
    {
      videoUrl: "",
      title: "",
      description: "",
      videoSection: "Chapitre 1",
      videoLength: "",
      links: [
        {
          title: "",
          url: "",
        },
      ],
    },
  ]);

  const [courseData, setCourseData] = useState({});

  const handleSubmit = async () => {
    // Format benefits array
    const formattedBenefits = benefits.map((benefit) => ({
      title: benefit.title,
    }));
    // Format prerequisites array
    const formattedPrerequisites = prerequisites.map((prerequisite) => ({
      title: prerequisite.title,
    }));

    // Format course content array
    const formattedCourseContentData = courseContentData.map((courseContent) => ({
        videoUrl: courseContent.videoUrl,
        title: courseContent.title,
        description: courseContent.description,
        videoLength: courseContent.videoLength,
        videoSection: courseContent.videoSection,
        links: courseContent.links.map((link) => ({
          title: link.title,
          url: link.url,
        })),
      })
    );

    //   prepare our data object
    const data = {
      name: courseInfo.name,
      description: courseInfo.description,
      modules: courseInfo.modules,
      thumbnail: courseInfo.thumbnail,
      totalVideos: courseContentData.length,
      courseData: formattedCourseContentData,
    };
    setCourseData(data);
  };

  const handleCourseCreate = async (e) => {

    const data = courseData;
    if (!isLoading) {
      const res = await createCourse(data);
      console.log(res)
    }
  };

  return (
      <div className="w-full flex items-center h-15 justify-center mt-6 mb-6 text-black">
        <div className="w-[60%] flex items-center justify-center bg-white">
        {active === 0 && (
          <CourseInformation
            courseInfo={courseInfo}
            setCourseInfo={setCourseInfo}
            active={active}
            setActive={setActive}
          />
        )}

        {active === 1 && (
          <CourseContent
            active={active}
            setActive={setActive}
            courseContentData={courseContentData}
            setCourseContentData={setCourseContentData}
            handleSubmit={handleSubmit}
            handleCourseCreate={handleCourseCreate}
          />
        )}

        {/* {active === 2 && (
          <CoursePreview
            active={active}
            setActive={setActive}
            courseData={courseData}
            handleCourseCreate={handleCourseCreate}
          />
        )} */}
      </div>
      <div className="w-[20%] mt-[100px] h-screen fixed z-[-1] top-18 right-0">
        <CourseOptions active={active} setActive={setActive} />
      </div>
    </div>
  );
}
