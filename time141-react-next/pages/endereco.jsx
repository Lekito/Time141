import Head from 'next/head';
import React from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import CarregarMap from '../componets/CarregarMap'
 
export default function Endereco() {
  return (
    <div >
      <div>
            <Head>
                <title>Time 141</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>

        <div className="flex flex-col min-h-screen justify-between">
    
            <Header />

            <div className="">
              <CarregarMap />
            </div>

            <Footer />
    
        </div>
    </div>
  )
}
