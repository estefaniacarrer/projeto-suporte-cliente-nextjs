import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { AuthProvider } from '@/providers/auth'
import { ModalProvider } from "@/providers/modal";
// import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Dev Controle - Seu sistema de gerencimaneto.',
  description: 'Gerencie seus clientes e atendimentos de forma fácil!',
  icons: {
    icon: 'favicon.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Provider> */}
        <AuthProvider>
          <ModalProvider>
            <Header />
            {children}
          </ModalProvider>
        </AuthProvider>
        {/* </Provider> */}
      </body>
    </html>
  )
}
