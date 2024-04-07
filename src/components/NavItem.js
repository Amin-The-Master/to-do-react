import { NavLink } from "react-router-dom";
const NavItem = (props) => {
    const classes = "font-sans font-bold sm:text-2lg text-2xl text-[#fff]";
    const isActive = ({ isActive }) =>
    isActive ? 'rounded bg-white p-3 text-[#2B1887]' : undefined;
    return (
        <li className={props.name === 'Inprogress' || props.name === 'To Do' ? classes + ' ml-3 mr-3 ' : classes}>
        <NavLink to={props.url} className={isActive}>{props.name}</NavLink></li>
    )
}
export default NavItem;