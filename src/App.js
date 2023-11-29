import logo from './logo.svg';
import './App.css';
import Block from './crud/paste';
import Student from './components/students';
import Data from './data/data';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/dashboard';
import Addstudents from './Addstudents/addstudent';
import Nopage from './nocontent/nopage';
function App() {
  const[student,setstudents]=useState(Data)
  return (
    <div className="App">
     <Routes>
      <Route exact path="/" element={<Dashboard></Dashboard>}/>
      <Route exact path='/student' element={<Student
  student={student}
  setstudents={setstudents}/>}/>

  <Route exact path='/addstudent' element={
    <Addstudents
    students = {student}
    setstudents={setstudents}/>
  }/>
  <Route 
  path='*'
  element={<Nopage></Nopage>}/>
 
     </Routes>

  {/* <Student
  student={student}
  setstudents={setstudents}/> */}
    </div>
  );
}

export default App;