import { forwardRef } from "react";
const PrioritySlide = forwardRef((props,ref) => {
    return <select ref={ref} className="priority ml-auto p-3 bg-[#2B1887]">
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
</select>
})

export default PrioritySlide;