import React from 'react';
import '../Styles/EmptyPage.css';
import { FcTodoList } from 'react-icons/fc';

const EmptyPage = () => {
    return (
        <div className='empty-page flex-center flex-col'>
            <FcTodoList className='image' />
            <h1>Your todo list is empty...</h1>
            <p>Add a new todo by clicking the plus button in the bottom right corner.</p>
        </div>
    )
}

export default EmptyPage