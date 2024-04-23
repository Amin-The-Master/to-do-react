import { useEffect, useState } from 'react';
import Task from '../../components/Task/Task';
import Form from '../../components/Form/FormSubmit';
import TodoLayout from './TodoLayout';
import useCheckLocalStorage from '../../hooks/useCheckLocalStorage';

const Todo = () => {
    useCheckLocalStorage();
    const ToDo = JSON.parse(localStorage.getItem('toDo'));
    const [showForm , setShowForm] = useState(false);
    const [renderTodoTasks , setRenderTodoTasks] = useState(false);
    
    const showFormHandler = (e) => {
        e.preventDefault();
        setShowForm(true);
    }

    const closeFormHandler = () => {
        setShowForm(false);
    }

    useEffect(()=> {
        if(ToDo) {
            setTimeout(()=> {
            const makeDoneHandler = (e) => {
                let progressing = JSON.parse(localStorage.getItem('progressing'));
                let done = JSON.parse(localStorage.getItem('done'));
                if(e.target.closest('.edit-task')) return;
                const data = e.target.closest('.task');
                if(!data) return;
                if(data) {
                    const data2 = ToDo.find(task => task.taskName + task.taskCorP + 
                    task.taskPriority + task.taskLevel + task.taskDay === data.id);
                    const data3 = ToDo.findIndex(task => task.taskName + task.taskCorP + 
                    task.taskPriority + task.taskLevel + task.taskDay === data.id);
                    data2.taskType = 'done';
                    progressing.push(data2)
                    localStorage.setItem('progressing',JSON.stringify(progressing));
                    ToDo.splice(data3,1);
                    localStorage.setItem('toDo',JSON.stringify(ToDo));
                    setTimeout(() => {
                        progressing.splice(data3,1);
                        localStorage.setItem('progressing',JSON.stringify(progressing));
                        done.push(data2);
                        localStorage.setItem('done',JSON.stringify(done));
                    });
                }
            }    
            setRenderTodoTasks(
                ToDo.map(task => <Task 
                    onClick={makeDoneHandler}
                    key={task.taskName + task.taskCorP + task.taskPriority
                    + task.taskLevel + task.taskDay} taskName={task.taskName} 
                    taskPriority={task.taskPriority} taskDay={task.taskDay} 
                    taskLevel={task.taskLevel} taskCorP={task.taskCorP} 
                    taskType={task.taskType}/>)
            )
        },6)
        }
    },[ToDo])
    
    return (<>
        {showForm && <Form formType='Add-Task' setShowForm={closeFormHandler} closeForm={closeFormHandler}/>}
        <TodoLayout renderTodoTasks={renderTodoTasks} showFormHandler={showFormHandler}/>
    </>
    )
}

export default Todo;