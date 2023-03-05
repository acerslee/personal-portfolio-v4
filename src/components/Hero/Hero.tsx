import { FC } from 'react'

const Hero: FC = () => {
	return (
		<section
			aria-label='intro to personal page'
			className='flex-center-around'
		>
			<div>
				<h1 className='text-4xl'>Hello World! My name is</h1>
				<br />
				<p className='text-7xl'>Alex Lee</p>
				<p className='text-2xl'>
					I'm a Software Engineer based out of New York City with experience
					mainly in Web and Mobile Development. I am always willing to explore
					the limitless opportunities within engineering.
				</p>
			</div>
		</section>
	)
}

export default Hero
