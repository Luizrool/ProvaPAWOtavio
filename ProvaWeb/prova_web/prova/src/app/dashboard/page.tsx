"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className='h-screen flex flex-col bg-gradient-to-bl from-cyan-500 from-cyan-600 via-blue-800 to-blue-900'>

      {/* Header */}
      <div className='bg-white p-4 flex justify-between items-center'>
        <div className='text-3xl font-semibold text-gray-800'>Dashboard</div>
        <button
          type='button'
          onClick={() => router.push('/login')}
          className='px-4 py-2 bg-blue-700 hover:bg-blue-900 text-white rounded shadow'
        >
          Sair
        </button>
      </div>

      {/* Content */}
      <div className='flex items-center justify-center flex-1 space-x-4 overflow-y-auto'>
        {/* Card 1 */}
        <div className='max-w-sm bg-white shadow-lg rounded-lg overflow-hidden'>
          <div className='px-6 py-4'>
            <h2 className='text-2xl font-semibold text-blue-700'>CARD Grupo</h2>
            <p className='text-gray-600'>Vou de Van</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className='max-w-sm bg-white shadow-lg rounded-lg overflow-hidden'>
          <div className='px-6 py-4'>
            <h2 className='text-2xl font-semibold text-blue-700'>CARD Avaliadores</h2>
            <p className='text-gray-600'>Otavio.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className='max-w-sm bg-white shadow-lg rounded-lg overflow-hidden'>
          <div className='px-6 py-4'>
            <h2 className='text-2xl font-semibold text-blue-700'>CARD Dias</h2>
            <p className='text-gray-600'>Segunda-Feira 27/09.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
