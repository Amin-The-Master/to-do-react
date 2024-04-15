import closeIcon from '../../assests/close.svg';
import SubmitBtn from '../Btns/SubmitBtn';
import Days from './Days';
import Levels from './Levels';
import PrioritySlide from './Priority';
import Input from './Input';

const Form = (props) => {
    return (
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
                <Input ref={props.taskName} id={'taskName'}/>
            </div>
            <div className="flex mt-6">
                <h2 className="font-sans font-bold lg:text-3xl sm:text-2xl md:mr-3">Client or Project:</h2>
                <Input ref={props.taskCorP} id={'taskCorP'}/>
            </div>
            <div className="flex mt-6">
                <h2 className="font-sans font-bold lg:text-3xl sm:text-2xl">Priority:</h2>
                <PrioritySlide ref={props.taskPriority}/>
            </div>
            <div className="flex mt-6">
                <h2 className="font-sans font-bold lg:text-3xl sm:text-2xl">Level:</h2>
                <Levels ref={props.taskLevel} />
            </div>
            <div className="flex mt-3">
                <h2 className="font-sans font-bold lg:text-3xl sm:text-2xl">Day:</h2>
                <Days ref={props.taskDate}/>
            </div>

            <SubmitBtn />
        </form>
    )
}

export default Form;