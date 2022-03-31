import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTodos } from '../Providers/TodoProvider';
import { useTheme } from '../Providers/ThemeProvider';
import '../Styles/TodoPage.css';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { VscDebugStart } from 'react-icons/vsc';
import { MdOutlineRestartAlt } from 'react-icons/md';
import { AiOutlinePause } from 'react-icons/ai';

const TodoPage = () => {
    const { id } = useParams();
    const { todos } = useTodos();
    const { theme } = useTheme();
    const [ currentTodo, setCurrentTodo ] = useState({});
    const [ timer, setTimer ] = useState({
        minutes: 0,
        seconds: 0
    });
    const [ timerOn, setTimerOn ] = useState(false);
    const [ colorId, setColorId ] = useState('');

    const { minutes, seconds } = timer;

    useEffect(() => {
        setCurrentTodo({...todos.todos.filter(todo => todo.id === id )[0]});
    }, [id, todos]);

    useEffect(() => {
        setTimer({ minutes: +currentTodo.alloted, seconds: 0 });
    }, [currentTodo]);

    useEffect(() => {
        setColorId(theme === 'dark' ? '' : 'black-color');
    }, [theme]);

    useEffect(() => {
        document.title = `${minutes}m : ${seconds < 10 ? 0 : ''}${seconds}s || POMODORO`;
        if(timerOn) {
            if(minutes === 0 && seconds === 0) {
                setTimerOn(false);
            } else if(seconds === 0) {
                setTimeout(
                    () => setTimer({ ...timer, seconds: 59, minutes: minutes - 1 }),
                    1000
                );
                document.title = `${minutes}m : ${seconds < 10 ? 0 : ''}${seconds}s || POMODORO`;
            } else {
                setTimeout(
                    () => setTimer({ ...timer, seconds: seconds - 1 }),
                    1000
                );
                document.title = `${minutes}m : ${seconds < 10 ? 0 : ''}${seconds}s || POMODORO`;
            }
        }
    }, [timer, timerOn, minutes, seconds]);

    const resetTimer = e => {
        window.location.reload(false);
    }

    const date = Date(currentTodo.createdAt).split(' ');
    let creationDate = date[0] + ' ' + date[2] + ' ' + date[1] + ' ' + date[3];

    return (
        <div id={colorId}>
            <div className='todo-page flex-center'>
                <div className='todo-page-left flex-center flex-col'>
                    <div className='progress-bar'>
                        <CircularProgressbarWithChildren
                            value={minutes * 60 + seconds}
                            minValue={0}
                            strokeWidth={5}
                            background={true}
                            maxValue={currentTodo.alloted * 60}
                            styles={buildStyles({
                                strokeLinecap: 'round',
                                textSize: '0.75rem',
                                pathTransitionDuration: 1,
                                pathColor: `${(minutes * 60 + seconds) < ((currentTodo.alloted * 60) / 4) ? 'var(--red-color)' : 'var(--green-color)'}`,
                                trailColor: `var(--${theme === 'dark' ? 'black' : 'white'}-color)`,
                                transition: 'var(--default-transition)',
                                backgroundColor: `var(--${theme === 'dark' ? 'black' : 'white'}-color)`
                            })}>
                                <div className={`flex-center flex-col ${theme === 'dark' ? 'timer' : 'timer-light'}`}>
                                    <h1 style={{color: `${(minutes * 60 + seconds) < ((currentTodo.alloted * 60) / 4) ? 'var(--red-color)' : 'var(--green-color)'}`}}>{`${minutes}m : ${seconds < 10 ? 0 : ''}${seconds}s`}</h1>
                                    <h3>{`Out of ${currentTodo.alloted} minutes`}</h3>
                                </div>
                            </CircularProgressbarWithChildren>
                    </div>
                    <div className='buttons flex-row-wrap align-center justify-center'>
                        <button className='btn btn-start flex-center' onClick={e => setTimerOn(true)}> <VscDebugStart className='icon' /> Start</button>
                        <button className='btn btn-pause flex-center' onClick={e => setTimerOn(false)}> <AiOutlinePause className='icon' /> Pause</button>
                        <button className='btn btn-restart flex-center' onClick={resetTimer}> <MdOutlineRestartAlt className='icon' /> Restart</button>
                    </div>
                </div>
                <div className='todo-page-right flex flex-col align-start justify-start '>
                    <h1>{currentTodo.title}</h1>
                    {
                        currentTodo.desc && <p className='description'>{currentTodo.desc}</p>
                    }
                    <h3>TAGS:</h3>
                    <div className='todo-tags flex-row-wrap align-center justify-start'>
                        {
                            currentTodo.tags && currentTodo.tags.filter(tag => tag !== '').length > 0 ? currentTodo.tags.map((tag, idx) => (
                                <div key={idx} className='tag'>
                                <h5><span className='apos'>❛</span> {tag} <span className='apos'>❜</span></h5>
                                </div>
                            )) : (
                                <p>None</p>
                            )
                        }
                    </div>
                    <h4>Created At: { creationDate }</h4>
                </div>
            </div>
        </div>
    )
}

export default TodoPage;