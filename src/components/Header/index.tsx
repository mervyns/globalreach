'use client';

import { JSX, SVGProps } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import Link from 'next/link';

export default function HeaderComponent() {
  return (
    <header>
      <div className='bg-gray-50/90 border-t border-b border-gray-20 dark:bg-gray-950 dark:border-gray-800'>
        <div className='container py-4 px-8'>
          <div className='grid items-center gap-4 grid-cols-1 md:grid-cols-2'>
            <div className='flex items-center space-x-2'>
              <Link href='/'>
                <p className='text-sm md:text-md font-medium text-gray-900 dark:text-gray-50'>
                  Global Reach IT Services Ltd.
                </p>
              </Link>
              <div className='flex md:hidden justify-end text-sm'>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink>
                          <Link
                            className='flex items-center space-x-2 text-gray-900 hover:underline dark:text-gray-50 dark:hover:underline p-2'
                            href='#about'
                          >
                            About Us
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink>
                          <Link
                            className='flex items-center space-x-2 text-gray-900 hover:underline dark:text-gray-50 dark:hover:underline p-2'
                            href='/contact'
                          >
                            Contact
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>

            <div className='hidden md:flex justify-end space-x-4 text-sm'>
              <Link
                className='flex items-center space-x-2 text-gray-900 hover:underline dark:text-gray-50 dark:hover:underline'
                href='#about'
              >
                <UserIcon className='w-4 h-4 mx-2' />
                About Us
              </Link>
              <Link
                className='flex items-center space-x-2 mx-2 text-gray-900 hover:underline dark:text-gray-50 dark:hover:underline'
                href='/contact'
              >
                <MailIcon className='w-4 h-4 mx-2' />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
      <polyline points='9 22 9 12 15 12 15 22' />
    </svg>
  );
}

function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width='20' height='16' x='2' y='4' rx='2' />
      <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
    </svg>
  );
}

function ShoppingCartIcon(
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
      <circle cx='8' cy='21' r='1' />
      <circle cx='19' cy='21' r='1' />
      <path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' />
    </svg>
  );
}

function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
      <circle cx='12' cy='7' r='4' />
    </svg>
  );
}
