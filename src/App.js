import Home from "./Components/Pages/Home";
import TodoPage from "./Components/Pages/TodoPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/:id" element={<TodoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
