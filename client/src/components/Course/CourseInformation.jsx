import { styles } from '../../style/style';
import React, { useEffect, useState } from "react";
import { useGetAllModulesQuery } from "../../slices/moduleApiSlice";


const CourseInformation = ({ courseInfo, setCourseInfo, active, setActive }) => {

  const [dragging, setDragging] = useState(false);
  const { data } = useGetAllModulesQuery();
  const [modules, setModules] = useState([]);

  useEffect(() => {
    if (data) {
      setModules(data.data);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setActive(active + 1);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (reader.readyState === 2) {
          setCourseInfo({ ...courseInfo, thumbnail: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setCourseInfo({ ...courseInfo, thumbnail: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-[93%] mt-6">
      <form onSubmit={handleSubmit} className={`${styles.label}`}>
        <div>
          <label htmlFor="">Nom du cours</label>
          <input
            type="name"
            name=""
            required
            value={courseInfo.name}
            onChange={(e) =>
              setCourseInfo({ ...courseInfo, name: e.target.value })
            }
            id="name"
            placeholder="MERN stack LMS platform with next 13"
            className={`
            ${styles.input}`}
          />
        </div>
        <br />
        <div className="mb-1">
          <label>Description du cours</label>
          <textarea
            name=""
            id=""
            cols={20}
            rows={4}
            placeholder="Write something amazing..."
            className={`${styles.input} !h-min !py-2`}
            value={courseInfo.description}
            onChange={(e) =>
              setCourseInfo({ ...courseInfo, description: e.target.value })
            }
          >

          </textarea>
        <br />
          <div className="mt-4">
            <label className={`${styles.label}`}>
              Modules des cours
            </label>
            <select
              name=""
              id=""
              className={`${styles.input}`}
              value={courseInfo.modules}
              onChange={(e) =>
                setCourseInfo({ ...courseInfo, modules: e.target.value })
              }
            >
              <option value="">Selectionner le module</option>
              {modules &&
                modules.map((item) => (
                  <option value={item._id} key={item._id}>
                    {item.nom}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <br />
        <div className="w-full">
          <input
            type="file"
            accept="image/*"
            id="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file"
            className={`w-full min-h-[10vh] dark:border-black border-[#00000026] p-3 border flex items-center justify-center ${
              dragging ? "bg-blue-500" : "bg-transparent"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {courseInfo.thumbnail ? (
              <img
                src={courseInfo.thumbnail}
                alt=""
                className="max-h-full w-full object-cover"
              />
            ) : (
              <span className="text-black dark:text-black">
                Faites glisser votre cover ici ou cliquez pour parcourir
              </span>
            )}
          </label>
        </div>
        <br />
        <div className="w-full flex items-center justify-end">
          <input
            type="submit"
            value="Suivant"
            className="w-full 800px:w-[180px] h-[40px] bg-[#000] text-center text-[#fff] rounded mt-2 cursor-pointer"
          />
        </div>
        <br/>
      </form>
    </div>
  );
};

export default CourseInformation;
