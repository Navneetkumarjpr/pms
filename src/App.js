import logo from './logo.svg';
import './App.css';
import LoginForm from './components/login/LoginForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path='/login' element={<LoginForm/>}/>
        </Routes>
    </div>
  );
}

export default App;
