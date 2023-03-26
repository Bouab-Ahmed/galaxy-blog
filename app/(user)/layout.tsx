import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

export const metadata = {
  title: 'Galaxy Blog',
  description: 'A blog about the galaxy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='max-w-7xl mx-auto'>
        <Header />
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
