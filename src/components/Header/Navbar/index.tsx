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
			<Nav.Item>
				<Nav.Link
					href={item.href}
					className={'text-base'}
					eventKey={`link-${i}`}
				>
					{item.text}
				</Nav.Link>
			</Nav.Item>
		))
	}

	return <Nav className='flex flex-row gap-8'>{renderNavItems()}</Nav>
}

export default Navbar
