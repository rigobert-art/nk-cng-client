import React, { createContext, useState, ReactNode, FC, useContext } from 'react';

interface FormState {
    [key: string]: any;

}

interface FormContextProps {
    formState: FormState;
    setFormState: React.Dispatch<React.SetStateAction<FormState>>; 
    formId: string;
    setFormId: (formId: string) => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [formState, setFormState] = useState<FormState>({});
    const [ formId, setFormId ] = useState<string>('')

    return (
        <FormContext.Provider value={{ formState, setFormState, formId, setFormId }}>
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
