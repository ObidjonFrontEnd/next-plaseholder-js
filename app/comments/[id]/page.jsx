import React from 'react'

const Commen = async ({params}) => {
const {id} = params;

const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
const {name , body , email} = await response.json()


	return (
			<div  className="border p-2 rounded shadow" >
				<h2 className="text-lg font-semibold">{name}</h2>
				<h2>{email}</h2>
				<h3>{body}</h3>
			</div>
	)
}

export default Commen