import { FC, ReactNode } from 'react'
import { client } from '@/utils/contentful'

import { ObjType, navObj } from '../navItems'

const DesktopNavbar: FC = () => {
	const renderNavItems = (): ReactNode[] => {
		return navObj.map((item: ObjType) => (
			<ul
				key={item.text}
				className='text-iron hover-underline'
			>
				<li>
					<a
						href={item.href}
						className={'text-lg'}
					>
						{item.text}
					</a>
				</li>
			</ul>
		))
	}

	return <nav className='flex flex-row gap-8'>{renderNavItems()}</nav>
}

export default DesktopNavbar
