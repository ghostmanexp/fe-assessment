import { forwardRef } from 'react';

interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <textarea
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

FormTextArea.displayName = 'FormTextArea';
