import type {Metadata} from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles
import { ThemeProvider } from '@/components/ThemeProvider';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sirona | Climate Intelligence',
  description: 'Advanced climate intelligence platform combining hyperlocal temperature data with predictive AI.',
  openGraph: {
    title: 'Sirona | Climate Intelligence',
    description: 'Advanced climate intelligence platform combining hyperlocal temperature data with predictive AI.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sirona | Climate Intelligence',
    description: 'Advanced climate intelligence platform combining hyperlocal temperature data with predictive AI.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var theme = localStorage.getItem('app-theme');
              if (theme === 'freeze') {
                document.documentElement.setAttribute('data-theme', 'freeze');
              } else {
                document.documentElement.setAttribute('data-theme', 'heat');
              }
            } catch (e) {}
          })();
        `}} />
      </head>
      <body className={`${plusJakartaSans.variable} ${jetBrainsMono.variable} ${playfairDisplay.variable} font-sans bg-theme-bg text-white antialiased border-8 border-[#111] min-h-screen flex flex-col`} suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
