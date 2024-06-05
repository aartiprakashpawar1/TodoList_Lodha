import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';



export default function TodoList({ todoList, settodoList, setcreateText }) {
   

   

    console.log("🚀 ~ TodoList ~ todoList:", todoList)

    function DeleteTask(Idx) {
        let todoListCopy = todoList.filter((ele, id) => {
            return ele.id !== Idx

        })

        console.log("🚀 ~ todoListCopy ~ todoListCopy:", todoListCopy)

        settodoList(todoListCopy)

        localStorage.setItem("taskList",JSON.stringify(todoListCopy) );

    }

    function EditTask(Idx) {
        let index = todoList.findIndex((ele, id) => {
            return ele.id === Idx  

        })

        let todolistcopy = JSON.parse(JSON.stringify(todoList))
     
        todolistcopy[index].statusTask = "InProcess"
     

        console.log("🚀 ~ todoListCopyedit", todolistcopy)

        settodoList(todolistcopy)
        localStorage.setItem("taskList",JSON.stringify(todolistcopy) );

    }


    function TaskStatus(Idx){
        let index = todoList.findIndex((ele, id) => {
            return ele.id === Idx  

        })

        let todolistcopy = JSON.parse(JSON.stringify(todoList))
        todolistcopy[index].statusTask = "Completed"
     

        console.log("🚀 ~ complete", todolistcopy)

        settodoList(todolistcopy)
        localStorage.setItem("taskList",JSON.stringify(todolistcopy) );

    }


    return (
        <div>
            <h1>Task List </h1>

            {todoList.length > 0 ?

                <div className={"mainList"}>
                    {todoList.length && todoList.map((item, id) => {
                        return (
                            <div  className={`subList ${item.statusTask === "Completed" ? "CompletedCss" : item.statusTask  === "InProcess" ?  "inprogressCss" : "tobepickedCss"}`}>

                                <p key={id}  className={"textmsg"}  >{item.text}  </p>
                                <span className='Icons'> 
                                <HourglassBottomIcon  onClick={() => { EditTask(item.id) }} />
                                <DoneIcon   onClick={() => { TaskStatus(item.id) }}/>
                                <DeleteIcon onClick={() => { DeleteTask(item.id) }} />
                                
                                </span>
                               
                               
                               
                            </div>
                        )
                    })
                    }
                </div>
                : null
            }



        </div>




    )
}
