const storeInLocalStorage = (data) => {
    localStorage.setItem('theme', data);
}

const getFromLocalStorage = () => {
    return localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark';
}

export {
    storeInLocalStorage,
    getFromLocalStorage
}