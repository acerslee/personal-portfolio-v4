import { useState, useEffect } from 'react'

export const useMediaQuery = (query: string): boolean => {
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		const media = window.matchMedia(query as string)

		if (media.matches !== matches) {
			setMatches(media.matches)
		}

		const listener = (mq: { matches: boolean }): void => setMatches(mq.matches)
		media.addEventListener('change', listener)

		return () => {
			media.removeEventListener('change', listener)
		}
	}, [matches, query])

	return matches
}

export default useMediaQuery
