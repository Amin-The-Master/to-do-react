import { forwardRef } from "react";
const Input = forwardRef((props,ref) => {
    return <input defaultValue={props.defaultValue} ref={ref} 
    className="font-sans lg:text-2xl ml-auto p-2 text-[#2B1887]" 
    type={props.type} id={props.id}/>
})

export default Input;