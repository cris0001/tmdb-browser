import { z } from 'zod'

export const movieSchema = z.object({
  id: z.number(),
  title: z.string(),
  overview: z.string(),
  poster_path: z.string().nullable(),
  backdrop_path: z.string().nullable(),
  release_date: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
  genre_ids: z.array(z.number()),
  popularity: z.number(),
})

export const movieDetailsSchema = movieSchema.extend({
  genres: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    }),
  ),
  runtime: z.number().nullable(),
  tagline: z.string().nullable(),
  status: z.string(),
  budget: z.number(),
  revenue: z.number(),
})

export const genreSchema = z.object({
  id: z.number(),
  name: z.string(),
})

export type Movie = z.infer<typeof movieSchema>
export type MovieDetails = z.infer<typeof movieDetailsSchema>
export type Genre = z.infer<typeof genreSchema>
