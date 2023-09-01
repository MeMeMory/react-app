import { useQuery } from '@tanstack/react-query'
// import { useEffect, useState } from 'react'

const Select = () => {
	const { data } = useQuery(['cars'], () => sortingArray)

	const [carData, setCarData] = useState(carsData)

	const [sortType, sortArray] = useState('id')

	// const { sortArray } = useQuery(['cars'], () => sortingArray(type))

	const sortingArray = type => {
		const sortingCases = {
			id: [...data].sort((a, b) => a['id'] - b['id']),
			name: [...data].sort((a, b) => a['name'].localeCompare(b['name'])),
			nameReverse: [...data].sort((a, b) => b['name'].localeCompare(a['name'])),
			priceMinMax: [...data].sort((a, b) => a['price'] - b['price']),
			priceMaxMin: [...data].sort((a, b) => b['price'] - a['price']),
		}

		// setCarData(sortingCases[type])
		return sortingCases[type]
	}

	// useEffect(() => {
	// 	sortingArray(sortType)
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [sortType])

	return (
		// <select onChange={props.onChange}>
		<select onChange={e => sortingArray(e.target.value)}>
			<option value='id'>default</option>
			<option value='name'>name A-Z</option>
			<option value='nameReverse'>name Z-A</option>
			<option value='priceMinMax'>price from Min to Max</option>
			<option value='priceMaxMin'>price from Max to Min</option>
		</select>
	)
}

export default Select
