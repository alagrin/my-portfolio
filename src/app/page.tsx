import type { Metadata } from 'next'
 
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
  return <h1>Hello, Next.js!</h1>
}