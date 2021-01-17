import React from 'react';
import Head from 'next/head';
import Link from 'next/link';


export default function Email() {
    return (
      <div >
        <div className="">
              <Head>
                  <title>Time 141</title>
                  <link rel="icon" href="/favicon.ico" />
              </Head>
        </div>
  
        <div className="flex flex-col min-h-screen justify-between">
      
           
  
            <div className="">
                <div className="lg:min-h-screen lg:flex lg:items-center p-10 lg:p-20 xl:p-30  ">
                    <div className="flex-grow bg-white py-5">
                        <div className="sm:flex sm:items-center flex flex-col">
                            <div className="p-4">
                                <h1 className="text-center text-xl font-semibold text-gray-900 py-5">Time 141</h1>
                            </div>
                            <div className="py-5">
                                <h1 className="text-center p-2 text-xl font-semibold text-gray-900 py-5">E-mail</h1>
                            </div>
                            <div className="sm:ml-4 sm:text-left text-center py-5">
                                <form className="flex w-full mt-8">
                                    <input type="email" placeholder="E mail" className="flex-1 w-full text-gray-700 bg-gray-200 rounded-md hover:bg-white border border-gray-200 outline-none focus:bg-white py-2 px-4">
                                    </input>
                                </form>
                            </div>
                        </div>

                        <div className="flex flex-row justify-center justify-between  lg:justify-center  py-10">
                            
                            <div className=" flex justify-center flex-col-1 mt-4  py-2  ">
                                    <Link href="/cadastro-nome">
                                        <button type="button"  className=" text-red-500 hover:text-white hover:bg-red-500 border border-red-500 font-semibold rounded-md px-4 py-2 ml-4 focus:outline-none">
                                            Voltar
                                        </button>
                                    </Link>
                            </div>

                            <div className="flex justify-center flex-col-1 py-2  mt-4">
                                    <Link href="/cadastro-cpf">
                                        <botton type="button" className="flex justify-center text-center w-20  bg-red-500 hover:bg-green-700  py-2 px-7 ml-4 text-white font-semibold rounded-md ">
                                            Enviar
                                        </botton>
                                    </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        
           
      
        </div>
      </div>
    )
  }
  