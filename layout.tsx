import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nitineditz.com'),
  title: 'Nitin Editz | Professional Video Editor',
  description:
    'Freelance Video Editor specializing in YouTube, Shorts, Gaming Videos and Social Media Content.',
  keywords: [
    'video editor',
    'YouTube editor',
    'gaming video editor',
    'shorts editor',
    'video editing services',
    'Nitin Editz',
    'Nitin Basod',
    'professional video editing',
    'motion graphics',
    'color grading',
    'freelance video editor',
  ],
  authors: [{ name: 'Nitin Basod' }],
  creator: 'Nitin Basod',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nitineditz.com',
    siteName: 'Nitin Editz',
    title: 'Nitin Editz | Professional Video Editor',
    description:
      'Freelance Video Editor specializing in YouTube, Shorts, Gaming Videos and Social Media Content.',
    images: [
      {
        url: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Nitin Editz - Professional Video Editor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nitin Editz | Professional Video Editor',
    description:
      'Freelance Video Editor specializing in YouTube, Shorts, Gaming Videos and Social Media Content.',
    images: [
      'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    creator: '@nitin__.editz',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
