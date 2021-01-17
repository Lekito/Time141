import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../componets/Header';
import Footer from '../componets/Footer'

export default function Perfil() {
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
  
            <div className="">
                <div className="lg:min-h-screen lg:flex lg:items-center p-12 lg:p-24 xl:p-48 ">
                    <div className="flex-grow bg-white shadow-xl rounded-md border border-grey-300 p-8 ">
                        <div className="sm:flex sm:items-center">
                            <Image src="/alex_pequena.jpg" width={150} height={100} className="sm:flex-shrink-0 mx-auto sm:mx-0 h-20 rounded-full"/>
                            <div className="sm:ml-4 sm:text-left text-center">
                                <p className="text-xl">Alex Ribeiro</p>
                                <p className="text-sm text-gray-600">Cliente Confiavel nota 7.0</p>
                                <div className="mt-4">
                                    <Link href="/login">
                                        <button type="button"  className="text-red-500 hover:text-white hover:bg-red-500 border border-red-500 font-semibold rounded-md text-xs px-4 py-1 focus:outline-none">
                                            Trocar de usuário
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <form className="flex w-full mt-8">
                            <input type="text" placeholder="Avaliar o ultimo serviço" className="flex-1 w-full text-gray-700 bg-gray-200 rounded-md hover:bg-white border border-gray-200 outline-none focus:bg-white py-2 px-4">
                            </input>

                            <botton type="button" className="flex-shrink-0 bg-red-500 hover:bg-green-700 outline-none py-2 px-4 ml-4 text-white font-semibold rounded-md ">
                                Enviar
                            </botton>
                        </form>
                    </div>
                </div>
            </div>
        
            <Footer />
      
        </div>
      </div>
    )
  }
  