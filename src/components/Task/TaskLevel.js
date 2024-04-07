
const TaskLevel = (props) => {
    const easy = <>
        <span className={`priority-level ${props.priority} rounded-bl-3xl rounded-r ml-3 `}></span>
        <span className="priority-level empty rounded-bl-3xl rounded-r ml-3 "></span>
        <span className="priority-level empty rounded-bl-3xl rounded-r ml-3 "></span>
    </>;

    const moderated = <>
        <span className={`priority-level ${props.priority} rounded-bl-3xl rounded-r ml-3 `}></span>
        <span className={`priority-level ${props.priority} rounded-bl-3xl rounded-r ml-3 `}></span>
        <span className="priority-level empty rounded-bl-3xl rounded-r ml-3 "></span>
    </>;

    const hard = <>
        <span className={`priority-level ${props.priority} rounded-bl-3xl rounded-r ml-3 `}></span>
        <span className={`priority-level ${props.priority} rounded-bl-3xl rounded-r ml-3 `}></span>
        <span className={`priority-level ${props.priority} rounded-bl-3xl rounded-r ml-3 `}></span>
    </>;
    return <>
        {props.level === 'Easy' ? easy : props.level === 'Moderate' ? moderated :
        props.level === 'Hard' ? hard : undefined}
    </>
}

export default TaskLevel;