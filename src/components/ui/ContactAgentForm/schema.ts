import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string()
    .min(3, "Full name must be at least 3 characters")
    .max(50, "Full name must be less than 50 characters"),
  email: z.string()
    .email("Invalid email format"),
  phone: z.string()
    .min(5, "Phone number must be at least 5 digits")
    .regex(/^\d+$/, "Phone must contain only numbers"),
  comments: z.string()
    .min(10, "Comments must be at least 10 characters")
    .max(250, "Comments must be less than 250 characters")
});

export type ContactFormData = z.infer<typeof contactSchema>;
