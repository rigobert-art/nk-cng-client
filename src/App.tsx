import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from "./layout/UserLayout";
import Login from "./pages/welcome/UserLogin";
import Register from "./pages/welcome/Register";
import Details from './pages/welcome/Details';
import Reset from './pages/welcome/Reset';
import { AuthProvider } from './context/AuthProvider';
import AdminLayout from './layout/AdminLayout';
import UserPage from './pages/users/UserPage';
import LoanPage from "./pages/payment/admin/LoanPage"
import VehiclePage from './pages/vehicle/VehiclePage';
import Report from './pages/report/Report';
import DashLayout from './layout/DashLayout';
import Dashboard from './pages/dashboard/adash/DashBoard';
import Map from './pages/map/Map';
import MapLayout from './layout/MapLayout';
import Home from './pages/dashboard/udash/Home';
import PayPage from './pages/payment/user/PayPage';
import Notifications from './pages/notification/Notifications';
import {Profile} from './pages/profile/Profile';

function App() {
  
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/user/home" element={<Home />} />
              <Route path="/user/payment" element={<PayPage />} />
              <Route path="/user/notifications" element={<Notifications />} />
              <Route path="/user/profile" element={<Profile />} />
            </Route>
            <Route element={<AdminLayout />} >
              <Route path="/admin/user" element={<UserPage />} />
              <Route path="/admin/payment" element={<LoanPage />} />
              <Route path="/admin/vehicles" element={<VehiclePage />} />
              <Route path="/admin/report" element={<Report />} />
            </Route>

            <Route element={<DashLayout />} >
              <Route path='/admin/overview' element={<Dashboard />} />
            </Route>

            <Route element={<MapLayout/>}>
              <Route path="/admin/map" element={<Map />} />
            </Route>
            {/* <Route path="/" element={<Welcome />} /> */}
            <Route path="/user" element={<Login />} />
            <Route path="/admin" element={<Login />} />
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
