import axios from 'axios'
import type { AxiosError, InternalAxiosRequestConfig } from 'axios'
import { env } from '@/config/env'

export const apiClient = axios.create({
  baseURL: env.VITE_TMDB_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor — adds API key to request
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.params = {
      ...config.params,
      api_key: env.VITE_TMDB_API_KEY,
    }

    if (import.meta.env.DEV) {
      console.log(`🚀 [API] ${config.method?.toUpperCase()} ${config.url}`, config.params)
    }

    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

// Response interceptor — global error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (import.meta.env.DEV) {
      console.error(`❌ [API] ${error.response?.status}`, error.message)
    }

    if (error.response?.status === 401) {
      console.error('Invalid TMDB API key')
    }

    if (error.response?.status === 404) {
      console.error('Resource not found')
    }

    return Promise.reject(error)
  },
)
