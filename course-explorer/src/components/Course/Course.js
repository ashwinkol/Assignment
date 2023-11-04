import React, { useEffect, useState } from 'react'
import '../Course/Course.css'
function Course() {
  // getting data from local Storage

  const getLocalTasks = () => {
    let tasks = localStorage.getItem('taskList');

    if (tasks) {
      return JSON.parse(localStorage.getItem('taskList'));
    }
    else {
      return [];
    }
  }

  const getUsersList = () => {
    let users = localStorage.getItem('userList')


    if (users) {
      return JSON.parse(localStorage.getItem('userList'));
    }
    else {
      return [];
    }
  }


  const [taskList, setTasksList] = useState(getLocalTasks());
  const [toUpdate, setToUpdate] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const [userInputTitle, setUserInputTitle] = useState('')
  const [userInputTask, setUserInputTask] = useState('')
  const [userList, setUserList] = useState(getUsersList())
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [editUser, setEditUser] = useState(false)
  const [userToUpdate, setUserToUpdate] = useState('')

  const [toDo, setToDo] = useState('')
  const [taskToUser, setTaskToUser] = useState('')
  const [updateTaskId, setUpdateTaskId] = useState('')
  const [filterTask, setFilterTask] = useState('All')


  const [courseName,setCoutseName] = useState('')

  const [instructorName,setInstructorName] = useState('')

  /* Add User */

  /* Edit User */


  /* Delete Note */



  /* Delete Tasks */

  /* Edit Tasks */

  const editTask = (id) => {
    console.log('This is the Id: ' + id)
    const newTask = taskList.find((elem) => {
      return elem.id === id;
    })
    console.log('This is the edit task ' + newTask.id + ' ' + newTask.title + ' ' + newTask.task + ' ' + newTask.user + ' ' + newTask.progress);
    setUserInputTitle(newTask.title);
    setUserInputTask(newTask.task);
    setToDo(newTask.progress);
    setTaskToUser(newTask.toDo);
    setUpdateTaskId(id);
    setToUpdate(true);

  }


  const courseDetails = (id) => {

  }

  //Adding data to Local Storage
  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList))
  }, [taskList]);

  useEffect(() => {
    localStorage.setItem('userList', JSON.stringify(userList))
  }, [userList]);


  //Search Notes
  const searchNote = () => {
    setIsSearch(true)
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
  }

  const disableIsSearch = () => {
    setIsSearch(false)

  }



  return (
    <div className='row'>

      <div className='leftcolumn'>
        
        <div className='card'>
          <h1 id='boldHeading'>Search</h1>
          <table>
            <tbody>
              <tr>
                <td>
                  <input type='text' id='mySearch' onKeyUp={searchNote} placeholder='Search...' />
                  <button id='searchButton' onClick={disableIsSearch} type='reset' className='bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Clear</button>
                </td>
              </tr>
            </tbody>

          </table>

          <ul id="myMenu">
            {

              taskList.map((elem) => {

                if (isSearch) {

                  return (
                    <li key={elem.id}><a href="/">
                      <div className='taskSearchBox' align="center">
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
                                <h3 id="searchFont">Description  </h3>
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
                                <h3 id="searchFont">Syllabus as an expandable item</h3>
                                <h5>{elem.progress}</h5>
                              </td>
                            </tr>

                            <tr>
                              <td align="center">
                              <button onClick={() => window.location.href =`http://localhost:3000/CourseDetails/${elem.id}`} id="notesBoxButton" className='bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Details</button>

                              </td>
                            </tr>
                          </tbody>

                        </table>



                      </div>
                    </a>
                    </li>
                  )


                }

                else {

                }

                return null;

              })

            }

          </ul>

        </div>

      </div>

      <div id="secondary" className='rightcolumn'>
       


        <div className='card'>
          <label htmlFor="userData">Filter</label> &nbsp; &nbsp;

          <select name="filter" id="userData" onClick={(e) => setFilterTask(e.target.value)} required >
          <option value='Shubham'>Shubham</option>
            <option value='Tom'>Tom</option>
            <option value='Jack'>Jack</option>
            <option value='Akash'>Akash</option>
            {
              userList.map((elem) => {
                return (
                  <>
                    <option value={elem.name} >  {elem.name} </option>

                  </>
                )
              })
            }
          </select>

        </div>

        <div className='row' align='center'>

          {
            taskList.map((elem) => {
              if (filterTask === 'Shubham') {
                return (
                  <div className='taskBox' >
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
                                <h3 id="searchFont">Description  </h3>
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
                                <h3 id="searchFont">Syllabus as an expandable item</h3>
                                <h5>{elem.progress}</h5>
                              </td>
                            </tr>

                            <tr>
                              <td align="center">
                              <button onClick={() => window.location.href =`http://localhost:3000/CourseDetails/${elem.id}`} id="notesBoxButton" className='bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Details</button>

                              </td>
                            </tr>
                          </tbody>

                    </table>


                  </div>
                )
              }
              else if (filterTask === elem.progress) {
                return (
                  <div className='taskBox' >
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
                                <h3 id="searchFont">Description  </h3>
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
                                <h3 id="searchFont">Syllabus as an expandable item</h3>
                                <h5>{elem.progress}</h5>
                              </td>
                            </tr>

                            <tr>
                              <td align="center">
                              <button onClick={() => window.location.href =`http://localhost:3000/CourseDetails/${elem.id}`} id="notesBoxButton" className='bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Details</button>

                              </td>
                            </tr>
                          </tbody>

                    </table>

                  </div>
                )
              }

              else if (filterTask === elem.user) {
                return (
                  <div className='taskBox'>
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
                                <h3 id="searchFont">Description  </h3>
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
                                <h3 id="searchFont">Syllabus as an expandable item</h3>
                                <h5>{elem.progress}</h5>
                              </td>
                            </tr>

                            <tr>
                              <td align="center">
                              <button onClick={() => window.location.href =`http://localhost:3000/CourseDetails/${elem.id}`} id="notesBoxButton" className='bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Details</button>

                              </td>
                            </tr>
                          </tbody>

                    </table>

                  </div>
                )
              }
              return null;
            })
          }




        </div>

      </div>

    </div>
  )
}

export default Course