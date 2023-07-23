'use client'
import Link from 'next/link'
import { FaLaptopCode } from 'react-icons/fa'

export default function Header() {
  return (
    <header className='flex flex-col xs:flex-row justify-between items-center w-full mt-3 border-b pb-7 sm:px-4 px-2 border-gray-500 gap-2'>
      <Link href='/' className='flex space-x-2'>
        <FaLaptopCode
          className='sm:w-10 sm:h-10 w-9 h-9'
          width={24}
          height={24}
        />

        <h1 className='sm:text-3xl text-xl font-bold ml-2 tracking-tight'>
          cleverprogrammer
        </h1>
      </Link>
      <a
        className='flex max-w-fit items-center justify-center space-x-2 rounded-full border border-blue-600 text-white px-5 py-2 text-sm shadow-md hover:bg-blue-500 bg-blue-600 font-medium transition'
        href='https://cleverprogrammer.podia.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Google />
        <p>Courses</p>
      </a>
    </header>
  )
}

function Google({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={className}
    >
      <path d='M12.48,10.92v3.28h7.84c-0.32,2.08-2.24,6.08-7.84,6.08c-4.76,0-8.68-3.92-8.68-8.68S7.72,3.6,12.48,3.6 c2.72,0,4.52,1.16,5.6,2.16l3.84-3.84C19.6,0.72,16.36,0,12.48,0C5.6,0,0,5.6,0,12s5.6,12,12.48,12c7.28,0,11.92-5.2,11.92-12 c0-0.8-0.08-1.44-0.2-2.08H12.48z' />
    </svg>
  )
}
