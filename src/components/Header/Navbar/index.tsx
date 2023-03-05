import { FC, ReactNode } from 'react'
import { client } from '@/utils/contentful'

type ObjType = { [key: string]: string }

const navObj: ObjType[] = [
	{
		href: '/about',
		text: 'About',
	},
	{
		href: '/projects',
		text: 'Projects',
	},
	{
		href: '/contact',
		text: 'Contact',
	},
	{
		href: '/resume',
		text: 'Resume',
	},
]

const Navbar: FC = () => {
	const renderNavItems = (): ReactNode[] => {
		return navObj.map((item: ObjType) => (
			<ul
				key={item.text}
				className='hover:text-blue'
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

export default Navbar
