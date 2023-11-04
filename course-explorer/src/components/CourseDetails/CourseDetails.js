import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CourseDetails/CourseJs.js'
import '../CourseDetails/CourseDetails.css'
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";

function CourseDetails() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [courseDetails, setCourseDetails] = useState({});
  const { id } = useParams();

  const [open, setOpen] = React.useState(false);

 
  const toggleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    console.log('Course Details Page Loaded');
    getCourse();
  }, [id]); // Fetch course details whenever the 'id' parameter changes

  const getCourse = () => {
    const url = `http://localhost:8080/CourseDetails/${id}`;
    axios.get(url)
      .then((response) => {
        if (response.data != null) {
          const result = response.data;
          if (result['status'] === 'success') {
            setCourseDetails(result['data']);
          } else {
            alert("Error: " + result['error']);
          }
        } else {
          alert('Could not fetch course details');
        }
      })
      .catch((error) => {
        console.error("Error fetching course details:", error);
      });
  };

  return (
    <>
    <Link to={'/Course'} className='LinkColor'>Go Back {'>'}</Link>
    <div className='courseDetails'>
      <table id="tableOuter" >
        <tbody align="center">
          <tr>
            <td>
              <h3 id="searchFont">Course name</h3>
            </td>
          </tr>

          <tr>
            <td>
              <h3 id="searchFont">Instructor's name </h3>
            </td>
          </tr>

          <tr>
            <td>
              <h3 id="searchFont">Description  </h3>
            </td>
          </tr>

          <tr>
            <td>
              <h3 id="searchFont">Enrollment status </h3>
            </td>
          </tr>


          <tr>
            <td>
              <h3 id="searchFont">Course duration </h3>
            </td>
          </tr>

          <tr>
            <td>
              <h3 id="searchFont">Schedule</h3>
            </td>
          </tr>

          <tr>
            <td>
              <h3 id="searchFont">Location</h3>
            </td>
          </tr>

          <tr>
            <td>
              <h3 id="searchFont">Pre-requisites</h3>
            </td>
          </tr>

          <tr>
            <td>
              <h3 id="searchFont">Syllabus as an expandable item</h3>
            </td>
          </tr>

          <tr>
            <Button onClick={toggleOpen} className="text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Details</Button>
            <Collapse open={open}>
              <Card className="my-4 mx-auto w-8/12">
                <CardBody>
                  <Typography>
                    Use our Tailwind CSS collapse for your website. You can use if for
                    accordion, collapsible items and much more.
                  </Typography>
                </CardBody>
              </Card>
            </Collapse>
          </tr>

        </tbody>

      </table>


    </div>
    </>

  );
}

export default CourseDetails;
