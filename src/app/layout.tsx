import '../styles/globals.css'
import { Inter, Rajdhani } from 'next/font/google'
import { ChallengesProvider } from "@/hooks/ChallengesContext";
import { CountdownProvider } from '@/hooks/CountdownContext';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400','500','600'],
  display: 'swap',
  variable: '--main-font-family'
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400','500','600'],
  display: 'swap',
  variable: '--rajdhani-font-family'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang='en' className={`${inter.variable} ${rajdhani.variable}`} id='html'>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
