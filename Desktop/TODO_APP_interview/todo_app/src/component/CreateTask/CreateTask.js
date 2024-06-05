import React, { useState ,useEffect } from 'react'
import TodoList from '../TodoList/TodoList'
import AddIcon from '@mui/icons-material/Add';
import style from './createtask.css'
import { v4 as uuidv4 } from 'uuid';





export default function CreateTask() {


    const [createText, setcreateText] = useState("")
    const [todoList, settodoList] = useState( JSON.parse(localStorage.getItem("taskList")) ||[])   // localStorage.getItem("taskList")
 
    

    useEffect(() => {
        settodoList(JSON.parse(localStorage.getItem("taskList")) || []);
      }, []);

  function createTextfunc(text) {
   

    let todolistCopy = {
        "id": uuidv4(),
        "text" : createText,
        "status": false,
        "statusTask":"ToBePicked"

    }

    let  todocopy = [...todoList ,todolistCopy ]
       settodoList( [...todoList ,todolistCopy ])  


         
       localStorage.setItem("taskList",JSON.stringify(todocopy) );

    setcreateText("")
    
  }


    return (
        <div className={"mainDiv"}>
            <h1> Task Management Application </h1> 
 
 <div className='innerdiv'>

 
            <input className={"mainInput"}
                type="text" value={createText}
                placeholder='Please Enter Task Here.....'
                onChange={(e) => {setcreateText(e.target.value) }}
                maxLength={255}
            />
 
             <span  className='add'>        
                 <AddIcon  onClick={()=>{createTextfunc()  }}/>
 </span>

 </div>
         <TodoList todoList={todoList} settodoList={settodoList}  setcreateText={setcreateText}  />

        </div>
    )
}
