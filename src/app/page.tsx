import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import logo from '../../public/3d.png';

const Dashboard: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="flex min-h-screen flex-col items-center">
        {/* Hero Section */}
        <div className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Turn Your 3D Dreams Into Reality
                </h1>
                <p className="text-lg mb-8 text-blue-100">
                  Professional 3D printing service for all your needs. From prototypes to final products, we bring your ideas to life.
                </p>
                <Link 
                  href="/order" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  Start Printing
                </Link>
              </div>
              <div className="hidden md:block">
                <Image
                  src={logo}
                  alt="3D Printer Illustration"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Quick printing and delivery to meet your deadlines</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">High-precision printing with premium materials</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Affordable rates without compromising quality</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 