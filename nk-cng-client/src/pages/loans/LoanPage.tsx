import Header from './Header';
import { FiArrowRight, } from 'react-icons/fi';



interface Loan{
    id: number
    loan_type: string,
    // total_loan: string,
    // duration: string,
    balance: string
 }

const loans: Loan[] = [
    { id: 1, loan_type: 'NK CNG Automotive Loan', balance: "TZS 0" },
  
];
// const navigate = useNavigate()

// const [ selectedLoan, setSelectedLoan ] = useState<Loan | null>()

const handleSelectedLoan = () => {
    // setSelectedLoan(loan)    
    // navigate("/loan/view")

}   



const LoanPage = () => {
    return (
        <>
            <Header />
            <main className='max-w-screen-xl mx-auto mt-10 overflow-auto px-6 sm:px-8 md:px-12 font-serif lg:px-24'>
                <div className='mb-4'>
                  
                    <p className='text-gray-500 text-base '>All Loans</p>

                </div>
        
                {loans.map((loan, index) => (
                    <div  className='flex w-full justify-between items-center text-md rounded-md border-[1px] mb-6 px-4 py-2 border-gray-300 text-green-800' key={index}>
                        <div className='mr-8'>
                            <p className='flex-grow text-xs md:text-sm'>{loan.loan_type}</p>
                            <p className='font-bold text-2xl ml-2'>{loan.balance}</p>
                        </div>
                        
                        <FiArrowRight className='w-8 h-8' onClick={handleSelectedLoan} />
                    </div>
                ))}
            </main>
        </>
    );
}

export default LoanPage;
