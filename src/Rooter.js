import { Outlet } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";


const Rooter = () => {
    return <>
        <MainNavigation />
        <main>
            <Outlet />
        </main>
    </>
}

export default Rooter;