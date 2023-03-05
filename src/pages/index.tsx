import { NextPage } from 'next'
import { client } from '../utils/contentful'

import Hero from '@/components/Hero'

const Home: NextPage = () => {
	return (
		<main>
			<Hero />
		</main>
	)
}

export default Home
