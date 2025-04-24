import React from 'react'

const Album = async ({params}) => {
const {id} = params;

const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
const {title} = await response.json()


	return (
			<div  className="border p-2 rounded shadow" >
				<h2 className="text-lg font-semibold">{title}</h2>
			</div>
	)
}

export default Album