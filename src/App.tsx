import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from "./layout/UserLayout";
import Login from "./pages/welcome/Login";
import Register from "./pages/welcome/Register";
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
            {/* <Route path="/" element={<Welcome />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/details" element={<Details />} />
            <Route path="/register" element={<Register /> } />
          </Routes>
        </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
