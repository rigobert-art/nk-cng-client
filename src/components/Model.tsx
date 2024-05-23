// src/components/CustomModal.tsx
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface CustomModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAccept: () => void;
    onCancel: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose, onAccept, onCancel }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-md shadow-lg w-full max-w-lg">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-medium text-gray-800">Contract Agreement</h2>
                    <button onClick={onClose} className="p-2 text-gray-400 rounded-md hover:bg-gray-100">
                        <AiOutlineClose className="w-5 h-5" />
                    </button>
                </div>
                <div className="p-4">
                    <p>This contract is an agreement between the lender and the borrower. The borrower agrees to the terms and conditions outlined by the lender, including timely repayments, interest rates, and any penalties for late payments.</p>
                    <p>By accepting this contract, the borrower acknowledges their understanding and agreement to abide by these terms. Failure to comply with these terms may result in legal action or additional penalties as outlined in the agreement.</p>
                </div>
                <div className="flex items-center justify-end gap-3 p-4 border-t">
                    <button onClick={onAccept} className="px-6 py-2 text-white bg-indigo-600 rounded-md">
                        Accept
                    </button>
                    <button onClick={onCancel} className="px-6 py-2 text-gray-800 border rounded-md">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomModal;
