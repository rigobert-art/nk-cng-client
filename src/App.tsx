import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from "./layout/UserLayout";
import MthaminiForm from "./pages/details/MthaminiForm";
import Reset from './pages/welcome/Reset';
import { AuthProvider } from './context/AuthProvider';
import Home from './pages/dashboard/HomePage';
import PayPage from './pages/payment/PayPage';
import Notifications from './pages/notification/NotPage';
import { Profile } from './pages/profile/Profile';
import LoginPage from './pages/welcome/LoginPage';
// import VehicleForm from './pages/details/VehicleForm';
import RegisterPage from './pages/welcome/RegisterForm';
import OTP from './pages/welcome/OTP';
import Welcome from './pages/welcome/Welcome';
import PersonalForm from './pages/details/PersonalForm';
import LoanPage from './pages/loans/LoanPage';
import ViewLoan from './pages/loans/ViewLoan';
import LoanLayout from './layout/LoanLayout';
import VehicleForm from './pages/details/VehicleForm';

function App() {

  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/pay" element={<PayPage />} />
              <Route path="/loans" element={<LoanPage/>} />
              <Route path="/loan/view" element={<ViewLoan /> } />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/profile" element={<Profile />} />
            
            </Route>
            <Route element={<LoanLayout />}>
              <Route path="/contract" element={<PersonalForm />} />
              <Route path="/personal" element={<PersonalForm />} />
              <Route path="/guarantor" element={<MthaminiForm />} />
              <Route path="/Vehicle" element={<VehicleForm />} />
            </Route>
            {/* <Route path="/" element={<Welcome />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path='/verify' element={<OTP />} />
            <Route path='/welcome' element={<Welcome />} />
            


          </Routes>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
