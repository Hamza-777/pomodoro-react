import React from 'react';
import '../Styles/EmptyPage.css';
import { useTheme } from '../Providers/ThemeProvider';
import { FcTodoList } from 'react-icons/fc';

const EmptyPage = () => {
    const { theme } = useTheme();

    return (
        <div className='empty-page flex-center flex-col'>
            <FcTodoList className='image' />
            <h1 style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Your todo list is empty...</h1>
            <p style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Add a new todo by clicking the plus button in the bottom right corner.</p>
        </div>
    )
}

export default EmptyPage