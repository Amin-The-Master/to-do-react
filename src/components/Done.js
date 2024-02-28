import classes from './Done.module.css';
import Task from './Task';
import doneIcon from '../icons/done.svg'
const Done = () => {
    let done = JSON.parse(localStorage.getItem('done'));

    const deleteHandler = (e) => {
        const data = e.target.closest('.task');
        if(!data) return;
        const data3 = done.findIndex(task => task.taskName === data.id);
        done.splice(data3,1);
        localStorage.setItem('done',JSON.stringify(done));
        window.location.reload();
    }
    
    return (
        <div className="doneList bg-[#D5CCFF] sm:flex-1 lg:w-fit mb-3 h-fit lg:ml-3
        p-6 rounded-2xl">
            <div className="flex">
                <div>
                    <img className="w-fit" src={doneIcon} alt="done-icon" />
                </div>
                <h1 className="text-[#2B1887] font-sans font-bold text-3xl pl-3 py-auto">Done</h1>
            </div>

            {done.map(task => <Task onClick={deleteHandler} key={task.taskName} 
            taskItems={task}/>)}
        
        </div>
    )
}

export default Done;
