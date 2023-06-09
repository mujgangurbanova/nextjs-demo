import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css';
import '@/styles/reset.css';
import { Inter } from '@next/font/google';

const interFont = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFont.className}>
      <body>
        <Header />
        <main>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
