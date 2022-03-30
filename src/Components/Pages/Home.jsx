import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from '../Utilities/Todo';
import Modal from '../Utilities/Modal';
import '../Styles/Home.css';
import { useModal } from '../Providers/ModalProvider';
import { useTodos } from '../Providers/TodoProvider';

const Home = () => {
    const { modalOpen, setModalOpen } = useModal();
    const { todos } = useTodos();
    const [ rotation, setRotation ] = useState(0);
    const [ searchQuery, setSearchQuery ] = useState('');

    const toggleModal = e => {
        setModalOpen(modalOpen.status === false ? {...modalOpen, status: true, data: { ...modalOpen.data, todoId: '', todoTitle: '', todoDesc: '', todoAlloted: '', todoTags: '', todoCreatedAt: ''  }} : {...modalOpen, status: false, data: { ...modalOpen.data, todoId: '', todoTitle: '', todoDesc: '', todoAlloted: '', todoTags: '', todoCreatedAt: ''  }})
    }

    useEffect(() => {
        setRotation(modalOpen.status === true ? 45 : 0)
    }, [modalOpen])

    return (
        <>
            <nav className='navbar flex-center'>
                <h1>TODOS</h1>
                <input type='search' placeholder='Search by tags...' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            </nav>
            <div className='container flex flex-col align-center justify-start'>
                <div className='todos-container flex flex-col align-center justify-center'>
                    {
                        todos.todos.length !== 0 ? todos.todos.map(todo => todo.tags.filter(tag => tag.indexOf(searchQuery) !== -1).length > 0 && (
                            <Todo key={todo.id} todo={todo} />
                        )) : (
                            <p>Add a new todo to get started.</p>
                        )
                    }
                </div>
                {
                    modalOpen.status && (
                        <Modal data={modalOpen.data} />
                    )
                }
                <button className='btn add-todo flex-center' style={{ transform: `rotate(${rotation}deg)` }} onClick={toggleModal}>
                    <AiOutlinePlus />
                </button>
            </div>
        </>
    )
}

export default Home;