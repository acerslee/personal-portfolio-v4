import { FC } from 'react'
import Image from 'next/image'

import useMediaQuery from '@/hooks/useMediaQuery'

import DesktopNavbar from './Navbar/Desktop'
import TabletMobileNavbar from './Navbar/TabletMobile'

import logo from 'public/alex-lee-logo.png'

const Header: FC = () => {
	const isDesktopSize = useMediaQuery('(min-width: 1025px)')

	return (
		<header className='flex-center-around'>
			<Image
				src={logo}
				alt={'webpage logo'}
				height={100}
				width={100}
				priority
			/>
			{isDesktopSize ? <DesktopNavbar /> : <TabletMobileNavbar />}
		</header>
	)
}

export default Header
