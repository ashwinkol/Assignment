import React, { useEffect, useState } from "react";
import "../Course/Course.css";
function Course() {
  // getting data from local Storag

  const [taskList, setTasksList] = useState([]);

  const [isSearch, setIsSearch] = useState(false);

  /* Add User */

  /* Edit User */

  /* Delete Note */

  /* Delete Tasks */

  /* Edit Tasks */

  //Adding data to Local Storage

  const dummy = [
    {
      Course_name: "javascript",
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
      Course_name: "java",
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
      Course_name: "python",
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
      Course_name: "go lang",
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
    setTasksList(dummy);
  }, []);

  //Search Notes
  const searchNote = () => {
    setIsSearch(true);
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  };

  const disableIsSearch = () => {
    setIsSearch(false);
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
                    onKeyUp={searchNote}
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
            {taskList.map((elem) => {
              if (isSearch) {
                return (
                  <div>
                    <img src={elem.img} />
                    <h4>{elem?.Course_name}</h4>
                  </div>
                  // <li key={elem.id}>
                  //   <div className="taskSearchBox" align="center">
                  //     <table id="taskTable" key={elem.id}>
                  //       <tbody align="center">
                  //         <tr>
                  //           <td align="center">
                  //             <button
                  //               onClick={() =>
                  //                 (window.location.href = `http://localhost:3000/CourseDetails/${elem.id}`)
                  //               }
                  //               id="notesBoxButton"
                  //               className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  //             >
                  //               Details
                  //             </button>
                  //           </td>
                  //         </tr>
                  //       </tbody>
                  //     </table>
                  //   </div>
                  // </li>
                );
              } else {
              }

              return null;
            })}
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

        <div className="row" align="center">
          {taskList.map((elem) => {
            // if (filterTask === "All")
            {
              return (
                <div className="taskBox">
                  <table id="taskTable" key={elem.id}>
                    <tbody align="center">
                      <tr>
                        <td>
                          <h3 id="searchFont">Course name</h3>
                          <h5>{elem.title}</h5>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <h3 id="searchFont">Instructor's name </h3>
                          <h5>{elem.task}</h5>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <h3 id="searchFont">Description </h3>
                          <h5>{elem.user}</h5>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <h3 id="searchFont">Enrollment status </h3>
                          <h5>{elem.progress}</h5>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <h3 id="searchFont">Course duration </h3>
                          <h5>{elem.progress}</h5>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <h3 id="searchFont">Schedule</h3>
                          <h5>{elem.progress}</h5>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <h3 id="searchFont">Location</h3>
                          <h5>{elem.progress}</h5>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <h3 id="searchFont">Pre-requisites</h3>
                          <h5>{elem.progress}</h5>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <h3 id="searchFont">
                            Syllabus as an expandable item
                          </h3>
                          <h5>{elem.progress}</h5>
                        </td>
                      </tr>

                      <tr>
                        <td align="center">
                          <button
                            onClick={() =>
                              (window.location.href = `http://localhost:3000/CourseDetails/${elem.id}`)
                            }
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
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Course;
