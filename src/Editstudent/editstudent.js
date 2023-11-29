import { useState } from "react";
import Block from "../crud/paste";
import Student from "../components/students";


function Editstudent({}){
    

    const[id,setId]=useState("")
    const[name,setName]=useState("")
    const[age,setAge]=useState("")
    const[education,setEducation]=useState("")
    const[gender,setGender]=useState("")


    return(
        <div className="form-group">
            <h4>update Students
            </h4>
            <input placeholder="enter ID number"
    type="number"
    value={id}
    onChange={(e)=>setId(e.target.value)}/>

    <input placeholder="enter name of the student"
    type="text"
    value={name}
    onChange={(e)=>setName(e.target.value)}/>

    <input placeholder="enter age of the student"
    type="number"
    value={age}
    onChange={(e)=>setAge(e.target.value)}/>

    <input placeholder="enter education of the student"
    type="text"
    value={education}
    onChange={(e)=>setEducation(e.target.value)}/>

    <input placeholder="enter gender of the student"
    type="text"
    value={gender}
    onChange={(e)=>setGender(e.target.value)}/>


    
    <div><button onClick={""} >update</button></div>
        </div>
       
        
    )
    
}
export default Editstudent;