const AddTaskBtn = (props) => {
    
    return <button onClick={props.onClick} className="
        add-task 
        duration-200 
        font-sans
        font-bold 
        sm:text-3xl 
        text-2xl 
        rounded 
        hover:rounded 
        bg-white
        hover:bg-[#2B1887]
        p-3
        hover:text-white
        text-[#2B1887]">Add Task</button>
}

export default AddTaskBtn;