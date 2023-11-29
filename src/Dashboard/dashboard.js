import Addstudents from "../Addstudents/addstudent";
import Block from "../crud/paste";

function Dashboard(){
  
    return(
        <div>
           <Block 
           title={"Welcome to the students app"}
           description={"This is a students application page"}/>
           <div><h3>please naviagate to the students app</h3></div> 

        </div>
     
       
    )
}
export default Dashboard;