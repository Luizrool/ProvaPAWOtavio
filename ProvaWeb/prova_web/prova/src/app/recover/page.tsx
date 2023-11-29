"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <main className="h-screen flex items-center justify-center bg-gradient-to-bl from-cyan-500 from-cyan-600 via-blue-800 to-blue-900">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-blue-950 rounded-3xl">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-semibold text-slate-50">Login</h2>
            <div>
              
            </div>
          </div>
          <div className='mb-4'>
            <input type="text" placeholder='E-MAIL' className='apperance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus: outline-none' />
          </div>
          <div className='mb-4'>
            <input type="password" placeholder='NOVA SENHA' className='apperance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus: outline-none'/>
          </div>
          <div className='mb-4'>
            <input type="password" placeholder='CONFIRMAR SENHA' className='apperance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus: outline-none'/>
          </div>
          <div className='mb-4'>
            <button
              type="button"
              onClick={() => router.push("/login")}
              className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-700 hover:bg-blue-900 font-semibold rounded shadow">
              login
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}