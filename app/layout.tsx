import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>First Next13 App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <header>
          <nav>
            <a href='/'>Home</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
