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
import ContractTerms from './pages/details/LoanBreakdown';
import { FormProvider } from './context/FormProvider';
import useScreenWidth from './hooks/useScreenwidth';

function App() {
  const screenWidth = useScreenWidth();

  // Define the breakpoint for 'sm' screen (TailwindCSS md: 768px)
  const mdBreakpoint = 412;
  const mobileBreakpoint = 640;

  // Check if the screen width falls within the 'md' range
  const isMdScreen = screenWidth >= mdBreakpoint && screenWidth > 450;
  const isMobileScreen = screenWidth < mdBreakpoint;

  if (isMdScreen) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold">This application is not available for medium screens.</h1>
          <p>Please use a mobile device.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <AuthProvider>
        <FormProvider>
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
              <Route path="/contract" element={<ContractTerms />} />
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
        </FormProvider>
      </AuthProvider>

    </div>
  );
}

export default App;
