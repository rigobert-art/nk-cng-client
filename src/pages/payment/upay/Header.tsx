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