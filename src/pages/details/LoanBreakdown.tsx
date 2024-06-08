import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../../context/FormProvider';
import { useAppContext } from '../../context/AppProvider';

const ContractTerms: React.FC = () => {
    const [language, setLanguage] = useState<'EN' | 'SW'>('EN');
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();
    const { setFormId } = useFormContext();
    const { setIsLoading } = useAppContext();

    const terms = {
        EN: {
            title: "LOAN BREAKDOWN",
            types: [
                {
                    name: "1. Loans through Maendeleo Bank",
                    criteria: [
                        "The original car card with the full name of the borrower.",
                        "The borrower's NIDA and it must match the name on the borrower's car card.",
                        "Residential identification through local government.",
                        "Car with registration B, C, D, E etc."
                    ],
                    duration: "3 to 18 months"
                },
                {
                    name: "2. Loans through NK CNG AUTOMOTIVE LTD",
                    criteria: [
                        "The original car card with the full name of the borrower.",
                        "The borrower's NIDA and it must match the name on the borrower's car card.",
                        "Residential identification through local government.",
                        "Car with registration B, C, D, E etc.",
                        "Two guarantors, one must be an employee; here they can attach their work identification documents and residence and NIDA or driver's license or voter's card."
                    ],
                    duration: "2 to 4 months"
                }
            ],
            vehicles: [
                {
                    type: "BAJAJI",
                    startingPrice: "1,600,000 TZS with an advance payment of 200,000 TZS, weekly repayment of 80,000 TZS"
                },
                {
                    type: "Cars",
                    criteria: [
                        "Small cars: starting price 1,900,000 TZS",
                        "Ist, Rumion, Spacio, Raum etc. with engine capacity between 690-1990 cc",
                        "Medium cars: starting price 1,000,000 to 800,000 TZS",
                        "Engine capacity 1990 – 2500 cc"
                    ]
                }
            ]
        },
        SW: {
            title: "MIKOPO NA TARATIBU ZAKE",
            types: [
                {
                    name: "Mikopo kupitia Maendeleo Bank",
                    criteria: [
                        "Kadi ya gari original ikiwa na majina kamili ya mkopaji.",
                        "Nida ya mkopaji na isome sawa saw ana kadi ya gari ya mkopaji.",
                        "Utambulisho wa makazi kuitia serikali za mtaa.",
                        "Gari lenye usajili B, C, D, E etc."
                    ],
                    duration: "miezi mi3 hadi 18"
                },
                {
                    name: "Mikopo kupitia Nk Cng Auto Ltd",
                    criteria: [
                        "Kadi ya gari original ikiwa na majina kamili ya mkopaji.",
                        "Nida ya mkopaji na isome sawa saw ana kadi ya gari ya mkopaji.",
                        "Utambulisho wa makazi kuitia serikali za mtaa.",
                        "Gari lenye usajili B, C, D, E etc.",
                        "Wadhamini wawili mmoja lazima awe muajiriwa; hapa anweza kupakia nyaraka zao za utambulisho wa kazi na makazi na nida au leseni au mpiga kura."
                    ],
                    duration: "Miezi mi2 hadi mi4"
                }
            ],
            vehicles: [
                {
                    type: "BAJAJI",
                    startingPrice: "1,600,000 TZS kianzio ni 200,000 TZS, marejesho ya wiki ni 80,000 TZS"
                },
                {
                    type: "Magari",
                    criteria: [
                        "Magari madogo: kianzio ni 1,900,000 TZS",
                        "Ist, Rumion, Spacio, Raum etc. yenye cc kati ya 690-1990",
                        "Magari ya kati: kianzio ni 1,000,000 mpaka 800,000 TZS",
                        "Cc 1990 – 2500"
                    ]
                }
            ]
        }
    };

    const handleAccept = async () => {
        try {
            const response = await axios.post('http://localhost:4000/api/v1/user/accept-terms', { accepted: true });
            console.log(response.data);
            console.log('Form ID:', response.data.formId);
            setIsLoading(true);
            setFormId(response.data.formId);
            navigate('/personal');
        } catch (error) {
            console.error('Error accepting terms:', error);
        }
    };

    return (
        <div className="p-6">
            <button onClick={() => setLanguage(language === 'EN' ? 'SW' : 'EN')} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
                {language === 'EN' ? 'Switch to Swahili' : 'Switch to English'}
            </button>
            <h1 className="text-2xl font-bold text-[#72c053] mb-8 ml-4">{terms[language].title}</h1>
            {terms[language].types.map((type, index) => (
                <div key={index} className="mb-6">
                    <h2 className="text-md font-semibold text-gray-700 mb-2">{type.name}</h2>
                    <ul className="list-disc text-gray-600 text-sm md:text-md pl-5 mb-2">
                        {type.criteria.map((criterion, index) => (
                            <li key={index}>{criterion}</li>
                        ))}
                    </ul>
                    <p className='text-sm md:text-md'><strong>Duration:</strong> {type.duration}</p>
                </div>
            ))}
            <h2 className="text-xl text-gray-700 font-semibold mb-2">Vehicles</h2>
            <ul className="list-disc text-sm md:text-md text-gray-600 pl-5 mb-4">
                {terms[language].vehicles.map((vehicle, index) => (
                    <li key={index}>
                        {vehicle.type}: {vehicle.startingPrice}
                        {vehicle.criteria && (
                            <ul className="list-disc pl-5">
                                {vehicle.criteria.map((criterion, index) => (
                                    <li key={index}>{criterion}</li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
            <div className="flex items-center mb-4">
                <input type="checkbox" id="accept" checked={accepted} onChange={() => setAccepted(!accepted)} className="mr-2" />
                <label htmlFor="accept">I accept the terms and conditions</label>
            </div>
            <button onClick={handleAccept} disabled={!accepted} className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-400">
                Accept
            </button>
        </div>
    );
};

export default ContractTerms;
