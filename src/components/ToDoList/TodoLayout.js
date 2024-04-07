import listIcon from '../../icons/list.svg'
import AddTaskBtn from './AddTaskBtn';

const TodoLayout = (props) => {
return  <div id='todo' className="bg-[#D5CCFF] sm:flex-1 m-3 h-fit 
        md:p-6 p-3 rounded-2xl">
            <div className="flex">
                <div className="flex p-3">
                    <div>
                        <img className="w-fit" src={listIcon} alt="list-icon" />
                    </div>
                    <h1 className="text-[#2B1887] font-sans font-bold sm:text-3xl text-2xl pl-3 py-auto">To-Do</h1>
                </div>
                
                <div className="ml-auto">
                    <AddTaskBtn onClick={props.showFormHandler}/>
                </div>
            </div>

            {props.renderTodoTasks}
        </div>
}

export default TodoLayout;