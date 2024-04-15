const useCheckLocalStorage = () => {
    if(localStorage.length === 0 && !localStorage.key('toDo')) {
        localStorage.setItem('toDo',JSON.stringify([]));
        localStorage.setItem('progressing',JSON.stringify([]));
        localStorage.setItem('done',JSON.stringify([]));
    };
};

export default useCheckLocalStorage;