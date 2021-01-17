import React from 'react';
import Link from 'next/link';

function Header() {
    return(
        <div className="w-full h-15 bg-blue-300  ">
            <header className="flex  md:justify-between max-w-5xl mx-auto py-2 px-4 sm:px-6 md:px-8 md:py-4 items-center ">
               <a className="tracking-wide hover:text-gray-600 ml-4 text-white font-semibold"><Link  href="/endereco">Seu endereço</Link></a>

                <nav className="hidden md:block ">
                    <ul className="space-x-8">
                        <il className="tracking-wide hover:text-gray-600 ml-4 text-white font-semibold"><Link  href="/">Home</Link></il>
                        <il className="tracking-wide hover:text-gray-600 ml-4 text-white font-semibold"><Link  href="/avaliacao">Avaliações</Link></il>
                        <il className="tracking-wide hover:text-gray-600 ml-4 text-white font-semibold"><Link  href="/perfil">Perfil</Link></il>
                        <il className="tracking-wide hover:text-gray-600 ml-4 text-white font-semibold"><Link  href="/pontos">Pontos</Link></il>
                    </ul>
                    
                </nav>
            </header>
        </div>
        
    );
}

export default Header;