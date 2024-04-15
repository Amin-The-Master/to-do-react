import { useRef } from 'react';
import './Form.css';
import Form from './Form';

const FormSubmit = (props) => {
    const name = useRef();
    const corp = useRef();
    const priority = useRef();
    const level = useRef();
    const date = useRef();
    
    const formSubmit = (e) => {
        const toDoTasks = JSON.parse(localStorage.getItem('toDo'));
        e.preventDefault();
        const task = {
            taskName: name.current.value,
            taskCorP: corp.current.value,
            taskPriority: priority.current.value,
            taskLevel: level.current.value,
            taskDay: date.current.value,
            taskType: 'to-do',
        };

        const pushFunc = (task) => {
            toDoTasks.push(task);
            localStorage.setItem('toDo',JSON.stringify(toDoTasks));
            props.closeForm();
        }

        const checkStorage = toDoTasks.find(tasks => (
            tasks.taskName === task.taskName &&
            tasks.taskCorP === task.taskCorP && 
            tasks.taskPriority === task.taskPriority &&
            tasks.taskLevel === task.taskLevel &&
            tasks.taskDay === task.taskDay
        ));
        
        if(checkStorage) {
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
        <Form onSubmit={formSubmit} formType={props.formType}
        closeForm={props.closeForm} taskName={name} taskCorP={corp}
        taskPriority={priority} taskLevel={level} taskDate={date}/>
    )
};

export default FormSubmit;