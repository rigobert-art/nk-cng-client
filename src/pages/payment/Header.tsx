import { MdDashboard, MdHelpOutline, MdHome, MdPayment } from "react-icons/md";

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center h-[120px] bg-green-700 text-white lg:px-12">
            <div className="lg:px-8 text-bold">
                <div className="flex items-center gap-x-1 px-6">
                    <MdHome size={22} />
                    <p className="text-md">Home</p>
                </div>
                <p className="font-semibold text-3xl mt-2 px-12">Wallet</p>
            </div>
            <div
                aria-hidden="true"
                className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
            >
                <div className="blur-[106px] h-56 bg-gradient-to-br from-teal-500 to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
            <div>
                <div className="flex items-center px-4 gap-x-4 mt-8">
                    <div className="hidden lg:flex gap-x-1 font-bold items-center text-base">
                        <MdDashboard size={24} />
                        <p>Dashboard</p>
                    </div>
                    <div className="hidden lg:flex gap-x-1 font-bold items-center text-base">
                        <MdPayment size={24} />
                        <p>Payment</p>
                    </div>
                    <div className="hidden lg:flex gap-x-1 font-bold items-center text-base">
                        <MdHelpOutline size={24} />
                        <p>Support</p>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;