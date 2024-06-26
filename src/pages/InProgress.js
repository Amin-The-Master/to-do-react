import { useState, useEffect } from "react";
import Task from "../components/Task/Task";
import useCheckLocalStorage from "../hooks/useCheckLocalStorage";

const InProgress = () => {
    useCheckLocalStorage();
    let progressing = JSON.parse(localStorage.getItem('progressing'));
    const [rendering,setRendering] = useState('');

    useEffect(() => {
        if(progressing) {
            setTimeout(() => {
                setRendering(
                    progressing.map(task => <Task 
                        key={task.taskName + task.taskCorP + task.taskPriority
                        + task.taskLevel + task.taskDay} 
                        taskItems={task}/>)
                );
            },6);
        }
    },[progressing]);

    return (
        <div id='inprogress' className="inprogress bg-[#D5CCFF] sm:flex-1 m-3 h-fit 
        md:p-6 p-3 rounded-2xl">
            <div className="flex p-3">
                <h1 className="text-[#2B1887] font-sans font-bold text-3xl pl-3 py-auto">
                    Inprogress ...
                </h1>
            </div>

            {rendering}
        </div>
    )
}
export default InProgress;