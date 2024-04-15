import { forwardRef } from "react";
const Days = forwardRef((props,ref) => {
    return <select id={props.id} ref={ref} className="day-task ml-auto ml-3 p-3 bg-[#2B1887]">
        <option value="None">None</option>
        <option value="Mon">Mon</option>
        <option value="Tue">Tue</option>
        <option value="Wed">Wed</option>
        <option value="Thu">Thu</option>
        <option value="Fri">Fri</option>
        <option value="Sat">Sat</option>
        <option value="Sun">Sun</option>
    </select>
})

export default Days;