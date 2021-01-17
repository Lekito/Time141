import React from 'react';
import Header from '../Header';
import LojaCard from'../ServicoCard';
import Footer from '../Footer';
import Link from 'next/link';





export default function ListServico() {
    return(
        
        <div className="flex flex-col min-h-screen justify-between">
            <Header />

            
                <Link  href="/produtos">
                    <div className="lista">
                        <LojaCard 
                            image="../vercel.svg"
                            subTitulo="Serviços para Casa"
                             />
                    </div>
                </Link>
            
            
            
                <Link href="/produtos">
                    <div className="lista">
                        <LojaCard 
                            image="../vercel.svg"
                            subTitulo="Serviços para Educação"
                             />
                    </div>
                </Link>
            

            
                <Link href="/produtos">
                    <div className="lista">
                        <LojaCard 
                            image="../vercel.svg"
                            subTitulo="Serviços Automotivos"
                             />
                    </div>
                </Link>
           

         
                <Link href="/produtos">
                    <div className="lista">
                        <LojaCard 
                            image="../vercel.svg"
                            subTitulo="Serviços de entrega"
                             />
                    </div>
                </Link>
            
            <Footer />

            
        </div>
        
    );
}