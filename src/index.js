import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TodoProvider } from './Components/Providers/TodoProvider';
import { ModalProvider } from './Components/Providers/ModalProvider';
import { ThemeProvider } from './Components/Providers/ThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <ModalProvider>
        <TodoProvider>
          <App />
        </TodoProvider>
      </ModalProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);