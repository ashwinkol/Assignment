import React, { useEffect, useState } from 'react'
import '../Course/Course.css'
function AddCourse() {
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
  //const [updateNoteId, setUpdateNoteId] = useState('');
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

  const addUser = () => {
    if (!userName && !userEmail) {
      alert('Fields Cant Be Empty!')
    } else if (userName && userEmail && editUser) {
      setUserList(userList.map((elem) => {
        if (elem.id === userToUpdate) {
          console.log('Found items Id ' + elem.id)
          console.log('Updated elem ' + elem.id + ' ' + elem.name + ' ' + elem.email)
          return { ...elem, name: userName, email: userEmail }
        }
        return elem;
      }))
      setUserName('');
      setUserEmail('');
      setUpdateTaskId(null);
      setEditUser(false);
    }
    else {
      const userData = { id: new Date().getTime().toString(), name: userName, email: userEmail }
      console.log('Added User Data ' + userData.name + ' ' + userData.email)
      setUserList([...userList, userData]);
      setUserName('');
      setUserEmail('');
      console.log('This is the user List ' + userList)

    }

  }

  /* Edit User */
  const editUserData = (id) => {
    console.log('Edit button clicked this is is ' + id)
    const newEditUser = userList.find((elem) => {
      return elem.id === id;
    })
    console.log('This is the new updated note ' + newEditUser.id + ' ' + newEditUser.name + ' ' + newEditUser.email);
    setUserName(newEditUser.name)
    setUserEmail(newEditUser.email)
    setUserToUpdate(id);
    setEditUser(true);

  }

  /* Delete Note */
  const deleteUser = (index) => {

    const newArray = userList.filter((elem) => {
      return index !== elem.id;
    });
    setUserList(newArray);
  }

  const addTasks = () => {
    if (!userInputTitle || !userInputTask || !toDo || !taskToUser) {
      alert('Fields Cant be Empty')
    } else if (userInputTitle && userInputTask && toDo && taskToUser && toUpdate) {
      setTasksList(taskList.map((elem) => {
        if (elem.id === updateTaskId) {
          console.log('Found items Id ' + elem.id)
          console.log('Updated elem ooooooooooooooooooooo ' + elem.id + ' ' + userInputTitle + ' ' + userInputTask + ' ' + taskToUser + ' ' + toDo)
          return { ...elem, title: userInputTitle, task: userInputTask, user: taskToUser, progress: toDo }
        }
        return elem;
      }))
      setUserInputTitle('');
      setUserInputTask('');
      setToDo('');
      setTaskToUser('');
      setUpdateTaskId(null);
      setToUpdate(false);
    }
    else {
      const theInputData = { id: new Date().getTime().toString(), title: userInputTitle, task: userInputTask, user: taskToUser, progress: toDo }
      setTasksList([...taskList, theInputData]);
      setUserInputTitle('')
      setUserInputTask('');
      setToDo('');
      setTaskToUser('');

    }
  }

  /* Delete Tasks */
  const deleteTask = (index) => {

    const newArray = taskList.filter((elem) => {
      return index !== elem.id;
    });
    setTasksList(newArray);
  }

  /* Edit Tasks */

  const editTask = (id) => {
    console.log('Edit button clicked this is is ' + id)
    const newTask = taskList.find((elem) => {
      return elem.id === id;
    })
    console.log('This is the edit task' + newTask.id + ' ' + newTask.title + ' ' + newTask.task + ' ' + newTask.user + ' ' + newTask.progress);
    setUserInputTitle(newTask.title);
    setUserInputTask(newTask.task);
    setToDo(newTask.progress);
    setTaskToUser(newTask.toDo);
    setUpdateTaskId(id);
    setToUpdate(true);

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
        
       

      </div>

      <div id="secondary" className='rightcolumn'>
        <div className='card'>

          <table id='topTaskTable'>
            <tbody align='center'>

              <tr>

                <td>
                  <input type='text' required='required' value={userInputTitle} onChange={(e) => setUserInputTitle(e.target.value)} placeholder='Task Title' /><br /><br />

                </td>

              </tr>

              <tr>

                <td>
                  <textarea type='text' required="required" value={userInputTask} onChange={(e) => setUserInputTask(e.target.value)} placeholder='Enter Task Details' rows='8' cols='29'> </textarea> <br /><br />
                </td>


              </tr>

              <tr>
                <th>
                  <form>
                    <label htmlFor="userData">Assign Task To &nbsp;&nbsp;</label>

                    <select name="users" id="userData" onClick={(e) => setTaskToUser(e.target.value)} required >
                      <option value=''></option>
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

                  </form>
                  <br/>
                </th>

              </tr>
             

              <tr>
                <td>
                  <input type="radio" name="task" value="To-Do" onClick={(e) => setToDo(e.target.value)} />&nbsp;&nbsp;
                  <label htmlFor="html">to-do</label>&nbsp;
                  <input type="radio" name="task" value="In Progress" onClick={(e) => setToDo(e.target.value)} />&nbsp;&nbsp;
                  <label htmlFor="css">In Progress</label>&nbsp;
                  <input type="radio" name="task" value="Completed" onClick={(e) => setToDo(e.target.value)} />&nbsp;&nbsp;
                  <label htmlFor="javascript">Completed</label>&nbsp;
                </td>
              </tr>


              <tr>
                <td>
                  <br />
                  <button type='button' onClick={addTasks} className='bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Submit</button>
                </td>
              </tr>

            </tbody>


          </table>


        </div>


        <div className='row' align='center'>

          {
            taskList.map((elem) => {
              if (filterTask === 'All') {
                return (
                  <div className='taskBox' >
                    <table id="taskTable" key={elem.id}>
                      <tbody align="center">
                        <tr>
                          <td>
                            <h3 id="searchFont">Title</h3>
                            <h5>{elem.title}</h5>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h3 id="searchFont">Task </h3>
                            <h5>{elem.task}</h5>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h3 id="searchFont">User  </h3>
                            <h5>{elem.user}</h5>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h3 id="searchFont">Progress </h3>
                            <h5>{elem.progress}</h5>
                          </td>
                        </tr>
                      </tbody>

                    </table>

                    <button onClick={() => editTask(elem.id)} id="notesBoxButton" className='bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>edit</button>
                    <button onClick={() => deleteTask(elem.id)} id="notesBoxButton" className='bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' >delete</button>

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
                            <h3 id="searchFont">Title</h3>
                            <h5>{elem.title}</h5>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h3 id="searchFont">Task </h3>
                            <h5>{elem.task}</h5>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h3 id="searchFont">User  </h3>
                            <h5>{elem.user}</h5>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h3 id="searchFont">Progress </h3>
                            <h5>{elem.progress}</h5>
                          </td>
                        </tr>
                      </tbody>

                    </table>
                    <button onClick={() => editTask(elem.id)} id="notesBoxButton" className='bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>edit</button>
                    <button onClick={() => deleteTask(elem.id)} id="notesBoxButton" className='bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' >delete</button>

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
                            <h3 id="searchFont">Title</h3>
                            <h5>{elem.title}</h5>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h3 id="searchFont">Task </h3>
                            <h5>{elem.task}</h5>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h3 id="searchFont">User  </h3>
                            <h5>{elem.user}</h5>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h3 id="searchFont">Progress </h3>
                            <h5>{elem.progress}</h5>
                          </td>
                        </tr>
                      </tbody>

                    </table>
                    <button onClick={() => editTask(elem.id)} id="notesBoxButton" className='bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>edit</button>
                    <button onClick={() => deleteTask(elem.id)} id="notesBoxButton" className='bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' >delete</button>

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

export default AddCourse