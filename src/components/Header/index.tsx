import { FC } from 'react'
import Image from 'next/image'

import Navbar from './Navbar'

import logo from 'public/alex-lee-logo.png'

const Header: FC = () => {
	return (
		<header className='flex flex-row items-center'>
			<Image
				src={logo}
				alt={'webpage logo'}
        height={100}
        width={100}
			/>
			<Navbar />
		</header>
	)
}

export default Header
