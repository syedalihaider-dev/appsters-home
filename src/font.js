import { Big_Shoulders, Inter_Tight, Space_Grotesk, Inter } from 'next/font/google'

// Big Shoulders font
export const bigShoulders = Big_Shoulders({
  subsets: ['latin'],
  weight: ['400','700','900'],
  variable: '--font-big-shoulders',
  display: 'swap',
})

// Inter Tight font
export const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400','500','700','900'],
  variable: '--font-inter-tight',
  display: 'swap',
})

// Space Grotesk font
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300','400','500','600','700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

// Inter font
export const inter = Inter({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800','900'],
  variable: '--font-inter',
  display: 'swap',
})