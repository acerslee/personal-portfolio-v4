import { FC } from 'react'

const Hero: FC = () => {
	function onClick(): void {
		console.log('button')
	}

	return (
		<section
			aria-label='intro to personal page'
			className='flex-center-around'
		>
			<div>
				<h1 className='text-4xl text-iron'>Hello World! My name is</h1>
				<br />
				<p className='text-7xl text-iron'>Alex Lee</p>
				<p className='text-2xl text-iron'>
					I'm a Software Engineer based out of New York City with experience
					mainly in Web and Mobile Development. I am always willing to explore
					the limitless opportunities within engineering.
				</p>
				<button
					onClick={onClick}
					type='button'
					aria-label='shortcut to button section'
					tabIndex={4}
					className='bg-white ease-out duration-300'
				>
					Click ehre
				</button>
			</div>
		</section>
	)
}

export default Hero
