import { Routes, Route } from 'react-router-dom';
import Start from '@routes/Start';
import Login from '@routes/Login';
import '@styles/style.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
    
  )
}

export default App
