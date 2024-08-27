import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Portfolio page to demonstrate my skills and projects',
  keywords: ['Next.js', 'React', 'Portfolio'],
  authors: [{ name: 'Alan Grinberg', url: 'https://www.alangrinberg.net' }],
  robots: 'index, follow',
  openGraph: {
    title: 'My Portfolio',
    description: 'My Portfolio',
    url: 'https://www.alangrinberg.net',
    siteName: 'Alan Grinberg, Software Engineer and Product Manager',
    images: [{ url: 'https://www.alangrinberg.net/og-image.png' }],
    locale: 'en_US',
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.alangrinberg.net',
  },
  verification: {
    google: 'google-site-verification=1234567890', //TODO: Replace with actual verification code
  },
  creator: 'Alan Grinberg',
  publisher: 'Alan Grinberg',
  formatDetection: { //TODO: Replace with actual format detection
    email: false,
    address: false,
    telephone: false,
  },
  referrer: 'origin-when-cross-origin'
}

export default function Page() {
  return <div className='flex flex-col items-center h-screen container mx-auto px-4'>
    <div className='container flex flex-col items-center justify-center mt-20 bg-gray-100 mb-10'>
      <div className='flex flex-col banner bg-transparent px-4 mt-5 rounded shadow max-w-md'>
        <div className='banner-picture'>
          <Image src='/images/IMG_0469.JPEG' alt='Banner' width={300} height={300} />
        </div>
        <h1 className='text-4xl font-bold text-center mt-2'>Alan Grinberg</h1>
      </div>
    </div>

    <div className='container flex flex-col px-4'>
      <div className='flex flex-col justify-center'>
        <h1 className='text-4xl font-bold text-center mb-5'>Welcome to my portfolio</h1>
        <p className='text-lg text-center'>I&apos;m a software engineer and product manager</p>
        <p className='text-lg text-center'>See what I am working on lately</p>
        <div className='flex flex-col items-center justify-center mt-10 mb-10'>
          <button className="@apply bg-blue-500 text-white font-bold py-2 px-4 rounded">
            <a href="/blog">Blog</a>
          </button>
        </div>
      </div>
    </div>

    <section className="px-20 mt-10">
      <h4 className="mb-8 text-3xl font-bold text-center md:text-left">Education</h4>
      <div className="grid grid-cols-1 md:grid-cols-6 my-10">
        <div className="flex flex-col col-span-2 mb-4 md:mb-0">
          <h5 className="text-xl md:text-2xl  font-bold">M.S. Computer Science</h5>
          <h6 className="text-lg font-bold">Northeastern University</h6>
          <p>Aug 2018 - Aug 2020</p>
        </div>
        <div className="flex flex-col col-span-4 ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet deleniti tempore veritatis
            adipisci accusantium voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit
            laudantium ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi non incidunt
            voluptates molestiae delectus nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate
            harum voluptates praesentium. Suscipit itaque officiis odio ut!</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 my-10">
        <div className="flex flex-col col-span-2 mb-4 md:mb-0">
          <h5 className="text-xl md:text-2xl  font-bold">B.S. Computer Science</h5>
          <h6 className="text-lg font-bold">Harvard University</h6>
          <p>Jan 2015 - present</p>
        </div>
        <div className="flex flex-col col-span-4 ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet deleniti tempore veritatis
            adipisci accusantium voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit
            laudantium ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi non incidunt
            voluptates molestiae delectus nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate
            harum voluptates praesentium. Suscipit itaque officiis odio ut!</p>
        </div>
      </div>
    </section>

    <section className="px-20 mt-10">
      <h4 className="mb-8 text-3xl font-bold text-center md:text-left">Projects</h4>
      <div className="grid grid-cols-1 md:grid-cols-6 my-10">
        <div className="flex flex-col col-span-2 mb-4 md:mb-0">
          <h5 className="text-xl md:text-2xl  font-bold">E-commerce</h5>
        </div>
        <div className="flex flex-col col-span-4 ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet deleniti tempore veritatis
            adipisci accusantium voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit
            laudantium ullam! Lorem ipsum dolor sit,</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 my-10">
        <div className="flex flex-col col-span-2 mb-4 md:mb-0">
          <h5 className="text-xl md:text-2xl  font-bold">Sales and Marketing</h5>
        </div>
        <div className="flex flex-col col-span-4 ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet deleniti tempore veritatis
            adipisci accusantium voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit
            laudantium ullam! Lorem ipsum dolor sit.</p>
        </div>
      </div>
    </section>


    <div className='container w-full'>
      <footer className='w-full sticky bottom-0 flex items-center justify-between p-4 bg-gray-800 text-white'>
        <p className='text-lg'>© 2024 Alan Grinberg</p>
        <p className='text-lg'>All rights reserved</p>
        <p className='text-lg'>Contact me at <a href="mailto:alan@alangrinberg.net">alan@alangrinberg.net</a></p>
        <p className='text-lg'>Follow me on <a href="https://linkedin.com/in/agrinb92">LinkedIn</a></p>
      </footer>
    </div>
  </div>
}