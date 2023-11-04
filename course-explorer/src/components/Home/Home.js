import React from 'react'
import './Home.css'
import img from '../Images/home.svg'
import { Link } from "react-router-dom";
function Home() {


    return (

        <div id='homeBg'>

            <section className="text-gray-600 body-font">

                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div className="sm:w-1/2 mb-3 px-4">
                            <div className="h-65 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={img} />
                            </div>
                        </div>

                        <div className="sm:w-1/2 mb-7 px-4">


                            <h2  id="fontHome">Welcome To  <br/> The <br/>Course Explorer!</h2> <br />
                            <div id="homeButtons">
                                <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" role="button" to="/Course">Course</Link> <br/> <br/>
                                <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" role="button" to="/Student/Home">Student</Link><br/> <br/>
                                <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" role="button" to="/AddCourse">Add Course 🎁</Link> 
                            </div>

                        </div>


                    </div>
                </div>
            </section >
        </div >
    )
}

export default Home