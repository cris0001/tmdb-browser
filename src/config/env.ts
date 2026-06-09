import { z } from 'zod'

const envSchema = z.object({
    VITE_TMDB_API_KEY: z.string().min(1, 'TMDB API key is required!'),
    VITE_TMDB_BASE_URL: z.string().url().default('https://api.themoviedb.org/3'),
    VITE_TMDB_IMAGE_BASE_URL: z.string().url().default('https://image.tmdb.org/t/p'),
})

const parsed = envSchema.safeParse(import.meta.env)

if (!parsed.success) {
    console.error('Invalid env variables:', parsed.error.flatten().fieldErrors)
    throw new Error('Invalid env variables')
}

export const env = parsed.data