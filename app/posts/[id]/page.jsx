import React from 'react'

const post = async ({params}) => {
const {id} = params;

const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
const {title , body} = await response.json()


	return (
			<div  className="border p-2 rounded shadow" >
				<h2 className="text-lg font-semibold">{title}</h2>
				<h3>{body}</h3>
			</div>
	)
}

export default post