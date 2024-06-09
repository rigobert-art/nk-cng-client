import React, { createContext, useState, ReactNode, FC, useContext } from 'react';


interface FormContextProps {
    formData: any;
    setFormData: (data: any) => void; 
    formId: string;
    language: string;
    setFormId: React.Dispatch<React.SetStateAction<string>>;
    setLanguage: React.Dispatch<React.SetStateAction<string>>;
    
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [formData, setFormData] = useState<any>({});
    const [ formId, setFormId ] = useState<string>('');
    const [language, setLanguage] = useState<string>('EN');

    return (
        <FormContext.Provider value={{ formData, setFormData, formId, setFormId, language, setLanguage }}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = (): FormContextProps => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormContext must be used within a FormProvider');
    }
    return context;
};
