import { FiPlusCircle } from "react-icons/fi";
import { MdDashboard, MdHelpOutline, MdHome, MdPayment, MdWbSunny } from "react-icons/md";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center h-[120px] bg-[#72c053] text-white px-4 lg:px-12">
           <div className="lg:px-8 text-bold">
              
                <p className="font-semibold text-3xl mt-2 px-12">Dashboard</p>
            </div>
            <div className="flex items-center gap-x-4 mt-8">
                <Link to="/home" className="hidden lg:flex gap-x-1 font-bold items-center text-base">
                    <MdDashboard size={24} />
                    <p>Dashboard</p>
                </Link>
                <Link to="/payment" className="hidden lg:flex gap-x-1 font-bold items-center text-base">
                    <MdPayment size={24} />
                    <p>Payment</p>
                </Link>
                <Link to="https://nkcngautomotive.com/contact" className="hidden lg:flex gap-x-1 font-bold items-center text-base">
                    <MdHelpOutline size={24} />
                    <p>Support</p>
                </Link>
                <Link to="/details" className="border-2  border-reg-300 duration-200 rounded-full ">
                   <FiPlusCircle className="w-8 h-8"/>
                </Link>
            </div>
        </header>
    );
};

export default Header;
