import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from "./layout/MainLayout";
import Login from "./pages/welcome/Login";
import Welcome from "./pages/welcome/Welcome";
import Details from './pages/welcome/Details';
import Reset from './pages/welcome/Reset';
import { AuthProvider } from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="*" element={<MainLayout />} />
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
