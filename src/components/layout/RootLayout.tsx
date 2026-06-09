import {Outlet} from 'react-router-dom'

import {Navbar} from './Navbar'

export function RootLayout() {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900">
            <Navbar/>
            <main className="max-w-7xl mx-auto px-4 py-8">
                <Outlet/>
            </main>
        </div>
    )
}