
const EditBtn = (props) => {
    return (
        <button id={props.id} onClick={props.onClick} className={`
                edit-task 
                ${props.taskType === 'done' ? 'hidden' : ''}
                duration-200 
                font-sans
                font-bold 
                sm:text-3xl 
                text-2xl 
                rounded 
                hover:rounded 
                hover:text-white 
                p-3
                ml-auto`}>
                    Edit
        </button>
    )
};

export default EditBtn;