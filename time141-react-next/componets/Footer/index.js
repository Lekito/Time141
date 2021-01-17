import React from 'react';
import Link from 'next/link';

function Footer() {
    return (
        <footer className=" py-2 px-4  md:py-4 items-center md:hidden w-full h-10 bg-blue-300 border-t pin-b">
            <nav className="md:hidden  space-x-8">
            <ul className="space-x-8">
                        <il className="tracking-wide hover:text-gray-600 ml-4 text-white font-semibold"><Link  href="/">Home</Link></il>
                        <il className="tracking-wide hover:text-gray-600 ml-4 text-white font-semibold"><Link  href="/pedidos">Pedidos</Link></il>
                        <il className="tracking-wide hover:text-gray-600 ml-4 text-white font-semibold"><Link  href="/perfil">Perfil</Link></il>
                        <il className="tracking-wide hover:text-gray-600 ml-4 text-white font-semibold"><Link  href="/cestinha">Cestinha</Link></il>
            </ul>
            </nav>
        </footer>
    );
}

export default Footer;