import Task from '../Task/Task';
import doneIcon from '../../icons/done.svg'
import './Done.css'
import { useState,useEffect } from 'react';
const Done = (props) => {
    let done = JSON.parse(localStorage.getItem('done'));
    const [renderDoneTasks,setRenderDoneTasks] = useState('');
    useEffect(() => {
       if(done) {
        setTimeout(()=> {
            setRenderDoneTasks(
                done.map(task => <Task 
                    onClick={deleteHandler}
                    key={task.taskName} taskName={task.taskName} 
                    taskPriority={task.taskPriority} taskDay={task.taskDay} 
                    taskLevel={task.taskLevel} taskCorp={task.taskCorp}
                    taskType={task.taskType}/>)
            );
       });
       }
        
    },[done]);

    const deleteHandler = (e) => {
        const data = e.target.closest('.task');
        if(!data) return;
        const data3 = done.findIndex(task => task.taskName === data.id);
        done.splice(data3,1);
        localStorage.setItem('done',JSON.stringify(done));
      }

    return (
        <div id='doneList' className="doneList bg-[#D5CCFF] sm:flex-1 m-3 h-fit 
        md:p-6 p-3 rounded-2xl">
            <div className="flex p-3">
                <div>
                    <img className="w-fit" src={doneIcon} alt="done-icon" />
                </div>
                <h1 className="text-[#2B1887] font-sans font-bold text-3xl pl-3 py-auto">Done</h1>
            </div>

            {renderDoneTasks}
        
        </div>
    )
}

export default Done;
