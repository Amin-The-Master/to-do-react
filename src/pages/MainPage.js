import useCheckLocalStorage from '../hooks/useCheckLocalStorage';
import Done from './DoneList/Done';
import Todo from './ToDoList/Todo';

const MainPage = () => {
    useCheckLocalStorage();
    return (
        <div className='flex'>
            <Todo />
            <Done />
        </div>
    )
};

export default MainPage;