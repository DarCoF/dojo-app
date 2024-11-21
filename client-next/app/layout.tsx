import Navbar from './components/navbar/navbar';
import './styles/globals.css'

export const metadata = {
  title: 'TAP',
  description: 'For engineers to practicioners',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-100">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
