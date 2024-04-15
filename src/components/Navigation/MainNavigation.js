import NavItem from "./NavItem";
const MainNavigation = () => {
    const navigation = [
        {name:'Home', url:'/'},
        {name:'To Do', url:'/Todo'},
        {name:'Inprogress', url:'/inprogress'},
        {name:'Done', url:'/done'}
    ];
    return (
        <header className="sm:flex-1 h-fit
        md:p-6 p-3 ">
            <nav className="">
                <ul className="flex justify-center">
                    {navigation.map(nav => {
                        return <NavItem key={nav.name} url={nav.url} name={nav.name}/>
                    })}
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation;