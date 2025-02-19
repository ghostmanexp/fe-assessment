import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "./schema";
import ContactAgentFormPresenter from "./ContactAgentFormPresenter";

export default function ContactAgentFormContainer() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur"
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <ContactAgentFormPresenter
      register={register}
      errors={errors}
      isSubmitting={isSubmitting}
      isSubmitSuccessful={isSubmitSuccessful}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
}
