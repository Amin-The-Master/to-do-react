import './Task.css'
import EditBtn from '../Btns/EditBtn';
import TaskLevel from './TaskLevel';

const TaskLayout = (props) => {
    
    return (<div onClick={props.onClick} id={props.taskName} 
    className="task hover:cursor-pointer hover:shadow-2xl 
    hover:shadow-indigo-500 duration-200 rounded-md
    my-3 p-3">
        <div className="flex">
            <h2 className="font-sans pl-3 font-bold text-2xl">{props.taskName}</h2>
            <EditBtn id={props.taskName} onClick={props.editHandler} taskType={props.taskType}/> 
        </div>
        <div className="task-desc m-3 pt-4 sm:flex">
            <div className={`priority ${props.taskPriority}-priority`}>
                <span className={`date ${props.taskPriority} 
                ${props.taskDay === "None" ? 'hidden' : props.taskDay} 
                p-3 rounded-xl font-sans sm:text-lg text-sm 
                font-bold`}>{props.taskDay}</span>
                
                {<TaskLevel priority={props.taskPriority}
                level={props.taskLevel}/>}

            </div>

            <h4 className="desc font-sans sm:ml-auto md:text-2xl text-md">
                {props.taskCorP}
            </h4>
        </div>
    </div>
    )
};

export default TaskLayout;