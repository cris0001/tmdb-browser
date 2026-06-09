import {createBrowserRouter} from 'react-router-dom'

import {RootLayout} from '@/components/layout/RootLayout'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <div className="text-zinc-400">Welcome to Movie Browser</div>,
            },
        ],
    },
])