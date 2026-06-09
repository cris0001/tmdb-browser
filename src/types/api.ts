import { z } from 'zod'

// Paginated response wrapper — TMDB returns this for all list endpoints
export const paginatedResponseSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    page: z.number(),
    results: z.array(itemSchema),
    total_pages: z.number(),
    total_results: z.number(),
  })

export type PaginatedResponse<T> = {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}
