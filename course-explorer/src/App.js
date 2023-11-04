import './App.css';
import AddCourse from './components/AddCourse/AddCourse';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course from './components/Course/Course';
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Student from './components/Student/Student';
import Learning from './components/Student/Learning';



function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/AddCourse" element={<Home />} />
        <Route path="/CourseDetails/:id" element={<CourseDetails />} />
        <Route path="/Student/Home" element={<Student />} />
        <Route path="/Student/Learning" element={<Learning />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
