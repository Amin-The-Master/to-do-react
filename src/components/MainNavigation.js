import { NavLink } from "react-router-dom";


const MainNavigation = () => {
    return (
        <header className="sm:flex-1 h-fit
        md:p-6 p-3 ">
            <nav className="">
                <ul className="flex justify-center">
                    <li className="
                    font-sans 
                    font-bold 
                    sm:text-2lg 
                    text-2xl
                    text-[#fff]"><NavLink to='/' className={({ isActive }) =>
                    isActive ? 'rounded bg-white p-3 text-[#2B1887]' : undefined
                    }>To Do</NavLink></li>
                    <li className="
                    font-sans 
                    font-bold 
                    sm:text-2lg 
                    text-2xl
                    text-[#fff]
                    ml-3
                    mr-3"><NavLink to='/inprogress' className={({ isActive }) =>
                    isActive ? 'rounded bg-white p-3 text-[#2B1887]' : undefined
                    }>Inprogress</NavLink></li>
                    <li className=" 
                    font-sans 
                    font-bold 
                    sm:text-2lg 
                    text-2xl
                    text-[#fff]
                    "><NavLink to='/done' className={({ isActive }) =>
                    isActive ? 'rounded bg-white p-3 text-[#2B1887]' : undefined
                    }>Done</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;