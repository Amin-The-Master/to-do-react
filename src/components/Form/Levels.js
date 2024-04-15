import { forwardRef } from "react";
const LevelsSlide = forwardRef((props,ref) => {
    return <select id={props.id} ref={ref} className="level  ml-auto p-3 bg-[#2B1887]">
    <option value="Easy">Easy</option>
    <option value="Moderate">Moderate</option>
    <option value="Hard">Hard</option>
    </select>
})

export default LevelsSlide;