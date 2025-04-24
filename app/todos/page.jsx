import Link from 'next/link'
import React from 'react'

const Todos = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await response.json()
	return (
		<div className="space-y-4 p-4">
		{todos?.map((todo) => (
			<Link key={todo?.id} href={`/todos/${todo?.id}`}>
			 <div  className="border p-2 rounded shadow" >
				<h3 className="text-lg font-semibold">{todo?.title}</h3>
			</div>
			</Link>  
		))}
	</div>
	)
}

export default Todos