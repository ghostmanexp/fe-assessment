import { forwardRef } from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <input
          ref={ref}
          {...props}
          placeholder={label}
          className="w-full p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={label}
          aria-invalid={error ? "true" : "false"}
        />
        {error && (
          <p className="text-red-500 text-sm" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';
