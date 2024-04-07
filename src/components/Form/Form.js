import { useRef } from 'react';
import './Form.css';
import FormLayout from './FormLayout';

const Form = (props) => {
    if(localStorage.length === 0 && !localStorage.key('toDo')) {
        localStorage.setItem('toDo',JSON.stringify([]));
        localStorage.setItem('progressing',JSON.stringify([]));
        localStorage.setItem('done',JSON.stringify([]));
    }
    const taskName = useRef();
    const taskCorP = useRef();
    const Priority = useRef();
    const Level = useRef();
    const Date = useRef();
    
    const formSubmit = (e) => {
        const toDoTasks = JSON.parse(localStorage.getItem('toDo'));
        e.preventDefault();
        const task = {
        taskName: taskName.current.value,
        taskCorP: taskCorP.current.value,
        taskPriority: Priority.current.value,
        taskLevel: Level.current.value,
        taskDay: Date.current.value,
        taskType: 'to-do',
        };

        const pushFunc = (task) => {
            toDoTasks.push(task);
            localStorage.setItem('toDo',JSON.stringify(toDoTasks));
            props.closeForm();
        }
        
        if(toDoTasks.find(tasks => tasks.taskName === task.taskName)) {
            alert('The Task Is Already there');
            return;
        } else if(props.formType === 'Edit-Task') {
            const data = toDoTasks.find(task => task.taskName === props.editBtn);
            toDoTasks.splice(data,1);
            if(props.closeForm()) {
                pushFunc(data);
                return;
            }
        }  

        pushFunc(task);
    }

    return (
        <FormLayout onSubmit={formSubmit} formType={props.formType}
        closeForm={props.closeForm} taskName={taskName} taskCorP={taskCorP}
        Priority={Priority} Level={Level} Date={Date}/>
    )
};

export default Form;