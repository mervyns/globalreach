'use client';

import { JSX, SVGProps } from 'react';

import HeaderComponent from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <>
      <HeaderComponent />
      <div className='container flex flex-col items-center gap-2 pt-12 px-4 md:px-6'>
        <div className='mx-auto w-full max-w-7xl grid gap-4'>
          <Image
            alt='hero section with image'
            className='w-full object-cover object-center rounded-lg'
            src='/hero.jpg'
            height={600}
            width={3200}
          />
        </div>
        <h1 className='text-3xl font-bold text-center tracking-tighter md:text-5xl my-6'>
          Software Services & Electronics
        </h1>
        <p className='max-w-[700px] text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
          We offer cutting-edge software services and a curated selection of
          high-quality electronics.
        </p>
      </div>
      <Separator className='my-8 md:my-12' />
      <section>
        <div className='container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10 py-4 md:py-10'>
          <div className='space-y-3'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Our Services
            </h2>
            <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
              Explore our software services designed to help businesses thrive.
            </p>
          </div>
          <div className='mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3'>
            <div className='grid gap-2'>
              <CodeIcon className='w-12 h-12 mx-auto' />
              <h3 className='text-lg font-bold'>Software Development</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                We provide professional and efficient software development
                service. Our engineers will build your dream software products.
              </p>
            </div>
            <div className='grid gap-2'>
              <GitCommitIcon className='w-12 h-12 mx-auto' />
              <h3 className='text-lg font-bold'>Server Management</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                World-class professional server hosting solutions. Keep your
                servers running smoothly with our management expertise.
              </p>
            </div>
            <div className='grid gap-2'>
              <MonitorIcon className='w-12 h-12 mx-auto' />
              <h3 className='text-lg font-bold'>
                Performance Monitoring & Analytics
              </h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Gain insights into your application&apos;s performance and user
                experience with real-time monitoring and analytics.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-gray-100 py-12 md:py-24 lg:py-32'>
        <div className='container grid items-center gap-4 px-4 text-center md:px-6'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Featured Products
            </h2>
            <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
              Discover our curated collection of high-quality electronics.
            </p>
          </div>
          <div className='mx-auto grid max-w-sm items-start gap-4 sm:max-w-4xl sm:grid-cols-2 md:gap-8 lg:max-w-5xl lg:grid-cols-3'>
            <div className='flex flex-col items-center justify-center space-y-2'>
              <Image
                alt='Chromebook'
                className='rounded-lg object-cover object-center border aspect-square border-gray-200 dark:border-gray-800'
                height='200'
                src='/chromebook.png'
                width='200'
              />
              <div className='space-y-2'>
                <h3 className='font-bold'>Laptops</h3>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center space-y-2'>
              <Image
                alt='Television'
                className='rounded-lg object-cover object-center border aspect-square border-gray-200 dark:border-gray-800'
                height='200'
                src='/tv.jpg'
                width='200'
              />
              <div className='space-y-2'>
                <h3 className='font-bold'>Consumer Electronics</h3>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center space-y-2'>
              <Image
                alt='Server Equipment'
                className='rounded-lg object-cover object-center border aspect-square border-gray-200 dark:border-gray-800'
                height='200'
                src='/server.png'
                width='200'
              />
              <div className='space-y-2'>
                <h3 className='font-bold'>Server Equipment</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-12 md:py-24 lg:py-32' id='about'>
        <div className='container grid items-center gap-4 px-4 text-center md:px-6'>
          <div className='space-y-2'>
            <h2 className='text-3xlfont-bold tracking-tighter sm:text-4xl md:text-5xl'>
              About Us
            </h2>
            <p className='mx-auto mt-8 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
              We are a team of passionate innovators dedicated to delivering
              exceptional software services and providing our customers with the
              latest and most advanced electronics.
            </p>
          </div>
        </div>
      </section>
      <footer className='py-12 md:py-24'>
        <div className='container grid items-center gap-4 px-4 text-center md:px-6'>
          <nav className='flex flex-col gap-2 mx-auto text-sm sm:flex-row md:text-base lg:gap-4'>
            <Link
              className='flex-1 flex items-center justify-center text-gray-900 hover:underline dark:text-gray-50 dark:hover:underline'
              href='/'
            >
              Home
            </Link>
            <Link
              className='flex-1 flex items-center justify-center text-gray-900 hover:underline dark:text-gray-50 dark:hover:underline'
              href='#about'
            >
              About Us
            </Link>
            <Link
              className='flex-1 flex items-center justify-center text-gray-900 hover:underline dark:text-gray-50 dark:hover:underline'
              href='contact'
            >
              Contact
            </Link>
          </nav>
          <div className='mx-auto border-t w-full max-w-sm border-gray-200 dark:border-gray-800' />
          <div className='flex flex-col gap-4 min-[400px]:flex-row justify-center text-sm'>
            <p className='text-gray-500 dark:text-gray-400'>
              © 2024 Global Reach IT Ltd
            </p>
            <nav className='flex gap-2 text-gray-500 dark:text-gray-400'>
              <Link className='hover:underline' href='#'>
                Privacy Policy
              </Link>
              <Link className='hover:underline' href='#'>
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polyline points='16 18 22 12 16 6' />
      <polyline points='8 6 2 12 8 18' />
    </svg>
  );
}

function GitCommitIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='12' cy='12' r='3' />
      <line x1='3' x2='9' y1='12' y2='12' />
      <line x1='15' x2='21' y1='12' y2='12' />
    </svg>
  );
}

function MonitorIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect width='20' height='14' x='2' y='3' rx='2' />
      <line x1='8' x2='16' y1='21' y2='21' />
      <line x1='12' x2='12' y1='17' y2='21' />
    </svg>
  );
}
