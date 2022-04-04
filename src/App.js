import Home from './Components/Pages/Home';
import TodoPage from './Components/Pages/TodoPage';
import ErrorPage from './Components/Pages/ErrorPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo/:id' element={<TodoPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
