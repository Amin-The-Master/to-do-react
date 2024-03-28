import './Form.css'
import closeIcon from '../icons/close.svg'

const Form = (props) => {
    return (
        <>
            <form onSubmit={props.onSubmit} className="add-task-form rounded bg-[#2C2C2C] text-[#F4F2FF] lg:p-10 md:p-6 p-3">
                <div className='flex'>
                    <p className="
                    mr-auto 
                    font-sans
                    font-bold 
                    text-2xl 
                    text-[#fff]">{props.formType}</p>
                    <button onClick={props.closeForm} className="close flex ml-auto w-10 text-white">
                        <img className="text-white" src={closeIcon} alt="close" />
                    </button>
                </div>
                <div className="flex mt-6">
                    <h2 className="font-sans font-bold lg:text-3xl sm:text-2xl">Task:</h2>
                    <input ref={props.taskName} id="taskName" 
                    className="font-sans lg:text-2xl ml-auto p-2 text-[#2B1887]" type="text" />
                </div>
                <div className="flex mt-6">
                    <h2 className="font-sans font-bold lg:text-3xl sm:text-2xl md:mr-3">Client or Project:</h2>
                    <input ref={props.taskCorP} id="taskCorP" 
                    className="font-sans ml-auto p-2 text-[#2B1887]" type="text" />
                </div>
                <div className="flex mt-6">
                    <h2 className="font-sans font-bold lg:text-3xl sm:text-2xl">Priority:</h2>
                    <select ref={props.Priority} className="priority ml-auto p-3 bg-[#2B1887]">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div className="flex mt-6">
                    <h2 className="font-sans font-bold lg:text-3xl sm:text-2xl">Level:</h2>
                    <select ref={props.Level} className="level  ml-auto p-3 bg-[#2B1887]">
                        <option value="Easy">Easy</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <div className="flex mt-3">
                    <h2 className="font-sans font-bold lg:text-3xl sm:text-2xl">Day:</h2>
                    <select ref={props.Date} className="day-task ml-auto ml-3 p-3 bg-[#2B1887]">
                        <option value="None">None</option>
                        <option value="Mon">Mon</option>
                        <option value="Tue">Tue</option>
                        <option value="Wed">Wed</option>
                        <option value="Thu">Thu</option>
                        <option value="Fri">Fri</option>
                        <option value="Sat">Sat</option>
                        <option value="Sun">Sun</option>
                    </select>
                </div>

                <button type='submit' className="
                submit 
                flex 
                duration-200 
                font-sans
                font-bold 
                text-[#2B1887] 
                text-2xl 
                rounded 
                hover:rounded 
                bg-white 
                mt-3 
                mx-auto
                p-3
                hover:text-white 
                hover:bg-[#2B1887]"> 
                    submit
                </button>
        </form>
        </>
    )
};

export default Form;