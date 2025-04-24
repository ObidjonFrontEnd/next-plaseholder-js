import Link from 'next/link'
import React from 'react'

const Comments = async () => {
	const response = await fetch('http://jsonplaceholder.typicode.com/comments')
  const comments = await response.json()

	return (
		<div className="space-y-4 p-4">
		{comments?.map((commen) => (
			<Link key={commen?.id} href={`/comments/${commen?.id}`}>
			 <div  className="border p-2 rounded shadow" >
				<h3 className="text-lg font-semibold">{commen?.name}</h3>
			</div>
			</Link>  
		))}
	</div>
	)
}

export default Comments
