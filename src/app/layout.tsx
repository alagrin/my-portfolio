import Navigation from './navigation/navigation';
import './globals.css';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-gray-100'>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;