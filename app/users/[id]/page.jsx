import React from 'react'

const Todo = async ({params}) => {
const {id} = params;

const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
const {name , username , email , phone , website } = await response.json()


	return (
			<div  className={` border p-2 rounded shadow`} >
				<h2 className="text-lg font-semibold">{name}</h2>		
				<h2 className="text-lg font-semibold">{username}</h2>		
				<h2 className="text-lg font-semibold">{email}</h2>		
				<h2 className="text-lg font-semibold">{phone}</h2>		
				<h2 className="text-lg font-semibold">{website}</h2>		 
			</div>
	)
}

export default Todo