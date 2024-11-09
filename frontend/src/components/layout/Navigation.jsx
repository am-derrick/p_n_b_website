import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation();

    const navigation = [
        { name: 'Home', path: '/' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    const isCurrentPath = (path) => {
        return location.pathname == path;
    };

    return (
        <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                <div className="flex">
                    <Link to="/" className="flex items-center">
                    <span className="text-xl font-bold text-blue-600">SalesPort</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navigation.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className={`${
                        isCurrentPath(item.path)
                            ? 'text-blue-600'
                            : 'text-gray-600 hover:text-blue-600'
                        } transition-colors duration-200 font-medium`}
                    >
                        {item.name}
                    </Link>
                    ))}
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                    <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                    >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden">
                <div className="pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className={`${
                        isCurrentPath(item.path)
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                        } block px-3 py-2 text-base font-medium transition-colors duration-200`}
                        onClick={() => setIsOpen(false)}
                    >
                        {item.name}
                    </Link>
                    ))}
                </div>
                </div>
            )}
        </nav> 
    );
};

export default Navigation;