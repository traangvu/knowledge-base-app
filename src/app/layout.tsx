import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'
import ApolloWrapper from '@/components/ApolloWrapper' // 👈

export const metadata = {
  title: 'My App',
  description: 'Knowledge base app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          {children}
        </ApolloWrapper>
      </body>
    </html>
  )
}
