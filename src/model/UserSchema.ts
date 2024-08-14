import { z } from 'zod';

export const UserStoreSchema = z.object({
  name: z.string().min(3, { message: 'Mandatory name field' }),
  email: z
    .string()
    .email({ message: 'Invalid e-mail format' })
    .min(1, { message: 'Mandatoty e-mail field' }),
  password: z
    .string()
    .min(3, { message: 'The password must have at least 3 characters' }),
});
