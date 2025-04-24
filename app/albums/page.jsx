import Link from 'next/link'
import React from 'react'

const Albums = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/albums')
  const albums = await response.json()

	return (
		<div className="space-y-4 p-4">
		{albums?.map((album) => (
			<Link key={album?.id} href={`/albums/${album?.id}`}>
			 <div  className="border p-2 rounded shadow" >
				<h3 className="text-lg font-semibold">{album?.title}</h3>
			</div>
			</Link>  
		))}
	</div>
	)
}

export default Albums
