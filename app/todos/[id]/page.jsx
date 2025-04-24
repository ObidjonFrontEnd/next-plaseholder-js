import React from 'react'

const Todo = async ({params}) => {
const {id} = params;

const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
const {title , completed} = await response.json()


	return (
			<div  className={`${completed ? "bg-green-400" : "bg-red-400"} border p-2 rounded shadow`} >
				<h2 className="text-lg font-semibold">{title}</h2>		
			</div>
	)
}

export default Todo