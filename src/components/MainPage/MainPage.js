import Done from '../DoneList/Done';
import InProgress from '../InProgress';
import Todo from '../ToDoList/Todo';

const MainPage = () => {
    return (
        <div className='flex'>
            <Todo />
            <Done />
        </div>
    )
};

export default MainPage;