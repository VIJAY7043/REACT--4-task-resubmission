import React from 'react';
import Block from '../crud/paste';
import Editstudent from '../Editstudent/editstudent';


const Student = ({ student, setstudents }) => {
    const deletestudent = (studentid)=>{
        const removestudent=student.filter(students=>students.id !== studentid)
        setstudents(removestudent)
    }
  
    return (
        <Block title="student info" description="All student info displayed here">
            students data goes here

        <div className='stud-collection'>
            {student.map((stud,idx)=>(
                <div className='stud-card'key={idx}>
                    <h4>{stud.name}</h4>
                    <p> age :{stud.age}</p>
                    <p> education :{stud.education}</p>
                    <p> gender :{stud.gender}</p>
                    <div className='card-btn-group'>
                        <button>Edit</button>
                        <button onClick={()=>deletestudent(stud.id)}>Delete</button></div>
                </div>
                
            ))}

        </div>
      <Editstudent/>
        </Block>



    );
}

export default Student;
