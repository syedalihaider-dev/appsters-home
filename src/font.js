import { Big_Shoulders, Inter_Tight } from 'next/font/google'

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