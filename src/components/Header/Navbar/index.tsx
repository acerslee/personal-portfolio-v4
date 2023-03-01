import { FC, ReactNode } from 'react'
import Nav from 'react-bootstrap/Nav'

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
		return navObj.map((item: ObjType, i: number) => (
			<ul key={item.text} className="hover:text-blue">
				<li >
					<a
						href={item.href}
						className={'text-base'}
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
