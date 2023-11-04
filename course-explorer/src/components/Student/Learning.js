import React from 'react'

import { Link } from 'react-router-dom'

import '../Student/Student.css'


function Learning() {

    return (
        <div>

            <div class="relative min-h-screen md:flex" data-dev-hint="container">


                <input type="checkbox" id="menu-open" class="hidden" />



                <header class="bgBlue text-gray-100 flex justify-between md:hidden" data-dev-hint="mobile menu bar">
                    <a href="#" class="block p-4 text-white font-bold whitespace-nowrap truncate">
                        App Logo
                    </a>

                    <label for="menu-open" id="mobile-menu-button" class="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md">
                        <svg id="menu-open-icon" class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg id="menu-close-icon" class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </label>
                </header>

                <aside id="sidebar" class="bgBlue text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
                    <div class="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">
                        <a href="#" class="text-white flex items-center space-x-2 px-4" title="Your App">

                            <span class="text-2xl font-extrabold whitespace-nowrap truncate">Student Dashbord</span>

                        </a>
                        <hr />
                        <nav data-dev-hint="main navigation">
                            <Link to="/Student/Home" class="flex items-center space-x-2 py-2 px-4 transition duration-300 hover:bg-gray-700 hover:text-white m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                                <span>Home</span>
                            </Link>
                            <Link href="/Student/NoticeBoard" class="flex items-center space-x-2 py-2 px-4 transition duration-300 hover:bg-gray-700 hover:text-white m-2 active">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                                </svg>
                                <span>My Learning</span>
                            </Link>
                           

                        </nav>
                    </div>

                </aside>

                <main id="content" class="flex-1 p-6 lg:px-8" align='center'>
                    <div class="max-w-7xl mx-auto">
                        <div class="px-4 py-6 sm:px-0">
                            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
                                <h1>My Courses</h1>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </div>
    )
}

export default Learning

