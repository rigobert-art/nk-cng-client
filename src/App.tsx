import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from "./layout/UserLayout";
import Register from "./pages/welcome/Register";
import Details from './pages/welcome/Details';
import Reset from './pages/welcome/Reset';
import { AuthProvider } from './context/AuthProvider';
import Home from './pages/dashboard/HomePage';
import PayPage from './pages/payment/PayPage';
import Notifications from './pages/notification/NotPage';
import { Profile } from './pages/profile/Profile';
import LoginPage from './pages/welcome/LoginPage';

function App() {

  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/payment" element={<PayPage />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            {/* <Route path="/" element={<Welcome />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/details" element={<Details />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
