import Link from 'next/link'
import React from 'react'

const Users = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
	return (
		<div className="space-y-4 p-4">
		{users?.map((user) => (
			<Link key={user?.id} href={`/users/${user?.id}`}>
			 <div  className="border p-2 rounded shadow" >
				<h3 className="text-lg font-semibold">{user?.name}</h3>
				<h3 className="text-lg font-semibold">{user?.username}</h3>
				<h3 className="text-lg font-semibold">{user?.email}</h3>
				<h3 className="text-lg font-semibold">{user?.address.street} {user?.address.suite} {user?.address.city}</h3>
				<h3 className="text-lg font-semibold">{user?.phone}</h3>
				<h3 className="text-lg font-semibold">{user?.website}</h3>
				<h3 className="text-lg font-semibold">{user?.company.name}</h3>

			</div>
			</Link>  
		))}
	</div>
	)
}

export default Users