import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-lg relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="/" className="flex items-center py-4 px-2">
                <img src="https://avatars.githubusercontent.com/u/136876808?s=96&v=4" alt="" className="h-10 w-10 mr-2 rounded-full" />
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a href="#home" className="py-4 px-2 text-gray-500 font-semibold hover:text-black transition duration-300">Home</a>
            <a href="#about" className="py-4 px-2 text-gray-500 font-semibold hover:text-black transition duration-300">About</a>
            <a href="#projects" className="py-4 px-2 text-gray-500 font-semibold hover:text-black transition duration-300">Projects</a>
            <a href="#contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-black transition duration-300">Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-500" />
              ) : (
                <Menu className="h-6 w-6 text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <ul className="">
            <li onClick={toggleMenu}><a href="#home" className="block text-sm px-5 py-4 mt-4 text-gray-500 hover:bg-black hover:text-white">Home</a></li>
            <li onClick={toggleMenu}><a href="#about" className="block text-sm px-5 py-4 text-gray-500 hover:bg-black hover:text-white">About</a></li>
            <li onClick={toggleMenu}><a href="#projects" className="block text-sm px-5 py-4 text-gray-500 hover:bg-black hover:text-white">Projects</a></li>
            <li onClick={toggleMenu}><a href="#contact" className="block text-sm px-5 py-4 text-gray-500 hover:bg-black hover:text-white">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  )
}