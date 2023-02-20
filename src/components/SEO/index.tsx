import { FC } from 'react'
import Head from 'next/head'

const SEO: FC = () => {
	return (
		<Head>
			<title>Alexander Lee - Portfolio</title>
			<meta
				name='description'
				content='Alexander Lee Software engineer portfolio'
			/>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1'
			/>
			<link
				rel='icon'
				href='/favicon.ico'
			/>
		</Head>
	)
}

export default SEO
