import React from 'react';
import Head from 'next/head';
import Header from '../componets/Header';
import Footer from '../componets/Footer';


export default function Avaliacao() {
    return (
      <div >
        <div className="">
              <Head>
                  <title>Time 141</title>
                  <link rel="icon" href="/favicon.ico" />
              </Head>
          </div>
  
          <div className="flex flex-col min-h-screen justify-between">
      
              <Header />
  
              <div className="flex-grow bg-white shadow-xl rounded-md border-2 border-grey-300">
                  <h1 className="sm:ml-4 sm:text-center text-center text-xl text-gray-700 font-semibold">Area em construção </h1>
                  <h1 className="sm:ml-4 sm:text-center text-center text-xl text-gray-700 font-semibold">Suas Avaliações!</h1>
              </div>
        
              <Footer />
      
          </div>
      </div>
    )
  }
  