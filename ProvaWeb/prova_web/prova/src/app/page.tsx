"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="h-screen flex items-center justify-center bg-gradient-to-bl from-cyan-500 from-cyan-600 via-blue-800 to-blue-900">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-blue-950 rounded-3xl">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-semibold text-slate-50">Home</h2>
            <div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-50">
                Prova CC5M PAW
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={() => router.push("/login")}
            className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-700 hover:bg-blue-900 font-semibold rounded shadow"
          >
            Login
          </button>
        </div>
      </div>
    </main>
  );
}