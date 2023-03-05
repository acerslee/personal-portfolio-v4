import '../styles/globals.css'
import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import SEO from '@/components/SEO'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()

	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		router.events.on('routeChangeStart', () => {
			setLoading(true)
		})

		router.events.on('routeChangeComplete', () => {
			setLoading(false)
		})

		router.events.on('routeChangeError', () => {
			setLoading(false)
		})

		return () => {
			router.events.off('routeChangeStart', () => {
				setLoading(true)
			})

			router.events.off('routeChangeComplete', () => {
				setLoading(false)
			})

			router.events.off('routeChangeError', () => {
				setLoading(false)
			})
		}
	}, [router])

	return (
		<>
			<SEO />
			<Header />
			<Component {...pageProps} />
			{/* <Footer /> */}
		</>
	)
}
