'use client'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SquigglyLines from '../components/SquigglyLines'
import AllStudentCards from '../components/AllStudentCards'
import { useState } from 'react'

export default function HomePage() {
  const [placedStudents, setPlacedStudents] = useState([])
  const [totalPlacedStudentsSalary, setTotalPlacedStudentsSalary] = useState(0)

  return (
    <div className='flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen'>
      <Header />

      <main className='flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient'>
        <a
          href='#testimonials'
          className='border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out'
        >
          We've helped thousands of students get jobs as developers 🚀.{' '}
          <span className='text-blue-600'>Results</span>
        </a>
        <h1 className='mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl'>
          Join the{' '}
          <span className='relative whitespace-nowrap text-blue-600'>
            <SquigglyLines />
            <span className='relative'>best </span>
          </span>{' '}
          JavaScript course on the planet 🚀
        </h1>
        <h2 className='mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7 mb-8'>
          103,000+ students have already joined 👨‍🎓. 100% free – join today. In
          exchange for your email, you give me permission to send you emails. I
          promise I'll make them good ❤️.
        </h2>
        <iframe
          // className='m-0 rounded-none bg-transparent'
          src='https://embeds.beehiiv.com/79e09b7a-8240-4a32-97b8-d3c46d8d63a4?slim=true'
          data-test-id='beehiiv-embed'
          // height='52'
        ></iframe>
        {/* <Link
          className='bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition'
          href='/dream'
        >
          FREE - Join Today 🎉
        </Link> */}
        <h3>
          These are some of the students who have landed their dreams jobs as
          developers 👇
        </h3>
        <div
          id='testimonials'
          className='flex justify-between items-center w-full flex-col sm:mt-10 mt-6'
        >
          <div className='flex flex-col space-y-10 mt-4 mb-16'>
            <div className='flex sm:space-x-8 sm:flex-row flex-col'>
              {/* <Results
                placedStudents={placedStudents}
                totalPlacedStudentsSalary={totalPlacedStudentsSalary}
              /> */}

              <AllStudentCards
                setPlacedStudents={setPlacedStudents}
                placedStudents={placedStudents}
                setTotalPlacedStudentsSalary={setTotalPlacedStudentsSalary}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
