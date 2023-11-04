import React, { useEffect, useState } from "react";
import "../Course/Course.css";
import javascript from "../assets/javascript.avif";
import java from "../assets/java.png";
import python from "../assets/python.jpg";
import golang from "../assets/golang.png";
import Cards from "./Cards";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Course() {
  // getting data from local Storag
  const navigate = useNavigate();
  const [taskList, setTasksList] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({});
  const [loading, setLoading] = useState(true);

  const dummy = [
    {
      course_name: "javascript",
      img: javascript,
      detail: "javascript",
      type: "programing",
      instructor_name: "AK Author",
      description:
        "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.",
      enrollment_status: "active",
      course_duration: "6 months",
      schedule: "6am - 3pm",
      location: "India",
      pre_requisites: ["JavaScript knoledge", "basic JavaScript"],
      syllabus: [
        {
          week: 1,
          topic: "overview",
          content: "overview of an JavaScript core concept.",
        },
        {
          week: 2,
          topic: "writing first programm",
          content: "overview of an JavaScript core concept.",
        },
      ],
    },
    {
      course_name: "java",
      img: java,
      detail: "java",
      type: "programing",
      instructor_name: "AK Author",
      description:
        "java is the world's most popular programming language. java is the programming language of the Web. java is easy to learn. This tutorial will teach you java from basic to advanced.",
      enrollment_status: "active",
      course_duration: "6 months",
      schedule: "6am - 3pm",
      location: "India",
      pre_requisites: ["java knoledge", "basic java"],
      syllabus: [
        {
          week: 1,
          topic: "overview",
          content: "overview of an java core concept.",
        },
        {
          week: 2,
          topic: "writing first programm",
          content: "overview of an java core concept.",
        },
      ],
    },
    {
      course_name: "python",
      img: python,
      detail: "python",
      type: "programing",
      instructor_name: "AK Author",
      description:
        "python is the world's most popular programming language. python is the programming language of the Web. python is easy to learn. This tutorial will teach you python from basic to advanced.",
      enrollment_status: "active",
      course_duration: "6 months",
      schedule: "6am - 3pm",
      location: "India",
      pre_requisites: ["python knoledge", "basic python"],
      syllabus: [
        {
          week: 1,
          topic: "overview",
          content: "overview of an python core concept.",
        },
        {
          week: 2,
          topic: "writing first programm",
          content: "overview of an python core concept.",
        },
      ],
    },
    {
      course_name: "go lang",
      img: golang,
      detail: "go lang",
      type: "programing",
      instructor_name: "AK Author",
      description:
        "go lang is the world's most popular programming language. go lang is the programming language of the Web. go lang is easy to learn. This tutorial will teach you go lang from basic to advanced.",
      enrollment_status: "active",
      course_duration: "6 months",
      schedule: "6am - 3pm",
      location: "India",
      pre_requisites: ["go lang knoledge", "basic go lang"],
      syllabus: [
        {
          week: 1,
          topic: "overview",
          content: "overview of an go lang core concept.",
        },
        {
          week: 2,
          topic: "writing first programm",
          content: "overview of an go lang core concept.",
        },
      ],
    },
  ];

  useEffect(() => {
    axios.get("http://localhost:8080/courses").then((res) => {
      if (res.status === 200) {
        setTasksList(res.data.data);
      } else {
        setTasksList([]);
      }
      setLoading(false);
    });
  }, []);

  //Search Notes
  const searchNote = (e) => {
    const value = e.target.value.toLowerCase();
    taskList.map((item) => {
      if (
        item.course_name.toLowerCase().includes(value) ||
        item.instructor_name.toLowerCase().includes(value)
      ) {
        setSelectedCourse(item);
      }
    });
  
  };

  const disableIsSearch = () => {
    setSelectedCourse({});
  };

  return (
    <div className="row">
      <div className="leftcolumn">
        <div className="card">
          <h1 id="boldHeading">Search</h1>
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    id="mySearch"
                    onChange={searchNote}
                    placeholder="Search..."
                  />
                  <button
                    id="searchButton"
                    onClick={disableIsSearch}
                    type="reset"
                    className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Clear
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <ul id="myMenu">
            {Object.keys(selectedCourse).length > 0 && (
              <li key={selectedCourse.course_id}>
                <a href="/">
                  <div className="taskSearchBox" align="center">
                   
                    <table id="taskTable" key={selectedCourse.course_id}>
                      <tbody align="center">
                        <tr>
                          <td>
                            <h3 id="searchFont">Course name</h3>
                            <h5>{selectedCourse.course_name}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h3 id="searchFont">Course duration </h3>
                            <h5>{selectedCourse.course_duration}</h5>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h3 id="searchFont">Schedule</h3>
                            <h5>{selectedCourse.schedule}</h5>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h3 id="searchFont">Location</h3>
                            <h5>{selectedCourse.location}</h5>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h3 id="searchFont">Pre-requisites</h3>
                            <h5>{selectedCourse.pre_requisites}</h5>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h3 id="searchFont">
                              Syllabus as an expandable item
                            </h3>
                            <h5>{selectedCourse.syllabus}</h5>
                          </td>
                        </tr>

                        <tr>
                          <td align="center">
                            <button
                              onClick={() => navigate(`/CourseDetails/${selectedCourse.course.id}`)}
                              id="notesBoxButton"
                              className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div id="secondary" className="rightcolumn">
        <div className="card">
          <label htmlFor="userData">Filter</label> &nbsp; &nbsp;
          <select
            name="filter"
            id="userData"
            // onClick={(e) => setFilterTask(e.target.value)}
            required
          >
            {/* <option value="Shubham">Shubham</option> */}
            <option value="Tom">Tom</option>
            <option value="Jack">Jack</option>
            <option value="Akash">Akash</option>
            {/* {userList.map((elem) => 

              return (
                <>
                  <option value={elem.name}> {elem.name} </option>
                </>
              );
            })} */}
          </select>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6rem",
            paddingLeft: "0.5rem",
            paddingTop: "0.5rem",
            rowGap: "1rem",
          }}
        >
          {taskList.map((elem) => {
            // if (filterTask === "All")
            {
              return <Cards elem={elem} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Course;
