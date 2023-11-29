import React, { useState } from "react";
import Student from "../components/students";
import Block from "../crud/paste";
function Addstudents({ students, setstudents }) {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [education, setEducation] = useState("")
  const [gender, setGender] = useState("")

  const handleaddstudent = () => {
    const newstudents = {
      id,// used  short-hand property
      name,
      age,
      education,
      gender,
    }
    //   console.log(newstudents)

    setstudents([...students, newstudents])
    setId("")
    setName("")
    setAge("")
    setEducation("")
    setGender("")
  }


  return (
    <Block
    title={"Add new students"}
    description={"please fill all the boxes for add new student"}>
      
    <div className="form-group">
      <h4>Add Students
      </h4>
      <input placeholder="enter ID number"
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)} />

      <input placeholder="enter name of the student"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} />

      <input placeholder="enter age of the student"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)} />

      <input placeholder="enter education of the student"
        type="text"
        value={education}
        onChange={(e) => setEducation(e.target.value)} />

      <input placeholder="enter gender of the student"
        type="text"
        value={gender}
        onChange={(e) => setGender(e.target.value)} />



      <div><button onClick={handleaddstudent} >Add</button></div>
    </div>
    </Block>

  )
}
export default Addstudents;