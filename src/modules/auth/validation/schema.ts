



import { z } from 'zod';

export const RegisterSchema = z
  .object({
    userName: z.string(),
    email: z.string(),
    password: z.string(),
  })
  .required();

export type CreateCatDto = z.infer<typeof RegisterSchema>;
