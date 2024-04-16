import closeIcon from '../../assests/close.svg';
import Selcet from './Select';
import Input from './Input';
import Button from '../Button/Button';

const Form = (props) => {
    const btnClass = "submit flex duration-200 font-sans font-bold text-[#2B1887] text-2xl rounded hover:rounded bg-white mt-3 mx-auto p-3 hover:text-white hover:bg-[#2B1887]";
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
                <Input type={'text'} ref={props.taskName} id={'taskName'}/>
            </div>
            <div className="flex mt-6">
                <h2 className="font-sans font-bold lg:text-3xl sm:text-2xl md:mr-3">Client or Project:</h2>
                <Input type={'text'} ref={props.taskCorP} id={'taskCorP'}/>
            </div>
            <div className="flex mt-6">
                <h2 className="font-sans font-bold lg:text-3xl sm:text-2xl">Priority:</h2>
                <Selcet ref={props.taskPriority} id={'taskPriority'} options={'Priority'}/>
            </div>
            <div className="flex mt-6">
                <h2 className="font-sans font-bold lg:text-3xl sm:text-2xl">Level:</h2>
                <Selcet ref={props.taskLevel} id={'taskLevel'} options={'Level'}/>
            </div>
            <div className="flex mt-3">
                <h2 className="font-sans font-bold lg:text-3xl sm:text-2xl">Day:</h2>
                <Selcet ref={props.taskDate} id={'taskDate'} options={'Days'}/>
            </div>
            <Button type='submit' className={btnClass}>Submit</Button>
        </form>
    )
}

export default Form;