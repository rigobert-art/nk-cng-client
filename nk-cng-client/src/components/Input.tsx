export const InputField: React.FC<{
    id: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
}> = ({ id, label, value, onChange, placeholder = "", required = false }) => (
    <div>
        <label htmlFor={id} className="text-sm">
            {label}
            {required && <span className='text-red-500'>*</span>}
        </label>
        <input
            id={id}
            type="text"
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={onChange}
            className="w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-green-600 dark:border-gray-300"
        />
    </div>
);