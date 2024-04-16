import { forwardRef } from "react";
const Selcet = forwardRef((props,ref) => {
    const priority= ['Low','Medium','High'];
    const level= ['Easy','Moderate','Hard'];
    const days= ["None","Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

    const optionFunc = (value) => {
        if(value === 'Priority') {
            return priority.map(option => <option key={option}>{option}</option>)
        }
        if(value === 'Level') {
            return level.map(option => <option key={option}>{option}</option>)
        }
        if(value === 'Days') {
            return days.map(option => <option key={option}>{option}</option>)
        }
    }
    
    return <select id={props.id} ref={ref} className="ml-auto p-3 bg-[#2B1887]">
    {optionFunc(props.options)}
    </select>
})

export default Selcet;