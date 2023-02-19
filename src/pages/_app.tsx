import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import SEO from '@/components/SEO'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
