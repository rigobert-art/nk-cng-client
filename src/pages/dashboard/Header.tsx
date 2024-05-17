import { MdDashboard, MdHelpOutline, MdPayment, MdWbSunny } from "react-icons/md";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center h-[120px] bg-[#72c053] text-white px-4 lg:px-12">
            <div className="text-white text-start mx-auto lg:px-8 text-bold">
                <div className="flex items-center gap-x-1 px-6 tracking-tight">
                    <MdWbSunny size={22} />
                    <p className="text-md">Good Morning</p>
                </div>
                <p className="font-semibold text-2xl mt-2 px-6">Mr. Vicent Richard</p>
            </div>
            <div
                aria-hidden="true"
                className="absolute top-0 inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
            >
                <div className="blur-[106px] h-56 bg-gradient-to-br from-teal-500 to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
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
                <div className="border-2 p-1 border-gray-300 rounded-full mb-8">
                    <img
                        src={require("../../assets/profile.jpg")}
                        alt="profile"
                        className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-red-700 dark:ring-offset-gray-100"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
