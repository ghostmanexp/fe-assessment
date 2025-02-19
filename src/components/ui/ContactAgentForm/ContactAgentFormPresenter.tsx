import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ContactFormData } from "./schema";
import { FormInput } from "./FormInput";
import { FormTextArea } from "./FormTextArea";

interface ContactAgentFormPresenterProps {
  register: UseFormRegister<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export default function ContactAgentFormPresenter({
  register,
  errors,
  isSubmitting,
  isSubmitSuccessful,
  onSubmit,
}: ContactAgentFormPresenterProps) {
  return (
    <form onSubmit={onSubmit} className="mt-4 space-y-4" noValidate>
      <FormInput
        label="Full Name"
        {...register("fullName")}
        error={errors.fullName?.message}
      />

      <FormInput
        label="Email"
        type="email"
        {...register("email")}
        error={errors.email?.message}
      />

      <FormInput
        label="Phone Number"
        type="tel"
        {...register("phone")}
        error={errors.phone?.message}
      />

      <FormTextArea
        label="Comments"
        {...register("comments")}
        error={errors.comments?.message}
        maxLength={250}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-2 px-4 rounded transition-colors ${
          isSubmitting
            ? "bg-blue-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        } text-white`}
      >
        {isSubmitting ? "Sending..." : "Contact Now"}
      </button>

      {isSubmitSuccessful && (
        <p className="text-green-500 text-sm mt-2" role="alert">
          Message sent successfully!
        </p>
      )}
    </form>
  );
}
