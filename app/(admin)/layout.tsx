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
      <body>{children}</body>
    </html>
  );
}
