import {useState} from 'react'
import {Link} from 'react-router-dom'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="border-b border-zinc-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* logo */}
                    <Link to="/" className="flex items-center gap-2 font-bold text-zinc-900 text-lg">
                        Movie Browser
                    </Link>

                    {/* desktop */}
                    <div className="hidden sm:flex items-center gap-1">
                        <Link
                            to="/"
                            className="px-3 py-2 rounded-lg text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                        >
                            Movies
                        </Link>
                        <Link
                            to="/favorites"
                            className="px-3 py-2 rounded-lg text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                        >
                            Favorites
                        </Link>
                        <Link
                            to="/contact"
                            className="px-3 py-2 rounded-lg text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* mobile burger */}
                    <button
                        className="sm:hidden p-2 rounded-lg text-zinc-600 hover:bg-zinc-100"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <XMarkIcon className="w-5 h-5"/> : <Bars3Icon className="w-5 h-5"/>}
                    </button>
                </div>

                {/* mobile menu */}
                {isOpen && (
                    <div className="sm:hidden border-t border-zinc-200 py-4 flex flex-col gap-1">
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="px-3 py-2 rounded-lg text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                        >
                            Movies
                        </Link>
                        <Link
                            to="/favorites"
                            onClick={() => setIsOpen(false)}
                            className="px-3 py-2 rounded-lg text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                        >
                            Favorites
                        </Link>
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="px-3 py-2 rounded-lg text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                        >
                            Contact
                        </Link>
                    </div>
                )}
            </div>
        </header>
    )
}