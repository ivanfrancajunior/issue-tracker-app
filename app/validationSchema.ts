import { z } from "zod";

export const issueSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required and needs to be at least 1 character.")
    .max(255),
  description: z.string().min(1, "Description is required.").max(255),
});
