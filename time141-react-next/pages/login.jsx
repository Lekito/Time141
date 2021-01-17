import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


export default function Login() {
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
                    <div className="flex-grow bg-white ">
                        <div className="sm:flex sm:items-center flex flex-col">
                            <div className="p-4">
                                <h1 className="text-center text-xl font-semibold text-gray-900">Time 141</h1>
                            </div>
                            <div className="flex justify-center">
                                <Image src="/avatar.png" width={121} height={130}  layout="fixed" />
                            </div>
                            
                            <div className="sm:ml-4 sm:text-left text-center">
                                <form className="flex justify-center mt-8">
                                    <input type="text" placeholder="Login" className=" text-gray-700 bg-gray-200 rounded-md hover:bg-white border border-gray-200 outline-none focus:bg-white py-2 px-4">
                                    </input>
                                </form>
                            </div>
                        </div>

                        <div className="sm:ml-4 sm:text-left text-center ">
                            <form className="flex justify-center  mt-8">
                                <input type="password" placeholder="Senha" className=" text-gray-700 bg-gray-200 rounded-md hover:bg-white border border-gray-200  focus:bg-white py-2 px-4">
                                </input>
                                
                            </form>
                            <div className="flex justify-center   py-2  mt-4">
                                    <Link href="/">
                                        <botton type="button" className="flex justify-center text-center w-23  bg-red-500 hover:bg-green-700  py-2 px-7 ml-4 text-white font-semibold rounded-md ">
                                            Entrar
                                        </botton>
                                    </Link>
                                </div>

                                <div className=" flex justify-center  mt-4  py-2  ">
                                    <Link href="/cadastro-nome">
                                        <button type="button"  className=" text-red-500 hover:text-white hover:bg-red-500 border border-red-500 font-semibold rounded-md px-4 py-2 ml-4 focus:outline-none">
                                            Cadastro
                                        </button>
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
  