import { JSX, SVGProps } from 'react';

import HeaderComponent from '@/components/Header';
import Link from 'next/link';

export default function ContagePage() {
  return (
    <>
      <HeaderComponent />
      <div className='flex flex-col items-center space-y-4 min-h-screen py-12 md:py-24'>
        <div className='flex flex-col items-center space-y-2'>
          <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
            Contact Us
          </h1>
          <p className='max-w-[600px] text-center text-gray-500 md:text-xl/relaxed dark:text-gray-400'>
            Reach out to our team with any questions or feedback. We&apos;re
            here to help.
          </p>
        </div>
        <div className='grid max-w-sm gap-4 p-4 rounded-lg border border-gray-200 bg-gray-50/10 md:max-w-4xl md:grid-cols-2 md:gap-8 dark:border-gray-800 dark:bg-gray-950/10'>
          <div className='flex gap-4 items-center'>
            <MailOpenIcon className='w-6 h-6' />
            <div className='space-y-1.5'>
              <h3 className='text-lg font-semibold'>Email Us</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Drop us a line at
                <span className='font-medium'> info@globalreachit.com</span>
              </p>
            </div>
          </div>
          <div className='flex gap-4 items-center'>
            <PhoneIcon className='w-6 h-6' />
            <div className='space-y-1.5'>
              <h3 className='text-lg font-semibold'>Call Us</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Reach our support team at
                <span className='font-medium'>+1 (123) 456-7890</span>
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-1.5 min-[400px]:flex-row justify-center'>
          <Link
            className='inline-flex h-8 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-6 text-sm shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50'
            href='#'
          >
            Email
          </Link>
          <Link
            className='inline-flex h-8 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-6 text-sm shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50'
            href='#'
          >
            Call
          </Link>
        </div>
      </div>
    </>
  );
}

function MailOpenIcon(
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
      <path d='M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z' />
      <path d='m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10' />
    </svg>
  );
}

function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
    </svg>
  );
}
