import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import '../Styles/Todo.css';
import { useTodos } from '../Providers/TodoProvider';
import { useModal } from '../Providers/ModalProvider';
import { Link } from 'react-router-dom';

const Todo = ({ todo: { id, title, desc, tags, alloted, createdAt } }) => {
    const { dispatch } = useTodos();
    const { modalOpen, setModalOpen } = useModal();

    const deleteTodo = e => {
        dispatch({
            type: 'DELETE_TODO',
            payload: id
        });
    }

    const editTodo = e => {
        setModalOpen({ ...modalOpen, data: { ...modalOpen.data, todoId: id, todoTitle: title, todoDesc: desc, todoAlloted: alloted, todoTags: tags.join(', '), todoCreatedAt: createdAt  }, status: true });
    }

    return (
        <div className='todo flex flex-col align-start justify-center'>
            <Link to={`/todo/${id}`} className='todo-title'>{title}</Link>
            <p className='todo-desc'>{desc.charAt(0).toUpperCase() + desc.slice(1)}</p>
            <div className='todo-tags flex-row-wrap align-center justify-start'>
                <h5>TAGS: </h5>
                {
                    tags && tags.map((tag, idx) => (
                        <div key={idx} className='tag'>
                            <h5><span className='apos'>❛</span> {tag} <span className='apos'>❜</span></h5>
                        </div>
                    ))
                }
            </div>
            <div className='todo-icons flex-center'>
                <FaRegEdit className='icon icon-edit' onClick={editTodo} />
                <RiDeleteBin5Line className='icon icon-delete' onClick={deleteTodo} />
            </div>
        </div>
    )
}

export default Todo