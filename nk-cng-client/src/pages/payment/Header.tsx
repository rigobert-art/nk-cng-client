import { MdDashboard, MdHelpOutline, MdHome, MdPayment } from "react-icons/md";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center h-[120px] bg-[#72c053] text-white lg:px-12">
            <div className="lg:px-8 text-bold">
                <Link to="/" className="flex items-center gap-x-1 px-6">
                    <MdHome size={22} />
                    <p className="text-md">Home</p>
                </Link>
                <p className="font-semibold text-3xl mt-2 px-12">Wallet</p>
            </div>
   
            <div>
                <div className="flex items-center px-4 gap-x-4 mt-8">
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

                </div>
            </div>
        </header>
    );
};

export default Header;