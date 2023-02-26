export const metadata = {
  title: 'Galaxy content Blog',
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
