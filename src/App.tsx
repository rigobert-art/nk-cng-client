import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from "./layout/UserLayout";
import MthaminiForm from "./pages/welcome/MthaminiForm";
import Details from './pages/details/DetailsPage';
import Reset from './pages/welcome/Reset';
import { AuthProvider } from './context/AuthProvider';
import Home from './pages/dashboard/HomePage';
import PayPage from './pages/payment/PayPage';
import Notifications from './pages/notification/NotPage';
import { Profile } from './pages/profile/Profile';
import LoginPage from './pages/welcome/LoginPage';
import LoanSelection from './pages/details/LoanSelectionPage';
import VehicleForm from './pages/welcome/VehicleForm';
import RegisterPage from './pages/welcome/RegisterPage';

function App() {

  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/selection" element={<LoanSelection />} />
              <Route path="/home" element={<Home />} />
              <Route path="/payment" element={<PayPage />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path='/vehicle' element={<VehicleForm />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/details" element={<Details />} />
              <Route path="/mthamini" element={<MthaminiForm />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>
            {/* <Route path="/" element={<Welcome />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reset" element={<Reset />} />
           

          </Routes>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
