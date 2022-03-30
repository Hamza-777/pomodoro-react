import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TodoProvider } from './Components/Providers/TodoProvider';
import { ModalProvider } from './Components/Providers/ModalProvider';

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);