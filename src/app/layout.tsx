import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['700'],
})

export const metadata: Metadata = {
  title: 'Mundo Pet',
  description: 'Gerenciar agendamentos do seu pet nunca foi tão fácil',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${interTight.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
